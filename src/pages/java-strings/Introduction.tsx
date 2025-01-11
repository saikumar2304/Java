import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const StringIntroduction: React.FC = () => {
  const stringCreationExample = `
    // String creation using string literal
    String str1 = "Hello, World!";
    
    // String creation using new keyword
    String str2 = new String("Hello, World!");
    
    // Using char array to create String
    char[] chars = {'H', 'e', 'l', 'l', 'o'};
    String str3 = new String(chars);
  `;

  const stringOperationsExample = `
    String str = "Hello, Java!";
    
    // Get length of string
    int length = str.length();  // 12
    
    // Get character at index 0
    char ch = str.charAt(0);  // 'H'
    
    // Substring example
    String subStr = str.substring(7);  // "Java!"
  `;

  const stringComparisonExample = `
    String str1 = "Java";
    String str2 = "Java";
    
    // String comparison using equals()
    boolean isEqual = str1.equals(str2);  // true
    
    // String comparison using == operator
    boolean isSameReference = (str1 == str2);  // true (same reference in string pool)
  `;

  const stringMethodsExample = `
    String str = "Java Programming!";
    
    // Convert string to uppercase
    String upperStr = str.toUpperCase();  // "JAVA PROGRAMMING!"
    
    // Convert string to lowercase
    String lowerStr = str.toLowerCase();  // "java programming!"
    
    // Replace a character
    String replacedStr = str.replace('a', 'o');  // "Jovo Progromming!"
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Strings in Java
        </h1>
        <p className="text-lg text-gray-400">
          Strings are one of the most important data types in Java. Learn how to manipulate them using different methods and operations.
        </p>
      </header>

      <main className="space-y-12">
        {/* String Creation Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Creating Strings</h2>
          <CodeBlock code={stringCreationExample} language="java" />
          <p className="text-gray-300 mt-4">
            This section demonstrates different ways to create a string in Java using string literals, the <code>new</code> keyword, and character arrays.
          </p>
        </section>

        {/* String Operations Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">String Operations</h2>
          <CodeBlock code={stringOperationsExample} language="java" />
          <p className="text-gray-300 mt-4">
            This section demonstrates common string operations, such as getting the string length, extracting substrings, and accessing individual characters.
          </p>
        </section>

        {/* String Comparison Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">String Comparison</h2>
          <CodeBlock code={stringComparisonExample} language="java" />
          <p className="text-gray-300 mt-4">
            Compare strings in Java using <code>equals()</code> and <code>==</code> operators, and understand their differences.
          </p>
        </section>

        {/* String Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Useful String Methods</h2>
          <CodeBlock code={stringMethodsExample} language="java" />
          <p className="text-gray-300 mt-4">
            Learn about useful string methods in Java like <code>toUpperCase()</code>, <code>toLowerCase()</code>, and <code>replace()</code>.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Strings are immutable, meaning once a string is created, it cannot be modified.</li>
            <li>Use string literals for memory efficiency (string pool).</li>
            <li>Always check for <code>null</code> before working with strings to avoid <code>NullPointerException</code>.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using <code>==</code> for string comparison instead of <code>equals()</code>.</li>
            <li>Not using <code>StringBuilder</code> for concatenating strings in loops, causing performance issues.</li>
            <li>Assuming string operations always modify the string (remember, strings are immutable).</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use <code>StringBuilder</code> for efficient string concatenation, especially in loops.</li>
            <li>Be cautious with <code>==</code> for string comparison, use <code>equals()</code> for value comparison.</li>
            <li>Consider string interning when working with a large number of duplicate strings for memory efficiency.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default StringIntroduction;