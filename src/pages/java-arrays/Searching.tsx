import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Searching: React.FC = () => {
  const visualRepresentation = `
1. **Searching Algorithms**:
   - Searching algorithms help find the position of a specific element in an array.
   - Linear search works sequentially, while binary search divides the array into two halves for faster results (only on sorted arrays).

2. **Linear Search**:
   - Linear search scans each element one by one until the target is found or the end of the array is reached.
   - Time complexity: O(n), where n is the number of elements in the array.

3. **Binary Search**:
   - Binary search works by repeatedly dividing the array in half and checking if the element is in the lower or upper half.
   - Time complexity: O(log n), but requires the array to be sorted.
`;

  const tips = [
    "Use **binary search** for large arrays that are sorted to improve efficiency.",
    "For small or unsorted arrays, **linear search** may be simpler and more intuitive.",
    "Always ensure the array is **sorted** before using binary search."
  ];

  const proTips = [
    "When searching in a sorted list, prefer binary search for better time complexity (O(log n)) over linear search.",
    "If the array is constantly updated, consider using data structures like **TreeMap** or **HashMap** for efficient searches.",
    "Optimize for **space complexity** by using iterative search instead of recursion in large datasets."
  ];

  const bestPractices = [
    "Always validate array boundaries before accessing elements to avoid **IndexOutOfBoundsException**.",
    "Check if the array is **null** before attempting to search to avoid **NullPointerException**.",
    "For best performance, use **binary search** with **sorted arrays** and ensure that the data is preprocessed appropriately."
  ];

  const commonMistakes = [
    "Using **linear search** on large arrays where binary search would be more efficient.",
    "Attempting to use **binary search** on unsorted arrays, which leads to incorrect results.",
    "Overlooking the need for sorted data when using **binary search**."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Searching in Arrays in Java
        </h1>
        <p className="text-lg text-gray-400">
          Searching is an essential operation in programming, used to find the position of a specific element in an array. Learn about different searching algorithms and how to choose the right one.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is Searching?</h2>
          <p>
            Searching is the process of finding the position of a specific element in an array. Java provides multiple ways to search for elements, ranging from simple linear searches to optimized binary searches for sorted arrays.
          </p>
        </section>

        {/* Linear Search Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Linear Search</h2>
          <p className="mb-4">
            Linear search is a straightforward method to search for an element in an array. It involves checking each element sequentially until a match is found or the end of the array is reached.
          </p>
          <CodeBlock
            code={`public class LinearSearch {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30, 40, 50};\n        int target = 30;\n\n        // Linear search\n        int index = -1;\n        for (int i = 0; i < numbers.length; i++) {\n            if (numbers[i] == target) {\n                index = i;\n                break;\n            }\n        }\n\n        if (index != -1) {\n            System.out.println("Element found at index: " + index);\n        } else {\n            System.out.println("Element not found");\n        }\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            In this example, the array is searched linearly for the target element. If found, the index is printed; otherwise, a not-found message is displayed.
          </p>
        </section>

        {/* Binary Search Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Binary Search</h2>
          <p className="mb-4">
            Binary search is an efficient algorithm for finding an element in a sorted array. It repeatedly divides the search range in half until the target element is found or the range is empty.
          </p>
          <CodeBlock
            code={`import java.util.Arrays;\n\npublic class BinarySearch {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30, 40, 50};\n        int target = 30;\n\n        // Binary search (requires sorted array)\n        int index = Arrays.binarySearch(numbers, target);\n\n        if (index >= 0) {\n            System.out.println("Element found at index: " + index);\n        } else {\n            System.out.println("Element not found");\n        }\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            The <code>Arrays.binarySearch</code> method is used to perform binary search on the sorted array. It returns the index of the element if found, or a negative value if not found.
          </p>
        </section>

        {/* Key Differences Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Linear vs. Binary Search</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Linear Search:</strong> Works on unsorted arrays, but has a time complexity of <code>O(n)</code>.</li>
            <li><strong>Binary Search:</strong> Faster with <code>O(log n)</code> complexity but requires a sorted array.</li>
          </ul>
        </section>

        {/* Custom Search Logic Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Custom Search Logic</h2>
          <p className="mb-4">
            For custom search criteria, you can write your own logic. Here's an example of searching for strings by their length:
          </p>
          <CodeBlock
            code={`public class CustomSearch {\n    public static void main(String[] args) {\n        String[] names = {\"Alice\", \"Bob\", \"Charlie\", \"David\"};\n        int targetLength = 5;\n\n        for (String name : names) {\n            if (name.length() == targetLength) {\n                System.out.println("Found name: " + name);\n            }\n        }\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            This example demonstrates a custom search where strings are searched based on their length.
          </p>
        </section>

        {/* Key Points Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Choose linear search for small or unsorted arrays.</li>
            <li>Use binary search for large, sorted arrays to achieve better performance.</li>
            <li>Custom logic can be implemented for specific search criteria.</li>
          </ul>
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

export default Searching;