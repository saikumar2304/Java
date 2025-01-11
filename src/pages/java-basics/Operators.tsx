import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Operators: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Java Operators</h1>
        <p className="text-lg text-gray-400">
          Explore the different types of operators in Java, from arithmetic to logical, and learn how to use them effectively.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What are Operators?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 leading-7 mb-4">
                Operators are special symbols used to perform operations on variables and values. Java provides a wide variety of operators for tasks such as arithmetic calculations, comparisons, logical operations, and more.
              </p>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-2">Types of Operators</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Arithmetic Operators</li>
                  <li>Relational Operators</li>
                  <li>Logical Operators</li>
                  <li>Assignment Operators</li>
                  <li>Unary Operators</li>
                  <li>Bitwise Operators</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Basic Example</h3>
              <CodeBlock
                code={`int a = 10, b = 20;
// Arithmetic
int sum = a + b;      // 30

// Relational
boolean isGreater = b > a;  // true

// Logical
boolean result = (a < b) && (b < 30);  // true`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Arithmetic Operators */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Arithmetic Operators</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Operations</h3>
              <table className="w-full text-sm">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2">Operator</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="px-4 py-2">+</td><td>Addition</td></tr>
                  <tr><td className="px-4 py-2">-</td><td>Subtraction</td></tr>
                  <tr><td className="px-4 py-2">*</td><td>Multiplication</td></tr>
                  <tr><td className="px-4 py-2">/</td><td>Division</td></tr>
                  <tr><td className="px-4 py-2">%</td><td>Modulus</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Examples</h3>
              <CodeBlock
                code={`int a = 10, b = 3;

int sum = a + b;    // 13
int diff = a - b;   // 7
int prod = a * b;   // 30
int quot = a / b;   // 3
int rem = a % b;    // 1`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Relational Operators */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Relational Operators</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-300 mb-2">Comparison Operators</h3>
              <table className="w-full text-sm">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2">Operator</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="px-4 py-2">==</td><td>Equal to</td></tr>
                  <tr><td className="px-4 py-2">!=</td><td>Not equal to</td></tr>
                  <tr><td className="px-4 py-2">&gt;</td><td>Greater than</td></tr>
                  <tr><td className="px-4 py-2">&lt;</td><td>Less than</td></tr>
                  <tr><td className="px-4 py-2">&gt;=</td><td>Greater than or equal to</td></tr>
                  <tr><td className="px-4 py-2">&lt;=</td><td>Less than or equal to</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Examples</h3>
              <CodeBlock
                code={`int x = 5, y = 10;

boolean isEqual = x == y;      // false
boolean notEqual = x != y;     // true
boolean isGreater = x > y;     // false`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Logical Operators */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Logical Operators</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-300 mb-2">Boolean Operations</h3>
              <table className="w-full text-sm">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2">Operator</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr><td className="px-4 py-2">&&</td><td>Logical AND</td></tr>
                  <tr><td className="px-4 py-2">||</td><td>Logical OR</td></tr>
                  <tr><td className="px-4 py-2">!</td><td>Logical NOT</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-semibold text-red-400 mb-2">Examples</h3>
              <CodeBlock
                code={`boolean a = true, b = false;

boolean andResult = a && b;  // false
boolean orResult = a || b;   // true`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>❌ Dividing by zero causes a runtime exception.</li>
            <li>❌ Confusing the equality operator (<code>==</code>) with the assignment operator (<code>=</code>).</li>
            <li>❌ Misusing logical operators by mixing them with relational operators without parentheses.</li>
          </ul>
        </section>

        {/* Section 6: Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Tips for Using Operators</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>✅ Use parentheses to clarify complex expressions and avoid ambiguity.</li>
            <li>✅ Prefer <code>==</code> for comparing primitive types and <code>.equals()</code> for objects.</li>
            <li>✅ Use short-circuit logical operators (<code>&&</code>, <code>||</code>) to improve performance.</li>
          </ul>
        </section>

        {/* Section 7: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>💡 Use compound assignment operators (<code>+=</code>, <code>*=</code>) for cleaner and more concise code.</li>
            <li>💡 Be cautious when using floating-point division; prefer <code>BigDecimal</code> for precision-critical calculations.</li>
            <li>💡 Test edge cases for relational operators to ensure correct behavior.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Operators;