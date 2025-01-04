import React from 'react';
import { Terminal } from 'lucide-react';

interface OutputProps {
  output: string;
}

export default function Output({ output }: OutputProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
      <div className="flex items-center p-4 bg-gray-700">
        <Terminal className="text-gray-400 mr-2" size={18} />
        <span className="text-gray-200">Output</span>
      </div>
      <div className="p-4 font-mono text-sm">
        <pre className="whitespace-pre-wrap text-gray-300">
          {output || 'Run your code to see the output...'}
        </pre>
      </div>
    </div>
  );
}