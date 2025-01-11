import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const JaggedArrays: React.FC = () => {
  const visualRepresentation = `
1. **Jagged Arrays**:
   - Jagged arrays are arrays of arrays where each array can have a different length.
   - Useful for representing irregular data, such as variable-sized lists.

2. **Memory Layout**:
   - Each row in a jagged array can have a different number of columns.
   - This creates a non-rectangular structure where each row can be accessed independently.

3. **Accessing Elements**:
   - To access an element, specify the row and column indices, i.e., \`jaggedArray[row][column]\`.
`;

  const tips = [
    "Always ensure each sub-array is initialized before accessing its elements.",
    "Use the enhanced `for` loop to traverse jagged arrays for cleaner code.",
    "When working with jagged arrays, ensure the row sizes are consistent where applicable."
  ];

  const proTips = [
    "Jagged arrays provide flexibility for managing uneven datasets, but can lead to memory overhead if not used wisely.",
    "Use `Arrays.toString()` to print jagged arrays for debugging, as they are not directly printable.",
    "Consider using `ArrayList` for dynamic arrays when working with varying data sizes."
  ];

  const bestPractices = [
    "Always check the dimensions of sub-arrays before accessing their elements.",
    "When creating jagged arrays, document their intended use to avoid confusion about array lengths.",
    "If the data structure is more complex, consider switching to more specialized data types like `ArrayList`."
  ];

  const commonMistakes = [
    "Assuming all sub-arrays have the same size, leading to `ArrayIndexOutOfBoundsException`.",
    "Not initializing sub-arrays before usage, causing `NullPointerException`.",
    "Attempting to print jagged arrays directly without handling nested arrays."
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          Jagged Arrays in Java
        </h1>
        <p className="text-lg text-gray-400">
          A jagged array is an array of arrays where each array can have a different length. This creates a structure where each row can have a varying number of columns, making it useful for irregular data structures.
        </p>
      </header>

      <main className="space-y-12">
        {/* Jagged Array Creation */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Jagged Array Creation</h2>
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
        </section>

        {/* Accessing Jagged Arrays */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Accessing Jagged Arrays</h2>
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
        </section>

        {/* Practical Example */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Practical Example</h2>
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
        </section>

        {/* Dry Run: Student Grades Management */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Dry Run: Student Grades Management</h2>
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

export default JaggedArrays;