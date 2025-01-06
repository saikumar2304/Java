import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const CollectionsIntro: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Java Collections Framework
              </h1>
              <p className="text-gray-300">
                The Java Collections Framework provides a unified architecture for representing and manipulating collections of objects. It contains interfaces, implementations, and algorithms to process collections efficiently.
              </p>
            </div>

            {/* Collection Hierarchy */}
            <MethodCard
              title="Collection Hierarchy"
              description="Overview of the Collections Framework hierarchy"
            >
              <CodeBlock
                code={`// Collection Interface Hierarchy
Collection (interface)
├── List (interface)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
│       └── Stack
├── Set (interface)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
└── Queue (interface)
    ├── PriorityQueue
    └── Deque (interface)
        └── ArrayDeque

// Map Interface (separate hierarchy)
Map (interface)
├── HashMap
├── LinkedHashMap
├── TreeMap
└── Hashtable`}
                language="java"
              />
            </MethodCard>

            {/* Basic Collection Usage */}
            <MethodCard
              title="Basic Collection Usage"
              description="Common collection operations"
            >
              <CodeBlock
                code={`import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        // List example
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Orange");
        
        // Set example
        Set<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(2); // Duplicate not added
        
        // Map example
        Map<String, Integer> map = new HashMap<>();
        map.put("One", 1);
        map.put("Two", 2);
        
        // Queue example
        Queue<String> queue = new LinkedList<>();
        queue.offer("First");
        queue.offer("Second");
        
        // Iterating collections
        for (String fruit : list) {
            System.out.println(fruit);
        }
        
        // Using Iterator
        Iterator<Integer> iterator = set.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }`}
                language="java"
              />
            </MethodCard>

            {/* Collection Utilities */}
            <MethodCard
              title="Collection Utilities"
              description="Using Collections utility class"
            >
              <CodeBlock
                code={`// Collections utility methods
List<Integer> numbers = new ArrayList<>();
numbers.addAll(Arrays.asList(3, 1, 4, 1, 5, 9));

// Sorting
Collections.sort(numbers);

// Binary search
int index = Collections.binarySearch(numbers, 4);

// Finding min/max
int min = Collections.min(numbers);
int max = Collections.max(numbers);

// Reversing
Collections.reverse(numbers);

// Shuffling
Collections.shuffle(numbers);

// Unmodifiable collections
List<String> immutableList = 
    Collections.unmodifiableList(new ArrayList<>());

// Synchronized collections
List<String> syncList = 
    Collections.synchronizedList(new ArrayList<>());`}
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
                  <span>Not using generics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong collection choice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory leaks</span>
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
                  <span>Choose right collection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use generics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider thread safety</span>
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
                  <span>Stream operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Utility methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance tuning</span>
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
                  <span>Collection interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementation classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Iteration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsIntro; 