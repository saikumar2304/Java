import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MethodCalling = () => {
  const basicExample = `
public class MethodCallExample {
    // Instance method
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Static method
    public static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        // Calling instance method
        MethodCallExample obj = new MethodCallExample();
        obj.greet("John");  // Output: Hello, John!

        // Calling static method
        int sum = MethodCallExample.add(5, 3);  // sum = 8
        // Or simply:
        int result = add(10, 20);  // result = 30
    }
}`;

  const objectMethodExample = `
public class Student {
    private String name;
    private int age;

    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Instance methods
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public void updateAge(int newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    }
}

// Using the methods
Student student = new Student("Alice", 20);
student.displayInfo();     // Calls displayInfo method
student.updateAge(21);     // Calls updateAge method
student.displayInfo();     // Calls displayInfo again`;

  const methodChainingExample = `
public class TextBuilder {
    private StringBuilder text = new StringBuilder();

    public TextBuilder append(String str) {
        text.append(str);
        return this;  // Returns this instance for chaining
    }

    public TextBuilder appendLine(String str) {
        text.append(str).append("\\n");
        return this;
    }

    public String getText() {
        return text.toString();
    }
}

// Method chaining example
TextBuilder builder = new TextBuilder();
String result = builder.append("Hello ")
                      .append("World!")
                      .appendLine("")
                      .append("How are you?")
                      .getText();

// Result:
// Hello World!
// How are you?`;

  const visualRepresentation = `
1. **Static Method Call**:
   - Can be called directly using the class name.
   - Example: \`ClassName.methodName(arguments);\`

2. **Instance Method Call**:
   - Requires an object of the class.
   - Example:
     \`\`\`java
     ClassName obj = new ClassName();
     obj.methodName(arguments);
     \`\`\`

3. **Method Chaining**:
   - Allows multiple method calls on the same object.
   - Example:
     \`\`\`java
     obj.method1().method2().method3();
     \`\`\``;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Method Calling in Java
        </h1>
        <p className="text-lg text-gray-400">
          Methods can be called in Java either on objects (instance methods) or directly on classes (static methods). 
          Understanding how to invoke methods effectively is essential for mastering Java programming.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Basic Examples */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Basic Method Calls</h2>
          <CodeBlock code={basicExample} language="java" />
          <p className="text-gray-300 mt-4">
            Static methods can be called directly using the class name, while instance methods require an object of the class.
          </p>
        </section>

        {/* Object Method Calls */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Object Method Calls</h2>
          <CodeBlock code={objectMethodExample} language="java" />
          <p className="text-gray-300 mt-4">
            Instance methods operate on objects, allowing them to modify object state or access its fields.
          </p>
        </section>

        {/* Method Chaining */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Method Chaining</h2>
          <CodeBlock code={methodChainingExample} language="java" />
          <p className="text-gray-300 mt-4">
            Method chaining improves code readability by enabling sequential calls on the same object.
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
            <li>Calling instance methods statically.</li>
            <li>Not handling null objects before method calls.</li>
            <li>Passing the wrong number or type of arguments.</li>
            <li>Ignoring return values of methods.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Always check for null before calling instance methods.</li>
            <li>Use appropriate access modifiers to enforce encapsulation.</li>
            <li>Handle exceptions properly when invoking methods.</li>
            <li>Document the purpose and usage of methods using JavaDoc.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Prefer static imports for commonly used static methods.</li>
            <li>Leverage method chaining for concise and fluent interfaces.</li>
            <li>Use meaningful names for objects and methods to enhance readability.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MethodCalling;