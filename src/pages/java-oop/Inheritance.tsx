import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Inheritance: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Inheritance in Java
        </h1>
        <p className="text-lg text-gray-400">
          Inheritance is a core concept of object-oriented programming that allows one class to inherit the fields and methods of another class. It promotes code reuse and establishes a hierarchical relationship between classes.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            Inheritance enables a child class (subclass) to reuse fields and methods of a parent class (superclass). The <code>extends</code> keyword is used to create inheritance relationships.
          </p>
          <CodeBlock
            code={`// Parent class
class Animal {
    protected String name;

    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child class
class Dog extends Animal {
    public void bark() {
        System.out.println(name + " is barking");
    }
}

// Usage
Dog dog = new Dog();
dog.name = "Buddy";
dog.eat();  // Buddy is eating
dog.bark(); // Buddy is barking`}
            language="java"
          />
        </section>

        {/* Types of Inheritance */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Types of Inheritance</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><strong>Single Inheritance:</strong> A subclass inherits from one superclass.</li>
            <li><strong>Multilevel Inheritance:</strong> A chain of inheritance with multiple levels.</li>
            <li><strong>Hierarchical Inheritance:</strong> Multiple subclasses inherit from a single superclass.</li>
          </ul>
        </section>

        {/* Examples Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Examples</h2>

          {/* Single Inheritance */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Single Inheritance</h3>
            <CodeBlock
              code={`// Parent class
class Animal {
    public void eat() {
        System.out.println("This animal eats food.");
    }
}

// Child class
class Dog extends Animal {
    public void bark() {
        System.out.println("This dog barks.");
    }
}

// Usage
Dog dog = new Dog();
dog.eat();  // Output: This animal eats food.
dog.bark(); // Output: This dog barks.`}
              language="java"
            />
          </div>

          {/* Multilevel Inheritance */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Multilevel Inheritance</h3>
            <CodeBlock
              code={`class Vehicle {
    public void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    public void drive() {
        System.out.println("Car driving");
    }
}

class ElectricCar extends Car {
    public void charge() {
        System.out.println("Charging battery");
    }
}

// Usage
ElectricCar tesla = new ElectricCar();
tesla.start();  // Vehicle starting
tesla.drive();  // Car driving
tesla.charge(); // Charging battery`}
              language="java"
            />
          </div>
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Object creation
Dog dog = new Dog();
dog.name = "Buddy";

// Method calls
dog.eat();  // Buddy is eating
dog.bark(); // Buddy is barking`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run demonstrates how inherited methods and fields are used in the child class.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use inheritance to reuse common functionality across multiple classes.</li>
            <li>Avoid deep inheritance hierarchies for better maintainability.</li>
            <li>Favor composition over inheritance when relationships are not strictly hierarchical.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use the <code>super</code> keyword to access parent class methods or constructors.</li>
            <li>Override only those methods that need different behavior in the child class.</li>
            <li>Implement abstract classes for common functionality and contracts.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Overusing inheritance, leading to tightly coupled code.</li>
            <li>Neglecting to call <code>super()</code> in the child class constructor.</li>
            <li>Breaking encapsulation by directly accessing parent class fields.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use inheritance only when there is a clear IS-A relationship.</li>
            <li>Follow the Liskov Substitution Principle (LSP).</li>
            <li>Document the inheritance hierarchy for clarity and maintainability.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Inheritance;