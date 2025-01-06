import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const VariableScope: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Variable Scope in Java</h1>
      
      <div className="space-y-6">
        {/* Introduction Section */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What is Variable Scope?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">
                Variable scope determines where variables can be accessed or modified in a program.
                The scope of a variable depends on where it is declared.
              </p>
              <div className="bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold mb-2">Types of Scope</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Class/Instance Scope</strong></li>
                  <li>• <strong>Method/Local Scope</strong></li>
                  <li>• <strong>Block Scope</strong></li>
                  <li>• <strong>Loop Scope</strong></li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">Basic Example</h3>
              <CodeBlock 
                code={`public class Example {
    int classVar = 10;     // class scope
    
    void method() {
        int localVar = 20; // method scope
        
        if (true) {
            int blockVar = 30; // block scope
        }
        // blockVar not accessible here
    }
    // localVar not accessible here
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Class/Instance Scope */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Class/Instance Scope</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Characteristics</h3>
              <ul className="text-sm space-y-2">
                <li>• Declared inside class but outside methods</li>
                <li>• Accessible throughout the class</li>
                <li>• Has default values if not initialized</li>
                <li>• Lives as long as object exists</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Example</h3>
              <CodeBlock 
                code={`public class Student {
    private String name;    // class scope
    private int age;       // class scope
    
    public void setName(String name) {
        this.name = name;  // accessible here
    }
    
    public void study() {
        System.out.println(name + " is studying");
        // name is accessible here too
    }
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Method Scope */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Method/Local Scope</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Key Points</h3>
              <ul className="text-sm space-y-2">
                <li>• Declared inside methods</li>
                <li>• Must be initialized before use</li>
                <li>• Only accessible within declaring method</li>
                <li>• Destroyed when method completes</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-2">Example</h3>
              <CodeBlock 
                code={`public void calculateArea() {
    int width = 10;   // method scope
    int height = 20;  // method scope
    int area = width * height;
    
    if (area > 100) {
        int excess = area - 100;
        // excess only accessible in this block
    }
    // excess not accessible here
}`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Block Scope */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Block Scope</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Common Block Types</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>if/else blocks</strong></li>
                <li>• <strong>loop blocks</strong></li>
                <li>• <strong>try/catch blocks</strong></li>
                <li>• <strong>anonymous blocks</strong></li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-red-400 mb-2">Scope Examples</h3>
              <CodeBlock 
                code={`if (condition) {
    int x = 10;  // block scope
    // x only accessible here
}
// x not accessible here

for (int i = 0; i < 5; i++) {
    int temp = i * 2;  // block scope
    // temp only accessible in loop
}
// temp not accessible here`}
                language="java"
              />
            </div>
          </div>
        </section>

        {/* Scope Rules */}
        <section className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Scope Rules</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-900/20 p-3 rounded-lg">
              <h3 className="font-semibold mb-2">Important Rules</h3>
              <ul className="text-sm space-y-2">
                <li>• Inner scopes can access outer scope variables</li>
                <li>• Outer scopes cannot access inner scope variables</li>
                <li>• Same-name variables shadow outer scope variables</li>
                <li>• Local variables hide instance variables with same name</li>
              </ul>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Variable Shadowing</h3>
              <CodeBlock 
                code={`public class Example {
    private int x = 10;  // class scope
    
    public void method() {
        int x = 20;     // method scope
        System.out.println(x);     // prints 20
        System.out.println(this.x); // prints 10
        
        {
            int y = 30;  // block scope
            System.out.println(x); // prints 20
        }
        // y not accessible here
    }
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

export default VariableScope;
