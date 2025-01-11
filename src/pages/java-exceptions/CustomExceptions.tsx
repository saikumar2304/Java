import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const CustomExceptions: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Custom Exceptions in Java
        </h1>
        <p className="text-lg text-gray-400">
          Custom exceptions allow developers to create application-specific error handling mechanisms by defining their own exception classes. They enhance readability and provide better error information.
        </p>
      </header>

      <main className="space-y-12">
        {/* What are Custom Exceptions Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What are Custom Exceptions?</h2>
          <p className="text-gray-300 mb-4">
            Custom exceptions are user-defined exception classes that extend the <code>Exception</code> or <code>RuntimeException</code> class. They provide a way to create meaningful, domain-specific error messages.
          </p>
          <CodeBlock
            code={`// Custom exception example
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class Main {
    public static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above.");
        }
        System.out.println("Valid age: " + age);
    }

    public static void main(String[] args) {
        try {
            validateAge(16);
        } catch (InvalidAgeException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Benefits of Custom Exceptions */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Benefits of Custom Exceptions</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Improves code clarity by providing meaningful error messages.</li>
            <li>Encapsulates application-specific logic for better error handling.</li>
            <li>Allows categorization of errors for modular exception handling.</li>
          </ul>
        </section>

        {/* Steps to Create Custom Exceptions */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Steps to Create Custom Exceptions</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-300">
            <li>
              Create a class that extends <code>Exception</code> or <code>RuntimeException</code>.
            </li>
            <li>
              Define a constructor to pass a custom error message to the superclass.
            </li>
            <li>
              Use the custom exception in your application logic and throw it where necessary.
            </li>
          </ol>
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Step-by-step execution
try {
    validateAge(16); // Throws InvalidAgeException
} catch (InvalidAgeException e) {
    System.out.println(e.getMessage()); // Output: Age must be 18 or above.
}`}

            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run demonstrates how the custom exception is thrown and caught, providing meaningful error messages to the user.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use meaningful names for custom exceptions to reflect their purpose.</li>
            <li>Extend <code>RuntimeException</code> for unchecked exceptions and <code>Exception</code> for checked exceptions.</li>
            <li>Document custom exceptions thoroughly to ensure clarity.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Encapsulate error details in the custom exception for better debugging.</li>
            <li>Use custom exceptions sparingly to avoid over-complicating error handling.</li>
            <li>Combine custom exceptions with logging frameworks for better error traceability.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Creating too many custom exceptions, leading to maintenance issues.</li>
            <li>Throwing custom exceptions without meaningful messages.</li>
            <li>Not documenting the scenarios where the custom exception might occur.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Define custom exceptions only when built-in exceptions are insufficient.</li>
            <li>Group related custom exceptions into a package for better organization.</li>
            <li>Log all custom exceptions to ensure traceability and debugging ease.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CustomExceptions;