import React, { useState } from 'react';
import { Maximize2, Minimize2, Download, Upload, Copy, Play } from 'lucide-react';

interface EditorProps {
  code: string;
  onChange: (value: string) => void;
  onRun: () => void;
}

export default function Editor({ code, onChange, onRun }: EditorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.java';
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
        onChange(content);
      };
      reader.readAsText(file);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={`relative ${isExpanded ? 'fixed inset-0 z-50 p-4 bg-gray-900' : ''}`}>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
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
                accept=".java,.txt"
                onChange={handleUpload}
                className="hidden"
              />
            </label>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-600"
            >
              {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
        </div>
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-[400px] bg-gray-800 text-gray-100 p-4 font-mono text-sm resize-none focus:outline-none"
            spellCheck="false"
          />
          <button
            onClick={onRun}
            className="absolute bottom-4 right-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center space-x-2"
          >
            <Play size={18} />
            <span>Run</span>
          </button>
        </div>
      </div>
    </div>
  );
}