import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const CollectionsIntro: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Introduction to Java Collections Framework
        </h1>
        <p className="text-lg text-gray-400">
          The Java Collections Framework provides a standardized way to manage groups of objects. It includes interfaces, classes, and algorithms for efficient data manipulation.
        </p>
      </header>

      <main className="space-y-12">
        {/* Overview Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Overview</h2>
          <p className="text-gray-300">
            Collections in Java are used to store, retrieve, manipulate, and communicate aggregate data. The Java Collections Framework (JCF) is a set of classes and interfaces that implement commonly reusable collection data structures.
          </p>
          <CodeBlock
            code={`// Example of Collection Framework Usage
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        System.out.println("Fruits: " + fruits);
    }
}`}
            language="java"
          />
        </section>

        {/* Collection Hierarchy Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Collection Hierarchy</h2>
          <CodeBlock
            code={`// Collection Interface Hierarchy
Collection (interface)
├── List (interface)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
│       └── Stack
├── Set (interface)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
└── Queue (interface)
    ├── PriorityQueue
    └── Deque (interface)
        └── ArrayDeque

// Map Interface (Separate Hierarchy)
Map (interface)
├── HashMap
├── LinkedHashMap
├── TreeMap
└── Hashtable`}
            language="java"
          />
        </section>

        {/* Features of Java Collections Framework */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Provides reusable and efficient data structures.</li>
            <li>Supports algorithms for sorting, searching, and manipulation.</li>
            <li>Unifies data access and manipulation through a standard API.</li>
            <li>Supports generics to ensure type safety.</li>
            <li>Allows thread-safe and non-thread-safe collection implementations.</li>
          </ul>
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Orange");

for (String fruit : list) {
    System.out.println(fruit);  // Output: Apple, Banana, Orange
}`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run demonstrates basic operations with a <code>List</code> collection in Java, including adding elements and iterating through them.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use generics to avoid runtime type errors.</li>
            <li>Choose the appropriate collection based on your needs (e.g., <code>ArrayList</code> for dynamic arrays).</li>
            <li>Leverage utility methods from the <code>Collections</code> class for common operations.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Prefer <code>List</code>, <code>Set</code>, or <code>Map</code> interfaces for flexibility.</li>
            <li>Use <code>Collections.synchronizedList()</code> or <code>ConcurrentHashMap</code> for thread safety.</li>
            <li>Stream API can simplify operations like filtering and mapping data.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not using generics, which leads to <code>ClassCastException</code>.</li>
            <li>Choosing the wrong collection for your use case (e.g., using <code>ArrayList</code> when random access isn't needed).</li>
            <li>Ignoring concurrent modification exceptions when iterating collections.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use the <code>List</code>, <code>Set</code>, or <code>Map</code> interfaces instead of concrete implementations.</li>
            <li>Consider initial capacity for collections like <code>ArrayList</code> to optimize memory usage.</li>
            <li>Log exceptions when dealing with thread-safe collections to aid debugging.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CollectionsIntro;