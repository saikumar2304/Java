import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const HashSet: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          HashSet in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <code>HashSet</code> class in Java is part of the <code>java.util</code> package and implements the <code>Set</code> interface. It stores unique elements in a hash table, ensuring constant-time performance for basic operations like add, remove, and contains.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            The <code>HashSet</code> does not maintain insertion order and allows one null element. It is commonly used for fast searches and efficient removal of duplicate elements.
          </p>
          <CodeBlock
            code={`import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple");  // Duplicate, won't be added

        System.out.println(set);  // Output: [Apple, Banana]
    }
}`}
            language="java"
          />
        </section>

        {/* Creating HashSet */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Creating HashSet</h2>
          <CodeBlock
            code={`// Default constructor
HashSet<String> set1 = new HashSet<>();

// With initial capacity
HashSet<Integer> set2 = new HashSet<>(32);

// With capacity and load factor
HashSet<Double> set3 = new HashSet<>(32, 0.8f);

// From Collection
List<String> list = Arrays.asList("A", "B", "C");
HashSet<String> set4 = new HashSet<>(list);

// Using addAll
HashSet<Integer> set5 = new HashSet<>();
set5.addAll(Arrays.asList(1, 2, 3));

// Using factory methods (Java 9+)
Set<String> set6 = Set.of("X", "Y", "Z");`}
            language="java"
          />
        </section>

        {/* Common Operations */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Common Operations</h2>
          <CodeBlock
            code={`HashSet<String> set = new HashSet<>();

// Adding elements
set.add("Apple");         // Returns true if added
set.add("Banana");
set.add("Apple");         // Returns false (duplicate)

// Bulk operations
set.addAll(Arrays.asList("Orange", "Mango"));

// Removing elements
set.remove("Apple");      // Returns true if removed
set.removeAll(Arrays.asList("Orange", "Mango"));
set.clear();             // Removes all elements

// Querying the set
boolean exists = set.contains("Banana");
int size = set.size();
boolean empty = set.isEmpty();

// Iteration
for (String element : set) {
    System.out.println(element);
}

// Stream operations
set.stream()
   .filter(s -> s.startsWith("A"))
   .forEach(System.out::println);`}
            language="java"
          />
        </section>

        {/* Using Custom Objects */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Using Custom Objects</h2>
          <CodeBlock
            code={`class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person person = (Person) o;
        return age == person.age &&
               Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

// Using HashSet with custom objects
HashSet<Person> people = new HashSet<>();
people.add(new Person("John", 30));
people.add(new Person("Jane", 25));
people.add(new Person("John", 30));  // Duplicate, won't be added`}
            language="java"
          />
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`HashSet<String> set = new HashSet<>();
set.add("One");
set.add("Two");
set.add("Three");

// Dry run:
for (String element : set) {
    System.out.println(element);
}

// Output (Order not guaranteed):
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
            <li>Use <code>HashSet</code> when duplicates need to be avoided.</li>
            <li>Always implement <code>equals</code> and <code>hashCode</code> when using custom objects.</li>
            <li>Use bulk operations like <code>addAll()</code> for efficiency.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Set an appropriate initial capacity and load factor for performance optimization.</li>
            <li>Use <code>LinkedHashSet</code> if insertion order is important.</li>
            <li>Combine with <code>Stream API</code> for advanced operations.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting to override <code>equals</code> and <code>hashCode</code>.</li>
            <li>Expecting the elements to be in insertion order.</li>
            <li>Using mutable objects as keys, leading to unexpected behavior.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use immutable objects for better reliability in <code>HashSet</code>.</li>
            <li>Profile performance when working with large datasets.</li>
            <li>Leverage <code>removeIf()</code> for condition-based removals.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HashSet;