import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Abstraction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Abstraction in Java
              </h1>
              <p className="text-gray-300">
                Abstraction is a fundamental OOP concept that hides complex implementation details and shows only the necessary features of an object. Java supports abstraction through abstract classes and interfaces.
              </p>
            </div>

            {/* Abstract Class Section */}
            <MethodCard
              title="Abstract Classes"
              description="Creating and using abstract classes"
            >
              <CodeBlock
                code={`// Abstract class example
abstract class Shape {
    protected String color;
    
    // Constructor
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract method (no implementation)
    abstract double calculateArea();
    
    // Concrete method
    public void displayColor() {
        System.out.println("Color is: " + color);
    }
}

// Concrete class implementing abstract class
class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Interface Section */}
            <MethodCard
              title="Interfaces"
              description="Creating and implementing interfaces"
            >
              <CodeBlock
                code={`// Interface definition
interface Drawable {
    void draw();  // Abstract method
    
    // Default method (Java 8+)
    default void display() {
        System.out.println("Displaying shape");
    }
    
    // Static method (Java 8+)
    static void info() {
        System.out.println("Drawable interface");
    }
}

// Class implementing interface
class Rectangle extends Shape implements Drawable {
    private double width;
    private double height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    double calculateArea() {
        return width * height;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing rectangle");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Multiple Inheritance Section */}
            <MethodCard
              title="Multiple Inheritance with Interfaces"
              description="Implementing multiple interfaces"
            >
              <CodeBlock
                code={`interface Printable {
    void print();
}

interface Scalable {
    void resize(double factor);
}

// Class implementing multiple interfaces
class Square extends Shape implements Drawable, Printable, Scalable {
    private double side;
    
    @Override
    double calculateArea() {
        return side * side;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing square");
    }
    
    @Override
    public void print() {
        System.out.println("Printing square");
    }
    
    @Override
    public void resize(double factor) {
        this.side *= factor;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Dry Run Example */}
            <MethodCard
              title="Dry Run: Abstraction Example"
              description="Step by step execution of abstract classes and interfaces"
            >
              <CodeBlock
                code={`// Step 1: Create objects
Circle circle = new Circle("Red", 5.0);
Rectangle rect = new Rectangle("Blue", 4.0, 6.0);

// Step 2: Call abstract method
System.out.println(circle.calculateArea());  // 78.54
System.out.println(rect.calculateArea());    // 24.0

// Step 3: Call concrete method
circle.displayColor();  // Color is: Red
rect.displayColor();    // Color is: Blue

// Step 4: Call interface methods
rect.draw();           // Drawing rectangle
rect.display();        // Displaying shape
Drawable.info();       // Drawable interface

// Step 5: Cannot instantiate abstract class
// Shape shape = new Shape("Green");  // Compilation error`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-8">
            {/* Key Points */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
                Key Points
              </h2>
              <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hide implementation details</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Abstract classes vs Interfaces</span>
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
                  <span>Method overriding</span>
                </li>
              </ul>
            </div>

            {/* Differences Section */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">
                Abstract Class vs Interface
              </h2>
              <ul className="space-y-3 text-green-700 dark:text-green-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Can have constructors vs Cannot</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Single vs Multiple inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Can have state vs Cannot</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Partial vs Complete abstraction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>IS-A vs CAN-DO relationship</span>
                </li>
              </ul>
            </div>

            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overuse of abstraction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect abstract method usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing method implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor interface segregation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Redundant abstract classes</span>
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
                  <span>Keep interfaces focused</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use abstract classes wisely</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow ISP principle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document abstract methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide default implementations</span>
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
                  <span>Consider sealed classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage default methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Design for extension</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use marker interfaces</span>
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
                  <span>Abstract classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementation hiding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Contract definition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Polymorphic behavior</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abstraction; 