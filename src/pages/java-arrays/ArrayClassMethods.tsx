import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const ArrayClassMethods: React.FC = () => {
  const visualRepresentation = `
1. **Array Class Methods**:
   - Provides utility methods for arrays like sorting, searching, copying, etc.
   
2. **Common Methods**:
   - \`Arrays.sort()\`: Sorts an array in ascending order.
   - \`Arrays.binarySearch()\`: Searches for an element in a sorted array.
   - \`Arrays.fill()\`: Fills an array with a specific value.
   - \`Arrays.equals()\`: Compares two arrays for equality.

3. **Memory Considerations**:
   - These methods provide efficient ways to manipulate arrays, especially for large datasets.
   - Ensure that operations like binary search are only performed on sorted arrays.
`;

  const tips = [
    "Use `Arrays.sort()` to easily sort arrays before performing operations like `binarySearch()`.",
    "Consider using `Arrays.fill()` for quick initialization of array elements.",
    "When comparing arrays, ensure they are of the same length and contain the same elements."
  ];

  const proTips = [
    "For large arrays, use `Arrays.parallelSort()` to speed up sorting by utilizing multiple CPU cores.",
    "You can use `Arrays.copyOfRange()` for creating a sub-array from an existing array.",
    "For deep comparisons of nested arrays, use `Arrays.deepEquals()`."
  ];

  const bestPractices = [
    "Sort arrays before performing binary searches for efficiency.",
    "Document the array sizes and operations clearly to avoid index errors.",
    "Use `Arrays.copyOf()` when you need a copy of the array with a different size."
  ];

  const commonMistakes = [
    "Attempting `binarySearch()` on unsorted arrays, which leads to incorrect results.",
    "Using `Arrays.equals()` on arrays with different sizes, which will return false even if the elements are the same.",
    "Not checking if the array is null before performing operations like `fill()` or `sort()`."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Array Class and Methods in Java
        </h1>
        <p className="text-lg text-gray-400">
          Java provides various utility methods through the Arrays class to manipulate and work with arrays efficiently. These methods simplify common tasks such as sorting, searching, and comparing arrays.
        </p>
      </header>

      <main className="space-y-12">
        {/* Arrays Class Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Arrays Class Methods</h2>
          <CodeBlock
            code={`import java.util.Arrays;

// Sort an array
int[] numbers = {5, 2, 8, 1, 9};
Arrays.sort(numbers);
// numbers is now {1, 2, 5, 8, 9}

// Binary search
int index = Arrays.binarySearch(numbers, 5);

// Fill array
int[] nums = new int[5];
Arrays.fill(nums, 10);
// nums is now {10, 10, 10, 10, 10}

// Compare arrays
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
boolean isEqual = Arrays.equals(arr1, arr2); // true

// Convert array to String
String arrayString = Arrays.toString(numbers);`}
            language="java"
          />
        </section>

        {/* Array Utility Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Array Utility Methods</h2>
          <CodeBlock
            code={`// Get array length
int[] numbers = {1, 2, 3, 4, 5};
int length = numbers.length;

// Copy array
int[] source = {1, 2, 3, 4, 5};
int[] destination = new int[5];
System.arraycopy(source, 0, destination, 0, source.length);

// Clone array
int[] original = {1, 2, 3, 4, 5};
int[] cloned = original.clone();`}
            language="java"
          />
        </section>

        {/* Array List Conversion Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Array List Conversion</h2>
          <CodeBlock
            code={`import java.util.Arrays;
import java.util.List;

// Array to List
String[] array = {"Java", "Python", "C++"};
List<String> list = Arrays.asList(array);

// List to Array
String[] backToArray = list.toArray(new String[0]);`}
            language="java"
          />
        </section>

        {/* Sorting Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Sorting Methods</h2>
          <CodeBlock
            code={`// sort(): Sorts array in ascending order
int[] numbers = {5, 2, 8, 1, 9};
Arrays.sort(numbers);  // becomes {1, 2, 5, 8, 9}

// sort with range: Sort portion of array
int[] nums = {5, 2, 8, 1, 9};
Arrays.sort(nums, 1, 4);  // sorts index 1 to 3: {5, 1, 2, 8, 9}

// Sorting objects with Comparator
String[] names = {"John", "Alice", "Bob"};
Arrays.sort(names, String.CASE_INSENSITIVE_ORDER);`}
            language="java"
          />
        </section>

        {/* Searching Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Searching Methods</h2>
          <CodeBlock
            code={`// binarySearch(): Find element in sorted array
int[] numbers = {1, 2, 5, 8, 9};
int index = Arrays.binarySearch(numbers, 5);  // returns 2

// binarySearch with range
int index = Arrays.binarySearch(numbers, 0, 3, 2);  // search in range

// binarySearch with Comparator (for objects)
String[] names = {"Alice", "Bob", "John"};
int index = Arrays.binarySearch(names, "Bob", String.CASE_INSENSITIVE_ORDER);`}
            language="java"
          />
        </section>

        {/* Comparison Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Comparison Methods</h2>
          <CodeBlock
            code={`// equals(): Compare arrays for equality
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
boolean isEqual = Arrays.equals(arr1, arr2);  // true

// deepEquals(): Compare nested arrays
int[][] matrix1 = {{1, 2}, {3, 4}};
int[][] matrix2 = {{1, 2}, {3, 4}};
boolean isDeepEqual = Arrays.deepEquals(matrix1, matrix2);  // true

// compare(): Compare arrays lexicographically
int result = Arrays.compare(arr1, arr2);  // 0 if equal`}
            language="java"
          />
        </section>

        {/* Copy Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Copy Methods</h2>
          <CodeBlock
            code={`// copyOf(): Create copy with specified length
int[] original = {1, 2, 3};
int[] copy = Arrays.copyOf(original, 5);  // {1, 2, 3, 0, 0}

// copyOfRange(): Copy specific range
int[] range = Arrays.copyOfRange(original, 1, 3);  // {2, 3}

// clone(): Create shallow copy
int[] clone = original.clone();

// System.arraycopy(): Native copy method
System.arraycopy(original, 0, copy, 0, original.length);`}
            language="java"
          />
        </section>

        {/* Fill and Set Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Fill and Set Methods</h2>
          <CodeBlock
            code={`// fill(): Fill array with value
int[] numbers = new int[5];
Arrays.fill(numbers, 10);  // {10, 10, 10, 10, 10}

// fill with range
Arrays.fill(numbers, 1, 4, 20);  // {10, 20, 20, 20, 10}

// setAll(): Fill using generator function
int[] squares = new int[5];
Arrays.setAll(squares, i -> i * i);  // {0, 1, 4, 9, 16}`}
            language="java"
          />
        </section>

        {/* Utility Methods Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Utility Methods</h2>
          <CodeBlock
            code={`// toString(): Convert array to string
int[] numbers = {1, 2, 3};
String str = Arrays.toString(numbers);  // "[1, 2, 3]"

// deepToString(): Convert nested arrays to string
int[][] matrix = {{1, 2}, {3, 4}};
String deep = Arrays.deepToString(matrix);  // "[[1, 2], [3, 4]]"

// hashCode(): Get array hash code
int hash = Arrays.hashCode(numbers);

// parallelSort(): Sort using parallel processing
Arrays.parallelSort(numbers);

// stream(): Convert array to stream
IntStream stream = Arrays.stream(numbers);`}
            language="java"
          />
        </section>

        {/* Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        {/* Pro Tips Section */}
        <section className="bg-blue-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-300">
            {proTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        {/* Best Practices Section */}
        <section className="bg-green-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-green-300">
            {bestPractices.map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes Section */}
        <section className="bg-red-900/20 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-6 space-y-3 text-red-300">
            {commonMistakes.map((mistake, index) => (
              <li key={index}>{mistake}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ArrayClassMethods;