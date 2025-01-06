import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const WeakHashMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                WeakHashMap in Java
              </h1>
              <p className="text-gray-300">
                WeakHashMap is a special Map implementation where the keys are held using weak references. This means that when a key is no longer referenced elsewhere in the application, it becomes eligible for garbage collection, and its entry will be automatically removed from the map.
              </p>
            </div>

            {/* Creating WeakHashMap */}
            <MethodCard
              title="Creating WeakHashMap"
              description="Different ways to initialize WeakHashMap"
            >
              <CodeBlock
                code={`// Default constructor
WeakHashMap<Key, String> map1 = new WeakHashMap<>();

// With initial capacity
WeakHashMap<Key, String> map2 = new WeakHashMap<>(32);

// With capacity and load factor
WeakHashMap<Key, String> map3 = new WeakHashMap<>(32, 0.75f);

// From another Map
Map<Key, String> source = new HashMap<>();
WeakHashMap<Key, String> map4 = new WeakHashMap<>(source);

// Note: Keys must be objects, primitives are not allowed
WeakHashMap<Integer, String> map5 = new WeakHashMap<>();  // Integer, not int
map5.put(Integer.valueOf(1), "One");  // Boxed integer as key`}
                language="java"
              />
            </MethodCard>

            {/* Memory Management */}
            <MethodCard
              title="Memory Management"
              description="Understanding weak references and garbage collection"
            >
              <CodeBlock
                code={`class DataKey {
    private String id;
    public DataKey(String id) { this.id = id; }
}

// Example of weak reference behavior
WeakHashMap<DataKey, String> cache = new WeakHashMap<>();

void cacheExample() {
    // Create key object
    DataKey key = new DataKey("123");
    
    // Add to cache
    cache.put(key, "Cached Data");
    
    System.out.println("Cache size: " + cache.size());  // Size is 1
    
    // Remove strong reference to key
    key = null;
    
    // Suggest garbage collection (for demonstration)
    System.gc();
    
    // After GC, entry may be removed
    System.out.println("Cache size: " + cache.size());  // Size might be 0
}

// Cache implementation with WeakHashMap
class Cache<K, V> {
    private final WeakHashMap<K, V> cache = new WeakHashMap<>();
    
    public V get(K key) {
        V value = cache.get(key);
        if (value == null) {
            value = computeValue(key);
            cache.put(key, value);
        }
        return value;
    }
    
    private V computeValue(K key) {
        // Expensive computation here
        return null;
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Common Use Cases */}
            <MethodCard
              title="Common Use Cases"
              description="Typical applications of WeakHashMap"
            >
              <CodeBlock
                code={`// Caching with automatic cleanup
class ResourceCache {
    private final WeakHashMap<Object, Resource> cache = 
        new WeakHashMap<>();
    
    public Resource getResource(Object key) {
        Resource resource = cache.get(key);
        if (resource == null) {
            resource = loadResource(key);
            cache.put(key, resource);
        }
        return resource;
    }
    
    private Resource loadResource(Object key) {
        // Load resource from disk/network
        return new Resource();
    }
}

// Listener management
class EventManager {
    private final WeakHashMap<Object, List<EventListener>> listeners = 
        new WeakHashMap<>();
    
    public void addEventListener(Object source, EventListener listener) {
        List<EventListener> list = listeners.computeIfAbsent(
            source, k -> new ArrayList<>()
        );
        list.add(listener);
    }
    
    public void fireEvent(Object source, Event event) {
        List<EventListener> list = listeners.get(source);
        if (list != null) {
            for (EventListener listener : list) {
                listener.onEvent(event);
            }
        }
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
                  <span>Strong key references</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Primitive key usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Size assumptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Iterator reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory leak assumptions</span>
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
                  <span>Use for caching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proper key management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Monitor memory usage</span>
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
                  <span>Cache implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Resource management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>GC interaction</span>
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
                  <span>Weak references</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Garbage collection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reference types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automatic cleanup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeakHashMap; 