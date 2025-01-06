import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const StaticVsInstance = () => {
  const comparisonExample = `
public class Calculator {
    // Instance variable
    private double result;

    // Instance method - can access instance variables
    public void add(double number) {
        result += number;  // Modifies instance state
    }

    // Instance method - uses instance state
    public double getResult() {
        return result;
    }

    // Static method - can't access instance variables
    public static double square(double number) {
        return number * number;  // Only uses parameters
    }

    // Static method - utility function
    public static boolean isPositive(double number) {
        return number > 0;
    }
}

// Usage:
Calculator calc = new Calculator();
calc.add(5);                         // Instance method call
double result = calc.getResult();    // Instance method call
double squared = Calculator.square(4);  // Static method call
boolean isPos = Calculator.isPositive(result);  // Static method call`;

  const instanceExample = `
public class Student {
    // Instance variables
    private String name;
    private int age;
    private double gpa;

    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Instance methods - can access and modify instance state
    public void updateGPA(double newGPA) {
        this.gpa = newGPA;
        System.out.println(name + "'s GPA updated to: " + gpa);
    }

    public void celebrateBirthday() {
        this.age++;
        System.out.println(name + " is now " + age + " years old!");
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
    }
}`;

  const staticExample = `
public class MathUtils {
    // Static methods - utility functions
    public static double calculateAverage(double[] numbers) {
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return numbers.length > 0 ? sum / numbers.length : 0;
    }

    public static int findMax(int[] array) {
        if (array == null || array.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }
        
        int max = array[0];
        for (int num : array) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    public static boolean isPrime(int number) {
        if (number <= 1) return false;
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) return false;
        }
        return true;
    }
}

// Usage:
double[] grades = {85.5, 92.0, 76.5, 88.0};
double avg = MathUtils.calculateAverage(grades);
int[] numbers = {5, 2, 9, 1, 7};
int max = MathUtils.findMax(numbers);
boolean isPrime = MathUtils.isPrime(17);`;

  const dryRunExample = `
public class Counter {
    // Instance variable
    private int count;
    
    // Static variable
    private static int totalInstances = 0;
    
    // Constructor
    public Counter() {
        count = 0;
        totalInstances++;  // Increment static counter
    }
    
    // Instance method
    public void increment() {
        count++;
    }
    
    // Static method
    public static int getTotalInstances() {
        return totalInstances;
    }
}

// Dry Run:
Counter c1 = new Counter();  // totalInstances = 1
Counter c2 = new Counter();  // totalInstances = 2

c1.increment();  // c1.count = 1
c1.increment();  // c1.count = 2
c2.increment();  // c2.count = 1

int total = Counter.getTotalInstances();  // total = 2`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Static vs Instance Methods in Java
              </h1>
              <p className="text-gray-300">
                Java provides two types of methods: static (class) methods and instance methods. Understanding 
                the differences between them is crucial for proper object-oriented programming and code organization.
              </p>
            </div>

            {/* Comparison Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Direct Comparison
              </h2>
              <CodeBlock code={comparisonExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  This example shows how static and instance methods differ in their access to class members 
                  and how they are called.
                </p>
              </div>
            </div>

            {/* Instance Methods Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Instance Methods
              </h2>
              <CodeBlock code={instanceExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Instance methods can access and modify object state through instance variables.
                </p>
              </div>
            </div>

            {/* Static Methods Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Static Methods
              </h2>
              <CodeBlock code={staticExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Static methods are utility functions that operate independently of object state.
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
                  <span>Accessing instance variables from static methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using this keyword in static context</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Making methods static unnecessarily</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Calling instance methods from static context</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overusing static methods</span>
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
                  <span>Use static for utility functions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep instance methods for object behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider static factory methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document static method dependencies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use static for constants</span>
                </li>
              </ul>
            </div>

            {/* Key Differences Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Key Differences
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Object state access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method invocation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inheritance behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Usage patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticVsInstance; 