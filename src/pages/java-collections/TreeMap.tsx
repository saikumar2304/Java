import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const TreeMap: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          TreeMap in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>TreeMap</code> class in Java is a part of the <code>java.util</code> package and implements the <code>NavigableMap</code> interface. It maintains the keys in a sorted order using a red-black tree.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            The <code>TreeMap</code> is a Map implementation that sorts its keys according to their natural ordering or a custom comparator. It offers efficient operations for adding, retrieving, and navigating through key-value pairs.
          </p>
          <CodeBlock
            code={`import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        TreeMap<String, Integer> map = new TreeMap<>();
        map.put("Apple", 3);
        map.put("Banana", 5);
        map.put("Cherry", 2);

        System.out.println("TreeMap: " + map);  // Output: {Apple=3, Banana=5, Cherry=2}
    }
}`}
            language="java"
          />
        </section>

        {/* Creating TreeMap Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Creating TreeMap</h2>
          <CodeBlock
            code={`// Default constructor (natural ordering)
TreeMap<String, Integer> map1 = new TreeMap<>();

// With custom Comparator
TreeMap<String, Integer> map2 = new TreeMap<>((a, b) -> b.compareTo(a));

// From another Map
Map<String, Integer> source = Map.of("One", 1, "Two", 2);
TreeMap<String, Integer> map3 = new TreeMap<>(source);

// From SortedMap
SortedMap<String, Integer> sorted = new TreeMap<>();
TreeMap<String, Integer> map4 = new TreeMap<>(sorted);

// Case-insensitive ordering
TreeMap<String, Integer> map5 = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);`}
            language="java"
          />
        </section>

        {/* Operations Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Operations</h2>
          <CodeBlock
            code={`TreeMap<String, Integer> map = new TreeMap<>();

// Basic operations
map.put("B", 2);
map.put("A", 1);
map.put("C", 3);  // Automatically sorted

// Navigation operations
String firstKey = map.firstKey();     // "A"
String lastKey = map.lastKey();       // "C"

// Range queries
SortedMap<String, Integer> headMap = map.headMap("B");  // < "B"
NavigableMap<String, Integer> subMap = 
    map.subMap("A", true, "C", false);  // A to C (exclusive)

// Descending view
NavigableMap<String, Integer> descendingMap = map.descendingMap();

// Iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`}
            language="java"
          />
        </section>

        {/* Custom Objects Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Custom Objects</h2>
          <CodeBlock
            code={`class Person implements Comparable<Person> {
    private String name;
    private int age;

    @Override
    public int compareTo(Person other) {
        return Comparator.comparing(Person::getName)
                        .thenComparingInt(Person::getAge)
                        .compare(this, other);
    }
}

// Using TreeMap with custom objects
TreeMap<Person, String> map = new TreeMap<>();
map.put(new Person("Alice", 25), "Developer");
map.put(new Person("Bob", 30), "Manager");`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`TreeMap<String, Integer> map = new TreeMap<>();
map.put("Apple", 1);
map.put("Banana", 2);

// Dry run:
System.out.println(map.firstKey());  // Output: "Apple"
map.remove("Apple");
System.out.println(map.firstKey());  // Output: "Banana"`}
            language="java"
          />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>TreeMap</code> when sorted order is required for keys.</li>
            <li>Avoid using null keys; <code>TreeMap</code> does not support them.</li>
            <li>Leverage <code>subMap()</code>, <code>headMap()</code>, and <code>tailMap()</code> for range queries.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not providing a consistent comparator for custom keys.</li>
            <li>Using mutable objects as keys.</li>
            <li>Expecting insertion order to be maintained.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use immutable keys for consistent behavior.</li>
            <li>Choose the appropriate comparator for sorting requirements.</li>
            <li>Plan for performance when handling large data sets.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TreeMap;