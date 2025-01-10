import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'bank-account': {
    title: "Bank Account",
    description: "Create a BankAccount class with proper encapsulation.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("John Doe", 1000.0);
        account.deposit(500.0);
        account.withdraw(200.0);
        System.out.println(account.getBalance());
    }
}

class BankAccount {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("John Doe", 1000.0);
        account.deposit(500.0);
        account.withdraw(200.0);
        System.out.println(account.getBalance());
    }
}

class BankAccount {
    private String accountHolder;
    private double balance;
    
    public BankAccount(String accountHolder, double initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "1300.0"
      }
    ]
  },
  'shape-hierarchy': {
    title: "Shape Hierarchy",
    description: "Implement inheritance with Shape classes.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5),
            new Rectangle(4, 6)
        };
        
        for (Shape shape : shapes) {
            System.out.println(shape.getArea());
        }
    }
}

abstract class Shape {
    // Write your code here
}

class Circle extends Shape {
    // Write your code here
}

class Rectangle extends Shape {
    // Write your code here
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5),
            new Rectangle(4, 6)
        };
        
        for (Shape shape : shapes) {
            System.out.println(shape.getArea());
        }
    }
}

abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    double getArea() {
        return width * height;
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "78.53981633974483\n24.0"
      }
    ]
  }
};

const OOPExercise: React.FC = () => {
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

export default OOPExercise; 