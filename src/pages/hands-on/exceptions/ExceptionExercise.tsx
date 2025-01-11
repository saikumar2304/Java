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
  },
  'number-format': {
    title: "Number Format",
    description: "Handle NumberFormatException when parsing strings.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String number = "123a";
        // Write code to handle invalid number format
        try {
            int result = Integer.parseInt(number);
        } catch {
            // Handle the exception
        }
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String number = "123a";
        try {
            int result = Integer.parseInt(number);
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format!");
        }
    }
}`,
    testCases: [
      {
        input: "123a",
        expectedOutput: "Invalid number format!"
      }
    ]
  },
  'null-pointer': {
    title: "Null Pointer",
    description: "Handle NullPointerException in object references.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = null;
        // Write code to handle null values
        try {
            System.out.println(str.length());
        } catch {
            // Handle the exception
        }
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = null;
        try {
            System.out.println(str.length());
        } catch (NullPointerException e) {
            System.out.println("Null value encountered!");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Null value encountered!"
      }
    ]
  },
  'arithmetic-exception': {
    title: "Arithmetic Exception",
    description: "Handle ArithmeticException during division.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int dividend = 10, divisor = 0;
        // Write code to handle division by zero
        try {
            int result = dividend / divisor;
        } catch {
            // Handle the exception
        }
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int dividend = 10, divisor = 0;
        try {
            int result = dividend / divisor;
        } catch (ArithmeticException e) {
            System.out.println("Division by zero is not allowed!");
        }
    }
}`,
    testCases: [
      {
        input: "10, 0",
        expectedOutput: "Division by zero is not allowed!"
      }
    ]
  },
  'file-not-found': {
    title: "File Not Found",
    description: "Handle FileNotFoundException during file operations.",
    initialCode: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write code to handle file not found
        try {
            Scanner scanner = new Scanner(new File("nonexistent.txt"));
        } catch {
            // Handle the exception
        }
    }
}`,
    solution: `import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(new File("nonexistent.txt"));
        } catch (FileNotFoundException e) {
            System.out.println("File not found!");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "File not found!"
      }
    ]
  },
  'custom-exception': {
    title: "Custom Exception",
    description: "Create and use a custom exception class.",
    initialCode: `public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        int age = 15;
        // Write code to throw a custom exception for invalid age
        try {
            if (age < 18) {
                throw new InvalidAgeException("Age must be 18 or above.");
            }
        } catch {
            // Handle the exception
        }
    }
}`,
    solution: `public class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        int age = 15;
        try {
            if (age < 18) {
                throw new InvalidAgeException("Age must be 18 or above.");
            }
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
    testCases: [
      {
        input: "15",
        expectedOutput: "Age must be 18 or above."
      }
    ]
  },
  'try-catch-finally': {
    title: "Try-Catch-Finally",
    description: "Demonstrate the use of try-catch-finally blocks.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        try {
            // Add code that may throw an exception
        } catch (Exception e) {
            // Handle the exception
        } finally {
            // Execute code regardless of exception
        }
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException caught!");
        } finally {
            System.out.println("This will always execute.");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "ArithmeticException caught!\nThis will always execute."
      }
    ]
  },
  'nested-try-catch': {
    title: "Nested Try-Catch",
    description: "Use nested try-catch blocks for multiple exceptions.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        try {
            // Add code that may throw multiple exceptions
        } catch (Exception e) {
            try {
                // Handle another exception inside
            } catch (Exception inner) {
                // Handle the inner exception
            }
        }
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            int[] arr = new int[2];
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Outer Exception: " + e.getMessage());
            try {
                int result = 10 / 0;
            } catch (ArithmeticException inner) {
                System.out.println("Inner Exception: " + inner.getMessage());
            }
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Outer Exception: Index 5 out of bounds for length 2\nInner Exception: / by zero"
      }
    ]
  },
  'resource-handling': {
    title: "Resource Handling",
    description: "Use try-with-resources for file operations.",
    initialCode: `import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Add code to demonstrate try-with-resources
    }
}`,
    solution: `import java.io.*;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("test.txt"))) {
            System.out.println(reader.readLine());
        } catch (IOException e) {
            System.out.println("File operation failed: " + e.getMessage());
        }
    }
}`,
    testCases: [
      {
        input: "test.txt",
        expectedOutput: "File operation failed: test.txt (No such file or directory)"
      }
    ]
  },
  'exception-propagation': {
    title: "Exception Propagation",
    description: "Understand how exceptions propagate in method calls.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        try {
            method1();
        } catch (Exception e) {
            // Handle propagated exception
        }
    }

    static void method1() throws Exception {
        // Add code that throws an exception
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            method1();
        } catch (Exception e) {
            System.out.println("Exception caught in main: " + e.getMessage());
        }
    }

    static void method1() throws Exception {
        method2();
    }

    static void method2() throws Exception {
        throw new Exception("Exception in method2");
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Exception caught in main: Exception in method2"
      }
    ]
  },
  'multi-catch': {
    title: "Multi-Catch Blocks",
    description: "Use multi-catch blocks to handle different exceptions.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        try {
            // Add code that may throw multiple exceptions
        } catch (Exception e) {
            // Handle exceptions
        }
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            int[] arr = new int[2];
            System.out.println(arr[5]);
            int result = 10 / 0;
        } catch (ArrayIndexOutOfBoundsException | ArithmeticException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Exception caught: Index 5 out of bounds for length 2"
      }
    ]
  },
  'checked-exceptions': {
    title: "Checked Exceptions",
    description: "Handle checked exceptions during file operations.",
    initialCode: `import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // Add code that may throw checked exceptions
    }
}`,
    solution: `import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("nonexistent.txt"));
            System.out.println(reader.readLine());
        } catch (IOException e) {
            System.out.println("IOException occurred: " + e.getMessage());
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "IOException occurred: nonexistent.txt (No such file or directory)"
      }
    ]
  },
  'exception-hierarchy': {
    title: "Exception Hierarchy",
    description: "Understand the Java exception class hierarchy.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Add code to demonstrate exception hierarchy
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            throw new RuntimeException("Runtime exception example");
        } catch (Exception e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Caught Exception: Runtime exception example"
      }
    ]
  },
  'exception-best-practices': {
    title: "Exception Best Practices",
    description: "Implement exception handling best practices.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Add code demonstrating exception handling best practices
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Handled ArithmeticException gracefully.");
        } finally {
            System.out.println("Clean up resources here.");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Handled ArithmeticException gracefully.\nClean up resources here."
      }
    ]
  },
  'throw-keyword': {
    title: "Throw Keyword",
    description: "Use the throw keyword to manually throw exceptions.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Add code to throw an exception manually
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            throw new IllegalArgumentException("This is a manual exception");
        } catch (IllegalArgumentException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Caught Exception: This is a manual exception"
      }
    ]
  },
  'throws-declaration': {
    title: "Throws Declaration",
    description: "Use the throws keyword in method signatures.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        try {
            riskyMethod();
        } catch (Exception e) {
            // Handle the exception
        }
    }

    static void riskyMethod() throws Exception {
        // Add code to throw an exception
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            riskyMethod();
        } catch (Exception e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
    }

    static void riskyMethod() throws Exception {
        throw new Exception("Exception from riskyMethod");
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Exception caught: Exception from riskyMethod"
      }
    ]
  },
  'unhandled-exceptions': {
    title: "Unhandled Exceptions",
    description: "Analyze scenarios with unhandled exceptions.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Add code to demonstrate unhandled exceptions
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        System.out.println(arr[4]); // This will throw ArrayIndexOutOfBoundsException
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 3"
      }
    ]
  },
  'rethrow-exception': {
    title: "Rethrow Exception",
    description: "Demonstrate rethrowing exceptions in a catch block.",
    initialCode: `public class Main {
    public static void main(String[] args) throws Exception {
        try {
            method1();
        } catch (Exception e) {
            // Rethrow the exception
        }
    }

    static void method1() throws Exception {
        throw new Exception("Original Exception");
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            method1();
        } catch (Exception e) {
            System.out.println("Caught and rethrew: " + e.getMessage());
            throw e; // Rethrowing the exception
        }
    }

    static void method1() throws Exception {
        throw new Exception("Original Exception");
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Caught and rethrew: Original Exception"
      }
    ]
  },
  'custom-runtime-exception': {
    title: "Custom Runtime Exception",
    description: "Create and use a custom unchecked exception.",
    initialCode: `public class InvalidDataException extends RuntimeException {
    public InvalidDataException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        // Add code to throw custom unchecked exception
    }
}`,
    solution: `public class InvalidDataException extends RuntimeException {
    public InvalidDataException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        throw new InvalidDataException("This is a custom runtime exception");
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Exception in thread \"main\" InvalidDataException: This is a custom runtime exception"
      }
    ]
  },
  'logging-exceptions': {
    title: "Logging Exceptions",
    description: "Use logging frameworks to log exceptions.",
    initialCode: `import java.util.logging.*;

public class Main {
    public static void main(String[] args) {
        Logger logger = Logger.getLogger(Main.class.getName());
        // Add code to log exceptions
    }
}`,
    solution: `import java.util.logging.*;

public class Main {
    public static void main(String[] args) {
        Logger logger = Logger.getLogger(Main.class.getName());
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            logger.severe("Exception occurred: " + e.getMessage());
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "SEVERE: Exception occurred: / by zero"
      }
    ]
  }
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