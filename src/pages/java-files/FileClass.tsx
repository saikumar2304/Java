import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const FileClass: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          File Class in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>File</code> class in Java is a part of the <code>java.io</code> package. It represents a file or directory path and provides methods to create, delete, and manipulate files and directories.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            The <code>File</code> class is used to perform file and directory operations such as creating files, checking existence, and retrieving file properties. It works with both absolute and relative paths.
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

        {/* Common Methods of File Class */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Common Methods of File Class</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><code>createNewFile()</code>: Creates a new file if it does not exist.</li>
            <li><code>delete()</code>: Deletes the file or directory.</li>
            <li><code>exists()</code>: Checks if the file or directory exists.</li>
            <li><code>getName()</code>: Returns the name of the file.</li>
            <li><code>length()</code>: Returns the size of the file in bytes.</li>
            <li><code>mkdir()</code>: Creates a new directory.</li>
            <li><code>getAbsolutePath()</code>: Returns the absolute path of the file.</li>
          </ul>
        </section>

        {/* Example: Creating a New File */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Example: Creating a New File</h2>
          <CodeBlock
            code={`import java.io.File;
import java.io.IOException;

public class FileExample {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`File file = new File("example.txt");

if (file.exists()) {
    System.out.println("File already exists: " + file.getName());
} else {
    file.createNewFile();  // File created
    System.out.println("New file created: " + file.getName());
}`}

            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run demonstrates how the <code>File</code> class is used to check for the existence of a file and create a new one if it does not exist.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use absolute paths for files in large projects to avoid confusion.</li>
            <li>Check if the file exists before performing operations to avoid exceptions.</li>
            <li>Combine the <code>File</code> class with <code>FileReader</code> and <code>FileWriter</code> for advanced file handling.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>java.nio.file</code> for advanced file operations in modern Java applications.</li>
            <li>Store file paths in constants or configuration files for better maintainability.</li>
            <li>Use <code>deleteOnExit()</code> for temporary files that should be removed when the program exits.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using relative paths without understanding the current working directory.</li>
            <li>Forgetting to handle exceptions, leading to program crashes.</li>
            <li>Assuming the file is created without verifying the return value of <code>createNewFile()</code>.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always handle exceptions using try-catch blocks to ensure program stability.</li>
            <li>Log file operations for better debugging and monitoring.</li>
            <li>Validate file paths and names before performing operations.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default FileClass;