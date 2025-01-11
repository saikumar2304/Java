import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const CollectionInterface: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Collection Interface in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>Collection</code> interface is the root interface of the Java Collections Framework. It provides the foundational methods to manipulate groups of objects efficiently.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            The <code>Collection</code> interface defines the basic structure and behavior of all collections in Java. It provides methods for adding, removing, and querying elements, supporting flexible and efficient data manipulation.
          </p>
          <CodeBlock
            code={`import java.util.*;

// Example: Basic Collection usage
Collection<String> collection = new ArrayList<>();
collection.add("One");
collection.add("Two");
collection.add("Three");

System.out.println(collection); // Output: [One, Two, Three]`}
            language="java"
          />
        </section>

        {/* Common Methods of Collection Interface */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Common Methods</h2>
          <CodeBlock
            code={`Collection<String> collection = new ArrayList<>();

// Adding elements
collection.add("One");              // Add single element
collection.addAll(Arrays.asList("Two", "Three")); // Add multiple elements

// Removing elements
collection.remove("One");           // Remove specific element
collection.clear();                 // Remove all elements

// Querying collection
int size = collection.size();       // Number of elements
boolean isEmpty = collection.isEmpty(); // Check if empty
boolean contains = collection.contains("Two"); // Check for element`}
            language="java"
          />
        </section>

        {/* Bulk Operations Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Bulk Operations</h2>
          <CodeBlock
            code={`Collection<String> c1 = new ArrayList<>();
Collection<String> c2 = new ArrayList<>();

c1.addAll(Arrays.asList("A", "B", "C"));
c2.addAll(Arrays.asList("B", "C", "D"));

// Bulk operations
c1.retainAll(c2);  // Keep only elements that are common
c1.removeAll(c2);  // Remove all elements present in c2`}
            language="java"
          />
        </section>

        {/* Iterator Methods */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Iterator Methods</h2>
          <CodeBlock
            code={`Collection<Integer> numbers = new ArrayList<>();
numbers.addAll(Arrays.asList(1, 2, 3, 4, 5));

// Using iterator
Iterator<Integer> iterator = numbers.iterator();
while (iterator.hasNext()) {
    Integer num = iterator.next();
    System.out.println(num);
}

// Removing elements safely
iterator = numbers.iterator();
while (iterator.hasNext()) {
    Integer num = iterator.next();
    if (num % 2 == 0) {
        iterator.remove();
    }
}`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`Collection<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Dry run:
for (String fruit : fruits) {
    System.out.println(fruit);
}

// Output:
// Apple
// Banana
// Orange`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run demonstrates adding elements to a collection and iterating over them.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>addAll()</code> for bulk additions instead of multiple <code>add()</code> calls.</li>
            <li>Check the size of the collection before accessing elements.</li>
            <li>Always prefer interface types (<code>Collection</code>) for flexibility.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Combine <code>stream()</code> with collections for efficient processing.</li>
            <li>Use <code>retainAll()</code> and <code>removeAll()</code> for efficient set operations.</li>
            <li>Choose <code>LinkedList</code> over <code>ArrayList</code> for frequent insertions and deletions.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not using generics, leading to <code>ClassCastException</code>.</li>
            <li>Modifying collections directly during iteration.</li>
            <li>Not handling null values properly in collections.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always initialize collections with appropriate types for better performance.</li>
            <li>Prefer immutable collections for read-only operations.</li>
            <li>Use <code>Collections.unmodifiableCollection()</code> for safety.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CollectionInterface;