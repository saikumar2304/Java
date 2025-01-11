import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const EnhancedFor: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Enhanced For Loop in Java
        </h1>
        <p className="text-lg text-gray-400">
          The enhanced for loop, also known as the <strong>for-each loop</strong>, simplifies iteration over arrays and collections by eliminating the need for an index variable.
        </p>
      </header>

      <main className="space-y-12">
        {/* What is Enhanced For Loop */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            What is the Enhanced For Loop?
          </h2>
          <p className="text-gray-300">
            The enhanced for loop provides a cleaner and more readable syntax for iterating over arrays or collections. Unlike the traditional <code>for</code> loop, it eliminates the need to manage an index variable.
          </p>
        </section>

        {/* Syntax */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Syntax
          </h2>
          <CodeBlock
            code={`for (dataType variable : collection) {
    // Code to execute for each element
}`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            <code>dataType</code> specifies the type of elements in the collection, <code>variable</code> is the temporary variable for each element, and <code>collection</code> is the array or iterable object being traversed.
          </p>
        </section>

        {/* Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Example
          </h2>
          <CodeBlock
            code={`public class EnhancedForExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};

        for (int num : numbers) {
            System.out.println("Number: " + num);
        }
    }
}`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This example demonstrates iterating over an integer array using the enhanced for loop, which processes each element without requiring index management.
          </p>
        </section>

        {/* Use Cases */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Common Use Cases
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Iterating over arrays of primitive or reference types.</li>
            <li>Processing collections like <code>ArrayList</code>, <code>HashSet</code>, and <code>LinkedList</code>.</li>
            <li>Ideal for read-only operations where modification is not required.</li>
          </ul>
        </section>

        {/* Limitations */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Limitations
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Cannot access the index of the current element directly.</li>
            <li>Modification of the collection during iteration can lead to <code>ConcurrentModificationException</code>.</li>
            <li>Restricted to arrays or objects implementing the <code>Iterable</code> interface.</li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Attempting to modify the collection during iteration, which can cause runtime errors.</li>
            <li>Using the enhanced for loop when index-based operations are needed.</li>
            <li>Assuming it works for non-iterable objects, leading to compilation errors.</li>
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Tips for Using Enhanced For Loops
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Prefer enhanced for loops for cleaner and more concise code.</li>
            <li>Use it for read-only operations where index access is unnecessary.</li>
            <li>Combine it with methods like <code>Collections.unmodifiableList()</code> for safe iteration.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              For more complex operations requiring index access, consider using the traditional <code>for</code> loop.
            </li>
            <li>
              When working with parallel streams or large datasets, consider using <code>Stream API</code> instead of loops for better performance.
            </li>
            <li>
              Avoid deeply nested enhanced for loops; break down the logic into smaller methods for better readability.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default EnhancedFor;