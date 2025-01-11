import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Switch = () => {
  const basicExample = `
switch (expression) {
    case value1:
        // code block for value1
        break;
    case value2:
        // code block for value2
        break;
    default:
        // code block if no case matches
}`;

  const practicalExample = `
// Determine the grade based on score
char grade = 'B';

switch (grade) {
    case 'A':
        System.out.println("Excellent performance!");
        break;
    case 'B':
        System.out.println("Good performance!");
        break;
    case 'C':
        System.out.println("Average performance.");
        break;
    case 'D':
        System.out.println("Below average performance.");
        break;
    case 'F':
        System.out.println("Failed. Please improve.");
        break;
    default:
        System.out.println("Invalid grade entered.");
}`;

  const dryRunExample = `
// Example of determining the day of the week
int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Invalid day");
}

// Dry Run:
// 1. day = 3 is initialized.
// 2. Switch evaluates the expression day.
// 3. Matches case 3, prints "Wednesday".
// 4. Break exits the switch statement.`;

  const enhancedSwitchExample = `
// Enhanced switch expression (Java 14+)
String result = switch (grade) {
    case 'A' -> "Excellent performance!";
    case 'B' -> "Good performance!";
    case 'C' -> "Average performance.";
    case 'D' -> "Below average performance.";
    case 'F' -> "Failed. Please improve.";
    default -> "Invalid grade entered.";
};
System.out.println(result);`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Switch Statement in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>switch statement</strong> evaluates an expression and matches it against multiple cases. It provides a cleaner alternative to nested <code>if-else if</code> conditions.
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
            A <code>switch</code> statement starts by evaluating the expression. It then matches the result with the case labels. The <code>break</code> statement ensures that execution stops after the matching case block is executed.
          </p>
        </section>

        {/* Practical Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Practical Example
          </h2>
          <CodeBlock code={practicalExample} language="java" />
          <p className="text-gray-300 mt-4">
            This example demonstrates how to determine grades based on scores using a <code>switch</code> statement. Each grade corresponds to a specific case.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            The <strong>switch</strong> statement processes as follows:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200">
            <ul className="list-decimal pl-6 space-y-3">
              <li>Evaluate the expression (e.g., <code>switch (day)</code>).</li>
              <li>Compare the expression's result to each case.</li>
              <li>
                If a case matches, execute its code block and stop with <code>break</code>.
              </li>
              <li>
                If no cases match, execute the <code>default</code> block (if provided).
              </li>
            </ul>
          </div>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
          <p className="text-gray-300 mt-4">
            The dry run explains step-by-step how the <strong>switch</strong> statement evaluates and executes the matching block.
          </p>
        </section>

        {/* Enhanced Switch */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Enhanced Switch Expression (Java 14+)
          </h2>
          <CodeBlock code={enhancedSwitchExample} language="java" />
          <p className="text-gray-300 mt-4">
            Enhanced <strong>switch expressions</strong>, introduced in Java 14, provide a cleaner syntax. 
            The arrow operator (<code>-&gt;</code>) replaces colon and break keywords, and the result can be directly assigned to a variable.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting <code>break</code> statements, causing unintended fall-through behavior.</li>
            <li>Using data types not supported in <code>switch</code> (e.g., float).</li>
            <li>Overlapping or duplicate case values.</li>
            <li>Missing <code>default</code> case to handle unexpected inputs.</li>
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Tips for Using Switch Statements
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always include a <code>default</code> case to handle unmatched inputs.</li>
            <li>Use <code>break</code> to prevent unintended execution of subsequent cases.</li>
            <li>Group related cases together to simplify the logic.</li>
            <li>Prefer enhanced <code>switch</code> for better readability in Java 14+.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              Use enums for predefined values in <code>switch</code>, improving clarity and reducing errors.
            </li>
            <li>
              Document complex logic inside cases for maintainability.
            </li>
            <li>
              When possible, replace nested <code>if-else</code> chains with <code>switch</code> for cleaner code.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Switch;