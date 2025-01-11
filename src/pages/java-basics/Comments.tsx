import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Comments: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Comments in Java</h1>
        <p className="text-lg text-gray-400">
          Comments are non-executable lines in your code used for documentation and explanation. Learn about the different types of comments in Java and how to use them effectively.
        </p>
      </header>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-3 text-center">Introduction to Comments</h2>
          <p className="text-gray-300 mb-4 text-center">
            Comments are used to improve code readability and provide additional information about the functionality of the program. Java supports three types of comments: single-line, multi-line, and documentation comments.
          </p>
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-300 mb-2">Why Use Comments?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Provide context and explanation for complex code.</li>
              <li>Improve maintainability by describing logic and intent.</li>
              <li>Document important details for developers.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Types of Comments */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-3 text-center">Types of Comments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-300 mb-2">Single-line Comments</h3>
              <p className="text-gray-300 mb-4">
                Single-line comments start with <code>//</code> and extend to the end of the line. They are used for brief explanations.
              </p>
              <CodeBlock
                code={`// This is a single-line comment
int a = 5; // Variable declaration`}
                language="java"
              />
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-300 mb-2">Multi-line Comments</h3>
              <p className="text-gray-300 mb-4">
                Multi-line comments are enclosed between <code>/*</code> and <code>*/</code>. They are ideal for longer explanations or disabling code.
              </p>
              <CodeBlock
                code={`/*
This is a multi-line comment.
It spans multiple lines.
*/
int b = 10;`}
                language="java"
              />
            </div>
          </div>
          <div className="mt-6 bg-gray-700/50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-300 mb-2">Documentation Comments</h3>
            <p className="text-gray-300 mb-4">
              Documentation comments start with <code>/**</code> and are used to generate external documentation with tools like Javadoc.
            </p>
            <CodeBlock
              code={`/**
 * This method calculates the sum of two numbers.
 * @param a the first number
 * @param b the second number
 * @return the sum of a and b
 */
public int add(int a, int b) {
    return a + b;
}`}
              language="java"
            />
          </div>
        </section>

        {/* Section 3: Best Practices */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3 text-center">Best Practices for Comments</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>✅ Use comments to explain why the code exists, not what it does (the code itself should be self-explanatory).</li>
            <li>✅ Keep comments concise and relevant.</li>
            <li>✅ Update comments when code changes to prevent outdated information.</li>
            <li>✅ Use Javadoc comments for public APIs and libraries.</li>
          </ul>
        </section>

        {/* Section 4: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-3 text-center">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>❌ Over-commenting simple or obvious code, making it harder to read.</li>
            <li>❌ Writing comments that duplicate the code logic.</li>
            <li>❌ Leaving outdated or incorrect comments after changing the code.</li>
            <li>❌ Using comments as a substitute for clean and readable code.</li>
          </ul>
        </section>

        {/* Section 5: Tips */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-3 text-center">Tips for Writing Effective Comments</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>✅ Use single-line comments for brief explanations and TODOs.</li>
            <li>✅ Use multi-line comments to explain complex logic or disable blocks of code during debugging.</li>
            <li>✅ Use meaningful variable and method names to reduce the need for excessive commenting.</li>
            <li>✅ Keep your comments aligned with your code's indentation for better readability.</li>
          </ul>
        </section>

        {/* Section 6: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-3 text-center">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>💡 Use tools like Javadoc to generate documentation directly from your code comments.</li>
            <li>💡 Use comments to highlight potential pitfalls or performance issues in your code.</li>
            <li>💡 Avoid commenting out code for long periods; delete it or track changes with version control systems like Git.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Comments;