import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const LinkedList: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          LinkedList in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>LinkedList</code> class in Java is a doubly-linked list implementation of the <code>List</code> and <code>Deque</code> interfaces. It provides efficient insertions and deletions, especially in the middle of the list, making it ideal for specific use cases.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            <code>LinkedList</code> implements a doubly-linked list structure, where each element (node) has references to the previous and next elements. It supports all optional operations of the <code>List</code> and <code>Deque</code> interfaces and is ideal for sequential access and dynamic data storage.
          </p>
          <CodeBlock
            code={`import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Orange");

        System.out.println("LinkedList: " + list);  // Output: [Apple, Banana, Orange]
    }
}`}
            language="java"
          />
        </section>

        {/* Basic LinkedList Operations */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Basic Operations</h2>
          <CodeBlock
            code={`LinkedList<Integer> list = new LinkedList<>();

// Adding elements
list.add(1);           // Adds at end
list.addFirst(0);      // Adds at beginning
list.addLast(2);       // Adds at end
list.add(1, 5);        // Adds at index

// Accessing elements
int first = list.getFirst(); // Get first element
int last = list.getLast();   // Get last element
int element = list.get(1);   // Get by index

// Removing elements
list.removeFirst();          // Removes first element
list.removeLast();           // Removes last element
list.remove(1);              // Removes element at index 1`}
            language="java"
          />
        </section>

        {/* Advanced Features */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Advanced Features</h2>
          <CodeBlock
            code={`LinkedList<Integer> list = new LinkedList<>();
list.addAll(Arrays.asList(1, 2, 3, 4));

// Using Deque methods
list.offerFirst(0);   // Adds at beginning
list.offerLast(5);    // Adds at end
list.poll();          // Retrieves and removes first element

// Stack operations
list.push(6);         // Pushes element to the front
int popped = list.pop(); // Removes and returns first element

// Iteration
for (Integer num : list) {
    System.out.println(num);
}`}
            language="java"
          />
        </section>

        {/* LinkedList vs ArrayList */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">LinkedList vs ArrayList</h2>
          <CodeBlock
            code={`// LinkedList: Efficient for frequent insertions/deletions
LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.addFirst(1);  // O(1) insertion
linkedList.addLast(2);   // O(1) insertion

// ArrayList: Efficient for random access
ArrayList<Integer> arrayList = new ArrayList<>();
arrayList.add(1);
arrayList.add(2);
int element = arrayList.get(1);  // O(1) access`}
            language="java"
          />
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`LinkedList<String> list = new LinkedList<>();
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
            <li>Use <code>LinkedList</code> for frequent insertions and deletions.</li>
            <li>Avoid random access as it has O(n) time complexity.</li>
            <li>Prefer <code>Deque</code> methods for queue-like operations.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>offer()</code> and <code>poll()</code> for efficient queue operations.</li>
            <li>Leverage <code>push()</code> and <code>pop()</code> for stack operations.</li>
            <li>Combine with <code>Collections.synchronizedList()</code> for thread-safe usage.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using <code>LinkedList</code> for random access, leading to poor performance.</li>
            <li>Mixing access patterns inefficiently.</li>
            <li>Ignoring memory overhead due to node storage.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use <code>LinkedList</code> when frequent insertions or deletions are required.</li>
            <li>Optimize memory usage by ensuring proper usage of <code>LinkedList</code> for sequential access.</li>
            <li>Profile performance for large data sets to choose the appropriate collection type.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default LinkedList;