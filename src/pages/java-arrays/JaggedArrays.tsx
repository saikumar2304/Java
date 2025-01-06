import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const JaggedArrays: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Jagged Arrays in Java
              </h1>
              <p className="text-gray-300">
                A jagged array is an array of arrays where each array can have a different length. This creates a structure where each row can have a varying number of columns, making it useful for irregular data structures.
              </p>
            </div>

            {/* Jagged Array Creation Section */}
            <MethodCard
              title="Jagged Array Creation"
              description="Creating arrays with different row lengths"
            >
              <CodeBlock
                code={`// Declare jagged array
int[][] jaggedArray = new int[3][];

// Initialize sub-arrays with different lengths
jaggedArray[0] = new int[3];
jaggedArray[1] = new int[5];
jaggedArray[2] = new int[2];

// Initialize with values
int[][] jaggedArray = {
    {1, 2, 3},
    {4, 5, 6, 7, 8},
    {9, 10}
};`}
                language="java"
              />
            </MethodCard>

            {/* Accessing Elements Section */}
            <MethodCard
              title="Accessing Jagged Arrays"
              description="Working with jagged array elements"
            >
              <CodeBlock
                code={`// Access elements
System.out.println(jaggedArray[0][0]); // First element of first row
System.out.println(jaggedArray[1][2]); // Third element of second row

// Print jagged array
for(int i = 0; i < jaggedArray.length; i++) {
    for(int j = 0; j < jaggedArray[i].length; j++) {
        System.out.print(jaggedArray[i][j] + " ");
    }
    System.out.println();
}`}
                language="java"
              />
            </MethodCard>

            {/* Practical Example Section */}
            <MethodCard
              title="Practical Example"
              description="Real-world application of jagged arrays"
            >
              <CodeBlock
                code={`// Example: Storing student scores for different subjects
int[][] studentScores = {
    {85, 92, 78},      // Student 1: 3 subjects
    {95, 88},          // Student 2: 2 subjects
    {76, 84, 90, 93}   // Student 3: 4 subjects
};

// Calculate average score for each student
for(int i = 0; i < studentScores.length; i++) {
    int sum = 0;
    for(int score : studentScores[i]) {
        sum += score;
    }
    double average = (double)sum / studentScores[i].length;
    System.out.println("Student " + (i+1) + " average: " + average);
}`}
                language="java"
              />
            </MethodCard>

            {/* Dry Run: Student Grades Management Section */}
            <MethodCard
              title="Dry Run: Student Grades Management"
              description="Step by step jagged array manipulation for student grades"
            >
              <CodeBlock
                code={`// Step 1: Create jagged array for 3 students with different subjects
int[][] grades = new int[3][];  // Creates: [null, null, null]

// Step 2: Initialize each student's subjects array
grades[0] = new int[4];  // Student 1: 4 subjects [0,0,0,0]
grades[1] = new int[3];  // Student 2: 3 subjects [0,0,0]
grades[2] = new int[5];  // Student 3: 5 subjects [0,0,0,0,0]

// Step 3: Assign grades for Student 1
grades[0][0] = 85;  // Math
grades[0][1] = 92;  // Science
grades[0][2] = 78;  // English
grades[0][3] = 88;  // History

// Step 4: Assign grades for Student 2
grades[1][0] = 90;  // Math
grades[1][1] = 85;  // Science
grades[1][2] = 95;  // English

// Step 5: Assign grades for Student 3
grades[2][0] = 88;  // Math
grades[2][1] = 82;  // Science
grades[2][2] = 89;  // English
grades[2][3] = 94;  // History
grades[2][4] = 91;  // Art

// Step 6: Calculate averages
double[] averages = new double[3];
for(int i = 0; i < grades.length; i++) {
    int sum = 0;
    for(int j = 0; j < grades[i].length; j++) {
        sum += grades[i][j];
    }
    averages[i] = (double)sum / grades[i].length;
    // averages becomes: [85.75, 90.0, 88.8]
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
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assuming fixed column length</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not initializing sub-arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Array index out of bounds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect iteration logic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory management issues</span>
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
                  <span>Check array lengths before access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use for-each when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document array structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Initialize all sub-arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using ArrayList</span>
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
                  <span>Variable length sub-arrays</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Two-step initialization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory efficient</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Flexible data structure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dynamic row lengths</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JaggedArrays; 