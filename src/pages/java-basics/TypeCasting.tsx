import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const TypeCasting: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Type Casting in Java</h1>
        <p className="text-lg text-gray-400">
          Type casting is the process of converting one data type into another. In Java, you can perform both widening and narrowing conversions. Learn the rules, techniques, and best practices for type casting.
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-3 text-center">Introduction to Type Casting</h2>
          <p className="text-gray-300 mb-4 text-center">
            Java allows you to convert variables from one type to another. Type casting is categorized into <strong className="text-yellow-300">widening (automatic)</strong> and <strong className="text-yellow-300">narrowing (explicit)</strong> conversions.
          </p>
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-300 mb-2">Types of Type Casting</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Widening (Implicit):</strong> Automatically converts smaller types to larger types (e.g., <code>int</code> to <code>long</code>).</li>
              <li><strong>Narrowing (Explicit):</strong> Requires a cast to convert larger types to smaller types (e.g., <code>double</code> to <code>int</code>).</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Widening Type Casting */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-3 text-center">Widening Type Casting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 mb-4">
                Widening, or implicit type casting, is automatically performed by Java when converting a smaller data type into a larger one. It is safe as no data is lost.
              </p>
              <CodeBlock
                code={`int num = 100;
long largeNum = num;      // int to long
float decimal = largeNum; // long to float
double bigDecimal = decimal; // float to double`}
                language="java"
              />
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-300 mb-2">Key Points</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Widening happens automatically.</li>
                <li>No loss of data occurs during the conversion.</li>
                <li>Examples include <code>byte</code> → <code>short</code> → <code>int</code> → <code>long</code> → <code>float</code> → <code>double</code>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Narrowing Type Casting */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3 text-center">Narrowing Type Casting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 mb-4">
                Narrowing, or explicit type casting, requires a cast operator to convert a larger type into a smaller type. This may lead to data loss if the value exceeds the range of the smaller type.
              </p>
              <CodeBlock
                code={`double bigNum = 99.99;
float decimal = (float) bigNum;  // double to float
long largeNum = (long) decimal; // float to long
int num = (int) largeNum;       // long to int`}
                language="java"
              />
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-300 mb-2">Key Points</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Narrowing requires an explicit cast.</li>
                <li>There is potential for data loss or truncation.</li>
                <li>Examples include <code>double</code> → <code>float</code> → <code>long</code> → <code>int</code> → <code>short</code> → <code>byte</code>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-3 text-center">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>❌ Performing narrowing conversion without an explicit cast, causing compilation errors.</li>
            <li>❌ Ignoring potential data loss when casting larger types into smaller ones.</li>
            <li>❌ Misunderstanding implicit widening conversions.</li>
            <li>❌ Attempting to cast unrelated types, such as <code>String</code> to <code>int</code>.</li>
          </ul>
        </section>

        {/* Section 5: Tips */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-3 text-center">Tips for Type Casting</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>✅ Use widening conversions whenever possible as they are safe and automatic.</li>
            <li>✅ For narrowing conversions, ensure the value fits within the target type's range.</li>
            <li>✅ Test your code thoroughly to avoid data loss during conversions.</li>
            <li>✅ Avoid unnecessary type casting to keep your code clean and maintainable.</li>
          </ul>
        </section>

        {/* Section 6: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-3 text-center">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>💡 Use <code>BigDecimal</code> for high-precision calculations instead of relying on floating-point conversions.</li>
            <li>💡 Avoid narrowing conversions unless absolutely necessary to prevent potential bugs.</li>
            <li>💡 Use wrapper classes like <code>Integer</code>, <code>Double</code>, etc., for advanced operations requiring object types.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TypeCasting;