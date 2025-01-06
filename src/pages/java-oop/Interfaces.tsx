import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Interfaces: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Interfaces in Java
              </h1>
              <p className="text-gray-300">
                An interface is a contract that specifies what a class must do without saying how it will do it. Interfaces are fundamental to Java's support for abstraction and polymorphism.
              </p>
            </div>

            {/* Basic Interface Section */}
            <MethodCard
              title="Basic Interface"
              description="Creating and implementing interfaces"
            >
              <CodeBlock
                code={`// Interface definition
interface Vehicle {
    void start();
    void stop();
    
    // Default method (Java 8+)
    default void horn() {
        System.out.println("Beep!");
    }
    
    // Static method (Java 8+)
    static int getWheelCount() {
        return 4;
    }
}

// Class implementing interface
class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car starting...");
    }
    
    @Override
    public void stop() {
        System.out.println("Car stopping...");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Multiple Interfaces Section */}
            <MethodCard
              title="Multiple Interfaces"
              description="Implementing multiple interfaces"
            >
              <CodeBlock
                code={`interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

// Class implementing multiple interfaces
class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Functional Interfaces Section */}
            <MethodCard
              title="Functional Interfaces"
              description="Single abstract method interfaces"
            >
              <CodeBlock
                code={`@FunctionalInterface
interface Calculable {
    int calculate(int a, int b);
}

class Calculator {
    public static void main(String[] args) {
        // Lambda expression
        Calculable add = (a, b) -> a + b;
        Calculable multiply = (a, b) -> a * b;
        
        System.out.println(add.calculate(5, 3));      // 8
        System.out.println(multiply.calculate(5, 3)); // 15
    }
}`}
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
                  <span>Too many methods in interface</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not using @Override</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking ISP principle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Redundant modifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor interface segregation</span>
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
                  <span>Keep interfaces small</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow ISP principle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use default methods wisely</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document interface methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Design for extension</span>
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
                  <span>Use functional interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage default methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider marker interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use static methods</span>
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
                  <span>Contract definition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Multiple inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Default methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Functional interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type abstraction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interfaces; 