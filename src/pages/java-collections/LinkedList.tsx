import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const LinkedList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                LinkedList in Java
              </h1>
              <p className="text-gray-300">
                LinkedList is a doubly-linked list implementation of the List and Deque interfaces. It provides efficient insertion and removal operations when compared to ArrayList, especially for operations in the middle of the list.
              </p>
            </div>

            {/* Creating LinkedList */}
            <MethodCard
              title="Creating LinkedList"
              description="Different ways to initialize LinkedList"
            >
              <CodeBlock
                code={`// Empty LinkedList
LinkedList<String> list1 = new LinkedList<>();

// LinkedList from Collection
List<String> source = Arrays.asList("A", "B", "C");
LinkedList<String> list2 = new LinkedList<>(source);

// Using add methods
LinkedList<Integer> list3 = new LinkedList<>();
list3.add(1);          // Adds to end
list3.addFirst(0);     // Adds at beginning
list3.addLast(2);      // Adds at end
list3.add(1, 5);      // Adds at index

// Using offer methods (from Queue interface)
LinkedList<String> list4 = new LinkedList<>();
list4.offer("First");     // Adds to end
list4.offerFirst("Zero"); // Adds at beginning
list4.offerLast("Last");  // Adds at end`}
                language="java"
              />
            </MethodCard>

            {/* LinkedList Operations */}
            <MethodCard
              title="LinkedList Operations"
              description="Common LinkedList operations and their usage"
            >
              <CodeBlock
                code={`LinkedList<String> list = new LinkedList<>();

// Adding elements
list.add("First");           // Adds at end
list.addFirst("Start");      // Adds at beginning
list.addLast("End");        // Adds at end
list.add(1, "Middle");      // Adds at index

// Accessing elements
String first = list.getFirst();  // Get first element
String last = list.getLast();    // Get last element
String element = list.get(1);    // Get by index
String peek = list.peek();       // Get first (doesn't remove)
String peekLast = list.peekLast(); // Get last (doesn't remove)

// Removing elements
String removed = list.remove();      // Removes first
list.remove(1);                     // Removes at index
list.removeFirst();                 // Removes first
list.removeLast();                  // Removes last
String poll = list.poll();          // Removes and returns first
String pollLast = list.pollLast();  // Removes and returns last

// Checking elements
boolean exists = list.contains("First");
int index = list.indexOf("Middle");
int lastIndex = list.lastIndexOf("End");

// Stack operations
list.push("New First");    // Adds at beginning
String popped = list.pop(); // Removes and returns first`}
                language="java"
              />
            </MethodCard>

            {/* LinkedList vs ArrayList */}
            <MethodCard
              title="LinkedList vs ArrayList"
              description="Performance comparison and use cases"
            >
              <CodeBlock
                code={`// LinkedList advantages
LinkedList<Integer> linkedList = new LinkedList<>();
// O(1) insertion at beginning/end
linkedList.addFirst(1);  // Constant time
linkedList.addLast(2);   // Constant time

// O(1) removal from beginning/end
linkedList.removeFirst();
linkedList.removeLast();

// ArrayList advantages
ArrayList<Integer> arrayList = new ArrayList<>();
// O(1) random access
int element = arrayList.get(5);  // Constant time

// Memory comparison
LinkedList<Integer> memory1 = new LinkedList<>();
ArrayList<Integer> memory2 = new ArrayList<>();
// LinkedList: 24 bytes per node (object overhead + prev/next pointers)
// ArrayList: 4 bytes per element + array overhead

// Performance test
long start = System.nanoTime();
for(int i = 0; i < 100000; i++) {
    linkedList.add(0, i);  // O(1)
}
long linkedListTime = System.nanoTime() - start;

start = System.nanoTime();
for(int i = 0; i < 100000; i++) {
    arrayList.add(0, i);   // O(n)
}
long arrayListTime = System.nanoTime() - start;`}
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
                  <span>Random access operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong collection choice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory overhead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mixing access patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring null checks</span>
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
                  <span>Use for frequent insertions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prefer Deque methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sequential access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider memory usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use proper interface</span>
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
                  <span>Use as Deque/Queue</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Iterator efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bulk operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cache considerations</span>
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
                  <span>Doubly-linked list</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Node structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sequential access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory overhead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Time complexity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedList; 