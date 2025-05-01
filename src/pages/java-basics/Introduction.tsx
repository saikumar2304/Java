import React from 'react';
import AdBanner from '../../components/AdBanner';
import CodeBlock from '../../components/CodeBlock';

const Introduction: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen space-y-12">
      <AdBanner />

      <header className="text-center mb-4">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">Introduction to Java</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Let’s begin our Java journey by understanding what Java is, why it matters, and how Raj is using it to build a scoreboard app for cricket matches.
        </p>
      </header>

      {/* Real-Life Setup */}
      <section className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Meet Raj</h2>
        <p className="text-gray-300 mb-3">
          Raj is a student who plays cricket with his friends. They used to track scores on paper — messy and error-prone. Raj decided to build his own digital scoreboard using Java.
        </p>
        <p className="text-gray-300">
          In this course, we’ll follow Raj’s app-building journey to learn Java step-by-step. Each concept we learn will be part of his app’s development.
        </p>
      </section>

      {/* What is Java */}
      <section className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">What is Java?</h2>
        <p className="text-gray-300 mb-3">
          Java is a powerful, beginner-friendly programming language used to build apps, games, websites, and enterprise tools. It’s known for:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><strong>Write Once, Run Anywhere:</strong> Java programs work on any computer with JVM.</li>
          <li><strong>Object-Oriented:</strong> Code is based on real-world objects, perfect for apps like Raj’s.</li>
          <li><strong>Widely Used:</strong> Used by banks, Android apps, websites, and even game engines.</li>
        </ul>
        <p className="text-gray-300 mt-3">
          Raj chose Java so his app could work on any laptop his friends use — no matter what OS.
        </p>
      </section>

      {/* Features of Java */}
      <section className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Features of Java</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><strong>Platform Independent:</strong> Code runs anywhere using the Java Virtual Machine (JVM).</li>
          <li><strong>Robust:</strong> Java handles memory and errors to avoid crashes.</li>
          <li><strong>Secure:</strong> Built-in security for safer applications.</li>
          <li><strong>Multithreaded:</strong> Can handle multiple tasks at once — useful for live score updates.</li>
        </ul>
        <p className="text-gray-300 mt-3">
          Raj benefits from these features to make sure his app works fast, safely, and handles multiple players at once.
        </p>
      </section>

      {/* Java Virtual Machine */}
      <section className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Java Virtual Machine (JVM)</h2>
        <p className="text-gray-300 mb-2">
          JVM runs Java programs by converting bytecode into instructions for the computer. It's what makes Java cross-platform.
        </p>
        <p className="text-gray-300">
          Raj only needs to write his scoreboard app once — and it runs on all his friends’ systems using the JVM.
        </p>
      </section>

      {/* JDK vs JRE vs JVM */}
      <section className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">JDK vs JRE vs JVM</h2>
        <table className="w-full text-sm bg-gray-700 rounded overflow-hidden">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Component</th>
              <th className="px-4 py-2 text-left">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            <tr>
              <td className="px-4 py-2">JDK</td>
              <td className="px-4 py-2">Java Development Kit – used to write and compile Java code</td>
            </tr>
            <tr>
              <td className="px-4 py-2">JRE</td>
              <td className="px-4 py-2">Java Runtime Environment – used to run Java programs</td>
            </tr>
            <tr>
              <td className="px-4 py-2">JVM</td>
              <td className="px-4 py-2">Java Virtual Machine – interprets bytecode and executes it</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-300 mt-3">
          Raj writes code using the JDK, and his app runs using the JRE and JVM combo.
        </p>
      </section>

      <AdBanner />
    </div>
  );
};

export default Introduction;