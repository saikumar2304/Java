import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Inheritance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Inheritance in Java
              </h1>
              <p className="text-gray-300">
                Inheritance is a mechanism that allows a class to inherit properties and methods from another class. It promotes code reuse and establishes a relationship between parent and child classes.
              </p>
            </div>

            {/* Single Inheritance Section */}
            <MethodCard
              title="Single Inheritance"
              description="Basic inheritance between two classes"
            >
              <CodeBlock
                code={`// Parent class (Superclass)
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void makeSound() {
        System.out.println("Some sound");
    }
}

// Child class (Subclass)
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
    
    public void fetch() {
        System.out.println(name + " is fetching");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Multilevel Inheritance Section */}
            <MethodCard
              title="Multilevel Inheritance"
              description="Chain of inheritance with multiple levels"
            >
              <CodeBlock
                code={`class Vehicle {
    protected String brand;
    
    public void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    private int doors;
    
    @Override
    public void start() {
        System.out.println("Car starting");
    }
    
    public void drive() {
        System.out.println("Car driving");
    }
}

class ElectricCar extends Car {
    private int batteryCapacity;
    
    @Override
    public void start() {
        System.out.println("Electric car starting silently");
    }
    
    public void charge() {
        System.out.println("Charging battery");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Super Keyword Section */}
            <MethodCard
              title="Using super Keyword"
              description="Accessing parent class members"
            >
              <CodeBlock
                code={`class Parent {
    protected String name = "Parent";
    
    public void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    private String name = "Child";
    
    public void showNames() {
        System.out.println(name);         // Child's name
        System.out.println(super.name);   // Parent's name
    }
    
    @Override
    public void display() {
        super.display();  // Call parent's display
        System.out.println("Child display");
    }
    
    public void test() {
        super.display();     // Call parent's method
        this.display();      // Call current class method
        display();           // Same as this.display()
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Dry Run Example */}
            <MethodCard
              title="Dry Run: Inheritance Example"
              description="Step by step execution of inheritance"
            >
              <CodeBlock
                code={`// Step 1: Create objects
Dog dog = new Dog("Buddy", 3, "Labrador");

// Step 2: Call inherited method
dog.makeSound();  // Output: Woof! (Overridden method)

// Step 3: Access inherited fields
System.out.println(dog.name);  // Output: Buddy

// Step 4: Call child-specific method
dog.fetch();  // Output: Buddy is fetching

// Step 5: Polymorphic reference
Animal animal = new Dog("Max", 2, "Poodle");
animal.makeSound();  // Output: Woof! (Runtime polymorphism)`}
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
                  <span>Deep inheritance hierarchies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking LSP principle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Forgetting super() calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overuse of inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tight coupling</span>
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
                  <span>Favor composition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use interfaces wisely</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow LSP</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Design for inheritance</span>
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
                  <span>Use sealed classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider abstract classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement marker interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use @Override annotation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan class hierarchies</span>
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
                  <span>Single inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method overriding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>super keyword</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>IS-A relationship</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type inheritance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inheritance; 