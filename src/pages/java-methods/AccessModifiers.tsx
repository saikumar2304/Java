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
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            updateBalance(amount);  // Calls private method
        }
    }

    private void updateBalance(double amount) {
        balance += amount;
        logTransaction(amount);  // Calls protected method
    }

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
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Access Modifiers in Java
        </h1>
        <p className="text-lg text-gray-400">
          Access modifiers in Java determine the visibility and accessibility of classes, methods, and fields. They are fundamental to encapsulation and are essential for maintaining proper object-oriented design.
        </p>
      </header>

      <main className="space-y-12">
        {/* Basic Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Basic Access Modifiers
          </h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            This example demonstrates the four access levels available in Java: <code>private</code>, <code>default</code>, <code>protected</code>, and <code>public</code>.
          </p>
        </section>

        {/* Inheritance Example Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Access Modifiers with Inheritance
          </h2>
          <CodeBlock code={inheritanceExample} language="java" />
          <p className="text-gray-300 mt-4">
            Demonstrates how access modifiers work with inheritance across different packages.
          </p>
        </section>

        {/* Access Levels Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Access Levels Demonstration
          </h2>
          <CodeBlock code={accessLevelsExample} language="java" />
          <p className="text-gray-300 mt-4">
            Shows the hierarchy and relationships between access levels and their visibility in different contexts.
          </p>
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dry Run Example
          </h2>
          <CodeBlock code={dryRunExample} language="java" />
          <p className="text-gray-300 mt-4">
            The dry run demonstrates step-by-step execution of access modifiers in practice, showcasing interactions between public, private, and protected methods.
          </p>
        </section>

        {/* Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Always start with the most restrictive access level and loosen restrictions only when necessary.</li>
            <li>Use <code>private</code> for fields and methods unless they need to be accessed externally.</li>
            <li>Document the purpose of each access level choice for better code maintainability.</li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Overusing <code>public</code> fields, breaking encapsulation.</li>
            <li>Not considering package structure when using default access.</li>
            <li>Overusing <code>protected</code> access, reducing security.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use <code>private</code> for fields and provide getters/setters as needed.</li>
            <li>Plan package structure carefully for proper use of default access.</li>
            <li>Document access decisions for maintainability.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AccessModifiers;