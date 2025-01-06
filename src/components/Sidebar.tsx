import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { BiQuestionMark } from 'react-icons/bi';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  // State for collapsible sections
  const [openSections, setOpenSections] = useState({
    basics: true,
    flowControl: true,
    methods: true,
    arrays: true,
    strings: true,
    oop: true,
    interfaces: true,
    collections: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const linkClass = (path: string) => `
    block px-3 py-2 rounded-md text-sm transition-colors
    ${isActive(path) 
      ? 'bg-gray-700 text-white' 
      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}
  `;

  const sectionClass = (isOpen: boolean) => `
    mb-2 transition-all duration-200
    ${isOpen ? 'pb-2' : ''}
  `;

  const headerClass = `
    flex items-center justify-between px-2 py-2 text-sm font-semibold text-gray-400
    hover:text-gray-200 cursor-pointer transition-colors
  `;

  const sidebarItems = [
    {
      title: "Java MCQs",
      path: "/java-mcqs",
      icon: BiQuestionMark,
      items: []
    }
  ];

  return (
    <div className="bg-gray-800 text-gray-100 h-full overflow-y-auto px-3 py-4">
      <nav className="space-y-1">
        {/* Java Basics */}
        <div className={sectionClass(openSections.basics)}>
          <div 
            className={headerClass}
            onClick={() => toggleSection('basics')}
          >
            <span>Java Basics</span>
            {openSections.basics ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          {openSections.basics && (
            <div className="ml-2 space-y-1">
              <Link to="/java-basics/intro" className={linkClass('/java-basics/intro')}>
                Introduction
              </Link>
              <Link to="/java-basics/hello-world" className={linkClass('/java-basics/hello-world')}>
                Hello World
              </Link>
              <Link to="/java-basics/syntax" className={linkClass('/java-basics/syntax')}>
                Java Syntax
              </Link>
              <Link to="/java-basics/identifiers" className={linkClass('/java-basics/identifiers')}>
                Identifiers
              </Link>
              <Link to="/java-basics/keywords" className={linkClass('/java-basics/keywords')}>
                Keywords
              </Link>
              <Link to="/java-basics/data-types" className={linkClass('/java-basics/data-types')}>
                Data Types
              </Link>
              <Link to="/java-basics/variables" className={linkClass('/java-basics/variables')}>
                Variables
              </Link>
              <Link to="/java-basics/variable-scope" className={linkClass('/java-basics/variable-scope')}>
                Variable Scope
              </Link>
              <Link to="/java-basics/operators" className={linkClass('/java-basics/operators')}>
                Operators
              </Link>
              <Link to="/java-basics/user-input" className={linkClass('/java-basics/user-input')}>
                User Input
              </Link>
            </div>
          )}
        </div>

        {/* Flow Control */}
        <div className={sectionClass(openSections.flowControl)}>
          <div 
            className={headerClass}
            onClick={() => toggleSection('flowControl')}
          >
            <span>Flow Control</span>
            {openSections.flowControl ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          {openSections.flowControl && (
            <div className="ml-2 space-y-1">
              <Link to="/java-flow-control/if-statement" className={linkClass('/java-flow-control/if-statement')}>
                If Statement
              </Link>
              <Link to="/java-flow-control/if-else" className={linkClass('/java-flow-control/if-else')}>
                If-Else
              </Link>
              <Link to="/java-flow-control/if-else-if" className={linkClass('/java-flow-control/if-else-if')}>
                If-Else-If
              </Link>
              <Link to="/java-flow-control/switch" className={linkClass('/java-flow-control/switch')}>
                Switch Statement
              </Link>
              <Link to="/java-flow-control/for-loop" className={linkClass('/java-flow-control/for-loop')}>
                For Loop
              </Link>
              <Link to="/java-flow-control/while-loop" className={linkClass('/java-flow-control/while-loop')}>
                While Loop
              </Link>
              <Link to="/java-flow-control/do-while" className={linkClass('/java-flow-control/do-while')}>
                Do While
              </Link>
              <Link to="/java-flow-control/break" className={linkClass('/java-flow-control/break')}>
                Break
              </Link>
              <Link to="/java-flow-control/continue" className={linkClass('/java-flow-control/continue')}>
                Continue
              </Link>
              <Link to="/java-flow-control/return" className={linkClass('/java-flow-control/return')}>
                Return
              </Link>
            </div>
          )}
        </div>

        {/* Methods */}
        <div className={sectionClass(openSections.methods)}>
          <div 
            className={headerClass}
            onClick={() => toggleSection('methods')}
          >
            <span>Methods</span>
            {openSections.methods ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          {openSections.methods && (
            <div className="ml-2 space-y-1">
              <Link to="/java-methods/intro" className={linkClass('/java-methods/intro')}>
                Introduction
              </Link>
              <Link to="/java-methods/declaration" className={linkClass('/java-methods/declaration')}>
                Declaration
              </Link>
              <Link to="/java-methods/parameters" className={linkClass('/java-methods/parameters')}>
                Parameters
              </Link>
              <Link to="/java-methods/calling" className={linkClass('/java-methods/calling')}>
                Method Calling
              </Link>
              {/* <Link to="/java-methods/return-type" className={linkClass('/java-methods/return-type')}>
                Return Type
              </Link> */}
              <Link to="/java-methods/static-vs-instance" className={linkClass('/java-methods/static-vs-instance')}>
                Static vs Instance
              </Link>
              <Link to="/java-methods/access-modifiers" className={linkClass('/java-methods/access-modifiers')}>
                Access Modifiers
              </Link>
              <Link to="/java-methods/overloading" className={linkClass('/java-methods/overloading')}>
                Method Overloading
              </Link>
              <Link to="/java-methods/recursion" className={linkClass('/java-methods/recursion')}>
                Recursion
              </Link>
              <Link to="/java-methods/varargs" className={linkClass('/java-methods/varargs')}>
                Varargs
              </Link>
              <Link to="/java-methods/command-line-args" className={linkClass('/java-methods/command-line-args')}>
                Command Line Args
              </Link>
              <Link to="/java-methods/return-types" className={linkClass('/java-methods/return-types')}>
                Return Types
              </Link>
              {/* <Link to="/java-methods/method-overriding" className={linkClass('/java-methods/method-overriding')}>
                Method Overriding
              </Link> */}
            </div>
          )}
        </div>

        {/* Arrays */}
        <div className={sectionClass(openSections.arrays)}>
          <div 
            className={headerClass}
            onClick={() => toggleSection('arrays')}
          >
            <span>Arrays</span>
            {openSections.arrays ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          {openSections.arrays && (
            <div className="ml-2 space-y-1">
              <Link to="/java-arrays/introduction" className={linkClass('/java-arrays/introduction')}>
                Introduction
              </Link>
              <Link to="/java-arrays/initialization" className={linkClass('/java-arrays/initialization')}>
                Initialization
              </Link>
              <Link to="/java-arrays/multidimensional" className={linkClass('/java-arrays/multidimensional')}>
                Multidimensional
              </Link>
              <Link to="/java-arrays/jagged-arrays" className={linkClass('/java-arrays/jagged-arrays')}>
                Jagged Arrays
              </Link>
              <Link to="/java-arrays/array-class-methods" className={linkClass('/java-arrays/array-class-methods')}>
                Array Class Methods
              </Link>
              {/* <Link to="/java-arrays/array-list" className={linkClass('/java-arrays/array-list')}>
                ArrayList
              </Link> */}
            </div>
          )}
        </div>

        {/* Strings */}
        <div className={sectionClass(openSections.strings)}>
          <div 
            className={headerClass}
            onClick={() => toggleSection('strings')}
          >
            <span>Strings</span>
            {openSections.strings ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          {openSections.strings && (
            <div className="ml-2 space-y-1">
              <Link to="/java-strings/introduction" className={linkClass('/java-strings/introduction')}>
                Introduction
              </Link>
              <Link to="/java-strings/string-class" className={linkClass('/java-strings/string-class')}>
                String Class
              </Link>
              <Link to="/java-strings/methods" className={linkClass('/java-strings/methods')}>
                String Methods
              </Link>
              <Link to="/java-strings/immutability" className={linkClass('/java-strings/immutability')}>
                Immutability
              </Link>
              <Link to="/java-strings/concatenation" className={linkClass('/java-strings/concatenation')}>
                Concatenation
              </Link>
              <Link to="/java-strings/comparison" className={linkClass('/java-strings/comparison')}>
                String Comparison
              </Link>
              <Link to="/java-strings/string-buffer" className={linkClass('/java-strings/string-buffer')}>
                StringBuffer
              </Link>
              <Link to="/java-strings/string-builder" className={linkClass('/java-strings/string-builder')}>
                StringBuilder
              </Link>
            </div>
          )}
        </div>

        {/* OOP */}
        <div className={sectionClass(openSections.oop)}>
          <div 
            className={headerClass}
            onClick={() => toggleSection('oop')}
          >
            <span>Object-Oriented Programming</span>
            {openSections.oop ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          {openSections.oop && (
            <div className="ml-2 space-y-1">
              <Link to="/java-oop/introduction" className={linkClass('/java-oop/introduction')}>
                Introduction
              </Link>
              <Link to="/java-oop/classes-objects" className={linkClass('/java-oop/classes-objects')}>
                Classes & Objects
              </Link>
              <Link to="/java-oop/constructors" className={linkClass('/java-oop/constructors')}>
                Constructors
              </Link>
              <Link to="/java-oop/object-class" className={linkClass('/java-oop/object-class')}>
                Object Class
              </Link>
              <Link to="/java-oop/abstraction" className={linkClass('/java-oop/abstraction')}>
                Abstraction
              </Link>
              <Link to="/java-oop/encapsulation" className={linkClass('/java-oop/encapsulation')}>
                Encapsulation
              </Link>
              <Link to="/java-oop/inheritance" className={linkClass('/java-oop/inheritance')}>
                Inheritance
              </Link>
              <Link to="/java-oop/polymorphism" className={linkClass('/java-oop/polymorphism')}>
                Polymorphism
              </Link>
              <Link to="/java-oop/method-overloading" className={linkClass('/java-oop/method-overloading')}>
                Method Overloading
              </Link>
              <Link to="/java-oop/packages" className={linkClass('/java-oop/packages')}>
                Packages
              </Link>
            </div>
          )}
        </div>

        {/* Interfaces */}
        <div className={sectionClass(openSections.interfaces)}>
          <div 
            className={headerClass}
            onClick={() => toggleSection('interfaces')}
          >
            <span>Interfaces</span>
            {openSections.interfaces ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          {openSections.interfaces && (
            <div className="ml-2 space-y-1">
              <Link to="/java-oop/interfaces" className={linkClass('/java-oop/interfaces')}>
                Introduction to Interfaces
              </Link>
              <Link to="/java-oop/interfaces-inheritance" className={linkClass('/java-oop/interfaces-inheritance')}>
                Interfaces & Inheritance
              </Link>
              <Link to="/java-oop/class-vs-interface" className={linkClass('/java-oop/class-vs-interface')}>
                Class vs Interface
              </Link>
              <Link to="/java-oop/functional-interface" className={linkClass('/java-oop/functional-interface')}>
                Functional Interface
              </Link>
              <Link to="/java-oop/nested-interface" className={linkClass('/java-oop/nested-interface')}>
                Nested Interface
              </Link>
              <Link to="/java-oop/marker-interface" className={linkClass('/java-oop/marker-interface')}>
                Marker Interface
              </Link>
              <Link to="/java-oop/comparator-interface" className={linkClass('/java-oop/comparator-interface')}>
                Comparator Interface
              </Link>
            </div>
          )}
        </div>

        {/* Collections */}
        <div className={sectionClass(openSections.collections)}>
          <div 
            className={headerClass}
            onClick={() => toggleSection('collections')}
          >
            <span>Collections</span>
            {openSections.collections ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>
          {openSections.collections && (
            <div className="ml-2 space-y-1">
              <Link to="/java-collections/introduction" className={linkClass('/java-collections/introduction')}>
                Introduction to Collections
              </Link>
              <Link to="/java-collections/collection-classes" className={linkClass('/java-collections/collection-classes')}>
                Collection Classes
              </Link>
              <Link to="/java-collections/collection-interface" className={linkClass('/java-collections/collection-interface')}>
                Collection Interface
              </Link>
              <Link to="/java-collections/list-interface" className={linkClass('/java-collections/list-interface')}>
                List Interface
              </Link>
              <Link to="/java-collections/array-list" className={linkClass('/java-collections/array-list')}>
                ArrayList
              </Link>
              <Link to="/java-collections/vector" className={linkClass('/java-collections/vector')}>
                Vector Class
              </Link>
              <Link to="/java-collections/linked-list" className={linkClass('/java-collections/linked-list')}>
                LinkedList
              </Link>
              <Link to="/java-collections/stack" className={linkClass('/java-collections/stack')}>
                Stack Class
              </Link>
              <Link to="/java-collections/set" className={linkClass('/java-collections/set')}>
                Set Interface
              </Link>
              <Link to="/java-collections/hashset" className={linkClass('/java-collections/hashset')}>
                HashSet
              </Link>
              <Link to="/java-collections/treeset" className={linkClass('/java-collections/treeset')}>
                TreeSet
              </Link>
              <Link to="/java-collections/linked-hashset" className={linkClass('/java-collections/linked-hashset')}>
                LinkedHashSet
              </Link>
              <Link to="/java-collections/queue-interface" className={linkClass('/java-collections/queue-interface')}>
                Queue Interface
              </Link>
              <Link to="/java-collections/priority-queue" className={linkClass('/java-collections/priority-queue')}>
                PriorityQueue
              </Link>
              <Link to="/java-collections/deque-interface" className={linkClass('/java-collections/deque-interface')}>
                Deque Interface
              </Link>
              <Link to="/java-collections/map-interface" className={linkClass('/java-collections/map-interface')}>
                Map Interface
              </Link>
              <Link to="/java-collections/hashmap" className={linkClass('/java-collections/hashmap')}>
                HashMap
              </Link>
              <Link to="/java-collections/linked-hashmap" className={linkClass('/java-collections/linked-hashmap')}>
                LinkedHashMap
              </Link>
              <Link to="/java-collections/hashtable" className={linkClass('/java-collections/hashtable')}>
                Hashtable
              </Link>
              <Link to="/java-collections/dictionary" className={linkClass('/java-collections/dictionary')}>
                Dictionary Class
              </Link>
              <Link to="/java-collections/sorted-set" className={linkClass('/java-collections/sorted-set')}>
                SortedSet Interface
              </Link>
              <Link to="/java-collections/comparable" className={linkClass('/java-collections/comparable')}>
                Comparable Interface
              </Link>
              <Link to="/java-collections/comparable-vs-comparator" className={linkClass('/java-collections/comparable-vs-comparator')}>
                Comparable vs Comparator
              </Link>
              <Link to="/java-collections/iterator" className={linkClass('/java-collections/iterator')}>
                Iterator
              </Link>
            </div>
          )}
        </div>

        {/* Java MCQs */}
        <div className={sectionClass(true)}>
          <Link 
            to="/java-mcqs" 
            className={`${headerClass} ${
              isActive('/java-mcqs') ? 'text-white bg-gray-700' : ''
            }`}
          >
            <div className="flex items-center">
              <BiQuestionMark className="mr-2" size={18} />
              <span>Java MCQs</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;