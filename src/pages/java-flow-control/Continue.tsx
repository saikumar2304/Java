import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Continue = () => {
  const basicExample = `
// Basic continue example
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;  // Skip the rest of the loop body when i is 3
    }
    System.out.println("Processing number: " + i);
}

// Output:
// Processing number: 1
// Processing number: 2
// Processing number: 4
// Processing number: 5`;

  const evenNumbersExample = `
// Print only even numbers
for (int i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;  // Skip odd numbers
    }
    System.out.println("Even number: " + i);
}

// Output:
// Even number: 2
// Even number: 4
// Even number: 6
// Even number: 8
// Even number: 10`;

  const dryRunExample = `
// Processing grades with continue
int[] grades = {75, 42, 88, 95, 35, 80};
int sumPassing = 0;
int countPassing = 0;

for (int i = 0; i < grades.length; i++) {
    if (grades[i] < 60) {
        continue;  // Skip failing grades
    }
    sumPassing += grades[i];
    countPassing++;
}

double average = (double) sumPassing / countPassing;
System.out.println("Average of passing grades: " + average);

// Dry Run:
// 1. First iteration (i = 0):
//    - grade = 75
//    - 75 >= 60? true
//    - sumPassing = 0 + 75 = 75
//    - countPassing = 1
// 2. Second iteration (i = 1):
//    - grade = 42
//    - 42 >= 60? false
//    - continue skips rest of loop
// 3. Third iteration (i = 2):
//    - grade = 88
//    - 88 >= 60? true
//    - sumPassing = 75 + 88 = 163
//    - countPassing = 2
// ... and so on
// Final calculation:
// average = (75 + 88 + 95 + 80) / 4 = 84.5`;

  const nestedLoopExample = `
// Continue in nested loops
for (int i = 1; i <= 3; i++) {
    System.out.println("Outer loop: " + i);
    
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            System.out.println("  Skipping i=2, j=2");
            continue;  // Skips rest of inner loop for this iteration
        }
        System.out.println("  Inner loop: i=" + i + ", j=" + j);
    }
}`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Continue Statement in Java
              </h1>
              <p className="text-gray-300">
                The continue statement skips the rest of the current iteration in a loop and moves to the next iteration. 
                It's useful when you want to skip specific iterations without terminating the entire loop.
              </p>
            </div>

            {/* Basic Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Example
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  In this example, the continue statement skips printing when i is 3, but the loop continues with the next iteration.
                </p>
              </div>
            </div>

            {/* Even Numbers Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Filtering Example
              </h2>
              <CodeBlock code={evenNumbersExample} language="java" />
              <p className="mt-4 text-gray-300">
                Continue is often used for filtering, like printing only even numbers in this example.
              </p>
            </div>

            {/* Dry Run Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Example
              </h2>
              <CodeBlock code={dryRunExample} language="java" />
            </div>

            {/* Nested Loops Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Continue in Nested Loops
              </h2>
              <CodeBlock code={nestedLoopExample} language="java" />
              <p className="mt-4 text-gray-300">
                Like break, continue affects only the innermost loop containing it.
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
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using continue outside a loop</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Infinite loops due to incorrect continue placement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing important code after continue</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overusing continue statements</span>
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
                  <span>Use continue for filtering unwanted iterations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep the logic simple and clear</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using if/else for better readability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document complex continue conditions</span>
                </li>
              </ul>
            </div>

            {/* When to Use Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                When to Use Continue
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Filtering data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Skipping unwanted iterations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Processing specific conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Avoiding nested if statements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Continue; 