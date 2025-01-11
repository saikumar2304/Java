import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Identifiers: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Java Identifiers</h1>
        <p className="text-lg text-gray-400">
          Learn the rules and best practices for naming elements in Java, from classes and methods to variables and packages.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What are Identifiers?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 leading-7 mb-4">
                Identifiers are names given to classes, variables, methods, interfaces, packages, and other program elements in Java. They are essential for identifying and referring to these elements in your code.
              </p>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-blue-300">Common Uses of Identifiers</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Class names</li>
                  <li>Variable names</li>
                  <li>Method names</li>
                  <li>Interface names</li>
                  <li>Package names</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Examples</h3>
              <CodeBlock
                code={`class Student {              // Class identifier
    String name;              // Variable identifier
    int age;                  // Variable identifier
    
    void study() {            // Method identifier
        // Method body
    }
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Rules */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Rules for Identifiers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="bg-green-900/20 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-green-300 mb-2">Valid Identifiers</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>✅ Can start with a letter, <code>$</code>, or <code>_</code></li>
                  <li>✅ Can contain numbers (but not at the start)</li>
                  <li>✅ Can be any length</li>
                  <li>✅ Are case-sensitive</li>
                  <li>✅ Can use Unicode characters</li>
                </ul>
              </div>
              <div className="bg-red-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-red-300 mb-2">Invalid Identifiers</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>❌ Cannot start with a number</li>
                  <li>❌ Cannot use reserved keywords</li>
                  <li>❌ Cannot contain spaces</li>
                  <li>❌ Cannot use special characters (except <code>$</code> and <code>_</code>)</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Examples</h3>
              <CodeBlock
                code={`// Valid identifiers
String name;
int age123;
double _value;
boolean isActive;
float $price;

// Invalid identifiers
int 123age;        // Starts with number
String class;      // Reserved keyword
float price#tag;   // Special character
boolean is active; // Contains space`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Naming Conventions */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Naming Conventions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-300 mb-2">Class Names</h3>
                <p className="text-gray-300 mb-4">• Start with an uppercase letter and use CamelCase.</p>
                <CodeBlock
                  code={`class Student
class BankAccount
class JavaProgram`}
                  language="java"
                />
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-2">Method & Variable Names</h3>
                <p className="text-gray-300 mb-4">• Start with a lowercase letter and use camelCase.</p>
                <CodeBlock
                  code={`String firstName;
void calculateTotal();
int maxValue;`}
                  language="java"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-yellow-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-300 mb-2">Constants</h3>
                <p className="text-gray-300 mb-4">• Use all uppercase letters with words separated by underscores.</p>
                <CodeBlock
                  code={`final int MAX_VALUE = 100;
final double PI = 3.14159;
final String DATABASE_URL = "jdbc:mysql://localhost:3306/db";`}
                  language="java"
                />
              </div>
              <div className="bg-indigo-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-300 mb-2">Package Names</h3>
                <p className="text-gray-300 mb-4">• Use all lowercase letters and separate words with dots.</p>
                <CodeBlock
                  code={`package com.example.project;
package org.apache.commons;
package java.util;`}
                  language="java"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-red-300">Using Reserved Keywords:</strong> For example, trying to name a variable <code>class</code> or <code>public</code>.
            </li>
            <li>
              <strong className="text-red-300">Starting Identifiers with Numbers:</strong> For example, <code>123name</code> is invalid.
            </li>
            <li>
              <strong className="text-red-300">Including Spaces:</strong> Identifiers like <code>my variable</code> are not allowed.
            </li>
            <li>
              <strong className="text-red-300">Mixing Case Styles:</strong> Use consistent case styles for readability.
            </li>
          </ul>
        </section>

        {/* Section 5: Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Tips for Using Identifiers</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-green-300">Use Descriptive Names:</strong> Choose meaningful names that convey the purpose of the variable or method.
            </li>
            <li>
              <strong className="text-green-300">Avoid Single Characters:</strong> Unless used in loops (e.g., <code>i</code>, <code>j</code>).
            </li>
            <li>
              <strong className="text-green-300">Follow Conventions:</strong> Use CamelCase or snake_case as appropriate.
            </li>
            <li>
              <strong className="text-green-300">Be Consistent:</strong> Ensure a uniform naming style across the codebase.
            </li>
          </ul>
        </section>

        {/* Section 6: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-blue-300">Refactor Regularly:</strong> If an identifier no longer represents its function, rename it.
            </li>
            <li>
              <strong className="text-blue-300">Use IDE Features:</strong> Modern IDEs can highlight invalid identifiers and suggest corrections.
            </li>
            <li>
              <strong className="text-blue-300">Adopt Naming Standards:</strong> Follow established naming conventions for collaboration.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Identifiers;