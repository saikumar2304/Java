import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Copy: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Copying Arrays in Java</h1>
      <div className="space-y-6">

        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Why Copy Arrays?</h2>
          <p>
            Copying arrays is a common operation in Java, allowing you to duplicate an array's contents for modifications or backups without affecting the original. Java provides multiple ways to copy arrays efficiently.
          </p>
        </section>

        {/* Using Loops Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Copying Using Loops</h2>
          <p className="mb-4">
            A simple way to copy arrays is by iterating through each element and assigning it to a new array:
          </p>
          <CodeBlock
            code={`public class CopyUsingLoop {\n    public static void main(String[] args) {\n        int[] original = {1, 2, 3, 4, 5};\n        int[] copy = new int[original.length];\n\n        // Copying elements\n        for (int i = 0; i < original.length; i++) {\n            copy[i] = original[i];\n        }\n\n        System.out.println(\"Original: \" + java.util.Arrays.toString(original));\n        System.out.println(\"Copy: \" + java.util.Arrays.toString(copy));\n    }\n}`}
            language="java"
          />
        </section>

        {/* Using Arrays.copyOf Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Copying Using Arrays.copyOf</h2>
          <p className="mb-4">
            The <code>java.util.Arrays.copyOf</code> method is a concise and efficient way to copy arrays:
          </p>
          <CodeBlock
            code={`import java.util.Arrays;\n\npublic class CopyUsingCopyOf {\n    public static void main(String[] args) {\n        int[] original = {1, 2, 3, 4, 5};\n\n        // Copying array\n        int[] copy = Arrays.copyOf(original, original.length);\n\n        System.out.println(\"Original: \" + Arrays.toString(original));\n        System.out.println(\"Copy: \" + Arrays.toString(copy));\n    }\n}`}
            language="java"
          />
        </section>

        {/* Using System.arraycopy Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Copying Using System.arraycopy</h2>
          <p className="mb-4">
            The <code>System.arraycopy</code> method provides another efficient way to copy arrays:
          </p>
          <CodeBlock
            code={`public class CopyUsingArrayCopy {\n    public static void main(String[] args) {\n        int[] original = {1, 2, 3, 4, 5};\n        int[] copy = new int[original.length];\n\n        // Copying array\n        System.arraycopy(original, 0, copy, 0, original.length);\n\n        System.out.println(\"Original: \" + java.util.Arrays.toString(original));\n        System.out.println(\"Copy: \" + java.util.Arrays.toString(copy));\n    }\n}`}
            language="java"
          />
        </section>

        {/* Key Points Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><code>Arrays.copyOf</code> and <code>System.arraycopy</code> are optimized and recommended for most use cases.</li>
            <li>Using loops offers flexibility but may be less concise.</li>
            <li>For multidimensional arrays, a deep copy is required to avoid shared references.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Copy;
