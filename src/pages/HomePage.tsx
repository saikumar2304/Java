import React from 'react';
import { Link } from 'react-router-dom';
import { javaTypes } from '../data/types';
import { BookOpen, Search, Code, Layout, Play, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Java Methods Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Explore, test, and learn Java methods with our interactive documentation. 
              Find the right methods for your code with our comprehensive guide.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/playground"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Try Playground</span>
              </Link>
              <Link
                to="/search"
                className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search Methods</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Data Types Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Data Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {javaTypes.map((type) => (
            <Link
              key={type.name}
              to={`/type/${type.name.toLowerCase()}`}
              className="group bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{type.name}</h3>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-300 mb-4">{type.description}</p>
              <p className="text-sm text-gray-400">
                {type.methods.length} methods available
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-600 rounded-lg mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Playground</h3>
              <p className="text-gray-300">Test Java methods in real-time with our code editor</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-indigo-600 rounded-lg mb-4">
                <Layout className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Method Comparison</h3>
              <p className="text-gray-300">Compare methods across different data types</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-purple-600 rounded-lg mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Search</h3>
              <p className="text-gray-300">Find methods quickly with our powerful search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}