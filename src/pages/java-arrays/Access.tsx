import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Access: React.FC = () => {
  const visualRepresentation = `
1. **Accessing Array Elements**:
   - Use the array name followed by the index in square brackets to access elements.
     \`\`\`java
     arrayName[index];
     \`\`\`
   
2. **Bounds Checking**:
   - Array indices are 0-based; an index of -1 or greater than or equal to the length will result in an \`ArrayIndexOutOfBoundsException\`.
   
3. **Iteration**:
   - Access elements using loops like the traditional \`for\` loop or enhanced \`for\` loop.
   
4. **Element Modification**:
   - Elements in an array can be modified by directly assigning a new value to the element at a specific index.
`;

  const tips = [
    "Always check array bounds before accessing elements to avoid runtime errors.",
    "Use the enhanced `for` loop for cleaner, more readable code when traversing arrays.",
    "Avoid hardcoding array indices, use `array.length` for dynamic traversal."
  ];

  const proTips = [
    "Use `Arrays.toString()` to quickly print arrays for debugging purposes.",
    "For multi-dimensional arrays, use nested loops or `Arrays.deepToString()` for printing.",
    "Consider `ArrayList` for dynamically sized arrays if you need frequent resizing or additions."
  ];

  const bestPractices = [
    "Declare and initialize arrays before using them to prevent `NullPointerException`.",
    "Always use the correct index range (0 to `array.length - 1`) to avoid accessing invalid elements.",
    "When modifying arrays, ensure that the array’s size is adequate to handle the new data."
  ];

  const commonMistakes = [
    "Accessing array indices outside the valid range, resulting in `ArrayIndexOutOfBoundsException`.",
    "Not initializing an array before accessing its elements.",
    "Confusing zero-based indices with one-based logic, especially when dealing with loops."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Accessing and Modifying Array Elements in Java
        </h1>
        <p className="text-lg text-gray-400">
          Arrays in Java are a powerful way to store data, and understanding how to access and modify their elements is essential for efficient programming.
        </p>
      </header>

      <main className="space-y-12">
        {/* Accessing Elements */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Accessing Array Elements</h2>
          <CodeBlock
            code={`// Accessing elements in the array
int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[0]); // Output: 10
System.out.println(numbers[2]); // Output: 30`}
            language="java"
          />
        </section>

        {/* Modifying Array Elements */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Modifying Array Elements</h2>
          <CodeBlock
            code={`// Modifying an array element
int[] numbers = {10, 20, 30, 40, 50};
numbers[1] = 25;  // Array becomes: [10, 25, 30, 40, 50]
System.out.println(numbers[1]);  // Output: 25`}
            language="java"
          />
        </section>

        {/* Iterating Through Arrays */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Iterating Through Arrays</h2>
          <CodeBlock
            code={`// Traditional for loop
int[] numbers = {1, 2, 3, 4, 5};
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// Enhanced for loop
for (int num : numbers) {
    System.out.println(num);
}`}
            language="java"
          />
        </section>

        {/* Key Points */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Key Points</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Array indices in Java are zero-based, meaning the first element is at index 0.</li>
            <li>Always validate array indices to prevent `ArrayIndexOutOfBoundsException`.</li>
            <li>Array elements can be modified by accessing them via their index and assigning a new value.</li>
          </ul>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run</h2>
          <CodeBlock
            code={`// Example with array access and modification
int[] numbers = {10, 20, 30, 40, 50};

// Step 1: Accessing and printing elements
System.out.println(numbers[0]); // Output: 10
System.out.println(numbers[2]); // Output: 30

// Step 2: Modifying an element
numbers[1] = 25;  // Array becomes: [10, 25, 30, 40, 50]

// Step 3: Printing updated element
System.out.println(numbers[1]); // Output: 25`}
            language="java"
          />
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Visual Representation</h2>
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

export default Access;