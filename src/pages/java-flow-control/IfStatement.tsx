import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const IfStatement = () => {
  const basicExample = `
if (condition) {
    // code block to be executed if condition is true
}`;

  const practicalExample = `
// Check student's grade
int score = 85;

if (score >= 60) {
    System.out.println("Congratulations! You passed.");
    System.out.println("Your score: " + score);
}`;

  const multipleConditionsExample = `
// Check eligibility for discount
int purchaseAmount = 120;
boolean isMember = true;

if (purchaseAmount >= 100 && isMember) {
    double discount = purchaseAmount * 0.15;  // 15% discount
    System.out.println("You get a discount of $" + discount);
    System.out.println("Final amount: $" + (purchaseAmount - discount));
}`;

  const dryRunExample = `
// Let's understand how if statement executes
int temperature = 35;

if (temperature > 30) {
    System.out.println("It's a hot day!");
    System.out.println("Stay hydrated");
}

// Dry Run:
// 1. temperature = 35 is initialized
// 2. Condition check: is 35 > 30?
//    35 > 30 evaluates to true
// 3. Since condition is true:
//    - First println executes: "It's a hot day!"
//    - Second println executes: "Stay hydrated"
// 4. Program continues after if block`;

  const nestedIfExample = `
// Example of nested if statements
int age = 25;
boolean hasLicense = true;
boolean hasInsurance = true;

if (age >= 18) {
    System.out.println("Age requirement met");
    
    if (hasLicense) {
        System.out.println("License requirement met");
        
        if (hasInsurance) {
            System.out.println("You can rent a car!");
        }
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
                If Statement in Java
              </h1>
              <p className="text-gray-300">
                The if statement is one of the most fundamental control flow statements in Java. 
                It allows your program to make decisions and execute different code blocks based on conditions.
                Think of it as a way to tell your program "If this condition is true, then do this."
              </p>
            </div>

            {/* Basic Syntax Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Syntax
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">Components of an if statement:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li>The <span className="text-yellow-600 dark:text-yellow-400">if</span> keyword</li>
                  <li>A <span className="text-green-600 dark:text-green-400">condition</span> in parentheses</li>
                  <li>A code block in curly braces to execute if the condition is true</li>
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
                <p className="text-gray-300">In this example:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li>We check if the score is greater than or equal to 60</li>
                  <li>If true, we print two messages</li>
                  <li>If false, we skip the entire code block</li>
                </ul>
              </div>
            </div>

            {/* Multiple Conditions Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Multiple Conditions
              </h2>
              <CodeBlock code={multipleConditionsExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">Logical operators for combining conditions:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li><span className="text-yellow-600 dark:text-yellow-400">&amp;&amp;</span> (AND) - both conditions must be true</li>
                  <li><span className="text-yellow-600 dark:text-yellow-400">||</span> (OR) - at least one condition must be true</li>
                  <li><span className="text-yellow-600 dark:text-yellow-400">!</span> (NOT) - inverts the condition</li>
                </ul>
              </div>
            </div>

            {/* Nested If Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Nested If Statements
              </h2>
              <CodeBlock code={nestedIfExample} language="java" />
              <p className="mt-4 text-gray-300">
                You can place if statements inside other if statements when you need to check multiple conditions in sequence.
              </p>
            </div>

            {/* Dry Run Section */}
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
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using <span className="font-mono bg-red-900/50 px-1 rounded">=</span> instead of <span className="font-mono bg-red-900/50 px-1 rounded">==</span> for comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Forgetting curly braces for multiple statements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using unnecessary if statements for simple boolean assignments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not considering all possible scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Making conditions too complex</span>
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
                  <span>Always use curly braces, even for single statements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep conditions simple and readable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use meaningful variable names in conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider extracting complex conditions into boolean variables</span>
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

export default IfStatement; 