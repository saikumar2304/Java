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
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Method Parameters in Java
        </h1>
        <p className="text-lg text-gray-400">
          Method parameters allow you to pass data to methods for processing. They act as variables that hold the values passed 
          to the method when it’s called. Understanding parameter passing is crucial for writing effective Java methods.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Basic Examples */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Basic Examples
          </h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            Methods can accept different types and numbers of parameters to suit various needs.
          </p>
        </section>

        {/* Parameter Passing */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Parameter Passing Mechanisms
          </h2>
          <CodeBlock code={parameterPassingExample} language="java" />
          <p className="text-gray-300 mt-4">
            Java uses pass-by-value for all parameters, but the behavior differs between primitives and objects.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            The lifecycle of a method parameter:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200 mt-4">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                A method is declared with parameters to accept specific inputs.
              </li>
              <li>
                When the method is called, the values provided (arguments) are assigned to these parameters.
              </li>
              <li>
                The method processes the data using these parameter values.
              </li>
              <li>
                If objects are passed, their state may be altered if the method modifies them.
              </li>
              <li>
                After execution, the method ends, and the parameters go out of scope.
              </li>
            </ol>
          </div>
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run Example
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
        </section>

        {/* Parameter Validation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Parameter Validation
          </h2>
          <CodeBlock code={parameterValidationExample} language="java" />
          <p className="text-gray-300 mt-4">
            Always validate parameters to ensure your methods receive valid input.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Not validating parameters.</li>
            <li>Using too many parameters (more than 4-5).</li>
            <li>Confusing parameter order.</li>
            <li>Modifying parameters unnecessarily.</li>
            <li>Not handling null parameters.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use descriptive parameter names.</li>
            <li>Validate all input parameters.</li>
            <li>Keep parameter count low.</li>
            <li>Use parameter objects for methods with many parameters.</li>
            <li>Document parameters using JavaDoc.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>For optional parameters, use method overloading or builder patterns.</li>
            <li>Use final keywords for parameters that shouldn’t be reassigned.</li>
            <li>Combine parameter validation with exception handling for robustness.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MethodParameters;