import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'string-reverse': {
    title: "Reverse String",
    description: "Write a program to reverse a string without using StringBuilder.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        // Write your code here to reverse the string
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        char[] chars = str.toCharArray();
        for(int i = 0; i < chars.length/2; i++) {
            char temp = chars[i];
            chars[i] = chars[chars.length-1-i];
            chars[chars.length-1-i] = temp;
        }
        System.out.println(new String(chars));
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "dlroW olleH"
      }
    ]
  },
  'count-vowels': {
    title: "Count Vowels",
    description: "Count the number of vowels in a given string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        // Write your code here to count vowels
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        int count = 0;
        str = str.toLowerCase();
        for(char c : str.toCharArray()) {
            if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        System.out.println(count);
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "3"
      }
    ]
  }
};

const StringExercise: React.FC = () => {
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

export default StringExercise; 