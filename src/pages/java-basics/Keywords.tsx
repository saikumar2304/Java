import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Keywords: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Java Keywords</h1>
      
      <div className="space-y-6">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What are Keywords?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Keywords are reserved words that have special meaning in Java. These words cannot be used as identifiers
                (names for variables, classes, methods, etc.) because they are part of Java's syntax.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Key Points</h3>
                <ul className="text-sm space-y-2">
                  <li>• Reserved for specific purposes</li>
                  <li>• Cannot be used as identifiers</li>
                  <li>• All keywords are lowercase</li>
                  <li>• Total of 50+ keywords</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-red-400 mb-2">Common Mistakes</h3>
              <CodeBlock 
                code={`// These will cause errors
class class { }        // class is a keyword
int public = 5;        // public is a keyword
void static() { }      // static is a keyword
boolean new = true;    // new is a keyword`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Keyword Categories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Access Modifiers</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/50 p-2 rounded text-sm">public</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">private</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">protected</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">default</div>
                </div>
              </div>
              <div className="bg-green-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Class-related</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/50 p-2 rounded text-sm">class</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">interface</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">extends</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">implements</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">enum</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Control Flow</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/50 p-2 rounded text-sm">if</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">else</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">switch</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">case</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">break</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">continue</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">return</div>
                </div>
              </div>
              <div className="bg-yellow-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Loops</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/50 p-2 rounded text-sm">for</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">while</div>
                  <div className="bg-gray-700/50 p-2 rounded text-sm">do</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Keyword Usage Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Class and Method Declaration</h3>
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
              <h3 className="font-semibold text-green-400 mb-2">Control Flow and Loops</h3>
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
      </div>
    </div>
  );
};

export default Keywords; 