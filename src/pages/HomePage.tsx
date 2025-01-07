import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, BookOpen, Layout, Terminal, Brain, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-400" />,
      title: "Comprehensive Learning",
      description: "From basics to advanced concepts, learn Java programming step by step."
    },
    {
      icon: <Terminal className="h-6 w-6 text-indigo-400" />,
      title: "Interactive Playground",
      description: "Practice Java code in real-time with our built-in code editor."
    },
    {
      icon: <Brain className="h-6 w-6 text-indigo-400" />,
      title: "MCQ Practice",
      description: "Test your knowledge with our extensive collection of Java MCQs."
    }
  ];

  const topics = [
    { title: "Java Basics", count: "12 lessons", path: "/java-basics/introduction" },
    { title: "Control Flow", count: "11 lessons", path: "/java-flow-control/if-statement" },
    { title: "Methods", count: "10 lessons", path: "/java-methods/intro" },
    { title: "Arrays", count: "10 lessons", path: "/java-arrays/introduction" },
    { title: "OOP Concepts", count: "14 lessons", path: "/java-oop/introduction" },
    { title: "Collections", count: "22 lessons", path: "/java-collections/introduction" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Master Java Programming
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your comprehensive guide to learning Java programming from basics to advanced concepts.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/java-basics/introduction"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Start Learning
              </Link>
              <Link
                to="/playground"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Try Playground
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="bg-gray-700 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Topics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-400">{topic.count}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Begin your Java programming journey today with our structured learning path.
            </p>
            <Link
              to="/java-mcqs"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Practice MCQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;