import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Searching: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Searching in Arrays in Java</h1>
      <div className="space-y-6">

        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What is Searching?</h2>
          <p>
            Searching is the process of finding the position of a specific element in an array. Java provides multiple ways to search for elements, ranging from simple linear searches to optimized binary searches for sorted arrays.
          </p>
        </section>

        {/* Linear Search Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Linear Search</h2>
          <p className="mb-4">
            Linear search is a straightforward method to search for an element in an array. It involves checking each element sequentially until a match is found or the end of the array is reached.
          </p>
          <CodeBlock
            code={`public class LinearSearch {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30, 40, 50};\n        int target = 30;\n\n        // Linear search\n        int index = -1;\n        for (int i = 0; i < numbers.length; i++) {\n            if (numbers[i] == target) {\n                index = i;\n                break;\n            }\n        }\n\n        if (index != -1) {\n            System.out.println(\"Element found at index: \" + index);\n        } else {\n            System.out.println(\"Element not found\");\n        }\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            In this example, the array is searched linearly for the target element. If found, the index is printed; otherwise, a not-found message is displayed.
          </p>
        </section>

        {/* Binary Search Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Binary Search</h2>
          <p className="mb-4">
            Binary search is an efficient algorithm for finding an element in a sorted array. It repeatedly divides the search range in half until the target element is found or the range is empty.
          </p>
          <CodeBlock
            code={`import java.util.Arrays;\n\npublic class BinarySearch {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30, 40, 50};\n        int target = 30;\n\n        // Binary search (requires sorted array)\n        int index = Arrays.binarySearch(numbers, target);\n\n        if (index >= 0) {\n            System.out.println(\"Element found at index: \" + index);\n        } else {\n            System.out.println(\"Element not found\");\n        }\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            The <code>Arrays.binarySearch</code> method is used to perform binary search on the sorted array. It returns the index of the element if found, or a negative value if not found.
          </p>
        </section>

        {/* Key Differences Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Linear vs. Binary Search</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Linear Search:</strong> Works on unsorted arrays, but has a time complexity of <code>O(n)</code>.</li>
            <li><strong>Binary Search:</strong> Faster with <code>O(log n)</code> complexity but requires a sorted array.</li>
          </ul>
        </section>

        {/* Custom Search Logic Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Custom Search Logic</h2>
          <p className="mb-4">
            For custom search criteria, you can write your own logic. Here's an example of searching for strings by their length:
          </p>
          <CodeBlock
            code={`public class CustomSearch {\n    public static void main(String[] args) {\n        String[] names = {\"Alice\", \"Bob\", \"Charlie\", \"David\"};\n        int targetLength = 5;\n\n        for (String name : names) {\n            if (name.length() == targetLength) {\n                System.out.println(\"Found name: \" + name);\n            }\n        }\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            This example demonstrates a custom search where strings are searched based on their length.
          </p>
        </section>

        {/* Key Points Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Choose linear search for small or unsorted arrays.</li>
            <li>Use binary search for large, sorted arrays to achieve better performance.</li>
            <li>Custom logic can be implemented for specific search criteria.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Searching;
