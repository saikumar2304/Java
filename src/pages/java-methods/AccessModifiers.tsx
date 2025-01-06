import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const AccessModifiers = () => {
  const basicExample = `
// Access modifiers demonstration
public class Student {
    // Private - only accessible within this class
    private String name;
    private int age;
    
    // Public - accessible from anywhere
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Protected - accessible in same package and subclasses
    protected void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
    
    // Default (package-private) - accessible only in same package
    void updateAge(int newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    }
}`;

  const inheritanceExample = `
// Base class in package 'school'
package school;

public class Person {
    private String name;
    protected int age;  // Accessible in subclasses
    String address;     // Package-private
    public String email;  // Public access

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    protected void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Subclass in different package
package university;

public class Student extends Person {
    private double gpa;

    public Student(String name, int age) {
        super(name, age);
        // Can access protected age
        // Cannot access private name
        // Cannot access package-private address
        // Can access public email
    }

    @Override
    protected void displayDetails() {
        super.displayDetails();
        System.out.println("GPA: " + gpa);
    }
}`;

  const accessLevelsExample = `
public class AccessLevels {
    // Private - most restrictive
    private void privateMethod() {
        System.out.println("Private method");
    }

    // Default (package-private)
    void defaultMethod() {
        System.out.println("Default method");
        privateMethod();  // Can call private method
    }

    // Protected
    protected void protectedMethod() {
        System.out.println("Protected method");
        defaultMethod();  // Can call default method
    }

    // Public - least restrictive
    public void publicMethod() {
        System.out.println("Public method");
        protectedMethod();  // Can call protected method
    }
}

// Access demonstration
class AccessDemo {
    public static void main(String[] args) {
        AccessLevels obj = new AccessLevels();
        obj.publicMethod();      // OK
        obj.protectedMethod();   // OK - same package
        obj.defaultMethod();     // OK - same package
        // obj.privateMethod();  // Error - not accessible
    }
}`;

  const dryRunExample = `
// In package 'banking'
public class BankAccount {
    private double balance;  // Private field
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    // Public method
    public void deposit(double amount) {
        if (amount > 0) {
            updateBalance(amount);  // Calls private method
        }
    }
    
    // Private helper method
    private void updateBalance(double amount) {
        balance += amount;
        logTransaction(amount);  // Calls protected method
    }
    
    // Protected method
    protected void logTransaction(double amount) {
        System.out.println("Transaction: " + amount);
        System.out.println("New balance: " + balance);
    }
}

// Dry Run:
BankAccount account = new BankAccount(1000);
account.deposit(500);  // Public method calls private, then protected
// Output:
// Transaction: 500
// New balance: 1500`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Access Modifiers in Java
              </h1>
              <p className="text-gray-300">
                Access modifiers control the visibility and accessibility of classes, methods, and fields. 
                They are fundamental to encapsulation and help maintain proper object-oriented design.
              </p>
            </div>

            {/* Basic Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Access Modifiers
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  This example shows the four access levels available in Java.
                </p>
              </div>
            </div>

            {/* Inheritance Example Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Access Modifiers with Inheritance
              </h2>
              <CodeBlock code={inheritanceExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Shows how access modifiers work with inheritance and different packages.
                </p>
              </div>
            </div>

            {/* Access Levels Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Access Levels Demonstration
              </h2>
              <CodeBlock code={accessLevelsExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">
                  Demonstrates the hierarchy and relationships between different access levels.
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
                  <span>Making fields public</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using default access unintentionally</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overusing protected access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not considering package structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking encapsulation</span>
                </li>
              </ul>
            </div>

            {/* Best Practices Section */}
            <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-200">
                Best Practices
              </h2>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use private for fields</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide public getters/setters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use protected carefully</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan package structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document access decisions</span>
                </li>
              </ul>
            </div>

            {/* Access Levels Summary */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Access Levels
              </h2>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>private: class only</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>default: package only</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>protected: package + subclasses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>public: everywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessModifiers; 