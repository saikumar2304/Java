import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MethodParameters = () => {
  const basicExample = `
// Different types of parameters
public class ParameterExamples {
    // No parameters
    public void sayHello() {
        System.out.println("Hello!");
    }

    // Single parameter
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Multiple parameters
    public int add(int a, int b) {
        return a + b;
    }

    // Array parameter
    public double average(double[] numbers) {
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return sum / numbers.length;
    }

    // Object parameter
    public void displayStudent(Student student) {
        System.out.println("Name: " + student.getName());
        System.out.println("Age: " + student.getAge());
    }
}`;

  const parameterPassingExample = `
// Parameter passing demonstration
public class ParameterPassing {
    // Pass by value example (primitive types)
    public static void modifyValue(int x) {
        x = x + 10;  // Changes only the local copy
        System.out.println("Inside method: x = " + x);
    }

    // Pass by reference example (objects)
    public static void modifyArray(int[] arr) {
        arr[0] = 100;  // Modifies the actual array
        System.out.println("Inside method: arr[0] = " + arr[0]);
    }

    public static void main(String[] args) {
        int num = 5;
        modifyValue(num);
        System.out.println("After method: num = " + num);  // Still 5

        int[] numbers = {1, 2, 3};
        modifyArray(numbers);
        System.out.println("After method: numbers[0] = " + numbers[0]);  // Now 100
    }
}`;

  const dryRunExample = `
public class Calculator {
    public int calculate(int a, int b, String operation) {
        int result = 0;
        
        switch (operation) {
            case "add":
                result = a + b;
                break;
            case "subtract":
                result = a - b;
                break;
            case "multiply":
                result = a * b;
                break;
            case "divide":
                if (b != 0) {
                    result = a / b;
                }
                break;
        }
        return result;
    }
}

// Dry Run:
Calculator calc = new Calculator();
int result1 = calc.calculate(10, 5, "add");      // result1 = 15
int result2 = calc.calculate(10, 5, "subtract"); // result2 = 5
int result3 = calc.calculate(10, 5, "multiply"); // result3 = 50
int result4 = calc.calculate(10, 5, "divide");   // result4 = 2`;

  const parameterValidationExample = `
public class UserService {
    public void registerUser(String username, String password, int age) {
        // Parameter validation
        if (username == null || username.isEmpty()) {
            throw new IllegalArgumentException("Username cannot be empty");
        }

        if (password == null || password.length() < 8) {
            throw new IllegalArgumentException("Password must be at least 8 characters");
        }

        if (age < 18 || age > 100) {
            throw new IllegalArgumentException("Age must be between 18 and 100");
        }

        // If all validations pass, proceed with registration
        System.out.println("Registering user: " + username);
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
                Method Parameters in Java
              </h1>
              <p className="text-gray-300">
                Method parameters allow you to pass data to methods for processing. They act as variables 
                that hold the values passed to the method when it's called. Understanding parameter passing 
                is crucial for writing effective Java methods.
              </p>
            </div>

            {/* Basic Examples Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Parameter Types and Examples
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Methods can accept different types and numbers of parameters to suit various needs.
                </p>
              </div>
            </div>

            {/* Parameter Passing Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Parameter Passing Mechanisms
              </h2>
              <CodeBlock code={parameterPassingExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Java uses pass-by-value for all parameters, but the behavior differs between primitives and objects.
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

            {/* Parameter Validation Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Parameter Validation
              </h2>
              <CodeBlock code={parameterValidationExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Always validate parameters to ensure your methods receive valid input.
                </p>
              </div>
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
                  <span>Not validating parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Too many parameters (more than 4-5)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Confusing parameter order</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modifying parameters unnecessarily</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not handling null parameters</span>
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
                  <span>Use descriptive parameter names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Validate all input parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep parameter count low</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use parameter objects for many parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document parameters with JavaDoc</span>
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
                  <span>Pass by value vs reference</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parameter validation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parameter types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optional parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parameter scope</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodParameters; 