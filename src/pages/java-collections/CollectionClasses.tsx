import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const CollectionClasses: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Collection Classes in Java
              </h1>
              <p className="text-gray-300">
                Java provides several collection classes that implement the collection interfaces. Each class has its own characteristics, implementation details, and use cases.
              </p>
            </div>

            {/* List Classes */}
            <MethodCard
              title="List Classes"
              description="ArrayList, LinkedList, and Vector implementations"
            >
              <CodeBlock
                code={`// ArrayList - Dynamic array implementation
ArrayList<String> arrayList = new ArrayList<>();
arrayList.add("First");
arrayList.add("Second");
arrayList.add(1, "Inserted"); // Insert at index 1

// LinkedList - Doubly-linked list implementation
LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.addFirst(1);  // Add at beginning
linkedList.addLast(3);   // Add at end
linkedList.add(1, 2);    // Add at index 1

// Vector - Thread-safe dynamic array
Vector<Double> vector = new Vector<>();
vector.add(1.1);
vector.add(2.2);
vector.elementAt(0);  // Access element

// Stack - LIFO data structure
Stack<String> stack = new Stack<>();
stack.push("Bottom");
stack.push("Top");
String top = stack.pop();  // Removes and returns "Top"`}
                language="java"
              />
            </MethodCard>

            {/* Set Classes */}
            <MethodCard
              title="Set Classes"
              description="HashSet, LinkedHashSet, and TreeSet implementations"
            >
              <CodeBlock
                code={`// HashSet - Hash table implementation
HashSet<String> hashSet = new HashSet<>();
hashSet.add("Apple");
hashSet.add("Banana");
hashSet.add("Apple");  // Duplicate not added

// LinkedHashSet - Ordered HashSet
LinkedHashSet<Integer> linkedHashSet = new LinkedHashSet<>();
linkedHashSet.add(3);
linkedHashSet.add(1);
linkedHashSet.add(2);
// Maintains insertion order: [3, 1, 2]

// TreeSet - Sorted Set implementation
TreeSet<String> treeSet = new TreeSet<>();
treeSet.add("Charlie");
treeSet.add("Alpha");
treeSet.add("Bravo");
// Automatically sorted: [Alpha, Bravo, Charlie]

// NavigableSet methods in TreeSet
TreeSet<Integer> numbers = new TreeSet<>();
numbers.addAll(Arrays.asList(1, 3, 5, 7, 9));
System.out.println(numbers.lower(5));    // 3
System.out.println(numbers.higher(5));   // 7
System.out.println(numbers.floor(4));    // 3
System.out.println(numbers.ceiling(4));  // 5`}
                language="java"
              />
            </MethodCard>

            {/* Queue Classes */}
            <MethodCard
              title="Queue Classes"
              description="PriorityQueue and Deque implementations"
            >
              <CodeBlock
                code={`// PriorityQueue - Heap implementation
PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
priorityQueue.offer(3);
priorityQueue.offer(1);
priorityQueue.offer(2);
// Elements dequeued in natural order: 1, 2, 3

// ArrayDeque - Array implementation of Deque
ArrayDeque<String> arrayDeque = new ArrayDeque<>();
arrayDeque.addFirst("First");
arrayDeque.addLast("Last");
arrayDeque.offerFirst("New First");
arrayDeque.offerLast("New Last");

// Using ArrayDeque as a Stack
ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(1);        // addFirst()
stack.push(2);
System.out.println(stack.pop());  // removeFirst()

// Using ArrayDeque as a Queue
ArrayDeque<Integer> queue = new ArrayDeque<>();
queue.offer(1);       // addLast()
queue.offer(2);
System.out.println(queue.poll()); // removeFirst()`}
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
                  <span>Wrong class selection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring performance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety issues</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect initialization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Misusing iterators</span>
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
                  <span>Choose appropriate class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Set initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use proper methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider synchronization</span>
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
                  <span>Use ArrayList by default</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prefer ArrayDeque to Stack</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider load factor</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use concurrent versions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement custom ordering</span>
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
                  <span>Data structures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Time complexity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementation details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionClasses; 