import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const AbstractClasses: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Abstract Classes in Java
        </h1>
        <p className="text-lg text-gray-400">
          Abstract classes are templates for other classes and cannot be instantiated directly. They may include abstract methods (without implementation) and concrete methods (with implementation).
        </p>
      </header>

      <main className="space-y-12">
        {/* What are Abstract Classes Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What are Abstract Classes?</h2>
          <p className="text-gray-300">
            Abstract classes in Java are declared with the <code>abstract</code> keyword. They are used to provide a base class that can be extended by other classes. Abstract classes may have:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Abstract methods that must be implemented by subclasses.</li>
            <li>Concrete methods that provide default functionality.</li>
          </ul>
          <CodeBlock
            code={`abstract class Shape {
    protected String color;

    public Shape(String color) {
        this.color = color;
    }

    // Abstract method
    public abstract double calculateArea();

    // Concrete method
    public void displayColor() {
        System.out.println("Color: " + color);
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}`}
            language="java"
          />
        </section>

        {/* Why Use Abstract Classes Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Why Use Abstract Classes?</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>To define a common interface or base behavior for subclasses.</li>
            <li>To enforce implementation of specific methods in subclasses.</li>
            <li>To provide default behavior while allowing flexibility in subclasses.</li>
          </ul>
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`Shape myCircle = new Circle("Red", 5.0);

// Call concrete method
myCircle.displayColor();  // Output: Color: Red

// Call abstract method (implemented by Circle)
System.out.println(myCircle.calculateArea());  // Output: 78.54`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run demonstrates how abstract classes provide a base for subclasses while enabling dynamic behavior.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use abstract classes for shared functionality and abstract behavior.</li>
            <li>Ensure abstract methods are necessary and add value to subclasses.</li>
            <li>Leverage concrete methods to provide default implementations.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Combine abstract classes with interfaces for more flexible designs.</li>
            <li>Use abstract classes to define common states for related objects.</li>
            <li>Document abstract methods to clarify their purpose and expected behavior.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting to implement all abstract methods in subclasses.</li>
            <li>Attempting to instantiate an abstract class directly.</li>
            <li>Overloading abstract classes with unrelated functionality.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Keep abstract classes focused on a specific purpose.</li>
            <li>Use meaningful names for abstract classes and methods.</li>
            <li>Leverage access modifiers to control visibility of fields and methods.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AbstractClasses;