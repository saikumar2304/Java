import React, { useState } from 'react';
import Editor, { OnChange } from '@monaco-editor/react';
import { Button } from '../../components/ui/button';

const Playground: React.FC = () => {
  const [code, setCode] = useState<string>(
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
  );
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEditorChange: OnChange = (value) => {
    setCode(value || '');
  };

  const handleRunCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.error) {
        setOutput(`Error:\n${data.error}`);
      } else {
        setOutput(data.output || 'No output');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput(`Error running code: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Java Playground</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Editor Section */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Code Editor</h2>
            <div className="h-[500px] border border-gray-700 rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="java"
                theme="vs-dark"
                value={code}
                onChange={handleEditorChange}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>
            <div className="mt-4">
              <Button
                onClick={handleRunCode}
                disabled={isLoading}
                variant="primary"
              >
                {isLoading ? 'Running...' : 'Run Code'}
              </Button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Output</h2>
            <div className="h-[500px] bg-black rounded-lg p-4 font-mono overflow-auto">
              <pre className="whitespace-pre-wrap">{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground; 