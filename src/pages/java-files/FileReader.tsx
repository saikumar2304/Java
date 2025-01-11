import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const FileReader: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          FileReader in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>FileReader</code> class in Java is part of the <code>java.io</code> package. It is used to read data from files in a character-oriented way, making it ideal for handling text files.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            The <code>FileReader</code> class is a character stream reader that reads files character by character. It is typically used for reading text files with smaller sizes. For large files, buffered readers are preferred.
          </p>
          <CodeBlock
            code={`import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("example.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Common Methods of FileReader */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Common Methods of FileReader</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><code>read()</code>: Reads a single character from the file.</li>
            <li><code>read(char[] buffer)</code>: Reads characters into a buffer.</li>
            <li><code>close()</code>: Closes the file reader and releases system resources.</li>
          </ul>
        </section>

        {/* Example: Reading a File */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Example: Reading a File</h2>
          <CodeBlock
            code={`import java.io.FileReader;
import java.io.IOException;

public class FileReaderExample {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("example.txt")) {
            char[] buffer = new char[100];
            int length;
            while ((length = reader.read(buffer)) != -1) {
                System.out.print(new String(buffer, 0, length));
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
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
            code={`FileReader reader = new FileReader("example.txt");

int character;
while ((character = reader.read()) != -1) {
    System.out.print((char) character);  // Reads and prints characters one by one
}
reader.close();`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run shows how <code>FileReader</code> reads characters from a file one by one until the end of the file.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>try-with-resources</code> to automatically close the <code>FileReader</code>.</li>
            <li>Check the file's existence before opening it to avoid <code>FileNotFoundException</code>.</li>
            <li>Combine <code>FileReader</code> with <code>BufferedReader</code> for better performance on larger files.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>java.nio.file.Files</code> for advanced file reading capabilities in modern Java.</li>
            <li>Store file paths in constants or configuration files for maintainability.</li>
            <li>Handle character encoding explicitly using <code>InputStreamReader</code> for non-standard encodings.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not closing the <code>FileReader</code>, leading to resource leaks.</li>
            <li>Using <code>read()</code> without handling <code>IOException</code>.</li>
            <li>Assuming all files have standard character encoding, leading to misinterpretation of data.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Validate file paths and ensure the file exists before reading.</li>
            <li>Use buffered streams for better performance on large files.</li>
            <li>Log file reading errors to assist debugging and monitoring.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default FileReader;