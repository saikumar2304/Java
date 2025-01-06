import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const DequeInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Deque Interface in Java
              </h1>
              <p className="text-gray-300">
                The Deque (Double Ended Queue) interface supports element insertion and removal at both ends. It can be used as both a queue (FIFO) and a stack (LIFO), providing a rich set of methods for both patterns.
              </p>
            </div>

            {/* Deque Methods */}
            <MethodCard
              title="Deque Methods"
              description="Core methods of the Deque interface"
            >
              <CodeBlock
                code={`Deque<String> deque = new ArrayDeque<>();

// First element (head) operations
deque.addFirst("First");     // Throws exception if no space
deque.offerFirst("First");   // Returns false if no space
deque.removeFirst();         // Throws exception if empty
deque.pollFirst();          // Returns null if empty
deque.getFirst();           // Throws exception if empty
deque.peekFirst();          // Returns null if empty

// Last element (tail) operations
deque.addLast("Last");      // Throws exception if no space
deque.offerLast("Last");    // Returns false if no space
deque.removeLast();         // Throws exception if empty
deque.pollLast();           // Returns null if empty
deque.getLast();            // Throws exception if empty
deque.peekLast();           // Returns null if empty

// Stack operations
deque.push("Top");          // Same as addFirst()
deque.pop();                // Same as removeFirst()
deque.peek();               // Same as peekFirst()

// Queue operations
deque.add("End");           // Same as addLast()
deque.offer("End");         // Same as offerLast()
deque.remove();             // Same as removeFirst()
deque.poll();               // Same as pollFirst()
deque.element();            // Same as getFirst()
deque.peek();               // Same as peekFirst()`}
                language="java"
              />
            </MethodCard>

            {/* Deque Implementations */}
            <MethodCard
              title="Deque Implementations"
              description="Different implementations of Deque"
            >
              <CodeBlock
                code={`// ArrayDeque implementation
Deque<Integer> arrayDeque = new ArrayDeque<>();
arrayDeque.addFirst(1);
arrayDeque.addLast(2);

// LinkedList implementation
Deque<String> linkedDeque = new LinkedList<>();
linkedDeque.offerFirst("First");
linkedDeque.offerLast("Last");

// Concurrent implementation
Deque<Task> concurrentDeque = new ConcurrentLinkedDeque<>();
concurrentDeque.push(new Task());

// Blocking implementation
BlockingDeque<String> blockingDeque = new LinkedBlockingDeque<>();
blockingDeque.putFirst("First");  // Blocks if full
blockingDeque.putLast("Last");    // Blocks if full

// As Stack replacement
Deque<String> stack = new ArrayDeque<>();
stack.push("First");
stack.push("Second");
String top = stack.pop();

// As Queue
Deque<String> queue = new ArrayDeque<>();
queue.offer("First");
queue.offer("Second");
String first = queue.poll();`}
                language="java"
              />
            </MethodCard>

            {/* Usage Patterns */}
            <MethodCard
              title="Usage Patterns"
              description="Common patterns with Deque"
            >
              <CodeBlock
                code={`// Stack pattern (LIFO)
Deque<String> stack = new ArrayDeque<>();
stack.push("Bottom");
stack.push("Middle");
stack.push("Top");

while (!stack.isEmpty()) {
    System.out.println(stack.pop());  // Top, Middle, Bottom
}

// Queue pattern (FIFO)
Deque<String> queue = new ArrayDeque<>();
queue.offer("First");
queue.offer("Second");
queue.offer("Third");

while (!queue.isEmpty()) {
    System.out.println(queue.poll());  // First, Second, Third
}

// Work stealing pattern
Deque<Task> workQueue = new ConcurrentLinkedDeque<>();
workQueue.offerLast(new Task());  // Add to own queue
Task stolen = workQueue.pollFirst(); // Steal from other's queue

// Sliding window
Deque<Integer> window = new ArrayDeque<>();
for (int i = 0; i < array.length; i++) {
    while (!window.isEmpty() && array[i] > array[window.peekLast()]) {
        window.pollLast();
    }
    window.offerLast(i);
    if (i - window.peekFirst() >= windowSize) {
        window.pollFirst();
    }
}`}
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
                  <span>Wrong method choice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring null returns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing exception handling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong implementation</span>
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
                  <span>Choose right methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consistent pattern use</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle edge cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider concurrency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Size management</span>
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
                  <span>Use ArrayDeque by default</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider blocking variants</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Batch operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory efficiency</span>
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
                  <span>Double-ended queue</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>FIFO and LIFO</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method pairs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementation choices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DequeInterface; 