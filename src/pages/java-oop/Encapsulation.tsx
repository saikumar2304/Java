import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Encapsulation: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Encapsulation in Java
        </h1>
        <p className="text-lg text-gray-400">
          Encapsulation is the bundling of data (fields) and methods that operate on that data into a single unit (class). It also involves restricting direct access to certain components of an object to maintain control over its state.
        </p>
      </header>

      <main className="space-y-12">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Introduction</h2>
          <p className="text-gray-300">
            Encapsulation is a key principle of object-oriented programming that ensures better modularity, security, and reusability. By hiding the internal state of an object and exposing a controlled interface, encapsulation protects the integrity of the object.
          </p>
          <CodeBlock
            code={`class Account {
    // Private fields (data hiding)
    private String accountNumber;
    private double balance;

    // Constructor
    public Account(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Public methods (interface to access private fields)
    public String getAccountNumber() {
        return accountNumber;
    }

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
        </section>

        {/* Benefits of Encapsulation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Benefits of Encapsulation</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Improves modularity and code organization.</li>
            <li>Restricts unauthorized access to data.</li>
            <li>Enables validation and integrity checks.</li>
            <li>Allows flexibility in code changes without affecting external systems.</li>
            <li>Promotes reusability by exposing clear interfaces.</li>
          </ul>
        </section>

        {/* Dry Run Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run Example</h2>
          <CodeBlock
            code={`// Create an account object
Account account = new Account("123456", 5000.0);

// Access balance using getter
System.out.println(account.getBalance()); // 5000.0

// Modify balance using setter
account.setBalance(6000.0);
System.out.println(account.getBalance()); // 6000.0

// Attempt invalid update
account.setBalance(-100.0);  // Balance remains unchanged
System.out.println(account.getBalance()); // 6000.0`}
            language="java"
          />
          <p className="text-gray-300 mt-4">
            The dry run shows how encapsulation ensures controlled access to data, allowing updates only when valid conditions are met.
          </p>
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use private access modifiers to hide fields from external classes.</li>
            <li>Provide public getter and setter methods to control data access.</li>
            <li>Always validate input in setter methods to ensure data integrity.</li>
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use immutable classes to enforce stronger encapsulation where data must not be modified after object creation.</li>
            <li>Consider defensive copying to avoid exposing internal objects.</li>
            <li>Combine encapsulation with proper design patterns, such as the Builder pattern, for more robust solutions.</li>
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Making fields public, which breaks encapsulation.</li>
            <li>Not validating inputs in setter methods, leading to inconsistent states.</li>
            <li>Allowing direct access to mutable objects, risking unintended modifications.</li>
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always declare class fields as private.</li>
            <li>Provide meaningful and secure getter and setter methods.</li>
            <li>Follow naming conventions for consistency and readability.</li>
            <li>Document the purpose of each field and its associated methods.</li>
          </ul>
        </section>

        {/* Key Concepts Section */}
        <section className="bg-purple-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Key Concepts</h2>
          <ul className="list-disc pl-6 space-y-3 text-purple-300">
            <li>Data Hiding: Using private fields to restrict direct access.</li>
            <li>Access Modifiers: Controlling visibility of fields and methods.</li>
            <li>Getters and Setters: Providing controlled access to private fields.</li>
            <li>Validation: Ensuring data integrity through input validation.</li>
            <li>Encapsulation with Immutability: Creating unmodifiable objects for stricter control.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Encapsulation;