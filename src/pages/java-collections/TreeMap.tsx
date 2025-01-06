import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const TreeMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                TreeMap in Java
              </h1>
              <p className="text-gray-300">
                TreeMap is a NavigableMap implementation based on a red-black tree. The map is sorted according to the natural ordering of its keys, or by a Comparator provided at creation time. This implementation provides guaranteed log(n) time cost for containment, addition, and removal operations.
              </p>
            </div>

            {/* Creating TreeMap */}
            <MethodCard
              title="Creating TreeMap"
              description="Different ways to initialize TreeMap"
            >
              <CodeBlock
                code={`// Default constructor (natural ordering)
TreeMap<String, Integer> map1 = new TreeMap<>();

// With custom Comparator
TreeMap<String, Integer> map2 = new TreeMap<>((a, b) -> b.compareTo(a));

// From another Map
Map<String, Integer> source = Map.of("One", 1, "Two", 2);
TreeMap<String, Integer> map3 = new TreeMap<>(source);

// From SortedMap
SortedMap<String, Integer> sorted = new TreeMap<>();
TreeMap<String, Integer> map4 = new TreeMap<>(sorted);

// With case-insensitive ordering
TreeMap<String, Integer> map5 = new TreeMap<>(String.CASE_INSENSITIVE_ORDER);

// Multiple criteria comparator
Comparator<String> lengthThenNatural = Comparator
    .comparingInt(String::length)
    .thenComparing(Comparator.naturalOrder());
TreeMap<String, Integer> map6 = new TreeMap<>(lengthThenNatural);`}
                language="java"
              />
            </MethodCard>

            {/* TreeMap Operations */}
            <MethodCard
              title="TreeMap Operations"
              description="Common operations with TreeMap"
            >
              <CodeBlock
                code={`TreeMap<String, Integer> map = new TreeMap<>();

// Basic operations
map.put("B", 2);
map.put("A", 1);
map.put("C", 3);  // Automatically sorted

// Navigation operations
String firstKey = map.firstKey();     // Returns "A"
String lastKey = map.lastKey();       // Returns "C"
String higher = map.higherKey("B");   // Returns "C"
String lower = map.lowerKey("B");     // Returns "A"
String ceiling = map.ceilingKey("B"); // Returns "B"
String floor = map.floorKey("B");     // Returns "B"

// Entry navigation
Map.Entry<String, Integer> firstEntry = map.firstEntry();
Map.Entry<String, Integer> lastEntry = map.lastEntry();
Map.Entry<String, Integer> pollFirst = map.pollFirstEntry();
Map.Entry<String, Integer> pollLast = map.pollLastEntry();

// Range views
SortedMap<String, Integer> headMap = map.headMap("B");    // < "B"
NavigableMap<String, Integer> headMapInc = 
    map.headMap("B", true);  // <= "B"
SortedMap<String, Integer> tailMap = map.tailMap("B");    // >= "B"
SortedMap<String, Integer> subMap = 
    map.subMap("A", "C");    // >= "A" && < "C"

// Descending views
NavigableMap<String, Integer> descending = map.descendingMap();
NavigableSet<String> descKeys = map.descendingKeySet();

// Iteration (always sorted)
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`}
                language="java"
              />
            </MethodCard>

            {/* Custom Objects in TreeMap */}
            <MethodCard
              title="Custom Objects in TreeMap"
              description="Using TreeMap with custom classes"
            >
              <CodeBlock
                code={`class Person implements Comparable<Person> {
    private String name;
    private int age;
    
    // Constructor, getters, setters...
    
    @Override
    public int compareTo(Person other) {
        return Comparator.comparing(Person::getName)
                        .thenComparingInt(Person::getAge)
                        .compare(this, other);
    }
}

// Using natural ordering
TreeMap<Person, String> map1 = new TreeMap<>();
map1.put(new Person("John", 30), "Developer");

// Using custom comparator
TreeMap<Person, String> map2 = new TreeMap<>(
    Comparator.comparingInt(Person::getAge)
);

// Complex comparator
TreeMap<Person, String> map3 = new TreeMap<>(
    Comparator.comparing(Person::getName)
              .thenComparingInt(Person::getAge)
              .reversed()
);

// Range queries with custom objects
Person start = new Person("A", 20);
Person end = new Person("Z", 30);
NavigableMap<Person, String> range = 
    map1.subMap(start, true, end, false);`}
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
                  <span>Inconsistent comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modifying keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring null handling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong range queries</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance expectations</span>
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
                  <span>Proper comparison logic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Immutable keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use navigation methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Range view efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
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
                  <span>Custom comparators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Range operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>View optimizations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Navigation patterns</span>
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
                  <span>Red-black tree</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sorted structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Navigation operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Range views</span>
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

export default TreeMap; 