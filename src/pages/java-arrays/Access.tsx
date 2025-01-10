import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Access: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Accessing Array Elements in Java</h1>
      <div className="space-y-6">

        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">How to Access Array Elements?</h2>
          <p>
            Array elements in Java can be accessed using their index. The index represents the position of an element in the array, starting from 0 for the first element.
          </p>
        </section>

        {/* Syntax Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Accessing Elements</h2>
          <p className="mb-4">
            To access an element in an array, use the array name followed by the index in square brackets:
          </p>
          <CodeBlock
            code={`dataType value = arrayName[index];`}
            language="java"
          />
          <p className="mt-4">
            Here, <code>arrayName</code> is the name of the array, and <code>index</code> is the position of the element you want to access.
          </p>
        </section>

        {/* Example Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Example</h2>
          <p className="mb-4">Here’s an example demonstrating how to access elements in an array:</p>
          <CodeBlock
            code={`public class ArrayAccess {\n    public static void main(String[] args) {\n        // Declare and initialize an array\n        int[] numbers = {10, 20, 30, 40, 50};\n\n        // Access elements using their index\n        System.out.println(\"First element: \" + numbers[0]);\n        System.out.println(\"Third element: \" + numbers[2]);\n\n        // Update an element\n        numbers[1] = 25;\n        System.out.println(\"Updated second element: \" + numbers[1]);\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            In this example, elements of the array <code>numbers</code> are accessed and printed using their indices. Additionally, the second element is updated, demonstrating how to modify array elements.
          </p>
        </section>

        {/* Iteration Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Accessing Elements via Iteration</h2>
          <p className="mb-4">
            Instead of accessing each element manually, you can use a loop to iterate through the array:
          </p>
          <CodeBlock
            code={`public class ArrayIteration {\n    public static void main(String[] args) {\n        int[] numbers = {1, 2, 3, 4, 5};\n\n        // Using a for loop\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.println(\"Element at index \" + i + \": \" + numbers[i]);\n        }\n\n        // Using an enhanced for loop\n        for (int num : numbers) {\n            System.out.println(\"Number: \" + num);\n        }\n    }\n}`}
            language="java"
          />
          <p className="mt-4">
            The traditional <code>for</code> loop gives you access to the index, while the enhanced <code>for</code> loop provides direct access to each element.
          </p>
        </section>

        {/* Key Points Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Array indices in Java start from 0 and go up to <code>array.length - 1</code>.</li>
            <li>Accessing an index out of bounds (e.g., <code>array[-1]</code> or <code>array[array.length]</code>) will throw an <code>ArrayIndexOutOfBoundsException</code>.</li>
            <li>Use loops to efficiently access and modify elements in an array.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Access;
