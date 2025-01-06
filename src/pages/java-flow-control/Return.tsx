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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Return Statement in Java
              </h1>
              <p className="text-gray-300">
                The return statement is used to exit a method, optionally returning a value to the caller. 
                It can be used for early method termination or to provide the result of a method's computation.
              </p>
            </div>

            {/* Basic Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Examples
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Return statements can either return a value (in non-void methods) or simply exit the method (in void methods).
                </p>
              </div>
            </div>

            {/* Multiple Returns Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Multiple Return Statements
              </h2>
              <CodeBlock code={multipleReturnsExample} language="java" />
              <p className="mt-4 text-gray-300">
                Multiple return statements can make code more readable when handling different conditions.
              </p>
            </div>

            {/* Dry Run Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Example
              </h2>
              <CodeBlock code={dryRunExample} language="java" />
            </div>

            {/* Complex Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Complex Example with Early Returns
              </h2>
              <CodeBlock code={complexExample} language="java" />
              <p className="mt-4 text-gray-300">
                Early returns can simplify validation logic and avoid deeply nested conditions.
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
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing return statements in non-void methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Returning wrong data types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unreachable code after return</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inconsistent return types in different paths</span>
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
                  <span>Use early returns for validation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep methods focused and small</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document return values clearly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Be consistent with return types</span>
                </li>
              </ul>
            </div>

            {/* When to Use Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                When to Use Return
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method completion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Early validation exits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Error handling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Simplifying complex logic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return; 