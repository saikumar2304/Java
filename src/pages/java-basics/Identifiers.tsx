import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Identifiers: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Java Identifiers</h1>
      
      <div className="space-y-6">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What are Identifiers?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Identifiers are names given to classes, variables, methods, interfaces, packages, and other program elements in Java.
                They help in identifying and referring to these elements in your code.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Common Uses</h3>
                <ul className="text-sm space-y-2">
                  <li>• Class names</li>
                  <li>• Variable names</li>
                  <li>• Method names</li>
                  <li>• Interface names</li>
                  <li>• Package names</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Examples</h3>
              <CodeBlock 
                code={`class Student {              // Class identifier
    String name;              // Variable identifier
    int age;                 // Variable identifier
    
    void study() {           // Method identifier
        // Method body
    }
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Naming Rules</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="bg-green-900/20 p-3 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Valid Identifiers</h3>
                <ul className="text-sm space-y-1">
                  <li>✅ Can start with letter, $ or _</li>
                  <li>✅ Can contain numbers (but not at start)</li>
                  <li>✅ Can be any length</li>
                  <li>✅ Are case-sensitive</li>
                  <li>✅ Can use Unicode characters</li>
                </ul>
              </div>
              <div className="bg-red-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Invalid Identifiers</h3>
                <ul className="text-sm space-y-1">
                  <li>❌ Cannot start with a number</li>
                  <li>❌ Cannot use reserved keywords</li>
                  <li>❌ Cannot contain spaces</li>
                  <li>❌ Cannot use special characters (except $ and _)</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
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

        {/* Naming Conventions Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Naming Conventions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-purple-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Class Names</h3>
                <p className="text-sm mb-2">• Start with uppercase letter</p>
                <p className="text-sm mb-2">• Use CamelCase</p>
                <CodeBlock 
                  code={`class Student
class BankAccount
class JavaProgram`}
                  language="java"
                />
              </div>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Method & Variable Names</h3>
                <p className="text-sm mb-2">• Start with lowercase letter</p>
                <p className="text-sm mb-2">• Use camelCase</p>
                <CodeBlock 
                  code={`String firstName;
void calculateTotal();
int maxValue;`}
                  language="java"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Constants</h3>
                <p className="text-sm mb-2">• All uppercase letters</p>
                <p className="text-sm mb-2">• Words separated by underscore</p>
                <CodeBlock 
                  code={`final int MAX_VALUE = 100;
final double PI = 3.14159;
final String DATABASE_URL = "jdbc:mysql://localhost:3306/db";`}
                  language="java"
                />
              </div>
              <div className="bg-indigo-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Package Names</h3>
                <p className="text-sm mb-2">• All lowercase letters</p>
                <p className="text-sm mb-2">• Words separated by dots</p>
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
      </div>
    </div>
  );
};

export default Identifiers; 