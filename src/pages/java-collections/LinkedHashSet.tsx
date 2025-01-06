import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const LinkedHashSet: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                LinkedHashSet in Java
              </h1>
              <p className="text-gray-300">
                LinkedHashSet is a HashSet implementation that maintains insertion order of elements. It combines a hash table with a linked list to give the best of both worlds: O(1) operations of HashSet with predictable iteration order.
              </p>
            </div>

            {/* Creating LinkedHashSet */}
            <MethodCard
              title="Creating LinkedHashSet"
              description="Different ways to initialize LinkedHashSet"
            >
              <CodeBlock
                code={`// Default constructor
LinkedHashSet<String> set1 = new LinkedHashSet<>();

// With initial capacity
LinkedHashSet<Integer> set2 = new LinkedHashSet<>(32);

// With capacity and load factor
LinkedHashSet<Double> set3 = new LinkedHashSet<>(32, 0.8f);

// From Collection
List<String> list = Arrays.asList("A", "B", "C");
LinkedHashSet<String> set4 = new LinkedHashSet<>(list);

// Using factory methods (Java 9+)
Set<String> set5 = new LinkedHashSet<>(Set.of("X", "Y", "Z"));

// Copy constructor
LinkedHashSet<String> set6 = new LinkedHashSet<>(set4);`}
                language="java"
              />
            </MethodCard>

            {/* LinkedHashSet Operations */}
            <MethodCard
              title="LinkedHashSet Operations"
              description="Common operations with LinkedHashSet"
            >
              <CodeBlock
                code={`LinkedHashSet<String> set = new LinkedHashSet<>();

// Adding elements (maintains insertion order)
set.add("First");
set.add("Second");
set.add("Third");
set.add("First");  // Duplicate not added, order unchanged

// Bulk operations
set.addAll(Arrays.asList("Fourth", "Fifth"));

// Removing elements
set.remove("Second");
set.removeAll(Arrays.asList("Fourth", "Fifth"));

// Querying the set
boolean exists = set.contains("First");
int size = set.size();
boolean empty = set.isEmpty();

// Iteration (predictable order)
for (String element : set) {
    System.out.println(element);  // Prints in insertion order
}

// Converting to array (maintains order)
String[] array = set.toArray(new String[0]);

// Stream operations (maintains order)
set.stream()
   .filter(s -> s.startsWith("F"))
   .forEach(System.out::println);`}
                language="java"
              />
            </MethodCard>

            {/* Performance Characteristics */}
            <MethodCard
              title="Performance Characteristics"
              description="Understanding LinkedHashSet behavior"
            >
              <CodeBlock
                code={`// Memory overhead comparison
HashSet<Integer> hashSet = new HashSet<>();
LinkedHashSet<Integer> linkedHashSet = new LinkedHashSet<>();
TreeSet<Integer> treeSet = new TreeSet<>();

// Performance measurement
long start = System.nanoTime();

// Adding elements
for (int i = 0; i < 100000; i++) {
    linkedHashSet.add(i);
}

// Iteration (LinkedHashSet is faster than HashSet for iteration)
for (Integer num : linkedHashSet) {
    // Process number
}

// Memory usage
// LinkedHashSet uses more memory than HashSet
// Extra memory for linked list pointers
// But less memory than TreeSet

// Order preservation example
LinkedHashSet<String> orderSet = new LinkedHashSet<>();
orderSet.add("One");
orderSet.add("Two");
orderSet.add("Three");
orderSet.remove("Two");
orderSet.add("Two");  // Goes to the end
// Iteration order: One, Three, Two`}
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
                  <span>Ignoring memory overhead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong capacity planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing equals/hashCode</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary usage</span>
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
                  <span>Plan initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider memory usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement equals/hashCode</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use when order matters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null properly</span>
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
                  <span>Use for caching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimize iteration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance profiling</span>
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
                  <span>Insertion order</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hash table structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Linked list backing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory overhead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance trade-offs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedHashSet; 