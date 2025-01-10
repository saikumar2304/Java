import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const collectionExercises: Exercise[] = [
    {
      id: 'arraylist-ops',
      title: 'ArrayList Operations',
      description: 'Implement basic ArrayList operations like add, remove, and search.',
      difficulty: 'Easy'
    },
    {
      id: 'linkedlist-implementation',
      title: 'LinkedList Implementation',
      description: 'Use LinkedList to perform insertion and deletion operations.',
      difficulty: 'Easy'
    },
    {
      id: 'hashset-usage',
      title: 'HashSet Usage',
      description: 'Demonstrate the use of HashSet to remove duplicates from a list.',
      difficulty: 'Easy'
    },
    {
      id: 'treemap-basics',
      title: 'TreeMap Basics',
      description: 'Store key-value pairs in a TreeMap and retrieve them in sorted order.',
      difficulty: 'Easy'
    },
    {
      id: 'queue-operations',
      title: 'Queue Operations',
      description: 'Implement basic Queue operations like enqueue and dequeue.',
      difficulty: 'Medium'
    },
    {
      id: 'stack-implementation',
      title: 'Stack Implementation',
      description: 'Use Stack to reverse a string or perform undo operations.',
      difficulty: 'Medium'
    },
    {
      id: 'hashmap-freq-counter',
      title: 'Word Frequency Counter',
      description: 'Count the frequency of words in a string using HashMap.',
      difficulty: 'Medium'
    },
    {
      id: 'set-operations',
      title: 'Set Operations',
      description: 'Perform union, intersection, and difference operations using Sets.',
      difficulty: 'Medium'
    },
    {
      id: 'priorityqueue-example',
      title: 'Priority Queue Example',
      description: 'Implement a task scheduler using PriorityQueue.',
      difficulty: 'Medium'
    },
    {
      id: 'comparator-sorting',
      title: 'Comparator Sorting',
      description: 'Sort a list of objects using Comparator and Collections.sort().',
      difficulty: 'Medium'
    },
    {
      id: 'iterator-usage',
      title: 'Iterator Usage',
      description: 'Use Iterator to traverse and modify a collection safely.',
      difficulty: 'Medium'
    },
    {
      id: 'synchronized-collection',
      title: 'Synchronized Collection',
      description: 'Demonstrate the use of synchronized collections in multithreading.',
      difficulty: 'Hard'
    },
    {
      id: 'concurrenthashmap-demo',
      title: 'ConcurrentHashMap Demo',
      description: 'Implement thread-safe operations using ConcurrentHashMap.',
      difficulty: 'Hard'
    },
    {
      id: 'custom-collection',
      title: 'Custom Collection',
      description: 'Create a custom collection class that implements Collection interface.',
      difficulty: 'Hard'
    },
    {
      id: 'lru-cache',
      title: 'LRU Cache Implementation',
      description: 'Implement an LRU Cache using LinkedHashMap.',
      difficulty: 'Hard'
    },
    {
      id: 'bfs-graph',
      title: 'Graph Traversal using Queue',
      description: 'Perform BFS traversal on a graph using a Queue.',
      difficulty: 'Hard'
    },
    {
      id: 'dfs-graph',
      title: 'Graph Traversal using Stack',
      description: 'Perform DFS traversal on a graph using a Stack.',
      difficulty: 'Hard'
    },
    {
      id: 'immutable-collections',
      title: 'Immutable Collections',
      description: 'Create and use immutable collections.',
      difficulty: 'Medium'
    },
    {
      id: 'comparable-example',
      title: 'Comparable Interface',
      description: 'Implement Comparable to sort custom objects.',
      difficulty: 'Medium'
    },
    {
      id: 'collections-utility',
      title: 'Collections Utility Methods',
      description: 'Use Collections class methods like shuffle, reverse, and max.',
      difficulty: 'Easy'
    }
  ];
  

const CollectionsExercises: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java Collections Practice</h1>
          <p className="text-gray-400">
            Practice Java Collections Framework with hands-on coding exercises. Each exercise includes test cases to verify your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectionExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/collections/${exercise.id}`}
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

export default CollectionsExercises;