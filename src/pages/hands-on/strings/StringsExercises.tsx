import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const stringExercises: Exercise[] = [
  // Easy Problems
  {
    id: 'string-reverse',
    title: 'Reverse String',
    description: 'Write a program to reverse a string without using StringBuilder.',
    difficulty: 'Easy'
  },
  {
    id: 'count-vowels',
    title: 'Count Vowels',
    description: 'Count the number of vowels in a given string.',
    difficulty: 'Easy'
  },
  {
    id: 'palindrome',
    title: 'Check Palindrome',
    description: 'Check if a given string is a palindrome.',
    difficulty: 'Easy'
  },
  {
    id: 'count-words',
    title: 'Count Words',
    description: 'Count the number of words in a given string.',
    difficulty: 'Easy'
  },
  {
    id: 'remove-whitespace',
    title: 'Remove Whitespace',
    description: 'Remove all whitespace characters from a string.',
    difficulty: 'Easy'
  },

  // Medium Problems
  {
    id: 'longest-word',
    title: 'Longest Word',
    description: 'Find the longest word in a given sentence.',
    difficulty: 'Medium'
  },
  {
    id: 'character-frequency',
    title: 'Character Frequency',
    description: 'Find the frequency of each character in a string.',
    difficulty: 'Medium'
  },
  {
    id: 'first-non-repeating',
    title: 'First Non-Repeating Character',
    description: 'Find the first non-repeating character in a string.',
    difficulty: 'Medium'
  },
  {
    id: 'remove-duplicates',
    title: 'Remove Duplicates',
    description: 'Remove duplicate characters from a string.',
    difficulty: 'Medium'
  },
  {
    id: 'isomorphic-strings',
    title: 'Isomorphic Strings',
    description: 'Check if two strings are isomorphic.',
    difficulty: 'Medium'
  },

  // Hard Problems
  {
    id: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    description: 'Find the longest palindromic substring in a string.',
    difficulty: 'Hard'
  },
  {
    id: 'substring-anagrams',
    title: 'Substring Anagrams',
    description: 'Find all substrings of a string that are anagrams of another string.',
    difficulty: 'Hard'
  },
  {
    id: 'wildcard-matching',
    title: 'Wildcard Matching',
    description: 'Implement wildcard matching with ? and *.',
    difficulty: 'Hard'
  },
  {
    id: 'edit-distance',
    title: 'Edit Distance',
    description: 'Calculate the minimum edit distance between two strings.',
    difficulty: 'Hard'
  },
  {
    id: 'decode-ways',
    title: 'Decode Ways',
    description: 'Decode a numeric string into letters using a given encoding scheme.',
    difficulty: 'Hard'
  },

  // Additional Problems
  {
    id: 'reverse-words',
    title: 'Reverse Words',
    description: 'Reverse the order of words in a string.',
    difficulty: 'Medium'
  },
  {
    id: 'validate-ip',
    title: 'Validate IP Address',
    description: 'Check if a string is a valid IPv4 or IPv6 address.',
    difficulty: 'Hard'
  },
  {
    id: 'string-compression',
    title: 'String Compression',
    description: 'Compress a string by replacing sequences of the same character with that character followed by the count.',
    difficulty: 'Medium'
  },
  {
    id: 'generate-parentheses',
    title: 'Generate Parentheses',
    description: 'Generate all valid combinations of n pairs of parentheses.',
    difficulty: 'Hard'
  },
  {
    id: 'group-anagrams',
    title: 'Group Anagrams',
    description: 'Group an array of strings into anagrams.',
    difficulty: 'Medium'
  }
];

const StringsExercises: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java Strings Practice</h1>
          <p className="text-gray-400">
            Practice string manipulation with hands-on coding exercises. Each exercise includes test cases to verify your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stringExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/strings/${exercise.id}`}
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

export default StringsExercises;