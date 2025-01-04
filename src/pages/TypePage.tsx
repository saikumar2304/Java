import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { javaTypes } from '../data/types';
import MethodCard from '../components/MethodCard';
import { Search } from 'lucide-react';

export default function TypePage() {
  const { typeName } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const typeData = javaTypes.find(
    type => type.name.toLowerCase() === typeName?.toLowerCase()
  );

  if (!typeData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
            Type not found
          </h1>
        </div>
      </div>
    );
  }

  const filteredMethods = typeData.methods.filter(method => 
    method.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    method.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (method.category && method.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {typeData.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {typeData.description}
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search methods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMethods.map((method) => (
            <MethodCard key={method.name} method={method} />
          ))}
        </div>
      </div>
    </div>
  );
}