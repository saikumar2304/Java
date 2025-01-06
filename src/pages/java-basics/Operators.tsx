import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Operators: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Java Operators</h1>
      
      <div className="space-y-6">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What are Operators?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Operators are special symbols that perform operations on variables and values.
                Java provides many types of operators for different kinds of operations.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Types of Operators</h3>
                <ul className="text-sm space-y-2">
                  <li>• Arithmetic Operators</li>
                  <li>• Relational Operators</li>
                  <li>• Logical Operators</li>
                  <li>• Assignment Operators</li>
                  <li>• Unary Operators</li>
                  <li>• Bitwise Operators</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Basic Example</h3>
              <CodeBlock 
                code={`int a = 10, b = 20;
// Arithmetic
int sum = a + b;      // 30
int diff = b - a;     // 10

// Relational
boolean isGreater = b > a;  // true

// Logical
boolean result = (a < b) && (b < 30);  // true`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Arithmetic Operators */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Arithmetic Operators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Basic Arithmetic</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="py-2">+</td><td>Addition</td></tr>
                  <tr><td className="py-2">-</td><td>Subtraction</td></tr>
                  <tr><td className="py-2">*</td><td>Multiplication</td></tr>
                  <tr><td className="py-2">/</td><td>Division</td></tr>
                  <tr><td className="py-2">%</td><td>Modulus</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Examples</h3>
              <CodeBlock 
                code={`int a = 10, b = 3;

int sum = a + b;    // 13
int diff = a - b;   // 7
int prod = a * b;   // 30
int quot = a / b;   // 3
int rem = a % b;    // 1

// With floating point
double result = 10.0 / 3.0;  // 3.3333...`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Relational Operators */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Relational Operators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Comparison Operators</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="py-2">==</td><td>Equal to</td></tr>
                  <tr><td className="py-2">!=</td><td>Not equal to</td></tr>
                  <tr><td className="py-2">&gt;</td><td>Greater than</td></tr>
                  <tr><td className="py-2">&lt;</td><td>Less than</td></tr>
                  <tr><td className="py-2">&gt;=</td><td>Greater than or equal to</td></tr>
                  <tr><td className="py-2">&lt;=</td><td>Less than or equal to</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-2">Examples</h3>
              <CodeBlock 
                code={`int x = 5, y = 10;

boolean isEqual = x == y;     // false
boolean notEqual = x != y;    // true
boolean isGreater = x > y;    // false
boolean isLess = x < y;       // true
boolean isGreaterEqual = x >= y; // false
boolean isLessEqual = x <= y;    // true`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Logical Operators */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Logical Operators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Boolean Operations</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="py-2">&&</td><td>Logical AND</td></tr>
                  <tr><td className="py-2">||</td><td>Logical OR</td></tr>
                  <tr><td className="py-2">!</td><td>Logical NOT</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-red-400 mb-2">Examples</h3>
              <CodeBlock 
                code={`boolean a = true, b = false;

boolean andResult = a && b;  // false
boolean orResult = a || b;   // true
boolean notResult = !a;      // false

// With conditions
int x = 5, y = 10;
boolean result = (x < y) && (y < 20);  // true`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Assignment Operators */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Assignment Operators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Compound Assignment</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="py-2">+=</td><td>Add and assign</td></tr>
                  <tr><td className="py-2">-=</td><td>Subtract and assign</td></tr>
                  <tr><td className="py-2">*=</td><td>Multiply and assign</td></tr>
                  <tr><td className="py-2">/=</td><td>Divide and assign</td></tr>
                  <tr><td className="py-2">%=</td><td>Modulus and assign</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Examples</h3>
              <CodeBlock 
                code={`int x = 10;

x += 5;  // x = x + 5  (15)
x -= 3;  // x = x - 3  (12)
x *= 2;  // x = x * 2  (24)
x /= 4;  // x = x / 4  (6)
x %= 4;  // x = x % 4  (2)`}
                language="java"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Operators; 