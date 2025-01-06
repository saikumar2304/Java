import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-gray-100 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Java Guide
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/playground" className="hover:text-gray-300">
              Playground
            </Link>
            <Link to="/search" className="hover:text-gray-300">
              Search
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;