import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const LinkedHashMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                LinkedHashMap in Java
              </h1>
              <p className="text-gray-300">
                LinkedHashMap is a HashMap implementation that maintains insertion order of elements. It extends HashMap and implements the Map interface, providing predictable iteration order while maintaining the O(1) performance of HashMap operations.
              </p>
            </div>

            {/* Creating LinkedHashMap */}
            <MethodCard
              title="Creating LinkedHashMap"
              description="Different ways to initialize LinkedHashMap"
            >
              <CodeBlock
                code={`// Default constructor (insertion-order)
LinkedHashMap<String, Integer> map1 = new LinkedHashMap<>();

// With initial capacity
LinkedHashMap<String, Integer> map2 = new LinkedHashMap<>(32);

// With capacity and load factor
LinkedHashMap<String, Integer> map3 = new LinkedHashMap<>(32, 0.75f);

// With access-order (LRU cache)
LinkedHashMap<String, Integer> map4 = new LinkedHashMap<>(16, 0.75f, true);

// From another Map
Map<String, Integer> source = Map.of("One", 1, "Two", 2);
LinkedHashMap<String, Integer> map5 = new LinkedHashMap<>(source);

// LRU cache implementation
class LRUCache<K,V> extends LinkedHashMap<K,V> {
    private final int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K,V> eldest) {
        return size() > capacity;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* LinkedHashMap Operations */}
            <MethodCard
              title="LinkedHashMap Operations"
              description="Common operations with LinkedHashMap"
            >
              <CodeBlock
                code={`LinkedHashMap<String, Integer> map = new LinkedHashMap<>();

// Adding entries (maintains order)
map.put("First", 1);
map.put("Second", 2);
map.put("Third", 3);

// Accessing entries (affects order in access-order mode)
Integer value = map.get("Second");
value = map.getOrDefault("Fourth", 0);

// Iteration (predictable order)
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Removing entries
map.remove("Second");
map.remove("First", 1);

// Bulk operations
map.putAll(otherMap);  // Maintains order of otherMap
map.clear();

// Access-order example
LinkedHashMap<String, Integer> accessMap = 
    new LinkedHashMap<>(16, 0.75f, true);
accessMap.put("A", 1);
accessMap.put("B", 2);
accessMap.put("C", 3);
accessMap.get("A");  // Moves "A" to the end
// Iteration order: B, C, A`}
                language="java"
              />
            </MethodCard>

            {/* Use Cases */}
            <MethodCard
              title="Common Use Cases"
              description="Typical applications of LinkedHashMap"
            >
              <CodeBlock
                code={`// LRU Cache Implementation
class LRUCache<K,V> extends LinkedHashMap<K,V> {
    private final int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K,V> eldest) {
        return size() > capacity;
    }
}

// Using as Cache
LRUCache<String, String> cache = new LRUCache<>(3);
cache.put("A", "Value A");
cache.put("B", "Value B");
cache.put("C", "Value C");
cache.get("A");  // Moves A to end
cache.put("D", "Value D");  // Removes B (least recently used)

// Order-sensitive operations
LinkedHashMap<String, Integer> orderMap = new LinkedHashMap<>();
orderMap.put("Step 1", 1);
orderMap.put("Step 2", 2);
orderMap.put("Step 3", 3);

// Processing in specific order
orderMap.forEach((step, value) -> 
    System.out.println("Executing " + step)
);`}
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
                  <span>Ignoring access-order</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory overhead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong capacity planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable keys</span>
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
                  <span>Choose correct ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan capacity properly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider memory usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use for specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle thread safety</span>
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
                  <span>LRU cache implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom eviction policies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ordered processing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory optimization</span>
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
                  <span>Insertion order</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access order</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Double-linked list</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hash table structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Entry removal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedHashMap; 