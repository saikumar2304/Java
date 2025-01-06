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

  const gradeExample = `
// Grade calculator using switch
char grade = 'B';

switch (grade) {
    case 'A':
        System.out.println("Excellent performance!");
        System.out.println("Score range: 90-100");
        break;
    case 'B':
        System.out.println("Good performance!");
        System.out.println("Score range: 80-89");
        break;
    case 'C':
        System.out.println("Average performance.");
        System.out.println("Score range: 70-79");
        break;
    case 'D':
        System.out.println("Need improvement.");
        System.out.println("Score range: 60-69");
        break;
    case 'F':
        System.out.println("Failed. Please seek help.");
        System.out.println("Score range: Below 60");
        break;
    default:
        System.out.println("Invalid grade entered.");
}

// Output:
// Good performance!
// Score range: 80-89`;

  const dryRunExample = `
// Day of week example
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
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    default:
        System.out.println("Weekend");
}

// Dry Run:
// 1. day = 3 is initialized
// 2. Switch evaluates day value
// 3. Matches case 3
// 4. Executes case 3 block
// 5. Break statement exits switch
// Output: Wednesday`;

  const fallThroughExample = `
// Example of fall-through behavior
String command = "save";

switch (command) {
    case "save":
        System.out.println("Saving data...");
        // No break, falls through to next case
    case "backup":
        System.out.println("Creating backup...");
        break;
    case "exit":
        System.out.println("Exiting program...");
        break;
    default:
        System.out.println("Unknown command");
}

// Output:
// Saving data...
// Creating backup...`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Switch Statement in Java
              </h1>
              <p className="text-gray-300">
                The switch statement is a control flow statement that allows you to execute different code blocks based on the value of an expression.
                It provides a more elegant way to handle multiple conditions compared to long if-else-if chains.
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
                  <li>Expression (must evaluate to char, byte, short, int, String, or enum)</li>
                  <li>Case values (must be constants or literals)</li>
                  <li>Break statements (to prevent fall-through)</li>
                  <li>Optional default case (handles unmatched values)</li>
                </ul>
              </div>
            </div>

            {/* Grade Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Grade Example
              </h2>
              <CodeBlock code={gradeExample} language="java" />
            </div>

            {/* Dry Run Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Example
              </h2>
              <CodeBlock code={dryRunExample} language="java" />
            </div>

            {/* Fall-through Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Fall-through Behavior
              </h2>
              <CodeBlock code={fallThroughExample} language="java" />
              <p className="mt-4 text-gray-300">
                When a break statement is omitted, execution continues into the next case, known as "fall-through" behavior.
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
                  <span>Forgetting break statements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using non-constant case values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing default case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Duplicate case values</span>
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
                  <span>Always include a default case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use break statements consistently</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comment intentional fall-throughs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Group related cases together</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch; 