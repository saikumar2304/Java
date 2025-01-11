import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Immutability: React.FC = () => {
  const stringImmutabilityExample = `
    // String is immutable in Java
    String str = "Hello";
    
    // Modify the string (this creates a new object)
    str = str + " World!";
    
    System.out.println(str);  // Output: "Hello World!"
    
    // Original string "Hello" remains unchanged in memory, and a new string is created
  `;

  const customClassImmutabilityExample = `
    // Example of an immutable class
    public final class Person {
        private final String name;
        
        public Person(String name) {
            this.name = name;
        }
        
        public String getName() {
            return this.name;
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Person p = new Person("John");
            // p.name = "Jane";  // Error: name cannot be modified since it's final
        }
    }
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Immutability in Java
        </h1>
        <p className="text-lg text-gray-400">
          Learn about immutability in Java and how it ensures that objects cannot be modified once created.
        </p>
      </header>

      <main className="space-y-12">
        {/* String Immutability Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">String Immutability</h2>
          <CodeBlock code={stringImmutabilityExample} language="java" />
          <p className="text-gray-300 mt-4">
            Strings in Java are immutable. This means that when you perform operations like concatenation or modification, a new string object is created, leaving the original string unchanged.
          </p>
        </section>

        {/* Custom Class Immutability Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Immutability in Custom Classes</h2>
          <CodeBlock code={customClassImmutabilityExample} language="java" />
          <p className="text-gray-300 mt-4">
            You can make your custom classes immutable by declaring them <code>final</code> and making all fields <code>final</code> as well. This ensures that the state of an object cannot be changed after it is created.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Immutability is crucial for thread safety since immutable objects cannot be modified by multiple threads.</li>
            <li>String is a great example of immutability in Java. Use immutable objects wherever possible to avoid side effects and bugs.</li>
            <li>For custom classes, make fields <code>final</code> and provide no setters to enforce immutability.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting to make the class <code>final</code> and exposing setters that modify internal state.</li>
            <li>Assuming that strings are mutable, leading to inefficient code where new strings are constantly created.</li>
            <li>Not understanding that even though an object is immutable, its references can be changed unless the object itself is final.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Make your classes <code>final</code> if they should be immutable, and use only <code>final</code> fields.</li>
            <li>For strings, use string literals and avoid using the <code>new</code> keyword unnecessarily to reduce memory usage.</li>
            <li>Be mindful of memory usage when working with large strings. Avoid holding references to unused strings that may affect garbage collection.</li>
          </ul>
        </section>

        {/* Dry Run Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Example of string immutability
String str = "Immutable";
str = str.concat(" String!");  // Creates a new string
System.out.println(str);  // Output: Immutable String!

// The original string "Immutable" is unchanged. A new string is created with the updated value.`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run shows that the string "Immutable" is not modified in-place. Instead, a new string object is created when the <code>concat()</code> method is called, demonstrating string immutability.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Immutability;