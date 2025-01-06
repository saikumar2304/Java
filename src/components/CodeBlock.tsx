import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-1.5 rounded-lg bg-gray-800 dark:bg-gray-700 
                 text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600 
                 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:outline-none z-10"
        title="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1rem',
            borderRadius: '0.375rem',
            backgroundColor: '#1e1e1e',
            fontSize: '13px',
            minWidth: '100%',
          }}
          showLineNumbers={true}
          wrapLines={false}
          lineNumberStyle={{
            minWidth: '2em',
            paddingRight: '1em',
            color: '#6e7681',
            textAlign: 'right',
            borderRight: '1px solid #404040',
            marginRight: '1em',
            fontSize: '12px'
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;