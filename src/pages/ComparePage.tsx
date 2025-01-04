import React, { useState } from 'react';
import { javaTypes } from '../data/types';
import MethodCard from '../components/MethodCard';
import { Search } from 'lucide-react';
import TypeSelector from '../components/TypeSelector';
import { useCompareTypes } from '../hooks/useCompareTypes';

export default function ComparePage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTypeToggle = (typeName: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeName)
        ? prev.filter(t => t !== typeName)
        : [...prev, typeName]
    );
  };

  const filteredMethods = useCompareTypes(javaTypes, selectedTypes, searchQuery);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Compare Methods</h1>
          <p className="text-gray-300 mb-6">Select data types to compare their methods</p>
          
          <TypeSelector
            types={javaTypes}
            selectedTypes={selectedTypes}
            onTypeToggle={handleTypeToggle}
          />

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search methods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMethods.map((method, index) => (
            <div key={`${method.typeName}-${method.name}-${index}`} className="relative">
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                {method.typeName}
              </span>
              <MethodCard method={method} />
            </div>
          ))}
        </div>

        {selectedTypes.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            Select data types above to compare their methods
          </div>
        )}
      </div>
    </div>
  );
}