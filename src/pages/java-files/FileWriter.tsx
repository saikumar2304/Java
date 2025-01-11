import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const FileWriter: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          FileWriter in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>FileWriter</code> class in Java is a part of the <code>java.io</code> package. It is used to write character data to files in a simple and efficient way.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            The <code>FileWriter</code> class is a character stream writer that is commonly used for writing text files. It allows you to write data character by character, array by array, or as strings.
          </p>
          <CodeBlock
            code={`import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("example.txt")) {
            writer.write("Hello, World!");
            System.out.println("Data written successfully.");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Common Methods of FileWriter */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Common Methods of FileWriter</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><code>write(int c)</code>: Writes a single character.</li>
            <li><code>write(String str)</code>: Writes a string to the file.</li>
            <li><code>write(char[] cbuf)</code>: Writes a character array to the file.</li>
            <li><code>close()</code>: Closes the writer and releases system resources.</li>
            <li><code>flush()</code>: Flushes the writer, ensuring all data is written to the file.</li>
          </ul>
        </section>

        {/* Example: Writing to a File */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Example: Writing to a File</h2>
          <CodeBlock
            code={`import java.io.FileWriter;
import java.io.IOException;

public class FileWriterExample {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("example.txt", true)) {  // true enables append mode
            writer.write("Appending data to the file.\\n");
            System.out.println("Data appended successfully.");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
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
            code={`FileWriter writer = new FileWriter("example.txt");

writer.write("Hello, World!"); // Writes the text to the file
writer.flush();               // Ensures all data is written
writer.close();               // Closes the writer to release resources`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run explains how <code>FileWriter</code> writes data to the file step by step and ensures data integrity by using <code>flush()</code> and <code>close()</code>.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>try-with-resources</code> to ensure the <code>FileWriter</code> is closed automatically.</li>
            <li>Enable append mode by passing <code>true</code> as the second parameter to the constructor.</li>
            <li>Always call <code>flush()</code> before closing to avoid data loss.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Combine <code>FileWriter</code> with <code>BufferedWriter</code> for better performance when writing large files.</li>
            <li>Use <code>java.nio.file.Files</code> for modern and efficient file writing in Java.</li>
            <li>Store file paths in configuration files or constants for better maintainability.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not closing the <code>FileWriter</code>, leading to resource leaks.</li>
            <li>Overwriting existing files unintentionally without enabling append mode.</li>
            <li>Forgetting to handle <code>IOException</code>, leading to runtime errors.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always handle exceptions gracefully using <code>try-catch</code>.</li>
            <li>Use append mode only when required to avoid accidental overwriting.</li>
            <li>Log all file-writing operations for debugging and monitoring.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default FileWriter;