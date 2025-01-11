import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const ClassesObjects: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Classes and Objects in Java
        </h1>
        <p className="text-lg text-gray-400">
          A class serves as a blueprint for creating objects, defining their properties and behaviors. Objects are instances of classes, holding actual data and performing actions via methods.
        </p>
      </header>

      <main className="space-y-12">
        {/* Class Definition Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Class Definition</h2>
          <p className="text-gray-300 mb-4">
            Classes define the structure and behavior of objects. They include fields (attributes), methods (behaviors), constructors, and sometimes static members.
          </p>
          <CodeBlock
            code={`public class Student {
    // Instance Variables (Properties)
    private String name;
    private int age;
    private double gpa;

    // Static Variable (Shared by all instances)
    private static int totalStudents = 0;

    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        totalStudents++;
    }

    // Instance Methods (Behaviors)
    public void study() {
        System.out.println(name + " is studying");
    }

    // Static Method
    public static int getTotalStudents() {
        return totalStudents;
    }
}`}
            language="java"
          />
        </section>

        {/* Memory Allocation Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Memory Allocation</h2>
          <p className="text-gray-300 mb-4">
            Understanding memory allocation for classes and objects helps in optimizing performance.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong>Stack Memory:</strong> Stores primitive data types and references to objects.
            </li>
            <li>
              <strong>Heap Memory:</strong> Stores objects and their instance variables.
            </li>
          </ul>
        </section>

        {/* Object Creation and Usage Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Object Creation and Usage</h2>
          <p className="text-gray-300 mb-4">
            Objects are created using constructors and are used to access class properties and methods.
          </p>
          <CodeBlock
            code={`// Creating objects
Student student1 = new Student("John", 20);
Student student2 = new Student("Alice", 21);

// Using objects
student1.study();  // Output: John is studying
student2.study();  // Output: Alice is studying

// Accessing static members
int total = Student.getTotalStudents();  // Returns total number of students`}
            language="java"
          />
        </section>

        {/* Dry Run Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Object lifecycle example
Student student1 = new Student("John", 20);
// Memory is allocated in the heap for 'student1'

// Accessing instance methods
student1.study();
// Output: John is studying

// Changing the state of the object
student1.setGpa(3.8);  // GPA updated for 'student1'

// Making the object eligible for garbage collection
student1 = null;
// Original 'student1' object is now eligible for GC`}
            language="java"
          />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use constructors to initialize objects with default or specified values.</li>
            <li>Differentiate between instance and static variables for better organization.</li>
            <li>Encapsulate fields and expose them via getter and setter methods.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use the <code>this</code> keyword to avoid variable shadowing.</li>
            <li>Leverage static members for data that is common to all objects of a class.</li>
            <li>Implement the <code>equals()</code> and <code>hashCode()</code> methods for better object comparison.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Failing to initialize variables in the constructor, leading to null or default values.</li>
            <li>Using static variables for instance-specific data.</li>
            <li>Overusing constructors instead of setters for optional properties.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Follow proper naming conventions for class names, methods, and variables.</li>
            <li>Make use of encapsulation to protect the internal state of objects.</li>
            <li>Use static methods for utility functions that do not depend on object state.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ClassesObjects;