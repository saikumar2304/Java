import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const DataTypes: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Java Data Types</h1>
      
      <div className="space-y-6">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Data Types Overview</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Java is a statically-typed language, which means all variables must be declared with their data type.
                Data types are divided into two groups: primitive data types and non-primitive (reference) data types.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Type Categories</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Primitive Types:</strong> byte, short, int, long, float, double, boolean, char</li>
                  <li>• <strong>Reference Types:</strong> String, Array, Class, Interface, etc.</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
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

        {/* Data Types Table */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Primitive Data Types</h2>
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
                  <td className="px-4 py-2">±3.4e−038 to ±3.4e+038</td>
                  <td className="px-4 py-2">0.0f</td>
                  <td className="px-4 py-2"><code>float f = 3.14f;</code></td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="px-4 py-2 font-medium">double</td>
                  <td className="px-4 py-2">64 bits</td>
                  <td className="px-4 py-2">±1.7e−308 to ±1.7e+308</td>
                  <td className="px-4 py-2">0.0d</td>
                  <td className="px-4 py-2"><code>double d = 3.14;</code></td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="px-4 py-2 font-medium">boolean</td>
                  <td className="px-4 py-2">1 bit</td>
                  <td className="px-4 py-2">true or false</td>
                  <td className="px-4 py-2">false</td>
                  <td className="px-4 py-2"><code>boolean b = true;</code></td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="px-4 py-2 font-medium">char</td>
                  <td className="px-4 py-2">16 bits</td>
                  <td className="px-4 py-2">0 to 65,535</td>
                  <td className="px-4 py-2">\u0000</td>
                  <td className="px-4 py-2"><code>char c = 'A';</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Reference Types Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Reference Data Types</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Common Reference Types</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>String:</strong> Sequence of characters</li>
                <li>• <strong>Arrays:</strong> Collection of similar type elements</li>
                <li>• <strong>Classes:</strong> User-defined types</li>
                <li>• <strong>Interfaces:</strong> Abstract type definitions</li>
                <li>• <strong>Wrapper Classes:</strong> Object versions of primitive types</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Examples</h3>
              <CodeBlock 
                code={`// String examples
String text = "Hello World";

// Array examples
int[] numbers = new int[5];
String[] names = {"John", "Jane"};

// Wrapper class examples
Integer num = 100;
Double price = 99.99;
Character letter = 'X';`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Type Conversion Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Type Conversion</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Widening (Implicit)</h3>
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
              <h3 className="font-semibold text-yellow-400 mb-2">Narrowing (Explicit)</h3>
              <CodeBlock 
                code={`double d = 100.04;
float f = (float)d;  // double to float
long l = (long)f;    // float to long
int i = (int)l;      // long to int
byte b = (byte)i;    // int to byte`}
                language="java"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataTypes;