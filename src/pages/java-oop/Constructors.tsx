import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Constructors: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Constructors in Java
        </h1>
        <p className="text-lg text-gray-400">
          Constructors are special methods used to initialize objects. They are called automatically when an object is created and ensure proper initialization of class fields.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">What Are Constructors?</h2>
          <p className="text-gray-300">
            A constructor is a special method that has the same name as the class and no return type. It initializes an object when it is created.
          </p>
          <CodeBlock
            code={`class Car {
    private String brand;
    private int year;

    // Constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
}`}
            language="java"
          />
        </section>

        {/* Types of Constructors Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Types of Constructors</h2>
          <p className="text-gray-300">
            Constructors can be categorized into the following types:
          </p>
          <CodeBlock
            code={`// Default Constructor
class Car {
    private String brand;

    // Default constructor
    public Car() {
        this.brand = "Unknown";
    }
}

// Parameterized Constructor
class Car {
    private String brand;

    // Parameterized constructor
    public Car(String brand) {
        this.brand = brand;
    }
}

// Copy Constructor
class Car {
    private String brand;

    // Copy constructor
    public Car(Car other) {
        this.brand = other.brand;
    }
}`}
            language="java"
          />
        </section>

        {/* Constructor Chaining Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Constructor Chaining</h2>
          <p className="text-gray-300">
            Constructor chaining allows one constructor to call another within the same class or in a parent class using <code>this()</code> or <code>super()</code>.
          </p>
          <CodeBlock
            code={`class Car {
    private String brand;

    // Default constructor
    public Car() {
        this("Unknown");  // Calls the parameterized constructor
    }

    // Parameterized constructor
    public Car(String brand) {
        this.brand = brand;
    }
}`}
            language="java"
          />
        </section>

        {/* Memory Allocation During Construction */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Memory Allocation During Construction</h2>
          <p className="text-gray-300">
            Memory is allocated in the heap during object creation, and the constructor initializes instance variables.
          </p>
          <CodeBlock
            code={`Car car1 = new Car("Toyota");
// Memory allocated in heap
// Constructor initializes instance variables`}
            language="java"
          />
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Step 1: Object creation
Car car1 = new Car("Toyota");

// Step 2: Constructor call
// - Memory allocated in heap
// - Constructor initializes fields

// Step 3: Accessing fields
System.out.println(car1.getBrand());
// Output: Toyota`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            This dry run explains how constructors are executed step by step during object creation.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use parameterized constructors to initialize objects with specific values.</li>
            <li>Keep constructors simple and avoid complex logic.</li>
            <li>Always call the parent class constructor explicitly if needed.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use constructor chaining to simplify code and reduce duplication.</li>
            <li>Consider using immutable objects for better safety when initializing fields.</li>
            <li>Implement copy constructors for custom object duplication logic.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Forgetting to initialize fields in constructors.</li>
            <li>Overloading constructors without clear purpose.</li>
            <li>Calling <code>this()</code> and <code>super()</code> incorrectly, leading to runtime errors.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always initialize all fields to avoid inconsistent object states.</li>
            <li>Use default constructors for generic initialization.</li>
            <li>Document your constructors to explain their purpose and behavior.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Constructors;