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
                Java is a high-level, class-based, object-oriented programming language designed to be platform-independent.
                Created by James Gosling at Sun Microsystems in 1995, it follows the principle of "Write Once, Run Anywhere" (WORA).
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Did You Know?</h3>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Java was originally called "Oak"</li>
                  <li>Named after Java coffee, hence the coffee cup logo</li>
                  <li>Powers over 3 billion devices worldwide</li>
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
                  <span className="font-medium">🌐 Web Apps</span>
                </div>
                <div className="bg-yellow-900/20 p-2 rounded">
                  <span className="font-medium">💼 Enterprise</span>
                </div>
                <div className="bg-red-900/20 p-2 rounded">
                  <span className="font-medium">🎮 Games</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>
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
              <p className="mt-2 text-sm text-gray-300">Everything in Java is an object, making code modular and reusable.</p>
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
              <p className="mt-2 text-sm text-gray-300">Write once, run anywhere with Java Virtual Machine (JVM).</p>
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
              <p className="mt-2 text-sm text-gray-300">Extensive built-in libraries for common programming tasks.</p>
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
                    <p className="text-sm">Contains compiler, JVM, and core libraries</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-900/40 p-2 rounded mr-2">2️⃣</span>
                  <div>
                    <strong>IDE (Integrated Development Environment)</strong>
                    <p className="text-sm">Popular choices: IntelliJ IDEA, Eclipse, VS Code</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/40 p-2 rounded mr-2">3️⃣</span>
                  <div>
                    <strong>Text Editor</strong>
                    <p className="text-sm">For simple programs: Notepad++, Sublime Text</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Installation Steps</h3>
              <div className="bg-gray-900 p-3 rounded-lg">
                <ol className="space-y-2 ml-4">
                  <li>1. Download JDK from Oracle website</li>
                  <li>2. Run the installer</li>
                  <li>3. Set JAVA_HOME environment variable</li>
                  <li>4. Add Java to system PATH</li>
                  <li>5. Verify installation:
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
                <li>High demand in job market</li>
                <li>Competitive salaries</li>
                <li>Various career paths</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">📚 Learning Curve</h3>
              <ul className="text-sm space-y-1">
                <li>Clear syntax</li>
                <li>Extensive documentation</li>
                <li>Large community support</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
              <h3 className="font-semibold text-purple-400 mb-2">🛠️ Versatility</h3>
              <ul className="text-sm space-y-1">
                <li>Mobile development</li>
                <li>Web applications</li>
                <li>Desktop software</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Introduction; 