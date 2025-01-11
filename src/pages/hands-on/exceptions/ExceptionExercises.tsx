import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const exceptionExercises: Exercise[] = [
  // Easy Problems
  {
    id: 'array-bounds',
    title: 'Array Bounds',
    description: 'Handle ArrayIndexOutOfBoundsException.',
    difficulty: 'Easy'
  },
  {
    id: 'number-format',
    title: 'Number Format',
    description: 'Handle NumberFormatException when parsing strings.',
    difficulty: 'Easy'
  },
  {
    id: 'null-pointer',
    title: 'Null Pointer',
    description: 'Handle NullPointerException in object references.',
    difficulty: 'Easy'
  },
  {
    id: 'arithmetic-exception',
    title: 'Arithmetic Exception',
    description: 'Handle ArithmeticException during division.',
    difficulty: 'Easy'
  },
  {
    id: 'file-not-found',
    title: 'File Not Found',
    description: 'Handle FileNotFoundException during file operations.',
    difficulty: 'Easy'
  },

  // Medium Problems
  {
    id: 'custom-exception',
    title: 'Custom Exception',
    description: 'Create and use a custom exception class.',
    difficulty: 'Medium'
  },
  {
    id: 'try-catch-finally',
    title: 'Try-Catch-Finally',
    description: 'Demonstrate the use of try-catch-finally blocks.',
    difficulty: 'Medium'
  },
  {
    id: 'nested-try-catch',
    title: 'Nested Try-Catch',
    description: 'Use nested try-catch blocks for multiple exceptions.',
    difficulty: 'Medium'
  },
  {
    id: 'resource-handling',
    title: 'Resource Handling',
    description: 'Use try-with-resources for file operations.',
    difficulty: 'Medium'
  },
  {
    id: 'exception-propagation',
    title: 'Exception Propagation',
    description: 'Understand how exceptions propagate in method calls.',
    difficulty: 'Medium'
  },

  // Hard Problems
  {
    id: 'multi-catch',
    title: 'Multi-Catch Blocks',
    description: 'Use multi-catch blocks for handling different exceptions.',
    difficulty: 'Hard'
  },
  {
    id: 'throw-keyword',
    title: 'Throw Keyword',
    description: 'Use the throw keyword to manually throw exceptions.',
    difficulty: 'Hard'
  },
  {
    id: 'throws-declaration',
    title: 'Throws Declaration',
    description: 'Use the throws keyword in method signatures.',
    difficulty: 'Hard'
  },
  {
    id: 'checked-exceptions',
    title: 'Checked Exceptions',
    description: 'Handle checked exceptions during file operations.',
    difficulty: 'Hard'
  },
  {
    id: 'unhandled-exceptions',
    title: 'Unhandled Exceptions',
    description: 'Analyze scenarios with unhandled exceptions.',
    difficulty: 'Hard'
  },
  {
    id: 'rethrow-exception',
    title: 'Rethrow Exception',
    description: 'Demonstrate rethrowing exceptions in a catch block.',
    difficulty: 'Hard'
  },
  {
    id: 'custom-runtime-exception',
    title: 'Custom Runtime Exception',
    description: 'Create and use a custom unchecked exception.',
    difficulty: 'Hard'
  },
  {
    id: 'exception-hierarchy',
    title: 'Exception Hierarchy',
    description: 'Understand the Java exception class hierarchy.',
    difficulty: 'Hard'
  },
  {
    id: 'logging-exceptions',
    title: 'Logging Exceptions',
    description: 'Use logging frameworks to log exceptions.',
    difficulty: 'Hard'
  },
  {
    id: 'exception-best-practices',
    title: 'Best Practices',
    description: 'Implement exception handling best practices.',
    difficulty: 'Hard'
  }
];

const ExceptionExercises: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java Exception Handling Practice</h1>
          <p className="text-gray-400">
            Practice exception handling with hands-on coding exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exceptionExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/exceptions/${exercise.id}`}
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

export default ExceptionExercises;