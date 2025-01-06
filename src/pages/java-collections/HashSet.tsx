import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const HashSet: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                HashSet in Java
              </h1>
              <p className="text-gray-300">
                HashSet is an implementation of the Set interface that stores elements in a hash table. It provides constant-time performance for basic operations and does not maintain insertion order. Elements are stored based on their hash codes.
              </p>
            </div>

            {/* Creating HashSet */}
            <MethodCard
              title="Creating HashSet"
              description="Different ways to initialize HashSet"
            >
              <CodeBlock
                code={`// Default constructor
HashSet<String> set1 = new HashSet<>();

// With initial capacity
HashSet<Integer> set2 = new HashSet<>(32);

// With capacity and load factor
HashSet<Double> set3 = new HashSet<>(32, 0.8f);

// From Collection
List<String> list = Arrays.asList("A", "B", "C");
HashSet<String> set4 = new HashSet<>(list);

// Using addAll
HashSet<Integer> set5 = new HashSet<>();
set5.addAll(Arrays.asList(1, 2, 3));

// Using factory methods (Java 9+)
Set<String> set6 = new HashSet<>(Set.of("X", "Y", "Z"));`}
                language="java"
              />
            </MethodCard>

            {/* HashSet Operations */}
            <MethodCard
              title="HashSet Operations"
              description="Common operations with HashSet"
            >
              <CodeBlock
                code={`HashSet<String> set = new HashSet<>();

// Adding elements
set.add("Apple");         // Returns true if added
set.add("Banana");
set.add("Apple");         // Returns false (duplicate)

// Bulk operations
set.addAll(Arrays.asList("Orange", "Mango"));

// Removing elements
set.remove("Apple");      // Returns true if removed
set.removeAll(Arrays.asList("Orange", "Mango"));
set.clear();             // Removes all elements

// Querying the set
boolean exists = set.contains("Banana");
int size = set.size();
boolean empty = set.isEmpty();

// Converting to array
Object[] array = set.toArray();
String[] strArray = set.toArray(new String[0]);

// Iteration
for (String element : set) {
    System.out.println(element);
}

// Stream operations
set.stream()
   .filter(s -> s.startsWith("A"))
   .forEach(System.out::println);`}
                language="java"
              />
            </MethodCard>

            {/* HashSet with Custom Objects */}
            <MethodCard
              title="HashSet with Custom Objects"
              description="Using HashSet with custom classes"
            >
              <CodeBlock
                code={`class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
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

// Using HashSet with Person objects
HashSet<Person> people = new HashSet<>();
people.add(new Person("John", 30));
people.add(new Person("Jane", 25));
people.add(new Person("John", 30));  // Won't be added (duplicate)

// Size will be 2 due to equals/hashCode implementation
System.out.println(people.size());`}
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
                  <span>Missing equals/hashCode</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable hash codes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Expecting order</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
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
                  <span>Immutable elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Load factor tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety handling</span>
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
                  <span>Use factory methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimize capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bulk operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance monitoring</span>
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
                  <span>Object equality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance characteristics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashSet; 