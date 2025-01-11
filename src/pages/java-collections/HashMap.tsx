import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const HashMap: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          HashMap in Java
        </h1>
        <p className="text-lg text-gray-400">
          HashMap is a part of the Java Collections Framework that stores key-value pairs in a hash table. It offers constant-time performance for basic operations like adding, removing, and retrieving elements.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            HashMap is an implementation of the <code>Map</code> interface and is widely used for its efficiency. It does not maintain any order for its entries but allows one null key and multiple null values.
          </p>
          <CodeBlock
            code={`import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("One", 1);
        map.put("Two", 2);
        map.put("Three", 3);

        System.out.println("HashMap: " + map); // Output: {One=1, Two=2, Three=3}
    }
}`}
            language="java"
          />
        </section>

        {/* Creating HashMap */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Creating HashMap</h2>
          <CodeBlock
            code={`// Default constructor
HashMap<String, Integer> map1 = new HashMap<>();

// With initial capacity
HashMap<String, Integer> map2 = new HashMap<>(32);

// With capacity and load factor
HashMap<String, Integer> map3 = new HashMap<>(32, 0.75f);

// From another Map
Map<String, Integer> source = Map.of("One", 1, "Two", 2);
HashMap<String, Integer> map4 = new HashMap<>(source);

// Using Map.entry (Java 9+)
HashMap<String, Integer> map5 = new HashMap<>() {{
    put("One", 1);
    put("Two", 2);
}};

// Using factory methods (immutable)
Map<String, Integer> map6 = Map.ofEntries(
    Map.entry("One", 1),
    Map.entry("Two", 2)
);`}
            language="java"
          />
        </section>

        {/* Operations Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">HashMap Operations</h2>
          <CodeBlock
            code={`HashMap<String, Integer> map = new HashMap<>();

// Adding and retrieving elements
map.put("One", 1);
map.put("Two", 2);
Integer value = map.get("One");

// Conditional operations
map.putIfAbsent("Three", 3);
map.compute("Two", (k, v) -> v + 10);
map.merge("One", 5, Integer::sum);

// Removal operations
map.remove("One");
map.clear();

// Iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
} 

// Stream operations
map.entrySet().stream()
    .filter(e -> e.getValue() > 1)
    .map(Map.Entry::getKey)
    .forEach(System.out::println);`}
            language="java"
          />
        </section>

        {/* Custom Objects Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Using Custom Objects</h2>
          <CodeBlock
            code={`class Person {
    private String name;
    private int age;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person person = (Person) o;
        return age == person.age && name.equals(person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

// Using Person as key
HashMap<Person, String> map = new HashMap<>();
map.put(new Person("John", 30), "Developer");`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);

// Dry run:
System.out.println(map.get("A")); // Output: 1
map.put("A", 5);
System.out.println(map.get("A")); // Output: 5`}
            language="java"
          />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>getOrDefault()</code> for safe value retrieval.</li>
            <li>Combine <code>compute()</code> and <code>merge()</code> for efficient updates.</li>
            <li>Leverage <code>putIfAbsent()</code> to avoid overwriting existing values.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Optimize initial capacity for large data sets.</li>
            <li>Use immutable keys for consistency.</li>
            <li>Combine with <code>Stream API</code> for advanced filtering and transformations.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting to override <code>hashCode()</code> and <code>equals()</code>.</li>
            <li>Using mutable objects as keys.</li>
            <li>Not considering thread safety for concurrent operations.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Plan capacity and load factor for large maps.</li>
            <li>Use immutable objects as keys to avoid bugs.</li>
            <li>Validate inputs to avoid null values.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HashMap;