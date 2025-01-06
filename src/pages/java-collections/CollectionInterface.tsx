import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const CollectionInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Collection Interface in Java
              </h1>
              <p className="text-gray-300">
                The Collection interface is the root interface of the collection hierarchy. It provides the basic operations for working with groups of objects and defines the methods that all collections will have.
              </p>
            </div>

            {/* Basic Methods */}
            <MethodCard
              title="Basic Collection Methods"
              description="Core methods of the Collection interface"
            >
              <CodeBlock
                code={`Collection<String> collection = new ArrayList<>();

// Adding elements
collection.add("One");              // Add single element
collection.addAll(Arrays.asList("Two", "Three")); // Add multiple elements

// Removing elements
collection.remove("One");           // Remove specific element
collection.removeAll(Arrays.asList("Two", "Three")); // Remove multiple
collection.clear();                 // Remove all elements

// Querying collection
int size = collection.size();       // Number of elements
boolean isEmpty = collection.isEmpty(); // Check if empty
boolean contains = collection.contains("One"); // Check for element

// Converting to array
Object[] array = collection.toArray();     // Convert to Object array
String[] strArray = collection.toArray(new String[0]); // Type-safe array`}
                language="java"
              />
            </MethodCard>

            {/* Bulk Operations */}
            <MethodCard
              title="Bulk Operations"
              description="Operations that work on multiple elements"
            >
              <CodeBlock
                code={`Collection<String> c1 = new ArrayList<>();
Collection<String> c2 = new ArrayList<>();

// Adding elements
c1.addAll(Arrays.asList("A", "B", "C"));
c2.addAll(Arrays.asList("B", "C", "D"));

// Bulk operations
c1.containsAll(c2);    // Check if c1 contains all elements of c2
c1.addAll(c2);        // Add all elements from c2 to c1
c1.retainAll(c2);     // Keep only elements that are in both c1 and c2
c1.removeAll(c2);     // Remove all elements that are in c2 from c1

// Stream operations
c1.stream()
  .filter(s -> s.startsWith("A"))
  .forEach(System.out::println);

// Parallel operations
c1.parallelStream()
  .map(String::toUpperCase)
  .collect(Collectors.toList());`}
                language="java"
              />
            </MethodCard>

            {/* Iterator Usage */}
            <MethodCard
              title="Iterator Methods"
              description="Using iterators with collections"
            >
              <CodeBlock
                code={`Collection<Integer> numbers = new ArrayList<>();
numbers.addAll(Arrays.asList(1, 2, 3, 4, 5));

// Basic iteration
Iterator<Integer> iterator = numbers.iterator();
while (iterator.hasNext()) {
    Integer number = iterator.next();
    System.out.println(number);
}

// Removing elements during iteration
Iterator<Integer> removeIterator = numbers.iterator();
while (removeIterator.hasNext()) {
    Integer number = removeIterator.next();
    if (number % 2 == 0) {
        removeIterator.remove(); // Safe way to remove during iteration
    }
}

// For-each loop (syntactic sugar for Iterator)
for (Integer number : numbers) {
    System.out.println(number);
}

// Spliterator for parallel iteration
Spliterator<Integer> spliterator = numbers.spliterator();
spliterator.forEachRemaining(System.out::println);`}
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
                  <span>Modifying during iteration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not using generics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring return values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Null element handling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
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
                  <span>Use interface types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check return values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use proper iteration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle exceptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider immutability</span>
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
                  <span>Use stream API</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage bulk operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider parallel streams</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use factory methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement custom collections</span>
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
                  <span>Collection hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Iterator pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bulk operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optional returns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInterface; 