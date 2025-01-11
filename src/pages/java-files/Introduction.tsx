import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Introduction = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Introduction to File Handling in Java
        </h1>
        <p className="text-lg text-gray-400">
          File handling in Java allows programs to read, write, and manipulate files on the file system. It is a fundamental aspect of Java programming, enabling data storage and retrieval for persistent systems.
        </p>
      </header>

      <main className="space-y-12">
        {/* What is File Handling Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is File Handling?</h2>
          <p className="text-gray-300 mb-4">
            File handling is the process of performing operations on files, such as reading from or writing to them. Java provides robust APIs for handling files using classes in the <code>java.io</code> and <code>java.nio.file</code> packages.
          </p>
          <CodeBlock
            code={`import java.io.File;

public class Main {
    public static void main(String[] args) {
        File file = new File("example.txt");
        if (file.exists()) {
            System.out.println("File exists: " + file.getName());
        } else {
            System.out.println("File does not exist.");
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Why Use File Handling Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Why Use File Handling?</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>To store data persistently between program executions.</li>
            <li>To read and process external data sources like CSV or text files.</li>
            <li>To manage configuration files or logs for applications.</li>
          </ul>
        </section>

        {/* Common File Operations Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Common File Operations</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Creating new files</li>
            <li>Reading from existing files</li>
            <li>Writing to files</li>
            <li>Deleting files</li>
            <li>Renaming or moving files</li>
          </ul>
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`import java.io.File;

public class FileExample {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
// Output: File created: example.txt`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run demonstrates the creation of a file, with appropriate handling for errors or existing files.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Always check if a file exists before performing operations to avoid errors.</li>
            <li>Use absolute paths for files when working with large or complex projects.</li>
            <li>Close file streams properly to avoid resource leaks.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use the <code>try-with-resources</code> statement (Java 7+) to handle file streams automatically.</li>
            <li>Store file paths in constants or configuration files for better maintainability.</li>
            <li>Leverage the <code>java.nio.file</code> package for advanced file operations.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not checking for exceptions while performing file operations.</li>
            <li>Using relative paths without understanding the working directory.</li>
            <li>Forgetting to close file streams, leading to memory leaks.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always handle exceptions to ensure the program does not crash unexpectedly.</li>
            <li>Validate file paths and contents before processing.</li>
            <li>Use logging to capture file operation details for debugging.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Introduction;