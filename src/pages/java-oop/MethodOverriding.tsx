import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const MethodOverriding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Method Overriding in Java
              </h1>
              <p className="text-gray-300">
                Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its parent class. It's a fundamental aspect of runtime polymorphism.
              </p>
            </div>

            {/* Basic Overriding Section */}
            <MethodCard
              title="Basic Method Overriding"
              description="Simple example of method overriding"
            >
              <CodeBlock
                code={`class Animal {
    public void makeSound() {
        System.out.println("Some animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

// Usage
Animal dog = new Dog();
Animal cat = new Cat();
dog.makeSound();  // Output: Woof!
cat.makeSound();  // Output: Meow!`}
                language="java"
              />
            </MethodCard>

            {/* Super Keyword Section */}
            <MethodCard
              title="Using super Keyword"
              description="Accessing parent class methods"
            >
              <CodeBlock
                code={`class Vehicle {
    public void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    @Override
    public void start() {
        super.start();  // Call parent method
        System.out.println("Car starting");
    }
}

class ElectricCar extends Car {
    @Override
    public void start() {
        super.start();  // Call parent method
        System.out.println("Electric systems initialized");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Covariant Return Types */}
            <MethodCard
              title="Covariant Return Types"
              description="Overriding with different return types"
            >
              <CodeBlock
                code={`class Animal {
    protected String type = "Animal";
    
    public Animal getType() {
        return new Animal();
    }
}

class Dog extends Animal {
    @Override
    public Dog getType() {  // Covariant return type
        return new Dog();
    }
}

// Usage
Animal animal = new Animal();
Dog dog = new Dog();
Animal result1 = animal.getType();  // Returns Animal
Dog result2 = dog.getType();        // Returns Dog`}
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
                  <span>Missing @Override</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong method signature</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access modifier issues</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking LSP</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring super calls</span>
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
                  <span>Document overrides</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider final methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maintain behavior contract</span>
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
                  <span>Use covariant returns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider template pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage super calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan inheritance hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use composition when needed</span>
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
                  <span>Method signature</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Covariant returns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>super keyword</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dynamic dispatch</span>
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