import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const UserInput: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">User Input in Java</h1>
      
      <div className="space-y-6">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Reading User Input</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Java provides several ways to read input from users. The most common approaches are using
                Scanner class and BufferedReader class.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Input Methods</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Scanner:</strong> Easy to use, good for parsing</li>
                  <li>• <strong>BufferedReader:</strong> More efficient for large inputs</li>
                  <li>• <strong>Console:</strong> For password input</li>
                  <li>• <strong>Command Line:</strong> Program arguments</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Basic Scanner Example</h3>
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
          </div>
        </section>

        {/* Scanner Methods */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Scanner Methods</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Common Scanner Methods</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="py-2">nextLine()</td><td>Reads a line of text</td></tr>
                  <tr><td className="py-2">next()</td><td>Reads a word</td></tr>
                  <tr><td className="py-2">nextInt()</td><td>Reads an integer</td></tr>
                  <tr><td className="py-2">nextDouble()</td><td>Reads a double</td></tr>
                  <tr><td className="py-2">nextBoolean()</td><td>Reads a boolean</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Usage Example</h3>
              <CodeBlock 
                code={`Scanner scanner = new Scanner(System.in);

// Reading different types
String name = scanner.nextLine();
int age = scanner.nextInt();
double height = scanner.nextDouble();
boolean isStudent = scanner.nextBoolean();

// Reading a word
String word = scanner.next();`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* BufferedReader */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Using BufferedReader</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Advantages</h3>
              <ul className="text-sm space-y-2">
                <li>• More efficient for reading large text</li>
                <li>• Synchronized (thread-safe)</li>
                <li>• Larger buffer size</li>
                <li>• Better for reading files</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-2">Example</h3>
              <CodeBlock 
                code={`import java.io.BufferedReader;
import java.io.InputStreamReader;

BufferedReader reader = new BufferedReader(
    new InputStreamReader(System.in));

String name = reader.readLine();
int age = Integer.parseInt(reader.readLine());

reader.close();`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Input Validation */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Input Validation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Best Practices</h3>
              <ul className="text-sm space-y-2">
                <li>• Always validate user input</li>
                <li>• Handle potential exceptions</li>
                <li>• Provide clear error messages</li>
                <li>• Use appropriate data types</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-red-400 mb-2">Validation Example</h3>
              <CodeBlock 
                code={`Scanner scanner = new Scanner(System.in);
int age = 0;

while (true) {
    try {
        System.out.print("Enter age: ");
        age = scanner.nextInt();
        if (age > 0 && age < 120) {
            break;
        } else {
            System.out.println("Invalid age!");
        }
    } catch (Exception e) {
        System.out.println("Please enter a number!");
        scanner.nextLine(); // Clear buffer
    }
}`}
                language="java"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserInput;