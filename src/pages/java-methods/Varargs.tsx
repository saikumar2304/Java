import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Varargs = () => {
  const basicExample = `
public class VarargsDemo {
    // Method with variable number of int arguments
    public static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }

    public static void main(String[] args) {
        // Call with different number of arguments
        System.out.println(sum());           // Output: 0
        System.out.println(sum(1));          // Output: 1
        System.out.println(sum(1, 2));       // Output: 3
        System.out.println(sum(1, 2, 3));    // Output: 6
        System.out.println(sum(1, 2, 3, 4)); // Output: 10
    }
}`;

  const mixedParamsExample = `
public class PrintFormatter {
    // Regular parameters followed by varargs
    public static void printFormatted(String prefix, int... numbers) {
        System.out.print(prefix + ": ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Multiple types of varargs
    public static void printMixed(String separator, Object... items) {
        for (int i = 0; i < items.length; i++) {
            System.out.print(items[i]);
            if (i < items.length - 1) {
                System.out.print(separator);
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printFormatted("Numbers", 1, 2, 3);
        // Output: Numbers: 1 2 3

        printMixed(" | ", "John", 25, true, 3.14);
        // Output: John | 25 | true | 3.14
    }
}`;

  const arrayVsVarargsExample = `
public class ArrayVsVarargs {
    // Method using array parameter
    public static double average(double[] numbers) {
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return numbers.length > 0 ? sum / numbers.length : 0;
    }

    // Equivalent method using varargs
    public static double averageVarargs(double... numbers) {
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return numbers.length > 0 ? sum / numbers.length : 0;
    }

    public static void main(String[] args) {
        double[] arr = {1.0, 2.0, 3.0};
        
        // Using array method
        System.out.println(average(arr));  // Output: 2.0
        // System.out.println(average(1.0, 2.0, 3.0));  // Won't compile
        
        // Using varargs method
        System.out.println(averageVarargs(arr));         // Output: 2.0
        System.out.println(averageVarargs(1.0, 2.0, 3.0)); // Output: 2.0
    }
}`;

  const dryRunExample = `
public class Calculator {
    public static int max(int first, int... rest) {
        int maximum = first;  // Start with first parameter
        
        for (int num : rest) {
            if (num > maximum) {
                maximum = num;
            }
        }
        return maximum;
    }
}

// Dry Run:
int result1 = max(5);            // first = 5, rest = {}
                                // maximum = 5
                                // No loop iterations
                                // Returns 5

int result2 = max(5, 8, 2, 9);  // first = 5, rest = {8, 2, 9}
                                // maximum = 5
                                // Loop 1: 8 > 5, maximum = 8
                                // Loop 2: 2 < 8, maximum = 8
                                // Loop 3: 9 > 8, maximum = 9
                                // Returns 9`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Variable Arguments (Varargs) in Java
              </h1>
              <p className="text-gray-300">
                Variable arguments (varargs) allow methods to accept a variable number of arguments. 
                This feature provides a cleaner alternative to passing arrays and makes method calls 
                more flexible.
              </p>
            </div>

            {/* Basic Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Varargs Usage
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  The varargs parameter is specified using three dots (...) and must be the last parameter.
                </p>
              </div>
            </div>

            {/* Mixed Parameters Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Mixed Parameters with Varargs
              </h2>
              <CodeBlock code={mixedParamsExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Varargs can be combined with regular parameters and handle different types.
                </p>
              </div>
            </div>

            {/* Array vs Varargs Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Array vs Varargs
              </h2>
              <CodeBlock code={arrayVsVarargsExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Comparison between traditional array parameters and varargs.
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
                  <span>Multiple varargs parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Varargs not as last parameter</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overloading ambiguity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not checking empty varargs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type safety issues</span>
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
                  <span>Use for flexible argument counts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check for null and empty</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document expected usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider type safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use arrays for fixed lengths</span>
                </li>
              </ul>
            </div>

            {/* Key Points Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Key Points
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Syntax: Type... paramName</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Must be last parameter</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Treated as array internally</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Zero or more arguments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type safety important</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Varargs; 