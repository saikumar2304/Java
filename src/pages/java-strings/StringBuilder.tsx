import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StringBuilder: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                StringBuilder in Java
              </h1>
              <p className="text-gray-300">
                StringBuilder provides a mutable sequence of characters and is not thread-safe. It's designed for efficient string manipulations in single-threaded environments, offering better performance than StringBuffer.
              </p>
            </div>

            {/* Creation and Initialization Section */}
            <MethodCard
              title="Creating StringBuilder"
              description="Different ways to initialize StringBuilder"
            >
              <CodeBlock
                code={`// Empty builder with default capacity (16)
StringBuilder sb1 = new StringBuilder();

// With initial capacity
StringBuilder sb2 = new StringBuilder(32);

// With initial string
StringBuilder sb3 = new StringBuilder("Hello");

// From CharSequence
CharSequence cs = "Hello";
StringBuilder sb4 = new StringBuilder(cs);

// Check capacity and length
System.out.println(sb3.capacity());  // 21 (16 + "Hello".length())
System.out.println(sb3.length());    // 5`}
                language="java"
              />
            </MethodCard>

            {/* Basic Operations Section */}
            <MethodCard
              title="Basic Operations"
              description="Common StringBuilder operations"
            >
              <CodeBlock
                code={`StringBuilder sb = new StringBuilder("Hello");

// Append operations (returns StringBuilder)
sb.append(" ")           // Hello 
  .append("World")       // Hello World
  .append(123)          // Hello World123
  .append(true);        // Hello World123true

// Insert operations
sb.insert(0, "Say ");    // Say Hello World123true
sb.insert(3, '-');       // Say-Hello World123true

// Delete operations
sb.delete(0, 4);         // Hello World123true
sb.deleteCharAt(5);      // HelloWorld123true

// Replace and substring
sb.replace(5, 10, "Java");  // HelloJava123true
String sub = sb.substring(5, 9);  // "Java"`}
                language="java"
              />
            </MethodCard>

            {/* Performance Optimization Section */}
            <MethodCard
              title="Performance Optimization"
              description="Tips for optimal StringBuilder usage"
            >
              <CodeBlock
                code={`// Pre-size for known content length
String[] words = {"Hello", "World", "Java"};
int totalLength = 0;
for (String word : words) {
    totalLength += word.length();
}
StringBuilder sb = new StringBuilder(totalLength + 2); // +2 for spaces

// Efficient string joining
for (String word : words) {
    sb.append(word).append(" ");
}

// Avoid unnecessary toString() calls
StringBuilder builder = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    builder.append(i);
    // Bad: String str = builder.toString(); // Don't do this in loop
}
// Good: Get string once after loop
String result = builder.toString();`}
                language="java"
              />
            </MethodCard>

            {/* Common Use Cases Section */}
            <MethodCard
              title="Common Use Cases"
              description="Typical scenarios for StringBuilder"
            >
              <CodeBlock
                code={`// Building complex strings
StringBuilder query = new StringBuilder()
    .append("SELECT * FROM users ")
    .append("WHERE age > 18 ")
    .append("AND country = 'US' ")
    .append("ORDER BY name");

// String concatenation in loops
StringBuilder numbers = new StringBuilder();
for (int i = 1; i <= 10; i++) {
    numbers.append(i)
           .append(i == 10 ? "" : ", ");
}

// Building formatted output
StringBuilder report = new StringBuilder()
    .append("Report Generated\\n")
    .append("================\\n")
    .append("Items: ").append(itemCount).append("\\n")
    .append("Total: $").append(String.format("%.2f", total));`}
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
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using in multi-threaded code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Frequent toString() calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not pre-sizing properly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary object creation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using + operator with StringBuilder</span>
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
                  <span>Estimate initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Chain method calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reuse instances when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clear instead of new when reusing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use for single-threaded ops</span>
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
                  <span>Not thread-safe</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Better performance than StringBuffer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dynamic capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method chaining support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringBuilder; 