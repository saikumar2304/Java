import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const VariableScope: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Variable Scope in Java</h1>
        <p className="text-lg text-gray-400">
          Understand how the scope of variables determines where they can be accessed or modified in your program.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: What is Variable Scope? */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What is Variable Scope?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 leading-7 mb-4">
                The scope of a variable defines the part of the program where the variable is accessible. In Java, the scope depends on where the variable is declared.
              </p>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-2">Scopes in Java</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong>Class Scope:</strong> Variables declared in a class but outside methods.</li>
                  <li><strong>Method Scope:</strong> Variables declared inside a method.</li>
                  <li><strong>Block Scope:</strong> Variables declared inside loops, conditionals, or blocks.</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Scope Example</h3>
              <CodeBlock
                code={`class Example {
    int classVariable;        // Class scope

    void method() {
        int methodVariable;  // Method scope
        for (int i = 0; i < 5; i++) {
            int blockVariable = i; // Block scope
        }
    }
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Types of Variable Scopes */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Types of Variable Scopes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Class Scope</h3>
              <CodeBlock
                code={`class Student {
    String name;  // Class scope
    int age;
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Accessible across all methods in the class.</p>
            </div>
            <div className="bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Method Scope</h3>
              <CodeBlock
                code={`void greet() {
    String message = "Hello"; // Method scope
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Accessible only within the method where it is declared.</p>
            </div>
            <div className="bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Block Scope</h3>
              <CodeBlock
                code={`for (int i = 0; i < 10; i++) {
    int temp = i;  // Block scope
}`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">Accessible only within the specific block.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>❌ Trying to access a method variable outside its scope.</li>
            <li>❌ Declaring variables with the same name in overlapping scopes, causing confusion.</li>
            <li>❌ Using uninitialized variables within their scope.</li>
          </ul>
        </section>

        {/* Section 4: Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Tips for Managing Variable Scope</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>✅ Declare variables as close as possible to where they are used.</li>
            <li>✅ Use meaningful names to avoid conflicts and improve readability.</li>
            <li>✅ Limit the scope of variables to reduce potential bugs.</li>
          </ul>
        </section>

        {/* Section 5: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>💡 Use local variables whenever possible to improve memory efficiency.</li>
            <li>💡 Be cautious with class-level variables as they can introduce side effects in multi-threaded environments.</li>
            <li>💡 Use <code>final</code> for variables that should not change, ensuring immutability where needed.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default VariableScope;