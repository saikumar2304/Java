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

  const visualRepresentation = `
1. **Recursive Function Flow**:
   - Start with the base case. If it's satisfied, return a result.
   - If not, proceed to the recursive case.
   - Each recursive call pushes a new frame onto the call stack.

2. **Key Steps**:
   - Identify a problem that can be divided into smaller subproblems.
   - Define a base case to terminate recursion.
   - Define a recursive case to divide the problem further.

3. **Call Stack Management**:
   - Each recursive call is stored on the call stack.
   - Unwind the stack as base cases are reached, returning results to previous calls.
`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Recursion in Java
        </h1>
        <p className="text-lg text-gray-400">
          Recursion is a programming technique where a method calls itself to solve a problem by breaking it down into smaller subproblems. It consists of a base case that stops the recursion and a recursive case that continues it.
        </p>
      </header>

      <main className="space-y-12">
        {/* Basic Examples Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Basic Examples
          </h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            Examples include calculating factorials and generating Fibonacci sequences.
          </p>
        </section>

        {/* Practical Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Practical Example
          </h2>
          <CodeBlock code={practicalExample} language="java" />
          <p className="text-gray-300 mt-4">
            Real-world use case: Traversing directory structures with recursion.
          </p>
        </section>

        {/* Tail Recursion Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Tail Recursion</h2>
          <CodeBlock code={tailRecursionExample} language="java" />
          <p className="text-gray-300 mt-4">
            Tail recursion optimizes recursive calls by eliminating stack overhead when possible.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run</h2>
          <CodeBlock code={dryRunExample} language="java" />
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Visual Representation</h2>
          <CodeBlock code={visualRepresentation} language="markdown" />
        </section>

        {/* Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Start with a clear base case to avoid infinite recursion.</li>
            <li>Break problems into smaller, independent subproblems.</li>
            <li>Test with small inputs before scaling up.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use memoization to optimize recursive calls by caching results.</li>
            <li>Consider iterative solutions for shallow recursion to save memory.</li>
            <li>Document the recursion logic for better maintainability.</li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting to define a base case.</li>
            <li>Creating infinite recursion loops.</li>
            <li>Ignoring stack overflow risks for deep recursion.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use recursion only when it simplifies the problem.</li>
            <li>Prefer tail recursion for better optimization.</li>
            <li>Optimize recursive depth with a clear termination condition.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Recursion;