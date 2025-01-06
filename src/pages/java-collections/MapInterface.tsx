import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const MapInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Map Interface in Java
              </h1>
              <p className="text-gray-300">
                The Map interface represents a collection of key-value pairs where each key can map to at most one value. It doesn't extend Collection interface but is part of the Collections Framework. Maps cannot contain duplicate keys and each key can map to at most one value.
              </p>
            </div>

            {/* Basic Map Operations */}
            <MethodCard
              title="Basic Map Operations"
              description="Core methods of the Map interface"
            >
              <CodeBlock
                code={`Map<String, Integer> map = new HashMap<>();

// Adding entries
map.put("One", 1);           // Add or update entry
map.putIfAbsent("Two", 2);   // Add only if key doesn't exist

// Accessing entries
Integer value = map.get("One");     // Get value (null if not found)
Integer def = map.getOrDefault("Three", 0); // Get with default

// Removing entries
map.remove("Two");                  // Remove by key
map.remove("One", 1);              // Remove if key maps to value

// Checking contents
boolean hasKey = map.containsKey("One");
boolean hasValue = map.containsValue(1);
boolean isEmpty = map.isEmpty();
int size = map.size();

// Updating entries
map.replace("One", 10);            // Replace existing value
map.replace("One", 1, 10);         // Replace if matches old value

// Bulk operations
map.clear();                       // Remove all entries
map.putAll(otherMap);             // Copy all from another map`}
                language="java"
              />
            </MethodCard>

            {/* Map Views */}
            <MethodCard
              title="Map Views"
              description="Different views of a Map"
            >
              <CodeBlock
                code={`Map<String, Integer> map = new HashMap<>();
map.put("One", 1);
map.put("Two", 2);
map.put("Three", 3);

// Key Set view
Set<String> keys = map.keySet();
for (String key : keys) {
    System.out.println(key);
}

// Values Collection view
Collection<Integer> values = map.values();
for (Integer value : values) {
    System.out.println(value);
}

// Entry Set view
Set<Map.Entry<String, Integer>> entries = map.entrySet();
for (Map.Entry<String, Integer> entry : entries) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Stream operations
map.forEach((k, v) -> System.out.println(k + ": " + v));

map.entrySet().stream()
   .filter(e -> e.getValue() > 1)
   .forEach(e -> System.out.println(e.getKey()));`}
                language="java"
              />
            </MethodCard>

            {/* Map Implementations */}
            <MethodCard
              title="Map Implementations"
              description="Different Map implementations and their characteristics"
            >
              <CodeBlock
                code={`// HashMap - Most common implementation
Map<String, Integer> hashMap = new HashMap<>();
// O(1) operations, no order guarantee

// TreeMap - Sorted map
Map<String, Integer> treeMap = new TreeMap<>();
// O(log n) operations, sorted by natural order

// LinkedHashMap - Ordered map
Map<String, Integer> linkedMap = new LinkedHashMap<>();
// O(1) operations, maintains insertion order

// Concurrent maps
Map<String, Integer> concurrentMap = new ConcurrentHashMap<>();
// Thread-safe operations

// Immutable maps
Map<String, Integer> immutableMap = Map.of(
    "One", 1,
    "Two", 2,
    "Three", 3
);

// Access order LinkedHashMap (LRU cache)
Map<String, Integer> lruCache = new LinkedHashMap<>(16, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry<String, Integer> eldest) {
        return size() > 100; // Cache size
    }
};`}
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
                  <span>Wrong implementation choice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing equals/hashCode</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Null key/value handling</span>
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
                  <span>Choose right implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Immutable keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initial capacity planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety consideration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use factory methods</span>
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
                  <span>Use computeIfAbsent</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage Map views</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Stream operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance tuning</span>
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
                  <span>Key-value mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Map views</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementation types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ordering guarantees</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapInterface; 