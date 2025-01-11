import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Sorting: React.FC = () => {
  const visualRepresentation = `
1. **Sorting Algorithms in Java**:
   - Sorting algorithms are used to arrange elements in a specific order, either ascending or descending.
   - Common sorting algorithms: Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort.

2. **Sorting Arrays**:
   - Java provides built-in methods for sorting arrays using \`Arrays.sort()\`.
   - Sorting is typically performed using algorithms that compare and swap array elements.

3. **Sorting Efficiency**:
   - The efficiency of a sorting algorithm depends on the size of the data and the algorithm’s time complexity.
   - \`Arrays.sort()\` uses the **Dual-Pivot Quicksort** for primitive types and **TimSort** for objects.
`;

  const tips = [
    "Use \`Arrays.sort()\` for efficient built-in sorting.",
    "For small arrays, simpler algorithms like Bubble Sort may be faster, but for larger arrays, algorithms like Merge Sort or Quick Sort are preferable.",
    "For sorting objects, ensure they implement the \`Comparable\` or \`Comparator\` interface."
  ];

  const proTips = [
    "Use \`Arrays.parallelSort()\` for large datasets to utilize multi-core processors and increase performance.",
    "When sorting a large dataset, consider using the **Merge Sort** or **Quick Sort** algorithms for better performance than Bubble Sort or Selection Sort.",
    "Always test the sorting algorithm’s time complexity in your context to choose the most efficient one."
  ];

  const bestPractices = [
    "Choose the appropriate sorting algorithm based on your dataset size and structure.",
    "Always check if the array is already sorted to avoid unnecessary sorting.",
    "For sorting objects, use \`Comparator\` if custom sorting is needed instead of modifying the \`Comparable\` interface."
  ];

  const commonMistakes = [
    "Using Bubble Sort for large datasets, which is inefficient for larger data.",
    "Not handling null values when sorting objects or arrays.",
    "Assuming that the array will always be sorted after a single call to \`Arrays.sort()\` in complex cases."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Sorting in Java
        </h1>
        <p className="text-lg text-gray-400">
          Sorting is one of the most common operations in computer science. Java provides powerful tools to efficiently sort arrays and lists. Learn how to effectively use the built-in sorting mechanisms and algorithms.
        </p>
      </header>

      <main className="space-y-12">
        {/* Sorting Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Sorting Example</h2>
          <CodeBlock
            code={`// Example: Sorting an array of integers
int[] numbers = {5, 2, 8, 1, 9};
Arrays.sort(numbers); // The array becomes {1, 2, 5, 8, 9}`}
            language="java"
          />
        </section>

        {/* Sorting Algorithms */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Sorting Algorithms</h2>
          <CodeBlock
            code={`// Example: Sorting using a custom comparator
String[] names = {"John", "Alice", "Bob"};
Arrays.sort(names, (a, b) -> b.compareTo(a));  // Sorts names in descending order`}
            language="java"
          />
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run: Sorting Array</h2>
          <CodeBlock
            code={`// Original array
int[] numbers = {5, 2, 8, 1, 9};

// Step 1: Sort the array
Arrays.sort(numbers);  // The array becomes: {1, 2, 5, 8, 9}

// Step 2: Access the sorted array
System.out.println(Arrays.toString(numbers));  // Output: [1, 2, 5, 8, 9]`}
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

export default Sorting;