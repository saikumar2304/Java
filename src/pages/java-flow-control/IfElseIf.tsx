import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const IfElseIf = () => {
  const basicExample = `
if (condition1) {
    // code block for condition1
} else if (condition2) {
    // code block for condition2
} else if (condition3) {
    // code block for condition3
} else {
    // code block if no condition is true
}`;

  const gradeExample = `
// Grade calculator with multiple ranges
int score = 85;
char grade;

if (score >= 90) {
    grade = 'A';
    System.out.println("Excellent performance!");
} else if (score >= 80) {
    grade = 'B';
    System.out.println("Good performance!");
} else if (score >= 70) {
    grade = 'C';
    System.out.println("Average performance.");
} else if (score >= 60) {
    grade = 'D';
    System.out.println("Need improvement.");
} else {
    grade = 'F';
    System.out.println("Failed. Please seek help.");
}

System.out.println("Your grade: " + grade);

// Output:
// Good performance!
// Your grade: B`;

  const dryRunExample = `
// Age group classifier
int age = 25;

if (age < 13) {
    System.out.println("Child");
} else if (age < 20) {
    System.out.println("Teenager");
} else if (age < 30) {
    System.out.println("Young Adult");
} else if (age < 60) {
    System.out.println("Adult");
} else {
    System.out.println("Senior");
}

// Dry Run:
// 1. age = 25 is initialized
// 2. First check: age < 13
//    25 < 13 is false, move to next condition
// 3. Second check: age < 20
//    25 < 20 is false, move to next condition
// 4. Third check: age < 30
//    25 < 30 is true
//    Execute the code block: print "Young Adult"
// 5. Skip remaining conditions
// Output: Young Adult`;

  const seasonExample = `
// Season detector based on month
int month = 7;  // July
String season;

if (month == 12 || month == 1 || month == 2) {
    season = "Winter";
} else if (month >= 3 && month <= 5) {
    season = "Spring";
} else if (month >= 6 && month <= 8) {
    season = "Summer";
} else if (month >= 9 && month <= 11) {
    season = "Autumn";
} else {
    season = "Invalid month";
}

System.out.println("Current season: " + season);
// Output: Current season: Summer`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                If-Else-If Ladder in Java
              </h1>
              <p className="text-gray-300">
                The if-else-if ladder (also known as if-else-if chain) is a control structure that allows you to test multiple 
                conditions and execute different code blocks based on which condition is true. It's particularly useful when 
                you need to handle multiple cases or ranges of values.
              </p>
            </div>

            {/* Basic Syntax Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Syntax
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">Key points about if-else-if ladder:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li>Conditions are checked from top to bottom</li>
                  <li>Only the first true condition's block is executed</li>
                  <li>The else block is optional and executes if no condition is true</li>
                  <li>You can have any number of else-if blocks</li>
                </ul>
              </div>
            </div>

            {/* Grade Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Grade Calculator Example
              </h2>
              <CodeBlock code={gradeExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  This example shows how to use if-else-if ladder to:
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li>Handle multiple score ranges</li>
                  <li>Assign appropriate grades</li>
                  <li>Provide specific feedback for each grade level</li>
                </ul>
              </div>
            </div>

            {/* Dry Run Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Example
              </h2>
              <CodeBlock code={dryRunExample} language="java" />
            </div>

            {/* Season Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Season Detector Example
              </h2>
              <CodeBlock code={seasonExample} language="java" />
              <p className="mt-4 text-gray-300">
                This example demonstrates using logical operators (|| and &&) in conditions to check multiple values.
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
                  <span>Wrong order of conditions (overlapping ranges)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing cases or conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not having a default else case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Complex conditions that are hard to read</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Too many else-if statements (consider switch)</span>
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
                  <span>Arrange conditions from most specific to most general</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Always include an else block for unexpected cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep conditions simple and readable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider switch statement for many conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Test all possible paths through the ladder</span>
                </li>
              </ul>
            </div>

            {/* Tips Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Pro Tips
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use early returns for simpler code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Extract complex conditions into boolean methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using enums for fixed categories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IfElseIf; 