import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ClassesObjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Classes and Objects in Java
              </h1>
              <p className="text-gray-300">
                Classes are blueprints for creating objects, defining their properties and behaviors. Objects are instances of classes that contain real data and can perform actions through methods.
              </p>
            </div>

            {/* Class Definition Section */}
            <MethodCard
              title="Class Definition"
              description="Basic structure of a Java class"
            >
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
            </MethodCard>

            {/* Memory Allocation Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">
                  Stack Memory
                </h2>
                <p className="text-gray-300">
                  Stores primitive variables and object references
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">
                  Heap Memory
                </h2>
                <p className="text-gray-300">
                  Stores actual objects and their instance variables
                </p>
              </div>
            </div>

            {/* Object Creation and Usage */}
            <MethodCard
              title="Object Creation and Usage"
              description="Different ways to create and use objects"
            >
              <CodeBlock
                code={`// Creating objects
Student student1 = new Student("John", 20);  // Using constructor
Student student2 = new Student("Alice", 21); // Another instance

// Using objects
student1.study();  // John is studying
student2.study();  // Alice is studying

// Static method call (through class)
int total = Student.getTotalStudents();  // Returns 2

// Object state
System.out.println(student1.getName());  // "John"
student1.setAge(21);  // Modifying object state

// Object comparison
Student student3 = student1;  // Reference copy
System.out.println(student1 == student3);      // true (same reference)
System.out.println(student1.equals(student2)); // false (different objects)`}
                language="java"
              />
            </MethodCard>

            {/* Dry Run Example */}
            <MethodCard
              title="Dry Run: Object Lifecycle"
              description="Step by step object creation and usage"
            >
              <CodeBlock
                code={`// Step 1: Class loading
// Student class is loaded into memory

// Step 2: Object creation
Student s1 = new Student("John", 20);
// - Memory allocated in heap
// - Constructor called
// - Instance variables initialized
// - totalStudents incremented to 1

// Step 3: Object usage
s1.study();
// Output: John is studying

// Step 4: State modification
s1.setGpa(3.5);
// Object state updated in heap

// Step 5: Object eligible for GC
s1 = null;
// Original object becomes eligible for garbage collection`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-8">
            {/* Key Points */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Key Points
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Objects are instances of classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Instance vs Static members</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Object lifecycle</span>
                </li>
              </ul>
            </div>

            {/* Object Concepts */}
            <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-200">
                Object Concepts
              </h2>
              <ul className="space-y-3 text-green-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>State and behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Object references</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Garbage collection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Object comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Object creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesObjects; 