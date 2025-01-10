import React, { useState } from 'react';
import { Check, X, Play, Code2, RefreshCw, Download } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

interface TestCase {
  id: string;
  type: 'output' | 'structure' | 'method' | 'class' | 'variable';
  description: string;
  input: string;
  expectedOutput: string;
  points: number;
}

interface TestResult {
  testCase: TestCase;
  passed: boolean;
  actualOutput?: string;
  errorMessage?: string;
  executionTime?: number;
}

interface TestSummary {
  total: number;
  passed: number;
  failed: number;
  score: number;
  maxScore: number;
  executionTime: number;
}

interface HandsOnExerciseProps {
  title: string;
  description: string;
  initialCode: string;
  solution: string;
  testCases: TestCase[];
}

interface SummaryCardProps {
  title: string;
  value: string;
  color: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, color }) => (
  <div className="bg-gray-700 rounded-lg p-4">
    <h3 className="text-sm text-gray-400 mb-1">{title}</h3>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

const executeCode = async (code: string, input: string): Promise<string> => {
  try {
    const response = await fetch('http://localhost:3001/api/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, input }),
    });
    
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data.output || '';
  } catch (error) {
    console.error('Execution error:', error);
    throw new Error(`Execution failed: ${error.message}`);
  }
};

const HandsOnExercise: React.FC<HandsOnExerciseProps> = ({
  title,
  description,
  initialCode,
  solution,
  testCases
}) => {
  const [code, setCode] = useState(initialCode);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [summary, setSummary] = useState<TestSummary>({
    total: 0,
    passed: 0,
    failed: 0,
    score: 0,
    maxScore: 0,
    executionTime: 0
  });
  const [isRunning, setIsRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const checkStructure = (code: string, testCase: TestCase): boolean => {
    const structureChecks = {
      class: (code: string, expected: string) => {
        const classRegex = new RegExp(`class\\s+${expected}\\s*{`);
        return classRegex.test(code);
      },
      method: (code: string, expected: string) => {
        const methodRegex = new RegExp(`(public|private|protected)?\\s*\\w+\\s+${expected}\\s*\\(`);
        return methodRegex.test(code);
      },
      variable: (code: string, expected: string) => {
        const varRegex = new RegExp(`(public|private|protected)?\\s*\\w+\\s+${expected}\\s*[;=]`);
        return varRegex.test(code);
      }
    };

    switch (testCase.type) {
      case 'class':
      case 'method':
      case 'variable':
        return structureChecks[testCase.type](code, testCase.expectedOutput);
      case 'structure':
        return code.includes(testCase.expectedOutput);
      default:
        return false;
    }
  };

  const runTests = async () => {
    setIsRunning(true);
    const startTime = performance.now();
    const results: TestResult[] = [];
    let totalScore = 0;
    const maxScore = testCases.reduce((sum, tc) => sum + tc.points, 0);

    try {
      for (const testCase of testCases) {
        const testStartTime = performance.now();
        let passed = false;
        let actualOutput = '';
        let errorMessage = '';

        try {
          if (testCase.type === 'output') {
            actualOutput = await executeCode(code, testCase.input);
            passed = actualOutput.trim() === testCase.expectedOutput.trim();
          } else {
            passed = checkStructure(code, testCase);
            actualOutput = passed ? 'Structure valid' : 'Structure invalid';
          }

          if (passed) totalScore += testCase.points;
        } catch (error) {
          errorMessage = error.message;
          passed = false;
        }

        results.push({
          testCase,
          passed,
          actualOutput,
          errorMessage,
          executionTime: performance.now() - testStartTime
        });
      }

      setTestResults(results);
      setSummary({
        total: testCases.length,
        passed: results.filter(r => r.passed).length,
        failed: results.filter(r => !r.passed).length,
        score: totalScore,
        maxScore,
        executionTime: performance.now() - startTime
      });
    } catch (error) {
      console.error('Test execution failed:', error);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-300">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Code2 className="h-5 w-5 text-indigo-400" />
                  <h2 className="text-lg font-semibold text-white">Your Code</h2>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={runTests}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>Run Tests</span>
                  </button>
                  <button
                    onClick={() => setCode(initialCode)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 flex items-center space-x-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    <span>Reset</span>
                  </button>
                  <button
                    onClick={() => {
                      const blob = new Blob([code], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = 'solution.java';
                      link.click();
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
              <CodeMirror
                value={code}
                height="500px"
                theme={vscodeDark}
                extensions={[java()]}
                onChange={(value) => setCode(value)}
                className="border border-gray-700 rounded-md"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <TestSummaryView summary={summary} />
              <TestResultsTable results={testResults} />
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="text-indigo-400 hover:text-indigo-300"
              >
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </button>
              {showSolution && (
                <CodeMirror
                  value={solution}
                  height="300px"
                  theme={vscodeDark}
                  extensions={[java()]}
                  editable={false}
                  className="mt-4 border border-gray-700 rounded-md"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestSummaryView: React.FC<{ summary: TestSummary }> = ({ summary }) => (
  <div className="grid grid-cols-3 gap-4 mb-6">
    <SummaryCard
      title="Tests"
      value={`${summary.passed}/${summary.total}`}
      color="text-blue-400"
    />
    <SummaryCard
      title="Score"
      value={`${summary.score}/${summary.maxScore}`}
      color="text-green-400"
    />
    <SummaryCard
      title="Time"
      value={`${summary.executionTime.toFixed(2)}ms`}
      color="text-purple-400"
    />
  </div>
);

const TestResultsTable: React.FC<{ results: TestResult[] }> = ({ results }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-300">
      <thead className="text-xs uppercase bg-gray-700">
        <tr>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Test Case</th>
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Points</th>
          <th className="px-4 py-2">Expected</th>
          <th className="px-4 py-2">Actual</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index} className="border-b border-gray-700">
            <td className="px-4 py-2">
              {result.passed ? (
                <Check className="h-5 w-5 text-green-400" />
              ) : (
                <X className="h-5 w-5 text-red-400" />
              )}
            </td>
            <td className="px-4 py-2">{result.testCase.description}</td>
            <td className="px-4 py-2">{result.testCase.type}</td>
            <td className="px-4 py-2">{result.testCase.points}</td>
            <td className="px-4 py-2">{result.testCase.expectedOutput}</td>
            <td className="px-4 py-2">
              {result.errorMessage || result.actualOutput}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default HandsOnExercise;
