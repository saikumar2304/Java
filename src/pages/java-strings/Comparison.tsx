import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const StringComparison: React.FC = () => {
  const comparisonExample = `
    // Using '==' operator
    String str1 = "Java";
    String str2 = "Java";
    System.out.println(str1 == str2);  // true, both point to the same object in the string pool
    
    // Using 'equals()' method
    String str3 = new String("Java");
    String str4 = new String("Java");
    System.out.println(str3.equals(str4));  // true, checks the value of the strings
    
    // Using '==' with new objects
    System.out.println(str3 == str4);  // false, different references in memory
  `;

  const stringBufferComparison = `
    // Comparing StringBuffer objects
    StringBuffer sb1 = new StringBuffer("Hello");
    StringBuffer sb2 = new StringBuffer("Hello");
    
    // Using '==' compares references
    System.out.println(sb1 == sb2);  // false, different references
    
    // Using 'equals()' compares the reference, not the content
    System.out.println(sb1.equals(sb2));  // false, StringBuffer does not override equals()
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          String Comparison in Java
        </h1>
        <p className="text-lg text-gray-400">
          Understand how to compare strings in Java using <code>==</code> and <code>equals()</code> and learn the nuances of reference vs value comparison.
        </p>
      </header>

      <main className="space-y-12">
        {/* String Comparison Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">String Comparison Example</h2>
          <CodeBlock code={comparisonExample} language="java" />
          <p className="text-gray-300 mt-4">
            The <code>==</code> operator compares object references, while <code>equals()</code> compares the values of the strings.
            This example demonstrates both methods of comparison and highlights the differences.
          </p>
        </section>

        {/* StringBuffer Comparison Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">StringBuffer Comparison</h2>
          <CodeBlock code={stringBufferComparison} language="java" />
          <p className="text-gray-300 mt-4">
            The <code>StringBuffer</code> class does not override the <code>equals()</code> method, so using it on two <code>StringBuffer</code> objects compares references, not content.
            This example shows how comparison works with <code>StringBuffer</code>.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Always use <code>equals()</code> to compare the content of two strings, not <code>==</code>.</li>
            <li>Strings in Java are immutable, so even if two string variables have the same content, they might not refer to the same object in memory unless they are interned.</li>
            <li>If you're comparing <code>StringBuffer</code> or <code>StringBuilder</code>, remember that <code>equals()</code> does not compare the contents by default.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using <code>==</code> to compare string content, which can lead to incorrect results when comparing string values.</li>
            <li>Assuming that <code>==</code> works the same for all objects in Java, but it only checks object references, not the actual content.</li>
            <li>Not considering the difference in behavior between <code>String</code> and other objects like <code>StringBuffer</code>, which do not override <code>equals()</code> by default.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always use <code>equals()</code> to compare the actual content of strings.</li>
            <li>For string pooling, use <code>intern()</code> to ensure that strings with the same value are pointing to the same object in memory.</li>
            <li>Consider using <code>StringBuilder</code> for mutable string manipulation to avoid unnecessary object creation.</li>
          </ul>
        </section>

        {/* Dry Run Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Example of comparing strings using '==' and 'equals()'
String str1 = "Java";
String str2 = "Java";
String str3 = new String("Java");

System.out.println(str1 == str2);  // true, both point to the same reference in the string pool
System.out.println(str1 == str3);  // false, str3 is a new object
System.out.println(str1.equals(str3));  // true, compares the values of the strings`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run shows how the <code>==</code> operator checks for reference equality, while <code>equals()</code> compares the actual string values.
          </p>
        </section>
      </main>
    </div>
  );
};

export default StringComparison;