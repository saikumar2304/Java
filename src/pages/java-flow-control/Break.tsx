import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Break = () => {
  const basicExample = `
// Basic break example in a for loop
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Exit loop when i equals 5
    }
    System.out.println("Count: " + i);
}
System.out.println("Loop ended");

// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Loop ended`;

  const searchExample = `
// Finding a number in an array
int[] numbers = {4, 8, 15, 16, 23, 42};
int searchFor = 16;
int position = -1;

for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] == searchFor) {
        position = i;
        break;  // Exit loop once number is found
    }
}

if (position != -1) {
    System.out.println("Found " + searchFor + " at position " + position);
} else {
    System.out.println(searchFor + " not found");
}

// Output:
// Found 16 at position 3`;

  const nestedLoopExample = `
// Break in nested loops
for (int i = 1; i <= 3; i++) {
    System.out.println("Outer loop iteration: " + i);
    
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            System.out.println("Breaking inner loop");
            break;  // Breaks only the inner loop
        }
        System.out.println("  Inner loop: i = " + i + ", j = " + j);
    }
}

// Output:
// Outer loop iteration: 1
//   Inner loop: i = 1, j = 1
//   Inner loop: i = 1, j = 2
//   Inner loop: i = 1, j = 3
// Outer loop iteration: 2
//   Inner loop: i = 2, j = 1
// Breaking inner loop
// Outer loop iteration: 3
//   Inner loop: i = 3, j = 1
//   Inner loop: i = 3, j = 2
//   Inner loop: i = 3, j = 3`;

  const labeledBreakExample = `
// Labeled break example
outerLoop: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == 2 && j == 2) {
            System.out.println("Breaking to outer loop");
            break outerLoop;  // Breaks out of both loops
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}

// Output:
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 2, j = 1
// Breaking to outer loop`;

  const dryRunExample = `
// Dry run of break in while loop
int sum = 0;
int num = 1;

while (true) {  // Infinite loop
    sum += num;
    
    if (sum > 10) {
        break;  // Exit when sum exceeds 10
    }
    num++;
}

System.out.println("Final sum: " + sum);
System.out.println("Last number added: " + num);

// Dry Run:
// 1. Initialize: sum = 0, num = 1
// 2. First iteration:
//    - sum = 0 + 1 = 1
//    - 1 > 10? false
//    - num++ (num becomes 2)
// 3. Second iteration:
//    - sum = 1 + 2 = 3
//    - 3 > 10? false
//    - num++ (num becomes 3)
// 4. Third iteration:
//    - sum = 3 + 3 = 6
//    - 6 > 10? false
//    - num++ (num becomes 4)
// 5. Fourth iteration:
//    - sum = 6 + 4 = 10
//    - 10 > 10? false
//    - num++ (num becomes 5)
// 6. Fifth iteration:
//    - sum = 10 + 5 = 15
//    - 15 > 10? true
//    - break executed
// Output:
// Final sum: 15
// Last number added: 5`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Break Statement in Java
              </h1>
              <p className="text-gray-300">
                The break statement is used to terminate a loop or switch statement prematurely. It provides a way to exit 
                a loop immediately when certain conditions are met, without waiting for the loop's condition to become false.
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
                  In this example, the break statement exits the loop when i equals 5, preventing the remaining iterations 
                  from executing.
                </p>
              </div>
            </div>

            {/* Search Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Practical Search Example
              </h2>
              <CodeBlock code={searchExample} language="java" />
              <p className="mt-4 text-gray-300">
                Using break to exit a loop once a search condition is met is a common and efficient practice, as it avoids 
                unnecessary iterations.
              </p>
            </div>

            {/* Nested Loops Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Break in Nested Loops
              </h2>
              <CodeBlock code={nestedLoopExample} language="java" />
              <p className="mt-4 text-gray-300">
                By default, break only exits the innermost loop containing it. Sometimes this is exactly what you want.
              </p>
            </div>

            {/* Labeled Break Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Labeled Break
              </h2>
              <CodeBlock code={labeledBreakExample} language="java" />
              <p className="mt-4 text-gray-300">
                Labeled break allows you to break out of a specific outer loop when working with nested loops.
              </p>
            </div>

            {/* Dry Run Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Example
              </h2>
              <CodeBlock code={dryRunExample} language="java" />
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
                  <span>Using break outside a loop or switch</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking wrong loop in nested structures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unreachable code after break</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overusing break statements</span>
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
                  <span>Use break for early loop termination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using labeled break for nested loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document break conditions clearly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use break to simplify complex loop logic</span>
                </li>
              </ul>
            </div>

            {/* When to Use Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                When to Use Break
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Search operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Early loop termination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Switch statements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Error handling scenarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Break; 