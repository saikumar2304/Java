import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const IntroductionArrays: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Arrays in Java
              </h1>
              <p className="text-gray-300">
                An array in Java is a collection of similar type of elements that has contiguous memory location. Java array is an object which contains elements of a similar data type. Arrays provide a convenient way to group related data together.
              </p>
            </div>

            {/* Array Declaration Section */}
            <MethodCard
              title="Array Declaration"
              description="There are two ways to declare an array in Java"
            >
              <CodeBlock
                code={`// Method 1
dataType[] arrayName;
// Example
int[] numbers;

// Method 2
dataType arrayName[];
// Example
int numbers[];`}
                language="java"
              />
            </MethodCard>

            {/* Array Creation Section */}
            <MethodCard
              title="Array Creation"
              description="Arrays can be created using the new operator"
            >
              <CodeBlock
                code={`// Create an array of size 5
int[] numbers = new int[5];

// Create and initialize an array
int[] numbers = {1, 2, 3, 4, 5};`}
                language="java"
              />
            </MethodCard>

            {/* Accessing Array Elements Section */}
            <MethodCard
              title="Accessing Array Elements"
              description="Array elements are accessed using index numbers"
            >
              <CodeBlock
                code={`int[] numbers = {1, 2, 3, 4, 5};
// Access the first element
System.out.println(numbers[0]); // Output: 1
// Access the third element
System.out.println(numbers[2]); // Output: 3`}
                language="java"
              />
            </MethodCard>

            {/* Dry Run Example Section */}
            <MethodCard
              title="Dry Run Example"
              description="Let's understand how array operations work step by step"
            >
              <CodeBlock
                code={`// Step 1: Declare and initialize array
int[] scores = new int[5];  // Creates array: [0, 0, 0, 0, 0]

// Step 2: Assign values
scores[0] = 85;  // Array becomes: [85, 0, 0, 0, 0]
scores[1] = 92;  // Array becomes: [85, 92, 0, 0, 0]
scores[2] = 78;  // Array becomes: [85, 92, 78, 0, 0]

// Step 3: Access and modify
scores[1] = 95;  // Array becomes: [85, 95, 78, 0, 0]

// Step 4: Calculate sum
int sum = 0;
for(int i = 0; i < 3; i++) {
    sum += scores[i];  // sum: 85 -> 180 -> 258
}
double average = sum / 3.0;  // average: 86.0`}
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
                  <span>Array Index Out of Bounds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not Initializing Array</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong Array Size</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type Mismatch</span>
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
                  <span>Always initialize arrays before using them</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use array literal syntax when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Remember indices start from 0</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use array.length for size</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider ArrayList for dynamic arrays</span>
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
                  <span>Fixed size, contiguous memory</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Efficient for indexed access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not suitable for frequent insertions/deletions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Arrays.copyOf for copying</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ideal for static data collections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionArrays; 