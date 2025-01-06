import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const InterfacesInheritance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Interfaces and Inheritance in Java
              </h1>
              <p className="text-gray-300">
                Java interfaces can extend other interfaces, and classes can implement multiple interfaces. This provides a way to achieve multiple inheritance of type while avoiding the complications of multiple inheritance of implementation.
              </p>
            </div>

            {/* Interface Inheritance Section */}
            <MethodCard
              title="Interface Inheritance"
              description="Interfaces extending other interfaces"
            >
              <CodeBlock
                code={`interface Drawable {
    void draw();
}

interface Colorable {
    void setColor(String color);
}

// Interface extending multiple interfaces
interface Shape extends Drawable, Colorable {
    double getArea();
}

// Class implementing the Shape interface
class Circle implements Shape {
    private String color;
    private double radius;
    
    @Override
    public void draw() {
        System.out.println("Drawing " + color + " circle");
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Multiple Implementation Section */}
            <MethodCard
              title="Multiple Interface Implementation"
              description="Classes implementing multiple interfaces"
            >
              <CodeBlock
                code={`interface Playable {
    void play();
}

interface Recordable {
    void record();
}

interface Streamable {
    void stream();
}

// Class implementing multiple interfaces
class MediaPlayer implements Playable, Recordable, Streamable {
    @Override
    public void play() {
        System.out.println("Playing media");
    }
    
    @Override
    public void record() {
        System.out.println("Recording media");
    }
    
    @Override
    public void stream() {
        System.out.println("Streaming media");
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Default Methods Section */}
            <MethodCard
              title="Default Methods in Interface Inheritance"
              description="Handling default method inheritance"
            >
              <CodeBlock
                code={`interface Vehicle {
    default void start() {
        System.out.println("Vehicle starting");
    }
}

interface Electric {
    default void start() {
        System.out.println("Electric system starting");
    }
}

class ElectricCar implements Vehicle, Electric {
    // Must override start() due to conflict
    @Override
    public void start() {
        // Choose which default implementation to use
        Vehicle.super.start();
        Electric.super.start();
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
                  <span>Forgetting to implement methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Default method conflicts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Circular interface dependencies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access modifier issues</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overcomplicating hierarchies</span>
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
                  <span>Keep interfaces focused</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use interface segregation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan inheritance hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document default methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider composition</span>
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
                  <span>Use default methods wisely</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage static methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider private methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use sealed interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implement marker interfaces</span>
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
                  <span>Multiple inheritance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Default methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Interface extension</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type inheritance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterfacesInheritance; 