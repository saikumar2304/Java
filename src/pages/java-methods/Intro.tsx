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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Introduction to Java Methods
              </h1>
              <p className="text-gray-300">
                Methods in Java are blocks of code that perform specific tasks. They are fundamental 
                building blocks of object-oriented programming, allowing you to create reusable code 
                and organize your program into logical units.
              </p>
            </div>

            {/* Basic Examples Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Method Examples
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  These examples show different types of methods with varying parameters and return types.
                </p>
              </div>
            </div>

            {/* Method Anatomy Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Method Anatomy
              </h2>
              <CodeBlock code={methodAnatomyExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">Key components of a method:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li><span className="text-yellow-400">Access Modifier:</span> Determines visibility</li>
                  <li><span className="text-yellow-400">Return Type:</span> Type of value returned</li>
                  <li><span className="text-yellow-400">Method Name:</span> Identifier for the method</li>
                  <li><span className="text-yellow-400">Parameters:</span> Input values (optional)</li>
                  <li><span className="text-yellow-400">Method Body:</span> Actual code implementation</li>
                </ul>
              </div>
            </div>

            {/* Method Types Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Types of Methods
              </h2>
              <CodeBlock code={methodTypesExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Java supports various types of methods, each serving different purposes in your program.
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
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Forgetting return statement in non-void methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using wrong access modifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Calling instance methods statically</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor method naming</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Methods that are too long or complex</span>
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
                  <span>Use clear, descriptive method names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep methods focused on a single task</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Limit parameters to 3-4 maximum</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document methods with comments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow naming conventions</span>
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
                  <span>Method signature</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access modifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Return types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parameters vs Arguments</span>
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

export default MethodsIntro; 