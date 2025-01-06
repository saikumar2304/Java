import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MethodCalling = () => {
  const basicExample = `
public class MethodCallExample {
    // Instance method
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Static method
    public static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        // Calling instance method
        MethodCallExample obj = new MethodCallExample();
        obj.greet("John");  // Output: Hello, John!

        // Calling static method
        int sum = MethodCallExample.add(5, 3);  // sum = 8
        // Or simply:
        int result = add(10, 20);  // result = 30
    }
}`;

  const objectMethodExample = `
public class Student {
    private String name;
    private int age;

    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Instance methods
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public void updateAge(int newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    }
}

// Using the methods
Student student = new Student("Alice", 20);
student.displayInfo();     // Calls displayInfo method
student.updateAge(21);     // Calls updateAge method
student.displayInfo();     // Calls displayInfo again`;

  const dryRunExample = `
public class Calculator {
    private int result;

    public void add(int num) {
        result += num;
        System.out.println("After adding " + num + ": " + result);
    }

    public void subtract(int num) {
        result -= num;
        System.out.println("After subtracting " + num + ": " + result);
    }

    public void clear() {
        result = 0;
        System.out.println("Calculator cleared");
    }
}

// Dry Run:
Calculator calc = new Calculator();
calc.clear();         // Output: Calculator cleared
                     // result = 0
calc.add(5);         // Output: After adding 5: 5
                     // result = 5
calc.subtract(2);    // Output: After subtracting 2: 3
                     // result = 3
calc.add(10);        // Output: After adding 10: 13
                     // result = 13`;

  const methodChainingExample = `
public class TextBuilder {
    private StringBuilder text = new StringBuilder();

    public TextBuilder append(String str) {
        text.append(str);
        return this;  // Returns this instance for chaining
    }

    public TextBuilder appendLine(String str) {
        text.append(str).append("\\n");
        return this;
    }

    public String getText() {
        return text.toString();
    }
}

// Method chaining example
TextBuilder builder = new TextBuilder();
String result = builder.append("Hello ")
                      .append("World!")
                      .appendLine("")
                      .append("How are you?")
                      .getText();

// Result:
// Hello World!
// How are you?`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Method Calling in Java
              </h1>
              <p className="text-gray-300">
                Method calling is how you execute methods in Java. Understanding proper method invocation 
                is essential for working with objects and classes effectively. Methods can be called on 
                objects (instance methods) or directly on classes (static methods).
              </p>
            </div>

            {/* Basic Examples Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Method Calls
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Methods can be called in different ways depending on whether they are instance or static methods.
                </p>
              </div>
            </div>

            {/* Object Methods Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Object Method Calls
              </h2>
              <CodeBlock code={objectMethodExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Instance methods are called on objects and can access the object's fields.
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

            {/* Method Chaining Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Method Chaining
              </h2>
              <CodeBlock code={methodChainingExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Method chaining allows you to call multiple methods in sequence on the same object.
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
                  <span>Calling instance methods statically</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not handling null objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong number of arguments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect argument types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring return values</span>
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
                  <span>Check for null before calling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use appropriate access level</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle exceptions properly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use method chaining appropriately</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider method visibility</span>
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
                  <span>Instance vs Static calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method chaining</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Return values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parameter passing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method overloading</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodCalling; 