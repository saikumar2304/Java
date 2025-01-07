import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from './ui/button';

interface HandsOnExerciseProps {
  title: string;
  description: string;
  initialCode: string;
  solution: string;
  testCases: Array<{
    input: string;
    expectedOutput: string;
  }>;
}

const HandsOnExercise: React.FC<HandsOnExerciseProps> = ({
  title,
  description,
  initialCode,
  solution,
  testCases
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const handleRunCode = async () => {
    try {
      const response = await fetch('http://localhost:3001/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      
      const data = await response.json();
      setOutput(data.output || data.error || 'No output');
    } catch (error) {
      setOutput('Error running code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <p className="text-gray-300">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Code Editor</h2>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <Editor
                height="400px"
                defaultLanguage="java"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Button onClick={handleRunCode}>Run Code</Button>
              <Button 
                variant="secondary"
                onClick={() => setShowSolution(!showSolution)}
              >
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Output</h2>
            <div className="bg-gray-800 rounded-lg p-4 h-[200px] overflow-auto">
              <pre className="text-gray-300">{output}</pre>
            </div>

            {showSolution && (
              <>
                <h2 className="text-xl font-semibold mt-8 mb-4">Solution</h2>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <Editor
                    height="200px"
                    defaultLanguage="java"
                    theme="vs-dark"
                    value={solution}
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      fontSize: 14,
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandsOnExercise; 