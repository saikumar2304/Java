import React from 'react';
import { JavaType } from '../data/types';

interface TypeSelectorProps {
  types: JavaType[];
  selectedTypes: string[];
  onTypeToggle: (typeName: string) => void;
}

export default function TypeSelector({ types, selectedTypes, onTypeToggle }: TypeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {types.map(type => (
        <button
          key={type.name}
          onClick={() => onTypeToggle(type.name)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedTypes.includes(type.name)
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
}