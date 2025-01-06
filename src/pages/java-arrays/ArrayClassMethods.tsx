import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ArrayClassMethods: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Array Class and Methods in Java
              </h1>
              <p className="text-gray-300">
                Java provides various utility methods through the Arrays class to manipulate and work with arrays efficiently. These methods simplify common tasks such as sorting, searching, and comparing arrays.
              </p>
            </div>

            {/* Arrays Class Methods Section */}
            <MethodCard
              title="Arrays Class Methods"
              description="Common methods from java.util.Arrays class"
            >
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
            </MethodCard>

            {/* Array Utility Methods Section */}
            <MethodCard
              title="Array Utility Methods"
              description="Common operations with arrays"
            >
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
            </MethodCard>

            {/* Array List Conversion Section */}
            <MethodCard
              title="Array List Conversion"
              description="Converting between arrays and lists"
            >
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
            </MethodCard>

            {/* Sorting Methods Section */}
            <MethodCard
              title="Sorting Methods"
              description="Methods for sorting arrays"
            >
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
            </MethodCard>

            {/* Searching Methods Section */}
            <MethodCard
              title="Searching Methods"
              description="Methods for searching elements in arrays"
            >
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
            </MethodCard>

            {/* Comparison Methods Section */}
            <MethodCard
              title="Comparison Methods"
              description="Methods for comparing arrays"
            >
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
            </MethodCard>

            {/* Copy Methods Section */}
            <MethodCard
              title="Copy Methods"
              description="Methods for copying arrays"
            >
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
            </MethodCard>

            {/* Fill and Set Methods Section */}
            <MethodCard
              title="Fill and Set Methods"
              description="Methods for filling and setting array values"
            >
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
            </MethodCard>

            {/* Utility Methods Section */}
            <MethodCard
              title="Utility Methods"
              description="Additional utility methods for arrays"
            >
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
            </MethodCard>
          </div>

          {/* Right Sidebar (3 columns) */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using binarySearch on unsorted arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect array copy length</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modifying list from Arrays.asList()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assuming equals checks content</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring array length in loops</span>
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
                  <span>Sort arrays before binary search</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Arrays.copyOf for copying</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use clone for deep copy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Convert to ArrayList for modifications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check array length before operations</span>
                </li>
              </ul>
            </div>

            {/* Key Points Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Key Points
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Utility methods in java.util.Arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Efficient array manipulation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Conversion between arrays and lists</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Immutable list from Arrays.asList()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Array length is fixed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayClassMethods; 