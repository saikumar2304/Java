import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Keywords: React.FC = () => {
  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Java Keywords</h1>
        <p className="text-lg text-gray-400">
          Learn about reserved words in Java and their role in defining the structure and logic of your programs.
        </p>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Section 1: Introduction */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">What are Keywords?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 leading-7 mb-4">
                Keywords are reserved words that have a predefined meaning in Java. These cannot be used as names for variables, methods, classes, or any other identifiers.
              </p>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300 mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Reserved for specific purposes in the Java language.</li>
                  <li>Cannot be used as identifiers (e.g., variable or method names).</li>
                  <li>All keywords are written in lowercase.</li>
                  <li>Java has over 50 reserved keywords.</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-red-400 mb-3">Common Mistakes</h3>
              <CodeBlock
                code={`// These will cause errors
class class { }        // 'class' is a keyword
int public = 5;        // 'public' is a keyword
void static() { }      // 'static' is a keyword
boolean new = true;    // 'new' is a keyword`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Categories */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Categories of Keywords</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-300 mb-3">Access Modifiers</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['public', 'private', 'protected', 'default'].map(keyword => (
                  <div key={keyword} className="bg-gray-700/50 p-2 rounded text-sm">
                    {keyword}
                  </div>
                ))}
              </div>
              <h3 className="font-semibold text-purple-300 mb-3">Class-Related</h3>
              <div className="grid grid-cols-2 gap-2">
                {['class', 'interface', 'extends', 'implements', 'enum'].map(keyword => (
                  <div key={keyword} className="bg-gray-700/50 p-2 rounded text-sm">
                    {keyword}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-300 mb-3">Control Flow</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['if', 'else', 'switch', 'case', 'break', 'continue', 'return'].map(keyword => (
                  <div key={keyword} className="bg-gray-700/50 p-2 rounded text-sm">
                    {keyword}
                  </div>
                ))}
              </div>
              <h3 className="font-semibold text-yellow-300 mb-3">Loops</h3>
              <div className="grid grid-cols-2 gap-2">
                {['for', 'while', 'do'].map(keyword => (
                  <div key={keyword} className="bg-gray-700/50 p-2 rounded text-sm">
                    {keyword}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Examples */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Keyword Usage Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-400 mb-3">Class and Method Declaration</h3>
              <CodeBlock
                code={`public class Example {
    private int number;
    protected String text;

    public static void main(String[] args) {
        final int CONSTANT = 100;
        // Method body
    }
}`}
                language="java"
              />
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-3">Control Flow and Loops</h3>
              <CodeBlock
                code={`if (condition) {
    return true;
} else {
    break;
}

for (int i = 0; i < 10; i++) {
    if (i == 5) continue;
    // Loop body
}

while (condition) {
    // While loop body
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Common Mistakes */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-red-300">Using Keywords as Identifiers:</strong> For example, naming a variable <code>class</code> or <code>public</code>.
            </li>
            <li>
              <strong className="text-red-300">Case Sensitivity:</strong> Keywords are case-sensitive. For example, <code>Public</code> is not the same as <code>public</code>.
            </li>
            <li>
              <strong className="text-red-300">Confusing Context:</strong> Using keywords incorrectly in a program’s logic, leading to compilation errors.
            </li>
          </ul>
        </section>

        {/* Section 5: Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Tips for Working with Keywords</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-green-300">Memorize Common Keywords:</strong> Focus on frequently used keywords like <code>public</code>, <code>static</code>, and <code>void</code>.
            </li>
            <li>
              <strong className="text-green-300">Avoid Keyword Conflicts:</strong> Always double-check that your identifiers don’t clash with reserved keywords.
            </li>
            <li>
              <strong className="text-green-300">Practice Syntax:</strong> Write small programs to reinforce keyword usage and understand their purpose.
            </li>
          </ul>
        </section>

        {/* Section 6: Pro Tips */}
        <section className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              <strong className="text-blue-300">Use IDE Features:</strong> Modern IDEs highlight keywords in your code, making it easier to identify mistakes.
            </li>
            <li>
              <strong className="text-blue-300">Focus on Context:</strong> Understand where and why specific keywords are used (e.g., <code>static</code> for class-level properties).
            </li>
            <li>
              <strong className="text-blue-300">Read Java Documentation:</strong> Familiarize yourself with official keyword documentation for deeper understanding.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Keywords;