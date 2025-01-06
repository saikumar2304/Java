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
// ... and so on until i becomes 6
// Output:
// After adding 1, sum is: 1
// After adding 2, sum is: 3
// After adding 3, sum is: 6
// After adding 4, sum is: 10
// After adding 5, sum is: 15
// Final sum: 15`;

  const multipleVariablesExample = `
// Using multiple variables in for loop
for (int i = 1, j = 10; i <= 5; i++, j--) {
    System.out.println("i = " + i + ", j = " + j);
}
// Output:
// i = 1, j = 10
// i = 2, j = 9
// i = 3, j = 8
// i = 4, j = 7
// i = 5, j = 6`;

  const nestedLoopExample = `
// Nested for loop example - Multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.print(i * j + "\\t");
    }
    System.out.println();  // New line after each row
}
// Output:
// 1    2    3
// 2    4    6
// 3    6    9`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                For Loop in Java
              </h1>
              <p className="text-gray-300">
                The for loop is one of the most commonly used loop structures in Java. It provides a concise way to write a loop 
                that needs to execute a specific number of times. The for loop includes initialization, condition, and increment/decrement 
                expressions in a single line.
              </p>
            </div>

            {/* Basic Syntax Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Syntax and Example
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">Components of a for loop:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li><span className="text-yellow-400">Initialization:</span> Executed once before the loop starts</li>
                  <li><span className="text-yellow-400">Condition:</span> Checked before each iteration</li>
                  <li><span className="text-yellow-400">Increment/Decrement:</span> Executed after each iteration</li>
                </ul>
              </div>
            </div>

            {/* Array Iteration Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Array Iteration
              </h2>
              <CodeBlock code={arrayExample} language="java" />
              <p className="mt-4 text-gray-300">
                For loops are commonly used to iterate through arrays. The loop counter serves as the array index.
              </p>
            </div>

            {/* Dry Run Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Example
              </h2>
              <CodeBlock code={dryRunExample} language="java" />
            </div>

            {/* Multiple Variables Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Multiple Variables
              </h2>
              <CodeBlock code={multipleVariablesExample} language="java" />
              <p className="mt-4 text-gray-300">
                You can use multiple variables in a for loop by separating them with commas.
              </p>
            </div>

            {/* Nested Loops Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Nested For Loops
              </h2>
              <CodeBlock code={nestedLoopExample} language="java" />
              <p className="mt-4 text-gray-300">
                Nested loops are useful for working with 2D arrays or creating patterns.
              </p>
            </div>
          </div>

          {/* Right Sidebar (3 columns) */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using wrong comparison operator in condition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Infinite loops due to incorrect increment/decrement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Off-by-one errors in array iteration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modifying loop variable inside the loop</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Forgetting to update the loop variable</span>
                </li>
              </ul>
            </div>

            {/* Best Practices Section */}
            <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-200">
                Best Practices
              </h2>
              <ul className="space-y-3 text-green-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use meaningful variable names (not just i, j, k)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep loop bodies simple and focused</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using enhanced for loop for arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Avoid deep nesting of loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initialize variables close to their usage</span>
                </li>
              </ul>
            </div>

            {/* Performance Tips Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Performance Tips
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cache array length in a variable for iteration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Minimize operations in the loop condition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use break when appropriate to exit early</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForLoop; 