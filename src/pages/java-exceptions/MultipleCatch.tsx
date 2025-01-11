import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MultipleCatch: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Multiple Catch Blocks in Java
        </h1>
        <p className="text-lg text-gray-400">
          Multiple catch blocks allow handling different types of exceptions separately in Java. This provides greater control and flexibility in error handling.
        </p>
      </header>

      <main className="space-y-12">
        {/* What are Multiple Catch Blocks? */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What are Multiple Catch Blocks?</h2>
          <p className="text-gray-300 mb-4">
            A single <code>try</code> block can be followed by multiple <code>catch</code> blocks to handle different types of exceptions. Each <code>catch</code> block is executed only if it matches the exception thrown in the <code>try</code> block.
          </p>
          <CodeBlock
            code={`try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[3]); // Throws ArrayIndexOutOfBoundsException
} catch (ArithmeticException e) {
    System.out.println("Arithmetic Exception: " + e.getMessage());
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of bounds: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General exception: " + e.getMessage());
}`}
            language="java"
          />
        </section>

        {/* How Multiple Catch Blocks Work */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">How It Works</h2>
          <p className="text-gray-300">
            The order of <code>catch</code> blocks matters. The first block that matches the exception type is executed. Java checks each <code>catch</code> block sequentially from top to bottom.
          </p>
          <CodeBlock
            code={`try {
    String str = null;
    System.out.println(str.length()); // Throws NullPointerException
} catch (NullPointerException e) {
    System.out.println("Null pointer exception: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General exception: " + e.getMessage());
}`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            In this example, the first catch block catches the <code>NullPointerException</code>, so the second block is not executed.
          </p>
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[3]); // Throws ArrayIndexOutOfBoundsException
} catch (ArithmeticException e) {
    System.out.println("Arithmetic Exception.");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of bounds.");
}
// Output: Index out of bounds.`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run shows how the exception is matched to the appropriate <code>catch</code> block, and subsequent blocks are ignored.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Order <code>catch</code> blocks from specific to general exceptions to avoid compilation errors.</li>
            <li>Handle exceptions in a way that provides meaningful feedback to the user.</li>
            <li>Use logging to capture details of exceptions for debugging.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use multi-catch blocks (Java 7+) to handle multiple exceptions in a single block when the handling logic is the same.</li>
            <li>Combine multiple catch blocks only when it improves readability.</li>
            <li>Rethrow exceptions if they cannot be handled appropriately at the current level.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Placing general exceptions like <code>Exception</code> before specific ones, leading to unreachable code.</li>
            <li>Using empty <code>catch</code> blocks, which hide errors and make debugging difficult.</li>
            <li>Handling exceptions unnecessarily when they could be avoided by validating inputs.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Write specific <code>catch</code> blocks for predictable exceptions.</li>
            <li>Log the exception details to aid debugging and future maintenance.</li>
            <li>Use the <code>finally</code> block or try-with-resources for resource management.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MultipleCatch;