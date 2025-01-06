import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Constructors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Constructors in Java
              </h1>
              <p className="text-gray-300">
                Constructors are special methods used to initialize objects. They are called automatically when an object is created and ensure proper initialization of class fields.
              </p>
            </div>

            {/* Types of Constructors Section */}
            <MethodCard
              title="Types of Constructors"
              description="Different types of constructors in Java"
            >
              <CodeBlock
                code={`// 1. Default Constructor
class Car {
    private String brand;
    private int year;
    
    // Default constructor
    public Car() {
        this.brand = "Unknown";
        this.year = 0;
    }
}

// 2. Parameterized Constructor
class Car {
    private String brand;
    private int year;
    
    // Parameterized constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
}

// 3. Copy Constructor
class Car {
    private String brand;
    private int year;
    
    // Copy constructor
    public Car(Car other) {
        this.brand = other.brand;
        this.year = other.year;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Constructor Chaining Section */}
            <MethodCard
              title="Constructor Chaining"
              description="Calling one constructor from another"
            >
              <CodeBlock
                code={`class Car {
    private String brand;
    private int year;
    
    // Default constructor
    public Car() {
        this("Unknown", 0);  // Calls parameterized constructor
    }
    
    // Parameterized constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    // Copy constructor
    public Car(Car other) {
        this(other.brand, other.year);  // Calls parameterized constructor
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Memory Allocation During Construction */}
            <MethodCard
              title="Memory Allocation During Construction"
              description="How memory is allocated during object construction"
            >
              <CodeBlock
                code={`// Object creation and constructor call
Car car1 = new Car("Toyota", 2020);
// - Memory allocated in heap
// - Constructor initializes instance variables

Car car2 = new Car(car1);
// - New memory allocated in heap
// - Copy constructor copies values from car1

// Constructor chaining
Car car3 = new Car();
// - Default constructor calls parameterized constructor
// - Memory allocated and initialized in heap`}
                language="java"
              />
              <div className="mt-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold mb-4 text-gray-100">Memory Layout:</h3>
                <div className="font-mono text-sm">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Stack Section */}
                    <div>
                      <div className="text-blue-300 mb-2">Stack:</div>
                      <div className="bg-gray-900 p-4 rounded border border-gray-700">
                        <div className="flex items-center mb-2">
                          <div className="text-purple-300 mr-2">car1</div>
                          <div className="text-gray-400">──▶</div>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="text-purple-300 mr-2">car2</div>
                          <div className="text-gray-400">──▶</div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-purple-300 mr-2">car3</div>
                          <div className="text-gray-400">──▶</div>
                        </div>
                      </div>
                    </div>

                    {/* Heap Section */}
                    <div>
                      <div className="text-green-300 mb-2">Heap:</div>
                      <div className="space-y-4">
                        <div className="bg-gray-900 p-4 rounded border border-gray-700">
                          <div className="text-yellow-300 mb-2">Car Object 1</div>
                          <div className="text-gray-300">brand: "Toyota"</div>
                          <div className="text-gray-300">year: 2020</div>
                        </div>
                        
                        <div className="bg-gray-900 p-4 rounded border border-gray-700">
                          <div className="text-yellow-300 mb-2">Car Object 2</div>
                          <div className="text-gray-300">brand: "Toyota"</div>
                          <div className="text-gray-300">year: 2020</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MethodCard>

            {/* Dry Run Example */}
            <MethodCard
              title="Dry Run: Constructor Execution"
              description="Step by step execution of constructors"
            >
              <CodeBlock
                code={`// Step 1: Class loading
// Car class is loaded into memory

// Step 2: Object creation
Car car1 = new Car("Toyota", 2020);
// - Memory allocated in heap
// - Parameterized constructor called
// - Instance variables initialized

// Step 3: Copy constructor
Car car2 = new Car(car1);
// - New memory allocated in heap
// - Copy constructor copies values

// Step 4: Constructor chaining
Car car3 = new Car();
// - Default constructor calls parameterized constructor
// - Memory allocated and initialized in heap`}
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
                  <span>Constructors initialize objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>No return type</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Constructor chaining</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory allocation in heap</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Copy constructors</span>
                </li>
              </ul>
            </div>

            {/* Constructor Concepts */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
                Constructor Concepts
              </h2>
              <ul className="space-y-3 text-purple-700 dark:text-purple-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Default vs Parameterized</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Copy constructors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Chaining with this()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overloading constructors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initialization order</span>
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
                  <span>Forgetting super() call</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Recursive constructor calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not handling null parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Complex logic in constructors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing validation checks</span>
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
                  <span>Keep constructors simple</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Validate input parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use constructor chaining</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initialize all fields</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document constructors well</span>
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
                  <span>Consider builder pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use static factory methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement copy constructors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider immutability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use dependency injection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Constructors; 