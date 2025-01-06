import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const IdentityHashMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                IdentityHashMap in Java
              </h1>
              <p className="text-gray-300">
                IdentityHashMap is a special Map implementation that uses reference equality (==) instead of object equality (equals()) when comparing keys and values. This makes it useful for topology-preserving object graph transformations, like serialization or deep-copying.
              </p>
            </div>

            {/* Creating IdentityHashMap */}
            <MethodCard
              title="Creating IdentityHashMap"
              description="Different ways to initialize IdentityHashMap"
            >
              <CodeBlock
                code={`// Default constructor
IdentityHashMap<String, Integer> map1 = new IdentityHashMap<>();

// With expected maximum size
IdentityHashMap<String, Integer> map2 = new IdentityHashMap<>(32);

// From another Map
Map<String, Integer> source = new HashMap<>();
IdentityHashMap<String, Integer> map3 = new IdentityHashMap<>(source);

// Reference equality demonstration
String key1 = new String("key");
String key2 = new String("key");
IdentityHashMap<String, String> map = new IdentityHashMap<>();

map.put(key1, "value1");
map.put(key2, "value2");

System.out.println(map.size());  // Prints 2 because key1 != key2
System.out.println(key1.equals(key2));  // true
System.out.println(key1 == key2);       // false`}
                language="java"
              />
            </MethodCard>

            {/* Use Cases */}
            <MethodCard
              title="Use Cases"
              description="Common applications of IdentityHashMap"
            >
              <CodeBlock
                code={`// Object graph traversal
class ObjectGraphTraverser {
    private IdentityHashMap<Object, Object> visited = 
        new IdentityHashMap<>();
    
    public void traverse(Object obj) {
        if (obj == null || visited.containsKey(obj)) {
            return;  // Already visited this object
        }
        
        visited.put(obj, null);  // Mark as visited
        // Process object...
        
        // Traverse fields recursively
        for (Field field : obj.getClass().getDeclaredFields()) {
            traverse(field.get(obj));
        }
    }
}

// Deep copy implementation
class DeepCopier {
    private IdentityHashMap<Object, Object> copies = 
        new IdentityHashMap<>();
    
    public <T> T deepCopy(T original) {
        // Check if already copied
        @SuppressWarnings("unchecked")
        T copy = (T) copies.get(original);
        if (copy != null) {
            return copy;  // Return existing copy
        }
        
        // Create new copy
        copy = createNewInstance(original);
        copies.put(original, copy);
        
        // Copy fields
        copyFields(original, copy);
        return copy;
    }
    
    private void copyFields(Object original, Object copy) {
        // Implementation details...
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Comparison with HashMap */}
            <MethodCard
              title="Comparison with HashMap"
              description="Key differences between IdentityHashMap and HashMap"
            >
              <CodeBlock
                code={`// HashMap behavior (equals() comparison)
HashMap<String, String> hashMap = new HashMap<>();
String key1 = new String("key");
String key2 = new String("key");

hashMap.put(key1, "value1");
hashMap.put(key2, "value2");  // Overwrites previous entry
System.out.println(hashMap.size());  // Prints 1

// IdentityHashMap behavior (== comparison)
IdentityHashMap<String, String> identityMap = new IdentityHashMap<>();
identityMap.put(key1, "value1");
identityMap.put(key2, "value2");  // New entry (different reference)
System.out.println(identityMap.size());  // Prints 2

// String interning example
String intern1 = "hello".intern();
String intern2 = "hello".intern();
identityMap.put(intern1, "value1");
identityMap.put(intern2, "value2");  // Overwrites (same reference)
System.out.println(identityMap.size());  // Prints 1`}
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
                  <span>Using for normal maps</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>String key confusion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory expectations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance assumptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Equality confusion</span>
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
                  <span>Use for reference equality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Size planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory management</span>
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
                  <span>Object traversal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deep copy patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reference tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory optimization</span>
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
                  <span>Reference equality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Object identity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>System.identityHashCode</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Graph traversal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory characteristics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityHashMap; 