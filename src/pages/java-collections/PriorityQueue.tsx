import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const PriorityQueue: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                PriorityQueue in Java
              </h1>
              <p className="text-gray-300">
                PriorityQueue is an implementation of a priority heap that orders elements according to their natural order or a custom Comparator. Elements are retrieved in order of priority, with the head of the queue being the least element according to the specified ordering.
              </p>
            </div>

            {/* Creating PriorityQueue */}
            <MethodCard
              title="Creating PriorityQueue"
              description="Different ways to initialize PriorityQueue"
            >
              <CodeBlock
                code={`// Default constructor (natural ordering)
PriorityQueue<Integer> pq1 = new PriorityQueue<>();

// With initial capacity
PriorityQueue<String> pq2 = new PriorityQueue<>(10);

// With Comparator (reverse order)
PriorityQueue<Integer> pq3 = new PriorityQueue<>(
    Comparator.reverseOrder()
);

// From Collection
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5);
PriorityQueue<Integer> pq4 = new PriorityQueue<>(list);

// Custom Comparator for objects
PriorityQueue<Task> pq5 = new PriorityQueue<>((t1, t2) -> 
    Integer.compare(t1.getPriority(), t2.getPriority())
);

// With capacity and Comparator
PriorityQueue<String> pq6 = new PriorityQueue<>(
    10, 
    String.CASE_INSENSITIVE_ORDER
);`}
                language="java"
              />
            </MethodCard>

            {/* PriorityQueue Operations */}
            <MethodCard
              title="PriorityQueue Operations"
              description="Common operations with PriorityQueue"
            >
              <CodeBlock
                code={`PriorityQueue<Integer> queue = new PriorityQueue<>();

// Adding elements
queue.offer(5);     // Preferred method
queue.add(3);       // Same as offer
queue.add(7);
queue.add(1);

// Examining elements
Integer head = queue.peek();    // View head (smallest) element
Integer element = queue.element(); // Same as peek but throws if empty

// Removing elements
Integer removed = queue.poll();  // Remove and return head
queue.remove();                 // Same as poll but throws if empty
queue.clear();                  // Remove all elements

// Size operations
int size = queue.size();
boolean empty = queue.isEmpty();

// Converting to array (not in priority order)
Object[] array = queue.toArray();

// Removing specific element
queue.remove(5);    // Removes one occurrence of 5

// Checking contents
boolean contains = queue.contains(3);`}
                language="java"
              />
            </MethodCard>

            {/* Custom Objects in PriorityQueue */}
            <MethodCard
              title="Custom Objects in PriorityQueue"
              description="Using PriorityQueue with custom classes"
            >
              <CodeBlock
                code={`class Task implements Comparable<Task> {
    private int priority;
    private String name;
    
    public Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
    
    @Override
    public int compareTo(Task other) {
        return Integer.compare(this.priority, other.priority);
    }
}

// Using natural ordering
PriorityQueue<Task> taskQueue = new PriorityQueue<>();
taskQueue.offer(new Task("Low Priority", 3));
taskQueue.offer(new Task("High Priority", 1));
taskQueue.offer(new Task("Medium Priority", 2));

// Using custom comparator
PriorityQueue<Task> customQueue = new PriorityQueue<>(
    (t1, t2) -> t2.priority - t1.priority  // Reverse order
);

// Multiple criteria
Comparator<Task> multiComparator = Comparator
    .comparingInt((Task t) -> t.priority)
    .thenComparing(t -> t.name);
PriorityQueue<Task> multiQueue = new PriorityQueue<>(multiComparator);`}
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
                  <span>Assuming array order</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inconsistent comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modifying elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong capacity planning</span>
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
                  <span>Use offer/poll methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proper comparison logic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Immutable priorities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initial capacity planning</span>
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
                  <span>Custom comparators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Heap operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bulk operations</span>
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
                  <span>Priority heap</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Natural ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Element ordering</span>
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

export default PriorityQueue; 