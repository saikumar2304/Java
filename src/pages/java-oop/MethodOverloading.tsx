import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const MethodOverloading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Method Overloading in Java
              </h1>
              <p className="text-gray-300">
                Method overloading is a feature that allows a class to have multiple methods with the same name but different parameters. It's a form of compile-time polymorphism.
              </p>
            </div>

            {/* Basic Overloading Section */}
            <MethodCard
              title="Basic Method Overloading"
              description="Different ways to overload methods"
            >
              <CodeBlock
                code={`class Calculator {
    // Method with two parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method with three parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method with different parameter types
    public double add(double a, double b) {
        return a + b;
    }
    
    // Method with different parameter order
    public String add(String a, int b) {
        return a + b;
    }
    
    public String add(int a, String b) {
        return a + b;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Constructor Overloading */}
            <MethodCard
              title="Constructor Overloading"
              description="Overloading class constructors"
            >
              <CodeBlock
                code={`class Student {
    private String name;
    private int age;
    private String grade;
    
    // Default constructor
    public Student() {
        this("Unknown", 0, "N/A");
    }
    
    // Constructor with name only
    public Student(String name) {
        this(name, 0, "N/A");
    }
    
    // Constructor with name and age
    public Student(String name, int age) {
        this(name, age, "N/A");
    }
    
    // Full constructor
    public Student(String name, int age, String grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Type Promotion Section */}
            <MethodCard
              title="Type Promotion"
              description="Automatic type promotion in overloaded methods"
            >
              <CodeBlock
                code={`class TypePromotion {
    public void display(int x) {
        System.out.println("Integer: " + x);
    }
    
    public void display(double x) {
        System.out.println("Double: " + x);
    }
    
    public static void main(String[] args) {
        TypePromotion tp = new TypePromotion();
        
        tp.display(5);      // Calls int version
        tp.display(5.5);    // Calls double version
        tp.display('a');    // Calls int version (char promoted to int)
        tp.display(5L);     // Calls double version (long promoted to double)
    }
}`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Return type confusion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ambiguous overloading</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type promotion issues</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overuse of overloading</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring varargs rules</span>
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
                  <span>Use meaningful names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep parameter lists short</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider builder pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document each overload</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maintain consistency</span>
                </li>
              </ul>
            </div>

            {/* Pro Tips Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Pro Tips
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use method chaining</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider varargs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use static factory methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage default values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Understand type promotion</span>
                </li>
              </ul>
            </div>

            {/* Key Concepts Section */}
            <div className="bg-purple-900/20 border border-purple-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-200">
                Key Concepts
              </h2>
              <ul className="space-y-3 text-purple-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Compile-time polymorphism</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parameter lists</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type promotion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Constructor overloading</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method resolution</span>
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