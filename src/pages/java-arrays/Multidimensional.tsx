import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Multidimensional: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Multidimensional Arrays in Java
              </h1>
              <p className="text-gray-300">
                Multidimensional arrays are arrays of arrays with each element of the array holding the reference of other arrays. They are useful for representing tables, matrices, and complex data structures.
              </p>
            </div>

            {/* 2D Array Declaration Section */}
            <MethodCard
              title="2D Array Declaration"
              description="Creating and using two-dimensional arrays"
            >
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
            </MethodCard>

            {/* Iterating 2D Arrays Section */}
            <MethodCard
              title="Iterating 2D Arrays"
              description="Using nested loops to iterate through 2D arrays"
            >
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
            </MethodCard>

            {/* 3D Arrays Section */}
            <MethodCard
              title="3D Arrays"
              description="Creating and using three-dimensional arrays"
            >
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
            </MethodCard>

            <MethodCard
              title="Dry Run: Matrix Operations"
              description="Step by step matrix manipulation example"
            >
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
            </MethodCard>
          </div>

          {/* Right Sidebar (3 columns) */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Confusing row and column indices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assuming rectangular arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not checking array bounds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect array dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory inefficient initialization</span>
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
                  <span>Use meaningful variable names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initialize arrays appropriately</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use enhanced for-loop when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider memory limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document array dimensions</span>
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
                  <span>Arrays of arrays structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Row-major ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Flexible dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Nested iteration required</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory usage increases exponentially</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multidimensional; 