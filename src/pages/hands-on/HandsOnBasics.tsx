import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const basicExercises: Exercise[] = [
    {
      id: 'print-hello',
      title: 'Print Hello World',
      description: 'Write a program to print "Hello, World!" to the console.',
      difficulty: 'Easy'
    },
    {
      id: 'sum-two-numbers',
      title: 'Sum Two Numbers',
      description: 'Create a program that adds two numbers and prints the result.',
      difficulty: 'Easy'
    },
    {
      id: 'swap-variables',
      title: 'Swap Variables',
      description: 'Write a program to swap values of two variables.',
      difficulty: 'Easy'
    },
    {
      id: 'circle-area',
      title: 'Circle Area Calculation',
      description: 'Write a program to calculate the area of a circle using its radius.',
      difficulty: 'Easy'
    },
    {
      id: 'convert-fahrenheit-to-celsius',
      title: 'Convert Fahrenheit to Celsius',
      description: 'Write a program to convert a temperature from Fahrenheit to Celsius.',
      difficulty: 'Easy'
    },
    {
      id: 'even-odd',
      title: 'Even or Odd',
      description: 'Write a program to check if a given number is even or odd.',
      difficulty: 'Medium'
    },
    {
      id: 'check-leap-year',
      title: 'Check Leap Year',
      description: 'Write a program to check if a given year is a leap year.',
      difficulty: 'Medium'
    },
    {
      id: 'simple-interest',
      title: 'Calculate Simple Interest',
      description: 'Write a program to calculate the simple interest given principal, rate, and time.',
      difficulty: 'Medium'
    },
    {
      id: 'check-grade',
      title: 'Check Grade',
      description: "Write a program to assign grades based on a student's marks.",
      difficulty: 'Medium'
    },
    {
      id: 'largest-of-three',
      title: 'Largest of Three Numbers',
      description: 'Write a program to find the largest of three numbers.',
      difficulty: 'Medium'
    },
    {
      id: 'vowel-consonant',
      title: 'Check Vowel or Consonant',
      description: 'Write a program to check if a given character is a vowel or consonant.',
      difficulty: 'Medium'
    },
    {
      id: 'multiplication-table',
      title: 'Multiplication Table',
      description: 'Write a program to print the multiplication table of a given number.',
      difficulty: 'Medium'
    },
    {
      id: 'power-of-number',
      title: 'Power of a Number',
      description: 'Write a program to calculate the power of a number using a loop.',
      difficulty: 'Medium'
    },
    {
      id: 'factorial',
      title: 'Factorial of a Number',
      description: 'Write a program to calculate the factorial of a given number.',
      difficulty: 'Hard'
    },
    {
      id: 'check-prime',
      title: 'Check Prime Number',
      description: 'Write a program to check if a given number is prime.',
      difficulty: 'Hard'
    },
    {
      id: 'number-reverse',
      title: 'Reverse a Number',
      description: 'Write a program to reverse a given number.',
      difficulty: 'Hard'
    },
    {
      id: 'sum-of-digits',
      title: 'Sum of Digits',
      description: 'Write a program to find the sum of the digits of a number.',
      difficulty: 'Hard'
    },
    {
      id: 'armstrong-number',
      title: 'Check Armstrong Number',
      description: 'Write a program to check if a number is an Armstrong number.',
      difficulty: 'Hard'
    },
    {
      id: 'palindrome-number',
      title: 'Check Palindrome Number',
      description: 'Write a program to check if a given number is a palindrome.',
      difficulty: 'Hard'
    },
    {
      id: 'gcd-lcm',
      title: 'GCD and LCM',
      description: 'Write a program to find the GCD and LCM of two numbers.',
      difficulty: 'Hard'
    }
  ];
  
const HandsOnBasics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java Basics Practice</h1>
          <p className="text-gray-400">
            Practice Java basics with hands-on coding exercises. Each exercise includes a problem statement, 
            starter code, and test cases to verify your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/basics/${exercise.id}`}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="h-5 w-5 text-indigo-400" />
                    <h3 className="text-lg font-semibold">{exercise.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{exercise.description}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    exercise.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                    exercise.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-red-900/50 text-red-400'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandsOnBasics; 