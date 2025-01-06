import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ArrayList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                ArrayList in Java
              </h1>
              <p className="text-gray-300">
                ArrayList is a resizable-array implementation of the List interface. It provides dynamic array functionality with automatic resizing and offers constant-time performance for basic operations.
              </p>
            </div>

            {/* Creating ArrayList */}
            <MethodCard
              title="Creating ArrayList"
              description="Different ways to initialize ArrayList"
            >
              <CodeBlock
                code={`// Empty ArrayList
ArrayList<String> list1 = new ArrayList<>();

// ArrayList with initial capacity
ArrayList<Integer> list2 = new ArrayList<>(20);

// ArrayList from Collection
List<String> sourceList = Arrays.asList("A", "B", "C");
ArrayList<String> list3 = new ArrayList<>(sourceList);

// Using factory method (Java 9+)
List<String> list4 = new ArrayList<>(List.of("X", "Y", "Z"));

// Anonymous ArrayList
new ArrayList<String>() {{
    add("First");
    add("Second");
}};

// Type inference (Java 7+)
ArrayList<Map.Entry<String, Integer>> list5 = new ArrayList<>();`}
                language="java"
              />
            </MethodCard>

            {/* ArrayList Operations */}
            <MethodCard
              title="ArrayList Operations"
              description="Common ArrayList operations and their time complexity"
            >
              <CodeBlock
                code={`ArrayList<String> list = new ArrayList<>();

// Adding elements - O(1) amortized
list.add("First");                // Append
list.add(0, "Zero");             // Insert at index
list.addAll(Arrays.asList("A", "B")); // Add collection

// Accessing elements - O(1)
String element = list.get(0);     // Get by index
list.set(1, "New Value");        // Set at index

// Removing elements
list.remove(0);                  // Remove by index - O(n)
list.remove("A");                // Remove object - O(n)
list.clear();                    // Remove all - O(n)

// Searching - O(n)
int index = list.indexOf("B");   // First occurrence
int last = list.lastIndexOf("B"); // Last occurrence
boolean exists = list.contains("C"); // Check existence

// Size operations - O(1)
int size = list.size();
boolean empty = list.isEmpty();

// Bulk operations
list.ensureCapacity(100);        // Increase capacity
list.trimToSize();               // Trim unused space`}
                language="java"
              />
            </MethodCard>

            {/* ArrayList Features */}
            <MethodCard
              title="ArrayList Features"
              description="Advanced features and manipulations"
            >
              <CodeBlock
                code={`ArrayList<Integer> numbers = new ArrayList<>();
numbers.addAll(Arrays.asList(1, 2, 3, 4, 5));

// Sublist view
List<Integer> subList = numbers.subList(1, 4); // [2, 3, 4]

// Converting to array
Integer[] array = numbers.toArray(new Integer[0]);
Object[] objArray = numbers.toArray();

// Sorting
Collections.sort(numbers);                     // Natural order
Collections.sort(numbers, Collections.reverseOrder()); // Reverse

// Stream operations
numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .forEach(System.out::println);

// Parallel operations
numbers.parallelStream()
    .forEach(System.out::println);

// List to Map conversion
Map<Integer, String> map = numbers.stream()
    .collect(Collectors.toMap(
        n -> n,
        n -> "Number " + n
    ));`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not specifying initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Frequent resizing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory leaks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unchecked warnings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety issues</span>
                </li>
              </ul>
            </div>

            {/* Best Practices Section */}
            <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-200">
                Best Practices
              </h2>
              <ul className="space-y-3 text-green-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Set initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use generics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Trim unused space</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use proper iteration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider synchronization</span>
                </li>
              </ul>
            </div>

            {/* Pro Tips Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Pro Tips
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use factory methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage streams</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimize capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use bulk operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
                </li>
              </ul>
            </div>

            {/* Key Concepts Section */}
            <div className="bg-purple-900/20 border border-purple-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-200">
                Key Concepts
              </h2>
              <ul className="space-y-3 text-purple-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dynamic array</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Random access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Capacity growth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Time complexity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory usage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayList; 