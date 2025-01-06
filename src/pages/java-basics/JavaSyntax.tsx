import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const JavaSyntax: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Java Syntax</h1>
      
      <div className="space-y-6">
        {/* Basic Syntax Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Basic Syntax Structure</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Java programs are organized into classes and methods. Every Java program must have at least one class and one main method.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Essential Components</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Class Declaration</strong>: Container for code</li>
                  <li>• <strong>Main Method</strong>: Entry point of program</li>
                  <li>• <strong>Statements</strong>: Instructions ending with semicolon</li>
                  <li>• <strong>Blocks</strong>: Code enclosed in curly braces</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Basic Program Structure</h3>
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

        {/* Identifiers and Keywords Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Identifiers and Keywords</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Naming Rules</h3>
              <div className="bg-green-900/20 p-3 rounded-lg">
                <ul className="text-sm space-y-2">
                  <li>✅ Can start with letter, $ or _</li>
                  <li>✅ Can contain numbers</li>
                  <li>✅ Case sensitive</li>
                  <li>❌ Cannot start with number</li>
                  <li>❌ Cannot use reserved keywords</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Common Keywords</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-purple-900/20 p-2 rounded text-sm">public</div>
                <div className="bg-purple-900/20 p-2 rounded text-sm">class</div>
                <div className="bg-purple-900/20 p-2 rounded text-sm">static</div>
                <div className="bg-purple-900/20 p-2 rounded text-sm">void</div>
                <div className="bg-purple-900/20 p-2 rounded text-sm">int</div>
                <div className="bg-purple-900/20 p-2 rounded text-sm">if</div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments and Documentation */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Comments and Documentation</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-blue-400 mb-2">Types of Comments</h3>
                <CodeBlock 
                  code={`// Single line comment

/* Multi-line comment
   spanning multiple
   lines */

/** Documentation comment
 * @author Your Name
 * @version 1.0
 */`}
                  language="java"
                />
              </div>
              <div className="bg-yellow-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Best Practices</h3>
                <ul className="text-sm space-y-2">
                  <li>• Use meaningful comments</li>
                  <li>• Document public methods</li>
                  <li>• Explain complex logic</li>
                  <li>• Keep comments up to date</li>
                  <li>• Avoid obvious comments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Code Blocks and Statements */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Code Blocks and Statements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Code Block Structure</h3>
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
            <div className="space-y-4">
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Statement Types</h3>
                <ul className="text-sm space-y-2">
                  <li>• Declaration statements</li>
                  <li>• Expression statements</li>
                  <li>• Control flow statements</li>
                  <li>• Method call statements</li>
                </ul>
              </div>
              <div className="bg-red-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Common Mistakes</h3>
                <ul className="text-sm space-y-2">
                  <li>❌ Missing semicolons</li>
                  <li>❌ Unmatched braces</li>
                  <li>❌ Wrong indentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JavaSyntax; 