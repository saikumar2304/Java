import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StackClass: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Stack Class in Java
              </h1>
              <p className="text-gray-300">
                Stack is a legacy class that extends Vector and implements the LIFO (Last-In-First-Out) stack data structure. While still supported, it's recommended to use ArrayDeque for stack operations in modern Java applications.
              </p>
            </div>

            {/* Basic Stack Operations */}
            <MethodCard
              title="Basic Stack Operations"
              description="Core stack operations using Stack class"
            >
              <CodeBlock
                code={`// Creating a Stack
Stack<String> stack = new Stack<>();

// Pushing elements (adding to top)
stack.push("First");
stack.push("Second");
stack.push("Third");

// Peeking at top element (without removing)
String top = stack.peek();  // Returns "Third"

// Popping elements (removing from top)
String popped = stack.pop();  // Returns and removes "Third"

// Checking if stack is empty
boolean isEmpty = stack.empty();

// Finding element position from top
int position = stack.search("First");  // Returns distance from top

// Stack size
int size = stack.size();

// Checking if element exists
boolean exists = stack.contains("Second");`}
                language="java"
              />
            </MethodCard>

            {/* Modern Alternative */}
            <MethodCard
              title="Modern Alternative (ArrayDeque)"
              description="Using ArrayDeque as a stack (recommended approach)"
            >
              <CodeBlock
                code={`// Creating a stack using ArrayDeque
Deque<String> stack = new ArrayDeque<>();

// Adding elements
stack.push("First");
stack.push("Second");
stack.push("Third");

// Peeking at top element
String top = stack.peek();      // Non-throwing
String first = stack.getFirst(); // Throws if empty

// Removing elements
String popped = stack.pop();     // Throws if empty
String removed = stack.remove(); // Same as pop()

// Checking if stack is empty
boolean isEmpty = stack.isEmpty();

// Getting size
int size = stack.size();

// Converting to array
Object[] array = stack.toArray();

// Clearing the stack
stack.clear();

// Bulk operations
stack.addAll(Arrays.asList("A", "B", "C"));`}
                language="java"
              />
            </MethodCard>

            {/* Stack Implementation Example */}
            <MethodCard
              title="Custom Stack Implementation"
              description="Example of implementing a stack"
            >
              <CodeBlock
                code={`public class CustomStack<T> {
    private ArrayList<T> list = new ArrayList<>();
    
    // Push element to top
    public void push(T element) {
        list.add(element);
    }
    
    // Pop element from top
    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return list.remove(list.size() - 1);
    }
    
    // Peek at top element
    public T peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return list.get(list.size() - 1);
    }
    
    // Check if stack is empty
    public boolean isEmpty() {
        return list.isEmpty();
    }
    
    // Get stack size
    public int size() {
        return list.size();
    }
    
    // Clear the stack
    public void clear() {
        list.clear();
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
                  <span>Using Vector methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring empty checks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using legacy Stack class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Random access operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety confusion</span>
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
                  <span>Use ArrayDeque instead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle empty states</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check capacity needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider thread safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use proper interfaces</span>
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
                  <span>Use Deque interface</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider custom implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimize for use case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use exception handling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Monitor performance</span>
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
                  <span>LIFO principle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Stack operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Vector inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modern alternatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackClass; 