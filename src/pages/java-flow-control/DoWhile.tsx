import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const DoWhile = () => {
  const basicExample = `
do {
    // code block to be executed
} while (condition);

// Example:
int count = 1;
do {
    System.out.println("Count is: " + count);
    count++;
} while (count <= 5);
// Output:
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4
// Count is: 5`;

  const inputValidationExample = `
// Input validation example
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int number;

do {
    System.out.println("Please enter a number between 1 and 10:");
    number = scanner.nextInt();
    
    if (number < 1 || number > 10) {
        System.out.println("Invalid input! Try again.");
    }
} while (number < 1 || number > 10);

System.out.println("Valid input received: " + number);`;

  const dryRunExample = `
// Password validation example
String correctPassword = "password123";
String input;
boolean isValid = false;
int attempts = 0;

do {
    attempts++;
    System.out.println("Enter password (Attempt " + attempts + "): ");
    input = scanner.nextLine();
    if (input.equals(correctPassword)) {
        isValid = true;
        System.out.println("Access granted!");
    } else {
        System.out.println("Incorrect password. Try again.");
    }
} while (!isValid && attempts < 3);

// Dry Run:
// Iteration 1: Input = "pass", isValid = false, attempts = 1
// Iteration 2: Input = "pass123", isValid = false, attempts = 2
// Iteration 3: Input = "password123", isValid = true, attempts = 3`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Do-While Loop in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>do-while loop</strong> ensures that a block of code executes at least once before the condition is checked. 
          It is particularly useful for scenarios like input validation or menu-driven programs.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Syntax */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Syntax
          </h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            The <strong>do-while loop</strong> executes the code block first, then evaluates the condition. This ensures the code block runs at least once.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            The <strong>do-while loop</strong> operates as follows:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200">
            <ul className="list-decimal pl-6 space-y-3">
              <li>Execute the code block inside the loop.</li>
              <li>Evaluate the condition after execution.</li>
              <li>
                If the condition is true, repeat the loop; otherwise, exit.
              </li>
            </ul>
          </div>
        </section>

        {/* Input Validation Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Input Validation Example
          </h2>
          <CodeBlock code={inputValidationExample} language="java" />
          <p className="mt-4 text-gray-300">
            This is a common use case for do-while loops. The loop ensures the user provides valid input by repeatedly 
            prompting until the input meets the required criteria.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run Example
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting the semicolon after the <code>while</code> condition.</li>
            <li>Creating unintended infinite loops by not modifying the loop variable.</li>
            <li>Using when a <code>while</code> or <code>for</code> loop would be more appropriate.</li>
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Tips for Using Do-While Loops
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use for scenarios where the code must execute at least once.</li>
            <li>Clearly define and update the loop control variable.</li>
            <li>Combine with user input for interactive programs or validation.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              Document the termination condition in comments for better readability and debugging.
            </li>
            <li>
              Use <code>break</code> statements to add custom exit points within the loop.
            </li>
            <li>
              For repetitive tasks with known constraints, consider a <code>while</code> or <code>for</code> loop as alternatives.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DoWhile;