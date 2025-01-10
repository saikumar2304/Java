import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const arrayExercises: Exercise[] = [
    {
      id: 'array-sum',
      title: 'Sum of Array Elements',
      description: 'Write a program to calculate the sum of all elements in an array.',
      difficulty: 'Easy'
    },
    {
      id: 'find-max',
      title: 'Find Maximum Element',
      description: 'Find the largest element in an array.',
      difficulty: 'Easy'
    },
    {
      id: 'find-min',
      title: 'Find Minimum Element',
      description: 'Find the smallest element in an array.',
      difficulty: 'Easy'
    },
    {
      id: 'reverse-array',
      title: 'Reverse Array',
      description: 'Write a program to reverse the elements of an array.',
      difficulty: 'Medium'
    },
    {
      id: 'array-average',
      title: 'Calculate Average',
      description: 'Find the average of all elements in an array.',
      difficulty: 'Medium'
    },
    {
      id: 'array-frequency',
      title: 'Element Frequency',
      description: 'Count the frequency of each element in an array.',
      difficulty: 'Medium'
    },
    {
      id: 'array-sort',
      title: 'Sort Array',
      description: 'Write a program to sort an array in ascending order.',
      difficulty: 'Medium'
    },
    {
      id: 'second-largest',
      title: 'Find Second Largest Element',
      description: 'Find the second largest element in an array.',
      difficulty: 'Medium'
    },
    {
      id: 'remove-duplicates',
      title: 'Remove Duplicates',
      description: 'Remove duplicate elements from an array.',
      difficulty: 'Medium'
    },
    {
      id: 'merge-arrays',
      title: 'Merge Two Arrays',
      description: 'Merge two arrays into one.',
      difficulty: 'Medium'
    },
    {
      id: 'array-rotation',
      title: 'Rotate Array',
      description: 'Rotate the elements of an array by a given number of positions.',
      difficulty: 'Hard'
    },
    {
      id: 'matrix-addition',
      title: 'Matrix Addition',
      description: 'Write a program to add two matrices.',
      difficulty: 'Hard'
    },
    {
      id: 'matrix-multiplication',
      title: 'Matrix Multiplication',
      description: 'Write a program to multiply two matrices.',
      difficulty: 'Hard'
    },
    {
      id: 'diagonal-sum',
      title: 'Sum of Diagonals',
      description: 'Find the sum of diagonal elements in a square matrix.',
      difficulty: 'Hard'
    },
    {
      id: 'spiral-traversal',
      title: 'Spiral Traversal',
      description: 'Traverse a matrix in spiral order.',
      difficulty: 'Hard'
    },
    {
      id: 'search-element',
      title: 'Search Element in Array',
      description: 'Search for a specific element in an array.',
      difficulty: 'Easy'
    },
    {
      id: 'pair-sum',
      title: 'Pair Sum',
      description: 'Find all pairs in an array whose sum equals a given number.',
      difficulty: 'Hard'
    },
    {
      id: 'transpose-matrix',
      title: 'Transpose Matrix',
      description: 'Find the transpose of a matrix.',
      difficulty: 'Hard'
    },
    {
      id: 'zigzag-traversal',
      title: 'Zigzag Traversal',
      description: 'Traverse a matrix in a zigzag pattern.',
      difficulty: 'Hard'
    },
    {
      id: 'array-partition',
      title: 'Partition Array',
      description: 'Partition an array into even and odd numbers.',
      difficulty: 'Medium'
    }
  ];
  

const ArraysExercises: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java Arrays Practice</h1>
          <p className="text-gray-400">
            Practice array manipulation with hands-on coding exercises. Each exercise includes test cases to verify your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arrayExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/arrays/${exercise.id}`}
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

export default ArraysExercises; 