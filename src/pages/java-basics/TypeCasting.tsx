import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const TypeCasting: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Understanding Type Casting in Java</h1>
      
      <div className="space-y-6">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What is Type Casting?</h2>
          <p className="mb-4">
            Type casting is the process of converting a variable from one data type to another. In Java, it is commonly used to manage data compatibility and precision in programs. Type casting can be classified into two main categories: <strong>implicit casting</strong> (widening) and <strong>explicit casting</strong> (narrowing).
          </p>
          <p>
            Understanding type casting ensures smoother operations, prevents data loss, and allows you to work effectively with different data types in Java applications.
          </p>
        </section>

        {/* Implicit Casting Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Implicit Casting (Widening)</h2>
          <p className="mb-4">
            Implicit casting occurs automatically when a smaller data type is assigned to a larger data type. This type of casting is safe because there is no loss of data during conversion.
          </p>
          <CodeBlock 
            code={`int num = 10;
double decimalValue = num; // Implicit casting from int to double
System.out.println(decimalValue); // Outputs 10.0`}
            language="java"
          />
          <p className="mt-4">
            In the above example, the <code>int</code> variable <code>num</code> is automatically converted to a <code>double</code> without requiring explicit instructions.
          </p>
        </section>

        {/* Explicit Casting Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Explicit Casting (Narrowing)</h2>
          <p className="mb-4">
            Explicit casting is required when converting a larger data type to a smaller data type. Since narrowing may result in data loss, Java requires you to explicitly specify the conversion.
          </p>
          <CodeBlock 
            code={`double decimalValue = 10.99;
int num = (int) decimalValue; // Explicit casting from double to int
System.out.println(num); // Outputs 10 (fractional part is lost)`}
            language="java"
          />
          <p className="mt-4">
            As shown, the fractional part is truncated when converting a <code>double</code> to an <code>int</code>, highlighting the potential for data loss.
          </p>
        </section>

        {/* Common Use Cases Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Common Use Cases</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Numeric Operations:</strong> Converting between numeric types (e.g., <code>int</code> to <code>double</code>) for calculations.
            </li>
            <li>
              <strong>Type Conversion in APIs:</strong> Handling API responses that require specific data types.
            </li>
            <li>
              <strong>Memory Optimization:</strong> Using smaller data types like <code>byte</code> or <code>short</code> to save memory in large datasets.
            </li>
          </ul>
        </section>

        {/* Key Considerations Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Considerations</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Precision Loss:</strong> Be cautious when narrowing conversions as they may lead to loss of precision or data.
            </li>
            <li>
              <strong>Compatibility:</strong> Ensure that the target data type can handle the value being casted.
            </li>
            <li>
              <strong>Performance:</strong> While implicit casting is efficient, explicit casting may incur additional computation costs.
            </li>
          </ul>
        </section>

        {/* Summary Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Summary</h2>
          <p className="mb-4">
            Type casting is a fundamental concept in Java that enables seamless conversion between data types. While implicit casting simplifies development, explicit casting offers precision and control when managing data. Understanding the nuances of type casting helps developers write efficient, error-free code.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TypeCasting;
