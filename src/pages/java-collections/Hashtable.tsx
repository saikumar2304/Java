import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Hashtable: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Hashtable in Java
              </h1>
              <p className="text-gray-300">
                Hashtable is a legacy thread-safe implementation of the Map interface. While still supported, it's generally recommended to use ConcurrentHashMap for new code that needs thread-safe map operations. Unlike HashMap, Hashtable doesn't allow null keys or values.
              </p>
            </div>

            {/* Creating Hashtable */}
            <MethodCard
              title="Creating Hashtable"
              description="Different ways to initialize Hashtable"
            >
              <CodeBlock
                code={`// Default constructor
Hashtable<String, Integer> table1 = new Hashtable<>();

// With initial capacity
Hashtable<String, Integer> table2 = new Hashtable<>(32);

// With capacity and load factor
Hashtable<String, Integer> table3 = new Hashtable<>(32, 0.75f);

// From another Map
Map<String, Integer> source = Map.of("One", 1, "Two", 2);
Hashtable<String, Integer> table4 = new Hashtable<>(source);

// Thread-safe alternatives
// ConcurrentHashMap (preferred)
ConcurrentHashMap<String, Integer> concurrent = new ConcurrentHashMap<>();

// Synchronized HashMap
Map<String, Integer> syncMap = Collections.synchronizedMap(new HashMap<>());`}
                language="java"
              />
            </MethodCard>

            {/* Hashtable Operations */}
            <MethodCard
              title="Hashtable Operations"
              description="Common operations with Hashtable"
            >
              <CodeBlock
                code={`Hashtable<String, Integer> table = new Hashtable<>();

// Adding entries (thread-safe)
table.put("One", 1);        // Throws NPE if key/value is null
table.putAll(sourceMap);    // Add all from another map

// Accessing entries
Integer value = table.get("One");    // Returns null if not found
value = table.getOrDefault("Two", 0); // With default value

// Checking contents
boolean hasKey = table.containsKey("One");
boolean hasValue = table.contains(1); // Legacy method
boolean isEmpty = table.isEmpty();
int size = table.size();

// Removing entries
table.remove("One");        // Remove by key
table.clear();             // Remove all entries

// Thread-safe enumeration
Enumeration<String> keys = table.keys();
while (keys.hasMoreElements()) {
    String key = keys.nextElement();
    System.out.println(key + ": " + table.get(key));
}

// Modern iteration (not recommended during concurrent access)
for (Map.Entry<String, Integer> entry : table.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`}
                language="java"
              />
            </MethodCard>

            {/* Comparison with Modern Alternatives */}
            <MethodCard
              title="Modern Alternatives"
              description="Comparing Hashtable with modern alternatives"
            >
              <CodeBlock
                code={`// Hashtable (legacy)
Hashtable<String, Integer> hashtable = new Hashtable<>();
// Thread-safe but coarse-grained locking
// No null keys/values
// All methods synchronized

// ConcurrentHashMap (modern)
ConcurrentHashMap<String, Integer> concurrent = new ConcurrentHashMap<>();
// Better concurrency with segment locking
// Allows null values (not keys)
// Better performance

// Performance comparison
long start = System.nanoTime();
for (int i = 0; i < 1000000; i++) {
    hashtable.put("Key" + i, i);
}
long hashtableTime = System.nanoTime() - start;

start = System.nanoTime();
for (int i = 0; i < 1000000; i++) {
    concurrent.put("Key" + i, i);
}
long concurrentTime = System.nanoTime() - start;

// Thread-safe operations
concurrent.putIfAbsent("Key", 1);
concurrent.replace("Key", 1, 2);
concurrent.merge("Key", 1, Integer::sum);

// Atomic operations
concurrent.computeIfAbsent("Key", k -> 1);
concurrent.computeIfPresent("Key", (k, v) -> v + 1);`}
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
                  <span>Using in new code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Null key/value usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance bottlenecks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legacy method usage</span>
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
                  <span>Use ConcurrentHashMap</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null properly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modern iteration</span>
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
                  <span>Concurrent operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legacy code migration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modern alternatives</span>
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
                  <span>Legacy support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Null handling</span>
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

export default Hashtable; 