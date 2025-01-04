import React, { useState } from 'react';
import { Play, Copy, Download, Upload } from 'lucide-react';
import CodeEditor from './CodeEditor';
import Output from './Output';
import { compileAndRun } from '../../services/codeService';

const DEFAULT_CODE = `// Try Java methods here
public class Main {
    public static void main(String[] args) {
        // String methods
        String text = "Hello World";
        System.out.println("Length: " + text.length());
        System.out.println("Uppercase: " + text.toUpperCase());
        
        // Math methods
        System.out.println("Square root of 25: " + Math.sqrt(25));
        System.out.println("Power of 2^3: " + Math.pow(2, 3));
        
        // Character methods
        System.out.println("Is 'A' letter? " + Character.isLetter('A'));
        System.out.println("To lowercase: " + Character.toLowerCase('A'));
    }
}`;

export default function LiveEditor() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Main.java';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setCode(content);
      };
      reader.readAsText(file);
    }
  };

  const runCode = async () => {
    setIsLoading(true);
    setOutput('Compiling and running...');
    
    try {
      const result = await compileAndRun(code);
      setOutput(result.error || result.output || 'No output');
    } catch (err) {
      setOutput('Error: Failed to compile code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="flex items-center justify-between p-4 bg-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-600"
              title="Copy code"
            >
              <Copy size={18} />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-600"
              title="Download code"
            >
              <Download size={18} />
            </button>
            <label className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-600 cursor-pointer">
              <Upload size={18} />
              <input
                type="file"
                accept=".java"
                onChange={handleUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
        <div className="relative">
          <CodeEditor code={code} onChange={setCode} />
          <button
            onClick={runCode}
            disabled={isLoading}
            className={`absolute bottom-4 right-4 px-4 py-2 rounded-lg flex items-center space-x-2 ${
              isLoading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700'
            } text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
          >
            <Play size={18} />
            <span>{isLoading ? 'Running...' : 'Run'}</span>
          </button>
        </div>
      </div>
      <Output output={output} />
    </div>
  );
}