import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ClassVsInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Class vs Interface in Java
              </h1>
              <p className="text-gray-300">
                Understanding the differences between classes and interfaces is crucial for designing better Java applications. While both are fundamental building blocks, they serve different purposes and have distinct characteristics.
              </p>
            </div>

            {/* Key Differences Section */}
            <MethodCard
              title="Key Differences"
              description="Main differences between classes and interfaces"
            >
              <CodeBlock
                code={`// Interface example
interface Vehicle {
    // Constants (implicitly public static final)
    int MAX_SPEED = 200;
    
    // Abstract methods (implicitly public abstract)
    void start();
    void stop();
    
    // Default method (Java 8+)
    default void horn() {
        System.out.println("Beep!");
    }
}

// Class example
abstract class AbstractVehicle {
    // Instance variables
    private String brand;
    protected int speed;
    
    // Constructor
    public AbstractVehicle(String brand) {
        this.brand = brand;
    }
    
    // Concrete method
    public void displayInfo() {
        System.out.println("Brand: " + brand);
    }
    
    // Abstract method
    abstract void accelerate();
}`}
                language="java"
              />
            </MethodCard>

            {/* Implementation Comparison */}
            <MethodCard
              title="Implementation Comparison"
              description="How classes and interfaces are implemented"
            >
              <CodeBlock
                code={`// Multiple interface implementation
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

// Class can implement multiple interfaces
class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck swimming");
    }
}

// Single class inheritance
class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

// Class can extend only one class
class Bird extends Animal {
    void fly() {
        System.out.println("Flying");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Usage Scenarios */}
            <MethodCard
              title="Usage Scenarios"
              description="When to use class vs interface"
            >
              <CodeBlock
                code={`// Interface for defining a contract
interface PaymentProcessor {
    void processPayment(double amount);
    boolean verifyPayment(String id);
}

// Multiple implementations
class CreditCardProcessor implements PaymentProcessor {
    @Override
    public void processPayment(double amount) {
        // Credit card specific implementation
    }
    
    @Override
    public boolean verifyPayment(String id) {
        // Credit card verification
        return true;
    }
}

// Abstract class for shared implementation
abstract class BasePaymentProcessor {
    protected String merchantId;
    
    public BasePaymentProcessor(String merchantId) {
        this.merchantId = merchantId;
    }
    
    protected void logTransaction(String details) {
        // Common logging logic
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
                  <span>Using class when interface fits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Interface constant abuse</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Too many default methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deep inheritance hierarchies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mixing concerns</span>
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
                  <span>Program to interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep interfaces small</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use abstract classes for code reuse</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow ISP principle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Choose based on relationship</span>
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
                  <span>Combine both when needed</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use adapter pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider sealed types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage default methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use factory patterns</span>
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
                  <span>Inheritance vs Implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>State vs Behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>IS-A vs CAN-DO</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Abstract vs Concrete</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Multiple vs Single inheritance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassVsInterface; 