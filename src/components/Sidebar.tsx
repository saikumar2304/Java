import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Section {
  title: string;
  items: {
    title: string;
    path: string;
  }[];
}

const sections: Section[] = [
  {
    title: 'Java Basics',
    items: [
      { title: 'Introduction', path: '/java-basics/introduction' },
      { title: 'Hello World', path: '/java-basics/hello-world' },
      { title: 'Java Syntax', path: '/java-basics/java-syntax' },
      { title: 'Identifiers', path: '/java-basics/identifiers' },
      { title: 'Keywords', path: '/java-basics/keywords' },
      { title: 'Data Types', path: '/java-basics/data-types' },
      { title: 'Variables', path: '/java-basics/variables' },
      { title: 'Variable Scope', path: '/java-basics/variable-scope' },
      { title: 'Operators', path: '/java-basics/operators' },
      { title: 'User Input', path: '/java-basics/user-input' },
      { title: 'Type Casting', path: '/java-basics/type-casting' },
      { title: 'Comments', path: '/java-basics/comments' },
    ],
  },
  {
    title: 'Flow Control',
    items: [
      { title: 'If Statement', path: '/java-flow-control/if-statement' },
      { title: 'If-Else', path: '/java-flow-control/if-else' },
      { title: 'If-Else-If', path: '/java-flow-control/if-else-if' },
      { title: 'Switch', path: '/java-flow-control/switch' },
      { title: 'For Loop', path: '/java-flow-control/for-loop' },
      { title: 'While Loop', path: '/java-flow-control/while-loop' },
      { title: 'Do-While', path: '/java-flow-control/do-while' },
      { title: 'Break', path: '/java-flow-control/break' },
      { title: 'Continue', path: '/java-flow-control/continue' },
      { title: 'Return', path: '/java-flow-control/return' },
      { title: 'Enhanced For', path: '/java-flow-control/enhanced-for' },
    ],
  },
  {
    title: 'Methods',
    items: [
      { title: 'Introduction', path: '/java-methods/intro' },
      { title: 'Method Declaration', path: '/java-methods/declaration' },
      { title: 'Method Parameters', path: '/java-methods/parameters' },
      { title: 'Method Calling', path: '/java-methods/calling' },
      { title: 'Static vs Instance', path: '/java-methods/static-vs-instance' },
      { title: 'Access Modifiers', path: '/java-methods/access-modifiers' },
      { title: 'Command Line Args', path: '/java-methods/command-line-args' },
      { title: 'Varargs', path: '/java-methods/varargs' },
      { title: 'Method Overloading', path: '/java-methods/overloading' },
      { title: 'Recursion', path: '/java-methods/recursion' },
      { title: 'Pass by Value', path: '/java-methods/pass-by-value' },
    ],
  },
  {
    title: 'Arrays',
    items: [
      { title: 'Introduction', path: '/java-arrays/introduction' },
      { title: 'Array Declaration', path: '/java-arrays/declaration' },
      { title: 'Array Initialization', path: '/java-arrays/initialization' },
      { title: 'Array Access', path: '/java-arrays/access' },
      { title: 'Multidimensional', path: '/java-arrays/multidimensional' },
      { title: 'Jagged Arrays', path: '/java-arrays/jagged-arrays' },
      { title: 'Array Methods', path: '/java-arrays/methods' },
      { title: 'Array Sorting', path: '/java-arrays/sorting' },
      { title: 'Array Searching', path: '/java-arrays/searching' },
      { title: 'Array Copy', path: '/java-arrays/copy' },
    ],
  },
  {
    title: 'Strings',
    items: [
      { title: 'Introduction', path: '/java-strings/introduction' },
      { title: 'String Creation', path: '/java-strings/creation' },
      { title: 'String Methods', path: '/java-strings/methods' },
      { title: 'String Pool', path: '/java-strings/string-pool' },
      { title: 'String Immutability', path: '/java-strings/immutability' },
      { title: 'String Comparison', path: '/java-strings/comparison' },
      { title: 'String Buffer', path: '/java-strings/string-buffer' },
      { title: 'String Builder', path: '/java-strings/string-builder' },
      { title: 'String Formatting', path: '/java-strings/formatting' },
      { title: 'Regular Expressions', path: '/java-strings/regex' },
    ],
  },
  {
    title: 'OOP Concepts',
    items: [
      { title: 'Introduction', path: '/java-oop/introduction' },
      { title: 'Classes & Objects', path: '/java-oop/classes-objects' },
      { title: 'Constructors', path: '/java-oop/constructors' },
      { title: 'Access Modifiers', path: '/java-oop/access-modifiers' },
      { title: 'Encapsulation', path: '/java-oop/encapsulation' },
      { title: 'Inheritance', path: '/java-oop/inheritance' },
      { title: 'Polymorphism', path: '/java-oop/polymorphism' },
      { title: 'Abstraction', path: '/java-oop/abstraction' },
      { title: 'Interfaces', path: '/java-oop/interfaces' },
      { title: 'Abstract Classes', path: '/java-oop/abstract-classes' },
      { title: 'Static Members', path: '/java-oop/static-members' },
      { title: 'Final Keyword', path: '/java-oop/final-keyword' },
      { title: 'Package', path: '/java-oop/package' },
      { title: 'Object Class', path: '/java-oop/object-class' },
    ],
  },
  {
    title: 'Exception Handling',
    items: [
      { title: 'Introduction', path: '/java-exceptions/introduction' },
      { title: 'Try Catch', path: '/java-exceptions/try-catch' },
      { title: 'Multiple Catch', path: '/java-exceptions/multiple-catch' },
      { title: 'Throw & Throws', path: '/java-exceptions/throw-throws' },
      { title: 'Finally Block', path: '/java-exceptions/finally' },
      { title: 'Custom Exceptions', path: '/java-exceptions/custom-exceptions' },
      { title: 'Exception Types', path: '/java-exceptions/types' },
    ],
  },
  {
    title: 'Collections',
    items: [
      { title: 'Introduction', path: '/java-collections/introduction' },
      { title: 'Collection Interface', path: '/java-collections/collection-interface' },
      { title: 'List Interface', path: '/java-collections/list-interface' },
      { title: 'ArrayList', path: '/java-collections/array-list' },
      { title: 'LinkedList', path: '/java-collections/linked-list' },
      { title: 'Vector', path: '/java-collections/vector' },
      { title: 'Stack', path: '/java-collections/stack' },
      { title: 'Queue Interface', path: '/java-collections/queue-interface' },
      { title: 'PriorityQueue', path: '/java-collections/priority-queue' },
      { title: 'Deque Interface', path: '/java-collections/deque-interface' },
      { title: 'Set Interface', path: '/java-collections/set-interface' },
      { title: 'HashSet', path: '/java-collections/hashset' },
      { title: 'LinkedHashSet', path: '/java-collections/linked-hashset' },
      { title: 'TreeSet', path: '/java-collections/treeset' },
      { title: 'Map Interface', path: '/java-collections/map-interface' },
      { title: 'HashMap', path: '/java-collections/hashmap' },
      { title: 'LinkedHashMap', path: '/java-collections/linked-hashmap' },
      { title: 'TreeMap', path: '/java-collections/treemap' },
      { title: 'Hashtable', path: '/java-collections/hashtable' },
      { title: 'Comparable', path: '/java-collections/comparable' },
      { title: 'Comparator', path: '/java-collections/comparator' },
      { title: 'Iterator', path: '/java-collections/iterator' },
    ],
  },
  {
    title: 'File Handling',
    items: [
      { title: 'Introduction', path: '/java-files/introduction' },
      { title: 'File Class', path: '/java-files/file-class' },
      { title: 'FileReader', path: '/java-files/file-reader' },
      { title: 'FileWriter', path: '/java-files/file-writer' },
      { title: 'BufferedReader', path: '/java-files/buffered-reader' },
      { title: 'BufferedWriter', path: '/java-files/buffered-writer' },
      { title: 'File Streams', path: '/java-files/file-streams' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(() => {
    // Initialize with all sections closed except Java Basics
    const initial: { [key: string]: boolean } = {};
    sections.forEach(section => {
      initial[section.title] = section.title === 'Java Basics';
    });
    return initial;
  });

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="w-64 bg-gray-800 text-gray-100 flex-shrink-0 fixed h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full px-2 py-2 text-sm font-semibold rounded hover:bg-gray-700"
            >
              {section.title}
              {openSections[section.title] ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {openSections[section.title] && (
              <div className="ml-4 mt-2 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-2 py-1 text-sm rounded ${
                      location.pathname === item.path
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;