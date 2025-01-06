import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const HashMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                HashMap in Java
              </h1>
              <p className="text-gray-300">
                HashMap is the most commonly used Map implementation that stores key-value pairs in a hash table. It provides constant-time performance for basic operations (get and put) assuming the hash function disperses elements properly among the buckets.
              </p>
            </div>

            {/* Creating HashMap */}
            <MethodCard
              title="Creating HashMap"
              description="Different ways to initialize HashMap"
            >
              <CodeBlock
                code={`// Default constructor
HashMap<String, Integer> map1 = new HashMap<>();

// With initial capacity
HashMap<String, Integer> map2 = new HashMap<>(32);

// With capacity and load factor
HashMap<String, Integer> map3 = new HashMap<>(32, 0.75f);

// From another Map
Map<String, Integer> source = Map.of("One", 1, "Two", 2);
HashMap<String, Integer> map4 = new HashMap<>(source);

// Using Map.entry (Java 9+)
HashMap<String, Integer> map5 = new HashMap<>() {{
    put("One", 1);
    put("Two", 2);
}};

// Using factory methods (immutable)
Map<String, Integer> map6 = Map.ofEntries(
    Map.entry("One", 1),
    Map.entry("Two", 2)
);`}
                language="java"
              />
            </MethodCard>

            {/* HashMap Operations */}
            <MethodCard
              title="HashMap Operations"
              description="Common operations with HashMap"
            >
              <CodeBlock
                code={`HashMap<String, Integer> map = new HashMap<>();

// Basic operations
map.put("One", 1);                // Add or update
map.putIfAbsent("Two", 2);        // Add if key absent
Integer value = map.get("One");    // Get value
value = map.getOrDefault("Three", 0); // Get with default

// Removal operations
map.remove("Two");                // Remove by key
map.remove("One", 1);             // Remove if value matches

// Bulk operations
map.putAll(otherMap);             // Add all from another map
map.clear();                      // Remove all entries

// Functional operations
map.compute("One", (k, v) -> v == null ? 1 : v + 1);
map.computeIfAbsent("Two", k -> 2);
map.computeIfPresent("One", (k, v) -> v + 1);
map.merge("One", 1, Integer::sum);

// Iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Stream operations
map.entrySet().stream()
   .filter(e -> e.getValue() > 1)
   .map(Map.Entry::getKey)
   .forEach(System.out::println);`}
                language="java"
              />
            </MethodCard>

            {/* Custom Objects in HashMap */}
            <MethodCard
              title="Custom Objects in HashMap"
              description="Using HashMap with custom classes"
            >
              <CodeBlock
                code={`class Person {
    private String name;
    private int age;
    
    // Constructor, getters, setters...
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person person = (Person) o;
        return age == person.age && 
               Objects.equals(name, person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

// Using Person as key
HashMap<Person, String> personMap = new HashMap<>();
Person john = new Person("John", 30);
personMap.put(john, "Developer");

// Using Person as value
HashMap<String, Person> nameMap = new HashMap<>();
nameMap.put("John", new Person("John", 30));

// Using composite key
class CompositeKey {
    private final String part1;
    private final String part2;
    
    // Constructor...
    
    @Override
    public boolean equals(Object o) {
        // Implement equals
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(part1, part2);
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
                  <span>Poor hashCode implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring load factor</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing null checks</span>
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
                  <span>Proper equals/hashCode</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initial capacity planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Immutable keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use functional methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider thread safety</span>
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
                  <span>Use compute methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimize capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Stream operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bulk operations</span>
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
                  <span>Hash table structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Load factor</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hash collisions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bucket management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Time complexity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashMap; 