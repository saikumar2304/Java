import React from 'react';
import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Code2 className="h-5 w-5 text-indigo-500" />
            <span className="text-gray-600 dark:text-gray-300">Java Methods Documentation</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by</span>
            <a 
              href="https://github.com/saikumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
            >
              Sai Kumar
            </a>
          </div>
          
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}