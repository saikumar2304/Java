import React, { useState } from 'react';
import CodeBlock from './CodeBlock';
import { Copy, Check } from 'lucide-react';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface McqCardProps {
  id: number;
  question: string;
  options: Option[];
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  hasCode?: boolean;
}

const McqCard: React.FC<McqCardProps> = ({
  id,
  question,
  options,
  explanation,
  difficulty,
  category,
  hasCode = false
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setShowExplanation(true);
  };

  const copyCode = () => {
    const codeMatch = question.match(/```java\n([\s\S]*?)```/);
    if (codeMatch) {
      navigator.clipboard.writeText(codeMatch[1]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
    }
  };

  const renderQuestion = () => {
    if (!hasCode) return question;

    const parts = question.split(/```java\n([\s\S]*?)```/);
    return (
      <>
        {parts[0]}
        <div className="relative my-2">
          <CodeBlock code={parts[1]} language="java" />
          <button
            onClick={copyCode}
            className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-700/50 hover:bg-gray-700 transition-colors"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        {parts[2]}
      </>
    );
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700">
      <div className="p-4">
        {/* Question Header */}
        <div className="flex items-center justify-between text-xs mb-3">
          <span className="text-gray-400">Q{id}</span>
          <div className="flex items-center gap-2">
            <span className={getDifficultyColor()}>{difficulty}</span>
          </div>
        </div>

        {/* Question */}
        <div className="text-sm mb-4">{renderQuestion()}</div>

        {/* Options */}
        <div className="space-y-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full text-left p-2 rounded text-xs transition-colors
                ${selectedOption === index
                  ? option.isCorrect
                    ? 'bg-green-500/10 border-green-500/50'
                    : 'bg-red-500/10 border-red-500/50'
                  : 'bg-gray-700/50 hover:bg-gray-700'
                } border`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-3 p-2 bg-blue-500/10 rounded-md border border-blue-500/20">
            <p className="text-xs text-blue-300">{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default McqCard; 