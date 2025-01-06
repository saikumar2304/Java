import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StringBuffer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                StringBuffer in Java
              </h1>
              <p className="text-gray-300">
                StringBuffer provides a mutable sequence of characters and is thread-safe. It's designed for string manipulations in multi-threaded environments where synchronization is required.
              </p>
            </div>

            {/* Creation and Initialization Section */}
            <MethodCard
              title="Creating StringBuffer"
              description="Different ways to initialize StringBuffer"
            >
              <CodeBlock
                code={`// Empty buffer with default capacity (16)
StringBuffer sb1 = new StringBuffer();

// With initial capacity
StringBuffer sb2 = new StringBuffer(32);

// With initial string
StringBuffer sb3 = new StringBuffer("Hello");

// Copy constructor
StringBuffer sb4 = new StringBuffer(sb3);

// Check capacity and length
System.out.println(sb3.capacity());  // 21 (16 + "Hello".length())
System.out.println(sb3.length());    // 5`}
                language="java"
              />
            </MethodCard>

            {/* Basic Operations Section */}
            <MethodCard
              title="Basic Operations"
              description="Common StringBuffer operations"
            >
              <CodeBlock
                code={`StringBuffer sb = new StringBuffer("Hello");

// Append operations
sb.append(" ");           // Hello 
sb.append("World");       // Hello World
sb.append(123);          // Hello World123
sb.append(true);         // Hello World123true

// Insert operations
sb.insert(5, "!");       // Hello! World123true
sb.insert(0, "Say ");    // Say Hello! World123true

// Delete operations
sb.delete(0, 4);         // Hello! World123true
sb.deleteCharAt(5);      // Hello World123true

// Replace operations
sb.replace(6, 11, "Java");  // Hello Java123true`}
                language="java"
              />
            </MethodCard>

            {/* String Manipulation Section */}
            <MethodCard
              title="String Manipulation"
              description="Advanced string operations with StringBuffer"
            >
              <CodeBlock
                code={`StringBuffer sb = new StringBuffer("Hello World");

// Reverse the string
sb.reverse();  // dlroW olleH
sb.reverse();  // Hello World

// Substring operations
String sub = sb.substring(6);     // "World"
String sub2 = sb.substring(0, 5); // "Hello"

// Character operations
sb.setCharAt(0, 'h');            // hello World
char ch = sb.charAt(0);          // 'h'

// Change length
sb.setLength(5);                 // "hello"`}
                language="java"
              />
            </MethodCard>

            {/* Thread Safety Section */}
            <MethodCard
              title="Thread Safety Example"
              description="Demonstrating thread-safe operations"
            >
              <CodeBlock
                code={`class SharedBuffer {
    private StringBuffer buffer = new StringBuffer();
    
    public void appendThread(String text) {
        synchronized(this) {
            buffer.append(text);
            buffer.append("\\n");
        }
    }
}

// Usage in multiple threads
SharedBuffer shared = new SharedBuffer();
Thread t1 = new Thread(() -> shared.appendThread("Thread 1"));
Thread t2 = new Thread(() -> shared.appendThread("Thread 2"));
t1.start();
t2.start();`}
                language="java"
              />
            </MethodCard>

            {/* Performance Considerations Section */}
            <MethodCard
              title="Performance Optimization"
              description="Tips for optimal StringBuffer usage"
            >
              <CodeBlock
                code={`// Set initial capacity to avoid resizing
int expectedSize = 100;
StringBuffer sb = new StringBuffer(expectedSize);

// Chaining operations
StringBuffer result = new StringBuffer()
    .append("Hello")
    .append(" ")
    .append("World")
    .append("!")
    .append("\\n");

// Ensure capacity before large operations
StringBuffer large = new StringBuffer();
large.ensureCapacity(1000);  // Pre-allocate space

// Trim to size after operations
large.trimToSize();  // Release unused memory`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar (3 columns) */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not setting initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory leaks in loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring return values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using when StringBuilder fits</span>
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
                  <span>Set appropriate capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use for thread-safe ops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Chain method calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Release unused memory</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check buffer overflow</span>
                </li>
              </ul>
            </div>

            {/* Key Points Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Key Points
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread-safe implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable string operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dynamic capacity growth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Synchronized methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance overhead</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringBuffer; 