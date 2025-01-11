import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const FinallyBlock: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          The Finally Block in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>finally</code> block in Java is used to execute important code, such as cleanup operations, regardless of whether an exception occurs or not. It ensures that essential tasks are performed before the program terminates.
        </p>
      </header>

      <main className="space-y-12">
        {/* What is the Finally Block Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is the Finally Block?</h2>
          <p className="text-gray-300 mb-4">
            The <code>finally</code> block is a part of the try-catch mechanism in Java. It is optional and used to execute code that must run regardless of whether an exception is thrown or handled.
          </p>
          <CodeBlock
            code={`try {
    int result = 10 / 0;  // Throws ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Caught exception: " + e.getMessage());
} finally {
    System.out.println("Finally block executed.");
}
// Output:
// Caught exception: / by zero
// Finally block executed.`}
            language="java"
          />
        </section>

        {/* Key Features of Finally Block */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Key Features of the Finally Block</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Always executes, regardless of whether an exception is thrown or not.</li>
            <li>Typically used for cleanup operations such as closing files, streams, or database connections.</li>
            <li>Does not execute if the JVM exits during the <code>try</code> or <code>catch</code> block.</li>
          </ul>
        </section>

        {/* Use Case: Cleanup Operations */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Use Case: Cleanup Operations</h2>
          <p className="text-gray-300 mb-4">
            The <code>finally</code> block is often used for resource management, such as closing files or releasing database connections.
          </p>
          <CodeBlock
            code={`import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class FinallyExample {
    public static void readFile(String filePath) {
        FileReader reader = null;
        try {
            reader = new FileReader(new File(filePath));
            System.out.println("File opened successfully.");
            // Perform file operations
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                    System.out.println("File closed successfully.");
                } catch (IOException e) {
                    System.out.println("Error closing file: " + e.getMessage());
                }
            }
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`try {
    System.out.println("Try block executed.");
    int result = 10 / 2;  // No exception
} catch (ArithmeticException e) {
    System.out.println("Caught exception: " + e.getMessage());
} finally {
    System.out.println("Finally block executed.");
}
// Output:
// Try block executed.
// Finally block executed.`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run demonstrates how the <code>finally</code> block is executed regardless of whether an exception occurs in the <code>try</code> block.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use the <code>finally</code> block for critical cleanup tasks like closing resources.</li>
            <li>Ensure that the code in the <code>finally</code> block does not throw exceptions.</li>
            <li>Avoid using the <code>finally</code> block for non-critical code.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Prefer the try-with-resources statement (Java 7+) over the <code>finally</code> block for resource management.</li>
            <li>Keep the <code>finally</code> block concise and focused on essential tasks.</li>
            <li>Log all actions in the <code>finally</code> block for better debugging and monitoring.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Placing code that might throw exceptions in the <code>finally</code> block, causing unexpected errors.</li>
            <li>Using the <code>finally</code> block for non-critical operations, which reduces readability.</li>
            <li>Assuming the <code>finally</code> block will execute if the JVM terminates abruptly.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use <code>finally</code> only when resource management cannot be achieved with try-with-resources.</li>
            <li>Ensure all critical cleanup tasks are included in the <code>finally</code> block.</li>
            <li>Combine the <code>finally</code> block with appropriate exception handling for robust programs.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default FinallyBlock;