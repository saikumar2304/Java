import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const SetInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Set Interface in Java
              </h1>
              <p className="text-gray-300">
                The Set interface represents a collection that cannot contain duplicate elements. It models the mathematical set abstraction and is implemented by several classes like HashSet, TreeSet, and LinkedHashSet.
              </p>
            </div>

            {/* Set Operations */}
            <MethodCard
              title="Basic Set Operations"
              description="Common operations with Set interface"
            >
              <CodeBlock
                code={`// Creating different types of sets
Set<String> hashSet = new HashSet<>();
Set<String> treeSet = new TreeSet<>();
Set<String> linkedHashSet = new LinkedHashSet<>();

// Adding elements
hashSet.add("Apple");
hashSet.add("Banana");
hashSet.add("Apple");  // Duplicate not added

// Adding multiple elements
hashSet.addAll(Arrays.asList("Orange", "Mango"));

// Removing elements
hashSet.remove("Apple");
hashSet.removeAll(Arrays.asList("Orange", "Mango"));

// Checking contents
boolean exists = hashSet.contains("Banana");
boolean hasAll = hashSet.containsAll(Arrays.asList("Apple", "Banana"));

// Size operations
int size = hashSet.size();
boolean empty = hashSet.isEmpty();

// Clearing the set
hashSet.clear();`}
                language="java"
              />
            </MethodCard>

            {/* Set Mathematical Operations */}
            <MethodCard
              title="Set Mathematical Operations"
              description="Set theory operations in Java"
            >
              <CodeBlock
                code={`Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
Set<Integer> set2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8));

// Union (addAll)
Set<Integer> union = new HashSet<>(set1);
union.addAll(set2);  // [1, 2, 3, 4, 5, 6, 7, 8]

// Intersection (retainAll)
Set<Integer> intersection = new HashSet<>(set1);
intersection.retainAll(set2);  // [4, 5]

// Difference (removeAll)
Set<Integer> difference = new HashSet<>(set1);
difference.removeAll(set2);  // [1, 2, 3]

// Symmetric Difference
Set<Integer> symmetricDiff = new HashSet<>(set1);
symmetricDiff.addAll(set2);
Set<Integer> tmp = new HashSet<>(set1);
tmp.retainAll(set2);
symmetricDiff.removeAll(tmp);  // [1, 2, 3, 6, 7, 8]

// Subset check
boolean isSubset = set1.containsAll(intersection);  // true`}
                language="java"
              />
            </MethodCard>

            {/* Set Views and Immutability */}
            <MethodCard
              title="Set Views and Immutability"
              description="Creating unmodifiable sets and views"
            >
              <CodeBlock
                code={`// Unmodifiable Set
Set<String> mutableSet = new HashSet<>();
mutableSet.add("One");
mutableSet.add("Two");
Set<String> immutableSet = Collections.unmodifiableSet(mutableSet);

// Set.of (Java 9+) - Immutable Set
Set<String> immutable = Set.of("A", "B", "C");

// Empty Set
Set<String> empty = Collections.emptySet();

// Singleton Set
Set<String> singleton = Collections.singleton("Only Element");

// Synchronized Set
Set<String> syncSet = Collections.synchronizedSet(new HashSet<>());

// Converting to Array
String[] array = mutableSet.toArray(new String[0]);

// Stream operations
mutableSet.stream()
    .filter(s -> s.startsWith("T"))
    .map(String::toUpperCase)
    .forEach(System.out::println);`}
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
                  <span>Modifying during iteration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring equals/hashCode</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread safety issues</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutating immutable sets</span>
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
                  <span>Implement equals/hashCode</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use factory methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider immutability</span>
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
                  <span>Use Set operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage streams</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initial capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Custom comparators</span>
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
                  <span>Uniqueness guarantee</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Set theory operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Implementation types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Object equality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Order characteristics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetInterface; 