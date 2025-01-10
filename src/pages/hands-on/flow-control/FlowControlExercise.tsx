import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'if-else-basic': {
    title: "Basic If-Else",
    description: "Write a program to check if a number is positive, negative, or zero.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = -5;
        // Check if number is positive, negative, or zero
        // Print appropriate message
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = -5;
        if (number > 0) {
            System.out.println("Number is positive");
        } else if (number < 0) {
            System.out.println("Number is negative");
        } else {
            System.out.println("Number is zero");
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Number Variable Declaration',
        input: '',
        expectedOutput: 'int number',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'If Statement Check',
        input: '',
        expectedOutput: 'if',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Else If Statement Check',
        input: '',
        expectedOutput: 'else if',
        points: 1
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Positive Number Check',
        input: '',
        expectedOutput: 'Number is negative',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Positive Condition',
        input: '',
        expectedOutput: 'number > 0',
        points: 2
      },
      {
        id: 'tc6',
        type: 'structure',
        description: 'Negative Condition',
        input: '',
        expectedOutput: 'number < 0',
        points: 2
      }
    ]
  },

  'switch-days': {
    title: "Days of Week using Switch",
    description: "Write a program using switch statement to print the name of the day based on a number (1-7).",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int day = 3;
        // Use switch to print day name
        // 1 = Monday, 2 = Tuesday, etc.
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int day = 3;
        switch(day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day");
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Day Variable Declaration',
        input: '',
        expectedOutput: 'int day',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Switch Statement Check',
        input: '',
        expectedOutput: 'switch',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Case Statement Check',
        input: '',
        expectedOutput: 'case',
        points: 1
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Break Statement Check',
        input: '',
        expectedOutput: 'break',
        points: 1
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Default Case Check',
        input: '',
        expectedOutput: 'default',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Wednesday Check',
        input: '',
        expectedOutput: 'Wednesday',
        points: 2
      }
    ]
  },

  'for-loop-sum': {
    title: "Sum Using For Loop",
    description: "Write a program to find the sum of first n natural numbers using a for loop.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Calculate sum of first n natural numbers
        // Print the sum
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        int sum = 0;
        for(int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println("Sum of first " + n + " numbers is: " + sum);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'N Variable Declaration',
        input: '',
        expectedOutput: 'int n',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Sum Variable Declaration',
        input: '',
        expectedOutput: 'int sum',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'For Loop Check',
        input: '',
        expectedOutput: 'for',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Loop Counter Check',
        input: '',
        expectedOutput: 'i <= n',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Sum Calculation',
        input: '',
        expectedOutput: 'sum += i',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: 'Sum of first 5 numbers is: 15',
        points: 2
      }
    ]
  },

  'while-sum-digits': {
    title: "Sum of Digits using While",
    description: "Write a program to find sum of digits of a number using while loop.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = 12345;
        // Calculate sum of digits using while loop
        // Print the sum
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = 12345;
        int sum = 0;
        
        while(number > 0) {
            sum += number % 10;
            number /= 10;
        }
        
        System.out.println("Sum of digits: " + sum);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Number Variable Check',
        input: '',
        expectedOutput: 'int number',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Sum Variable Check',
        input: '',
        expectedOutput: 'int sum',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'While Loop Check',
        input: '',
        expectedOutput: 'while',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Modulo Operation',
        input: '',
        expectedOutput: 'number % 10',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Sum Check',
        input: '',
        expectedOutput: 'Sum of digits: 15',
        points: 2
      }
    ]
  },

  'do-while-menu': {
    title: "Menu Driven Program",
    description: "Create a menu-driven program using do-while loop that performs basic calculator operations.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int choice = 1;
        int num1 = 10, num2 = 5;
        
        // Create a menu with options:
        // 1. Add
        // 2. Subtract
        // 3. Multiply
        // 4. Divide
        // 5. Exit
        // Use do-while to show menu until user chooses exit
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int choice = 1;
        int num1 = 10, num2 = 5;
        
        do {
            System.out.println("1. Add");
            System.out.println("2. Subtract");
            System.out.println("3. Multiply");
            System.out.println("4. Divide");
            System.out.println("5. Exit");
            
            switch(choice) {
                case 1:
                    System.out.println("Result: " + (num1 + num2));
                    break;
                case 2:
                    System.out.println("Result: " + (num1 - num2));
                    break;
                case 3:
                    System.out.println("Result: " + (num1 * num2));
                    break;
                case 4:
                    System.out.println("Result: " + (num1 / num2));
                    break;
            }
            
            choice = 5; // Simulating user input for testing
        } while(choice != 5);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Do-While Loop Check',
        input: '',
        expectedOutput: 'do',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Switch Statement Check',
        input: '',
        expectedOutput: 'switch',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Addition Check',
        input: '',
        expectedOutput: 'Result: 15',
        points: 2
      }
    ]
  },

  'nested-loops-pattern': {
    title: "Pattern Printing",
    description: "Write a program to print a pyramid pattern using nested loops.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int rows = 5;
        // Print pyramid pattern:
        //     *
        //    ***
        //   *****
        //  *******
        // *********
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 0; i < rows; i++) {
            // Print spaces
            for(int j = 0; j < rows - i - 1; j++) {
                System.out.print(" ");
            }
            
            // Print stars
            for(int k = 0; k < 2 * i + 1; k++) {
                System.out.print("*");
            }
            
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Rows Variable Check',
        input: '',
        expectedOutput: 'int rows',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Outer Loop Check',
        input: '',
        expectedOutput: 'for(int i = 0',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Inner Loop for Spaces',
        input: '',
        expectedOutput: 'rows - i - 1',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Inner Loop for Stars',
        input: '',
        expectedOutput: '2 * i + 1',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: "    *\n   ***\n  *****\n *******\n*********",
        points: 3
      }
    ]
  },

  'break-continue': {
    title: "Break and Continue",
    description: "Write a program that demonstrates the use of break and continue statements.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Print numbers from 1 to 10
        // Skip multiples of 3
        // Break when number > 8
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        for(int i = 1; i <= 10; i++) {
            if(i > 8) {
                break;
            }
            
            if(i % 3 == 0) {
                continue;
            }
            
            System.out.print(i + " ");
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Break Statement Check',
        input: '',
        expectedOutput: 'break',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Continue Statement Check',
        input: '',
        expectedOutput: 'continue',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Multiple of 3 Check',
        input: '',
        expectedOutput: 'i % 3 == 0',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: '1 2 4 5 7 8',
        points: 2
      }
    ]
  },

  'nested-if-calculator': {
    title: "Advanced Calculator",
    description: "Create a calculator that handles different operations using nested if statements.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        char operator = '+';
        double num1 = 10.5;
        double num2 = 5.2;
        // Implement calculator for +, -, *, /
        // Handle division by zero case
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        char operator = '+';
        double num1 = 10.5;
        double num2 = 5.2;
        double result = 0;
        
        if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
            if (operator == '+') {
                result = num1 + num2;
            } else if (operator == '-') {
                result = num1 - num2;
            } else if (operator == '*') {
                result = num1 * num2;
            } else {
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("Error: Division by zero");
                    return;
                }
            }
            System.out.printf("%.2f %c %.2f = %.2f", num1, operator, num2, result);
        } else {
            System.out.println("Invalid operator");
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Operator Variable Check',
        input: '',
        expectedOutput: 'char operator',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Division by Zero Check',
        input: '',
        expectedOutput: 'num2 != 0',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Addition Result',
        input: '',
        expectedOutput: '10.50 + 5.20 = 15.70',
        points: 2
      }
    ]
  },

  'loop-pattern-numbers': {
    title: "Number Pattern",
    description: "Print a pattern of numbers using nested loops.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 4;
        // Print pattern:
        // 1
        // 2 3
        // 4 5 6
        // 7 8 9 10
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 4;
        int num = 1;
        
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Counter Variable',
        input: '',
        expectedOutput: 'int num = 1',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Nested Loop Check',
        input: '',
        expectedOutput: 'for(int j = 1',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Pattern Output',
        input: '',
        expectedOutput: "1 \n2 3 \n4 5 6 \n7 8 9 10",
        points: 3
      }
    ]
  },

  'combined-control': {
    title: "Combined Control Structures",
    description: "Write a program that combines if-else, switch, and loops to process student grades.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] marks = {85, 92, 78, 65, 88};
        char grade;
        // 1. Calculate average using loop
        // 2. Assign grade using if-else
        // 3. Print result based on grade using switch
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[] marks = {85, 92, 78, 65, 88};
        int sum = 0;
        char grade;
        
        // Calculate average
        for(int mark : marks) {
            sum += mark;
        }
        double average = (double)sum / marks.length;
        
        // Assign grade
        if(average >= 90) grade = 'A';
        else if(average >= 80) grade = 'B';
        else if(average >= 70) grade = 'C';
        else if(average >= 60) grade = 'D';
        else grade = 'F';
        
        // Print result
        System.out.println("Average: " + average);
        System.out.print("Result: ");
        switch(grade) {
            case 'A': System.out.println("Excellent!"); break;
            case 'B': System.out.println("Good job!"); break;
            case 'C': System.out.println("Satisfactory"); break;
            case 'D': System.out.println("Pass"); break;
            default: System.out.println("Fail");
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Enhanced For Loop',
        input: '',
        expectedOutput: 'for(int mark : marks)',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Average Calculation',
        input: '',
        expectedOutput: 'sum / marks.length',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Grade Assignment',
        input: '',
        expectedOutput: 'average >= 90',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Switch Statement',
        input: '',
        expectedOutput: 'switch(grade)',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Complete Output',
        input: '',
        expectedOutput: "Average: 81.6\nResult: Good job!",
        points: 3
      }
    ]
  },

  'diamond-pattern': {
    title: "Diamond Pattern",
    description: "Write a program to print a diamond pattern using nested loops and conditions.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Print diamond pattern:
        //     *
        //    ***
        //   *****
        //    ***
        //     *
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        
        // Upper half
        for(int i = 0; i < n/2 + 1; i++) {
            // Print spaces
            for(int j = 0; j < n/2 - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for(int k = 0; k < 2*i + 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Lower half
        for(int i = n/2 - 1; i >= 0; i--) {
            // Print spaces
            for(int j = 0; j < n/2 - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for(int k = 0; k < 2*i + 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Upper Half Loop',
        input: '',
        expectedOutput: 'i < n/2 + 1',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Lower Half Loop',
        input: '',
        expectedOutput: 'i >= 0',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: "  *\n ***\n*****\n ***\n  *",
        points: 4
      }
    ]
  },

  'number-series': {
    title: "Complex Number Series",
    description: "Generate a complex number series using nested loops and conditions.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Generate series: 1, 3, 6, 10, 15
        // Each number is sum of its position and previous number
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        int current = 1;
        
        for(int i = 1; i <= n; i++) {
            System.out.print(current);
            if(i < n) System.out.print(", ");
            current += (i + 1);
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Current Number Variable',
        input: '',
        expectedOutput: 'int current = 1',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Series Generation Logic',
        input: '',
        expectedOutput: 'current += (i + 1)',
        points: 3
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Series Check',
        input: '',
        expectedOutput: '1, 3, 6, 10, 15',
        points: 3
      }
    ]
  },

  'nested-menu': {
    title: "Nested Menu System",
    description: "Create a nested menu system using multiple control structures.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int mainChoice = 1;
        int subChoice = 2;
        // Create nested menu:
        // Main Menu:
        // 1. Shapes
        //    1.1 Square
        //    1.2 Triangle
        // 2. Calculations
        //    2.1 Even/Odd
        //    2.2 Prime Check
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int mainChoice = 1;
        int subChoice = 2;
        
        switch(mainChoice) {
            case 1:
                System.out.println("Shapes Selected");
                if(subChoice == 1) {
                    System.out.println("Drawing Square:");
                    for(int i = 0; i < 3; i++) {
                        for(int j = 0; j < 3; j++) {
                            System.out.print("* ");
                        }
                        System.out.println();
                    }
                } else if(subChoice == 2) {
                    System.out.println("Drawing Triangle:");
                    for(int i = 0; i < 3; i++) {
                        for(int j = 0; j <= i; j++) {
                            System.out.print("* ");
                        }
                        System.out.println();
                    }
                }
                break;
                
            case 2:
                System.out.println("Calculations Selected");
                int num = 7;
                if(subChoice == 1) {
                    System.out.println(num + " is " + 
                        (num % 2 == 0 ? "even" : "odd"));
                } else if(subChoice == 2) {
                    boolean isPrime = true;
                    for(int i = 2; i <= num/2; i++) {
                        if(num % i == 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    System.out.println(num + " is " + 
                        (isPrime ? "prime" : "not prime"));
                }
                break;
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Main Switch Check',
        input: '',
        expectedOutput: 'switch(mainChoice)',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Nested If-Else Check',
        input: '',
        expectedOutput: 'if(subChoice ==',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Nested Loops Check',
        input: '',
        expectedOutput: 'for(int j = 0',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Triangle Pattern Check',
        input: '',
        expectedOutput: "Drawing Triangle:\n* \n* * \n* * * ",
        points: 3
      }
    ]
  },

  'butterfly-pattern': {
    title: "Butterfly Pattern",
    description: "Create a butterfly pattern using nested loops and conditions.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 4;
        // Print butterfly pattern:
        // *    *
        // **  **
        // ******
        // **  **
        // *    *
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 4;
        
        // Upper part
        for(int i = 1; i <= n; i++) {
            // Left stars
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            // Spaces
            for(int j = 1; j <= 2*(n-i); j++) {
                System.out.print(" ");
            }
            // Right stars
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Lower part
        for(int i = n; i >= 1; i--) {
            // Left stars
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            // Spaces
            for(int j = 1; j <= 2*(n-i); j++) {
                System.out.print(" ");
            }
            // Right stars
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Upper Part Loop',
        input: '',
        expectedOutput: 'i <= n',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Space Calculation',
        input: '',
        expectedOutput: '2*(n-i)',
        points: 3
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Lower Part Loop',
        input: '',
        expectedOutput: 'i >= 1',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: "*    *\n**  **\n******\n**  **\n*    *",
        points: 4
      }
    ]
  },

  'spiral-pattern': {
    title: "Spiral Number Pattern",
    description: "Print numbers in a spiral pattern using complex loop control.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 4;
        // Print spiral pattern:
        // 1  2  3  4
        // 12 13 14 5
        // 11 16 15 6
        // 10 9  8  7
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 4;
        int[][] matrix = new int[n][n];
        int value = 1;
        int minRow = 0, maxRow = n-1;
        int minCol = 0, maxCol = n-1;
        
        while(value <= n*n) {
            // Right
            for(int i = minCol; i <= maxCol; i++) {
                matrix[minRow][i] = value++;
            }
            minRow++;
            
            // Down
            for(int i = minRow; i <= maxRow; i++) {
                matrix[i][maxCol] = value++;
            }
            maxCol--;
            
            // Left
            for(int i = maxCol; i >= minCol; i--) {
                matrix[maxRow][i] = value++;
            }
            maxRow--;
            
            // Up
            for(int i = maxRow; i >= minRow; i--) {
                matrix[i][minCol] = value++;
            }
            minCol++;
        }
        
        // Print matrix
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                System.out.printf("%2d ", matrix[i][j]);
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Matrix Declaration',
        input: '',
        expectedOutput: 'int[][] matrix',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Boundary Variables',
        input: '',
        expectedOutput: 'minRow = 0',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Spiral Logic',
        input: '',
        expectedOutput: 'value <= n*n',
        points: 3
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: " 1  2  3  4\n12 13 14  5\n11 16 15  6\n10  9  8  7",
        points: 4
      }
    ]
  },

  'nested-loop-control': {
    title: "Complex Loop Control",
    description: "Write a program that demonstrates complex loop control with break and continue.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Print prime numbers between 1 and 50
        // Skip multiples of 4
        // Break if count reaches 10 primes
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int count = 0;
        outer: for(int num = 2; num <= 50; num++) {
            if(num % 4 == 0) continue;
            
            // Check if prime
            for(int i = 2; i <= Math.sqrt(num); i++) {
                if(num % i == 0) continue outer;
            }
            
            System.out.print(num + " ");
            count++;
            if(count == 10) break;
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Labeled Continue',
        input: '',
        expectedOutput: 'continue outer',
        points: 3
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Prime Check',
        input: '',
        expectedOutput: 'Math.sqrt(num)',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Count Check',
        input: '',
        expectedOutput: 'count == 10',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: '2 3 5 6 7 11 13 14 17 19',
        points: 3
      }
    ]
  },

  'multiplication-table': {
    title: "Multiplication Table",
    description: "Create a program to print multiplication table using nested loops.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 5;  // Table up to 5
        int range = 10;  // Print table up to 10
        
        // Print multiplication table in format:
        // 1 x 1 = 1
        // 1 x 2 = 2
        // ...
        // 5 x 10 = 50
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        int range = 10;
        
        // Outer loop for tables from 1 to n
        for(int i = 1; i <= n; i++) {
            System.out.println("Table of " + i + ":");
            // Inner loop for multiplying numbers from 1 to range
            for(int j = 1; j <= range; j++) {
                System.out.printf("%d x %d = %d%n", i, j, i * j);
            }
            System.out.println();  // Add blank line between tables
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Number Variable Check',
        input: '',
        expectedOutput: 'int n = 5',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Range Variable Check',
        input: '',
        expectedOutput: 'int range = 10',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Outer Loop Check',
        input: '',
        expectedOutput: 'for(int i = 1; i <= n',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Inner Loop Check',
        input: '',
        expectedOutput: 'for(int j = 1; j <= range',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Multiplication Operation',
        input: '',
        expectedOutput: 'i * j',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Table Format Check',
        input: '',
        expectedOutput: '1 x 1 = 1',
        points: 2
      },
      {
        id: 'tc7',
        type: 'output',
        description: 'Multiple Tables Check',
        input: '',
        expectedOutput: 'Table of 2:',
        points: 2
      },
      {
        id: 'tc8',
        type: 'structure',
        description: 'Printf Usage Check',
        input: '',
        expectedOutput: 'System.out.printf',
        points: 2
      },
      {
        id: 'tc9',
        type: 'output',
        description: 'Last Entry Check',
        input: '',
        expectedOutput: '5 x 10 = 50',
        points: 2
      },
      {
        id: 'tc10',
        type: 'structure',
        description: 'Table Spacing Check',
        input: '',
        expectedOutput: 'System.out.println()',
        points: 2
      }
    ]
  },

  'prime-range': {
    title: "Prime Numbers in Range",
    description: "Find prime numbers within a given range using loops and conditions.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int start = 1;
        int end = 20;
        // Print all prime numbers between start and end
        // Also print the count of prime numbers found
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int start = 1;
        int end = 20;
        int count = 0;
        
        System.out.println("Prime numbers between " + start + " and " + end + ":");
        
        for(int i = start; i <= end; i++) {
            boolean isPrime = true;
            
            if(i <= 1) {
                isPrime = false;
            } else {
                for(int j = 2; j <= Math.sqrt(i); j++) {
                    if(i % j == 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            
            if(isPrime) {
                System.out.print(i + " ");
                count++;
            }
        }
        
        System.out.println("\\nTotal prime numbers found: " + count);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Range Variables Check',
        input: '',
        expectedOutput: 'int start = 1',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Counter Variable Check',
        input: '',
        expectedOutput: 'int count = 0',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Prime Check Loop',
        input: '',
        expectedOutput: 'Math.sqrt(i)',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Break Statement Usage',
        input: '',
        expectedOutput: 'break',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Prime Numbers Check',
        input: '',
        expectedOutput: '2 3 5 6 7 11 13 14 17 19',
        points: 3
      }
    ]
  },

  'fibonacci-series': {
    title: "Fibonacci Series",
    description: "Generate Fibonacci series using loops and conditions.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 10;  // Generate first 10 numbers
        // Print Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 10;
        int first = 0, second = 1;
        
        System.out.print("Fibonacci Series: ");
        System.out.print(first + ", " + second);
        
        for(int i = 2; i < n; i++) {
            int next = first + second;
            System.out.print(", " + next);
            first = second;
            second = next;
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'First Number Check',
        input: '',
        expectedOutput: 'int first = 0',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Second Number Check',
        input: '',
        expectedOutput: 'int second = 1',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Loop Check',
        input: '',
        expectedOutput: 'for(int i = 2',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Next Number Calculation',
        input: '',
        expectedOutput: 'first + second',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Series Check',
        input: '',
        expectedOutput: '0, 1, 1, 2, 3, 5, 8, 13, 21, 34',
        points: 3
      }
    ]
  },

  'pascal-triangle': {
    title: "Pascal Triangle",
    description: "Print Pascal triangle pattern using nested loops.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int rows = 5;
        // Print Pascal triangle:
        // 1
        // 1 1
        // 1 2 1
        // 1 3 3 1
        // 1 4 6 4 1
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 0; i < rows; i++) {
            // Add spaces for alignment
            for(int space = rows; space > i; space--) {
                System.out.print(" ");
            }
            
            int number = 1;
            for(int j = 0; j <= i; j++) {
                System.out.print(number + " ");
                number = number * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Rows Variable Check',
        input: '',
        expectedOutput: 'int rows = 5',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Outer Loop Check',
        input: '',
        expectedOutput: 'for(int i = 0',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Space Loop Check',
        input: '',
        expectedOutput: 'space > i',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Number Calculation',
        input: '',
        expectedOutput: 'number * (i - j) / (j + 1)',
        points: 3
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'First Row Check',
        input: '',
        expectedOutput: '1',
        points: 1
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: '1 4 6 4 1',
        points: 2
      }
    ]
  },

  'floyd-triangle': {
    title: "Floyd's Triangle",
    description: "Print Floyd's triangle using nested loops.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int rows = 4;
        // Print Floyd's Triangle:
        // 1
        // 2 3
        // 4 5 6
        // 7 8 9 10
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int rows = 4;
        int number = 1;
        
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print(number + " ");
                number++;
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Number Variable Check',
        input: '',
        expectedOutput: 'int number = 1',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Nested Loop Check',
        input: '',
        expectedOutput: 'j <= i',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: '1\n2 3\n4 5 6\n7 8 9 10',
        points: 3
      }
    ]
  },

  'number-diamond': {
    title: "Number Diamond",
    description: "Create a diamond pattern with numbers using nested loops.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Print number diamond:
        //     1
        //    121
        //   12321
        //    121
        //     1
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        
        // Upper half
        for(int i = 1; i <= n/2 + 1; i++) {
            // Print spaces
            for(int j = 1; j <= n/2 - i + 1; j++) {
                System.out.print(" ");
            }
            
            // Print increasing numbers
            for(int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            
            // Print decreasing numbers
            for(int j = i-1; j >= 1; j--) {
                System.out.print(j);
            }
            
            System.out.println();
        }
        
        // Lower half
        for(int i = n/2; i >= 1; i--) {
            // Print spaces
            for(int j = 1; j <= n/2 - i + 1; j++) {
                System.out.print(" ");
            }
            
            // Print increasing numbers
            for(int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            
            // Print decreasing numbers
            for(int j = i-1; j >= 1; j--) {
                System.out.print(j);
            }
            
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Upper Half Loop',
        input: '',
        expectedOutput: 'i <= n/2 + 1',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Number Pattern Loop',
        input: '',
        expectedOutput: 'j <= i',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: '  1\n 121\n12321\n 121\n  1',
        points: 4
      }
    ]
  },

  'hollow-pattern': {
    title: "Hollow Pattern",
    description: "Create hollow geometric patterns using loops.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int size = 5;
        // Print hollow square pattern:
        // *****
        // *   *
        // *   *
        // *   *
        // *****
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int size = 5;
        
        for(int i = 1; i <= size; i++) {
            for(int j = 1; j <= size; j++) {
                // Print star for first/last row or first/last column
                if(i == 1 || i == size || j == 1 || j == size) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Border Condition Check',
        input: '',
        expectedOutput: 'i == 1 || i == size',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Nested Loop Check',
        input: '',
        expectedOutput: 'j <= size',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: '*****\n*   *\n*   *\n*   *\n*****',
        points: 3
      }
    ]
  },

  'sandglass-pattern': {
    title: "Sandglass Pattern",
    description: "Create a sandglass pattern using nested loops.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Print sandglass pattern:
        // *****
        //  ***
        //   *
        //  ***
        // *****
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        
        // Upper part
        for(int i = n; i >= 1; i--) {
            // Print spaces
            for(int j = n; j > i; j--) {
                System.out.print(" ");
            }
            
            // Print stars
            for(int k = 1; k <= 2*i-1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Lower part
        for(int i = 2; i <= n; i++) {
            // Print spaces
            for(int j = n; j > i; j--) {
                System.out.print(" ");
            }
            
            // Print stars
            for(int k = 1; k <= 2*i-1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Upper Part Loop',
        input: '',
        expectedOutput: 'i >= 1',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Star Pattern Formula',
        input: '',
        expectedOutput: '2*i-1',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Pattern Check',
        input: '',
        expectedOutput: '*****\n ***\n  *\n ***\n*****',
        points: 4
      }
    ]
  },

  'number-pyramid': {
    title: "Number Pyramid",
    description: "Create a pyramid pattern with numbers using nested loops.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int rows = 5;
        // Print number pyramid:
        //     1
        //    2 2
        //   3 3 3
        //  4 4 4 4
        // 5 5 5 5 5
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int rows = 5;
        
        for(int i = 1; i <= rows; i++) {
            // Print spaces
            for(int j = rows; j > i; j--) {
                System.out.print(" ");
            }
            
            // Print numbers
            for(int k = 1; k <= i; k++) {
                System.out.print(i + " ");
            }
            
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Rows Variable Check',
        input: '',
        expectedOutput: 'int rows = 5',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Space Loop Check',
        input: '',
        expectedOutput: 'j > i',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Number Loop Check',
        input: '',
        expectedOutput: 'k <= i',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'First Row Check',
        input: '',
        expectedOutput: '    1',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Last Row Check',
        input: '',
        expectedOutput: '5 5 5 5 5',
        points: 2
      }
    ]
  },

  'right-triangle': {
    title: "Right Triangle Pattern",
    description: "Create different types of right triangle patterns.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int rows = 5;
        // Print three different right triangles:
        // Pattern 1:    Pattern 2:    Pattern 3:
        // *            *****         1
        // **           ****          1 2
        // ***          ***           1 2 3
        // ****         **            1 2 3 4
        // *****        *             1 2 3 4 5
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int rows = 5;
        
        System.out.println("Pattern 1:");
        // Increasing triangle
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        System.out.println("\\nPattern 2:");
        // Decreasing triangle
        for(int i = rows; i >= 1; i--) {
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        System.out.println("\\nPattern 3:");
        // Number triangle
        for(int i = 1; i <= rows; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Increasing Pattern Loop',
        input: '',
        expectedOutput: 'j <= i',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Decreasing Pattern Loop',
        input: '',
        expectedOutput: 'i >= 1',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Pattern 1 Check',
        input: '',
        expectedOutput: '*\n**\n***\n****\n*****',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Pattern 2 Check',
        input: '',
        expectedOutput: '*****\n****\n***\n**\n*',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Pattern 3 Check',
        input: '',
        expectedOutput: '1\n1 2\n1 2 3\n1 2 4\n1 2 3 4 5',
        points: 2
      },
      {
        id: 'tc6',
        type: 'structure',
        description: 'Pattern Separation',
        input: '',
        expectedOutput: 'System.out.println("\\nPattern',
        points: 1
      }
    ]
  },

  'alphabet-pattern': {
    title: "Alphabet Pattern",
    description: "Create patterns using alphabets and nested loops.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Print three alphabet patterns:
        // Pattern 1:     Pattern 2:     Pattern 3:
        // A             ABCDE          A
        // AB            ABCD           AB
        // ABC           ABC            ABC
        // ABCD          AB             ABCD
        // ABCDE         A              ABCDE
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        
        System.out.println("Pattern 1:");
        // Increasing alphabet pattern
        for(int i = 0; i < n; i++) {
            for(int j = 0; j <= i; j++) {
                System.out.print((char)('A' + j));
            }
            System.out.println();
        }
        
        System.out.println("\\nPattern 2:");
        // Decreasing alphabet pattern
        for(int i = n; i >= 1; i--) {
            for(int j = 0; j < i; j++) {
                System.out.print((char)('A' + j));
            }
            System.out.println();
        }
        
        System.out.println("\\nPattern 3:");
        // Pyramid alphabet pattern
        for(int i = 0; i < n; i++) {
            // Print spaces
            for(int j = n; j > i; j--) {
                System.out.print(" ");
            }
            // Print alphabets
            for(int j = 0; j <= i; j++) {
                System.out.print((char)('A' + j) + " ");
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'structure',
        description: 'Character Casting Check',
        input: '',
        expectedOutput: '(char)(\'A\' + j)',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Increasing Pattern Loop',
        input: '',
        expectedOutput: 'j <= i',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Decreasing Pattern Loop',
        input: '',
        expectedOutput: 'i >= 1',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Pattern 1 Check',
        input: '',
        expectedOutput: 'A\nAB\nABC\nABCD\nABCDE',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Pattern 2 Check',
        input: '',
        expectedOutput: 'ABCDE\nABCD\nABC\nAB\nA',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Pattern 3 Check',
        input: '',
        expectedOutput: '    A\n   A B\n  A B C\n A B C D\nA B C D E',
        points: 3
      },
      {
        id: 'tc7',
        type: 'structure',
        description: 'Space Pattern Check',
        input: '',
        expectedOutput: 'j > i',
        points: 2
      },
      {
        id: 'tc8',
        type: 'structure',
        description: 'Pattern Separation',
        input: '',
        expectedOutput: 'System.out.println("\\nPattern',
        points: 1
      }
    ]
  }
};

const FlowControlExercise: React.FC = () => {
  const { exerciseId } = useParams();
  const exercise = exerciseId ? exercises[exerciseId as keyof typeof exercises] : null;

  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  return (
    <HandsOnExercise
      title={exercise.title}
      description={exercise.description}
      initialCode={exercise.initialCode}
      solution={exercise.solution}
      testCases={exercise.testCases}
    />
  );
};

export default FlowControlExercise; 