import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const TreeSet: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                TreeSet in Java
              </h1>
              <p className="text-gray-300">
                TreeSet is a NavigableSet implementation based on a TreeMap. The elements are ordered using their natural ordering or by a Comparator provided at set creation time. This implementation provides guaranteed log(n) time cost for basic operations.
              </p>
            </div>

            {/* Creating TreeSet */}
            <MethodCard
              title="Creating TreeSet"
              description="Different ways to initialize TreeSet"
            >
              <CodeBlock
                code={`// Default constructor (natural ordering)
TreeSet<String> set1 = new TreeSet<>();

// With custom Comparator
TreeSet<String> set2 = new TreeSet<>((a, b) -> b.compareTo(a)); // Reverse order

// From Collection
List<Integer> list = Arrays.asList(3, 1, 4, 1, 5);
TreeSet<Integer> set3 = new TreeSet<>(list); // Will be sorted

// From SortedSet
SortedSet<Double> sortedSet = new TreeSet<>();
TreeSet<Double> set4 = new TreeSet<>(sortedSet);

// Using factory methods (Java 9+)
NavigableSet<String> set5 = new TreeSet<>(Set.of("C", "A", "B")); // Will be sorted`}
                language="java"
              />
            </MethodCard>

            {/* TreeSet Operations */}
            <MethodCard
              title="TreeSet Operations"
              description="Common operations with TreeSet"
            >
              <CodeBlock
                code={`TreeSet<Integer> set = new TreeSet<>();

// Adding elements (automatically sorted)
set.add(5);
set.add(2);
set.add(8);
set.add(1);
set.add(9);

// Navigation operations
Integer first = set.first();     // Returns 1
Integer last = set.last();      // Returns 9
Integer lower = set.lower(5);   // Returns greatest element < 5
Integer higher = set.higher(5); // Returns smallest element > 5
Integer floor = set.floor(6);   // Returns greatest element <= 6
Integer ceiling = set.ceiling(6); // Returns smallest element >= 6

// Range view operations
SortedSet<Integer> headSet = set.headSet(5);     // Elements < 5
SortedSet<Integer> tailSet = set.tailSet(5);     // Elements >= 5
SortedSet<Integer> subSet = set.subSet(3, 7);    // 3 <= elements < 7

// Descending order
NavigableSet<Integer> descending = set.descendingSet();

// Polling operations
Integer first = set.pollFirst(); // Retrieves and removes first
Integer last = set.pollLast();   // Retrieves and removes last`}
                language="java"
              />
            </MethodCard>

            {/* Custom Objects in TreeSet */}
            <MethodCard
              title="Custom Objects in TreeSet"
              description="Using TreeSet with custom classes"
            >
              <CodeBlock
                code={`class Person implements Comparable<Person> {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public int compareTo(Person other) {
        return Integer.compare(this.age, other.age);
    }
}

// Using natural ordering (age)
TreeSet<Person> people1 = new TreeSet<>();
people1.add(new Person("John", 30));
people1.add(new Person("Jane", 25));

// Using custom Comparator (name)
TreeSet<Person> people2 = new TreeSet<>((p1, p2) -> 
    p1.name.compareTo(p2.name)
);

// Using multiple fields
Comparator<Person> multiComparator = Comparator
    .comparing(Person::getAge)
    .thenComparing(Person::getName);
TreeSet<Person> people3 = new TreeSet<>(multiComparator);`}
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
                  <span>Missing Comparable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inconsistent comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modifying elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring null handling</span>
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
                  <span>Immutable elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use NavigableSet methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null properly</span>
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
                  <span>Use Comparator.comparing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Range operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Navigation methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>View optimizations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bulk operations</span>
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
                  <span>Red-Black Tree</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Natural ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comparator usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>NavigableSet features</span>
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

export default TreeSet; 