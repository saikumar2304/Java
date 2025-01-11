import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const IntroductionArrays: React.FC = () => {
  const visualRepresentation = `
1. **Array Creation**:
   - Declare the array.
   - Use \`new\` keyword to allocate memory or initialize with values.

2. **Memory Layout**:
   - Arrays are stored in contiguous memory.
   - Each element is accessible via its index.

3. **Indexed Access**:
   - Indices start at 0.
   - Example:
     \`\`\`java
     int[] numbers = {10, 20, 30};
     System.out.println(numbers[1]); // Output: 20
     \`\`\`

4. **Fixed Size**:
   - Once an array is created, its size cannot change.
`;

  const tips = [
    "Use array literal syntax for better readability when initializing small arrays.",
    "Always check the array size using `array.length` to avoid `IndexOutOfBoundsException`.",
    "Consider using enhanced for-loop (`for-each`) for simple traversal."
  ];

  const proTips = [
    "For dynamic array sizes, consider using `ArrayList` or other collections.",
    "Use `Arrays.copyOf` for resizing an array while preserving existing elements.",
    "Leverage Java's `Streams` for complex operations like filtering and mapping on arrays."
  ];

  const bestPractices = [
    "Always initialize arrays before use to avoid null references.",
    "Use `array.length` instead of hardcoding sizes in loops.",
    "When passing arrays to methods, be mindful of reference behavior (modifications reflect outside the method)."
  ];

  const commonMistakes = [
    "Accessing invalid indices (e.g., negative or greater than `array.length - 1`).",
    "Using uninitialized arrays, leading to a `NullPointerException`.",
    "Confusing zero-based indices with one-based logic."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Arrays in Java
        </h1>
        <p className="text-lg text-gray-400">
          Arrays in Java are a collection of elements stored in contiguous memory. They allow efficient storage and retrieval of related data using indices.
        </p>
      </header>

      <main className="space-y-12">
        {/* Array Declaration Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Array Declaration</h2>
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
        </section>

        {/* Array Creation Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Array Creation</h2>
          <CodeBlock
            code={`// Create an array of size 5
int[] numbers = new int[5];

// Create and initialize an array
int[] numbers = {1, 2, 3, 4, 5};`}
            language="java"
          />
        </section>

        {/* Accessing Array Elements Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Accessing Array Elements
          </h2>
          <CodeBlock
            code={`int[] numbers = {1, 2, 3, 4, 5};
// Access the first element
System.out.println(numbers[0]); // Output: 1
// Access the third element
System.out.println(numbers[2]); // Output: 3`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run</h2>
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
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            {bestPractices.map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
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

export default IntroductionArrays;