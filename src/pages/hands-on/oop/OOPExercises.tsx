import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ChevronRight } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const oopExercises: Exercise[] = [
  // Easy Exercises (Encapsulation)
  {
    id: 'bank-account',
    title: 'Bank Account',
    description: 'Create a BankAccount class with encapsulation.',
    difficulty: 'Easy'
  },
  {
    id: 'employee-details',
    title: 'Employee Details',
    description: 'Encapsulate employee details and calculate salary.',
    difficulty: 'Easy'
  },
  {
    id: 'book-store',
    title: 'Book Store',
    description: 'Design a Book class with constructors and methods.',
    difficulty: 'Easy'
  },
  {
    id: 'calculator-class',
    title: 'Calculator Class',
    description: 'Implement basic arithmetic operations in a class.',
    difficulty: 'Easy'
  },
  {
    id: 'rectangle-area',
    title: 'Rectangle Area',
    description: 'Calculate area and perimeter using encapsulation.',
    difficulty: 'Easy'
  },
  {
    id: 'student-record',
    title: 'Student Record',
    description: 'Create a class to store and display student details.',
    difficulty: 'Easy'
  },
  {
    id: 'vehicle-class',
    title: 'Vehicle Class',
    description: 'Design a Vehicle class with fields and methods.',
    difficulty: 'Easy'
  },
  {
    id: 'time-class',
    title: 'Time Class',
    description: 'Create a Time class to handle time operations.',
    difficulty: 'Easy'
  },
  {
    id: 'person-class',
    title: 'Person Class',
    description: 'Create a Person class with encapsulated fields.',
    difficulty: 'Easy'
  },
  {
    id: 'shapes-class',
    title: 'Shapes Class',
    description: 'Encapsulate properties of basic geometric shapes.',
    difficulty: 'Easy'
  },

  // Medium Exercises (Inheritance)
  {
    id: 'shape-hierarchy',
    title: 'Shape Hierarchy',
    description: 'Implement inheritance with Shape classes.',
    difficulty: 'Medium'
  },
  {
    id: 'banking-system',
    title: 'Banking System',
    description: 'Simulate a banking system with classes and inheritance.',
    difficulty: 'Medium'
  },
  {
    id: 'animal-hierarchy',
    title: 'Animal Hierarchy',
    description: 'Design an inheritance hierarchy for animals.',
    difficulty: 'Medium'
  },
  {
    id: 'university-system',
    title: 'University System',
    description: 'Model a university system with classes and relationships.',
    difficulty: 'Medium'
  },
  {
    id: 'ecommerce-cart',
    title: 'E-commerce Cart',
    description: 'Design a cart system with inheritance and relationships.',
    difficulty: 'Medium'
  },
  {
    id: 'sports-team',
    title: 'Sports Team',
    description: 'Model a sports team hierarchy with inheritance.',
    difficulty: 'Medium'
  },
  {
    id: 'game-characters',
    title: 'Game Characters',
    description: 'Create a hierarchy of game characters with inheritance.',
    difficulty: 'Medium'
  },
  {
    id: 'vehicle-inheritance',
    title: 'Vehicle Inheritance',
    description: 'Demonstrate inheritance between Vehicle and Car classes.',
    difficulty: 'Medium'
  },
  {
    id: 'hospital-system',
    title: 'Hospital System',
    description: 'Model a hospital system with inheritance.',
    difficulty: 'Medium'
  },
  {
    id: 'organization-structure',
    title: 'Organization Structure',
    description: 'Simulate an organization hierarchy with inheritance.',
    difficulty: 'Medium'
  },

  // Hard Exercises (Polymorphism and Abstraction)
  {
    id: 'polymorphic-shapes',
    title: 'Polymorphic Shapes',
    description: 'Implement polymorphism to calculate shape areas.',
    difficulty: 'Hard'
  },
  {
    id: 'abstract-employee',
    title: 'Abstract Employee',
    description: 'Design an abstract class for different employee types.',
    difficulty: 'Hard'
  },
  {
    id: 'animal-interface',
    title: 'Animal Interface',
    description: 'Create interfaces for different animal behaviors.',
    difficulty: 'Hard'
  },
  {
    id: 'payment-system',
    title: 'Payment System',
    description: 'Use polymorphism for different payment methods.',
    difficulty: 'Hard'
  },
  {
    id: 'game-engine',
    title: 'Game Engine',
    description: 'Model a game engine using polymorphism and abstraction.',
    difficulty: 'Hard'
  },
  {
    id: 'plugin-system',
    title: 'Plugin System',
    description: 'Design a plugin system using interfaces.',
    difficulty: 'Hard'
  },
  {
    id: 'shape-interface',
    title: 'Shape Interface',
    description: 'Create an interface for shapes and implement it.',
    difficulty: 'Hard'
  },
  {
    id: 'ecommerce-abstract',
    title: 'E-commerce Abstract',
    description: 'Use abstract classes for order management in e-commerce.',
    difficulty: 'Hard'
  },
  {
    id: 'vehicle-interface',
    title: 'Vehicle Interface',
    description: 'Design an interface for vehicles and implement it.',
    difficulty: 'Hard'
  },
  {
    id: 'abstract-payment',
    title: 'Abstract Payment',
    description: 'Model a payment system using abstract classes.',
    difficulty: 'Hard'
  },
  {
    id: 'polymorphic-calculator',
    title: 'Polymorphic Calculator',
    description: 'Demonstrate polymorphism with arithmetic operations.',
    difficulty: 'Hard'
  },
  {
    id: 'remote-control',
    title: 'Remote Control',
    description: 'Design a remote control using interfaces.',
    difficulty: 'Hard'
  },
  {
    id: 'transport-system',
    title: 'Transport System',
    description: 'Model a transport system using polymorphism.',
    difficulty: 'Hard'
  },
  {
    id: 'data-processing',
    title: 'Data Processing',
    description: 'Use abstraction for a data processing pipeline.',
    difficulty: 'Hard'
  },
  {
    id: 'music-library',
    title: 'Music Library',
    description: 'Model a music library with abstract classes and interfaces.',
    difficulty: 'Hard'
  },
  {
    id: 'robot-behavior',
    title: 'Robot Behavior',
    description: 'Create an abstract class for robot behaviors.',
    difficulty: 'Hard'
  }
];

const OOPExercises: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Java OOP Practice</h1>
          <p className="text-gray-400">
            Practice Object-Oriented Programming concepts with hands-on coding exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oopExercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/hands-on/oop/${exercise.id}`}
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

export default OOPExercises;