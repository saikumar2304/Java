import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'file-read': {
    title: "File Reader",
    description: "Read contents from a text file.",
    initialCode: `import java.io.BufferedReader;
import java.io.FileReader;

public class Main {
    public static void main(String[] args) {
        // Write code to read from 'input.txt'
        try {
            // Your code here
        } catch (Exception e) {
            System.out.println("Error reading file");
        }
    }
}`,
    solution: `import java.io.BufferedReader;
import java.io.FileReader;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception e) {
            System.out.println("Error reading file");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Hello\nWorld"
      }
    ]
  }
  // Add more file handling exercises...
};

const FileExercise: React.FC = () => {
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

export default FileExercise; 