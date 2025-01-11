import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({
    basics: true,
    flowControl: false,
    methods: false,
    arrays: false,
    strings: false,
    oop: false,
    exceptions: false,
    collections: false,
    files: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderLink = (to: string, text: string) => (
    <Link 
      to={to}
      className={`block px-4 py-1.5 text-sm ${
        location.pathname === to 
          ? 'text-white bg-gray-800' 
          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
      }`}
    >
      {text}
    </Link>
  );

  return (
    <div className="fixed top-[64px] left-0 h-[calc(100vh-64px)] w-64 bg-gray-800 text-gray-100 overflow-y-auto border-r border-gray-700">
      <nav className="py-14 space-y-4">
        {/* Java Basics Section */}
        <div>
          <button
            onClick={() => toggleSection('basics')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700"
          >
            <span>Java Basics</span>
            {openSections.basics ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.basics && (
            <div className="space-y-1">
              {renderLink('/java-basics/introduction', 'Introduction')}
              {renderLink('/java-basics/hello-world', 'Hello World')}
              {renderLink('/java-basics/java-syntax', 'Java Syntax')}
              {renderLink('/java-basics/identifiers', 'Identifiers')}
              {renderLink('/java-basics/keywords', 'Keywords')}
              {renderLink('/java-basics/data-types', 'Data Types')}
              {renderLink('/java-basics/variables', 'Variables')}
              {renderLink('/java-basics/variable-scope', 'Variable Scope')}
              {renderLink('/java-basics/operators', 'Operators')}
              {renderLink('/java-basics/user-input', 'User Input')}
              {renderLink('/java-basics/type-casting', 'Type Casting')}
              {renderLink('/java-basics/comments', 'Comments')}
            </div>
          )}
        </div>

        {/* Flow Control Section */}
        <div>
          <button
            onClick={() => toggleSection('flowControl')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700 mt-2"
          >
            <span>Flow Control</span>
            {openSections.flowControl ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.flowControl && (
            <div className="space-y-1">
              {renderLink('/java-flow-control/if-statement', 'If Statement')}
              {renderLink('/java-flow-control/if-else', 'If-Else')}
              {renderLink('/java-flow-control/if-else-if', 'If-Else-If')}
              {renderLink('/java-flow-control/switch', 'Switch')}
              {renderLink('/java-flow-control/for-loop', 'For Loop')}
              {renderLink('/java-flow-control/while-loop', 'While Loop')}
              {renderLink('/java-flow-control/do-while', 'Do-While')}
              {renderLink('/java-flow-control/break', 'Break')}
              {renderLink('/java-flow-control/continue', 'Continue')}
              {renderLink('/java-flow-control/return', 'Return')}
              {renderLink('/java-flow-control/enhanced-for', 'Enhanced For')}
            </div>
          )}
        </div>

        {/* Methods Section */}
        <div>
          <button
            onClick={() => toggleSection('methods')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700 mt-2"
          >
            <span>Methods</span>
            {openSections.methods ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.methods && (
            <div className="space-y-1">
              {renderLink('/java-methods/intro', 'Introduction')}
              {renderLink('/java-methods/declaration', 'Declaration')}
              {renderLink('/java-methods/parameters', 'Parameters')}
              {renderLink('/java-methods/calling', 'Method Calling')}
              {renderLink('/java-methods/static-vs-instance', 'Static vs Instance')}
              {renderLink('/java-methods/access-modifiers', 'Access Modifiers')}
              {renderLink('/java-methods/command-line-args', 'Command Line Args')}
              {renderLink('/java-methods/varargs', 'Varargs')}
              {renderLink('/java-methods/overloading', 'Method Overloading')}
              {renderLink('/java-methods/recursion', 'Recursion')}
            </div>
          )}
        </div>

        {/* Arrays Section */}
        <div>
          <button
            onClick={() => toggleSection('arrays')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700 mt-2"
          >
            <span>Arrays</span>
            {openSections.arrays ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.arrays && (
            <div className="space-y-1">
              {renderLink('/java-arrays/introduction', 'Introduction')}
              {renderLink('/java-arrays/declaration', 'Declaration')}
              {renderLink('/java-arrays/initialization', 'Initialization')}
              {renderLink('/java-arrays/access', 'Array Access')}
              {renderLink('/java-arrays/multidimensional', 'Multidimensional')}
              {renderLink('/java-arrays/jagged-arrays', 'Jagged Arrays')}
              {renderLink('/java-arrays/methods', 'Array Methods')}
              {renderLink('/java-arrays/sorting', 'Sorting')}
              {renderLink('/java-arrays/searching', 'Searching')}
            </div>
          )}
        </div>

        {/* Strings Section */}
        <div>
          <button
            onClick={() => toggleSection('strings')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700 mt-2"
          >
            <span>Strings</span>
            {openSections.strings ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.strings && (
            <div className="space-y-1">
              {renderLink('/java-strings/introduction', 'Introduction')}
              {renderLink('/java-strings/creation', 'String Creation')}
              {renderLink('/java-strings/methods', 'String Methods')}
              {renderLink('/java-strings/string-pool', 'String Pool')}
              {renderLink('/java-strings/immutability', 'Immutability')}
              {renderLink('/java-strings/comparison', 'String Comparison')}
              {renderLink('/java-strings/string-buffer', 'StringBuffer')}
              {renderLink('/java-strings/string-builder', 'StringBuilder')}
            </div>
          )}
        </div>

        {/* OOP Concepts Section */}
        <div>
          <button
            onClick={() => toggleSection('oop')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700 mt-2"
          >
            <span>OOP Concepts</span>
            {openSections.oop ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.oop && (
            <div className="space-y-1">
              {renderLink('/java-oop/introduction', 'Introduction')}
              {renderLink('/java-oop/classes-objects', 'Classes & Objects')}
              {renderLink('/java-oop/constructors', 'Constructors')}
              {renderLink('/java-oop/inheritance', 'Inheritance')}
              {renderLink('/java-oop/polymorphism', 'Polymorphism')}
              {renderLink('/java-oop/abstraction', 'Abstraction')}
              {renderLink('/java-oop/encapsulation', 'Encapsulation')}
              {renderLink('/java-oop/abstract-classes', 'Abstract')}
              {renderLink('/java-oop/interfaces', 'Interfaces')}
            </div>
          )}
        </div>

        {/* Exception Handling Section */}
        <div>
          <button
            onClick={() => toggleSection('exceptions')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700 mt-2"
          >
            <span>Exception Handling</span>
            {openSections.exceptions ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.exceptions && (
            <div className="space-y-1">
              {renderLink('/java-exceptions/introduction', 'Introduction')}
              {renderLink('/java-exceptions/try-catch', 'Try-Catch')}
              {renderLink('/java-exceptions/multiple-catch', 'Multiple Catch')}
              {renderLink('/java-exceptions/throw-throws', 'Throw & Throws')}
              {renderLink('/java-exceptions/finally', 'Finally Block')}
              {renderLink('/java-exceptions/custom-exceptions', 'Custom Exceptions')}
            </div>
          )}
        </div>

        {/* Collections Section */}
        <div>
          <button
            onClick={() => toggleSection('collections')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700 mt-2"
          >
            <span>Collections</span>
            {openSections.collections ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.collections && (
            <div className="space-y-1">
              {renderLink('/java-collections/introduction', 'Introduction')}
              {renderLink('/java-collections/collection-interface', 'Collection Interface')}
              {renderLink('/java-collections/list-interface', 'List Interface')}
              {renderLink('/java-collections/array-list', 'ArrayList')}
              {renderLink('/java-collections/linked-list', 'LinkedList')}
              {renderLink('/java-collections/hashset', 'HashSet')}
              {renderLink('/java-collections/treeset', 'TreeSet')}
              {renderLink('/java-collections/hashmap', 'HashMap')}
              {renderLink('/java-collections/treemap', 'TreeMap')}
            </div>
          )}
        </div>

        {/* Files Section */}
        <div>
          <button
            onClick={() => toggleSection('files')}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold hover:bg-gray-700 mt-2"
          >
            <span>File Handling</span>
            {openSections.files ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {openSections.files && (
            <div className="space-y-1">
              {renderLink('/java-files/introduction', 'Introduction')}
              {renderLink('/java-files/file-class', 'File Class')}
              {renderLink('/java-files/file-reader', 'FileReader')}
              {renderLink('/java-files/file-writer', 'FileWriter')}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;