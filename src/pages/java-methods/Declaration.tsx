import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MethodDeclaration = () => {
  const basicSyntaxExample = `
// Basic method declaration syntax
[access_modifier] [static] return_type method_name([parameters]) {
    // method body
    return value;  // if non-void
}

// Examples:
public void displayMessage() {
    System.out.println("Hello World");
}

private static int calculateSquare(int number) {
    return number * number;
}

protected double calculateAverage(double[] numbers) {
    double sum = 0;
    for (double num : numbers) {
        sum += num;
    }
    return sum / numbers.length;
}`;

  const returnTypesExample = `
// Different return types
public class ReturnTypes {
    // Void return type
    public void printHello() {
        System.out.println("Hello");
        // No return statement needed
    }

    // Primitive return type
    public int getAge() {
        return 25;
    }

    // Object return type
    public String getName() {
        return "John Doe";
    }

    // Array return type
    public int[] getNumbers() {
        return new int[]{1, 2, 3, 4, 5};
    }

    // Custom class return type
    public Student getStudent() {
        return new Student("John", 20);
    }
}`;

  const modifiersExample = `
public class ModifiersExample {
    // Public method - accessible from anywhere
    public void publicMethod() {
        System.out.println("Public method");
    }

    // Private method - only accessible within this class
    private void privateMethod() {
        System.out.println("Private method");
    }

    // Protected method - accessible in same package and subclasses
    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    // Package-private method (default) - accessible only in same package
    void packagePrivateMethod() {
        System.out.println("Package-private method");
    }

    // Static method - belongs to class, not instance
    public static void staticMethod() {
        System.out.println("Static method");
    }

    // Final method - cannot be overridden by subclasses
    public final void finalMethod() {
        System.out.println("Final method");
    }
}`;

  const dryRunExample = `
public class Calculator {
    private int result;

    public void clear() {
        result = 0;
    }

    public void add(int number) {
        result += number;
    }

    public int getResult() {
        return result;
    }
}

// Dry Run:
Calculator calc = new Calculator();
calc.clear();      // result = 0
calc.add(5);       // result = 0 + 5 = 5
calc.add(3);       // result = 5 + 3 = 8
int value = calc.getResult();  // value = 8`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Method Declaration in Java
              </h1>
              <p className="text-gray-300">
                Method declaration defines the structure and behavior of a method. It includes the method's 
                signature, return type, access modifiers, and implementation. A well-declared method clearly 
                communicates its purpose and usage to other developers.
              </p>
            </div>

            {/* Basic Syntax Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Syntax
              </h2>
              <CodeBlock code={basicSyntaxExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  The method declaration includes several components that define its characteristics and behavior.
                </p>
              </div>
            </div>

            {/* Return Types Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Return Types
              </h2>
              <CodeBlock code={returnTypesExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Methods can return different types of values, from simple primitives to complex objects.
                </p>
              </div>
            </div>

            {/* Modifiers Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Access Modifiers and Other Modifiers
              </h2>
              <CodeBlock code={modifiersExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Different modifiers control the visibility and behavior of methods.
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
                  <span>Missing return statement in non-void methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect access modifier usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Declaring methods as static unnecessarily</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using wrong return type</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inconsistent naming conventions</span>
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
                  <span>Use meaningful method names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Choose appropriate access modifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep methods focused and small</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use proper JavaDoc comments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow return type conventions</span>
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
                  <span>Method signature components</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access level implications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Return type selection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Static vs non-static context</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method visibility scope</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodDeclaration; 