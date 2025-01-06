import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const VectorClass: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Vector Class in Java
              </h1>
              <p className="text-gray-300">
                Vector is a legacy synchronized implementation of a dynamic array. It is similar to ArrayList but with thread-safe operations, making it useful for multi-threaded applications where synchronization is required.
              </p>
            </div>

            {/* Creating Vector */}
            <MethodCard
              title="Creating Vector"
              description="Different ways to initialize Vector"
            >
              <CodeBlock
                code={`// Empty Vector
Vector<String> vector1 = new Vector<>();

// Vector with initial capacity
Vector<Integer> vector2 = new Vector<>(20);

// Vector with capacity and increment
Vector<Double> vector3 = new Vector<>(10, 5);
// Initial capacity 10, increases by 5 when full

// Vector from Collection
List<String> list = Arrays.asList("A", "B", "C");
Vector<String> vector4 = new Vector<>(list);

// Using addElement (legacy method)
Vector<String> vector5 = new Vector<>();
vector5.addElement("First");
vector5.addElement("Second");

// Type inference
Vector<Map.Entry<String, Integer>> vector6 = new Vector<>();`}
                language="java"
              />
            </MethodCard>

            {/* Vector Operations */}
            <MethodCard
              title="Vector Operations"
              description="Common Vector operations and synchronization"
            >
              <CodeBlock
                code={`Vector<String> vector = new Vector<>();

// Adding elements (synchronized)
vector.add("First");                // Append
vector.add(0, "Zero");             // Insert at index
vector.addElement("Last");         // Legacy method
vector.addAll(Arrays.asList("A", "B")); // Add collection

// Accessing elements (synchronized)
String element = vector.get(0);     // Modern method
String elem = vector.elementAt(1);  // Legacy method
vector.set(1, "New Value");        // Modern method
vector.setElementAt("Value", 2);    // Legacy method

// Removing elements (synchronized)
vector.remove(0);                  // Remove by index
vector.remove("A");                // Remove object
vector.removeElement("B");         // Legacy method
vector.removeElementAt(1);         // Legacy method
vector.clear();                    // Remove all

// Capacity operations
vector.setSize(20);               // Set size
vector.ensureCapacity(100);       // Increase capacity
vector.trimToSize();              // Trim unused space

// Thread-safe enumeration
Enumeration<String> elements = vector.elements();
while (elements.hasMoreElements()) {
    System.out.println(elements.nextElement());
}`}
                language="java"
              />
            </MethodCard>

            {/* Vector vs ArrayList */}
            <MethodCard
              title="Vector vs ArrayList"
              description="Comparing Vector with ArrayList"
            >
              <CodeBlock
                code={`// Vector (synchronized)
Vector<Integer> vector = new Vector<>();
synchronized(vector) {
    vector.add(1);
    vector.add(2);
    vector.remove(0);
}

// ArrayList (not synchronized)
ArrayList<Integer> arrayList = new ArrayList<>();
List<Integer> syncList = Collections.synchronizedList(arrayList);
synchronized(syncList) {
    syncList.add(1);
    syncList.add(2);
    syncList.remove(0);
}

// Performance comparison
long start = System.nanoTime();
for(int i = 0; i < 1000000; i++) {
    vector.add(i);
}
long vectorTime = System.nanoTime() - start;

start = System.nanoTime();
for(int i = 0; i < 1000000; i++) {
    arrayList.add(i);
}
long arrayListTime = System.nanoTime() - start;

// Vector is typically slower due to synchronization overhead`}
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
                  <span>Using Vector by default</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mixing legacy methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance overhead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inconsistent iteration</span>
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
                  <span>Use ArrayList when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use modern methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proper capacity planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety awareness</span>
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
                  <span>Use concurrent collections</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimize synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider growth increment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use modern alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Profile performance</span>
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
                  <span>Thread safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legacy methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Growth behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VectorClass; 