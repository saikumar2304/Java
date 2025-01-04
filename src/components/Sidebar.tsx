import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, ChevronDown, Code2, Play, Layout, Database, Wrench } from 'lucide-react';

interface CategoryProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function Category({ title, isOpen, onToggle, children }: CategoryProps) {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 ml-4 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const location = useLocation();
  const [openCategories, setOpenCategories] = useState({
    basics: true,
    collections: false,
    utilities: false,
    tools: false
  });

  const toggleCategory = (category: keyof typeof openCategories) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const basicTypes = [
    { name: 'String', path: '/type/string' },
    { name: 'Character', path: '/type/character' },
    { name: 'Boolean', path: '/type/boolean' },
    { name: 'Number', path: '/type/number' }
  ];

  const collections = [
    { name: 'Array', path: '/type/array' },
    { name: 'List', path: '/type/list' },
    { name: 'Set', path: '/type/set' },
    { name: 'Map', path: '/type/map' },
    { name: 'Collection', path: '/type/collection' }
  ];

  const utilities = [
    { name: 'Date', path: '/type/date' },
    { name: 'Stream', path: '/type/stream' },
    { name: 'Optional', path: '/type/optional' }
  ];

  const tools = [
    { name: 'Playground', path: '/playground', icon: Play },
    { name: 'Compare Methods', path: '/compare', icon: Layout },
    { name: 'Search', path: '/search', icon: Search }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 fixed left-0 top-16 bottom-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <div className="p-4">
        <Link
          to="/"
          className={`flex items-center space-x-2 px-4 py-2 mb-6 rounded-lg ${
            location.pathname === '/' 
              ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <BookOpen className="h-5 w-5" />
          <span>Documentation</span>
        </Link>

        <Category
          title="Basic Types"
          isOpen={openCategories.basics}
          onToggle={() => toggleCategory('basics')}
        >
          {basicTypes.map(type => (
            <Link
              key={type.path}
              to={type.path}
              className={`block px-4 py-2 rounded-lg ${
                isActive(type.path)
                  ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {type.name}
            </Link>
          ))}
        </Category>

        <Category
          title="Collections"
          isOpen={openCategories.collections}
          onToggle={() => toggleCategory('collections')}
        >
          {collections.map(type => (
            <Link
              key={type.path}
              to={type.path}
              className={`block px-4 py-2 rounded-lg ${
                isActive(type.path)
                  ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {type.name}
            </Link>
          ))}
        </Category>

        <Category
          title="Utilities"
          isOpen={openCategories.utilities}
          onToggle={() => toggleCategory('utilities')}
        >
          {utilities.map(type => (
            <Link
              key={type.path}
              to={type.path}
              className={`block px-4 py-2 rounded-lg ${
                isActive(type.path)
                  ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {type.name}
            </Link>
          ))}
        </Category>

        <Category
          title="Tools"
          isOpen={openCategories.tools}
          onToggle={() => toggleCategory('tools')}
        >
          {tools.map(tool => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.path}
                to={tool.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isActive(tool.path)
                    ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tool.name}</span>
              </Link>
            );
          })}
        </Category>
      </div>
    </div>
  );
}