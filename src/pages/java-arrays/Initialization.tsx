import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Initialization: React.FC = () => {
  const visualRepresentation = `
1. **Array Initialization Approaches**:
   - Declaration and memory allocation.
   - Declaration and direct initialization.
   - Anonymous arrays for inline use.

2. **Memory Allocation**:
   - Memory is allocated when using \`new\` or array literals.

3. **Default Values**:
   - Numeric types: 0.
   - Boolean: \`false\`.
   - Objects: \`null\`.

4. **Mutability**:
   - Final arrays can have their elements modified but cannot be reassigned.
`;

  const tips = [
    "Use array literals (`{}`) for small, predefined arrays.",
    "Combine declaration and initialization for concise code.",
    "Ensure arrays are initialized before accessing elements."
  ];

  const proTips = [
    "Use `Arrays.fill()` to quickly set all elements to a specific value.",
    "Anonymous arrays are useful for temporary operations.",
    "Utilize `System.arraycopy()` for efficient array copying."
  ];

  const bestPractices = [
    "Choose appropriate default values for clarity and consistency.",
    "Consider memory implications for large arrays.",
    "Use `final` to prevent accidental reassignment of arrays."
  ];

  const commonMistakes = [
    "Accessing uninitialized arrays, leading to a `NullPointerException`.",
    "Reassigning final arrays, which results in a compilation error.",
    "Assuming arrays are initialized with non-default values."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Array Initialization in Java
        </h1>
        <p className="text-lg text-gray-400">
          Arrays in Java can be initialized in various ways to suit different use cases. Understanding initialization methods is crucial for efficient and error-free programming.
        </p>
      </header>

      <main className="space-y-12">
        {/* Initialization Methods */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Array Initialization Methods
          </h2>
          <CodeBlock
            code={`// 1. Declaration and memory allocation
int[] arr = new int[5];

// 2. Declaration and initialization
int[] arr = {1, 2, 3, 4, 5};

// 3. Declaration, memory allocation, and initialization
int[] arr = new int[]{1, 2, 3, 4, 5};

// 4. Anonymous array
printArray(new int[]{1, 2, 3, 4, 5});`}
            language="java"
          />
        </section>

        {/* Default Values */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Default Values in Arrays
          </h2>
          <CodeBlock
            code={`int[] numbers = new int[5];     // All elements are 0
boolean[] flags = new boolean[5]; // All elements are false
String[] names = new String[5];   // All elements are null
char[] chars = new char[5];       // All elements are '\\u0000'
double[] doubles = new double[5]; // All elements are 0.0`}
            language="java"
          />
        </section>

        {/* Final Arrays */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Final Arrays</h2>
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
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run</h2>
          <CodeBlock
            code={`// Declare and initialize array
int[] numbers = {10, 20, 30, 40, 50};

// Step 1: Access and modify elements
numbers[0] = 100;  // Array becomes: [100, 20, 30, 40, 50]

// Step 2: Traverse and calculate sum
int sum = 0;
for (int num : numbers) {
    sum += num;  // sum: 0 -> 100 -> 120 -> 150 -> 190 -> 240
}
System.out.println("Sum: " + sum);  // Output: 240`}
            language="java"
          />
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <CodeBlock code={visualRepresentation} language="markdown" />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            {proTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Best Practices
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            {bestPractices.map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            {commonMistakes.map((mistake, index) => (
              <li key={index}>{mistake}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Initialization;