import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Sorting: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sorting Arrays in Java</h1>
      <div className="space-y-6">

        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Why Sort an Array?</h2>
          <p>
            Sorting is a fundamental operation in programming that organizes the elements of an array in a specific order, such as ascending or descending. In Java, arrays can be sorted easily using built-in methods, providing a fast and efficient way to handle data.
          </p>
        </section>

        {/* Built-in Sorting Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Using Built-in Methods</h2>
          <p className="mb-4">
            The <code>java.util.Arrays</code> class provides methods to sort arrays in ascending order. Here's how you can use it:
          </p>
          <CodeBlock
            code={`import java.util.Arrays;\n\npublic class BuiltInSort {\n    public static void main(String[] args) {\n        int[] numbers = {5, 2, 8, 1, 3};\n\n        // Sort the array in ascending order\n        Arrays.sort(numbers);\n\n        System.out.println(\"Sorted array: \" + Arrays.toString(numbers));\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            In this example, the <code>Arrays.sort</code> method sorts the array in ascending order. The <code>Arrays.toString</code> method is used to print the sorted array.
          </p>
        </section>

        {/* Descending Order Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Sorting in Descending Order</h2>
          <p className="mb-4">
            To sort an array in descending order, you can use a combination of <code>Arrays.sort</code> and custom logic:
          </p>
          <CodeBlock
            code={`import java.util.Arrays;\nimport java.util.Collections;\n\npublic class DescendingSort {\n    public static void main(String[] args) {\n        Integer[] numbers = {5, 2, 8, 1, 3};\n\n        // Sort the array in descending order\n        Arrays.sort(numbers, Collections.reverseOrder());\n\n        System.out.println(\"Sorted array (descending): \" + Arrays.toString(numbers));\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            Note that the array must be of type <code>Integer</code> (not <code>int</code>) to use <code>Collections.reverseOrder</code>.
          </p>
        </section>

        {/* Custom Sorting Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Custom Sorting</h2>
          <p className="mb-4">
            For advanced scenarios, you can implement custom sorting logic using a comparator. Here's an example:
          </p>
          <CodeBlock
            code={`import java.util.Arrays;\nimport java.util.Comparator;\n\npublic class CustomSort {\n    public static void main(String[] args) {\n        String[] names = {\"Alice\", \"Bob\", \"Charlie\", \"David\"};\n\n        // Custom sort by length of strings\n        Arrays.sort(names, new Comparator<String>() {\n            @Override\n            public int compare(String s1, String s2) {\n                return Integer.compare(s1.length(), s2.length());\n            }\n        });\n\n        System.out.println(\"Custom sorted array: \" + Arrays.toString(names));\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            In this example, the array is sorted based on the length of the strings, demonstrating the flexibility of custom comparators.
          </p>
        </section>

        {/* Key Points Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><code>Arrays.sort</code> is efficient for most use cases and sorts in ascending order by default.</li>
            <li>Use <code>Collections.reverseOrder</code> for descending order sorting (requires wrapper types).</li>
            <li>Custom comparators provide flexibility for sorting based on specific criteria.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Sorting;
