import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const HelloWorld: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Hello, World in Java!</h1>
        <p className="text-lg text-gray-400">
          Discover how to write your very first program in Java and understand the fundamentals of programming.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What is "Hello, World"?</h2>
          <p className="text-gray-300 leading-7 mb-4">
            "Hello, World" is often the first program written by beginners when learning a new programming language. It demonstrates the basic syntax and structure of the language while printing a simple message to the console.
          </p>
        </section>

        {/* Section 2: Writing the Program */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">How to Write "Hello, World" in Java</h2>
          <p className="text-gray-300 leading-7 mb-4">
            Below is the step-by-step code to create and execute a "Hello, World" program in Java:
          </p>
          <CodeBlock
            code={`// HelloWorld.java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
            language="java"
          />
        </section>

        {/* Section 3: Explanation */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Understanding the Code</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-yellow-300">Class Definition:</strong> <code>public class HelloWorld</code> defines a class named <strong>HelloWorld</strong>. In Java, every application must have at least one class.
            </li>
            <li>
              <strong className="text-yellow-300">Main Method:</strong> <code>public static void main(String[] args)</code> is the entry point of any Java program. The JVM (Java Virtual Machine) starts program execution from this method.
            </li>
            <li>
              <strong className="text-yellow-300">Printing Output:</strong> <code>System.out.println("Hello, World!");</code> prints the message <strong>"Hello, World!"</strong> to the console.
            </li>
          </ul>
        </section>

        {/* Section 4: Running the Program */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">How to Run the Program</h2>
          <p className="text-gray-300 leading-7 mb-4">
            Follow these steps to compile and run the program from the command line:
          </p>
          <CodeBlock
            code={`// Step 1: Compile the program
javac HelloWorld.java

// Step 2: Run the program
java HelloWorld`}
            language="bash"
          />
          <p className="text-gray-300 mt-4">
            If everything works correctly, you will see the output:
          </p>
          <CodeBlock
            code={`Hello, World!`}
            language="plaintext"
          />
        </section>

        {/* Section 5: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-red-300">Missing Semicolon:</strong> Every statement in Java ends with a semicolon <code>;</code>. Omitting it will cause a compilation error.
            </li>
            <li>
              <strong className="text-red-300">Incorrect File Name:</strong> Ensure the file name matches the class name. For example, the class <strong>HelloWorld</strong> must be saved as <strong>HelloWorld.java</strong>.
            </li>
            <li>
              <strong className="text-red-300">Case Sensitivity:</strong> Java is case-sensitive. <code>System</code> is different from <code>system</code>.
            </li>
          </ul>
        </section>

        {/* Section 6: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Pro Tips for Beginners</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-green-300">Use an IDE:</strong> Start with an Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse. These tools provide features like code completion and debugging.
            </li>
            <li>
              <strong className="text-green-300">Practice:</strong> Try modifying the "Hello, World" program to print different messages or create new classes to explore Java syntax.
            </li>
            <li>
              <strong className="text-green-300">Learn Shortcuts:</strong> IDEs often have shortcuts like <code>psvm</code> for auto-generating the main method.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HelloWorld;