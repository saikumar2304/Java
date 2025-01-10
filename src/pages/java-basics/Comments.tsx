import React from 'react';

const Comments: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Understanding Comments in Java</h1>
      <div className="space-y-6">

        {/* Introduction */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What are Comments?</h2>
          <p>
            Comments in Java are notes or annotations in the code that the Java compiler ignores.
            They are meant to make the code more understandable for developers and maintainers.
            Good commenting practices enhance code readability and make it easier to debug or extend.
          </p>
        </section>

        {/* Types of Comments */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Types of Comments</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">1. Single-line Comments</h3>
              <p>
                Used to add brief explanations or notes about specific lines of code. Prefixed with <code>//</code>.
              </p>
              <pre className="bg-gray-700 p-3 rounded-lg text-sm">
                {`// This is a single-line comment
System.out.println("Hello, World!"); // Prints Hello, World!`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-green-400 mb-2">2. Multi-line Comments</h3>
              <p>
                Used for longer explanations that span multiple lines. Enclosed between <code>/*</code> and <code>*/</code>.
              </p>
              <pre className="bg-gray-700 p-3 rounded-lg text-sm">
                {`/* This is a multi-line comment.
   It can span multiple lines.
   Useful for detailed documentation. */
System.out.println("Multi-line comments example.");`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-purple-400 mb-2">3. Documentation Comments</h3>
              <p>
                Specially formatted comments used to generate API documentation. Starts with <code>/**</code> and ends with <code>*/</code>.
              </p>
              <pre className="bg-gray-700 p-3 rounded-lg text-sm">
                {`/** 
 * This method adds two numbers.
 * @param a First number
 * @param b Second number
 * @return Sum of a and b
 */
public int add(int a, int b) {
    return a + b;
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Best Practices for Writing Comments</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Write comments to explain the "why" behind your code, not the "what".</li>
            <li>Keep comments concise and meaningful.</li>
            <li>Avoid redundant comments that state the obvious.</li>
            <li>Update comments when the associated code changes.</li>
            <li>Use documentation comments for public APIs and libraries.</li>
          </ul>
        </section>

        {/* Importance of Comments */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Why are Comments Important?</h2>
          <p>
            Comments play a critical role in software development by:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Helping developers understand the codebase.</li>
            <li>Making it easier to onboard new team members.</li>
            <li>Providing context for complex logic.</li>
            <li>Improving maintainability and reducing debugging time.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Comments;
