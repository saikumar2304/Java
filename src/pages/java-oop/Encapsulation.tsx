import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Encapsulation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Encapsulation in Java
              </h1>
              <p className="text-gray-300">
                Encapsulation is the bundling of data and the methods that operate on that data within a single unit or object, hiding internal details and providing an interface to interact with the object.
              </p>
            </div>

            {/* Data Hiding Section */}
            <MethodCard
              title="Data Hiding"
              description="Using private access modifiers to hide data"
            >
              <CodeBlock
                code={`class Account {
    // Private variables
    private String accountNumber;
    private double balance;
    
    // Constructor
    public Account(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    // Public getter for accountNumber
    public String getAccountNumber() {
        return accountNumber;
    }
    
    // Public getter and setter for balance
    public double getBalance() {
        return balance;
    }
    
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        }
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Access Modifiers Section */}
            <MethodCard
              title="Access Modifiers"
              description="Controlling access to class members"
            >
              <CodeBlock
                code={`class Employee {
    // Private variable
    private String name;
    
    // Default (package-private) variable
    int age;
    
    // Protected variable
    protected String department;
    
    // Public variable
    public double salary;
    
    // Constructor
    public Employee(String name, int age, String department, double salary) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
    }
    
    // Public method
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Department: " + department);
        System.out.println("Salary: " + salary);
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Getter and Setter Methods Section */}
            <MethodCard
              title="Getter and Setter Methods"
              description="Using methods to access and modify private data"
            >
              <CodeBlock
                code={`class Product {
    // Private variables
    private String name;
    private double price;
    
    // Constructor
    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
    
    // Getter for name
    public String getName() {
        return name;
    }
    
    // Setter for name
    public void setName(String name) {
        this.name = name;
    }
    
    // Getter for price
    public double getPrice() {
        return price;
    }
    
    // Setter for price
    public void setPrice(double price) {
        if (price > 0) {
            this.price = price;
        }
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Dry Run Example */}
            <MethodCard
              title="Dry Run: Encapsulation Example"
              description="Step by step execution of encapsulation"
            >
              <CodeBlock
                code={`// Step 1: Create an object
Product product = new Product("Laptop", 1500.0);

// Step 2: Access data using getters
System.out.println(product.getName());  // Laptop
System.out.println(product.getPrice()); // 1500.0

// Step 3: Modify data using setters
product.setPrice(1600.0);
System.out.println(product.getPrice()); // 1600.0

// Step 4: Attempt to set invalid data
product.setPrice(-500.0);  // No change
System.out.println(product.getPrice()); // 1600.0`}
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
                  <span>Public instance variables</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing validation in setters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Returning mutable objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking encapsulation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inconsistent access levels</span>
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
                  <span>Use private fields</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Validate in setters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Return copies of objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use immutable objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Follow naming conventions</span>
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
                  <span>Use builder pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider record classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement defensive copying</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use package-private access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider factory methods</span>
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
                  <span>Data hiding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access modifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Getters and setters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Package access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Information hiding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encapsulation; 