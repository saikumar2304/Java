import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const TryCatch: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Try-Catch in Java
        </h1>
        <p className="text-lg text-gray-400">
          The try-catch block is used to handle exceptions in Java. It allows you to catch runtime errors and execute alternate code, ensuring the program continues to run smoothly.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is Try-Catch?</h2>
          <p className="text-gray-300">
            The try-catch block is a fundamental exception-handling mechanism in Java. The code that might throw an exception is placed in the <code>try</code> block, and the <code>catch</code> block is used to handle the exception.
          </p>
          <CodeBlock
            code={`try {
    // Code that might throw an exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Handle the exception
    System.out.println("Cannot divide by zero: " + e.getMessage());
}`}
            language="java"
          />
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">How It Works</h2>
          <p className="text-gray-300 mb-4">
            The <code>try</code> block contains code that may throw an exception. If an exception occurs, the <code>catch</code> block executes and handles the exception. If no exception occurs, the <code>catch</code> block is ignored.
          </p>
          <CodeBlock
            code={`try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[3]); // Throws ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of bounds: " + e.getMessage());
}`}
            language="java"
          />
        </section>

        {/* Multiple Catch Blocks Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Multiple Catch Blocks</h2>
          <p className="text-gray-300 mb-4">
            You can use multiple <code>catch</code> blocks to handle different types of exceptions. The first block that matches the exception is executed.
          </p>
          <CodeBlock
            code={`try {
    String str = null;
    System.out.println(str.length()); // Throws NullPointerException
} catch (NullPointerException e) {
    System.out.println("Null value encountered: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General exception: " + e.getMessage());
}`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`try {
    int a = 10 / 0; // Exception occurs here
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero.");
}
// Output: Cannot divide by zero.`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run demonstrates how the exception is caught, allowing the program to continue executing without crashing.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Always use specific exception types in <code>catch</code> blocks for clarity and precision.</li>
            <li>Log exceptions instead of just printing them to the console for better debugging.</li>
            <li>Encapsulate error-prone code in small, manageable try-catch blocks.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use multi-catch blocks (Java 7+) for handling multiple exceptions in a single block.</li>
            <li>Always close resources like files or database connections using <code>finally</code> or try-with-resources.</li>
            <li>Avoid overusing generic <code>catch</code> blocks, which can mask specific issues.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using an empty <code>catch</code> block, which hides errors and makes debugging difficult.</li>
            <li>Catching generic exceptions unnecessarily, reducing code clarity.</li>
            <li>Failing to rethrow exceptions when needed for proper error propagation.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Catch only the exceptions you can handle effectively.</li>
            <li>Provide meaningful messages in exception logs for better troubleshooting.</li>
            <li>Use try-with-resources for managing resources to avoid leaks.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TryCatch;