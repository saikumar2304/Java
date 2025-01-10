import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const flowControlExercises: Exercise[] = [
  {
    id: 'if-else-basic',
    title: 'Basic If-Else',
    description: 'Write a program to check if a number is positive, negative, or zero.',
    difficulty: 'Easy'
  },
  {
    id: 'switch-days',
    title: 'Days of Week using Switch',
    description: 'Write a program using switch statement to print the name of the day.',
    difficulty: 'Easy'
  },
  {
    id: 'for-loop-sum',
    title: 'Sum Using For Loop',
    description: 'Write a program to find the sum of first n natural numbers.',
    difficulty: 'Easy'
  },
  {
    id: 'while-sum-digits',
    title: 'Sum of Digits using While',
    description: 'Write a program to find sum of digits of a number.',
    difficulty: 'Easy'
  },
  {
    id: 'do-while-menu',
    title: 'Menu Driven Program',
    description: 'Create a menu-driven calculator program.',
    difficulty: 'Medium'
  },
  {
    id: 'nested-loops-pattern',
    title: 'Pattern Printing',
    description: 'Print a pyramid pattern using nested loops.',
    difficulty: 'Hard'
  },
  {
    id: 'break-continue',
    title: 'Break and Continue',
    description: 'Demonstrate the use of break and continue statements.',
    difficulty: 'Medium'
  },
  {
    id: 'nested-if-calculator',
    title: 'Advanced Calculator',
    description: 'Create a calculator that handles different operations using nested if statements.',
    difficulty: 'Medium'
  },
  {
    id: 'loop-pattern-numbers',
    title: 'Number Pattern',
    description: 'Print a pattern of numbers using nested loops.',
    difficulty: 'Hard'
  },
  {
    id: 'combined-control',
    title: 'Combined Control Structures',
    description: 'Write a program that combines if-else, switch, and loops to process student grades.',
    difficulty: 'Hard'
  },
  {
    id: 'diamond-pattern',
    title: 'Diamond Pattern',
    description: 'Write a program to print a diamond pattern using nested loops and conditions.',
    difficulty: 'Hard'
  },
  {
    id: 'number-series',
    title: 'Complex Number Series',
    description: 'Generate a complex number series using nested loops and conditions.',
    difficulty: 'Hard'
  },
  {
    id: 'nested-menu',
    title: 'Nested Menu System',
    description: 'Create a nested menu system using multiple control structures.',
    difficulty: 'Hard'
  },
  {
    id: 'butterfly-pattern',
    title: 'Butterfly Pattern',
    description: 'Create a butterfly pattern using nested loops and conditions.',
    difficulty: 'Hard'
  },
  {
    id: 'spiral-pattern',
    title: 'Spiral Number Pattern',
    description: 'Print numbers in a spiral pattern using complex loop control.',
    difficulty: 'Hard'
  },
  {
    id: 'nested-loop-control',
    title: 'Complex Loop Control',
    description: 'Write a program that demonstrates complex loop control with break and continue.',
    difficulty: 'Hard'
  },
  {
    id: 'multiplication-table',
    title: 'Multiplication Table',
    description: 'Create a program to print multiplication table using nested loops.',
    difficulty: 'Medium'
  },
  {
    id: 'prime-range',
    title: 'Prime Numbers in Range',
    description: 'Find prime numbers within a given range using loops and conditions.',
    difficulty: 'Medium'
  },
  {
    id: 'fibonacci-series',
    title: 'Fibonacci Series',
    description: 'Generate Fibonacci series using loops and conditions.',
    difficulty: 'Medium'
  },
  {
    id: 'pascal-triangle',
    title: 'Pascal Triangle',
    description: 'Print Pascal triangle pattern using nested loops.',
    difficulty: 'Hard'
  },
  {
    id: 'number-pyramid',
    title: 'Number Pyramid',
    description: 'Create a pyramid pattern with numbers using nested loops.',
    difficulty: 'Medium'
  },
  {
    id: 'floyd-triangle',
    title: "Floyd's Triangle",
    description: 'Print Floyd\'s triangle using nested loops.',
    difficulty: 'Medium'
  },
  {
    id: 'alphabet-pattern',
    title: 'Alphabet Pattern',
    description: 'Create patterns using alphabets and nested loops.',
    difficulty: 'Hard'
  },
  {
    id: 'number-diamond',
    title: 'Number Diamond',
    description: 'Create a diamond pattern with numbers using nested loops.',
    difficulty: 'Hard'
  },
  {
    id: 'hollow-pattern',
    title: 'Hollow Pattern',
    description: 'Create hollow geometric patterns using loops.',
    difficulty: 'Medium'
  },
  {
    id: 'sandglass-pattern',
    title: 'Sandglass Pattern',
    description: 'Create a sandglass pattern using nested loops.',
    difficulty: 'Hard'
  },
  {
    id: 'right-triangle',
    title: 'Right Triangle Pattern',
    description: 'Create different types of right triangle patterns.',
    difficulty: 'Easy'
  }
];

const FlowControl: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Flow Control Practice</h1>
          <p className="text-gray-400">
            Practice Java flow control statements with hands-on coding exercises. 
            Learn if-else, switch, loops, and nested control structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flowControlExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/flow-control/${exercise.id}`}
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

export default FlowControl; 