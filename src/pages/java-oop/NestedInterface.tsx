import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const NestedInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Nested Interfaces in Java
              </h1>
              <p className="text-gray-300">
                A nested interface is an interface declared within another interface or class. It helps in grouping related interfaces together and provides better encapsulation.
              </p>
            </div>

            {/* Interface within Interface */}
            <MethodCard
              title="Interface within Interface"
              description="Declaring an interface inside another interface"
            >
              <CodeBlock
                code={`public interface OuterInterface {
    void outerMethod();
    
    // Nested interface
    interface InnerInterface {
        void innerMethod();
    }
}

// Implementing both interfaces
class MyClass implements OuterInterface, OuterInterface.InnerInterface {
    @Override
    public void outerMethod() {
        System.out.println("Outer method implementation");
    }
    
    @Override
    public void innerMethod() {
        System.out.println("Inner method implementation");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Interface within Class */}
            <MethodCard
              title="Interface within Class"
              description="Declaring an interface inside a class"
            >
              <CodeBlock
                code={`public class OuterClass {
    // Static nested interface
    public static interface Processor {
        void process(String data);
    }
    
    // Non-static nested interface
    public interface Logger {
        void log(String message);
    }
}

// Implementing class-nested interface
class DataProcessor implements OuterClass.Processor {
    @Override
    public void process(String data) {
        System.out.println("Processing: " + data);
    }
}

// Class implementing non-static nested interface
class ConsoleLogger implements OuterClass.Logger {
    @Override
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Access and Scope */}
            <MethodCard
              title="Access and Scope"
              description="Access modifiers and scope rules for nested interfaces"
            >
              <CodeBlock
                code={`public class Container {
    // Private nested interface
    private interface Sortable {
        void sort();
    }
    
    // Protected nested interface
    protected interface Filterable {
        void filter();
    }
    
    // Implementation within containing class
    private class Sorter implements Sortable {
        @Override
        public void sort() {
            System.out.println("Sorting...");
        }
    }
    
    // Method using private nested interface
    public void performSort() {
        Sortable sorter = new Sorter();
        sorter.sort();
    }
}`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong access modifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overcomplicating nesting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring static keyword</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor encapsulation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary nesting</span>
                </li>
              </ul>
            </div>

            {/* Best Practices Section */}
            <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-200">
                Best Practices
              </h2>
              <ul className="space-y-3 text-green-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use static when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep nesting shallow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Group related interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document relationships</span>
                </li>
              </ul>
            </div>

            {/* Pro Tips Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Pro Tips
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use for implementation details</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider inner classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage encapsulation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use builder pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Create type hierarchies</span>
                </li>
              </ul>
            </div>

            {/* Key Concepts Section */}
            <div className="bg-purple-900/20 border border-purple-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-200">
                Key Concepts
              </h2>
              <ul className="space-y-3 text-purple-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Static vs Non-static</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access modifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Scope rules</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Encapsulation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Interface hierarchy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedInterface; 