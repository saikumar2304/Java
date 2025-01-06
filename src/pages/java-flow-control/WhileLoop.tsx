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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                While Loop in Java
              </h1>
              <p className="text-gray-300">
                The while loop is a fundamental control structure that repeatedly executes a block of code as long as a given condition 
                is true. Unlike for loops, while loops are typically used when the number of iterations is not known in advance.
              </p>
            </div>

            {/* Basic Syntax Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Syntax and Example
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">Key components:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li>The <span className="text-yellow-400">while</span> keyword</li>
                  <li>A <span className="text-yellow-400">condition</span> that evaluates to boolean</li>
                  <li>A code block that executes while the condition is true</li>
                  <li>A way to eventually make the condition false (to avoid infinite loops)</li>
                </ul>
              </div>
            </div>

            {/* User Input Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                User Input Example
              </h2>
              <CodeBlock code={userInputExample} language="java" />
              <p className="mt-4 text-gray-300">
                While loops are perfect for handling user input as you often don't know how many inputs the user will provide.
              </p>
            </div>

            {/* Dry Run Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Example
              </h2>
              <CodeBlock code={dryRunExample} language="java" />
            </div>

            {/* Game Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Interactive Game Example
              </h2>
              <CodeBlock code={gameExample} language="java" />
              <p className="mt-4 text-gray-300">
                This example shows how while loops can be used in interactive programs where the loop continues until a specific 
                condition is met (in this case, guessing the correct number).
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
                  <span>Forgetting to update the loop condition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Creating infinite loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using = instead of == in condition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not initializing variables before the loop</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong condition causing loop to never execute</span>
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
                  <span>Always have a clear exit condition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initialize variables before the loop</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use for loop if number of iterations is known</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep the loop body simple and focused</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using do-while for input validation</span>
                </li>
              </ul>
            </div>

            {/* When to Use Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                When to Use While Loop
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Processing user input</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reading file contents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Game loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unknown number of iterations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhileLoop; 