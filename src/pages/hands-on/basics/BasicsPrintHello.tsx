import React from 'react';
import HandsOnExercise from '../../../components/HandsOnExercise';

const BasicsPrintHello: React.FC = () => {
  return (
    <HandsOnExercise
      title="Print Hello World"
      description="Write a Java program to print 'Hello, World!' to the console."
      initialCode={`public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`}
      solution={`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
      testCases={[
        {
          input: "",
          expectedOutput: "Hello, World!"
        }
      ]}
    />
  );
};

export default BasicsPrintHello; 