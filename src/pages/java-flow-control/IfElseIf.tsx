import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const IfElseIf = () => {
  const basicExample = `
if (condition1) {
    // code block if condition1 is true
} else if (condition2) {
    // code block if condition2 is true
} else {
    // code block if none of the above conditions are true
}`;

  const practicalExample = `
// Determine grade based on score
int score = 78;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else if (score >= 60) {
    System.out.println("Grade: D");
} else {
    System.out.println("Grade: F");
}`;

  const dryRunExample = `
// Dry Run Example
int score = 78;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else if (score >= 60) {
    System.out.println("Grade: D");
} else {
    System.out.println("Grade: F");
}

// Step-by-step Execution:
// 1. score = 78 is initialized.
// 2. Check condition: Is 78 >= 90? No, condition is false.
// 3. Check condition: Is 78 >= 80? No, condition is false.
// 4. Check condition: Is 78 >= 70? Yes, condition is true.
// 5. Print: "Grade: C".
// 6. Skip the remaining else-if and else blocks.`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Main Heading */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          If-Else If Statement in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>if-else if statement</strong> is used when multiple conditions need to be checked sequentially. It ensures only one block of code executes based on the first true condition.
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
            The <code>if-else if</code> structure checks multiple conditions sequentially. If a condition is true, the corresponding block is executed, and the rest are skipped.
          </p>
        </section>

        {/* Practical Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Practical Example
          </h2>
          <CodeBlock code={practicalExample} language="java" />
          <p className="text-gray-300 mt-4">
            This example assigns a grade based on the student's score using multiple conditions. Only the first matching condition is executed.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            The <strong>if-else if</strong> structure works as follows:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200">
            <ul className="list-decimal pl-6 space-y-3">
              <li>Evaluate the first condition (e.g., <code>if (score &gt;= 90)</code>).</li>
              <li>
                If the first condition is true, execute the corresponding block and skip the remaining blocks.
              </li>
              <li>
                If the first condition is false, evaluate the next condition (e.g., <code>else if (score &gt;= 80)</code>).
              </li>
              <li>Continue checking conditions until one is true or the else block is reached.</li>
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
            The dry run above demonstrates step-by-step how the <strong>if-else if</strong> statement evaluates multiple conditions and executes the matching block of code.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not handling all possible scenarios, leaving some conditions unhandled.</li>
            <li>Writing overlapping or conflicting conditions, causing logical errors.</li>
            <li>Overcomplicating conditions instead of simplifying with logical operators.</li>
            <li>Skipping the <code>else</code> block for fallback scenarios.</li>
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Tips for Using If-Else If Statements
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Order conditions from most specific to least specific for clarity.</li>
            <li>Test each condition to ensure it behaves as expected.</li>
            <li>Use parentheses generously to avoid ambiguity in compound conditions.</li>
            <li>Include an <code>else</code> block for a fallback or default case.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>
              Refactor repeated logic into functions or variables for better readability:
              <CodeBlock
                code={`boolean isGradeA = score >= 90;
if (isGradeA) {
    System.out.println("Grade: A");
}`}
                language="java"
              />
            </li>
            <li>Use switch statements when conditions depend on a single variable for simplicity.</li>
            <li>Always document complex conditions with comments to improve maintainability.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default IfElseIf;