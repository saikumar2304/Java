import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Abstraction: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Abstraction in OOP
        </h1>
        <p className="text-lg text-gray-400">
          Abstraction is the process of hiding implementation details and exposing only the essential features of an object. It simplifies complex systems by focusing on high-level functionality.
        </p>
      </header>

      <main className="space-y-12">
        {/* What is Abstraction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is Abstraction?</h2>
          <p className="text-gray-300">
            Abstraction is one of the key principles of Object-Oriented Programming (OOP). It allows you to define the blueprint of an object without including implementation details. This is typically achieved through abstract classes or interfaces in Java.
          </p>
          <CodeBlock
            code={`// Abstract class demonstrating abstraction
abstract class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    // Abstract method (must be implemented by subclasses)
    public abstract void makeSound();

    // Concrete method
    public void eat() {
        System.out.println(name + " is eating.");
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(name + " says Woof!");
    }
}`}
            language="java"
          />
        </section>

        {/* Why Use Abstraction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Why Use Abstraction?</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>To hide unnecessary implementation details from the user.</li>
            <li>To enhance code readability and reduce complexity.</li>
            <li>To promote reusability and maintainability.</li>
            <li>To focus on the "what" rather than the "how."</li>
          </ul>
        </section>

        {/* Example: Abstracting a Vehicle Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Example: Abstracting a Vehicle</h2>
          <p className="text-gray-300 mb-4">
            Here's an example of abstraction using a base class for vehicles and derived classes for specific vehicle types.
          </p>
          <CodeBlock
            code={`abstract class Vehicle {
    protected String brand;

    public Vehicle(String brand) {
        this.brand = brand;
    }

    // Abstract method
    public abstract void drive();

    // Concrete method
    public void stop() {
        System.out.println(brand + " has stopped.");
    }
}

class Car extends Vehicle {
    public Car(String brand) {
        super(brand);
    }

    @Override
    public void drive() {
        System.out.println(brand + " is driving on the road.");
    }
}

class Boat extends Vehicle {
    public Boat(String brand) {
        super(brand);
    }

    @Override
    public void drive() {
        System.out.println(brand + " is sailing on the water.");
    }
}`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`Vehicle myCar = new Car("Toyota");
myCar.drive();  // Output: Toyota is driving on the road.
myCar.stop();   // Output: Toyota has stopped.

Vehicle myBoat = new Boat("Yamaha");
myBoat.drive(); // Output: Yamaha is sailing on the water.
myBoat.stop();  // Output: Yamaha has stopped.`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run demonstrates how abstraction enables focusing on the behavior (drive and stop) without worrying about implementation details.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use abstract classes for shared functionality and behavior.</li>
            <li>Focus on the essential details relevant to the use case.</li>
            <li>Leverage abstraction to simplify complex systems.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Combine abstraction with encapsulation for better modularity.</li>
            <li>Design abstract classes with a clear purpose to avoid unnecessary complexity.</li>
            <li>Use abstraction to create flexible and scalable architectures.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Defining too many abstract methods, leading to over-complication.</li>
            <li>Not providing concrete implementations for shared behavior in abstract classes.</li>
            <li>Confusing abstraction with encapsulation.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use abstract classes for common functionality and behavior.</li>
            <li>Focus on essential details to create meaningful abstraction.</li>
            <li>Document abstract methods and classes for clarity.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Abstraction;