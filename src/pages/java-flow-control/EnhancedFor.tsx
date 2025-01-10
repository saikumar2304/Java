import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const EnhancedFor: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Understanding Enhanced For Loop in Java</h1>
      <div className="space-y-6">

        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What is the Enhanced For Loop?</h2>
          <p>
            The enhanced for loop, also known as the <strong>"for-each loop"</strong>, is a simplified version of the traditional <code>for</code> loop in Java. It is used to iterate over elements of arrays or collections, providing a cleaner and more readable syntax. Unlike the traditional <code>for</code> loop, the enhanced for loop eliminates the need for managing an index variable.
          </p>
        </section>

        {/* Syntax Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Syntax</h2>
          <CodeBlock
            code={`for (dataType variable : collection) {
    // Code to execute for each element
}`}
            language="java"
          />
          <p className="mt-4">
            Here, <code>dataType</code> represents the type of the elements in the collection or array, <code>variable</code> is a temporary variable holding the current element, and <code>collection</code> is the array or collection being iterated over.
          </p>
        </section>

        {/* Example Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Example</h2>
          <p className="mb-4">Let's look at an example of using the enhanced for loop to iterate through an array:</p>
          <CodeBlock
            code={`public class EnhancedForExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};

        // Enhanced for loop to iterate through the array
        for (int num : numbers) {
            System.out.println("Number: " + num);
        }
    }
}`}
            language="java"
          />
          <p className="mt-4">
            In this example, the enhanced for loop iterates over the <code>numbers</code> array, printing each element to the console.
          </p>
        </section>

        {/* Use Cases Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Common Use Cases</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Iterating Over Arrays:</strong> Easily loop through arrays of primitive or reference types.
            </li>
            <li>
              <strong>Working with Collections:</strong> Conveniently iterate over collections like <code>ArrayList</code>, <code>HashSet</code>, or <code>LinkedList</code>.
            </li>
            <li>
              <strong>Read-Only Access:</strong> Ideal for scenarios where you do not need to modify the elements or the collection itself.
            </li>
          </ul>
        </section>

        {/* Limitations Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Limitations</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>No Index Access:</strong> You cannot access the index of the current element directly.
            </li>
            <li>
              <strong>Read-Only Nature:</strong> You cannot modify the collection during iteration using the enhanced for loop.
            </li>
            <li>
              <strong>Limited to Iterables:</strong> Can only be used with arrays or objects implementing the <code>Iterable</code> interface.
            </li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Best Practices</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Use the enhanced for loop for cleaner, more readable code when working with collections or arrays.
            </li>
            <li>
              Avoid modifying the collection during iteration to prevent <code>ConcurrentModificationException</code>.
            </li>
            <li>
              If you need index-based access, stick to the traditional <code>for</code> loop.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default EnhancedFor;
