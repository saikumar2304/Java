import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ConcurrentHashMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                ConcurrentHashMap in Java
              </h1>
              <p className="text-gray-300">
                ConcurrentHashMap is a thread-safe implementation of the Map interface designed for concurrent access from multiple threads. It provides better concurrency than Hashtable by using a lock striping mechanism that allows concurrent reads and a configurable number of concurrent writes.
              </p>
            </div>

            {/* Creating ConcurrentHashMap */}
            <MethodCard
              title="Creating ConcurrentHashMap"
              description="Different ways to initialize ConcurrentHashMap"
            >
              <CodeBlock
                code={`// Default constructor
ConcurrentHashMap<String, Integer> map1 = new ConcurrentHashMap<>();

// With initial capacity
ConcurrentHashMap<String, Integer> map2 = new ConcurrentHashMap<>(32);

// With capacity and load factor
ConcurrentHashMap<String, Integer> map3 = 
    new ConcurrentHashMap<>(32, 0.75f);

// With capacity, load factor, and concurrency level
ConcurrentHashMap<String, Integer> map4 = 
    new ConcurrentHashMap<>(32, 0.75f, 16);

// From another Map
Map<String, Integer> source = Map.of("One", 1, "Two", 2);
ConcurrentHashMap<String, Integer> map5 = new ConcurrentHashMap<>(source);`}
                language="java"
              />
            </MethodCard>

            {/* Atomic Operations */}
            <MethodCard
              title="Atomic Operations"
              description="Thread-safe atomic operations"
            >
              <CodeBlock
                code={`ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

// Atomic put if absent
map.putIfAbsent("key", 1);

// Atomic replace
map.replace("key", 1, 2);

// Atomic compute
map.compute("key", (k, v) -> v == null ? 1 : v + 1);

// Atomic compute if absent
map.computeIfAbsent("key", k -> 1);

// Atomic compute if present
map.computeIfPresent("key", (k, v) -> v + 1);

// Atomic merge
map.merge("key", 1, Integer::sum);

// Atomic remove
map.remove("key", 1);

// Bulk atomic operations
map.forEach(1, (k, v) -> System.out.println(k + "=" + v));
map.forEach((k, v) -> v += 1);

// Search operations
String key = map.search(1, (k, v) -> v > 10 ? k : null);
Integer value = map.searchValues(1, v -> v > 10 ? v : null);

// Reduce operations
Integer sum = map.reduce(1, 
    (k, v) -> v, 
    Integer::sum
);`}
                language="java"
              />
            </MethodCard>

            {/* Concurrent Operations */}
            <MethodCard
              title="Concurrent Operations"
              description="Handling concurrent scenarios"
            >
              <CodeBlock
                code={`ConcurrentHashMap<String, AtomicInteger> counters = 
    new ConcurrentHashMap<>();

// Thread-safe counter increment
counters.computeIfAbsent("counter", k -> new AtomicInteger())
        .incrementAndGet();

// Concurrent iteration
for (Map.Entry<String, AtomicInteger> entry : counters.entrySet()) {
    // Safe for concurrent modification
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Bulk parallel operations
counters.forEach(64, (k, v) -> 
    System.out.println(k + "=" + v)
);

// Concurrent updates
counters.forEachKey(64, key ->
    counters.computeIfPresent(key, (k, v) -> 
        new AtomicInteger(v.get() + 1))
);

// Size operations
int size = counters.size();
boolean isEmpty = counters.isEmpty();
int mappingCount = counters.mappingCount(); // Preferred for concurrent use

// Concurrent contains operations
boolean hasKey = counters.containsKey("counter");
boolean hasValue = counters.containsValue(new AtomicInteger(1));`}
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
                  <span>Non-atomic compound actions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Null key/value usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Size-based assumptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Iterator consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lock expectations</span>
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
                  <span>Use atomic operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proper sizing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Avoid external locking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use mappingCount()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider parallelism</span>
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
                  <span>Bulk operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Search methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reduce operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parallelism threshold</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory consistency</span>
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
                  <span>Lock striping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Atomic operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent retrieval</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Weak consistency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcurrentHashMap; 