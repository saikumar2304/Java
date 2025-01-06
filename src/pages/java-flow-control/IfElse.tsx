import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const IfElse: React.FC = () => {
  const basicExample = `
if (condition) {
    // code block to be executed if condition is true
} else {
    // code block to be executed if condition is false
}`;

  const practicalExample = `
// Grade calculator example
int score = 75;

if (score >= 60) {
    System.out.println("You passed!");
    System.out.println("Your score: " + score);
} else {
    System.out.println("You need to improve.");
    System.out.println("Your score: " + score);
    System.out.println("Required score: 60");
}`;

  const multipleStatementsExample = `
// Check age for voting and provide specific message
int age = 16;

if (age >= 18) {
    System.out.println("You can vote!");
    System.out.println("Make sure to register for voting.");
    System.out.println("Your vote matters!");
} else {
    int yearsLeft = 18 - age;
    System.out.println("You cannot vote yet.");
    System.out.println("Wait for " + yearsLeft + " more years.");
    System.out.println("Learn about the voting process meanwhile.");
}`;

  const dryRunExample1 = `
// Dry Run Example 1: Temperature Check
int temperature = 28;

if (temperature > 30) {
    System.out.println("It's hot!");
    System.out.println("Turn on the AC.");
} else {
    System.out.println("Temperature is normal.");
    System.out.println("Enjoy your day!");
}

// Step by step execution:
// 1. temperature = 28 is initialized
// 2. Check condition: temperature > 30
//    28 > 30 is false
// 3. Skip the if block
// 4. Execute else block:
//    - Print "Temperature is normal."
//    - Print "Enjoy your day!"`;

  const dryRunExample2 = `
// Dry Run Example 2: Bank Balance
double balance = 1500.0;
double withdrawal = 2000.0;

if (withdrawal <= balance) {
    balance = balance - withdrawal;
    System.out.println("Withdrawal successful");
    System.out.println("Remaining balance: $" + balance);
} else {
    System.out.println("Insufficient funds");
    System.out.println("Current balance: $" + balance);
    System.out.println("Required additional amount: $" + 
                      (withdrawal - balance));
}

// Step by step execution:
// 1. Variables initialized:
//    balance = 1500.0
//    withdrawal = 2000.0
// 2. Check condition: withdrawal <= balance
//    2000.0 <= 1500.0 is false
// 3. Skip if block
// 4. Execute else block:
//    - Print "Insufficient funds"
//    - Print "Current balance: $1500.0"
//    - Calculate and print required amount:
//      2000.0 - 1500.0 = 500.0
//    - Print "Required additional amount: $500.0"`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                If-Else Statement in Java
              </h1>
              <p className="text-gray-300">
                The if-else statement extends the if statement by providing an alternative
                code block to execute when the condition is false.
              </p>
            </div>

            {/* Basic Syntax Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Syntax
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">Key components:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li>The <span className="text-yellow-400">if</span> keyword with a condition</li>
                  <li>Code block for true condition</li>
                  <li>The <span className="text-yellow-400">else</span> keyword</li>
                  <li>Code block for false condition</li>
                </ul>
              </div>
            </div>

            {/* Practical Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Practical Example
              </h2>
              <CodeBlock code={practicalExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  This example demonstrates a grade checker that:
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li>Checks if the score is passing (&gt;= 60)</li>
                  <li>Provides appropriate feedback for both passing and failing scenarios</li>
                  <li>Shows additional information in the failing case</li>
                </ul>
              </div>
            </div>

            {/* Multiple Statements Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Multiple Statements Example
              </h2>
              <CodeBlock code={multipleStatementsExample} language="java" />
              <p className="mt-4 text-gray-300">
                This example shows how to handle multiple statements in both blocks and perform calculations.
              </p>
            </div>

            {/* Dry Run Examples */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Examples
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-300">
                    Temperature Check
                  </h3>
                  <CodeBlock code={dryRunExample1} language="java" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-300">
                    Bank Transaction
                  </h3>
                  <CodeBlock code={dryRunExample2} language="java" />
                </div>
              </div>
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
                  <span>Forgetting curly braces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using <span className="font-mono bg-red-100 dark:bg-red-900/50 px-1 rounded">=</span> instead of <span className="font-mono bg-red-100 dark:bg-red-900/50 px-1 rounded">==</span></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Placing semicolon after if condition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not considering all possible scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Nesting too many if-else statements</span>
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
                  <span>Always use blocks {} for clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep conditions simple and readable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using else-if for multiple conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use meaningful variable names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Test both true and false scenarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IfElse; 