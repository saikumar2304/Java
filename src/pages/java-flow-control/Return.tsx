import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Return = () => {
  const basicExample = `
// Basic return examples
public int add(int a, int b) {
    return a + b;  // Returns the sum and exits the method
}

public void printMessage() {
    System.out.println("Starting...");
    if (condition) {
        return;  // Exits the method early
    }
    System.out.println("Finishing...");
}`;

  const multipleReturnsExample = `
// Method with multiple return statements
public String getGrade(int score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}`;

  const dryRunExample = `
// Finding maximum number with early return
public int findMax(int[] numbers) {
    if (numbers == null || numbers.length == 0) {
        return -1;  // Early return for invalid input
    }
    
    int max = numbers[0];
    for (int i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Dry Run with numbers = {5, 2, 9, 1, 7}:
// 1. Check array validity: valid
// 2. Initialize max = 5 (first element)
// 3. Loop through array:
//    - i=1: 2 > 5? false, max stays 5
//    - i=2: 9 > 5? true, max becomes 9
//    - i=3: 1 > 9? false, max stays 9
//    - i=4: 7 > 9? false, max stays 9
// 4. Return 9`;

  const complexExample = `
// Complex example with multiple return points
public String validateUser(String username, String password) {
    // Early returns for invalid input
    if (username == null || username.isEmpty()) {
        return "Username cannot be empty";
    }
    
    if (password == null || password.isEmpty()) {
        return "Password cannot be empty";
    }
    
    if (username.length() < 4) {
        return "Username must be at least 4 characters";
    }
    
    if (password.length() < 6) {
        return "Password must be at least 6 characters";
    }
    
    // If all validations pass
    return "Valid user";
}`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Return Statement in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>return statement</strong> is used to exit a method, optionally returning a value to the caller. 
          It can be used for early method termination or to provide the result of a method's computation.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Basic Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Basic Examples
          </h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            The <strong>return statement</strong> is essential for exiting methods and providing results in non-void methods.
          </p>
        </section>

        {/* Multiple Return Statements */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Multiple Return Statements
          </h2>
          <CodeBlock code={multipleReturnsExample} language="java" />
          <p className="text-gray-300 mt-4">
            Using multiple return statements can simplify logic and improve readability by handling each condition directly.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run Example
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
          <p className="text-gray-300 mt-4">
            The dry run demonstrates how early return points simplify error handling and ensure only valid results are processed.
          </p>
        </section>

        {/* Complex Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Complex Example with Early Returns
          </h2>
          <CodeBlock code={complexExample} language="java" />
          <p className="text-gray-300 mt-4">
            Early returns avoid deeply nested conditions, making the code easier to read and maintain.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Missing return statements in non-void methods.</li>
            <li>Returning incorrect or null values without handling errors.</li>
            <li>Leaving unreachable code after the return statement.</li>
            <li>Inconsistent return types in different branches of a method.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Best Practices
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use early returns for validation checks to avoid nested logic.</li>
            <li>Ensure methods return consistent types across all branches.</li>
            <li>Clearly document the purpose and return value of methods.</li>
            <li>Keep methods focused on a single responsibility.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use descriptive variable names for return values to improve readability.</li>
            <li>Leverage optional types for better null safety in modern Java versions.</li>
            <li>Break complex methods into smaller ones, each with a single return point.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Return;