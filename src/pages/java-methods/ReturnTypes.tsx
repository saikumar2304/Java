import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const ReturnTypes = () => {
  const primitiveExample = `
// Primitive return types
public class PrimitiveReturns {
    public int getNumber() {
        return 42;
    }

    public double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }

    public boolean isEven(int number) {
        return number % 2 == 0;
    }

    public char getGrade(int score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    }
}`;

  const objectExample = `
// Object return types
public class ObjectReturns {
    public String getMessage() {
        return "Hello, World!";
    }

    public int[] getNumbers() {
        return new int[]{1, 2, 3, 4, 5};
    }

    public Student getStudent() {
        return new Student("John", 20);
    }

    public List<String> getNames() {
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        return names;
    }
}`;

  const voidExample = `
// Void return type examples
public class VoidMethods {
    public void printMessage() {
        System.out.println("Hello!");
        // No return statement needed
    }

    public void processData(int[] data) {
        for (int num : data) {
            System.out.println("Processing: " + num);
        }
        return; // Optional return statement
    }

    public void updateDatabase(String data) {
        if (data == null) {
            return; // Early return for invalid input
        }
        // Process data...
    }
}`;

  const multipleReturnsExample = `
// Multiple return points example
public String validateInput(String input) {
    if (input == null) {
        return "Input cannot be null";
    }

    if (input.isEmpty()) {
        return "Input cannot be empty";
    }

    if (input.length() < 3) {
        return "Input must be at least 3 characters";
    }

    return "Input is valid";
}

// Usage:
String result1 = validateInput(null);        // "Input cannot be null"
String result2 = validateInput("");          // "Input cannot be empty"
String result3 = validateInput("ab");        // "Input must be at least 3 characters"
String result4 = validateInput("hello");     // "Input is valid"`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Return Types in Java Methods
              </h1>
              <p className="text-gray-300">
                Return types specify what kind of value a method sends back to its caller. Every method in Java 
                must declare a return type, which can be a primitive type, an object type, or void if the method 
                doesn't return anything.
              </p>
            </div>

            {/* Primitive Return Types Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Primitive Return Types
              </h2>
              <CodeBlock code={primitiveExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Methods can return any of Java's primitive data types: byte, short, int, long, float, double, 
                  boolean, and char.
                </p>
              </div>
            </div>

            {/* Object Return Types Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Object Return Types
              </h2>
              <CodeBlock code={objectExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Methods can return any object type, including arrays, custom classes, and collection types.
                </p>
              </div>
            </div>

            {/* Void Return Type Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Void Return Type
              </h2>
              <CodeBlock code={voidExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Void methods don't return any value and are typically used for performing actions or operations.
                </p>
              </div>
            </div>

            {/* Multiple Returns Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Multiple Return Points
              </h2>
              <CodeBlock code={multipleReturnsExample} language="java" />
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
                  <span>Missing return statement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Returning wrong type</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unreachable return statements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Returning null without documentation</span>
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
                  <span>Choose appropriate return types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document return values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null returns carefully</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using Optional</span>
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
                  <span>Primitive vs Object returns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Void methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Return type compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Multiple return points</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnTypes; 