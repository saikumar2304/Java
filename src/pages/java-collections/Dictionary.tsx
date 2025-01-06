import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const DictionaryClass: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Dictionary in Java
              </h1>
              <p className="text-gray-300">
                Dictionary is an abstract class that represents a key-value mapping. While it's now considered legacy and has been largely superseded by Map, understanding it is important for maintaining legacy code and understanding Java's collection history.
              </p>
            </div>

            {/* Dictionary Overview */}
            <MethodCard
              title="Dictionary Overview"
              description="Basic concepts and methods of Dictionary"
            >
              <CodeBlock
                code={`// Dictionary is abstract, Hashtable is a concrete implementation
Dictionary<String, Integer> dict = new Hashtable<>();

// Basic operations
dict.put("One", 1);
dict.put("Two", 2);

Integer value = dict.get("One");    // Returns 1
dict.remove("Two");                 // Removes entry

// Size operations
int size = dict.size();
boolean isEmpty = dict.isEmpty();

// Views
Enumeration<String> keys = dict.keys();
Enumeration<Integer> elements = dict.elements();

// Note: Dictionary is legacy, prefer Map interface
Map<String, Integer> modernMap = new HashMap<>();`}
                language="java"
              />
            </MethodCard>

            {/* Legacy Code Examples */}
            <MethodCard
              title="Legacy Code Examples"
              description="Working with legacy Dictionary code"
            >
              <CodeBlock
                code={`// Legacy code pattern
class LegacySystem {
    private Dictionary<String, Object> data;
    
    public LegacySystem() {
        data = new Hashtable<>();  // Concrete implementation
    }
    
    public void store(String key, Object value) {
        data.put(key, value);
    }
    
    public Object retrieve(String key) {
        return data.get(key);
    }
    
    // Enumeration-based iteration
    public void printAll() {
        Enumeration<String> keys = data.keys();
        while (keys.hasMoreElements()) {
            String key = keys.nextElement();
            System.out.println(key + ": " + data.get(key));
        }
    }
}

// Modern equivalent
class ModernSystem {
    private Map<String, Object> data;
    
    public ModernSystem() {
        data = new HashMap<>();  // Or ConcurrentHashMap for thread safety
    }
    
    public void store(String key, Object value) {
        data.put(key, value);
    }
    
    public Object retrieve(String key) {
        return data.get(key);
    }
    
    // Modern iteration
    public void printAll() {
        data.forEach((key, value) -> 
            System.out.println(key + ": " + value)
        );
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Migration Examples */}
            <MethodCard
              title="Migration Examples"
              description="Migrating from Dictionary to Map"
            >
              <CodeBlock
                code={`// Legacy Dictionary-based code
class LegacyCache {
    private Dictionary<String, Object> cache;
    
    public LegacyCache() {
        cache = new Hashtable<>();
    }
    
    // Legacy methods...
}

// Modern Map-based replacement
class ModernCache {
    private Map<String, Object> cache;
    
    public ModernCache() {
        cache = new ConcurrentHashMap<>();
    }
    
    // Modern features
    public Object computeIfAbsent(String key, Function<String, Object> mappingFunction) {
        return cache.computeIfAbsent(key, mappingFunction);
    }
    
    public void putIfAbsent(String key, Object value) {
        cache.putIfAbsent(key, value);
    }
    
    public Object getOrDefault(String key, Object defaultValue) {
        return cache.getOrDefault(key, defaultValue);
    }
    
    // Stream operations
    public List<Object> getValuesByPrefix(String prefix) {
        return cache.entrySet().stream()
            .filter(e -> e.getKey().startsWith(prefix))
            .map(Map.Entry::getValue)
            .collect(Collectors.toList());
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
                  <span>Using in new code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing type safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enumeration limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Synchronization overhead</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legacy patterns</span>
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
                  <span>Use Map interface</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan migration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider concurrency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document legacy code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Test thoroughly</span>
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
                  <span>Modernization patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legacy integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Migration strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Code maintenance</span>
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
                  <span>Abstract class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legacy support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Key-value mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enumeration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictionaryClass; 