import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Recursion = () => {
  const basicExample = `
public class RecursionBasics {
    // Factorial calculation using recursion
    public static int factorial(int n) {
        // Base case
        if (n == 0 || n == 1) {
            return 1;
        }
        // Recursive case
        return n * factorial(n - 1);
    }

    // Fibonacci sequence using recursion
    public static int fibonacci(int n) {
        // Base cases
        if (n <= 1) {
            return n;
        }
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5: " + factorial(5));
        System.out.println("Fibonacci number at position 6: " + fibonacci(6));
    }
}`;

  const practicalExample = `
public class DirectoryTraversal {
    public static void listFiles(File directory, String indent) {
        // Base case: if not a directory, return
        if (!directory.isDirectory()) {
            return;
        }

        // Process all files in the directory
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                System.out.println(indent + file.getName());
                if (file.isDirectory()) {
                    // Recursive case: traverse subdirectory
                    listFiles(file, indent + "  ");
                }
            }
        }
    }

    public static void main(String[] args) {
        File rootDir = new File("./project");
        listFiles(rootDir, "");
    }
}`;

  const tailRecursionExample = `
public class TailRecursion {
    // Regular recursion for sum
    public static int sum(int n) {
        if (n <= 1) {
            return n;
        }
        return n + sum(n - 1);
    }

    // Tail recursion for sum
    public static int sumTail(int n, int accumulator) {
        if (n <= 1) {
            return accumulator + n;
        }
        return sumTail(n - 1, accumulator + n);
    }

    // Helper method to make it easier to call
    public static int sumTail(int n) {
        return sumTail(n, 0);
    }

    public static void main(String[] args) {
        System.out.println("Regular sum: " + sum(5));
        System.out.println("Tail recursive sum: " + sumTail(5));
    }
}`;

  const dryRunExample = `
public class RecursiveDryRun {
    public static int power(int base, int exponent) {
        // Base case
        if (exponent == 0) {
            return 1;
        }
        // Recursive case
        return base * power(base, exponent - 1);
    }
}

// Dry Run of power(2, 3):
// 1. power(2, 3)
//    - exponent != 0
//    - returns 2 * power(2, 2)
//    
// 2. power(2, 2)
//    - exponent != 0
//    - returns 2 * power(2, 1)
//    
// 3. power(2, 1)
//    - exponent != 0
//    - returns 2 * power(2, 0)
//    
// 4. power(2, 0)
//    - exponent == 0
//    - returns 1
//    
// Now unwinding:
// power(2, 1) returns 2 * 1 = 2
// power(2, 2) returns 2 * 2 = 4
// power(2, 3) returns 2 * 4 = 8

// Final result: 8`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Recursion in Java
              </h1>
              <p className="text-gray-300">
                Recursion is a programming technique where a method calls itself to solve a problem by 
                breaking it down into smaller subproblems. It consists of a base case that stops the 
                recursion and a recursive case that continues it.
              </p>
            </div>

            {/* Basic Examples Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Recursion Examples
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Classic examples of recursion include factorial calculation and Fibonacci sequence.
                </p>
              </div>
            </div>

            {/* Practical Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Practical Recursion Example
              </h2>
              <CodeBlock code={practicalExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Real-world example of using recursion to traverse directory structures.
                </p>
              </div>
            </div>

            {/* Tail Recursion Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Tail Recursion
              </h2>
              <CodeBlock code={tailRecursionExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Tail recursion is an optimization technique where the recursive call is the last operation.
                </p>
              </div>
            </div>

            {/* Dry Run Example */}
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
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing base case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Infinite recursion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Stack overflow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inefficient recursive solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not considering iterative alternatives</span>
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
                  <span>Always include base case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use tail recursion when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider memory limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Test with boundary cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document recursive logic</span>
                </li>
              </ul>
            </div>

            {/* Key Concepts Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Key Concepts
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Base case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Recursive case</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Call stack</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tail recursion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Recursive depth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recursion; 