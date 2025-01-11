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
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Continue Statement in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>continue statement</strong> skips the remaining part of the loop for the current iteration and 
          moves to the next iteration. It's useful when you want to skip specific iterations without breaking out of the loop.
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
            The <strong>continue statement</strong> is ideal for skipping iterations based on certain conditions while keeping the loop running.
          </p>
        </section>

        {/* Even Numbers Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Filtering Example
          </h2>
          <CodeBlock code={evenNumbersExample} language="java" />
          <p className="mt-4 text-gray-300">
            This example demonstrates filtering logic by skipping odd numbers and processing only even numbers.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run Example
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
          <p className="mt-4 text-gray-300">
            The dry run explains step-by-step how the continue statement skips certain iterations and processes only valid grades.
          </p>
        </section>

        {/* Nested Loops */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Continue in Nested Loops
          </h2>
          <CodeBlock code={nestedLoopExample} language="java" />
          <p className="mt-4 text-gray-300">
            In nested loops, the continue statement affects only the innermost loop containing it.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using continue outside of a loop, which results in a syntax error.</li>
            <li>Skipping necessary logic after the continue statement.</li>
            <li>Overusing continue, making the code harder to read and debug.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Best Practices
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use continue for skipping iterations only when necessary.</li>
            <li>Clearly document the logic for the continue statement in comments.</li>
            <li>Ensure the loop variables are updated correctly to avoid infinite loops.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              Use continue in combination with filtering logic for cleaner and more efficient loops.
            </li>
            <li>
              Avoid deeply nested loops with continue; consider refactoring the logic into smaller methods.
            </li>
            <li>
              Test edge cases where the continue statement skips iterations to ensure proper behavior.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Continue;