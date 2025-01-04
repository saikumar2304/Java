import React from 'react';
import { Copy } from 'lucide-react';
import { Method } from '../data/types';

interface MethodCardProps {
  method: Method;
}

export default function MethodCard({ method }: MethodCardProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {method.name}
        </h3>
        {method.category && (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
            {method.category}
          </span>
        )}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {method.description}
      </p>

      <div className="relative mt-4 group min-h-[100px]">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <button
            onClick={() => copyToClipboard(method.example)}
            className="absolute right-2 top-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Copy to clipboard"
          >
            <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </button>
          <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words">
            <code>{method.example}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}