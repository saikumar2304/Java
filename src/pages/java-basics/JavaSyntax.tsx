import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const JavaSyntax: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Java Syntax</h1>
        <p className="text-lg text-gray-400">
          Master the foundational syntax of Java, from class declarations to writing clean and efficient code.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: Basic Syntax Structure */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Basic Syntax Structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 leading-7 mb-4">
                Java programs are organized into classes and methods. Every Java program must have at least one class and one main method.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong className="text-yellow-300">Class Declaration:</strong> Container for all code.</li>
                <li><strong className="text-yellow-300">Main Method:</strong> Entry point of the program.</li>
                <li><strong className="text-yellow-300">Statements:</strong> Instructions ending with a semicolon.</li>
                <li><strong className="text-yellow-300">Blocks:</strong> Code enclosed in curly braces.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-300 mb-2">Example Program</h3>
              <CodeBlock
                code={`public class HelloWorld {
    public static void main(String[] args) {
        // This is a comment
        System.out.println("Hello, World!");
    }
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Identifiers and Keywords */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Identifiers and Keywords</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-300 mb-3">Naming Rules</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>✅ Can start with a letter, <code>$</code>, or <code>_</code>.</li>
                <li>✅ Can contain numbers but cannot start with them.</li>
                <li>✅ Case sensitive.</li>
                <li>❌ Cannot use reserved keywords.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-300 mb-3">Common Keywords</h3>
              <div className="grid grid-cols-3 gap-2">
                {['public', 'class', 'static', 'void', 'int', 'if', 'else', 'return'].map(keyword => (
                  <div key={keyword} className="bg-purple-900/20 p-2 rounded text-sm text-gray-300">
                    {keyword}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Comments and Documentation */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Comments and Documentation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-yellow-300 mb-3">Types of Comments</h3>
              <CodeBlock
                code={`// Single-line comment

/* Multi-line comment
   spanning multiple
   lines */

/** Documentation comment
 * Provides detailed documentation
 */`}
                language="java"
              />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-300 mb-3">Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>• Use meaningful comments to explain logic.</li>
                <li>• Document public methods and classes with <code>/** */</code>.</li>
                <li>• Avoid redundant or obvious comments.</li>
                <li>• Keep comments updated as code evolves.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Code Blocks and Statements */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Code Blocks and Statements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-300 mb-3">Code Block Structure</h3>
              <CodeBlock
                code={`public class Example {
    // Class block
    {
        // Initialization block
    }
    
    public void method() {
        // Method block
        if (true) {
            // Nested block
        }
    }
}`}
                language="java"
              />
            </div>
            <div>
              <h3 className="font-semibold text-red-300 mb-3">Common Mistakes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>❌ Missing semicolons at the end of statements.</li>
                <li>❌ Unmatched braces causing syntax errors.</li>
                <li>❌ Improper indentation affecting readability.</li>
              </ul>
              <h3 className="font-semibold text-blue-300 mt-4 mb-3">Statement Types</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>• Declaration statements (e.g., <code>int x = 10;</code>).</li>
                <li>• Expression statements (e.g., <code>x++;</code>).</li>
                <li>• Control flow statements (e.g., <code>if</code>, <code>for</code>).</li>
                <li>• Method call statements (e.g., <code>System.out.println()</code>).</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JavaSyntax;