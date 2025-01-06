import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const QueueInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Queue Interface in Java
              </h1>
              <p className="text-gray-300">
                The Queue interface represents a collection designed for holding elements prior to processing. It follows the FIFO (First-In-First-Out) principle and provides specific insertion, extraction, and inspection operations.
              </p>
            </div>

            {/* Queue Methods */}
            <MethodCard
              title="Queue Methods"
              description="Core methods of the Queue interface"
            >
              <CodeBlock
                code={`Queue<String> queue = new LinkedList<>();

// Adding elements
queue.add("First");      // Throws exception if no space
queue.offer("Second");   // Returns false if no space

// Removing elements
String removed = queue.remove();  // Throws exception if empty
String polled = queue.poll();    // Returns null if empty

// Examining elements
String element = queue.element(); // Throws exception if empty
String peeked = queue.peek();    // Returns null if empty

// Method comparison table:
/*
Operation  | Throws Exception | Returns Special Value
Insert     | add(e)          | offer(e)
Remove     | remove()        | poll()
Examine    | element()       | peek()
*/`}
                language="java"
              />
            </MethodCard>

            {/* Queue Implementations */}
            <MethodCard
              title="Queue Implementations"
              description="Different implementations of Queue"
            >
              <CodeBlock
                code={`// LinkedList implementation
Queue<Integer> linkedQueue = new LinkedList<>();

// PriorityQueue implementation
Queue<String> priorityQueue = new PriorityQueue<>();

// ArrayDeque implementation
Queue<Double> arrayDeque = new ArrayDeque<>();

// Concurrent implementation
Queue<String> concurrentQueue = new ConcurrentLinkedQueue<>();

// Blocking Queue implementations
BlockingQueue<Integer> arrayBlockingQueue = 
    new ArrayBlockingQueue<>(10);
BlockingQueue<String> linkedBlockingQueue = 
    new LinkedBlockingQueue<>();
BlockingQueue<Double> priorityBlockingQueue = 
    new PriorityBlockingQueue<>();

// Deque as Queue
Queue<String> dequeAsQueue = new ArrayDeque<>();`}
                language="java"
              />
            </MethodCard>

            {/* Queue Usage Examples */}
            <MethodCard
              title="Queue Usage Examples"
              description="Common queue usage patterns"
            >
              <CodeBlock
                code={`// Basic queue operations
Queue<String> queue = new LinkedList<>();

// Producer code
void produce(String item) {
    while (!queue.offer(item)) {
        // Queue is full, wait or handle
    }
}

// Consumer code
String consume() {
    String item = queue.poll();
    if (item == null) {
        // Queue is empty, wait or handle
    }
    return item;
}

// Using BlockingQueue for producer-consumer
BlockingQueue<Task> taskQueue = new LinkedBlockingQueue<>();

// Producer with blocking
void produceTask(Task task) {
    taskQueue.put(task);  // Blocks if queue is full
}

// Consumer with blocking
Task consumeTask() {
    return taskQueue.take();  // Blocks if queue is empty
}

// Iterating over a queue
for (String item : queue) {
    // Process item (doesn't remove from queue)
}

// Draining a queue
List<String> list = new ArrayList<>();
queue.drainTo(list);  // Moves all elements to list`}
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
                  <span>Wrong implementation choice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring return values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not handling exceptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect capacity planning</span>
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
                  <span>Choose right implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use offer/poll pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider blocking queues</span>
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
                  <span>Use for producer-consumer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider timeouts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Batch operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Monitor queue size</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use drain operations</span>
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
                  <span>FIFO principle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Queue operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Blocking behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementation types</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueInterface; 