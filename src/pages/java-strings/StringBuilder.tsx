import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const StringBuilder: React.FC = () => {
  const stringBuilderExample = `
    // Creating a StringBuilder
    StringBuilder sb1 = new StringBuilder("Hello");
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

  const stringBuilderVsStringBufferExample = `
    // StringBuilder is mutable, while StringBuffer is also mutable but thread-safe
    String str = "Hello";
    StringBuilder sb = new StringBuilder("Hello");

    str = str + " World!";  // Creates a new String object
    sb.append(" World!");  // Modifies the existing StringBuilder object

    System.out.println(str);  // Output: Hello World!
    System.out.println(sb);  // Output: Hello World!
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          StringBuilder in Java
        </h1>
        <p className="text-lg text-gray-400">
          Learn about the StringBuilder class, which provides mutable strings and is optimized for performance.
        </p>
      </header>

      <main className="space-y-12">
        {/* StringBuilder Basic Operations Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">StringBuilder Operations</h2>
          <CodeBlock code={stringBuilderExample} language="java" />
          <p className="text-gray-300 mt-4">
            The <code>StringBuilder</code> class is mutable, which allows modification of the string content without creating new objects.
            Methods like <code>append()</code>, <code>insert()</code>, and <code>reverse()</code> can modify the original StringBuilder.
          </p>
        </section>

        {/* StringBuilder vs StringBuffer Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">StringBuilder vs StringBuffer</h2>
          <CodeBlock code={stringBuilderVsStringBufferExample} language="java" />
          <p className="text-gray-300 mt-4">
            <code>StringBuilder</code> is similar to <code>StringBuffer</code> in that both are mutable. However, <code>StringBuffer</code> is synchronized, making it thread-safe but slower than <code>StringBuilder</code>.
            Use <code>StringBuilder</code> when thread safety is not a concern.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>StringBuilder</code> for efficient string manipulation, especially in loops, to avoid unnecessary string object creation.</li>
            <li>Prefer <code>StringBuilder</code> over <code>StringBuffer</code> for better performance when thread safety is not a concern.</li>
            <li>Use <code>StringBuilder</code> for tasks that involve extensive string modifications, such as building dynamic strings or constructing queries.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not using <code>StringBuilder</code> when working with a lot of string concatenation or modifications, leading to poor performance.</li>
            <li>Using <code>StringBuffer</code> unnecessarily when thread safety is not required, which can reduce performance.</li>
            <li>Overlooking the immutability of strings, which may cause performance issues if strings are constantly modified in loops using the <code>+</code> operator.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>For mutable strings, always use <code>StringBuilder</code> for better performance, especially when concatenating in loops.</li>
            <li>Use <code>StringBuffer</code> only when thread safety is required.</li>
            <li>Avoid using the <code>+</code> operator for concatenating strings in loops, as it creates multiple string objects. Instead, use <code>StringBuilder</code>.</li>
          </ul>
        </section>

        {/* Dry Run Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// StringBuilder append operation
StringBuilder sb = new StringBuilder("Java");
sb.append(" Programming");
System.out.println(sb);  // Output: Java Programming`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run shows how the <code>append()</code> method works in <code>StringBuilder</code> to efficiently add content to an existing string.
          </p>
        </section>
      </main>
    </div>
  );
};

export default StringBuilder;