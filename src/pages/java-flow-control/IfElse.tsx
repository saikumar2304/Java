import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const IfElse = () => {
  const basicExample = `
if (condition) {
    // code block if condition is true
} else {
    // code block if condition is false
}`;

  const practicalExample = `
// Determine pass or fail
int score = 45;

if (score >= 60) {
    System.out.println("Congratulations, you passed!");
} else {
    System.out.println("Sorry, you failed. Better luck next time!");
}`;

  const dryRunExample = `
// Dry Run Example
int temperature = 20;

if (temperature > 30) {
    System.out.println("It's a hot day!");
} else {
    System.out.println("It's a cool day!");
}

// Step-by-step Execution:
// 1. temperature = 20 is initialized.
// 2. The condition (temperature > 30) is checked.
//    - Is 20 > 30? No, the condition evaluates to false.
// 3. The code in the else block is executed:
//    - Prints: "It's a cool day!"`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Main Heading */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          If-Else Statement in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>if-else statement</strong> allows you to execute one block of code when a condition is true and another block when it is false.
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
            The <code>if</code> keyword checks the condition. If it's true, the code inside the first block executes. If it's false, the code inside the <code>else</code> block executes.
          </p>
        </section>

        {/* Practical Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Practical Example
          </h2>
          <CodeBlock code={practicalExample} language="java" />
          <p className="text-gray-300 mt-4">
            This example checks whether a student's score is 60 or higher. If yes, a success message is displayed; otherwise, a failure message is shown.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            Here's a logical flow for the <strong>if-else statement</strong>:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200">
            <ul className="list-decimal pl-6 space-y-3">
              <li>Check the condition (e.g., <code>if (score &gt;= 60)</code>).</li>
              <li>
                If the condition evaluates to <strong>true</strong>, execute the code inside the <code>if</code> block.
              </li>
              <li>
                If the condition evaluates to <strong>false</strong>, execute the code inside the <code>else</code> block.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 mt-4">
            This structure ensures one of the blocks is always executed.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
          <p className="text-gray-300 mt-4">
            The dry run explains step-by-step how the <strong>if-else</strong> statement evaluates and executes the appropriate block of code.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using <code>=</code> instead of <code>==</code> for comparison.</li>
            <li>Overlooking the else block, leading to unhandled false cases.</li>
            <li>Not using curly braces for multi-line blocks, causing unexpected behavior.</li>
            <li>Writing complex conditions without proper parentheses, resulting in logical errors.</li>
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Tips for Using If-Else Statements
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use <code>else</code> blocks to handle false cases explicitly.</li>
            <li>Keep conditions simple and readable by breaking them into smaller boolean expressions.</li>
            <li>Always test edge cases to ensure the if-else logic is robust.</li>
            <li>Use meaningful variable names to make conditions self-explanatory.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              For simple two-condition checks, use a ternary operator:
              <CodeBlock
                code={`String result = (score >= 60) ? "Pass" : "Fail";`}
                language="java"
              />
            </li>
            <li>Avoid deeply nested if-else blocks; consider using a switch statement for clarity.</li>
            <li>Use early returns in functions to simplify complex conditional logic.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default IfElse;