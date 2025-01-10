import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
    'array-sum': {
      title: "Sum of Array Elements",
      description: "Write a program to calculate the sum of all elements in an array.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {1, 2, 3, 4, 5};
          // Write your code here to calculate sum
      }
  }`,
      solution: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {1, 2, 3, 4, 5};
          int sum = 0;
          for(int num : numbers) {
              sum += num;
          }
          System.out.println(sum);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "15"
        }
      ]
    },
    'find-max': {
      title: "Find Maximum Element",
      description: "Write a program to find the largest element in an array.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {12, 45, 7, 23, 9};
          // Write your code here to find max
      }
  }`,
      solution: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {12, 45, 7, 23, 9};
          int max = numbers[0];
          for(int i = 1; i < numbers.length; i++) {
              if(numbers[i] > max) {
                  max = numbers[i];
              }
          }
          System.out.println(max);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "45"
        }
      ]
    },
    'find-min': {
      title: "Find Minimum Element",
      description: "Write a program to find the smallest element in an array.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {12, 45, 7, 23, 9};
          // Write your code here to find min
      }
  }`,
      solution: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {12, 45, 7, 23, 9};
          int min = numbers[0];
          for(int i = 1; i < numbers.length; i++) {
              if(numbers[i] < min) {
                  min = numbers[i];
              }
          }
          System.out.println(min);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "7"
        }
      ]
    },
    'reverse-array': {
      title: "Reverse Array",
      description: "Write a program to reverse the elements of an array.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {1, 2, 3, 4, 5};
          // Write your code here to reverse array
      }
  }`,
      solution: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {1, 2, 3, 4, 5};
          for(int i = 0, j = numbers.length - 1; i < j; i++, j--) {
              int temp = numbers[i];
              numbers[i] = numbers[j];
              numbers[j] = temp;
          }
          for(int num : numbers) {
              System.out.print(num + " ");
          }
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "5 4 3 2 1"
        }
      ]
    },
    'array-average': {
      title: "Calculate Average",
      description: "Find the average of all elements in an array.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {10, 20, 30, 40, 50};
          // Write your code here to calculate average
      }
  }`,
      solution: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {10, 20, 30, 40, 50};
          int sum = 0;
          for(int num : numbers) {
              sum += num;
          }
          double average = sum / (double) numbers.length;
          System.out.println(average);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "30.0"
        }
      ]
    },
    'array-frequency': {
      title: "Element Frequency",
      description: "Count the frequency of each element in an array.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[] numbers = {1, 2, 2, 3, 3, 3};
          // Write your code here to count frequency
      }
  }`,
      solution: `import java.util.HashMap;
  
  public class Main {
      public static void main(String[] args) {
          int[] numbers = {1, 2, 2, 3, 3, 3};
          HashMap<Integer, Integer> frequencyMap = new HashMap<>();
          for(int num : numbers) {
              frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
          }
          System.out.println(frequencyMap);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "{1=1, 2=2, 3=3}"
        }
      ]
    },
    'matrix-addition': {
      title: "Matrix Addition",
      description: "Write a program to add two matrices.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[][] matrix1 = {
              {1, 2},
              {3, 4}
          };
          int[][] matrix2 = {
              {5, 6},
              {7, 8}
          };
          // Write your code here to add matrices
      }
  }`,
      solution: `public class Main {
      public static void main(String[] args) {
          int[][] matrix1 = {
              {1, 2},
              {3, 4}
          };
          int[][] matrix2 = {
              {5, 6},
              {7, 8}
          };
          int[][] result = new int[matrix1.length][matrix1[0].length];
          for(int i = 0; i < matrix1.length; i++) {
              for(int j = 0; j < matrix1[0].length; j++) {
                  result[i][j] = matrix1[i][j] + matrix2[i][j];
              }
          }
          for(int[] row : result) {
              for(int num : row) {
                  System.out.print(num + " ");
              }
              System.out.println();
          }
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "6 8\n10 12"
        }
      ]
    },
    'matrix-multiplication': {
      title: "Matrix Multiplication",
      description: "Write a program to multiply two matrices.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[][] matrix1 = {
              {1, 2},
              {3, 4}
          };
          int[][] matrix2 = {
              {5, 6},
              {7, 8}
          };
          // Write your code here to multiply matrices
      }
  }`,
      solution: `public class Main {
      public static void main(String[] args) {
          int[][] matrix1 = {
              {1, 2},
              {3, 4}
          };
          int[][] matrix2 = {
              {5, 6},
              {7, 8}
          };
          int[][] result = new int[matrix1.length][matrix2[0].length];
          for(int i = 0; i < matrix1.length; i++) {
              for(int j = 0; j < matrix2[0].length; j++) {
                  for(int k = 0; k < matrix1[0].length; k++) {
                      result[i][j] += matrix1[i][k] * matrix2[k][j];
                  }
              }
          }
          for(int[] row : result) {
              for(int num : row) {
                  System.out.print(num + " ");
              }
              System.out.println();
          }
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "19 22\n43 50"
        }
      ]
    },
    'spiral-traversal': {
      title: "Spiral Traversal",
      description: "Traverse a matrix in spiral order.",
      initialCode: `public class Main {
      public static void main(String[] args) {
          int[][] matrix = {
              {1, 2, 3},
              {4, 5, 6},
              {7, 8, 9}
          };
          // Write your code here to traverse in spiral order
      }
  }`,
      solution: `public class Main {
      public static void main(String[] args) {
          int[][] matrix = {
              {1, 2, 3},
              {4, 5, 6},
              {7, 8, 9}
          };
          int top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
          while(top <= bottom && left <= right) {
              for(int i = left; i <= right; i++) System.out.print(matrix[top][i] + " ");
              top++;
              for(int i = top; i <= bottom; i++) System.out.print(matrix[i][right] + " ");
              right--;
              if(top <= bottom) {
                  for(int i = right; i >= left; i--) System.out.print(matrix[bottom][i] + " ");
                  bottom--;
              }
              if(left <= right) {
                  for(int i = bottom; i >= top; i--) System.out.print(matrix[i][left] + " ");
                  left++;
              }
          }
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "1 2 3 6 9 8 7 4 5"
        }
      ]
    },
    'sort-array': {
    title: "Sort Array",
    description: "Write a program to sort an array in ascending order.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 9, 1, 5, 6};
        // Write your code here to sort the array
    }
}`,
    solution: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 9, 1, 5, 6};
        Arrays.sort(numbers);
        for (int num : numbers) {
            System.out.print(num + " ");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "1 2 5 5 6 9"
      }
    ]
  },
  'find-second-largest': {
    title: "Find Second Largest Element",
    description: "Write a program to find the second largest element in an array.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 4, 45, 99};
        // Write your code here to find the second largest element
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 4, 45, 99};
        int largest = Integer.MIN_VALUE, secondLargest = Integer.MIN_VALUE;
        for (int num : numbers) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
        System.out.println(secondLargest);
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "45"
      }
    ]
  },
  'remove-duplicates': {
    title: "Remove Duplicates",
    description: "Write a program to remove duplicate elements from an array.",
    initialCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 2, 3, 4, 4, 5};
        // Write your code here to remove duplicates
    }
}`,
    solution: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 2, 3, 4, 4, 5};
        int[] uniqueNumbers = Arrays.stream(numbers).distinct().toArray();
        for (int num : uniqueNumbers) {
            System.out.print(num + " ");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "1 2 3 4 5"
      }
    ]
  },
  'merge-arrays': {
    title: "Merge Two Arrays",
    description: "Write a program to merge two arrays into one.",
    initialCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5};
        int[] arr2 = {2, 4, 6};
        // Write your code here to merge arrays
    }
}`,
    solution: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5};
        int[] arr2 = {2, 4, 6};
        int[] merged = new int[arr1.length + arr2.length];
        System.arraycopy(arr1, 0, merged, 0, arr1.length);
        System.arraycopy(arr2, 0, merged, arr1.length, arr2.length);
        Arrays.sort(merged);
        for (int num : merged) {
            System.out.print(num + " ");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "1 2 3 4 5 6"
      }
    ]
  },
  'rotate-array': {
    title: "Rotate Array",
    description: "Write a program to rotate an array by a given number of positions.",
    initialCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int k = 2; // Number of positions to rotate
        // Write your code here to rotate the array
    }
}`,
    solution: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int k = 2; // Number of positions to rotate
        k = k % numbers.length;
        int[] rotated = new int[numbers.length];
        System.arraycopy(numbers, numbers.length - k, rotated, 0, k);
        System.arraycopy(numbers, 0, rotated, k, numbers.length - k);
        for (int num : rotated) {
            System.out.print(num + " ");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "4 5 1 2 3"
      }
    ]
  },
  'sum-diagonals': {
    title: "Sum of Diagonals",
    description: "Write a program to calculate the sum of the diagonals in a square matrix.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        // Write your code here to calculate diagonal sums
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        int primarySum = 0, secondarySum = 0;
        for (int i = 0; i < matrix.length; i++) {
            primarySum += matrix[i][i];
            secondarySum += matrix[i][matrix.length - i - 1];
        }
        System.out.println("Primary Diagonal Sum: " + primarySum);
        System.out.println("Secondary Diagonal Sum: " + secondarySum);
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Primary Diagonal Sum: 15\nSecondary Diagonal Sum: 15"
      }
    ]
  },
  'search-element': {
    title: "Search Element in Array",
    description: "Write a program to search for a specific element in an array.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int target = 30;
        // Write your code here to search for the element
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int target = 30;
        boolean found = false;
        for (int num : numbers) {
            if (num == target) {
                found = true;
                break;
            }
        }
        System.out.println(found ? "Element found" : "Element not found");
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Element found"
      }
    ]
  },
  'pair-sum': {
    title: "Pair Sum",
    description: "Write a program to find all pairs in an array whose sum equals a given number.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {2, 4, 3, 7, 1};
        int targetSum = 5;
        // Write your code here to find pairs
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {2, 4, 3, 7, 1};
        int targetSum = 5;
        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] == targetSum) {
                    System.out.println("(" + numbers[i] + ", " + numbers[j] + ")");
                }
            }
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "(2, 3)"
      }
    ]
  },
  'transpose-matrix': {
    title: "Transpose Matrix",
    description: "Write a program to find the transpose of a matrix.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2},
            {3, 4}
        };
        // Write your code here to find transpose
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2},
            {3, 4}
        };
        int[][] transpose = new int[matrix[0].length][matrix.length];
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        for (int[] row : transpose) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "1 3\n2 4"
      }
    ]
  },
  'zigzag-traversal': {
    title: "Zigzag Traversal",
    description: "Write a program to traverse a matrix in a zigzag pattern.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        // Write your code here for zigzag traversal
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        for (int i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (int j = 0; j < matrix[i].length; j++) {
                    System.out.print(matrix[i][j] + " ");
                }
            } else {
                for (int j = matrix[i].length - 1; j >= 0; j--) {
                    System.out.print(matrix[i][j] + " ");
                }
            }
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "1 2 3 6 5 4 7 8 9"
      }
    ]
  },
  'partition-array': {
    title: "Partition Array",
    description: "Write a program to partition an array into even and odd numbers.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        // Write your code here to partition the array
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Even: ");
        for (int num : numbers) {
            if (num % 2 == 0) System.out.print(num + " ");
        }
        System.out.print("\\nOdd: ");
        for (int num : numbers) {
            if (num % 2 != 0) System.out.print(num + " ");
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Even: 2 4\nOdd: 1 3 5"
      }
    ]
  }
  };
  
const ArrayExercise: React.FC = () => {
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

export default ArrayExercise; 