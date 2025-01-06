import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MethodOverloading = () => {
  const basicExample = `
public class Calculator {
    // Method with two int parameters
    public int add(int a, int b) {
        return a + b;
    }

    // Overloaded method with three int parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Overloaded method with double parameters
    public double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        System.out.println(calc.add(5, 3));        // Calls first method: 8
        System.out.println(calc.add(5, 3, 2));     // Calls second method: 10
        System.out.println(calc.add(5.5, 3.5));    // Calls third method: 9.0
    }
}`;

  const typePromotionExample = `
public class TypePromotion {
    // Method with int parameter
    public void display(int num) {
        System.out.println("Integer: " + num);
    }

    // Method with double parameter
    public void display(double num) {
        System.out.println("Double: " + num);
    }

    public static void main(String[] args) {
        TypePromotion obj = new TypePromotion();
        
        byte b = 25;
        short s = 30;
        long l = 100L;
        float f = 3.14f;
        
        obj.display(b);   // Calls int version (byte -> int)
        obj.display(s);   // Calls int version (short -> int)
        obj.display(l);   // Calls double version (long -> double)
        obj.display(f);   // Calls double version (float -> double)
    }
}`;

  const constructorOverloadingExample = `
public class Student {
    private String name;
    private int age;
    private String course;

    // Default constructor
    public Student() {
        this.name = "Unknown";
        this.age = 0;
        this.course = "Not Assigned";
    }

    // Constructor with name
    public Student(String name) {
        this.name = name;
        this.age = 0;
        this.course = "Not Assigned";
    }

    // Constructor with name and age
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.course = "Not Assigned";
    }

    // Constructor with all parameters
    public Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Course: " + course);
    }

    public static void main(String[] args) {
        Student s1 = new Student();                    // Uses default constructor
        Student s2 = new Student("John");              // Uses second constructor
        Student s3 = new Student("Alice", 20);         // Uses third constructor
        Student s4 = new Student("Bob", 22, "Java");   // Uses fourth constructor
    }
}`;

  const dryRunExample = `
public class StringUtil {
    public static int count(String str, char ch) {
        if (str == null) return 0;
        int count = 0;
        for (char c : str.toCharArray()) {
            if (c == ch) count++;
        }
        return count;
    }

    public static int count(String str, String substr) {
        if (str == null || substr == null) return 0;
        int count = 0;
        int lastIndex = 0;
        while ((lastIndex = str.indexOf(substr, lastIndex)) != -1) {
            count++;
            lastIndex += substr.length();
        }
        return count;
    }
}

// Dry Run:
String text = "hello hello world";
char ch = 'l';
String substr = "hello";

int result1 = StringUtil.count(text, ch);     // Calls first method
// count = 0
// Loop through "hello hello world"
// 'h' != 'l', count = 0
// 'e' != 'l', count = 0
// 'l' == 'l', count = 1
// 'l' == 'l', count = 2
// 'o' != 'l', count = 2
// ... and so on
// Final count = 4

int result2 = StringUtil.count(text, substr); // Calls second method
// count = 0
// First "hello" found at index 0, count = 1
// Second "hello" found at index 6, count = 2
// No more occurrences
// Final count = 2`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Method Overloading in Java
              </h1>
              <p className="text-gray-300">
                Method overloading allows you to define multiple methods with the same name but different 
                parameters. This provides flexibility in how methods can be called and makes your code 
                more intuitive to use.
              </p>
            </div>

            {/* Basic Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Method Overloading
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Methods can be overloaded by changing the number or types of parameters.
                </p>
              </div>
            </div>

            {/* Type Promotion Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Type Promotion in Overloading
              </h2>
              <CodeBlock code={typePromotionExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Java automatically promotes primitive types when matching overloaded methods.
                </p>
              </div>
            </div>

            {/* Constructor Overloading Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Constructor Overloading
              </h2>
              <CodeBlock code={constructorOverloadingExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Constructors can also be overloaded to provide different ways of creating objects.
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
                  <span>Overloading based on return type</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ambiguous method calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring type promotion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Confusing overloading with overriding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Too many overloaded versions</span>
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
                  <span>Keep parameter lists consistent</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use meaningful parameter names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document each overloaded version</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using varargs instead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maintain logical parameter order</span>
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
                  <span>Same name, different parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Return type can differ</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Compile-time polymorphism</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type promotion rules</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Constructor overloading</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodOverloading; 