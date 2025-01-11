import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const DataTypes: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Java Data Types</h1>
        <p className="text-lg text-gray-400">
          Understand the building blocks of Java, including primitive and reference data types.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What are Data Types?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 leading-7 mb-4">
                In Java, every variable must be declared with a specific data type, which determines the kind of data it can store. Data types in Java are categorized into <strong className="text-yellow-300">primitive</strong> and <strong className="text-yellow-300">reference</strong> types.
              </p>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-2">Data Type Categories</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Primitive: byte, short, int, long, float, double, boolean, char</li>
                  <li>Reference: String, Array, Class, Interface, etc.</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Basic Declaration</h3>
              <CodeBlock
                code={`// Primitive types
int age = 25;
double salary = 50000.50;
char grade = 'A';
boolean isActive = true;

// Reference types
String name = "John";
int[] numbers = {1, 2, 3};
Integer count = 10;`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Primitive Data Types */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Primitive Data Types</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Data Type</th>
                  <th className="px-4 py-2 text-left">Size</th>
                  <th className="px-4 py-2 text-left">Range</th>
                  <th className="px-4 py-2 text-left">Default Value</th>
                  <th className="px-4 py-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800/50">
                  <td className="px-4 py-2 font-medium">byte</td>
                  <td className="px-4 py-2">8 bits</td>
                  <td className="px-4 py-2">-128 to 127</td>
                  <td className="px-4 py-2">0</td>
                  <td className="px-4 py-2"><code>byte b = 100;</code></td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="px-4 py-2 font-medium">short</td>
                  <td className="px-4 py-2">16 bits</td>
                  <td className="px-4 py-2">-32,768 to 32,767</td>
                  <td className="px-4 py-2">0</td>
                  <td className="px-4 py-2"><code>short s = 1000;</code></td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="px-4 py-2 font-medium">int</td>
                  <td className="px-4 py-2">32 bits</td>
                  <td className="px-4 py-2">-2^31 to 2^31-1</td>
                  <td className="px-4 py-2">0</td>
                  <td className="px-4 py-2"><code>int i = 100000;</code></td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="px-4 py-2 font-medium">long</td>
                  <td className="px-4 py-2">64 bits</td>
                  <td className="px-4 py-2">-2^63 to 2^63-1</td>
                  <td className="px-4 py-2">0L</td>
                  <td className="px-4 py-2"><code>long l = 100000L;</code></td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="px-4 py-2 font-medium">float</td>
                  <td className="px-4 py-2">32 bits</td>
                  <td className="px-4 py-2">~ ±3.4*10^38</td>
                  <td className="px-4 py-2">0.0f</td>
                  <td className="px-4 py-2"><code>float f = 10.5f;</code></td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="px-4 py-2 font-medium">double</td>
                  <td className="px-4 py-2">64 bits</td>
                  <td className="px-4 py-2">~ ±1.7*10^308</td>
                  <td className="px-4 py-2">0.0d</td>
                  <td className="px-4 py-2"><code>double d = 100.99;</code></td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="px-4 py-2 font-medium">char</td>
                  <td className="px-4 py-2">16 bits</td>
                  <td className="px-4 py-2">0 to 65,535 (Unicode)</td>
                  <td className="px-4 py-2"><code>'\u0000'</code></td>
                  <td className="px-4 py-2"><code>char c = 'A';</code></td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="px-4 py-2 font-medium">boolean</td>
                  <td className="px-4 py-2">1 bit</td>
                  <td className="px-4 py-2">true or false</td>
                  <td className="px-4 py-2">false</td>
                  <td className="px-4 py-2"><code>boolean b = true;</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Reference Data Types */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Reference Data Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-yellow-300 mb-3">Examples of Reference Types</h3>
              <CodeBlock
                code={`// String example
String text = "Hello, World!";

// Array example
int[] numbers = new int[5];
String[] names = {"Alice", "Bob"};

// Wrapper classes
Integer num = 42;
Double price = 99.99;`}
                language="java"
              />
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-300 mb-3">Common Reference Types</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>String:</strong> Immutable sequences of characters</li>
                <li><strong>Array:</strong> Fixed-size collection of elements</li>
                <li><strong>Class:</strong> User-defined data types</li>
                <li><strong>Wrapper Classes:</strong> Object representation of primitives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Type Conversion */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Type Conversion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Widening Conversion</h3>
              <CodeBlock
                code={`byte b = 100;
int i = b;    // byte to int
long l = i;   // int to long
float f = l;  // long to float
double d = f; // float to double`}
                language="java"
              />
            </div>
            <div>
              <h3 className="font-semibold text-red-300 mb-2">Narrowing Conversion</h3>
              <CodeBlock
                code={`double d = 100.99;
float f = (float)d;  // double to float
long l = (long)f;    // float to long
int i = (int)l;      // long to int
byte b = (byte)i;    // int to byte`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>❌ Using the wrong data type for a variable (e.g., storing a floating-point number in an <code>int</code>).</li>
            <li>❌ Forgetting to initialize variables before use.</li>
            <li>❌ Mixing up primitive and wrapper types, leading to unexpected behavior.</li>
          </ul>
        </section>

        {/* Section 6: Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Tips for Working with Data Types</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>✅ Use the smallest data type that fits your needs to save memory.</li>
            <li>✅ Prefer <code>double</code> over <code>float</code> for higher precision.</li>
            <li>✅ Use wrapper classes when working with collections like <code>ArrayList</code>.</li>
          </ul>
        </section>

        {/* Section 7: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>💡 Leverage autoboxing to simplify conversions between primitives and wrapper classes.</li>
            <li>💡 Avoid unnecessary conversions to reduce runtime overhead.</li>
            <li>💡 Use <code>BigDecimal</code> for financial calculations requiring high precision.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DataTypes;