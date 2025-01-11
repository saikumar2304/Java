import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const CommandLineArgs = () => {
  const basicExample = `
public class CommandLineDemo {
    public static void main(String[] args) {
        // Print number of arguments
        System.out.println("Number of arguments: " + args.length);
        
        // Print all arguments
        for (int i = 0; i < args.length; i++) {
            System.out.println("Argument " + i + ": " + args[i]);
        }
    }
}

// Running the program:
// java CommandLineDemo hello world 123
// Output:
// Number of arguments: 3
// Argument 0: hello
// Argument 1: world
// Argument 2: 123`;

  const argumentParsingExample = `
public class Calculator {
    public static void main(String[] args) {
        if (args.length != 3) {
            System.out.println("Usage: Calculator <number1> <operator> <number2>");
            return;
        }

        try {
            double num1 = Double.parseDouble(args[0]);
            double num2 = Double.parseDouble(args[2]);
            String operator = args[1];
            
            double result = 0;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 == 0) {
                        System.out.println("Error: Division by zero");
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    System.out.println("Invalid operator: " + operator);
                    return;
            }
            
            System.out.println(num1 + " " + operator + " " + num2 + " = " + result);
            
        } catch (NumberFormatException e) {
            System.out.println("Error: Please enter valid numbers");
        }
    }
}

// Running the program:
// java Calculator 10 + 5
// Output: 10.0 + 5.0 = 15.0`;

  const visualRepresentation = `
1. **Command Line Arguments Flow:**
   - User enters command line arguments when running the program.
   - Example: \`java Program arg1 arg2 arg3\`.
   - \`arg1\`, \`arg2\`, and \`arg3\` are stored in the \`String[] args\` array.

2. **Accessing Arguments:**
   - Arguments are accessed using zero-based indexing, e.g., \`args[0]\` for the first argument.
   - Arguments are always treated as \`String\` values and need conversion if required.

3. **Validation and Parsing:**
   - Validate the arguments to ensure proper input and avoid runtime errors.
   - Example: Ensure correct number of arguments before processing.
`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Command Line Arguments in Java
        </h1>
        <p className="text-lg text-gray-400">
          Command line arguments allow you to pass input to your Java program when it starts. They provide a flexible way to configure program behavior without modifying the code.
        </p>
      </header>

      <main className="space-y-12">
        {/* Basic Usage */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Basic Usage
          </h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            Arguments are passed to the main method as an array of strings. This allows flexible input handling.
          </p>
        </section>

        {/* Argument Parsing */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Argument Parsing
          </h2>
          <CodeBlock code={argumentParsingExample} language="java" />
          <p className="text-gray-300 mt-4">
            Shows how to parse and validate command line arguments effectively.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <CodeBlock code={visualRepresentation} language="markdown" />
          <p className="text-gray-300 mt-4">
            A structured explanation of how command line arguments flow through a Java program.
          </p>
        </section>

        {/* Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Always validate the number and type of arguments passed to your program.</li>
            <li>Provide meaningful error messages when arguments are incorrect.</li>
            <li>Use comments to document the purpose of each argument.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use flags like <code>-h</code> or <code>--help</code> to display usage instructions.</li>
            <li>Encapsulate argument processing into a separate method or class for cleaner code.</li>
            <li>Handle optional arguments with default values to make your program more flexible.</li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not validating input arguments, leading to runtime errors.</li>
            <li>Assuming all arguments are always present.</li>
            <li>Using hardcoded argument indices without checks.</li>
            <li>Ignoring argument types and failing to parse them correctly.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Validate all input arguments before processing.</li>
            <li>Provide detailed usage instructions for users.</li>
            <li>Use meaningful variable names for arguments.</li>
            <li>Always handle edge cases like missing or incorrect arguments gracefully.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CommandLineArgs;