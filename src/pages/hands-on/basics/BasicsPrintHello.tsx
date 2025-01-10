import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'print-hello': {
    title: "Print Hello World",
    description: "Write a Java program to print 'Hello, World!' to the console.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'class',
        description: 'Class Declaration Check',
        input: '',
        expectedOutput: 'Main',
        points: 2
      },
      {
        id: 'tc2',
        type: 'method',
        description: 'Main Method Check',
        input: '',
        expectedOutput: 'main',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'System.out.println Check',
        input: '',
        expectedOutput: 'System.out.println',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: 'Hello, World!',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Public Class Check',
        input: '',
        expectedOutput: 'public class',
        points: 2
      }
    ]
  },

  'sum-two-numbers': {
    title: "Sum Two Numbers",
    description: "Create a program that adds two numbers and prints the result.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        // Add the numbers and print result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        int sum = num1 + num2;
        System.out.println("Sum: " + sum);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'First Number Declaration',
        input: '',
        expectedOutput: 'int num1',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Second Number Declaration',
        input: '',
        expectedOutput: 'int num2',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Addition Operation',
        input: '',
        expectedOutput: 'num1 + num2',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Output Format Check',
        input: '',
        expectedOutput: 'Sum: 30',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Print Statement Check',
        input: '',
        expectedOutput: 'System.out.println',
        points: 1
      }
    ]
  },

  'swap-variables': {
    title: "Swap Variables",
    description: "Write a program to swap values of two variables.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        // Swap values of a and b
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        int temp = a;
        a = b;
        b = temp;
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Variable A Declaration',
        input: '',
        expectedOutput: 'int a = 5',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Variable B Declaration',
        input: '',
        expectedOutput: 'int b = 10',
        points: 1
      },
      {
        id: 'tc3',
        type: 'variable',
        description: 'Temp Variable Usage',
        input: '',
        expectedOutput: 'temp',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Value Assignment Check',
        input: '',
        expectedOutput: 'a = b',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Final Output Check',
        input: '',
        expectedOutput: 'a = 10\nb = 5',
        points: 2
      }
    ]
  },

  'circle-area': {
    title: "Circle Area Calculation",
    description: "Write a program to calculate the area of a circle using its radius.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        double radius = 5.0;
        // Calculate and print the area
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        double radius = 5.0;
        double area = Math.PI * radius * radius;
        System.out.println("Area: " + area);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Radius Variable Check',
        input: '',
        expectedOutput: 'double radius',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Math.PI Usage',
        input: '',
        expectedOutput: 'Math.PI',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Area Calculation',
        input: '',
        expectedOutput: 'radius * radius',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Area Output Check',
        input: '',
        expectedOutput: 'Area: 78.53981633974483',
        points: 2
      }
    ]
  },

  'largest-of-three': {
    title: "Largest of Three Numbers",
    description: "Write a program to find the largest of three numbers.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        int num3 = 15;
        // Find and print the largest number
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        int num3 = 15;
        int largest = num1;
        if(num2 > largest) largest = num2;
        if(num3 > largest) largest = num3;
        System.out.println("Largest: " + largest);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'First Number Declaration',
        input: '',
        expectedOutput: 'int num1',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Second Number Declaration',
        input: '',
        expectedOutput: 'int num2',
        points: 1
      },
      {
        id: 'tc3',
        type: 'variable',
        description: 'Third Number Declaration',
        input: '',
        expectedOutput: 'int num3',
        points: 1
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Comparison Check 1',
        input: '',
        expectedOutput: 'num2 > largest',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Comparison Check 2',
        input: '',
        expectedOutput: 'num3 > largest',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: 'Largest: 20',
        points: 2
      }
    ]
  },

  'vowel-consonant': {
    title: "Check Vowel or Consonant",
    description: "Write a program to check if a given character is a vowel or consonant.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        char ch = 'a';
        // Check and print if ch is vowel or consonant
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        char ch = 'a';
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
           ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            System.out.println(ch + " is a vowel");
        } else {
            System.out.println(ch + " is a consonant");
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Character Variable Check',
        input: '',
        expectedOutput: 'char ch',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Vowel Check',
        input: '',
        expectedOutput: 'ch == \'a\'',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Vowel Output Check',
        input: '',
        expectedOutput: 'a is a vowel',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Multiple Vowel Check',
        input: '',
        expectedOutput: '|| ch == \'e\'',
        points: 2
      }
    ]
  },

  'factorial': {
    title: "Factorial of a Number",
    description: "Write a program to calculate the factorial of a given number.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        // Calculate and print factorial of n
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 5;
        long factorial = 1;
        for(int i = 1; i <= n; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + n + " is " + factorial);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Number Variable Check',
        input: '',
        expectedOutput: 'int n',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Result Variable Type',
        input: '',
        expectedOutput: 'long factorial',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Loop Structure',
        input: '',
        expectedOutput: 'for',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Factorial Calculation',
        input: '',
        expectedOutput: 'factorial *=',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: 'Factorial of 5 is 120',
        points: 2
      }
    ]
  },

  'convert-fahrenheit-to-celsius': {
    title: "Convert Fahrenheit to Celsius",
    description: "Write a program to convert a temperature from Fahrenheit to Celsius.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        double fahrenheit = 98.6;
        // Convert to Celsius: (°F - 32) × 5/9
        // Print the result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        double fahrenheit = 98.6;
        double celsius = (fahrenheit - 32) * 5/9;
        System.out.println(fahrenheit + "°F = " + celsius + "°C");
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Fahrenheit Variable Check',
        input: '',
        expectedOutput: 'double fahrenheit',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Celsius Variable Check',
        input: '',
        expectedOutput: 'double celsius',
        points: 1
      },
      // ... more test cases
    ]
  },

  'even-odd': {
    title: "Even or Odd",
    description: "Write a program to check if a given number is even or odd.",
    difficulty: "Easy",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = 7;
        // Check if number is even or odd
        // Print the result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = 7;
        if(number % 2 == 0) {
            System.out.println(number + " is even");
        } else {
            System.out.println(number + " is odd");
        }
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
        type: 'structure',
        description: 'Modulo Operation',
        input: '',
        expectedOutput: 'number % 2',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'If-Else Structure',
        input: '',
        expectedOutput: 'if',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Even Number Check',
        input: '',
        expectedOutput: '8 is even',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Odd Number Check',
        input: '',
        expectedOutput: '7 is odd',
        points: 2
      }
    ]
  },

  'check-leap-year': {
    title: "Check Leap Year",
    description: "Write a program to check if a given year is a leap year.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int year = 2024;
        // Check if year is leap year
        // Print the result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println(year + " is" + (isLeapYear ? "" : " not") + " a leap year");
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Year Variable Declaration',
        input: '',
        expectedOutput: 'int year',
        points: 1
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Divisible by 4 Check',
        input: '',
        expectedOutput: 'year % 4 == 0',
        points: 2
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Divisible by 100 Check',
        input: '',
        expectedOutput: 'year % 100 != 0',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Divisible by 400 Check',
        input: '',
        expectedOutput: 'year % 400 == 0',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Leap Year 2024 Check',
        input: '',
        expectedOutput: '2024 is a leap year',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Non-Leap Year 2023 Check',
        input: '',
        expectedOutput: '2023 is not a leap year',
        points: 2
      }
    ]
  },

  'simple-interest': {
    title: "Calculate Simple Interest",
    description: "Write a program to calculate simple interest given principal, rate, and time.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        double principal = 1000.0;
        double rate = 5.0;  // percentage
        double time = 2.0;  // years
        // Calculate Simple Interest: (P × R × T)/100
        // Print the result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        double principal = 1000.0;
        double rate = 5.0;
        double time = 2.0;
        double interest = (principal * rate * time) / 100;
        System.out.println("Simple Interest: " + interest);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Principal Variable',
        input: '',
        expectedOutput: 'double principal',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Rate Variable',
        input: '',
        expectedOutput: 'double rate',
        points: 1
      },
      {
        id: 'tc3',
        type: 'variable',
        description: 'Time Variable',
        input: '',
        expectedOutput: 'double time',
        points: 1
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Interest Formula',
        input: '',
        expectedOutput: '* rate * time) / 100',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: 'Simple Interest: 100.0',
        points: 2
      }
    ]
  },

  'armstrong-number': {
    title: "Check Armstrong Number",
    description: "Write a program to check if a number is an Armstrong number.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = 153;
        // Check if number is Armstrong number
        // Print the result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = 153;
        int originalNumber = number;
        int sum = 0;
        int digits = String.valueOf(number).length();
        
        while (number > 0) {
            int digit = number % 10;
            sum += Math.pow(digit, digits);
            number /= 10;
        }
        
        boolean isArmstrong = (sum == originalNumber);
        System.out.println(originalNumber + " is" + 
            (isArmstrong ? "" : " not") + " an Armstrong number");
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
        type: 'variable',
        description: 'Original Number Storage',
        input: '',
        expectedOutput: 'originalNumber',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Digit Count Logic',
        input: '',
        expectedOutput: 'String.valueOf(number).length()',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Power Calculation',
        input: '',
        expectedOutput: 'Math.pow',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'While Loop Check',
        input: '',
        expectedOutput: 'while',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Armstrong Number 153 Check',
        input: '',
        expectedOutput: '153 is an Armstrong number',
        points: 3
      },
      {
        id: 'tc7',
        type: 'output',
        description: 'Non-Armstrong Number 123 Check',
        input: '',
        expectedOutput: '123 is not an Armstrong number',
        points: 3
      }
    ]
  },

  'palindrome-number': {
    title: "Check Palindrome Number",
    description: "Write a program to check if a number is a palindrome.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = 12321;
        // Check if number is palindrome
        // Print the result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = 12321;
        int originalNumber = number;
        int reversed = 0;
        
        while (number > 0) {
            reversed = reversed * 10 + number % 10;
            number /= 10;
        }
        
        boolean isPalindrome = (originalNumber == reversed);
        System.out.println(originalNumber + " is" + 
            (isPalindrome ? "" : " not") + " a palindrome");
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
        description: 'Original Number Storage',
        input: '',
        expectedOutput: 'originalNumber',
        points: 1
      },
      {
        id: 'tc3',
        type: 'variable',
        description: 'Reversed Number Variable',
        input: '',
        expectedOutput: 'reversed',
        points: 1
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'While Loop Check',
        input: '',
        expectedOutput: 'while',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Reverse Logic',
        input: '',
        expectedOutput: 'reversed * 10',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Palindrome Check',
        input: '',
        expectedOutput: '12321 is a palindrome',
        points: 3
      },
      {
        id: 'tc7',
        type: 'output',
        description: 'Non-Palindrome Check',
        input: '',
        expectedOutput: '12345 is not a palindrome',
        points: 3
      }
    ]
  },

  'multiplication-table': {
    title: "Multiplication Table",
    description: "Write a program to print the multiplication table of a given number.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = 5;
        // Print multiplication table up to 10
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = 5;
        for(int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
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
        type: 'structure',
        description: 'Loop Structure Check',
        input: '',
        expectedOutput: 'for',
        points: 2
      }
      // ... more test cases for medium difficulty
    ]
  },

  'check-prime': {
    title: "Check Prime Number",
    description: "Write a program to check if a given number is prime.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = 17;
        // Check if number is prime
        // Print the result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = 17;
        boolean isPrime = true;
        
        if(number <= 1) {
            isPrime = false;
        } else {
            for(int i = 2; i <= Math.sqrt(number); i++) {
                if(number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        
        System.out.println(number + " is" + (isPrime ? "" : " not") + " prime");
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
        description: 'Prime Flag Variable',
        input: '',
        expectedOutput: 'boolean isPrime',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Less Than 2 Check',
        input: '',
        expectedOutput: 'number <= 1',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Square Root Optimization',
        input: '',
        expectedOutput: 'Math.sqrt',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Loop Structure',
        input: '',
        expectedOutput: 'for',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Prime Number Check',
        input: '',
        expectedOutput: '17 is prime',
        points: 3
      },
      {
        id: 'tc7',
        type: 'output',
        description: 'Non-Prime Number Check',
        input: '',
        expectedOutput: '4 is not prime',
        points: 3
      }
    ]
  },

  'sum-of-digits': {
    title: "Sum of Digits",
    description: "Write a program to find the sum of the digits of a number.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = 12345;
        // Calculate sum of digits
        // Print the result
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
        description: 'Sum Variable',
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
        description: 'Digit Extraction',
        input: '',
        expectedOutput: 'number % 10',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Number Update',
        input: '',
        expectedOutput: 'number /= 10',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Sum Check',
        input: '',
        expectedOutput: 'Sum of digits: 15',
        points: 3
      }
    ]
  },

  'gcd-lcm': {
    title: "GCD and LCM",
    description: "Write a program to find the GCD and LCM of two numbers.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int num1 = 12;
        int num2 = 18;
        // Calculate and print GCD and LCM
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int num1 = 12;
        int num2 = 18;
        int a = num1, b = num2;
        
        // Calculate GCD using Euclidean algorithm
        while(b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        int gcd = a;
        
        // Calculate LCM using GCD
        int lcm = (num1 * num2) / gcd;
        
        System.out.println("GCD: " + gcd);
        System.out.println("LCM: " + lcm);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'First Number Check',
        input: '',
        expectedOutput: 'int num1',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Second Number Check',
        input: '',
        expectedOutput: 'int num2',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'GCD While Loop',
        input: '',
        expectedOutput: 'while',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'LCM Formula',
        input: '',
        expectedOutput: '(num1 * num2) / gcd',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'GCD Output',
        input: '',
        expectedOutput: 'GCD: 6',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'LCM Output',
        input: '',
        expectedOutput: 'LCM: 36',
        points: 2
      }
    ]
  },

  'check-grade': {
    title: "Check Grade",
    description: "Write a program to assign grades based on a student's marks.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int marks = 85;
        // Assign and print grade:
        // >= 90: A
        // >= 80: B
        // >= 70: C
        // >= 60: D
        // < 60: F
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int marks = 85;
        char grade;
        
        if(marks >= 90) grade = 'A';
        else if(marks >= 80) grade = 'B';
        else if(marks >= 70) grade = 'C';
        else if(marks >= 60) grade = 'D';
        else grade = 'F';
        
        System.out.println("Grade: " + grade);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Marks Variable',
        input: '',
        expectedOutput: 'int marks',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Grade Variable',
        input: '',
        expectedOutput: 'char grade',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'A Grade Check',
        input: '',
        expectedOutput: 'marks >= 90',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'B Grade Check',
        input: '',
        expectedOutput: 'marks >= 80',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'B Grade Output',
        input: '',
        expectedOutput: 'Grade: B',
        points: 2
      }
    ]
  },

  'power-of-number': {
    title: "Power of a Number",
    description: "Write a program to calculate the power of a number using a loop.",
    difficulty: "Medium",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int base = 2;
        int exponent = 3;
        // Calculate base raised to exponent
        // Print the result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int base = 2;
        int exponent = 3;
        int result = 1;
        
        for(int i = 1; i <= exponent; i++) {
            result *= base;
        }
        
        System.out.println(base + " raised to " + exponent + " is " + result);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'variable',
        description: 'Base Variable',
        input: '',
        expectedOutput: 'int base',
        points: 1
      },
      {
        id: 'tc2',
        type: 'variable',
        description: 'Exponent Variable',
        input: '',
        expectedOutput: 'int exponent',
        points: 1
      },
      {
        id: 'tc3',
        type: 'structure',
        description: 'Loop Structure',
        input: '',
        expectedOutput: 'for',
        points: 2
      },
      {
        id: 'tc4',
        type: 'structure',
        description: 'Power Calculation',
        input: '',
        expectedOutput: 'result *= base',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: '2 raised to 3 is 8',
        points: 2
      }
    ]
  },

  'number-reverse': {
    title: "Reverse a Number",
    description: "Write a program to reverse a given number.",
    difficulty: "Hard",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int number = 12345;
        // Reverse the number and print result
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = 12345;
        int reversed = 0;
        
        while(number != 0) {
            int digit = number % 10;
            reversed = reversed * 10 + digit;
            number /= 10;
        }
        
        System.out.println("Reversed number: " + reversed);
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
        description: 'Reversed Variable',
        input: '',
        expectedOutput: 'int reversed',
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
        description: 'Digit Extraction',
        input: '',
        expectedOutput: 'number % 10',
        points: 2
      },
      {
        id: 'tc5',
        type: 'structure',
        description: 'Reverse Logic',
        input: '',
        expectedOutput: 'reversed * 10',
        points: 2
      },
      {
        id: 'tc6',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: 'Reversed number: 54321',
        points: 3
      }
    ]
  }
};

const BasicsPrintHello: React.FC = () => {
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

export default BasicsPrintHello;
