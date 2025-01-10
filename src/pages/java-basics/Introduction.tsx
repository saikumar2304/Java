import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Introduction: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Introduction to Java</h1>
      
      <div className="space-y-6">
        {/* What is Java Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What is Java?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Java is a versatile, high-level programming language that prioritizes readability, maintainability, and scalability. Designed to be platform-independent, it adheres to the principle of <strong>"Write Once, Run Anywhere" (WORA)</strong>. 
                Developed by <strong>James Gosling</strong> at Sun Microsystems in 1995, Java has become an essential tool for modern software development.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Did You Know?</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Java was initially named <strong>"Oak"</strong> after an oak tree outside Gosling's office.</li>
                  <li>The name "Java" is inspired by Java coffee, reflected in its iconic coffee cup logo.</li>
                  <li>Java runs on over 3 billion devices, from mobile phones to supercomputers.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Popular Uses</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-900/20 p-2 rounded">
                  <span className="font-medium">📱 Android Apps</span>
                </div>
                <div className="bg-purple-900/20 p-2 rounded">
                  <span className="font-medium">🌐 Web Applications</span>
                </div>
                <div className="bg-yellow-900/20 p-2 rounded">
                  <span className="font-medium">💼 Enterprise Systems</span>
                </div>
                <div className="bg-red-900/20 p-2 rounded">
                  <span className="font-medium">🎮 Game Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Features of Java</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Object-Oriented</h3>
              <CodeBlock 
                code={`class Car {
    private String model;

    public void start() {
        System.out.println("Starting " + model);
    }
}`} 
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">
                Java's object-oriented paradigm enables developers to design modular, reusable, and maintainable code, mimicking real-world objects.
              </p>
            </div>

            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Platform Independent</h3>
              <div className="flex items-center justify-center p-4 space-x-3">
                <div className="text-center">
                  <div className="text-2xl">📝</div>
                  <div className="text-xs mt-1">Java Code</div>
                </div>
                <div className="text-xl">→</div>
                <div className="text-center">
                  <div className="text-2xl">⚙️</div>
                  <div className="text-xs mt-1">Bytecode</div>
                </div>
                <div className="text-xl">→</div>
                <div className="text-center">
                  <div className="text-2xl">🖥️</div>
                  <div className="text-xs mt-1">Any Platform</div>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                Java code is compiled into <strong>bytecode</strong>, which can run on any device equipped with a Java Virtual Machine (JVM), ensuring cross-platform compatibility.
              </p>
            </div>

            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-2">Rich Standard Library</h3>
              <CodeBlock 
                code={`// Built-in collections
ArrayList<String> list = new ArrayList<>();
HashMap<String, Integer> map = new HashMap<>();

// File handling
File file = new File("data.txt");

// Networking
URL url = new URL("https://example.com");`}
                language="java"
              />
              <p className="mt-2 text-sm text-gray-300">
                Java offers a vast collection of built-in libraries for tasks such as data manipulation, networking, and file handling, reducing development time.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Getting Started with Java</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Development Tools Needed</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-900/40 p-2 rounded mr-2">1️⃣</span>
                  <div>
                    <strong>JDK (Java Development Kit)</strong>
                    <p className="text-sm">A comprehensive toolkit including the compiler, JVM, and essential libraries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-900/40 p-2 rounded mr-2">2️⃣</span>
                  <div>
                    <strong>IDE (Integrated Development Environment)</strong>
                    <p className="text-sm">Streamline development with tools like IntelliJ IDEA, Eclipse, or VS Code.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/40 p-2 rounded mr-2">3️⃣</span>
                  <div>
                    <strong>Text Editor</strong>
                    <p className="text-sm">Simpler tools like Notepad++ or Sublime Text are ideal for basic projects.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Installation Steps</h3>
              <div className="bg-gray-900 p-3 rounded-lg">
                <ol className="space-y-2 ml-4">
                  <li>1. Download the JDK from the official Oracle website.</li>
                  <li>2. Run the installer to set up Java on your system.</li>
                  <li>3. Configure the <strong>JAVA_HOME</strong> environment variable.</li>
                  <li>4. Add Java to your system's PATH variable.</li>
                  <li>5. Verify installation by running:
                    <CodeBlock 
                      code={`java -version`}
                      language="bash"
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Why Learn Java Section */}
        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Why Learn Java?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">🌟 Career Opportunities</h3>
              <ul className="text-sm space-y-1">
                <li>In-demand programming skills for software engineering roles.</li>
                <li>Opens doors to high-paying jobs in diverse industries.</li>
                <li>Supports various career paths, from app development to data analysis.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">📚 Learning Curve</h3>
              <ul className="text-sm space-y-1">
                <li>Clear and intuitive syntax makes it beginner-friendly.</li>
                <li>Extensive resources and documentation aid learning.</li>
                <li>Large community for support and collaboration.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-2">🛠️ Versatility</h3>
              <ul className="text-sm space-y-1">
                <li>Widely used in Android, web, and enterprise development.</li>
                <li>Scalable for both small and large-scale projects.</li>
                <li>Adaptable for emerging technologies like IoT and AI.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction;
