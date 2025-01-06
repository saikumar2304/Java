import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Packages: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Packages in Java
              </h1>
              <p className="text-gray-300">
                Packages in Java are used to group related classes, interfaces, and sub-packages. They help in organizing code, avoiding naming conflicts, and controlling access to code elements.
              </p>
            </div>

            {/* Package Declaration Section */}
            <MethodCard
              title="Package Declaration"
              description="Creating and using packages"
            >
              <CodeBlock
                code={`// File: com/example/math/Calculator.java
package com.example.math;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int subtract(int a, int b) {
        return a - b;
    }
}

// File: com/example/app/Main.java
package com.example.app;

import com.example.math.Calculator;

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 3));      // 8
        System.out.println(calc.subtract(5, 3)); // 2
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Package Access Section */}
            <MethodCard
              title="Package Access Control"
              description="Access modifiers and package visibility"
            >
              <CodeBlock
                code={`// File: com/example/model/User.java
package com.example.model;

public class User {
    private String name;        // Class-only access
    protected int age;         // Package + subclass access
    String email;             // Package-private access
    public String username;   // Public access
    
    // Package-private constructor
    User() {
        // Default constructor
    }
    
    // Public constructor
    public User(String name) {
        this.name = name;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Package Organization */}
            <MethodCard
              title="Package Organization"
              description="Standard package structure"
            >
              <CodeBlock
                code={`project/
├── src/
│   ├── com/
│   │   └── example/
│   │       ├── model/
│   │       │   ├── User.java
│   │       │   └── Product.java
│   │       ├── service/
│   │       │   ├── UserService.java
│   │       │   └── ProductService.java
│   │       └── util/
│   │           └── Helper.java
│   └── Main.java
└── README.md`}
                language="plaintext"
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
                  <span>Missing package declaration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong directory structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Circular dependencies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect imports</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor package organization</span>
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
                  <span>Use reverse domain names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Group related classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Avoid default package</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use specific imports</span>
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
                  <span>Use static imports wisely</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Create package-info.java</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use modules (Java 9+)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider sealed packages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Manage dependencies well</span>
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
                  <span>Package declaration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Import statements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access control</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Package hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Namespace management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages; 