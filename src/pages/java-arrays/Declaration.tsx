import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Declaration: React.FC = () => {
  const visualRepresentation = `
1. **Array Declaration**:
   - Syntax:
     \`\`\`java
     dataType[] arrayName;
     dataType arrayName[];
     \`\`\`
   - Examples:
     \`\`\`java
     int[] numbers;  // Recommended
     int numbers[];  // Also valid
     \`\`\`

2. **Initialization**:
   - Allocate memory using the \`new\` keyword.
   - Example:
     \`\`\`java
     int[] numbers = new int[5];  // Array with 5 elements
     \`\`\`

3. **Combined Declaration and Initialization**:
   - Example:
     \`\`\`java
     int[] numbers = {10, 20, 30, 40, 50};
     \`\`\`
`;

  const tips = [
    "Use the `dataType[] arrayName` syntax for better readability.",
    "Combine declaration and initialization whenever possible to simplify code.",
    "Use array literals (`{}`) for small arrays to make the code concise."
  ];

  const proTips = [
    "When working with large arrays, consider lazy initialization to save memory.",
    "Use the `Arrays` class for common operations like sorting and filling.",
    "Always validate array indices before accessing elements."
  ];

  const bestPractices = [
    "Declare arrays close to their usage for better maintainability.",
    "Initialize arrays immediately after declaration to avoid null references.",
    "Use `arrayName.length` for dynamic iteration instead of hardcoding sizes."
  ];

  const commonMistakes = [
    "Accessing uninitialized arrays, leading to `NullPointerException`.",
    "Confusing zero-based indexing with one-based logic.",
    "Declaring arrays without specifying their type or size."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Array Declaration in Java
        </h1>
        <p className="text-lg text-gray-400">
          Arrays in Java are objects that store multiple variables of the same type. Understanding how to declare and initialize arrays is key to working with them effectively.
        </p>
      </header>

      <main className="space-y-12">
        {/* What is an Array? */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is an Array?</h2>
          <p className="text-gray-300">
            An array is a collection of elements of the same type stored in contiguous memory locations. Arrays in Java are objects that allow efficient storage and management of related data.
          </p>
        </section>

        {/* Declaration Syntax */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Declaration Syntax</h2>
          <CodeBlock
            code={`dataType[] arrayName; // Recommended style\ndataType arrayName[]; // Also valid but less common`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            Use the syntax that suits your coding style, but consistency improves readability.
          </p>
        </section>

        {/* Initialization */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Array Initialization</h2>
          <CodeBlock
            code={`// Separate declaration and initialization
int[] numbers = new int[5];  // Allocates memory for 5 integers
numbers[0] = 10;            // Sets the first element to 10

// Combined declaration and initialization
int[] numbers = {1, 2, 3, 4, 5};`}
            language="java"
          />
        </section>

        {/* Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Example</h2>
          <CodeBlock
            code={`public class ArrayExample {
    public static void main(String[] args) {
        // Declare and initialize an array
        int[] numbers = {10, 20, 30, 40, 50};

        // Iterate through the array and print each element
        for (int num : numbers) {
            System.out.println("Number: " + num);
        }
    }
}`}
            language="java"
          />
        </section>

        {/* Key Points */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Key Points</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Arrays in Java are zero-indexed, meaning the first element is at index 0.</li>
            <li>Once defined, the size of an array cannot be changed.</li>
            <li>Java arrays are objects and have built-in properties like <code>length</code> to determine their size.</li>
          </ul>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run</h2>
          <CodeBlock
            code={`int[] numbers = new int[3];  // Declares and initializes array with default values
numbers[0] = 10;              // Array becomes: [10, 0, 0]
numbers[1] = 20;              // Array becomes: [10, 20, 0]
numbers[2] = 30;              // Array becomes: [10, 20, 30]

for (int num : numbers) {
    System.out.print(num + " "); // Output: 10 20 30
}`}
            language="java"
          />
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Visual Representation</h2>
          <CodeBlock code={visualRepresentation} language="markdown" />
        </section>

        {/* Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            {proTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            {bestPractices.map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes */}
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

export default Declaration;