import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MethodsIntro = () => {
  const basicExample = `
// Basic method examples
public class Methods {
    // Method with no parameters and no return value
    public void sayHello() {
        System.out.println("Hello!");
    }

    // Method with parameters and return value
    public int add(int a, int b) {
        return a + b;
    }

    // Static method
    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        Methods obj = new Methods();
        
        // Calling methods
        obj.sayHello();                    // Output: Hello!
        int sum = obj.add(5, 3);          // sum = 8
        double area = calculateArea(2.5);  // area = 19.634...
    }
}`;

  const methodAnatomyExample = `
// Method anatomy explanation
public static int calculateSum(int num1, int num2) {
    int result = num1 + num2;
    return result;
}

// Breaking down the parts:
// - Access modifier: public
// - Static modifier: static
// - Return type: int
// - Method name: calculateSum
// - Parameters: (int num1, int num2)
// - Method body: { int result = num1 + num2; return result; }`;

  const methodTypesExample = `
public class MethodTypes {
    // 1. Instance Method
    public void instanceMethod() {
        System.out.println("This is an instance method");
    }

    // 2. Static Method
    public static void staticMethod() {
        System.out.println("This is a static method");
    }

    // 3. Accessor Method (Getter)
    private int value = 10;
    public int getValue() {
        return value;
    }

    // 4. Mutator Method (Setter)
    public void setValue(int newValue) {
        this.value = newValue;
    }

    // 5. Main Method
    public static void main(String[] args) {
        MethodTypes obj = new MethodTypes();
        
        // Calling different types of methods
        obj.instanceMethod();
        staticMethod();
        System.out.println(obj.getValue());
        obj.setValue(20);
    }
}`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Introduction to Java Methods
        </h1>
        <p className="text-lg text-gray-400">
          Methods in Java are blocks of reusable code that perform specific tasks. They form the core of 
          object-oriented programming, helping to organize and modularize your code for better readability and maintainability.
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
            The example demonstrates various types of methods, including instance, static, and parameterized methods.
          </p>
        </section>

        {/* Anatomy of a Method */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Anatomy of a Method
          </h2>
          <CodeBlock code={methodAnatomyExample} language="java" />
          <p className="text-gray-300 mt-4">A typical method consists of:</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <span className="text-yellow-400">Access Modifier:</span> Determines method visibility (e.g., <code>public</code>, <code>private</code>).
            </li>
            <li>
              <span className="text-yellow-400">Return Type:</span> Specifies the data type of the value returned by the method.
            </li>
            <li>
              <span className="text-yellow-400">Method Name:</span> The identifier for calling the method.
            </li>
            <li>
              <span className="text-yellow-400">Parameters:</span> Input values passed to the method.
            </li>
            <li>
              <span className="text-yellow-400">Method Body:</span> Contains the code to be executed.
            </li>
          </ul>
        </section>

        {/* Types of Methods */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Types of Methods
          </h2>
          <CodeBlock code={methodTypesExample} language="java" />
          <p className="text-gray-300 mt-4">
            Java supports different types of methods, including instance methods, static methods, accessor methods, and mutator methods.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Common Mistakes
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting return statements in non-void methods.</li>
            <li>Using incorrect access modifiers.</li>
            <li>Calling instance methods without creating an object.</li>
            <li>Poor method naming that reduces readability.</li>
            <li>Creating methods that are overly long and complex.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Best Practices
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use clear and descriptive method names that indicate their purpose.</li>
            <li>Keep methods focused on a single responsibility.</li>
            <li>Limit the number of parameters to improve readability.</li>
            <li>Document methods with Javadoc comments.</li>
            <li>Follow Java naming conventions for consistency.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Pro Tips
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use method overloading to create multiple methods with the same name but different parameters.</li>
            <li>Refactor long methods into smaller helper methods for better modularity.</li>
            <li>Leverage static methods for utility functions that do not depend on object state.</li>
            <li>Use accessor and mutator methods to enforce encapsulation.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MethodsIntro;