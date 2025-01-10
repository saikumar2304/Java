import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const fileExercises: Exercise[] = [
  {
    id: 'file-read',
    title: 'File Reader',
    description: 'Read contents from a text file.',
    difficulty: 'Easy'
  },
  {
    id: 'file-write',
    title: 'File Writer',
    description: 'Write content to a text file.',
    difficulty: 'Easy'
  },
  {
    id: 'file-copy',
    title: 'File Copy',
    description: 'Copy contents from one file to another.',
    difficulty: 'Medium'
  },
  {
    id: 'csv-parser',
    title: 'CSV Parser',
    description: 'Parse a CSV file and process its data.',
    difficulty: 'Hard'
  }
];

// Rest of component similar to MethodsExercises
const FileExercises: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java File Handling Practice</h1>
          <p className="text-gray-400">
            Practice file handling operations with hands-on coding exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fileExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/files/${exercise.id}`}
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

export default FileExercises;