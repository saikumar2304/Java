import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StringComparison: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                String vs StringBuffer vs StringBuilder
              </h1>
              <p className="text-gray-300">
                Java provides three main classes for string manipulation: String, StringBuffer, and StringBuilder. Each has its own characteristics and use cases. Understanding their differences is crucial for writing efficient Java applications.
              </p>
            </div>

            {/* Feature Comparison Section */}
            <MethodCard
              title="Feature Comparison"
              description="Key differences between String, StringBuffer, and StringBuilder"
            >
              <CodeBlock
                code={`// String: Immutable
String str = "Hello";
str = str + " World";  // Creates new object

// StringBuffer: Mutable, Thread-safe
StringBuffer sbuf = new StringBuffer("Hello");
sbuf.append(" World");  // Modifies same object, synchronized

// StringBuilder: Mutable, Not Thread-safe
StringBuilder sbld = new StringBuilder("Hello");
sbld.append(" World");  // Modifies same object, not synchronized

// Performance comparison (approximate)
long startTime = System.nanoTime();
// StringBuilder: Fastest
// StringBuffer: ~10-15% slower than StringBuilder
// String concatenation: Much slower for multiple operations`}
                language="java"
              />
            </MethodCard>

            {/* Memory Usage Section */}
            <MethodCard
              title="Memory Usage Patterns"
              description="How each class manages memory"
            >
              <CodeBlock
                code={`// String: Creates new object for each operation
String s = "";
for(int i = 0; i < 5; i++) {
    s += i;  // Creates 5 new String objects
}

// StringBuffer: Reuses same object
StringBuffer sb = new StringBuffer(16);  // Initial capacity
for(int i = 0; i < 5; i++) {
    sb.append(i);  // Modifies same object
}

// StringBuilder: Similar to StringBuffer but without synchronization
StringBuilder sb = new StringBuilder(16);
for(int i = 0; i < 5; i++) {
    sb.append(i);  // Most memory efficient for single thread`}
                language="java"
              />
            </MethodCard>

            {/* Use Case Examples Section */}
            <MethodCard
              title="Use Case Examples"
              description="When to use each class"
            >
              <CodeBlock
                code={`// Use String for:
String name = "John";  // Simple string values
String constant = "PI";  // Constants
String immutable = "Cannot change";  // When immutability is needed

// Use StringBuffer for:
StringBuffer threadSafe = new StringBuffer();
// In multi-threaded environment
synchronized void appendLog(String log) {
    threadSafe.append(log).append("\\n");
}

// Use StringBuilder for:
StringBuilder query = new StringBuilder();
// Single-threaded, performance-critical code
for(String field : fields) {
    query.append(field).append(",");
}`}
                language="java"
              />
            </MethodCard>

            {/* Performance Benchmarks Section */}
            <MethodCard
              title="Performance Comparison"
              description="Benchmarking different string operations"
            >
              <CodeBlock
                code={`// Concatenation Performance Test
public class StringPerformance {
    public static void main(String[] args) {
        int iterations = 100000;
        
        // String concatenation
        long start = System.currentTimeMillis();
        String s = "";
        for(int i = 0; i < iterations; i++) {
            s += "a";
        }
        System.out.println("String: " + (System.currentTimeMillis() - start) + "ms");
        
        // StringBuffer
        start = System.currentTimeMillis();
        StringBuffer sbuf = new StringBuffer();
        for(int i = 0; i < iterations; i++) {
            sbuf.append("a");
        }
        System.out.println("StringBuffer: " + (System.currentTimeMillis() - start) + "ms");
        
        // StringBuilder
        start = System.currentTimeMillis();
        StringBuilder sbld = new StringBuilder();
        for(int i = 0; i < iterations; i++) {
            sbld.append("a");
        }
        System.out.println("StringBuilder: " + (System.currentTimeMillis() - start) + "ms");
    }
}`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar (3 columns) */}
          <div className="col-span-3 space-y-8">
            {/* String Characteristics */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                String
              </h2>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Immutable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread-safe</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>String pool support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Best for constants</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory intensive for changes</span>
                </li>
              </ul>
            </div>

            {/* StringBuffer Characteristics */}
            <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-200">
                StringBuffer
              </h2>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread-safe</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Synchronized methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Good for multi-threading</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Slower than StringBuilder</span>
                </li>
              </ul>
            </div>

            {/* StringBuilder Characteristics */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                StringBuilder
              </h2>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not thread-safe</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Best performance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Single-thread use</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringComparison; 