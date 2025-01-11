import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const StringBufferExample: React.FC = () => {
  const stringBufferExample = `
    // Creating a StringBuffer
    StringBuffer sb1 = new StringBuffer("Hello");
    System.out.println(sb1);  // Output: Hello
    
    // Append a string
    sb1.append(" World!");
    System.out.println(sb1);  // Output: Hello World!
    
    // Insert a string at a specific position
    sb1.insert(6, "Java ");
    System.out.println(sb1);  // Output: Hello Java World!
    
    // Reverse the string
    sb1.reverse();
    System.out.println(sb1);  // Output: !dlroW avaJ olleH
  `;

  const stringBufferVsStringExample = `
    // StringBuffer is mutable, while String is immutable
    String str = "Hello";
    StringBuffer sb = new StringBuffer("Hello");

    str = str + " World!";  // Creates a new String object
    sb.append(" World!");  // Modifies the existing StringBuffer object

    System.out.println(str);  // Output: Hello World!
    System.out.println(sb);  // Output: Hello World!
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          StringBuffer in Java
        </h1>
        <p className="text-lg text-gray-400">
          Learn about the StringBuffer class, which provides mutable strings and allows efficient string manipulation.
        </p>
      </header>

      <main className="space-y-12">
        {/* StringBuffer Basic Operations Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">StringBuffer Operations</h2>
          <CodeBlock code={stringBufferExample} language="java" />
          <p className="text-gray-300 mt-4">
            The <code>StringBuffer</code> class is mutable, allowing modification of the string content without creating new objects.
            Operations like <code>append()</code>, <code>insert()</code>, and <code>reverse()</code> can modify the original StringBuffer.
          </p>
        </section>

        {/* StringBuffer vs String Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">StringBuffer vs String</h2>
          <CodeBlock code={stringBufferVsStringExample} language="java" />
          <p className="text-gray-300 mt-4">
            StringBuffer objects are mutable, meaning that they can be modified in place. In contrast, strings in Java are immutable, so any modification results in a new object.
            This example compares how both types behave when manipulating content.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>StringBuffer</code> when you need to modify a string frequently to avoid unnecessary object creation.</li>
            <li>For thread-safe operations, use <code>StringBuffer</code> instead of <code>StringBuilder</code>.</li>
            <li>When performing a lot of string concatenation or modifications, <code>StringBuffer</code> provides better performance compared to using <code>String</code> directly.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using <code>StringBuffer</code> unnecessarily when <code>String</code> suffices, leading to unnecessary memory overhead.</li>
            <li>Assuming that <code>StringBuffer</code> objects are immutable like strings—remember that <code>StringBuffer</code> is mutable!</li>
            <li>Not using <code>StringBuilder</code> when thread safety is not a concern, which may lead to inefficiency.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use <code>StringBuffer</code> for mutable strings when you need to modify the string in place.</li>
            <li>For thread-safe operations, use <code>StringBuffer</code> instead of <code>StringBuilder</code>.</li>
            <li>Prefer <code>StringBuilder</code> when thread safety is not a concern and you're looking for better performance.</li>
          </ul>
        </section>

        {/* Dry Run Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// StringBuffer append operation
StringBuffer sb = new StringBuffer("Java");
sb.append(" Programming");
System.out.println(sb);  // Output: Java Programming`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run shows how <code>StringBuffer</code> modifies the original object without creating new ones. The <code>append()</code> method efficiently adds content to the existing StringBuffer.
          </p>
        </section>
      </main>
    </div>
  );
};

export default StringBufferExample;