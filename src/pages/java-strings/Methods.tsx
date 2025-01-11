import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const StringMethods: React.FC = () => {
  const stringMethodExamples = `
    // Example of various String methods
    
    // Creating a String
    String text = "Hello World!";
    
    // Get the length of the string
    int length = text.length();  // 12
    
    // Get the character at index 0
    char ch = text.charAt(0);  // 'H'
    
    // Convert to uppercase
    String upperText = text.toUpperCase();  // "HELLO WORLD!"
    
    // Convert to lowercase
    String lowerText = text.toLowerCase();  // "hello world!"
    
    // Replace a character
    String replacedText = text.replace('o', '0');  // "Hell0 W0rld!"
    
    // Trim spaces from the beginning and end
    String textWithNoSpaces = "   Hello World!   ".trim();  // "Hello World!"
    
    // Check if string contains a sequence
    boolean contains = text.contains("World");  // true
    
    // Check if string starts with a certain prefix
    boolean startsWith = text.startsWith("Hell");  // true
    
    // Check if string ends with a certain suffix
    boolean endsWith = text.endsWith("!");  // true
    
    // Check if the string is empty
    boolean isEmpty = text.isEmpty();  // false
    
    // Get a substring
    String subStr = text.substring(6);  // "World!"
    String subStr2 = text.substring(0, 5);  // "Hello"
    
    // Split string into an array
    String[] words = text.split(" ");  // ["Hello", "World!"]
    
    // Compare two strings
    boolean isEqual = text.equals("Hello World!");  // true
    boolean isEqualIgnoreCase = text.equalsIgnoreCase("hello world!");  // true
    
    // Find index of a character
    int index = text.indexOf('o');  // 4
    int lastIndex = text.lastIndexOf('o');  // 7
    
    // Convert string to char array
    char[] charArray = text.toCharArray();
    
    // Check if string matches regex
    boolean matches = text.matches("Hello.*");  // true
    
    // Replace all occurrences of a substring
    String replacedAll = text.replaceAll("o", "0");  // "Hell0 W0rld!"
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          String Methods in Java
        </h1>
        <p className="text-lg text-gray-400">
          Explore and learn about the various built-in methods in Java to manipulate and manage strings effectively.
        </p>
      </header>

      <main className="space-y-12">
        {/* String Methods Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Common String Methods</h2>
          <CodeBlock code={stringMethodExamples} language="java" />
          <p className="text-gray-300 mt-4">
            This example demonstrates a wide range of String methods available in Java. Methods include <code>length()</code>, <code>charAt()</code>, <code>toUpperCase()</code>, <code>replace()</code>, and many more.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Strings are immutable, meaning once created, they cannot be changed. Any operation on a string returns a new string.</li>
            <li>Use <code>StringBuilder</code> for efficient string concatenation in loops.</li>
            <li>Always check for <code>null</code> before invoking methods on strings to prevent <code>NullPointerException</code>.</li>
            <li>Use <code>String.equals()</code> for comparison, not <code>==</code>.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using <code>==</code> for string comparison instead of <code>equals()</code>.</li>
            <li>Overusing <code>+ (concatenation operator)</code> inside loops, causing inefficient string operations.</li>
            <li>Assuming that string methods modify the string in-place; remember strings are immutable.</li>
            <li>Not handling <code>null</code> strings properly, leading to <code>NullPointerException</code>.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always use string literals wherever possible for better memory efficiency (interning in the string pool).</li>
            <li>Use <code>StringBuilder</code> for efficient string manipulation, especially in loops.</li>
            <li>Be aware of the impact of string operations on performance when working with large datasets.</li>
            <li>Document the purpose of each string operation for better code readability and maintainability.</li>
          </ul>
        </section>

        {/* Dry Run Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Example of string manipulation
String text = "Hello Java!";
String replaced = text.replace('J', 'P');  // "Hello Pava!"

System.out.println(replaced);  // Output: "Hello Pava!"`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run example shows how string methods like <code>replace()</code> can be used to manipulate string content. Remember that strings are immutable, and every operation creates a new string.
          </p>
        </section>
      </main>
    </div>
  );
};

export default StringMethods;