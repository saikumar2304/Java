import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <>
      {/* Spacer div to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
      
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Main Links */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold text-white">Java Guide</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/playground" 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Playground
                </Link>
                <Link 
                  to="/hands-on" 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Hands-On
                </Link>
                <Link 
                  to="/java-mcqs" 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  MCQs
                </Link>
              </div>
            </div>

            {/* Right side links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/saikumar2304" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;