import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Initialization: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Array Initialization in Java
              </h1>
              <p className="text-gray-300">
                Java provides several ways to initialize arrays. Understanding these methods helps in writing more efficient code and managing memory effectively.
              </p>
            </div>

            {/* Array Initialization Methods */}
            <MethodCard
              title="Array Initialization Methods"
              description="Different ways to initialize arrays in Java"
            >
              <CodeBlock
                code={`// 1. Declaration and memory allocation
int[] arr = new int[5];

// 2. Declaration and initialization
int[] arr = {1, 2, 3, 4, 5};

// 3. Declaration, memory allocation and initialization
int[] arr = new int[]{1, 2, 3, 4, 5};

// 4. Anonymous array
printArray(new int[]{1, 2, 3, 4, 5});`}
                language="java"
              />
            </MethodCard>

            {/* Default Values Section */}
            <MethodCard
              title="Default Values"
              description="Arrays are initialized with default values if not explicitly initialized"
            >
              <CodeBlock
                code={`int[] numbers = new int[5];     // All elements are 0
boolean[] flags = new boolean[5]; // All elements are false
String[] names = new String[5];   // All elements are null
char[] chars = new char[5];       // All elements are '\u0000'
double[] doubles = new double[5]; // All elements are 0.0`}
                language="java"
              />
            </MethodCard>

            {/* Final Arrays Section */}
            <MethodCard
              title="Final Arrays"
              description="Arrays declared as final can't be reassigned but elements can be modified"
            >
              <CodeBlock
                code={`// Creating a final array
final int[] NUMBERS = {1, 2, 3, 4, 5};

// Valid: modifying elements
NUMBERS[0] = 10;  // Array becomes: [10, 2, 3, 4, 5]

// Invalid: reassigning array
// NUMBERS = new int[]{6, 7, 8, 9, 10}; // Compilation error

// Example with objects
final String[] NAMES = {"John", "Jane"};
NAMES[0] = "Jim";  // Valid: modifying element
// NAMES = new String[]{"Bob", "Alice"}; // Invalid: reassigning array`}
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
                  <span>Forgetting new keyword with array size</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mixing declaration styles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reassigning final arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using variable size with array initializer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assuming non-default values</span>
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
                  <span>Use array literals for known values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initialize arrays at declaration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use final for constant arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider memory requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use appropriate default values</span>
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
                  <span>Multiple initialization methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Default values are type-specific</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Final arrays are still mutable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Size must be positive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory allocated at creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initialization; 