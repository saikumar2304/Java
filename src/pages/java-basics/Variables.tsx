import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Variables: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Java Variables</h1>
        <p className="text-lg text-gray-400">
          Learn how to declare, initialize, and use variables in Java, and understand their scope and types.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: What are Variables? */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What are Variables?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 leading-7 mb-4">
                Variables are containers for storing data values. In Java, variables must be declared with a specific type before they can be used. Each variable has a type, name, and value.
              </p>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-2">Variable Components</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong>Type:</strong> Defines what kind of data can be stored.</li>
                  <li><strong>Name:</strong> Identifier used to reference the variable.</li>
                  <li><strong>Value:</strong> The actual data stored in the variable.</li>
                </ul>
              </div>
            </div>
            <div>
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

        {/* Section 2: Types of Variables */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Types of Variables</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Instance Variables</h3>
              <CodeBlock
                code={`class Student {
    String name;     // instance variable
    int age;        // instance variable
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Declared inside a class but outside methods.</p>
            </div>
            <div className="bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Static Variables</h3>
              <CodeBlock
                code={`class School {
    static int studentCount;  // static
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Shared across all instances of a class.</p>
            </div>
            <div className="bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Local Variables</h3>
              <CodeBlock
                code={`void calculateArea() {
    int width = 5;   // local
    int height = 10; // local
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Declared inside methods and accessible only within them.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Naming Rules */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Naming Rules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="bg-green-900/20 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Valid Names</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>✅ Start with a letter, $ or _</li>
                  <li>✅ Can contain numbers</li>
                  <li>✅ Use camelCase for variables</li>
                  <li>✅ Use UPPER_CASE for constants</li>
                </ul>
              </div>
              <div className="bg-red-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Invalid Names</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>❌ Start with a number</li>
                  <li>❌ Use reserved keywords</li>
                  <li>❌ Include spaces</li>
                  <li>❌ Use special characters</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Examples</h3>
              <CodeBlock
                code={`// Valid names
int age;
String firstName;
boolean isActive;

// Invalid names
int 1number;   // starts with a number
int my name;   // contains space
int class;     // reserved keyword`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>❌ Forgetting to initialize variables before use (especially local variables).</li>
            <li>❌ Using reserved keywords as variable names (e.g., <code>int class;</code>).</li>
            <li>❌ Declaring variables without specifying their type.</li>
          </ul>
        </section>

        {/* Section 5: Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Tips for Using Variables</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>✅ Use meaningful names to improve code readability.</li>
            <li>✅ Declare variables as <code>final</code> if their value won’t change.</li>
            <li>✅ Group related variables together for better organization.</li>
          </ul>
        </section>

        {/* Section 6: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>💡 Use static variables for shared data across instances (e.g., counters).</li>
            <li>💡 Leverage instance variables for unique data specific to objects.</li>
            <li>💡 Always initialize local variables to avoid compilation errors.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Variables;