import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const HelloWorld: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Your First Java Program</h1>
      
      <div className="space-y-6">
        {/* Basic Hello World Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Hello World Program</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                The traditional first program in any programming language is "Hello, World!". 
                This simple program helps you understand the basic structure of a Java program.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Program Components</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>public class</strong>: Class declaration</li>
                  <li>• <strong>main method</strong>: Program entry point</li>
                  <li>• <strong>System.out</strong>: Output stream</li>
                  <li>• <strong>println()</strong>: Print with newline</li>
                </ul>
              </div>
            </div>
            <div>
              <CodeBlock 
                code={`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* How to Run Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">How to Run</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-700/50 p-3 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Using Command Line</h3>
                <CodeBlock 
                  code={`# Compile the program
javac HelloWorld.java

# Run the program
java HelloWorld`}
                  language="bash"
                />
              </div>
              <div className="bg-yellow-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">⚠️ Important Notes</h3>
                <ul className="text-sm space-y-1">
                  <li>• File name must match class name</li>
                  <li>• Save file as HelloWorld.java</li>
                  <li>• Case sensitivity matters</li>
                  <li>• Each statement ends with semicolon</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Using an IDE</h3>
              <div className="space-y-3">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <p className="text-sm mb-2">1. Create a new Java project</p>
                  <p className="text-sm mb-2">2. Create a new Java class</p>
                  <p className="text-sm mb-2">3. Name it "HelloWorld"</p>
                  <p className="text-sm">4. Click Run button or press Ctrl+F11</p>
                </div>
                <div className="bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold mb-2">Popular IDEs</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Eclipse</li>
                    <li>• IntelliJ IDEA</li>
                    <li>• Visual Studio Code</li>
                    <li>• NetBeans</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Variations Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Common Variations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Print Methods</h3>
              <CodeBlock 
                code={`// Print with newline
System.out.println("Hello, World!");

// Print without newline
System.out.print("Hello, ");
System.out.print("World!");

// Print formatted text
System.out.printf("Hello, %s!", "World");`}
                language="java"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-green-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Output Differences</h3>
                <pre className="text-sm font-mono bg-gray-900/50 p-2 rounded">
                  Hello, World!
                  Hello, World!
                  Hello, World!
                </pre>
                <p className="text-sm mt-2 text-gray-300">All three methods produce similar output but with different formatting control.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelloWorld; 