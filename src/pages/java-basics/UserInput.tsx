import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const UserInput: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">User Input in Java</h1>
        <p className="text-lg text-gray-400">
          Learn how to handle user input in Java using various classes and techniques, including the Scanner class, BufferedReader, and Console. Discover best practices, tips, and common mistakes to avoid.
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-3 text-center">Introduction to User Input</h2>
          <p className="text-gray-300 mb-4 text-center">
            User input is essential in interactive Java applications. Java provides several methods to handle input from the user, whether through the command line, GUI, or other interfaces. Here, we’ll explore the most commonly used approaches.
          </p>
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-300 mb-2">Methods of Reading Input</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Scanner:</strong> Easy to use, suitable for parsing input.</li>
              <li><strong>BufferedReader:</strong> Efficient for reading large text input.</li>
              <li><strong>Console:</strong> Useful for secure input like passwords.</li>
              <li><strong>Command Line:</strong> Reading program arguments.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Using Scanner */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-3 text-center">Using the Scanner Class</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-300 mb-2">Basic Usage</h3>
              <CodeBlock
                code={`import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

System.out.print("Enter your name: ");
String name = scanner.nextLine();

System.out.print("Enter your age: ");
int age = scanner.nextInt();

scanner.close();`}
                language="java"
              />
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-purple-300 mb-2">Common Scanner Methods</h3>
              <table className="w-full text-sm">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2">Method</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="px-4 py-2">nextLine()</td><td>Reads an entire line</td></tr>
                  <tr><td className="px-4 py-2">next()</td><td>Reads a single word</td></tr>
                  <tr><td className="px-4 py-2">nextInt()</td><td>Reads an integer</td></tr>
                  <tr><td className="px-4 py-2">nextDouble()</td><td>Reads a double</td></tr>
                  <tr><td className="px-4 py-2">nextBoolean()</td><td>Reads a boolean</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: BufferedReader */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3 text-center">Using BufferedReader</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Why Use BufferedReader?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Efficient for large text input.</li>
                <li>Synchronized (thread-safe).</li>
                <li>Can handle larger buffers compared to Scanner.</li>
                <li>Ideal for file-based input.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-300 mb-2">Example</h3>
              <CodeBlock
                code={`import java.io.BufferedReader;
import java.io.InputStreamReader;

BufferedReader reader = new BufferedReader(
    new InputStreamReader(System.in));

System.out.print("Enter your name: ");
String name = reader.readLine();

System.out.print("Enter your age: ");
int age = Integer.parseInt(reader.readLine());

reader.close();`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Input Validation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-3 text-center">Input Validation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Best Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Always validate user input.</li>
                <li>Handle exceptions like <code>InputMismatchException</code>.</li>
                <li>Provide clear and user-friendly error messages.</li>
                <li>Ensure the input matches the expected format.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-400 mb-2">Validation Example</h3>
              <CodeBlock
                code={`Scanner scanner = new Scanner(System.in);
int age;

while (true) {
    try {
        System.out.print("Enter age: ");
        age = scanner.nextInt();
        if (age > 0 && age < 120) {
            break;
        } else {
            System.out.println("Invalid age! Please try again.");
        }
    } catch (InputMismatchException e) {
        System.out.println("Please enter a valid number!");
        scanner.nextLine(); // Clear the buffer
    }
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-3 text-center">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>❌ Forgetting to close the Scanner or BufferedReader.</li>
            <li>❌ Using <code>nextLine()</code> immediately after <code>nextInt()</code>, causing input issues.</li>
            <li>❌ Not handling invalid input gracefully.</li>
            <li>❌ Failing to use synchronized methods for multi-threaded applications.</li>
          </ul>
        </section>

        {/* Section 6: Tips */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-3 text-center">Tips for User Input</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>✅ Use <code>BufferedReader</code> for reading large data efficiently.</li>
            <li>✅ Prefer <code>Scanner</code> for simple command-line applications.</li>
            <li>✅ Always validate and sanitize user input.</li>
            <li>✅ Catch exceptions to prevent program crashes.</li>
          </ul>
        </section>

        {/* Section 7: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-3 text-center">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>💡 Use <code>try-with-resources</code> to automatically close input streams.</li>
            <li>💡 For complex input patterns, consider using <code>Pattern</code> and <code>Matcher</code> classes.</li>
            <li>💡 Leverage <code>Console</code> for secure password input when necessary.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserInput;