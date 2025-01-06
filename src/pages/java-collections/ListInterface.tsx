import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ListInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                List Interface in Java
              </h1>
              <p className="text-gray-300">
                The List interface extends Collection and represents an ordered sequence of elements. Lists maintain insertion order and allow duplicate elements, providing positional access and search operations.
              </p>
            </div>

            {/* Basic List Operations */}
            <MethodCard
              title="Basic List Operations"
              description="Core methods specific to List interface"
            >
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
            </MethodCard>

            {/* List Views and Sublists */}
            <MethodCard
              title="List Views and Sublists"
              description="Working with list views and sublists"
            >
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
            </MethodCard>

            {/* List Iteration */}
            <MethodCard
              title="List Iteration"
              description="Different ways to iterate over lists"
            >
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
    System.out.println(iterator.previousIndex() + ": " + 
        iterator.previous());
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
                  <span>Index out of bounds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sublist modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong remove method</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unchecked type casting</span>
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
                  <span>Check bounds first</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use proper implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider thread safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use type parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null values</span>
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
                  <span>Leverage ListIterator</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use subList wisely</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider immutability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use stream operations</span>
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
                  <span>Ordered collection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Index-based access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Positional insertion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>List views</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bidirectional iteration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListInterface; 