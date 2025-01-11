import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const ArrayList: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          ArrayList in Java
        </h1>
        <p className="text-lg text-gray-400">
          ArrayList is a resizable-array implementation of the <code>List</code> interface. It provides dynamic array functionality with automatic resizing and offers constant-time performance for basic operations like addition and retrieval.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            The <code>ArrayList</code> class is part of the Java Collections Framework. It allows duplicate elements and maintains insertion order. It is widely used for dynamic and flexible data storage in Java.
          </p>
          <CodeBlock
            code={`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Orange");

        System.out.println("ArrayList: " + list);  // Output: [Apple, Banana, Orange]
    }
}`}
            language="java"
          />
        </section>

        {/* Basic ArrayList Operations */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Basic Operations</h2>
          <CodeBlock
            code={`ArrayList<String> list = new ArrayList<>();

// Adding elements
list.add("First");  // Appends to the end
list.add(0, "Zero");  // Inserts at index 0

// Accessing elements
String element = list.get(0);  // Retrieves element at index 0

// Modifying elements
list.set(1, "New Value");  // Updates value at index 1

// Removing elements
list.remove(0);  // Removes element at index 0
list.clear();  // Clears the entire ArrayList

// Checking size and emptiness
int size = list.size();
boolean isEmpty = list.isEmpty();`}
            language="java"
          />
        </section>

        {/* Features and Advanced Operations */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Features and Advanced Operations</h2>
          <CodeBlock
            code={`ArrayList<Integer> numbers = new ArrayList<>();
numbers.addAll(Arrays.asList(1, 2, 3, 4, 5));

// Sublist view
List<Integer> subList = numbers.subList(1, 4); // [2, 3, 4]

// Sorting
Collections.sort(numbers);  // Ascending order
Collections.sort(numbers, Collections.reverseOrder());  // Descending order

// Converting to array
Integer[] array = numbers.toArray(new Integer[0]);

// Stream operations
numbers.stream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);`}
            language="java"
          />
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`ArrayList<String> list = new ArrayList<>();
list.add("One");
list.add("Two");
list.add("Three");

// Dry run:
for (String item : list) {
    System.out.println(item);
}

// Output:
// One
// Two
// Three`}
            language="java"
          />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Set an initial capacity to avoid frequent resizing.</li>
            <li>Use <code>contains()</code> to check if an element exists in the ArrayList.</li>
            <li>Combine <code>ArrayList</code> with <code>Collections.unmodifiableList()</code> for read-only lists.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>Collections.sort()</code> for ordering elements.</li>
            <li>Leverage <code>parallelStream()</code> for parallel operations on large datasets.</li>
            <li>Use <code>toArray()</code> for compatibility with legacy systems.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not specifying initial capacity for performance optimization.</li>
            <li>Assuming thread safety; use <code>Collections.synchronizedList()</code> for multi-threaded environments.</li>
            <li>Accessing elements out of bounds, leading to <code>IndexOutOfBoundsException</code>.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use <code>ArrayList</code> when random access is required.</li>
            <li>Trim unused space using <code>trimToSize()</code> after extensive removals.</li>
            <li>Validate inputs to avoid adding null or invalid data.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ArrayList;