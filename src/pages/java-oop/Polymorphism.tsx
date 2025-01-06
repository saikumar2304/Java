import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Polymorphism: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Polymorphism in Java
              </h1>
              <p className="text-gray-300">
                Polymorphism allows objects to be treated as instances of their parent class while maintaining their own specific implementations. It enables flexible and extensible code through method overriding and overloading.
              </p>
            </div>

            {/* Compile-Time Polymorphism Section */}
            <MethodCard
              title="Compile-Time Polymorphism"
              description="Method overloading example"
            >
              <CodeBlock
                code={`class MathOperations {
    // Method overloading
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

// Usage
MathOperations math = new MathOperations();
System.out.println(math.add(5, 10));        // Output: 15
System.out.println(math.add(5.5, 10.5));    // Output: 16.0
System.out.println(math.add(1, 2, 3));      // Output: 6`}
                language="java"
              />
            </MethodCard>

            {/* Runtime Polymorphism Section */}
            <MethodCard
              title="Runtime Polymorphism"
              description="Method overriding example"
            >
              <CodeBlock
                code={`class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

// Usage
Animal myAnimal = new Dog();
myAnimal.makeSound();  // Output: Woof

myAnimal = new Cat();
myAnimal.makeSound();  // Output: Meow`}
                language="java"
              />
            </MethodCard>

            {/* Polymorphic Behavior Section */}
            <MethodCard
              title="Polymorphic Behavior"
              description="Using polymorphism in collections"
            >
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

// Usage
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
            </MethodCard>

            {/* Dry Run Example */}
            <MethodCard
              title="Dry Run: Polymorphism Example"
              description="Step by step execution of polymorphism"
            >
              <CodeBlock
                code={`// Step 1: Create objects
Animal animal = new Dog();
animal.makeSound();  // Output: Woof

// Step 2: Change reference
animal = new Cat();
animal.makeSound();  // Output: Meow

// Step 3: Use polymorphism in collections
List<Animal> animals = new ArrayList<>();
animals.add(new Dog());
animals.add(new Cat());

for (Animal a : animals) {
    a.makeSound();
}
// Output:
// Woof
// Meow`}
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
                  <span>Confusing overloading/overriding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing @Override annotation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type casting errors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking LSP</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring method signatures</span>
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
                  <span>Follow LSP principle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use interfaces wisely</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check types before casting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Design clear hierarchies</span>
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
                  <span>Use instanceof wisely</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider pattern matching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage generics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use method references</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement strategy pattern</span>
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
                  <span>Runtime polymorphism</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method overriding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method overloading</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dynamic dispatch</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type substitution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Polymorphism; 