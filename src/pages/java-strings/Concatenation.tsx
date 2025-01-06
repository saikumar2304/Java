import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StringConcatenation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                String Concatenation in Java
              </h1>
              <p className="text-gray-300">
                String concatenation is the process of combining multiple strings into a single string. Java provides several ways to concatenate strings, each with its own advantages and use cases.
              </p>
            </div>

            {/* Basic Concatenation Section */}
            <MethodCard
              title="Basic String Concatenation"
              description="Different ways to concatenate strings"
            >
              <CodeBlock
                code={`// Using + operator
String str1 = "Hello" + " " + "World";  // Hello World

// Using concat() method
String str2 = "Hello".concat(" ").concat("World");

// Using String.join()
String str3 = String.join(" ", "Hello", "World");

// With different data types
int num = 42;
String str4 = "Number: " + num;  // Number: 42
String str5 = "Value: " + 3.14;  // Value: 3.14`}
                language="java"
              />
            </MethodCard>

            {/* StringBuilder Section */}
            <MethodCard
              title="Using StringBuilder"
              description="Efficient string concatenation with StringBuilder"
            >
              <CodeBlock
                code={`// Efficient way to concatenate multiple strings
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();

// Chaining append calls
StringBuilder sb2 = new StringBuilder()
    .append("Hello")
    .append(" ")
    .append("World");
String result2 = sb2.toString();

// With initial capacity
StringBuilder sb3 = new StringBuilder(50);  // Preallocate buffer`}
                language="java"
              />
            </MethodCard>

            {/* Performance Comparison Section */}
            <MethodCard
              title="Performance Comparison"
              description="Comparing different concatenation methods"
            >
              <CodeBlock
                code={`// Bad: String concatenation in loop
String result1 = "";
for(int i = 0; i < 1000; i++) {
    result1 += i;  // Creates new String object each time
}

// Good: StringBuilder in loop
StringBuilder sb = new StringBuilder();
for(int i = 0; i < 1000; i++) {
    sb.append(i);  // Modifies same object
}
String result2 = sb.toString();

// Also Good: StringBuffer for thread-safety
StringBuffer buffer = new StringBuffer();
for(int i = 0; i < 1000; i++) {
    buffer.append(i);
}
String result3 = buffer.toString();`}
                language="java"
              />
            </MethodCard>

            {/* Format Strings Section */}
            <MethodCard
              title="Format Strings"
              description="Using String.format() for concatenation"
            >
              <CodeBlock
                code={`// Using String.format()
String name = "John";
int age = 30;
String formatted = String.format("Name: %s, Age: %d", name, age);

// Using printf style
System.out.printf("Name: %s, Age: %d%n", name, age);

// With different format specifiers
double price = 49.99;
String product = "Widget";
String output = String.format(
    "Product: %s, Price: $%.2f",
    product, price
);`}
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
                  <span>Using + operator in loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring StringBuilder</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not estimating capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mixing concat methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary conversions</span>
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
                  <span>Use StringBuilder for loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Set initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Choose appropriate method</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider thread safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use format for complex strings</span>
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
                  <span>Multiple concatenation methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance considerations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>StringBuilder efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Format string flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringConcatenation; 