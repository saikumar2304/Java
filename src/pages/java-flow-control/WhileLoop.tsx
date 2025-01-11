import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const WhileLoop = () => {
  const basicExample = `
while (condition) {
    // code block to be executed
}

// Example:
int count = 1;
while (count <= 5) {
    System.out.println("Count is: " + count);
    count++;
}
// Output:
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4
// Count is: 5`;

  const userInputExample = `
// Reading input until user enters 0
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int number;
int sum = 0;

System.out.println("Enter numbers (0 to stop):");
number = scanner.nextInt();

while (number != 0) {
    sum += number;
    System.out.println("Current sum: " + sum);
    number = scanner.nextInt();
}

System.out.println("Final sum: " + sum);`;

  const dryRunExample = `
// Finding the first power of 2 greater than 100
int number = 2;
int power = 1;

while (number <= 100) {
    number = number * 2;
    power++;
}

System.out.println(number + " is the first power of 2 > 100");
System.out.println("It is 2 raised to power " + power);

// Dry Run:
// 1. Initialize: number = 2, power = 1
// 2. First iteration:
//    - Check: 2 <= 100? true
//    - number = 2 * 2 = 4
//    - power = 2
// 3. Second iteration:
//    - Check: 4 <= 100? true
//    - number = 4 * 2 = 8
//    - power = 3
// ... continues until ...
// 7. Sixth iteration:
//    - Check: 64 <= 100? true
//    - number = 64 * 2 = 128
//    - power = 7
// 8. Check: 128 <= 100? false
//    - Exit loop
// Output:
// 128 is the first power of 2 > 100
// It is 2 raised to power 7`;

  const gameExample = `
// Simple number guessing game
import java.util.Random;
import java.util.Scanner;

Random random = new Random();
int targetNumber = random.nextInt(100) + 1;  // 1-100
Scanner scanner = new Scanner(System.in);
int guess;
boolean hasWon = false;

System.out.println("Guess a number between 1 and 100");

while (!hasWon) {
    guess = scanner.nextInt();
    
    if (guess == targetNumber) {
        System.out.println("Congratulations! You got it!");
        hasWon = true;
    } else if (guess < targetNumber) {
        System.out.println("Too low, try again!");
    } else {
        System.out.println("Too high, try again!");
    }
}`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          While Loop in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>while loop</strong> repeatedly executes a block of code as long as a given condition is true. It is especially useful when the number of iterations is not known in advance.
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
            Key components of the <code>while</code> loop:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              <span className="text-yellow-400">Condition:</span> A boolean expression evaluated before each iteration.
            </li>
            <li>
              <span className="text-yellow-400">Code block:</span> Executes repeatedly while the condition is true.
            </li>
            <li>
              <span className="text-yellow-400">Termination:</span> Ensure the loop eventually stops to avoid infinite loops.
            </li>
          </ul>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            The <strong>while loop</strong> works as follows:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200">
            <ul className="list-decimal pl-6 space-y-3">
              <li>Evaluate the condition (e.g., <code>count &lt;= 5</code>).</li>
              <li>If true, execute the code block inside the loop.</li>
              <li>After execution, re-evaluate the condition.</li>
              <li>Repeat until the condition becomes false.</li>
              <li>Exit the loop and continue with the next part of the program.</li>
            </ul>
          </div>
        </section>

        {/* User Input Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            User Input Example
          </h2>
          <CodeBlock code={userInputExample} language="java" />
          <p className="mt-4 text-gray-300">
            While loops are particularly useful for processing user input, as the number of iterations depends on the user's input.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run Example
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
        </section>

        {/* Game Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Interactive Game Example
          </h2>
          <CodeBlock code={gameExample} language="java" />
          <p className="mt-4 text-gray-300">
            This example demonstrates how while loops are used in interactive applications, such as a number guessing game.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting to update the loop variable, leading to infinite loops.</li>
            <li>Using <code>=</code> instead of <code>==</code> in the condition.</li>
            <li>Not initializing variables before the loop starts.</li>
            <li>Setting a condition that is always false, causing the loop to never execute.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Best Practices
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always ensure there is a clear exit condition.</li>
            <li>Use meaningful variable names for better readability.</li>
            <li>Avoid modifying the loop condition inside the loop unnecessarily.</li>
            <li>Consider using a <code>do-while</code> loop for scenarios requiring at least one iteration.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default WhileLoop;