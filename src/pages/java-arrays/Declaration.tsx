import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Declaration: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Understanding Array Declaration in Java</h1>
      <div className="space-y-6">

        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What is an Array?</h2>
          <p>
            An array is a collection of elements of the same type stored in contiguous memory locations. In Java, arrays are objects that store multiple variables under one name, making data management easier and more efficient.
          </p>
        </section>

        {/* Declaration Syntax Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Declaring an Array</h2>
          <p className="mb-4">
            To declare an array in Java, you specify the type of its elements, followed by square brackets. The syntax is:
          </p>
          <CodeBlock
            code={`dataType[] arrayName; // Recommended style\ndataType arrayName[]; // Also valid but less common`}
            language="java"
          />
          <p className="mt-4">
            Here, <code>dataType</code> represents the type of the elements, and <code>arrayName</code> is the name of the array.
          </p>
        </section>

        {/* Initialization Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Initializing an Array</h2>
          <p className="mb-4">
            After declaring an array, you must allocate memory for it and optionally initialize its elements:
          </p>
          <CodeBlock
            code={`int[] numbers = new int[5]; // Allocates memory for 5 integers\nnumbers[0] = 10; // Sets the first element to 10`}
            language="java"
          />
          <p className="mt-4">
            Alternatively, you can declare and initialize an array in one line:
          </p>
          <CodeBlock
            code={`int[] numbers = {1, 2, 3, 4, 5};`}
            language="java"
          />
        </section>

        {/* Example Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Example</h2>
          <p className="mb-4">Here’s a complete example demonstrating array declaration, initialization, and usage:</p>
          <CodeBlock
            code={`public class ArrayExample {\n    public static void main(String[] args) {\n        // Declare and initialize an array\n        int[] numbers = {10, 20, 30, 40, 50};\n\n        // Iterate through the array and print each element\n        for (int num : numbers) {\n            System.out.println(\"Number: \" + num);\n        }\n    }\n}`}
            language="java"
          />
        </section>

        {/* Key Points Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Arrays in Java are zero-indexed, meaning the first element is at index 0.</li>
            <li>Once defined, the size of an array cannot be changed.</li>
            <li>Java arrays are objects and have built-in properties like <code>length</code> to determine their size.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Declaration;
