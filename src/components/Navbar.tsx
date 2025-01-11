import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Code2, BookOpen, Layout, BrainCircuit } from 'lucide-react';

const Navbar: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const location = useLocation();

  return (
    <>
      {/* Spacer div to prevent content from going under fixed navbar */}
      <div className="h-16"></div>

      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Alert Banner */}
        {showAlert && (
          <div className="bg-indigo-600 text-white">
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-sm font-medium">
                  ⚠️ Note: Hands-on exercises are currently view-only. Please use your local IDE for practice.
                </span>
              </div>
              <button onClick={() => setShowAlert(false)} className="text-white hover:text-gray-200">×</button>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="bg-gray-900 border-b border-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <Code2 className="h-6 w-6 text-indigo-400" />
                  <span className="text-xl font-bold text-white">Java Guide</span>
                </Link>
              </div>

              {/* Center Navigation */}
              <div className="flex items-center space-x-1">
                <Link 
                  to="/"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === '/' ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Layout className="h-4 w-4" />
                    <span>Home</span>
                  </div>
                </Link>
                <Link 
                  to="/hands-on"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname.includes('/hands-on') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Hands-On</span>
                  </div>
                </Link>
                <Link 
                  to="/java-mcqs"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname.includes('/mcqs') ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <BrainCircuit className="h-4 w-4" />
                    <span>MCQs</span>
                  </div>
                </Link>
              </div>

              {/* GitHub Button */}
              <div>
                <a
                  href="https://github.com/saikumar2304/Java"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>Star on GitHub</span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-sm">⭐️</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;