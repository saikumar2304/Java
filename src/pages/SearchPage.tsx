import React, { useState, useMemo } from 'react';
import { javaTypes } from '../data/types';
import MethodCard from '../components/MethodCard';
import { Search } from 'lucide-react';
import { useMethodSearch } from '../hooks/useMethodSearch';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const allMethods = useMemo(() => 
    javaTypes.flatMap(type => 
      type.methods.map(method => ({
        ...method,
        typeName: type.name
      }))
    ), []
  );

  const filteredMethods = useMethodSearch(allMethods, searchQuery);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Search Methods</h1>
        
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by method name, description, or data type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
            autoFocus
          />
        </div>

        {searchQuery && (
          <p className="text-gray-400 mb-4">
            Found {filteredMethods.length} results
          </p>
        )}

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

        {!searchQuery && (
          <div className="text-center text-gray-400 mt-8">
            Start typing to search through all Java methods
          </div>
        )}
      </div>
    </div>
  );
}