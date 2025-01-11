import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const StaticVsInstance = () => {
  const staticExample = `
// Static method example
public class MathUtils {
    // Static method
    public static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        // Call static method without creating an object
        int sum = MathUtils.add(10, 20);
        System.out.println("Sum: " + sum); // Output: Sum: 30
    }
}`;

  const instanceExample = `
// Instance method example
public class Greeting {
    // Instance method
    public void sayHello(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        // Create an object to call an instance method
        Greeting greeting = new Greeting();
        greeting.sayHello("Alice"); // Output: Hello, Alice!
    }
}`;

  const combinedExample = `
// Static vs Instance example
public class Counter {
    // Static variable (shared across all instances)
    private static int globalCount = 0;

    // Instance variable (unique for each object)
    private int instanceCount = 0;

    // Static method
    public static int getGlobalCount() {
        return globalCount;
    }

    // Instance method
    public void increment() {
        globalCount++;
        instanceCount++;
    }

    // Getter for instance count
    public int getInstanceCount() {
        return instanceCount;
    }

    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();

        c1.increment();
        c1.increment();
        c2.increment();

        System.out.println("Global Count: " + Counter.getGlobalCount()); // Output: 3
        System.out.println("c1 Instance Count: " + c1.getInstanceCount()); // Output: 2
        System.out.println("c2 Instance Count: " + c2.getInstanceCount()); // Output: 1
    }
}`;

  const visualRepresentation = `
1. **Static Method**:
   - Belongs to the class.
   - Can be called without creating an object.
   - Example: \`ClassName.methodName();\`

2. **Instance Method**:
   - Belongs to an object.
   - Requires an object of the class to call.
   - Example:
     \`\`\`java
     ClassName obj = new ClassName();
     obj.methodName();
     \`\`\`

3. **Static Variable**:
   - Shared across all instances of the class.
   - Example: \`ClassName.staticVariable;\`

4. **Instance Variable**:
   - Unique to each object.
   - Accessed through the object.
   - Example: \`obj.instanceVariable;\``;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Static vs Instance in Java
        </h1>
        <p className="text-lg text-gray-400">
          Understanding the difference between static and instance members is crucial in Java. Static members belong to the class, while instance members belong to individual objects.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Static Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Static Methods</h2>
          <CodeBlock code={staticExample} language="java" />
          <p className="text-gray-300 mt-4">
            Static methods are associated with the class itself and can be called without creating an instance of the class.
          </p>
        </section>

        {/* Instance Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Instance Methods</h2>
          <CodeBlock code={instanceExample} language="java" />
          <p className="text-gray-300 mt-4">
            Instance methods are associated with individual objects and require an object to be invoked.
          </p>
        </section>

        {/* Combined Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Static vs Instance Members</h2>
          <CodeBlock code={combinedExample} language="java" />
          <p className="text-gray-300 mt-4">
            This example shows how static and instance variables and methods differ and interact in a class.
          </p>
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Visual Representation</h2>
          <CodeBlock code={visualRepresentation} language="markdown" />
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Accessing instance methods directly from a static context.</li>
            <li>Modifying static variables in instance methods without understanding their shared nature.</li>
            <li>Using static methods for logic that depends on instance state.</li>
            <li>Misusing static variables, leading to unexpected behavior in multi-threaded environments.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use static methods for utility functions or logic that doesn’t depend on object state.</li>
            <li>Limit static variables to constants or shared resources.</li>
            <li>Prefer instance methods when object state or behavior is involved.</li>
            <li>Use clear naming conventions to distinguish static and instance members.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Leverage static blocks for initializing static variables.</li>
            <li>Use static methods in singleton design patterns to provide global access points.</li>
            <li>Test static members in multi-threaded scenarios to avoid race conditions.</li>
            <li>Use instance methods for encapsulating object-specific behavior.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default StaticVsInstance;