import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const SortedSetInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                SortedSet Interface in Java
              </h1>
              <p className="text-gray-300">
                SortedSet is an interface that extends Set to provide a total ordering on its elements. The elements are ordered using their natural ordering or by a Comparator provided at set creation time. TreeSet is the most common implementation of SortedSet.
              </p>
            </div>

            {/* SortedSet Methods */}
            <MethodCard
              title="SortedSet Methods"
              description="Core methods of the SortedSet interface"
            >
              <CodeBlock
                code={`// Creating SortedSet
SortedSet<String> set = new TreeSet<>();  // Natural ordering
SortedSet<String> customSet = new TreeSet<>(Comparator.reverseOrder());

// Adding elements (automatically sorted)
set.add("Banana");
set.add("Apple");
set.add("Cherry");  // Will be stored as: Apple, Banana, Cherry

// Navigation operations
String first = set.first();     // Returns "Apple"
String last = set.last();       // Returns "Cherry"

// View operations
SortedSet<String> headSet = set.headSet("Banana");  // < "Banana"
SortedSet<String> tailSet = set.tailSet("Banana");  // >= "Banana"
SortedSet<String> subSet = set.subSet("Apple", "Cherry");  // >= "Apple" && < "Cherry"

// Comparator access
Comparator<? super String> comp = set.comparator();  // null for natural ordering

// Iteration (always in sorted order)
for (String element : set) {
    System.out.println(element);  // Prints in sorted order
}`}
                language="java"
              />
            </MethodCard>

            {/* Custom Objects */}
            <MethodCard
              title="Custom Objects in SortedSet"
              description="Using SortedSet with custom classes"
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
    
    // getters, setters, toString...
}

// Using natural ordering
SortedSet<Task> tasks = new TreeSet<>();
tasks.add(new Task("Low Priority", 3));
tasks.add(new Task("High Priority", 1));
tasks.add(new Task("Medium Priority", 2));

// Using custom comparator
SortedSet<Task> byName = new TreeSet<>(
    Comparator.comparing(task -> task.getName())
);

// Multiple criteria
Comparator<Task> multiComparator = Comparator
    .comparingInt(Task::getPriority)
    .thenComparing(Task::getName);
SortedSet<Task> multiSort = new TreeSet<>(multiComparator);`}
                language="java"
              />
            </MethodCard>

            {/* Common Use Cases */}
            <MethodCard
              title="Common Use Cases"
              description="Practical applications of SortedSet"
            >
              <CodeBlock
                code={`// Priority queue implementation
class PriorityTaskList {
    private SortedSet<Task> tasks = new TreeSet<>();
    
    public void addTask(Task task) {
        tasks.add(task);
    }
    
    public Task getNextTask() {
        if (tasks.isEmpty()) return null;
        Task next = tasks.first();
        tasks.remove(next);
        return next;
    }
    
    public SortedSet<Task> getTasksAbovePriority(int priority) {
        Task threshold = new Task("", priority);
        return tasks.headSet(threshold);
    }
}

// Range queries
class TimeSlotManager {
    private SortedSet<LocalTime> slots = new TreeSet<>();
    
    public void addSlot(LocalTime time) {
        slots.add(time);
    }
    
    public SortedSet<LocalTime> getSlotsBetween(
            LocalTime start, LocalTime end) {
        return slots.subSet(start, end);
    }
    
    public LocalTime getNextAvailableSlot(LocalTime after) {
        return slots.tailSet(after).first();
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
                  <span>Inconsistent comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modifying elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>View modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Range assumptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance expectations</span>
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
                  <span>Immutable elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consistent comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use natural ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document comparator</span>
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
                  <span>View optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Range operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom comparators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Navigation methods</span>
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
                  <span>Total ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Natural ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>View operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Range queries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comparator usage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortedSetInterface; 