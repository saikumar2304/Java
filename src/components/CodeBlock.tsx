import React from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  label?: string;
}

export default function CodeBlock({ code, label }: CodeBlockProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative group">
      {label && (
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">
          {label}
        </span>
      )}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 relative">
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Copy to clipboard"
        >
          <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </button>
        <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}