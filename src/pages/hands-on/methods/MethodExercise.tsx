import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'basic-method': {
    title: "Basic Method Creation",
    description: "Create a simple method to add two numbers.",
    difficulty: "Easy",
    initialCode: `public class Main {
    // Create a method to add two numbers
    
    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 3;
        // Call the method and print result
    }
}`,
    solution: `public class Main {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 3;
        int sum = add(num1, num2);
        System.out.println("Sum: " + sum);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Method Declaration',
        input: '',
        expectedOutput: 'public static int add',
        points: 2
      },
      {
        id: 'tc2',
        type: 'parameter',
        description: 'Parameters Check',
        input: '',
        expectedOutput: '(int a, int b)',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Output Check',
        input: '',
        expectedOutput: 'Sum: 8',
        points: 2
      }
    ]
  },

  'method-overloading': {
    title: "Method Overloading",
    description: "Create overloaded methods to calculate area of different shapes.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Create overloaded methods named 'area' for:
    // 1. Circle (radius)
    // 2. Rectangle (length, width)
    // 3. Square (side)
    
    public static void main(String[] args) {
        // Test all three area methods
    }
}`,
    solution: `public class Main {
    public static double area(double radius) {
        return Math.PI * radius * radius;
    }
    
    public static double area(double length, double width) {
        return length * width;
    }
    
    public static double area(int side) {
        return side * side;
    }
    
    public static void main(String[] args) {
        System.out.printf("Circle area: %.2f%n", area(5.0));
        System.out.printf("Rectangle area: %.2f%n", area(4.0, 6.0));
        System.out.printf("Square area: %.2f%n", area(5));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Circle Method',
        input: '',
        expectedOutput: 'Math.PI * radius * radius',
        points: 2
      },
      {
        id: 'tc2',
        type: 'method',
        description: 'Rectangle Method',
        input: '',
        expectedOutput: 'length * width',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Circle Area Check',
        input: '',
        expectedOutput: 'Circle area: 78.54',
        points: 2
      }
    ]
  },

  'recursive-factorial': {
    title: "Recursive Factorial",
    description: "Create a recursive method to calculate factorial of a number.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Create recursive factorial method
    
    public static void main(String[] args) {
        int n = 5;
        // Calculate and print factorial of n
    }
}`,
    solution: `public class Main {
    public static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        int n = 5;
        System.out.println("Factorial of " + n + " is: " + factorial(n));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Recursive Call Check',
        input: '',
        expectedOutput: 'factorial(n - 1)',
        points: 2
      },
      {
        id: 'tc2',
        type: 'structure',
        description: 'Base Case Check',
        input: '',
        expectedOutput: 'if (n <= 1)',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Factorial Result',
        input: '',
        expectedOutput: 'Factorial of 5 is: 120',
        points: 2
      }
    ]
  },

  'array-operations': {
    title: "Array Operations",
    description: "Create methods to perform array operations (find max, min, average).",
    difficulty: "Easy",
    initialCode: `public class Main {
    // Create three methods:
    // 1. findMax(int[] arr)
    // 2. findMin(int[] arr)
    // 3. calculateAverage(int[] arr)
    
    public static void main(String[] args) {
        int[] numbers = {23, 45, 12, 67, 89, 34};
        // Call and test all three methods
    }
}`,
    solution: `public class Main {
    public static int findMax(int[] arr) {
        int max = arr[0];
        for(int num : arr) {
            if(num > max) max = num;
        }
        return max;
    }
    
    public static int findMin(int[] arr) {
        int min = arr[0];
        for(int num : arr) {
            if(num < min) min = num;
        }
        return min;
    }
    
    public static double calculateAverage(int[] arr) {
        int sum = 0;
        for(int num : arr) {
            sum += num;
        }
        return (double)sum / arr.length;
    }
    
    public static void main(String[] args) {
        int[] numbers = {23, 45, 12, 67, 89, 34};
        System.out.println("Maximum: " + findMax(numbers));
        System.out.println("Minimum: " + findMin(numbers));
        System.out.printf("Average: %.2f%n", calculateAverage(numbers));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Max Method Check',
        input: '',
        expectedOutput: 'findMax(int[] arr)',
        points: 2
      },
      {
        id: 'tc2',
        type: 'output',
        description: 'Maximum Value Check',
        input: '',
        expectedOutput: 'Maximum: 89',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Average Check',
        input: '',
        expectedOutput: 'Average: 45.00',
        points: 2
      }
    ]
  },

  'string-utils': {
    title: "String Manipulation Methods",
    description: "Create methods to manipulate strings (reverse, check palindrome, count vowels).",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Create three methods:
    // 1. reverseString(String str)
    // 2. isPalindrome(String str)
    // 3. countVowels(String str)
    
    public static void main(String[] args) {
        String text = "Hello World";
        String palindrome = "radar";
        // Test all methods with both strings
    }
}`,
    solution: `public class Main {
    public static String reverseString(String str) {
        StringBuilder reversed = new StringBuilder();
        for(int i = str.length() - 1; i >= 0; i--) {
            reversed.append(str.charAt(i));
        }
        return reversed.toString();
    }
    
    public static boolean isPalindrome(String str) {
        str = str.toLowerCase();
        int left = 0, right = str.length() - 1;
        while(left < right) {
            if(str.charAt(left) != str.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }
    
    public static int countVowels(String str) {
        int count = 0;
        str = str.toLowerCase();
        for(char c : str.toCharArray()) {
            if("aeiou".indexOf(c) != -1) count++;
        }
        return count;
    }
    
    public static void main(String[] args) {
        String text = "Hello World";
        String palindrome = "radar";
        
        System.out.println("Reversed: " + reverseString(text));
        System.out.println("Is palindrome: " + isPalindrome(palindrome));
        System.out.println("Vowel count: " + countVowels(text));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Reverse Method Check',
        input: '',
        expectedOutput: 'reverseString(String str)',
        points: 2
      },
      {
        id: 'tc2',
        type: 'output',
        description: 'Reverse Check',
        input: '',
        expectedOutput: 'Reversed: dlroW olleH',
        points: 2
      },
      {
        id: 'tc3',
        type: 'output',
        description: 'Palindrome Check',
        input: '',
        expectedOutput: 'Is palindrome: true',
        points: 2
      }
    ]
  },

  'matrix-operations': {
    title: "Matrix Chain Multiplication",
    description: "Minimize the cost of multiplying matrices using dynamic programming.",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Implement matrix chain multiplication
    // Return the minimum number of operations needed
    
    public static void main(String[] args) {
        int[] dimensions = {10, 30, 5, 60};
        // Calculate and print minimum operations needed
    }
}`,
    solution: `public class Main {
    public static int matrixChainMultiplication(int[] dimensions) {
        int n = dimensions.length - 1;
        int[][] dp = new int[n][n];
        
        for(int len = 2; len <= n; len++) {
            for(int i = 0; i < n - len + 1; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for(int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k+1][j] + 
                             dimensions[i] * dimensions[k+1] * dimensions[j+1];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }
        return dp[0][n-1];
    }
    
    public static void main(String[] args) {
        int[] dimensions = {10, 30, 5, 60};
        System.out.println("Minimum operations needed: " + 
                         matrixChainMultiplication(dimensions));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Method Implementation',
        input: '',
        expectedOutput: 'matrixChainMultiplication(int[] dimensions)',
        points: 2
      },
      {
        id: 'tc2',
        type: 'output',
        description: 'Basic Test Case',
        input: '',
        expectedOutput: 'Minimum operations needed: 4500',
        points: 3
      }
    ]
  },

  'graph-bipartite': {
    title: "Graph Bipartite Check",
    description: "Determine if a given graph is bipartite.",
    difficulty: "Medium",
    initialCode: `import java.util.*;

public class Main {
  // Create a method to check if the graph is bipartite
  
  public static void main(String[] args) {
      int[][] graph = {
          {1, 3},
          {0, 2},
          {1, 3},
          {0, 2}
      };
      // Check and print if the graph is bipartite
  }
}`,
    solution: `import java.util.*;

public class Main {
  public static boolean isBipartite(int[][] graph) {
      int n = graph.length;
      int[] colors = new int[n];
      Arrays.fill(colors, -1);

      for (int i = 0; i < n; i++) {
          if (colors[i] == -1) {
              if (!isValidBipartite(graph, i, colors)) return false;
          }
      }
      return true;
  }

  private static boolean isValidBipartite(int[][] graph, int node, int[] colors) {
      Queue<Integer> queue = new LinkedList<>();
      queue.add(node);
      colors[node] = 0;

      while (!queue.isEmpty()) {
          int curr = queue.poll();
          for (int neighbor : graph[curr]) {
              if (colors[neighbor] == -1) {
                  colors[neighbor] = 1 - colors[curr];
                  queue.add(neighbor);
              } else if (colors[neighbor] == colors[curr]) {
                  return false;
              }
          }
      }
      return true;
  }

  public static void main(String[] args) {
      int[][] graph = {
          {1, 3},
          {0, 2},
          {1, 3},
          {0, 2}
      };
      System.out.println("Is Bipartite: " + isBipartite(graph));
  }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Typical Bipartite Graph',
        input: `
            graph = [
                [1, 3],
                [0, 2],
                [1, 3],
                [0, 2]
            ]
        `,
        expectedOutput: 'true',
        points: 3
      },
      {
        id: 'tc2',
        type: 'output',
        description: 'Non-Bipartite Graph',
        input: `
            graph = [
                [1, 2],
                [0, 2],
                [0, 1]
            ]
        `,
        expectedOutput: 'false',
        points: 3
      },
      {
        id: 'tc3',
        type: 'edge-case',
        description: 'Empty Graph',
        input: 'graph = []',
        expectedOutput: 'true',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Single Node Graph',
        input: 'graph = [[]]',
        expectedOutput: 'true',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Graph with Self Loop',
        input: `
            graph = [
                [0],
                []
            ]
        `,
        expectedOutput: 'false',
        points: 3
      }
    ]
  },

  'interval-merge': {
    title: "Merge Intervals",
    description: "Merge overlapping intervals in a list of intervals.",
    difficulty: "Medium",
    initialCode: `import java.util.*;

public class Main {
  // Create a method to merge overlapping intervals
  
  public static void main(String[] args) {
      int[][] intervals = {
          {1, 3},
          {2, 6},
          {8, 10},
          {15, 18}
      };
      // Merge the intervals and print the result
  }
}`,
    solution: `import java.util.*;

public class Main {
  public static int[][] mergeIntervals(int[][] intervals) {
      if (intervals.length <= 1) return intervals;

      Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
      List<int[]> result = new ArrayList<>();

      int[] currentInterval = intervals[0];
      result.add(currentInterval);

      for (int[] interval : intervals) {
          if (interval[0] <= currentInterval[1]) {
              currentInterval[1] = Math.max(currentInterval[1], interval[1]);
          } else {
              currentInterval = interval;
              result.add(currentInterval);
          }
      }

      return result.toArray(new int[result.size()][]);
  }

  public static void main(String[] args) {
      int[][] intervals = {
          {1, 3},
          {2, 6},
          {8, 10},
          {15, 18}
      };
      int[][] merged = mergeIntervals(intervals);
      for (int[] interval : merged) {
          System.out.println(Arrays.toString(interval));
      }
  }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Typical Case',
        input: `
            intervals = [
                [1, 3],
                [2, 6],
                [8, 10],
                [15, 18]
            ]
        `,
        expectedOutput: '[[1, 6], [8, 10], [15, 18]]',
        points: 3
      },
      {
        id: 'tc2',
        type: 'output',
        description: 'Non-Overlapping Intervals',
        input: `
            intervals = [
                [1, 2],
                [3, 4],
                [5, 6]
            ]
        `,
        expectedOutput: '[[1, 2], [3, 4], [5, 6]]',
        points: 3
      },
      {
        id: 'tc3',
        type: 'edge-case',
        description: 'Single Interval',
        input: 'intervals = [[1, 5]]',
        expectedOutput: '[[1, 5]]',
        points: 2
      },
      {
        id: 'tc4',
        type: 'edge-case',
        description: 'All Intervals Overlap',
        input: `
            intervals = [
                [1, 4],
                [2, 5],
                [3, 6]
            ]
        `,
        expectedOutput: '[[1, 6]]',
        points: 3
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Empty Input',
        input: 'intervals = []',
        expectedOutput: '[]',
        points: 2
      }
    ]
  }
};

const MethodExercise: React.FC = () => {
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

export default MethodExercise; 