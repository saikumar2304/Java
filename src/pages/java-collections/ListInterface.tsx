import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const ListInterface: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          List Interface in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>List</code> interface in Java extends the <code>Collection</code> interface and represents an ordered sequence of elements. It allows duplicate elements and provides positional access to elements.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            A <code>List</code> in Java maintains the order of insertion and allows indexed access to elements. Common implementations include <code>ArrayList</code>, <code>LinkedList</code>, and <code>Vector</code>.
          </p>
          <CodeBlock
            code={`import java.util.*;

List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Orange");

System.out.println(list);  // Output: [Apple, Banana, Orange]`}
            language="java"
          />
        </section>

        {/* Basic List Operations */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Basic List Operations</h2>
          <CodeBlock
            code={`List<String> list = new ArrayList<>();

// Adding elements
list.add("First");                  // Adds at end
list.add(0, "Zero");               // Adds at index
list.addAll(Arrays.asList("A", "B")); // Adds collection
list.addAll(1, Arrays.asList("X", "Y")); // Adds at index

// Accessing elements
String element = list.get(0);       // Get element at index
int index = list.indexOf("First");  // Find first occurrence
int last = list.lastIndexOf("A");   // Find last occurrence

// Modifying elements
list.set(0, "New First");          // Replace element
list.replaceAll(String::toUpperCase); // Replace all elements

// Removing elements
list.remove(0);                    // Remove by index
list.remove("A");                  // Remove by object
list.subList(1, 3).clear();        // Remove range`}
            language="java"
          />
        </section>

        {/* List Views and Sublists */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">List Views and Sublists</h2>
          <CodeBlock
            code={`List<Integer> numbers = new ArrayList<>(
    Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
);

// Creating sublist
List<Integer> subList = numbers.subList(2, 5); // [3, 4, 5]

// Modifying sublist affects original list
subList.clear(); // Removes elements 3, 4, 5 from numbers

// List views
List<Integer> unmodifiableList = 
    Collections.unmodifiableList(numbers);
List<Integer> synchronizedList = 
    Collections.synchronizedList(numbers);

// Sorting
Collections.sort(numbers);                     // Natural order
Collections.sort(numbers, Collections.reverseOrder()); // Reverse

// Binary search (list must be sorted)
Collections.sort(numbers);
int pos = Collections.binarySearch(numbers, 5);`}
            language="java"
          />
        </section>

        {/* List Iteration */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">List Iteration</h2>
          <CodeBlock
            code={`List<String> fruits = Arrays.asList("Apple", "Banana", "Orange");

// Using for-each loop
for (String fruit : fruits) {
    System.out.println(fruit);
}

// Using ListIterator
ListIterator<String> iterator = fruits.listIterator();
while (iterator.hasNext()) {
    System.out.println(iterator.nextIndex() + ": " + iterator.next());
}

// Backward iteration
while (iterator.hasPrevious()) {
    System.out.println(iterator.previousIndex() + ": " + iterator.previous());
}

// Using streams
fruits.stream()
    .filter(f -> f.startsWith("A"))
    .map(String::toUpperCase)
    .forEach(System.out::println);

// Using forEach method
fruits.forEach(System.out::println);`}
            language="java"
          />
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`List<Integer> numbers = Arrays.asList(10, 20, 30);

// Dry run:
int sum = 0;
for (int num : numbers) {
    sum += num;
}
System.out.println("Sum: " + sum);  // Output: Sum: 60`}
            language="java"
          />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>ArrayList</code> for dynamic arrays.</li>
            <li>Use <code>LinkedList</code> for frequent insertions and deletions.</li>
            <li>Always prefer interface types (<code>List</code>) for flexibility.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Leverage <code>subList()</code> for efficient list partitions.</li>
            <li>Use <code>Collections.synchronizedList()</code> for thread safety.</li>
            <li>Stream operations can simplify list manipulations.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Modifying a list while iterating without using an iterator.</li>
            <li>Not handling <code>IndexOutOfBoundsException</code> for index-based operations.</li>
            <li>Using sublists without understanding their impact on the original list.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Choose the right implementation based on your needs.</li>
            <li>Always validate indices before accessing or modifying lists.</li>
            <li>Use immutable lists for read-only data.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ListInterface;