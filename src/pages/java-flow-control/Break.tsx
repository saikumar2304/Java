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

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Break Statement in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>break statement</strong> is used to terminate loops or switch statements prematurely. 
          It provides an efficient way to exit a loop or switch when a specific condition is met.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Syntax and Basic Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Syntax and Basic Example
          </h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            The break statement immediately terminates the loop, skipping the remaining iterations and continuing with the next statement after the loop.
          </p>
        </section>

        {/* Practical Search Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Practical Search Example
          </h2>
          <CodeBlock code={searchExample} language="java" />
          <p className="mt-4 text-gray-300">
            This example demonstrates how the break statement can be used to stop searching once the desired value is found.
          </p>
        </section>

        {/* Nested Loops */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Break in Nested Loops
          </h2>
          <CodeBlock code={nestedLoopExample} language="java" />
          <p className="mt-4 text-gray-300">
            By default, the break statement exits only the innermost loop. This behavior is useful in multi-level loops where inner logic needs to be terminated.
          </p>
        </section>

        {/* Labeled Break */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Labeled Break Example
          </h2>
          <CodeBlock code={labeledBreakExample} language="java" />
          <p className="mt-4 text-gray-300">
            Labeled break allows you to exit specific outer loops in nested structures. This is useful for breaking out of multiple levels of loops.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using break outside a loop or switch block.</li>
            <li>Not using labeled break for exiting outer loops, causing unexpected behavior.</li>
            <li>Leaving unreachable code after a break statement.</li>
            <li>Overusing break, which can make code harder to read.</li>
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Tips for Using Break
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use break sparingly to ensure code readability.</li>
            <li>Combine break with clear comments to explain why it's used.</li>
            <li>Use labeled break judiciously to handle complex nested loops.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              Use break with error handling to gracefully exit loops when encountering unexpected data.
            </li>
            <li>
              Minimize nested loops with break by refactoring logic into smaller functions or methods.
            </li>
            <li>
              Avoid using break excessively in switch cases; ensure all cases are handled properly.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Break;