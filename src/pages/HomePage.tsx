import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const features = [
    {
      title: "Start Coding Today 👨‍💻",
      description: "Begin your Java journey now with easy-to-follow lessons and hands-on practice."
    },
    {
      title: "Master Java 💻",
      description: "Learn everything from Java basics to advanced concepts with in-depth tutorials."
    },
    {
      title: "Test Your Skills 🧠",
      description: "Challenge yourself with numerous MCQs and coding challenges to level up your skills."
    }
  ];

  const topics = [
    { title: "Introduction to Java", path: "/java-basics", count: 12 },
    { title: "Flow Control", path: "/java-flow-control", count: 11 },
    { title: "Methods", path: "/java-methods", count: 10 },
    { title: "Arrays", path: "/java-arrays", count: 10 },
    { title: "Object-Oriented Programming (OOP)", path: "/java-oop", count: 14 },
    { title: "Practice MCQs", path: "/java-mcqs", count: 100 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">

      {/* Hero Section */}
      <div className="py-32 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Welcome to Java Programming 🚀
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-200">
          Ready to start your journey to becoming a Java expert? Dive into mastering the fundamentals of Java.
        </p>
        <Link
          to="/java-basics/introduction"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105"
        >
          Start Learning Java
        </Link>
      </div>

      {/* Features Section */}
      <div className="py-20 px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-100 mb-12">Why Learn Java?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg hover:bg-gray-700 transition-all transform hover:scale-105 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Java Topics Section */}
      <div className="py-20 px-8 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-gray-100 mb-12">Explore Java Topics 📚</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className="bg-gray-700 p-8 rounded-xl shadow-lg hover:bg-gray-600 transition-all transform hover:scale-105"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{topic.title}</h3>
                  <p className="text-sm text-gray-400">Available Topics: {topic.count}</p>
                </div>
                <span className="text-gray-500 hover:text-yellow-400 transition-colors">➔</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-center rounded-2xl mt-16">
        <h2 className="text-3xl font-semibold text-white mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Join thousands of learners and master Java. Start coding, testing, and building real-world applications.
        </p>
        <Link
          to="/java-basics"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105"
        >
          Start Your Journey
        </Link>
      </div>

    </div>
  );
};

export default HomePage;