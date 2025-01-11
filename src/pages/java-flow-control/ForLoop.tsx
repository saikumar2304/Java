import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const ForLoop = () => {
  const basicExample = `
for (initialization; condition; increment/decrement) {
    // code block to be executed
}

// Example:
for (int i = 1; i <= 5; i++) {
    System.out.println("Count is: " + i);
}
// Output:
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4
// Count is: 5`;

  const arrayExample = `
// Iterating through an array
int[] numbers = {2, 4, 6, 8, 10};

for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element at index " + i + ": " + numbers[i]);
}
// Output:
// Element at index 0: 2
// Element at index 1: 4
// Element at index 2: 6
// Element at index 3: 8
// Element at index 4: 10`;

  const dryRunExample = `
// Calculating sum of first 5 numbers
int sum = 0;
for (int i = 1; i <= 5; i++) {
    sum += i;
    System.out.println("After adding " + i + ", sum is: " + sum);
}
System.out.println("Final sum: " + sum);

// Dry Run:
// 1. Initialize: i = 1, sum = 0
// 2. First iteration:
//    - Check: 1 <= 5? true
//    - sum = 0 + 1 = 1
//    - Print: "After adding 1, sum is: 1"
//    - i++ (i becomes 2)
// 3. Second iteration:
//    - Check: 2 <= 5? true
//    - sum = 1 + 2 = 3
//    - Print: "After adding 2, sum is: 3"
//    - i++ (i becomes 3)
// ... and so on until i becomes 6`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          For Loop in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>for loop</strong> is a fundamental control structure in Java, used to repeat a block of code a specific number of times. 
          It combines initialization, condition-checking, and updating in a single line.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Basic Syntax */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Basic Syntax
          </h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            The <strong>for loop</strong> structure includes three parts:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              <span className="text-yellow-400">Initialization:</span> A variable is initialized once before the loop starts.
            </li>
            <li>
              <span className="text-yellow-400">Condition:</span> The loop continues as long as this evaluates to <strong>true</strong>.
            </li>
            <li>
              <span className="text-yellow-400">Increment/Decrement:</span> Updates the loop variable after each iteration.
            </li>
          </ul>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            The <strong>for loop</strong> processes as follows:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200">
            <ul className="list-decimal pl-6 space-y-3">
              <li>Initialize a loop variable (e.g., <code>int i = 1</code>).</li>
              <li>Check the condition (e.g., <code>i &lt;= 5</code>). If true, execute the code block. If false, exit the loop.</li>
              <li>Execute the code block inside the loop.</li>
              <li>Update the loop variable (e.g., <code>i++</code>).</li>
              <li>Repeat steps 2-4 until the condition becomes false.</li>
            </ul>
          </div>
        </section>

        {/* Array Iteration */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Iterating Through Arrays
          </h2>
          <CodeBlock code={arrayExample} language="java" />
          <p className="text-gray-300 mt-4">
            For loops are commonly used to iterate through arrays. The loop variable serves as the array index, allowing you to access each element in turn.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run Example
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
          <p className="text-gray-300 mt-4">
            The dry run shows step-by-step how the loop variables change and how the final result is calculated.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using the wrong comparison operator in the condition.</li>
            <li>Forgetting to update the loop variable, leading to infinite loops.</li>
            <li>Off-by-one errors when iterating over arrays.</li>
            <li>Modifying the loop variable inside the loop body unnecessarily.</li>
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Tips for Using For Loops
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use meaningful variable names instead of generic ones like <code>i</code> or <code>j</code>.</li>
            <li>Keep the loop body simple and focused on one task.</li>
            <li>Cache the array length in a variable for better performance when iterating.</li>
            <li>Avoid deeply nested loops to improve readability and performance.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              Use enhanced for loops (also known as "for-each" loops) for cleaner syntax when iterating over arrays:
              <CodeBlock
                code={`int[] numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
    System.out.println("Number: " + number);
}`}
                language="java"
              />
            </li>
            <li>
              Break complex logic into separate functions and call them inside the loop for better organization.
            </li>
            <li>
              Use the <code>break</code> statement to exit a loop early when a specific condition is met.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ForLoop;