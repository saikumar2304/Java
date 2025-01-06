import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const OOPIntroduction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Object-Oriented Programming in Java
              </h1>
              <p className="text-gray-300">
                Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. Java is a pure object-oriented programming language that implements all the fundamental concepts of OOP.
              </p>
            </div>

            {/* Basic Concepts Section */}
            <MethodCard
              title="Basic OOP Concepts"
              description="Core principles of Object-Oriented Programming"
            >
              <CodeBlock
                code={`// Class definition
public class Car {
    // Attributes (instance variables)
    private String brand;
    private String model;
    private int year;

    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Methods
    public void startEngine() {
        System.out.println("Engine started!");
    }

    public void drive() {
        System.out.println(brand + " " + model + " is driving.");
    }
}

// Creating and using objects
Car myCar = new Car("Toyota", "Camry", 2022);
myCar.startEngine();
myCar.drive();`}
                language="java"
              />
            </MethodCard>

            {/* Four Pillars Section */}
            <MethodCard
              title="Four Pillars of OOP"
              description="Main principles of Object-Oriented Programming"
            >
              <CodeBlock
                code={`// 1. Encapsulation
public class BankAccount {
    private double balance;  // Private data
    
    public void deposit(double amount) {  // Public interface
        if (amount > 0) {
            balance += amount;
        }
    }
}

// 2. Inheritance
public class ElectricCar extends Car {
    private int batteryLevel;
    
    @Override
    public void startEngine() {
        System.out.println("Starting electric motor!");
    }
}

// 3. Polymorphism
Car car1 = new Car("Toyota", "Camry", 2022);
Car car2 = new ElectricCar("Tesla", "Model 3", 2023);
car1.startEngine();  // "Engine started!"
car2.startEngine();  // "Starting electric motor!"

// 4. Abstraction
public abstract class Vehicle {
    public abstract void move();
    
    public void showInfo() {
        System.out.println("This is a vehicle.");
    }
}`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar (3 columns) */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor encapsulation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deep inheritance hierarchies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overuse of inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking encapsulation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring SOLID principles</span>
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
                  <span>Follow SOLID principles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Favor composition over inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep classes focused and small</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use interfaces appropriately</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement proper encapsulation</span>
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
                  <span>Design before coding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use design patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Write clean, readable code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document your classes well</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider future maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OOPIntroduction; 