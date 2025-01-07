import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

const HandsOnPage: React.FC = () => {
  const sections = [
    {
      title: "Java Basics",
      description: "Practice basic Java programming concepts",
      path: "/hands-on/basics",
      count: "10 exercises"
    },
    {
      title: "Flow Control",
      description: "Hands-on with loops and conditions",
      path: "/hands-on/flow-control",
      count: "8 exercises"
    },
    {
      title: "Methods",
      description: "Practice method creation and usage",
      path: "/hands-on/methods",
      count: "6 exercises"
    },
    {
      title: "Arrays",
      description: "Array manipulation exercises",
      path: "/hands-on/arrays",
      count: "12 exercises"
    },
    {
      title: "Strings",
      description: "String handling practice problems",
      path: "/hands-on/strings",
      count: "10 exercises"
    },
    {
      title: "OOP Concepts",
      description: "Object-oriented programming exercises",
      path: "/hands-on/oop",
      count: "15 exercises"
    },
    {
      title: "Exception Handling",
      description: "Practice exception handling scenarios",
      path: "/hands-on/exceptions",
      count: "8 exercises"
    },
    {
      title: "Collections",
      description: "Work with Java collections framework",
      path: "/hands-on/collections",
      count: "12 exercises"
    },
    {
      title: "File Handling",
      description: "File operations practice problems",
      path: "/hands-on/files",
      count: "6 exercises"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Java Hands-On Practice</h1>
          <p className="text-xl text-gray-400">
            Practice Java programming with interactive coding exercises
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.path}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{section.description}</p>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                    {section.count}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandsOnPage; 