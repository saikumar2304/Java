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

  const dryRunExample = `
// Example of an if statement dry run
int temperature = 35;

if (temperature > 30) {
    System.out.println("It's a hot day!");
    System.out.println("Stay hydrated");
}

// Step-by-step Execution:
// 1. temperature = 35 is initialized.
// 2. The condition (temperature > 30) is checked.
//    - Is 35 > 30? Yes, the condition evaluates to true.
// 3. The code inside the if block is executed:
//    - Prints: "It's a hot day!"
//    - Prints: "Stay hydrated"
// 4. Program continues after the if block.`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Main Heading */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          If Statement in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>if statement</strong> is used to execute a block of code only if a specified condition is true. It's one of the core constructs for decision-making in Java.
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
            The syntax of an <strong>if statement</strong> begins with the keyword <code>if</code>, followed by a condition inside parentheses. If the condition evaluates to <strong>true</strong>, the code inside the curly braces is executed.
          </p>
        </section>

        {/* Practical Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Practical Example
          </h2>
          <CodeBlock code={practicalExample} language="java" />
          <p className="text-gray-300 mt-4">
            This example checks whether a student's score meets the passing grade of 60. If the condition is true, the program prints congratulatory messages and the score.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            Imagine a decision-making process as a flow:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200">
            <ul className="list-decimal pl-6 space-y-3">
              <li>Check the condition (e.g., <code>if (temperature &gt; 30)</code>).</li>
              <li>
                If the condition evaluates to <strong>true</strong>, execute the code inside the <code>if</code> block.
              </li>
              <li>
                If the condition evaluates to <strong>false</strong>, skip the <code>if</code> block and continue with the rest of the program.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 mt-4">
            This approach allows your program to make decisions and take appropriate actions dynamically.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
          <p className="text-gray-300 mt-4">
            The dry run above demonstrates how the condition is evaluated and how the program behaves step-by-step when using an <strong>if statement</strong>.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using <code>=</code> instead of <code>==</code> for comparison.</li>
            <li>Forgetting to include curly braces when the <code>if</code> block contains multiple statements.</li>
            <li>Over-complicating conditions by nesting multiple logical operations without parentheses.</li>
            <li>Failing to account for all possible scenarios, resulting in unhandled cases.</li>
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Tips for Using If Statements
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Keep conditions clear and concise for better readability.</li>
            <li>Combine logical operators effectively to simplify your code.</li>
            <li>Use meaningful variable names to make conditions self-explanatory.</li>
            <li>Test your program for both true and false cases of each condition.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              Use a ternary operator for simple <code>if-else</code> conditions to save space:
              <CodeBlock
                code={`String result = (score >= 60) ? "Pass" : "Fail";`}
                language="java"
              />
            </li>
            <li>Break down complex conditions into helper methods for better clarity.</li>
            <li>Avoid deeply nested <code>if</code> statements; consider using <code>switch</code> or early returns.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default IfStatement;