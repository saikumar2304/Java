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

  const visualRepresentation = `
1. **Varargs Flow:**
   - A method with a varargs parameter can accept zero or more arguments.
   - Internally, all arguments are treated as an array.

2. **Accessing Arguments:**
   - Use a for-each loop or array indexing to process the arguments.
   - Example:
     \`\`\`java
     for (int num : numbers) {
         System.out.println(num);
     }
     \`\`\`

3. **Restrictions:**
   - Varargs must always be the last parameter in the method signature.
   - Only one varargs parameter is allowed per method.
`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Variable Arguments (Varargs) in Java
        </h1>
        <p className="text-lg text-gray-400">
          Variable arguments (varargs) provide a flexible way to handle methods with varying numbers of arguments.
        </p>
      </header>

      <main className="space-y-12">
        {/* Basic Usage */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Basic Usage</h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            Varargs allow methods to accept a variable number of arguments, making calls more concise and readable.
          </p>
        </section>

        {/* Mixed Parameters */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Mixed Parameters with Varargs
          </h2>
          <CodeBlock code={mixedParamsExample} language="java" />
          <p className="text-gray-300 mt-4">
            Varargs can work with regular parameters to create flexible and reusable methods.
          </p>
        </section>

        {/* Array vs Varargs */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Array vs Varargs</h2>
          <CodeBlock code={arrayVsVarargsExample} language="java" />
          <p className="text-gray-300 mt-4">
            Varargs simplify method calls compared to traditional array parameters while maintaining similar functionality.
          </p>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run</h2>
          <CodeBlock code={dryRunExample} language="java" />
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <CodeBlock code={visualRepresentation} language="markdown" />
        </section>

        {/* Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Always validate varargs to avoid runtime errors.</li>
            <li>Use varargs sparingly to prevent method overloading issues.</li>
            <li>Combine varargs with clear documentation to ensure proper usage.</li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Using multiple varargs parameters in the same method.</li>
            <li>Forgetting to validate empty or null varargs.</li>
            <li>Overcomplicating method signatures with unnecessary varargs.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use varargs for flexible method inputs while ensuring type safety.</li>
            <li>Combine regular parameters with varargs effectively.</li>
            <li>Always validate and handle empty varargs gracefully.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Varargs;