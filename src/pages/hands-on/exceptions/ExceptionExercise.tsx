import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'array-bounds': {
    title: "Array Bounds",
    description: "Handle ArrayIndexOutOfBoundsException.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        // Write code to handle array access safely
        try {
            System.out.println(arr[4]);
        } catch {
            // Handle the exception
        }
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        try {
            System.out.println(arr[4]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds!");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Array index out of bounds!"
      }
    ]
  }
  // Add more exception exercises...
};

const ExceptionExercise: React.FC = () => {
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

export default ExceptionExercise; 