import React from 'react';

const JavaBasicsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Java Basics</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hello World Program</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
          <pre className="language-java">
            <code>{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}</code>
          </pre>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Let's break down this code:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><code>public class HelloWorld</code> - Declares a public class named HelloWorld</li>
            <li><code>public static void main(String[] args)</code> - The main method, entry point of the program</li>
            <li><code>System.out.println()</code> - Prints text to the console</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Syntax Rules</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Class names must start with an uppercase letter (e.g., HelloWorld)</li>
          <li>Method names must start with a lowercase letter (e.g., main)</li>
          <li>Every statement must end with a semicolon (;)</li>
          <li>Code blocks are enclosed in curly braces { }</li>
          <li>Java is case-sensitive</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Data Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Primitive Types</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><code>byte</code> - 8-bit integer</li>
              <li><code>short</code> - 16-bit integer</li>
              <li><code>int</code> - 32-bit integer</li>
              <li><code>long</code> - 64-bit integer</li>
              <li><code>float</code> - 32-bit floating-point</li>
              <li><code>double</code> - 64-bit floating-point</li>
              <li><code>boolean</code> - true/false</li>
              <li><code>char</code> - 16-bit Unicode character</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Reference Types</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><code>String</code> - Text sequences</li>
              <li><code>Arrays</code> - Collections of elements</li>
              <li><code>Classes</code> - User-defined types</li>
              <li><code>Interfaces</code> - Abstract types</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variables and Declaration</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
          <pre className="language-java">
            <code>{`// Variable declaration examples
int number = 42;
String text = "Hello Java";
double price = 19.99;
boolean isJavaFun = true;
char grade = 'A';`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Comments in Java</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
          <pre className="language-java">
            <code>{`// This is a single-line comment

/* This is a 
   multi-line comment */

/** This is a documentation comment
 *  Used for generating documentation
 */`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default JavaBasicsPage; 