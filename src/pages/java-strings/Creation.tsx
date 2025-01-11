import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Creation: React.FC = () => {
  const stringCreationExample = `
    // String creation using string literal
    String str1 = "Hello, World!";
    
    // String creation using new keyword
    String str2 = new String("Hello, World!");
    
    // Using char array to create String
    char[] chars = {'H', 'e', 'l', 'l', 'o'};
    String str3 = new String(chars);
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          String Creation in Java
        </h1>
        <p className="text-lg text-gray-400">
          Understanding the different ways to create strings in Java and when to use each method.
        </p>
      </header>

      <main className="space-y-12">
        {/* String Creation Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Creating Strings in Java</h2>
          <CodeBlock code={stringCreationExample} language="java" />
          <p className="text-gray-300 mt-4">
            This example demonstrates three different ways to create strings in Java: using string literals, the <code>new</code> keyword, and character arrays.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>String literals are more memory efficient because they use the string pool.</li>
            <li>The <code>new</code> keyword creates a new object, even if the string already exists in the string pool.</li>
            <li>Character arrays are useful when you want to convert between a string and a sequence of characters.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using the <code>new</code> keyword when you don’t need to, wasting memory.</li>
            <li>Not understanding that strings created with <code>new</code> are not automatically pooled.</li>
            <li>Assuming that strings created using the same literal will always refer to the same object.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use string literals whenever possible for better memory efficiency.</li>
            <li>Use <code>StringBuilder</code> for efficient string concatenation in loops.</li>
            <li>Be cautious when using <code>new</code>, as it can create unnecessary objects.</li>
          </ul>
        </section>

        {/* Dry Run Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Declare string literal
String str1 = "Java";
String str2 = "Java";  // Points to the same object in string pool

// Declare string using new keyword
String str3 = new String("Java");  // Creates new object outside string pool

System.out.println(str1 == str2);  // true, same reference
System.out.println(str1 == str3);  // false, different references`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run shows the difference between using string literals and creating strings using the <code>new</code> keyword. The string pool optimizes memory by sharing references for identical string literals.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Creation;