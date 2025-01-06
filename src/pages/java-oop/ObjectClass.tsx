import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ObjectClass: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Object Class in Java
              </h1>
              <p className="text-gray-300">
                The Object class is the root class of all Java classes. Every class in Java implicitly extends the Object class, inheriting its methods and behaviors.
              </p>
            </div>

            {/* Key Methods Section */}
            <MethodCard
              title="Key Methods of Object Class"
              description="Commonly used methods from the Object class"
            >
              <CodeBlock
                code={`class Example {
    private String name;
    private int id;
    
    public Example(String name, int id) {
        this.name = name;
        this.id = id;
    }
    
    // Overriding toString()
    @Override
    public String toString() {
        return "Example{name='" + name + "', id=" + id + "}";
    }
    
    // Overriding equals()
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Example example = (Example) obj;
        return id == example.id && name.equals(example.name);
    }
    
    // Overriding hashCode()
    @Override
    public int hashCode() {
        return Objects.hash(name, id);
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Method Descriptions Section */}
            <MethodCard
              title="Method Descriptions"
              description="Detailed explanation of Object class methods"
            >
              <CodeBlock
                code={`// 1. toString(): Returns a string representation of the object
Example ex = new Example("Test", 1);
System.out.println(ex.toString());  // Output: Example{name='Test', id=1}

// 2. equals(Object obj): Compares this object to the specified object
Example ex1 = new Example("Test", 1);
Example ex2 = new Example("Test", 1);
System.out.println(ex1.equals(ex2));  // Output: true

// 3. hashCode(): Returns a hash code value for the object
int hash = ex1.hashCode();
System.out.println(hash);  // Output: Hash code value

// 4. clone(): Creates and returns a copy of this object
// Note: Must implement Cloneable interface and override clone() method

// 5. getClass(): Returns the runtime class of this object
Class<?> clazz = ex1.getClass();
System.out.println(clazz.getName());  // Output: Example

// 6. finalize(): Called by the garbage collector on an object when garbage collection determines that there are no more references to the object
// Note: Deprecated in Java 9 and later`}
                language="java"
              />
            </MethodCard>

            {/* Dry Run Example */}
            <MethodCard
              title="Dry Run: Object Class Methods"
              description="Step by step execution of Object class methods"
            >
              <CodeBlock
                code={`// Step 1: Create an object
Example ex = new Example("Test", 1);

// Step 2: Call toString()
String str = ex.toString();
// Output: Example{name='Test', id=1}

// Step 3: Call equals()
Example ex2 = new Example("Test", 1);
boolean isEqual = ex.equals(ex2);
// Output: true

// Step 4: Call hashCode()
int hash = ex.hashCode();
// Output: Hash code value

// Step 5: Call getClass()
Class<?> clazz = ex.getClass();
// Output: Example

// Step 6: finalize() is called by GC (not manually invoked)`}
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
                  <span>Root of class hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Common methods for all objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Override for custom behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>hashCode and equals contract</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deprecated finalize()</span>
                </li>
              </ul>
            </div>

            {/* Method Concepts */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
                Method Concepts
              </h2>
              <ul className="space-y-3 text-purple-700 dark:text-purple-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>toString() for debugging</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>equals() for logical equality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>hashCode() for hash-based collections</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>clone() for object copying</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>getClass() for runtime type</span>
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
                  <span>Not overriding equals()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking equals/hashCode contract</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor toString() implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect clone() usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Misusing finalize()</span>
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
                  <span>Always override toString()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement equals() properly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Override hashCode() with equals()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Objects.hash() helper</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider implementing Cloneable</span>
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
                  <span>Use IDE generation tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider record classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Objects utility class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement deep cloning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use @Override annotation</span>
                </li>
              </ul>
            </div>

            {/* Key Methods Section */}
            <div className="bg-purple-900/20 border border-purple-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-200">
                Key Object Methods
              </h2>
              <ul className="space-y-3 text-purple-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>equals()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>hashCode()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>toString()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>clone()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>getClass()</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectClass; 