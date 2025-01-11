import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const StringPool: React.FC = () => {
  const stringPoolExample = `
    // String literals are stored in the string pool
    String str1 = "Hello";  // Points to the string pool
    String str2 = "Hello";  // Also points to the same object in the pool
    
    // Using 'new' creates a new object outside the string pool
    String str3 = new String("Hello");  // Creates a new object on the heap
    
    // Interning the string
    String str4 = str3.intern();  // Now str4 points to the string pool object
    
    System.out.println(str1 == str2);  // true, both point to the same reference
    System.out.println(str1 == str3);  // false, different references
    System.out.println(str1 == str4);  // true, str4 is interned and points to the same reference
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          String Pool in Java
        </h1>
        <p className="text-lg text-gray-400">
          Learn about the String Pool in Java and how it helps optimize memory by reusing string objects.
        </p>
      </header>

      <main className="space-y-12">
        {/* String Pool Explanation Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Understanding String Pool</h2>
          <CodeBlock code={stringPoolExample} language="java" />
          <p className="text-gray-300 mt-4">
            This example demonstrates how string literals are stored in the string pool for memory optimization. The <code>new</code> keyword creates a new object on the heap, while calling <code>intern()</code> places the string into the string pool.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>String literals are automatically placed in the string pool, which is why they are more memory efficient.</li>
            <li>Interning strings allows you to reuse strings efficiently, but be cautious about the string pool size in large applications.</li>
            <li>Use string literals wherever possible to save memory, especially for commonly used strings like "Hello" or "World".</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Creating strings using <code>new</code> unnecessarily, which does not use the string pool and can lead to memory inefficiency.</li>
            <li>Not using <code>intern()</code> when you want to use string pool optimization, which could lead to extra objects being created on the heap.</li>
            <li>Assuming that all strings with the same content will always refer to the same object when created with <code>new</code>—they won’t unless interned.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use string literals wherever possible for better memory management and faster execution.</li>
            <li>Use <code>intern()</code> to explicitly add strings to the pool when needed, particularly in large applications with many identical strings.</li>
            <li>Be mindful of memory usage when working with large strings. Avoid holding references to unused strings that may affect garbage collection.</li>
          </ul>
        </section>

        {/* Dry Run Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// String literal and new keyword
String str1 = "Java";
String str2 = "Java";  // Same reference from string pool

String str3 = new String("Java");  // Different reference created on the heap
String str4 = str3.intern();  // str4 points to string pool instance

System.out.println(str1 == str2);  // true, points to the same reference in string pool
System.out.println(str1 == str3);  // false, str3 is not in the string pool
System.out.println(str1 == str4);  // true, str4 is interned and points to the same reference`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run example demonstrates how string pooling works in Java. The comparison shows how the same content in string literals points to the same reference, while objects created with the <code>new</code> keyword do not use the pool unless explicitly interned.
          </p>
        </section>
      </main>
    </div>
  );
};

export default StringPool;