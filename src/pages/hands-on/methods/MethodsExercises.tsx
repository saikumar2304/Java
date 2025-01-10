import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const methodExercises: Exercise[] = [
  {
    id: 'calculator',
    title: 'Simple Calculator',
    description: 'Create methods for basic arithmetic operations.',
    difficulty: 'Easy'
  },
  {
    id: 'prime-checker',
    title: 'Prime Number Checker',
    description: 'Write a method to check if a number is prime.',
    difficulty: 'Easy'
  },
  {
    id: 'method-overloading',
    title: 'Area Calculator',
    description: 'Implement method overloading to calculate area of different shapes.',
    difficulty: 'Medium'
  },
  {
    id: 'recursive-factorial',
    title: 'Recursive Factorial',
    description: 'Calculate factorial using recursive method.',
    difficulty: 'Medium'
  },
  {
    id: 'array-operations',
    title: 'Array Operations',
    description: 'Create methods for common array operations.',
    difficulty: 'Hard'
  },
  {
    id: 'palindrome-partitioning',
    title: 'Palindrome Partitioning',
    description: 'Partition a string into the minimum number of palindromic substrings.',
    difficulty: 'Hard'
  },
  {
    id: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    description: 'Find the length of the longest increasing subsequence in an array.',
    difficulty: 'Medium'
  },
  {
    id: 'subset-sum-problem',
    title: 'Subset Sum Problem',
    description: 'Check if a subset exists in an array that sums up to a given number.',
    difficulty: 'Medium'
  },
  {
    id: 'edit-distance',
    title: 'Edit Distance',
    description: 'Compute the minimum edit distance between two strings using dynamic programming.',
    difficulty: 'Hard'
  },
  {
    id: 'matrix-chain-multiplication',
    title: 'Matrix Chain Multiplication',
    description: 'Minimize the cost of multiplying matrices using dynamic programming.',
    difficulty: 'Hard'
  },
  {
    id: 'n-queens-problem',
    title: 'N-Queens Problem',
    description: 'Place N queens on an N×N chessboard so no two queens threaten each other.',
    difficulty: 'Hard'
  },
  {
    id: 'word-search',
    title: 'Word Search in a Grid',
    description: 'Check if a word exists in a 2D grid following adjacent letters.',
    difficulty: 'Medium'
  },
  {
    id: 'topological-sort',
    title: 'Topological Sort',
    description: 'Implement a topological sort of a directed acyclic graph (DAG).',
    difficulty: 'Hard'
  },
  {
    id: 'maximum-subarray-sum',
    title: 'Maximum Subarray Sum with Divide and Conquer',
    description: 'Find the maximum sum of a contiguous subarray using a divide-and-conquer approach.',
    difficulty: 'Medium'
  },
  {
    id: 'dijkstra-algorithm',
    title: 'Dijkstra’s Algorithm',
    description: 'Find the shortest path from a source node to all other nodes in a weighted graph.',
    difficulty: 'Medium'
  },
  {
    id: 'knapsack-problem',
    title: 'Knapsack Problem (0/1)',
    description: 'Solve the 0/1 knapsack problem using dynamic programming.',
    difficulty: 'Medium'
  },
  {
    id: 'travelling-salesman-problem',
    title: 'Travelling Salesman Problem (TSP)',
    description: 'Solve the TSP using dynamic programming or greedy methods.',
    difficulty: 'Hard'
  },
  {
    id: 'maximum-area-histogram',
    title: 'Maximum Area in Histogram',
    description: 'Find the maximum rectangular area in a histogram.',
    difficulty: 'Hard'
  },
  {
    id: 'sudoku-solver',
    title: 'Sudoku Solver',
    description: 'Create a backtracking algorithm to solve a Sudoku puzzle.',
    difficulty: 'Hard'
  },
  {
    id: 'flood-fill-algorithm',
    title: 'Flood Fill Algorithm',
    description: 'Implement the flood fill algorithm for a 2D array.',
    difficulty: 'Medium'
  },
  {
    id: 'longest-palindromic-subsequence',
    title: 'Longest Palindromic Subsequence',
    description: 'Find the length of the longest palindromic subsequence in a string.',
    difficulty: 'Medium'
  },
  {
    id: 'word-ladder',
    title: 'Word Ladder',
    description: 'Find the shortest transformation sequence from one word to another.',
    difficulty: 'Hard'
  },
  {
    id: 'kth-largest-element',
    title: 'Kth Largest Element in an Array',
    description: 'Find the Kth largest element using a heap or quickselect.',
    difficulty: 'Medium'
  },
  {
    id: 'graph-bipartite-check',
    title: 'Graph Bipartite Check',
    description: 'Determine if a given graph is bipartite.',
    difficulty: 'Medium'
  },
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    description: 'Merge overlapping intervals in a list of intervals.',
    difficulty: 'Medium'
  }
];

const MethodsExercises: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java Methods Practice</h1>
          <p className="text-gray-400">
            Practice method creation and usage with hands-on coding exercises. Each exercise includes test cases to verify your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/methods/${exercise.id}`}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="h-5 w-5 text-indigo-400" />
                    <h3 className="text-lg font-semibold">{exercise.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{exercise.description}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      exercise.difficulty === 'Easy'
                        ? 'bg-green-900/50 text-green-400'
                        : exercise.difficulty === 'Medium'
                        ? 'bg-yellow-900/50 text-yellow-400'
                        : 'bg-red-900/50 text-red-400'
                    }`}
                  >
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

export default MethodsExercises;
