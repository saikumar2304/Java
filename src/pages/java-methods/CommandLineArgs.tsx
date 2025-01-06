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

  const flagsExample = `
public class ProgramOptions {
    public static void main(String[] args) {
        boolean verbose = false;
        String inputFile = null;
        String outputFile = null;
        
        // Process command line flags
        for (int i = 0; i < args.length; i++) {
            switch (args[i]) {
                case "-v":
                case "--verbose":
                    verbose = true;
                    break;
                case "-i":
                case "--input":
                    if (i + 1 < args.length) {
                        inputFile = args[++i];
                    }
                    break;
                case "-o":
                case "--output":
                    if (i + 1 < args.length) {
                        outputFile = args[++i];
                    }
                    break;
                default:
                    System.out.println("Unknown option: " + args[i]);
                    break;
            }
        }
        
        // Print configuration
        if (verbose) {
            System.out.println("Configuration:");
            System.out.println("Input file: " + inputFile);
            System.out.println("Output file: " + outputFile);
        }
    }
}

// Running the program:
// java ProgramOptions -v --input data.txt --output result.txt
// Output:
// Configuration:
// Input file: data.txt
// Output file: result.txt`;

  const dryRunExample = `
public class ArgParser {
    public static void main(String[] args) {
        // args = ["-name", "John", "-age", "25"]
        
        String name = null;
        int age = 0;
        
        for (int i = 0; i < args.length; i++) {
            switch (args[i]) {
                case "-name":
                    if (i + 1 < args.length) {
                        name = args[++i];  // i becomes 1, name = "John"
                    }
                    break;
                case "-age":
                    if (i + 1 < args.length) {
                        age = Integer.parseInt(args[++i]);  // i becomes 3, age = 25
                    }
                    break;
            }
        }
        
        System.out.println("Name: " + name);  // Output: Name: John
        System.out.println("Age: " + age);    // Output: Age: 25
    }
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
                Command Line Arguments in Java
              </h1>
              <p className="text-gray-300">
                Command line arguments allow you to pass input to your Java program when it starts. 
                They provide a flexible way to configure program behavior without modifying the code.
              </p>
            </div>

            {/* Basic Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Usage
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Arguments are passed to the main method as an array of strings.
                </p>
              </div>
            </div>

            {/* Argument Parsing Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Argument Parsing
              </h2>
              <CodeBlock code={argumentParsingExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Shows how to parse and validate command line arguments.
                </p>
              </div>
            </div>

            {/* Flags Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Command Line Flags
              </h2>
              <CodeBlock code={flagsExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Demonstrates handling command line flags and options.
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
                  <span>Not validating arguments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assuming argument types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing error handling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Array index out of bounds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor argument documentation</span>
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
                  <span>Validate all inputs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide usage instructions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle errors gracefully</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use meaningful argument names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Support help flag (-h, --help)</span>
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
                  <span>args[] is String array</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Zero-based indexing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Space-separated values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type conversion needed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Arguments are optional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandLineArgs; 