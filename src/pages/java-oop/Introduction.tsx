import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const OopIntroduction: React.FC = () => {
  const encapsulationExample = `
    public class BankAccount {
        private double balance;  // Private attribute
        
        public void deposit(double amount) {  // Public method
            if (amount > 0) {
                balance += amount;
            }
        }

        public double getBalance() {
            return balance;
        }
    }
  `;

  const inheritanceExample = `
    // Parent Class
    public class Vehicle {
        protected String brand = "Vehicle";

        public void start() {
            System.out.println(brand + " is starting.");
        }
    }

    // Child Class
    public class Car extends Vehicle {
        private String model;

        public Car(String model) {
            this.model = model;
            this.brand = "Car";
        }

        @Override
        public void start() {
            System.out.println(brand + " " + model + " is starting.");
        }
    }
  `;

  const polymorphismExample = `
    public class Animal {
        public void sound() {
            System.out.println("Animal makes a sound.");
        }
    }

    public class Dog extends Animal {
        @Override
        public void sound() {
            System.out.println("Dog barks.");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Animal myAnimal = new Animal();
            Animal myDog = new Dog();

            myAnimal.sound();  // Output: Animal makes a sound.
            myDog.sound();     // Output: Dog barks.
        }
    }
  `;

  const abstractionExample = `
    public abstract class Shape {
        public abstract double calculateArea();

        public void display() {
            System.out.println("This is a shape.");
        }
    }

    public class Circle extends Shape {
        private double radius;

        public Circle(double radius) {
            this.radius = radius;
        }

        @Override
        public double calculateArea() {
            return Math.PI * radius * radius;
        }
    }
  `;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Four Pillars of Object-Oriented Programming
        </h1>
        <p className="text-lg text-gray-400">
          The four fundamental principles of Object-Oriented Programming (OOP) are Encapsulation, Inheritance, Polymorphism, and Abstraction. These principles form the foundation of OOP and enable developers to create modular, reusable, and scalable code.
        </p>
      </header>

      <main className="space-y-12">
        {/* Encapsulation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Encapsulation</h2>
          <p className="text-gray-300">
            Encapsulation hides the internal state of an object and only exposes the necessary methods to interact with it. This ensures better control over the data and reduces the risk of unintended modifications.
          </p>
          <CodeBlock code={encapsulationExample} language="java" />
        </section>

        {/* Inheritance */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Inheritance</h2>
          <p className="text-gray-300">
            Inheritance allows a class (child class) to inherit fields and methods from another class (parent class). It promotes code reuse and establishes a parent-child relationship.
          </p>
          <CodeBlock code={inheritanceExample} language="java" />
        </section>

        {/* Polymorphism */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Polymorphism</h2>
          <p className="text-gray-300">
            Polymorphism allows a single interface or method to represent different behaviors. It enables method overriding and dynamic method dispatch.
          </p>
          <CodeBlock code={polymorphismExample} language="java" />
        </section>

        {/* Abstraction */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Abstraction</h2>
          <p className="text-gray-300">
            Abstraction hides the implementation details and only exposes the essential features of an object. It can be achieved through abstract classes or interfaces.
          </p>
          <CodeBlock code={abstractionExample} language="java" />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Encapsulation improves security by limiting direct access to sensitive data.</li>
            <li>Use inheritance to promote code reuse, but avoid deep inheritance hierarchies.</li>
            <li>Polymorphism allows flexible and dynamic behavior at runtime.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use composition over inheritance when possible for greater flexibility.</li>
            <li>Abstract classes are perfect for shared behavior, while interfaces are ideal for defining contracts.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Overusing inheritance can lead to tightly coupled code that's difficult to maintain.</li>
            <li>Not using encapsulation effectively, which can expose sensitive data.</li>
            <li>Misusing polymorphism, leading to unexpected behavior during runtime.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Leverage encapsulation to create robust and secure code.</li>
            <li>Keep inheritance hierarchies shallow to maintain flexibility.</li>
            <li>Ensure abstract classes and interfaces have a clear purpose and role in the design.</li>
          </ul>
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Creating and using objects
Car myCar = new Car("Tesla", "Model S");
myCar.start();  // Output: Car Tesla Model S is starting.`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run shows how encapsulation, inheritance, and polymorphism work together to create dynamic and reusable code.
          </p>
        </section>
      </main>
    </div>
  );
};

export default OopIntroduction;