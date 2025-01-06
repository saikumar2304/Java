import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MethodOverriding = () => {
  const basicExample = `
// Base class
class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }
    
    public void eat() {
        System.out.println("Animal is eating");
    }
}

// Derived class
class Dog extends Animal {
    // Override makeSound method
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }
    
    // Override eat method
    @Override
    public void eat() {
        super.eat();  // Call parent method
        System.out.println("Dog is eating bones");
    }
}`;

  const rulesExample = `
class Parent {
    // Method to be overridden
    public void display() {
        System.out.println("Parent's display");
    }
    
    // Final method - cannot be overridden
    public final void showInfo() {
        System.out.println("Parent's info");
    }
    
    // Protected method
    protected void doSomething() {
        System.out.println("Parent doing something");
    }
}

class Child extends Parent {
    // Valid override - same name and parameters
    @Override
    public void display() {
        System.out.println("Child's display");
    }
    
    // Valid override - more accessible than protected
    @Override
    public void doSomething() {
        System.out.println("Child doing something");
    }
    
    // Invalid - cannot override final method
    // public void showInfo() { }  // Will cause error
}`;

  const polymorphismExample = `
class Shape {
    public double getArea() {
        return 0;
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
}

// Usage with polymorphism
Shape shape1 = new Circle(5);
Shape shape2 = new Rectangle(4, 6);

System.out.println(shape1.getArea());  // Uses Circle's getArea
System.out.println(shape2.getArea());  // Uses Rectangle's getArea`;

  const dryRunExample = `
class Vehicle {
    public String getInfo() {
        return "Vehicle";
    }
    
    public void start() {
        System.out.println(getInfo() + " is starting");
    }
}

class Car extends Vehicle {
    @Override
    public String getInfo() {
        return "Car";
    }
}

// Dry Run:
Vehicle v = new Car();
v.start();

// Execution flow:
// 1. v.start() calls Vehicle's start method
// 2. Inside start(), getInfo() is called
// 3. Since object is Car, Car's getInfo() is called
// 4. Returns "Car"
// 5. Prints "Car is starting"`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Method Overriding in Java
              </h1>
              <p className="text-gray-300">
                Method overriding is a feature that allows a subclass to provide a specific implementation 
                of a method that is already defined in its parent class. It is a fundamental concept in 
                object-oriented programming that enables runtime polymorphism.
              </p>
            </div>

            {/* Basic Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Method Overriding
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Shows basic method overriding with and without using the parent class implementation.
                </p>
              </div>
            </div>

            {/* Rules Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Overriding Rules
              </h2>
              <CodeBlock code={rulesExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Demonstrates the rules and restrictions for method overriding.
                </p>
              </div>
            </div>

            {/* Polymorphism Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Runtime Polymorphism
              </h2>
              <CodeBlock code={polymorphismExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Shows how method overriding enables runtime polymorphism.
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
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Changing return type</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reducing access level</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing @Override annotation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overriding final methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong method signature</span>
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
                  <span>Always use @Override</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow Liskov Substitution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document changes from parent</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using super</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep method behavior consistent</span>
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
                  <span>Runtime polymorphism</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method signature rules</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access modifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>super keyword usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>@Override annotation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodOverriding; 