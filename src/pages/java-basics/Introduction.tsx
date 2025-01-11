import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Introduction: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Welcome to Java Programming</h1>
        <p className="text-lg text-gray-400">
          Embark on your journey to mastering one of the most versatile programming languages in the world.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: What is Java? */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What is Java?</h2>
          <p className="text-gray-300 leading-7 mb-4">
            Java is a high-level, object-oriented programming language known for its simplicity, platform independence, and extensive use in enterprise applications, Android development, and more.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Adheres to the principle of <strong className="text-yellow-300">"Write Once, Run Anywhere (WORA)"</strong>.</li>
            <li>Runs on more than <strong className="text-green-400">3 billion devices</strong>, from smartphones to supercomputers.</li>
            <li>It is designed to have as few implementation dependencies as possible.</li>
            <li>Features garbage collection to manage memory automatically.</li>
          </ul>
        </section>

        {/* Section 2: History of Java */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">History of Java</h2>
          <p className="text-gray-300 leading-7">
            Java was developed by James Gosling and his team at Sun Microsystems in 1995. Initially named "Oak," it was later renamed Java after the Java coffee. It has since become one of the most popular programming languages worldwide.
          </p>
          <p className="text-gray-300 leading-7 mt-4">
            The primary goal of Java was to create a platform-independent language that could be used across diverse devices, from small handheld gadgets to large servers.
          </p>
        </section>

        {/* Section 3: Features of Java */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Features of Java</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Object-Oriented:</strong> Everything in Java revolves around objects and classes.</li>
            <li><strong>Platform Independent:</strong> Bytecode can run on any platform with a JVM.</li>
            <li><strong>Robust:</strong> Java handles memory management and exceptions effectively.</li>
            <li><strong>Secure:</strong> Provides built-in security features like cryptography and bytecode verification.</li>
            <li><strong>Multithreaded:</strong> Supports concurrent programming with multiple threads.</li>
            <li><strong>Dynamic:</strong> Code is adaptable to changes, ensuring flexibility and scalability.</li>
          </ul>
        </section>

        {/* Section 4: How to Download and Install Java */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">How to Download and Install Java?</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-300">
            <li>
              Visit the official Oracle website or OpenJDK website.
              <a href="https://www.oracle.com/java/technologies/javase-downloads.html" className="text-blue-400 underline ml-1">
                (Oracle Java SE Downloads)
              </a>
            </li>
            <li>Download the latest version of the Java Development Kit (JDK) suitable for your operating system.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Ensure you configure your environment variables correctly after installation.</li>
          </ol>
        </section>

        {/* Section 5: Setting Up the Environment */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Setting Up the Environment</h2>
          <p className="text-gray-300 leading-7 mb-4">
            After installing Java, you need to set up the environment variables for smooth functioning.
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-300">
            <li>Go to the System Settings or Control Panel (for Windows).</li>
            <li>Navigate to Environment Variables in the System Properties.</li>
            <li>Add a new variable:
              <CodeBlock
                code={`Variable name: JAVA_HOME
Variable value: C:\\Program Files\\Java\\jdk<version>`}
                language="text"
              />
            </li>
            <li>Edit the PATH variable to include <code>%JAVA_HOME%\\bin</code>.</li>
            <li>Verify the setup by running <code>java -version</code> in the terminal.</li>
          </ol>
        </section>

        {/* Section 6: Java Virtual Machine (JVM) */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Java Virtual Machine (JVM)</h2>
          <p className="text-gray-300 leading-7 mb-4">
            The JVM is the heart of Java's "Write Once, Run Anywhere" principle. It is responsible for running Java bytecode on any platform.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Converts bytecode into machine-specific instructions.</li>
            <li>Provides runtime features like garbage collection and security checks.</li>
          </ul>
        </section>

        {/* Section 7: Java Development Kit (JDK) */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Java Development Kit (JDK)</h2>
          <p className="text-gray-300 leading-7 mb-4">
            The JDK is a software development kit (SDK) for developing Java applications. It includes tools like the compiler (<code>javac</code>), runtime environment, and libraries.
          </p>
          <CodeBlock
            code={`// Compile a Java program
javac MyProgram.java

// Run the compiled program
java MyProgram`}
            language="bash"
          />
        </section>

        {/* Section 8: JDK vs JRE vs JVM */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">JDK vs JRE vs JVM</h2>
          <table className="w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-2">Component</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="px-4 py-2">JDK</td>
                <td className="px-4 py-2">Includes tools for developing and running Java applications (e.g., compiler, debugger).</td>
              </tr>
              <tr>
                <td className="px-4 py-2">JRE</td>
                <td className="px-4 py-2">Includes the JVM and libraries required to run Java applications but not the development tools.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">JVM</td>
                <td className="px-4 py-2">A virtual machine that executes Java bytecode on the host machine.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Introduction;