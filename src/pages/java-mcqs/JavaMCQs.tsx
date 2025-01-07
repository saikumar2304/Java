import React, { useState } from 'react';
import McqCard from '../../components/McqCard';
import { introductionMCQs } from '../../data/mcqs/introduction';
import { controlFlowMCQs } from '../../data/mcqs/control-flow';
import { stringMCQs } from '../../data/mcqs/strings';
import { arrayMCQs } from '../../data/mcqs/arrays';
import { interfaceMCQs } from '../../data/mcqs/interfaces';
import McqTips from '../../components/McqTips';
import { methodMCQs } from '../../data/mcqs/methods';
import { oopMCQs } from '../../data/mcqs/oop';
import { collectionMCQs } from '../../data/mcqs/collections';

type Category = 'basics' | 'control-flow' | 'strings' | 'arrays' | 'interfaces' | 'methods' | 'oop' | 'collections';

const JavaMCQs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('basics');

  const categories = [
    { id: 'basics', name: 'Java Basics', count: introductionMCQs.length },
    { id: 'control-flow', name: 'Control Flow', count: controlFlowMCQs.length },
    { id: 'strings', name: 'Strings', count: stringMCQs.length },
    { id: 'arrays', name: 'Arrays', count: arrayMCQs.length },
    { id: 'interfaces', name: 'Interfaces', count: interfaceMCQs.length },
    { id: 'methods', name: 'Methods', count: methodMCQs.length },
    { id: 'oop', name: 'OOP Concepts', count: oopMCQs.length },
    { id: 'collections', name: 'Collections', count: collectionMCQs.length }
  ];

  const getMCQs = () => {
    switch(selectedCategory) {
      case 'basics':
        return introductionMCQs;
      case 'control-flow':
        return controlFlowMCQs;
      case 'strings':
        return stringMCQs;
      case 'arrays':
        return arrayMCQs;
      case 'interfaces':
        return interfaceMCQs;
      case 'methods':
        return methodMCQs;
      case 'oop':
        return oopMCQs;
      case 'collections':
        return collectionMCQs;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java MCQs</h1>
          <p className="text-gray-300 mb-6">
            Test your Java knowledge with these multiple-choice questions.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                  ${selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
              >
                {category.name}
                <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-700 text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Tips Section */}
          <McqTips category={selectedCategory} />

          {/* MCQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getMCQs().map(mcq => (
              <McqCard
                key={`${selectedCategory}-${mcq.id}`}
                {...mcq}
                sectionCategory={selectedCategory}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaMCQs; 