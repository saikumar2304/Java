import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const TreeSet: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          TreeSet in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>TreeSet</code> class in Java is a part of the <code>java.util</code> package and implements the <code>NavigableSet</code> interface. It is a collection that uses a Red-Black Tree to store elements in a sorted and ordered manner.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            The <code>TreeSet</code> ensures that the elements are always sorted, either in their natural order or according to a provided comparator. It offers efficient operations for retrieval, insertion, and navigation.
          </p>
          <CodeBlock
            code={`import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        TreeSet<String> set = new TreeSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); // Duplicate, won't be added

        System.out.println("TreeSet: " + set);  // Output: [Apple, Banana]
    }
}`}
            language="java"
          />
        </section>

        {/* Creating TreeSet */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Creating TreeSet</h2>
          <CodeBlock
            code={`// Default constructor (natural ordering)
TreeSet<String> set1 = new TreeSet<>();

// With custom Comparator
TreeSet<String> set2 = new TreeSet<>((a, b) -> b.compareTo(a)); // Reverse order

// From Collection
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5);
TreeSet<Integer> set3 = new TreeSet<>(list); // Will be sorted

// Using factory methods (Java 9+)
NavigableSet<String> set4 = new TreeSet<>(Set.of("C", "A", "B")); // Sorted`}
            language="java"
          />
        </section>

        {/* Common Operations */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Common Operations</h2>
          <CodeBlock
            code={`TreeSet<Integer> set = new TreeSet<>();

// Adding elements (automatically sorted)
set.add(5);
set.add(2);
set.add(8);

// Navigation operations
Integer first = set.first();     // Returns 2
Integer last = set.last();      // Returns 8
Integer lower = set.lower(5);   // Returns 2
Integer higher = set.higher(5); // Returns 8

// Range view operations
SortedSet<Integer> headSet = set.headSet(5); // Elements < 5
SortedSet<Integer> tailSet = set.tailSet(5); // Elements >= 5`}
            language="java"
          />
        </section>

        {/* Using Custom Objects */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Using Custom Objects</h2>
          <CodeBlock
            code={`class Person implements Comparable<Person> {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public int compareTo(Person other) {
        return Integer.compare(this.age, other.age);
    }
}

// Using TreeSet with custom objects
TreeSet<Person> people = new TreeSet<>();
people.add(new Person("John", 30));
people.add(new Person("Jane", 25));`}
            language="java"
          />
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`TreeSet<String> set = new TreeSet<>();
set.add("One");
set.add("Two");
set.add("Three");

// Dry run:
for (String element : set) {
    System.out.println(element);
}

// Output:
// One
// Three
// Two`}
            language="java"
          />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use <code>TreeSet</code> when sorted order is required.</li>
            <li>Always implement <code>Comparable</code> or provide a custom <code>Comparator</code> for custom objects.</li>
            <li>Avoid modifying elements stored in the <code>TreeSet</code> to prevent inconsistent behavior.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Leverage <code>subSet()</code>, <code>headSet()</code>, and <code>tailSet()</code> for range operations.</li>
            <li>Use <code>Comparator.comparing()</code> for complex comparison logic.</li>
            <li>Combine <code>TreeSet</code> with <code>Stream API</code> for efficient data processing.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not overriding <code>compareTo()</code> or providing an inconsistent comparator.</li>
            <li>Expecting insertion order to be maintained.</li>
            <li>Using mutable objects, which can break tree consistency.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use immutable elements for consistent behavior.</li>
            <li>Choose appropriate comparators for custom sorting requirements.</li>
            <li>Validate inputs to prevent null values, as <code>TreeSet</code> does not allow them.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TreeSet;