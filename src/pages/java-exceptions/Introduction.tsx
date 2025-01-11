import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Introduction = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Introduction to Exceptions in Java
        </h1>
        <p className="text-lg text-gray-400">
          Exceptions in Java are events that disrupt the normal flow of a program. They represent errors or unexpected conditions that arise during execution, which can be handled to maintain program stability.
        </p>
      </header>

      <main className="space-y-12">
        {/* What are Exceptions Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What are Exceptions?</h2>
          <p className="text-gray-300 mb-4">
            Exceptions are runtime anomalies or errors that occur during the execution of a program. Java provides a robust mechanism to handle exceptions, ensuring the program does not crash unexpectedly.
          </p>
          <CodeBlock
            code={`// Example of an exception
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Types of Exceptions Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Types of Exceptions</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><strong>Checked Exceptions:</strong> Must be handled during compile-time. Example: <code>IOException</code>, <code>SQLException</code>.</li>
            <li><strong>Unchecked Exceptions:</strong> Occur during runtime and are not checked at compile-time. Example: <code>NullPointerException</code>, <code>ArithmeticException</code>.</li>
            <li><strong>Errors:</strong> Represent serious issues that cannot be handled by the application. Example: <code>OutOfMemoryError</code>, <code>StackOverflowError</code>.</li>
          </ul>
        </section>

        {/* Benefits of Exception Handling Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Benefits of Exception Handling</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Improves code reliability and stability.</li>
            <li>Separates error-handling logic from regular business logic.</li>
            <li>Allows the program to recover gracefully from unexpected errors.</li>
            <li>Promotes the use of a unified error-handling mechanism.</li>
          </ul>
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Step-by-step dry run
try {
    int result = 10 / 0;  // ArithmeticException occurs here
} catch (ArithmeticException e) {
    System.out.println("Caught exception: " + e.getMessage());
}
// Output: Caught exception: / by zero`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run explains how the exception is caught and handled using a try-catch block, preventing the program from crashing.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Always use specific exception classes (e.g., <code>IOException</code>) instead of generic ones like <code>Exception</code>.</li>
            <li>Log exceptions using a proper logging framework for better debugging.</li>
            <li>Encapsulate error-prone code in try-catch blocks to maintain program stability.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use the <code>finally</code> block for cleanup operations, such as closing resources.</li>
            <li>Throw custom exceptions to handle specific scenarios more effectively.</li>
            <li>Avoid catching <code>Throwable</code> unless absolutely necessary, as it includes Errors.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Overusing exceptions for control flow, which affects performance.</li>
            <li>Ignoring caught exceptions or using empty catch blocks.</li>
            <li>Failing to close resources, leading to resource leaks.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Handle exceptions at the appropriate level in the application hierarchy.</li>
            <li>Use custom exception classes to represent domain-specific errors.</li>
            <li>Validate inputs to prevent exceptions from occurring in the first place.</li>
            <li>Document exceptions thrown by methods to inform users of potential issues.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Introduction;