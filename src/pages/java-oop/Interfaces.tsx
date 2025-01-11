import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Interfaces: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Interfaces in Java
        </h1>
        <p className="text-lg text-gray-400">
          Interfaces in Java are blueprints for classes that define a contract. They specify what a class must do, but not how. Interfaces promote abstraction and allow multiple inheritance, enhancing flexibility in design.
        </p>
      </header>

      <main className="space-y-12">
        {/* What are Interfaces Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What are Interfaces?</h2>
          <p className="text-gray-300 mb-4">
            An interface in Java is a collection of abstract methods. It defines the "what" and leaves the "how" to be implemented by the classes. Interfaces support multiple inheritance and are key to designing loosely coupled systems.
          </p>
          <CodeBlock
            code={`// Defining an interface
interface Vehicle {
    void start();
    void stop();
}

// Implementing the interface
class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car is starting...");
    }

    @Override
    public void stop() {
        System.out.println("Car is stopping...");
    }
}

// Usage
Vehicle myCar = new Car();
myCar.start(); // Output: Car is starting...
myCar.stop();  // Output: Car is stopping...`}
            language="java"
          />
        </section>

        {/* Why Use Interfaces Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Why Use Interfaces?</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Promotes abstraction by defining behavior without implementation.</li>
            <li>Supports multiple inheritance for greater design flexibility.</li>
            <li>Facilitates loose coupling between components.</li>
            <li>Allows defining common behavior for unrelated classes.</li>
          </ul>
        </section>

        {/* Example: Multiple Interfaces */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Example: Multiple Interfaces</h2>
          <CodeBlock
            code={`interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }

    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
}

// Usage
Duck duck = new Duck();
duck.fly();   // Output: Duck is flying
duck.swim();  // Output: Duck is swimming`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`Vehicle myCar = new Car();
myCar.start();  // Output: Car is starting...
myCar.stop();   // Output: Car is stopping...

Duck myDuck = new Duck();
myDuck.fly();   // Output: Duck is flying
myDuck.swim();  // Output: Duck is swimming`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run demonstrates how interfaces allow objects to share common behaviors while being implemented in different ways.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use interfaces for defining shared behavior across unrelated classes.</li>
            <li>Keep interface definitions simple and focused on a single responsibility.</li>
            <li>Combine interfaces with abstract classes when necessary.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Leverage default and static methods in interfaces (Java 8+).</li>
            <li>Use functional interfaces with lambda expressions for cleaner code.</li>
            <li>Implement the marker interface pattern for lightweight annotations.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Defining too many methods in a single interface, violating the Interface Segregation Principle (ISP).</li>
            <li>Not overriding all abstract methods in the implementing class.</li>
            <li>Using interfaces unnecessarily when inheritance or encapsulation suffices.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Keep interfaces focused and concise to ensure clarity and maintainability.</li>
            <li>Document interface methods to provide clear usage instructions.</li>
            <li>Use descriptive names for interfaces to indicate their purpose.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Interfaces;