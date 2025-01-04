import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Moon, Sun, Search, Play, Layout } from 'lucide-react';
import { javaTypes } from '../data/types';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isTypesOpen, setIsTypesOpen] = useState(false);

  const typeCategories = {
    'Basic Types': ['String', 'Character', 'Boolean', 'Number'],
    'Collections': ['Array', 'List', 'Set', 'Map', 'Collection'],
    'Utilities': ['Date', 'Stream', 'Optional'],
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">Java Methods</span>
            </Link>

            <div className="relative group">
              <button
                onClick={() => setIsTypesOpen(!isTypesOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Data Types
              </button>
              
              {isTypesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  {Object.entries(typeCategories).map(([category, types]) => (
                    <div key={category} className="p-4">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        {category}
                      </h3>
                      <div className="space-y-2">
                        {types.map(type => (
                          <Link
                            key={type}
                            to={`/type/${type.toLowerCase()}`}
                            className="block px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                            onClick={() => setIsTypesOpen(false)}
                          >
                            {type}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/playground"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Play className="h-5 w-5" />
              <span>Playground</span>
            </Link>

            <Link
              to="/compare"
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Layout className="h-5 w-5" />
              <span>Compare</span>
            </Link>

            <Link
              to="/search"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Link>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}