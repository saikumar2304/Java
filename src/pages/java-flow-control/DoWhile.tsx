import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const DoWhile = () => {
  const basicExample = `
do {
    // code block to be executed
} while (condition);  // Note the semicolon!

// Example:
int count = 1;
do {
    System.out.println("Count is: " + count);
    count++;
} while (count <= 5);
// Output:
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4
// Count is: 5`;

  const inputValidationExample = `
// Input validation example
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int number;

do {
    System.out.println("Please enter a number between 1 and 10:");
    number = scanner.nextInt();
    
    if (number < 1 || number > 10) {
        System.out.println("Invalid input! Try again.");
    }
} while (number < 1 || number > 10);

System.out.println("Valid input received: " + number);`;

  const menuExample = `
// Menu-driven program example
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int choice;

do {
    System.out.println("\\nMenu:");
    System.out.println("1. Add");
    System.out.println("2. Subtract");
    System.out.println("3. Multiply");
    System.out.println("4. Exit");
    System.out.print("Enter your choice: ");
    
    choice = scanner.nextInt();
    
    switch (choice) {
        case 1:
            System.out.println("Add operation selected");
            break;
        case 2:
            System.out.println("Subtract operation selected");
            break;
        case 3:
            System.out.println("Multiply operation selected");
            break;
        case 4:
            System.out.println("Exiting...");
            break;
        default:
            System.out.println("Invalid choice!");
    }
} while (choice != 4);`;

  const dryRunExample = `
// Password validation example
String correctPassword = "secret123";
String userInput;
boolean isValid = false;
int attempts = 0;

do {
    attempts++;
    System.out.print("Enter password (attempt " + attempts + "): ");
    userInput = scanner.nextLine();
    
    if (userInput.equals(correctPassword)) {
        isValid = true;
        System.out.println("Access granted!");
    } else {
        System.out.println("Incorrect password. Try again.");
    }
} while (!isValid && attempts < 3);

// Dry Run (with incorrect passwords):
// 1. First iteration:
//    - attempts = 1
//    - userInput = "wrong123"
//    - userInput.equals(correctPassword) is false
//    - Print "Incorrect password. Try again."
//    - !isValid && attempts < 3 is true, continue loop
// 2. Second iteration:
//    - attempts = 2
//    - userInput = "test456"
//    - userInput.equals(correctPassword) is false
//    - Print "Incorrect password. Try again."
//    - !isValid && attempts < 3 is true, continue loop
// 3. Third iteration:
//    - attempts = 3
//    - userInput = "wrong789"
//    - userInput.equals(correctPassword) is false
//    - Print "Incorrect password. Try again."
//    - !isValid && attempts < 3 is false, exit loop`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Do-While Loop in Java
              </h1>
              <p className="text-gray-300">
                The do-while loop is a variant of the while loop that guarantees at least one execution of the code block. 
                The condition is checked after the code block is executed, making it perfect for scenarios where you want 
                to ensure the code runs at least once, such as input validation or menu-driven programs.
              </p>
            </div>

            {/* Basic Syntax Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Basic Syntax and Example
              </h2>
              <CodeBlock code={basicExample} language="java" />
              <div className="mt-4">
                <p className="text-gray-300">Key differences from while loop:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-300">
                  <li>Code block executes <span className="text-yellow-400">before</span> checking the condition</li>
                  <li>Requires a semicolon after the while condition</li>
                  <li>Always executes at least once</li>
                  <li>Condition is checked at the end of the loop</li>
                </ul>
              </div>
            </div>

            {/* Input Validation Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Input Validation Example
              </h2>
              <CodeBlock code={inputValidationExample} language="java" />
              <p className="mt-4 text-gray-300">
                This is a common use case for do-while loops. It ensures the user provides valid input by repeatedly 
                asking until the input meets the required criteria.
              </p>
            </div>

            {/* Menu Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Menu-Driven Program Example
              </h2>
              <CodeBlock code={menuExample} language="java" />
              <p className="mt-4 text-gray-300">
                Menu-driven programs are another perfect use case for do-while loops, as you want to display 
                the menu at least once and keep showing it until the user chooses to exit.
              </p>
            </div>

            {/* Dry Run Example */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Dry Run Example
              </h2>
              <CodeBlock code={dryRunExample} language="java" />
            </div>
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
                  <span>Forgetting the semicolon after while condition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not updating the loop control variable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Creating unintended infinite loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using when a while loop would be more appropriate</span>
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
                  <span>Use for input validation scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Include clear exit conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep the loop body focused</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider using while if first execution is conditional</span>
                </li>
              </ul>
            </div>

            {/* When to Use Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                When to Use Do-While
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Input validation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Menu-driven programs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Game loops requiring initial setup</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>When code must run at least once</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoWhile; 