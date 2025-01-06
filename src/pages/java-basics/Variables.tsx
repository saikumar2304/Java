import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Variables: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Java Variables</h1>
      
      <div className="space-y-6">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What are Variables?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Variables are containers for storing data values. In Java, variables must be declared with a specific type
                before they can be used. Each variable has a type, name, and value.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Variable Components</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Type:</strong> Defines what kind of data can be stored</li>
                  <li>• <strong>Name:</strong> Identifier used to reference the variable</li>
                  <li>• <strong>Value:</strong> The actual data stored in the variable</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Basic Syntax</h3>
              <CodeBlock 
                code={`// Declaration
int number;

// Declaration with initialization
String name = "John";

// Multiple declarations
int x = 5, y = 10, z = 15;

// Constants
final double PI = 3.14159;`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Types of Variables Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Types of Variables</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Instance Variables</h3>
              <CodeBlock 
                code={`class Student {
    String name;     // instance variable
    int age;        // instance variable
    double gpa;     // instance variable
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Declared inside class but outside methods</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Static Variables</h3>
              <CodeBlock 
                code={`class School {
    static int studentCount;  // static
    static final int MAX_CAPACITY = 500;
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Shared across all instances of a class</p>
            </div>
            <div className="bg-green-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Local Variables</h3>
              <CodeBlock 
                code={`void calculateArea() {
    int width = 5;   // local
    int height = 10; // local
    int area = width * height;
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Declared inside methods</p>
            </div>
          </div>
        </section>

        {/* Variable Naming Rules */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Naming Rules</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="bg-green-900/20 p-3 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Valid Names</h3>
                <ul className="text-sm space-y-1">
                  <li>✅ Start with letter, $ or _</li>
                  <li>✅ Can contain numbers</li>
                  <li>✅ Use camelCase for variables</li>
                  <li>✅ Use UPPER_CASE for constants</li>
                </ul>
              </div>
              <div className="bg-red-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Invalid Names</h3>
                <ul className="text-sm space-y-1">
                  <li>❌ Start with number</li>
                  <li>❌ Use reserved keywords</li>
                  <li>❌ Include spaces</li>
                  <li>❌ Use special characters</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Examples</h3>
              <CodeBlock 
                code={`// Valid variable names
int age;
String firstName;
double _value;
boolean isActive;
final int MAX_SIZE = 100;

// Invalid variable names
int 1number;     // starts with number
int my name;     // contains space
int class;       // reserved keyword
int #count;      // special character`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Variable Initialization */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Variable Initialization</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Default Values</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>numbers:</strong> 0 (or 0.0)</li>
                <li>• <strong>boolean:</strong> false</li>
                <li>• <strong>char:</strong> '\u0000'</li>
                <li>• <strong>object references:</strong> null</li>
              </ul>
              <p className="mt-2 text-xs text-gray-400">Note: Local variables must be initialized before use</p>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Initialization Examples</h3>
              <CodeBlock 
                code={`// Direct initialization
int count = 0;
String name = "John";

// Initialization blocks
{
    // Instance initialization block
    count = 1;
    name = "Default";
}

static {
    // Static initialization block
    MAX_COUNT = 100;
}`}
                language="java"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Variables; 