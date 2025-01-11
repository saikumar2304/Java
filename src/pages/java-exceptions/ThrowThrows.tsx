import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const ThrowThrows: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Throw and Throws in Java
        </h1>
        <p className="text-lg text-gray-400">
          In Java, <code>throw</code> and <code>throws</code> are used for exception handling. They allow developers to explicitly raise and declare exceptions, ensuring the program handles errors effectively.
        </p>
      </header>

      <main className="space-y-12">
        {/* What is Throw? Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is Throw?</h2>
          <p className="text-gray-300 mb-4">
            The <code>throw</code> keyword is used to explicitly raise an exception in Java. It is typically used when you want to signal an error condition manually.
          </p>
          <CodeBlock
            code={`public class Main {
    public static void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or older.");
        }
        System.out.println("Valid age: " + age);
    }

    public static void main(String[] args) {
        validateAge(15); // Throws IllegalArgumentException
    }
}`}
            language="java"
          />
        </section>

        {/* What is Throws? Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is Throws?</h2>
          <p className="text-gray-300 mb-4">
            The <code>throws</code> keyword is used in a method signature to declare exceptions that a method might throw. It informs the calling method to handle the exception.
          </p>
          <CodeBlock
            code={`import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void readFile(String filePath) throws FileNotFoundException {
        Scanner scanner = new Scanner(new File(filePath));
        while (scanner.hasNextLine()) {
            System.out.println(scanner.nextLine());
        }
        scanner.close();
    }

    public static void main(String[] args) {
        try {
            readFile("nonexistent.txt"); // Throws FileNotFoundException
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Difference Between Throw and Throws Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Difference Between Throw and Throws</h2>
          <table className="table-auto w-full text-gray-300">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-3">Aspect</th>
                <th className="p-3">Throw</th>
                <th className="p-3">Throws</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">Purpose</td>
                <td className="p-3">Used to explicitly throw an exception.</td>
                <td className="p-3">Used to declare exceptions in method signatures.</td>
              </tr>
              <tr>
                <td className="p-3">Scope</td>
                <td className="p-3">Used within the method body.</td>
                <td className="p-3">Used in the method declaration.</td>
              </tr>
              <tr>
                <td className="p-3">Exception Type</td>
                <td className="p-3">Only one exception can be thrown at a time.</td>
                <td className="p-3">Multiple exceptions can be declared.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`public static void validateAge(int age) {
    if (age < 18) {
        throw new IllegalArgumentException("Age must be 18 or older."); // Exception raised
    }
}

public static void main(String[] args) {
    try {
        validateAge(15); // Caught here
    } catch (IllegalArgumentException e) {
        System.out.println(e.getMessage()); // Output: Age must be 18 or older.
    }
}`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run demonstrates how <code>throw</code> raises an exception and <code>try-catch</code> handles it.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>throw</code> for custom error handling scenarios.</li>
            <li>Always document exceptions declared with <code>throws</code> in the method signature.</li>
            <li>Combine <code>throws</code> with try-catch for robust error handling.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use custom exception classes with <code>throw</code> for domain-specific error handling.</li>
            <li>Leverage the <code>throws</code> keyword to delegate exception handling to higher-level methods.</li>
            <li>Avoid overusing <code>throws</code> for unchecked exceptions like <code>NullPointerException</code>.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using <code>throw</code> without proper context or message, making debugging difficult.</li>
            <li>Not handling exceptions declared with <code>throws</code> in the calling method.</li>
            <li>Throwing unchecked exceptions unnecessarily, reducing code clarity.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Document exceptions in the method signature for clarity and maintainability.</li>
            <li>Use meaningful messages with <code>throw</code> to assist debugging.</li>
            <li>Handle exceptions declared with <code>throws</code> at the appropriate level in the application hierarchy.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ThrowThrows;