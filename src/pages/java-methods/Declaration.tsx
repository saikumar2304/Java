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
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Method Declaration in Java
        </h1>
        <p className="text-lg text-gray-400">
          The <strong>method declaration</strong> in Java defines the structure, behavior, and functionality of a method. It specifies the access level, return type, method name, parameters, and body implementation.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Basic Syntax */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Basic Syntax</h2>
          <CodeBlock code={basicSyntaxExample} language="java" />
          <p className="text-gray-300 mt-4">
            A method declaration consists of a method signature (name, parameters, and return type) and the method body, which defines the functionality.
          </p>
        </section>

        {/* Return Types */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Return Types</h2>
          <CodeBlock code={returnTypesExample} language="java" />
          <p className="text-gray-300 mt-4">
            Methods can return various types of values, from primitive types to objects or arrays, based on the method's purpose.
          </p>
        </section>

        {/* Modifiers */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Access Modifiers and Other Modifiers
          </h2>
          <CodeBlock code={modifiersExample} language="java" />
          <p className="text-gray-300 mt-4">
            Access modifiers determine the visibility of methods, while other modifiers like <code>static</code>, <code>final</code>, and <code>abstract</code> provide additional characteristics.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <p className="text-gray-300">
            Here's how the method declaration works step-by-step:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg text-gray-200 mt-4">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                The method name and parameters define what inputs the method expects and its purpose.
              </li>
              <li>
                The return type specifies the type of data the method will return to the caller (if any).
              </li>
              <li>
                The access modifier determines the visibility of the method (e.g., <code>public</code>, <code>private</code>).
              </li>
              <li>
                The method body contains the instructions to perform the method's task.
              </li>
              <li>
                When the method is called, it executes its body and optionally returns a value.
              </li>
            </ol>
          </div>
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run</h2>
          <CodeBlock code={dryRunExample} language="java" />
          <p className="text-gray-300 mt-4">
            The dry run shows step-by-step execution of a sample program, demonstrating how methods are called and how their state is maintained.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Missing return statements in non-void methods.</li>
            <li>Using incorrect access modifiers or return types.</li>
            <li>Improper method naming that reduces readability.</li>
            <li>Declaring methods as static unnecessarily.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use meaningful method names that indicate the purpose.</li>
            <li>Keep methods small and focused on a single task.</li>
            <li>Choose appropriate access modifiers to enforce encapsulation.</li>
            <li>Use JavaDoc comments for documentation.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Leverage method overloading for flexibility with parameter variations.</li>
            <li>Break down long methods into smaller helper methods for better readability.</li>
            <li>Use static methods for utility functions that don’t depend on the instance state.</li>
            <li>Test methods thoroughly to ensure all edge cases are handled.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MethodDeclaration;