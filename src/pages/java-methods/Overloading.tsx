import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const MethodOverloading = () => {
  const basicExample = `
public class Calculator {
    // Method with two int parameters
    public int add(int a, int b) {
        return a + b;
    }

    // Overloaded method with three int parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Overloaded method with double parameters
    public double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        System.out.println(calc.add(5, 3));        // Calls first method: 8
        System.out.println(calc.add(5, 3, 2));     // Calls second method: 10
        System.out.println(calc.add(5.5, 3.5));    // Calls third method: 9.0
    }
}`;

  const typePromotionExample = `
public class TypePromotion {
    // Method with int parameter
    public void display(int num) {
        System.out.println("Integer: " + num);
    }

    // Method with double parameter
    public void display(double num) {
        System.out.println("Double: " + num);
    }

    public static void main(String[] args) {
        TypePromotion obj = new TypePromotion();
        
        byte b = 25;
        short s = 30;
        long l = 100L;
        float f = 3.14f;
        
        obj.display(b);   // Calls int version (byte -> int)
        obj.display(s);   // Calls int version (short -> int)
        obj.display(l);   // Calls double version (long -> double)
        obj.display(f);   // Calls double version (float -> double)
    }
}`;

  const constructorOverloadingExample = `
public class Student {
    private String name;
    private int age;
    private String course;

    // Default constructor
    public Student() {
        this.name = "Unknown";
        this.age = 0;
        this.course = "Not Assigned";
    }

    // Constructor with name
    public Student(String name) {
        this.name = name;
        this.age = 0;
        this.course = "Not Assigned";
    }

    // Constructor with name and age
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.course = "Not Assigned";
    }

    // Constructor with all parameters
    public Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Course: " + course);
    }

    public static void main(String[] args) {
        Student s1 = new Student();                    // Uses default constructor
        Student s2 = new Student("John");              // Uses second constructor
        Student s3 = new Student("Alice", 20);         // Uses third constructor
        Student s4 = new Student("Bob", 22, "Java");   // Uses fourth constructor

        s1.displayInfo();
        s2.displayInfo();
        s3.displayInfo();
        s4.displayInfo();
    }
}`;

  const dryRunExample = `
public class StringUtil {
    public static int count(String str, char ch) {
        if (str == null) return 0;
        int count = 0;
        for (char c : str.toCharArray()) {
            if (c == ch) count++;
        }
        return count;
    }

    public static int count(String str, String substr) {
        if (str == null || substr == null) return 0;
        int count = 0;
        int lastIndex = 0;
        while ((lastIndex = str.indexOf(substr, lastIndex)) != -1) {
            count++;
            lastIndex += substr.length();
        }
        return count;
    }
}

// Dry Run:
// String text = "hello hello world";
// char ch = 'l';
// String substr = "hello";

// Result 1: StringUtil.count(text, ch) -> Counts 'l' in the text (returns 4).
// Result 2: StringUtil.count(text, substr) -> Counts occurrences of "hello" (returns 2).
`;

  const visualRepresentation = `
1. **How Method Overloading Works:**
   - Methods have the same name but differ in:
     - Number of parameters.
     - Types of parameters.
     - Order of parameters.

2. **Call Resolution:**
   - At compile time, the most specific method matching the arguments is chosen.

3. **Constructor Overloading:**
   - Overloaded constructors allow creating objects in multiple ways.

4. **Type Promotion in Overloading:**
   - Java automatically promotes smaller types to larger compatible types during method calls.
`;

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Method Overloading in Java
        </h1>
        <p className="text-lg text-gray-400">
          Method overloading allows defining multiple methods with the same name but different parameters, enabling flexibility and intuitive method usage.
        </p>
      </header>

      <main className="space-y-12">
        {/* Basic Usage */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Basic Example</h2>
          <CodeBlock code={basicExample} language="java" />
        </section>

        {/* Type Promotion */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Type Promotion in Overloading
          </h2>
          <CodeBlock code={typePromotionExample} language="java" />
        </section>

        {/* Constructor Overloading */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Constructor Overloading
          </h2>
          <CodeBlock code={constructorOverloadingExample} language="java" />
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run</h2>
          <CodeBlock code={dryRunExample} language="java" />
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Visual Representation
          </h2>
          <CodeBlock code={visualRepresentation} language="markdown" />
        </section>

        {/* Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Keep overloaded methods logically consistent.</li>
            <li>Document each version of the overloaded method.</li>
            <li>Use overloading sparingly to avoid confusion.</li>
          </ul>
        </section>

        {/* Pro Tips */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            <li>Use constructor overloading to simplify object creation.</li>
            <li>Leverage varargs when the number of parameters varies.</li>
            <li>Avoid excessive overloading; it can lead to ambiguity.</li>
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            <li>Overloading only by return type (not allowed).</li>
            <li>Confusing method overloading with overriding.</li>
            <li>Ambiguous calls due to improper argument matching.</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            <li>Use meaningful and consistent parameter names.</li>
            <li>Limit the number of overloaded methods for readability.</li>
            <li>Always test overloaded methods for edge cases.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MethodOverloading;