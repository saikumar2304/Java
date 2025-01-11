import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const Multidimensional: React.FC = () => {
  const visualRepresentation = `
1. **Multidimensional Arrays**:
   - Arrays of arrays, useful for representing matrices and tables.
   - Indices are two or more dimensions: \`matrix[row][column]\`.

2. **Memory Layout**:
   - Multidimensional arrays in Java are stored as an array of arrays.
   - For example, a 2D array is essentially an array of 1D arrays.

3. **Row-major Order**:
   - Arrays are stored row-wise in memory, so accessing the first index of a row is faster than accessing distant columns.
`;

  const tips = [
    "Always validate row and column indices before accessing elements.",
    "Use the enhanced `for` loop to iterate through multidimensional arrays for cleaner code.",
    "When using large multidimensional arrays, be mindful of memory usage and performance."
  ];

  const proTips = [
    "For jagged arrays (arrays of arrays with different column sizes), ensure consistency when accessing elements.",
    "Consider using `Arrays.deepToString()` for printing arrays of multiple dimensions.",
    "Use multi-dimensional arrays when the structure requires consistent and organized data, like matrices or grids."
  ];

  const bestPractices = [
    "Initialize arrays before using them to avoid `NullPointerException`.",
    "Use descriptive names for rows, columns, and arrays to improve code readability.",
    "Ensure the dimensions of arrays are documented properly to avoid confusion."
  ];

  const commonMistakes = [
    "Confusing row and column indices when accessing elements.",
    "Assuming rectangular arrays when using jagged arrays (arrays with rows of different lengths).",
    "Not checking array bounds, leading to `ArrayIndexOutOfBoundsException`."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Multidimensional Arrays in Java
        </h1>
        <p className="text-lg text-gray-400">
          Multidimensional arrays are arrays of arrays, with each element of the array holding the reference of other arrays. They are useful for representing tables, matrices, and complex data structures.
        </p>
      </header>

      <main className="space-y-12">
        {/* 2D Array Declaration Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">2D Array Declaration</h2>
          <CodeBlock
            code={`// Declaration
int[][] matrix = new int[3][3];

// Declaration and initialization
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing elements
System.out.println(matrix[0][0]); // Output: 1
System.out.println(matrix[1][1]); // Output: 5`}
            language="java"
          />
        </section>

        {/* Iterating 2D Arrays Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Iterating 2D Arrays</h2>
          <CodeBlock
            code={`int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Using nested for loops
for(int i = 0; i < matrix.length; i++) {
    for(int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// Using for-each loop
for(int[] row : matrix) {
    for(int element : row) {
        System.out.print(element + " ");
    }
    System.out.println();
}`}
            language="java"
          />
        </section>

        {/* 3D Arrays Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">3D Arrays</h2>
          <CodeBlock
            code={`// Declaration
int[][][] threeDArray = new int[3][3][3];

// Declaration and initialization
int[][][] threeDArray = {
    {{1, 2}, {3, 4}},
    {{5, 6}, {7, 8}}
};

// Accessing elements
System.out.println(threeDArray[0][0][0]); // Access first element
System.out.println(threeDArray[1][1][1]); // Access last element`}
            language="java"
          />
        </section>

        {/* Dry Run */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run: Matrix Operations</h2>
          <CodeBlock
            code={`// Step 1: Create a 3x3 matrix
int[][] matrix = new int[3][3];  // Creates: [[0,0,0], [0,0,0], [0,0,0]]

// Step 2: Initialize values row by row
matrix[0][0] = 1;  // [[1,0,0], [0,0,0], [0,0,0]]
matrix[0][1] = 2;  // [[1,2,0], [0,0,0], [0,0,0]]
matrix[0][2] = 3;  // [[1,2,3], [0,0,0], [0,0,0]]
matrix[1][0] = 4;  // [[1,2,3], [4,0,0], [0,0,0]]
matrix[1][1] = 5;  // [[1,2,3], [4,5,0], [0,0,0]]
matrix[1][2] = 6;  // [[1,2,3], [4,5,6], [0,0,0]]
matrix[2][0] = 7;  // [[1,2,3], [4,5,6], [7,0,0]]
matrix[2][1] = 8;  // [[1,2,3], [4,5,6], [7,8,0]]
matrix[2][2] = 9;  // [[1,2,3], [4,5,6], [7,8,9]]

// Step 3: Calculate row sums
int[] rowSums = new int[3];
for(int i = 0; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
        rowSums[i] += matrix[i][j];
    }
    // rowSums becomes: [6, 15, 24]
}

// Step 4: Calculate diagonal sum
int diagonalSum = 0;
for(int i = 0; i < 3; i++) {
    diagonalSum += matrix[i][i];  // 1 + 5 + 9 = 15
}`}
            language="java"
          />
        </section>

        {/* Visual Representation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Visual Representation</h2>
          <CodeBlock code={visualRepresentation} language="markdown" />
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

export default Multidimensional;