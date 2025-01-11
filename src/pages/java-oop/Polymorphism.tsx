import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Polymorphism: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Polymorphism in Java
        </h1>
        <p className="text-lg text-gray-400">
          Polymorphism allows objects to take multiple forms, enabling flexibility and extensibility in code. It is achieved through method overriding (runtime polymorphism) and method overloading (compile-time polymorphism).
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What is Polymorphism?</h2>
          <p className="text-gray-300">
            Polymorphism enables one interface to be used for a general class of actions. The specific action is determined by the exact nature of the situation, enabling flexibility in code.
          </p>
          <CodeBlock
            code={`class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

Animal myDog = new Dog();
myDog.makeSound();  // Output: Dog barks`}
            language="java"
          />
        </section>

        {/* Compile-Time Polymorphism Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Compile-Time Polymorphism</h2>
          <p className="text-gray-300">
            Compile-time polymorphism is achieved through method overloading, where multiple methods with the same name exist but with different parameter lists.
          </p>
          <CodeBlock
            code={`class MathOperations {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }
}

MathOperations math = new MathOperations();
System.out.println(math.add(5, 10));  // Output: 15
System.out.println(math.add(5.5, 10.5));  // Output: 16.0`}
            language="java"
          />
        </section>

        {/* Runtime Polymorphism Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Runtime Polymorphism</h2>
          <p className="text-gray-300">
            Runtime polymorphism is achieved through method overriding. It allows a subclass to provide a specific implementation of a method defined in its parent class.
          </p>
          <CodeBlock
            code={`class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

Animal myCat = new Cat();
myCat.makeSound();  // Output: Cat meows`}
            language="java"
          />
        </section>

        {/* Polymorphism in Collections Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Polymorphism in Collections</h2>
          <p className="text-gray-300">
            Polymorphism is often used in collections to store and manipulate objects of different types that share a common parent class or interface.
          </p>
          <CodeBlock
            code={`import java.util.ArrayList;
import java.util.List;

abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Rectangle");
    }
}

List<Shape> shapes = new ArrayList<>();
shapes.add(new Circle());
shapes.add(new Rectangle());

for (Shape shape : shapes) {
    shape.draw();
}
// Output:
// Drawing Circle
// Drawing Rectangle`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`Animal animal = new Dog();
animal.makeSound();  // Output: Dog barks

animal = new Cat();
animal.makeSound();  // Output: Cat meows`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run demonstrates how runtime polymorphism dynamically binds the method to the object type.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use polymorphism to simplify code by treating different object types uniformly.</li>
            <li>Prefer method overriding for providing specific implementations.</li>
            <li>Use method overloading for compile-time flexibility.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Override only necessary methods in the subclass for better clarity.</li>
            <li>Use abstract classes or interfaces for defining contracts for polymorphism.</li>
            <li>Leverage generics in collections to make code type-safe.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Confusing method overloading with method overriding.</li>
            <li>Ignoring the <code>@Override</code> annotation in overridden methods.</li>
            <li>Using polymorphism incorrectly, leading to unexpected behavior.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Design clear hierarchies with appropriate method overriding.</li>
            <li>Document the purpose of overridden methods for clarity.</li>
            <li>Follow the Liskov Substitution Principle (LSP).</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Polymorphism;