import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'calculator': {
    title: "Simple Calculator",
    description: "Create methods for basic arithmetic operations.",
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

  'prime-checker': {
    title: "Prime Number Checker",
    description: "Write a method to check if a number is prime.",
    difficulty: "Easy",
    initialCode: `public class Main {
    // Create a method to check if a number is prime
    
    public static void main(String[] args) {
        int n = 5;
        // Check and print if n is prime
    }
}`,
    solution: `public class Main {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        int n = 5;
        System.out.println("Is " + n + " prime? " + isPrime(n));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Prime Check',
        input: '',
        expectedOutput: 'isPrime(n)',
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
        description: 'Prime Result',
        input: '',
        expectedOutput: 'Is 5 prime? true',
        points: 2
      }
    ]
  },

  'method-overloading': {
    title: "Area Calculator",
    description: "Implement method overloading to calculate area of different shapes.",
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
    description: "Calculate factorial using recursive method.",
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
    description: "Create methods for common array operations.",
    difficulty: "Hard",
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

  'palindrome-partitioning': {
    title: "Palindrome Partitioning",
    description: "Partition a string into the minimum number of palindromic substrings.",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Create a method to partition a string into palindromic substrings
    
    public static void main(String[] args) {
        String s = "abacaba";
        // Partition the string and print the result
    }
}`,
    solution: `public class Main {
    public static List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        List<String> current = new ArrayList<>();
        partitionHelper(s, 0, current, result);
        return result;
    }

    private static void partitionHelper(String s, int start, List<String> current, List<List<String>> result) {
        if (start == s.length()) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int end = start; end < s.length(); end++) {
            if (isPalindrome(s, start, end)) {
                current.add(s.substring(start, end + 1));
                partitionHelper(s, end + 1, current, result);
                current.remove(current.size() - 1);
            }
        }
    }

    private static boolean isPalindrome(String s, int start, int end) {
        while (start <= end) {
            if (s.charAt(start) != s.charAt(end)) return false;
            start++;
            end--;
        }
        return true;
    }

    public static void main(String[] args) {
        String s = "abacaba";
        List<List<String>> result = partition(s);
        for (List<String> partition : result) {
            System.out.println(partition);
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Typical Case',
        input: `
            s = "abacaba"
        `,
        expectedOutput: '[[a, b, a, c, a, b, a], [a, b, a, c, a, b, a], [a, b, a, c, a, b, a], [a, b, a, c, a, b, a]]',
        points: 3
      },
      {
        id: 'tc2',
        type: 'output',
        description: 'Non-Palindromic String',
        input: `
            s = "abc"
        `,
        expectedOutput: '[[a, b, c]]',
        points: 3
      },
      {
        id: 'tc3',
        type: 'edge-case',
        description: 'Empty String',
        input: 's = ""',
        expectedOutput: '[]',
        points: 2
      },
      {
        id: 'tc4',
        type: 'output',
        description: 'Single Character String',
        input: 's = "a"',
        expectedOutput: '[[a]]',
        points: 2
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'String with No Palindromic Substrings',
        input: `
            s = "abcde"
        `,
        expectedOutput: '[[a, b, c, d, e]]',
        points: 3
      }
    ]
  },

  'matrix-chain-multiplication': {
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

  'graph-bipartite-check': {
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

  'merge-intervals': {
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
  public static int[][] merge(int[][] intervals) {
      if (intervals.length <= 1) return intervals;

      Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
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
      int[][] merged = merge(intervals);
      System.out.println("Merged intervals:");
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
        expectedOutput: 'Merged intervals:\n[1, 6]\n[8, 10]\n[15, 18]',
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
        expectedOutput: 'Merged intervals:\n[1, 2]\n[3, 4]\n[5, 6]',
        points: 3
      },
      {
        id: 'tc3',
        type: 'edge-case',
        description: 'Single Interval',
        input: 'intervals = [[1, 5]]',
        expectedOutput: 'Merged intervals:\n[1, 5]',
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
        expectedOutput: 'Merged intervals:\n[1, 6]',
        points: 3
      },
      {
        id: 'tc5',
        type: 'output',
        description: 'Empty Input',
        input: 'intervals = []',
        expectedOutput: 'Merged intervals:\n[]',
        points: 2
      }
    ]
  },

  'longest-increasing-subsequence': {
    title: "Longest Increasing Subsequence",
    description: "Find the length of the longest increasing subsequence in an array.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement method to find longest increasing subsequence length
    
    public static void main(String[] args) {
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        // Find and print the length of LIS
    }
}`,
    solution: `public class Main {
    public static int lengthOfLIS(int[] nums) {
        if (nums.length == 0) return 0;
        int[] dp = new int[nums.length];
        dp[0] = 1;
        int maxLen = 1;
        
        for (int i = 1; i < nums.length; i++) {
            dp[i] = 1;
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
        return maxLen;
    }
    
    public static void main(String[] args) {
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println("Length of LIS: " + lengthOfLIS(nums));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: '[10,9,2,5,3,7,101,18]',
        expectedOutput: 'Length of LIS: 4',
        points: 3
      },
      {
        id: 'tc2',
        type: 'method',
        description: 'Method Implementation',
        input: '',
        expectedOutput: 'lengthOfLIS(int[] nums)',
        points: 2
      }
    ]
  },

  'subset-sum-problem': {
    title: "Subset Sum Problem",
    description: "Check if a subset exists in an array that sums up to a given number.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement method to check if subset with given sum exists
    
    public static void main(String[] args) {
        int[] nums = {3, 34, 4, 12, 5, 2};
        int sum = 9;
        // Check and print if subset exists
    }
}`,
    solution: `public class Main {
    public static boolean isSubsetSum(int[] nums, int sum) {
        boolean[][] dp = new boolean[nums.length + 1][sum + 1];
        
        // Initialize first column as true
        for (int i = 0; i <= nums.length; i++)
            dp[i][0] = true;
            
        // Fill dp table
        for (int i = 1; i <= nums.length; i++) {
            for (int j = 1; j <= sum; j++) {
                if (j < nums[i-1])
                    dp[i][j] = dp[i-1][j];
                else
                    dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
            }
        }
        return dp[nums.length][sum];
    }
    
    public static void main(String[] args) {
        int[] nums = {3, 34, 4, 12, 5, 2};
        int sum = 9;
        System.out.println("Subset with sum " + sum + " exists: " + 
                         isSubsetSum(nums, sum));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'nums = [3,34,4,12,5,2], sum = 9',
        expectedOutput: 'Subset with sum 9 exists: true',
        points: 3
      },
      {
        id: 'tc2',
        type: 'method',
        description: 'Method Implementation',
        input: '',
        expectedOutput: 'isSubsetSum(int[] nums, int sum)',
        points: 2
      }
    ]
  },

  'edit-distance': {
    title: "Edit Distance",
    description: "Compute the minimum edit distance between two strings using dynamic programming.",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Implement method to calculate minimum edit distance
    
    public static void main(String[] args) {
        String word1 = "horse";
        String word2 = "ros";
        // Calculate and print minimum operations needed
    }
}`,
    solution: `public class Main {
    public static int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i-1) == word2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i-1][j-1],  // replace
                                Math.min(dp[i-1][j],        // delete
                                       dp[i][j-1]));       // insert
                }
            }
        }
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        String word1 = "horse";
        String word2 = "ros";
        System.out.println("Minimum operations needed: " + minDistance(word1, word2));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'word1 = "horse", word2 = "ros"',
        expectedOutput: 'Minimum operations needed: 3',
        points: 3
      }
    ]
  },

  'n-queens-problem': {
    title: "N-Queens Problem",
    description: "Place N queens on an N×N chessboard so no two queens threaten each other.",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Implement N-Queens solution
    
    public static void main(String[] args) {
        int n = 4;  // 4x4 board
        // Find and print solution
    }
}`,
    solution: `public class Main {
    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> solutions = new ArrayList<>();
        int[] queens = new int[n];
        Arrays.fill(queens, -1);
        solve(0, queens, solutions);
        return solutions;
    }
    
    private static void solve(int row, int[] queens, List<List<String>> solutions) {
        if (row == queens.length) {
            solutions.add(generateBoard(queens));
            return;
        }
        
        for (int col = 0; col < queens.length; col++) {
            if (isValid(queens, row, col)) {
                queens[row] = col;
                solve(row + 1, queens, solutions);
                queens[row] = -1;
            }
        }
    }
    
    private static boolean isValid(int[] queens, int row, int col) {
        for (int i = 0; i < row; i++) {
            if (queens[i] == col || 
                queens[i] - i == col - row || 
                queens[i] + i == col + row) {
                return false;
            }
        }
        return true;
    }
    
    private static List<String> generateBoard(int[] queens) {
        List<String> board = new ArrayList<>();
        for (int i = 0; i < queens.length; i++) {
            StringBuilder row = new StringBuilder();
            for (int j = 0; j < queens.length; j++) {
                row.append(queens[i] == j ? 'Q' : '.');
            }
            board.add(row.toString());
        }
        return board;
    }
    
    public static void main(String[] args) {
        int n = 4;
        List<List<String>> solutions = solveNQueens(n);
        for (List<String> solution : solutions) {
            for (String row : solution) {
                System.out.println(row);
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: '4x4 Board Solution',
        input: 'n = 4',
        expectedOutput: '.Q..\n...Q\nQ...\n..Q.',
        points: 4
      }
    ]
  },

  'word-search': {
    title: "Word Search in a Grid",
    description: "Check if a word exists in a 2D grid following adjacent letters.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement word search in a 2D grid
    
    public static void main(String[] args) {
        char[][] board = {
            {'A','B','C','E'},
            {'S','F','C','S'},
            {'A','D','E','E'}
        };
        String word = "ABCCED";
        // Check if word exists in the grid
    }
}`,
    solution: `public class Main {
    public static boolean exist(char[][] board, String word) {
        for(int i = 0; i < board.length; i++) {
            for(int j = 0; j < board[0].length; j++) {
                if(board[i][j] == word.charAt(0) && dfs(board, i, j, 0, word)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    private static boolean dfs(char[][] board, int i, int j, int count, String word) {
        if(count == word.length()) return true;
        
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || 
           board[i][j] != word.charAt(count)) {
            return false;
        }
        
        char temp = board[i][j];
        board[i][j] = '*';
        
        boolean found = dfs(board, i+1, j, count+1, word) ||
                       dfs(board, i-1, j, count+1, word) ||
                       dfs(board, i, j+1, count+1, word) ||
                       dfs(board, i, j-1, count+1, word);
                       
        board[i][j] = temp;
        return found;
    }
    
    public static void main(String[] args) {
        char[][] board = {
            {'A','B','C','E'},
            {'S','F','C','S'},
            {'A','D','E','E'}
        };
        String word = "ABCCED";
        System.out.println("Word exists: " + exist(board, word));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'word = "ABCCED"',
        expectedOutput: 'Word exists: true',
        points: 3
      },
      {
        id: 'tc2',
        type: 'method',
        description: 'DFS Implementation',
        input: '',
        expectedOutput: 'dfs(char[][] board',
        points: 2
      }
    ]
  },

  'topological-sort': {
    title: "Topological Sort",
    description: "Implement a topological sort of a directed acyclic graph (DAG).",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Implement topological sort for a DAG
    
    public static void main(String[] args) {
        int numCourses = 4;
        int[][] prerequisites = {{1,0},{2,0},{3,1},{3,2}};
        // Find and print topological order
    }
}`,
    solution: `public class Main {
    public static int[] findOrder(int numCourses, int[][] prerequisites) {
        List<List<Integer>> adj = new ArrayList<>();
        for(int i = 0; i < numCourses; i++) {
            adj.add(new ArrayList<>());
        }
        
        int[] inDegree = new int[numCourses];
        for(int[] pre : prerequisites) {
            adj.get(pre[1]).add(pre[0]);
            inDegree[pre[0]]++;
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for(int i = 0; i < numCourses; i++) {
            if(inDegree[i] == 0) queue.offer(i);
        }
        
        int[] result = new int[numCourses];
        int index = 0;
        
        while(!queue.isEmpty()) {
            int curr = queue.poll();
            result[index++] = curr;
            
            for(int next : adj.get(curr)) {
                inDegree[next]--;
                if(inDegree[next] == 0) queue.offer(next);
            }
        }
        
        return index == numCourses ? result : new int[0];
    }
    
    public static void main(String[] args) {
        int numCourses = 4;
        int[][] prerequisites = {{1,0},{2,0},{3,1},{3,2}};
        int[] order = findOrder(numCourses, prerequisites);
        System.out.println("Topological order: " + Arrays.toString(order));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic DAG',
        input: 'prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
        expectedOutput: 'Topological order: [0, 1, 2, 3]',
        points: 3
      },
      {
        id: 'tc2',
        type: 'method',
        description: 'Method Implementation',
        input: '',
        expectedOutput: 'findOrder(int numCourses',
        points: 2
      }
    ]
  },

  'maximum-subarray-sum': {
    title: "Maximum Subarray Sum with Divide and Conquer",
    description: "Find the maximum sum of a contiguous subarray using a divide-and-conquer approach.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement divide and conquer solution for maximum subarray sum
    
    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        // Find and print maximum subarray sum
    }
}`,
    solution: `public class Main {
    public static int maxSubArray(int[] nums) {
        return maxSubArrayHelper(nums, 0, nums.length - 1);
    }
    
    private static int maxSubArrayHelper(int[] nums, int left, int right) {
        if (left == right) return nums[left];
        
        int mid = (left + right) / 2;
        int leftSum = maxSubArrayHelper(nums, left, mid);
        int rightSum = maxSubArrayHelper(nums, mid + 1, right);
        int crossSum = maxCrossingSum(nums, left, mid, right);
        
        return Math.max(Math.max(leftSum, rightSum), crossSum);
    }
    
    private static int maxCrossingSum(int[] nums, int left, int mid, int right) {
        int leftSum = Integer.MIN_VALUE;
        int sum = 0;
        for (int i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }
        
        int rightSum = Integer.MIN_VALUE;
        sum = 0;
        for (int i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }
        
        return leftSum + rightSum;
    }
    
    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Maximum subarray sum: " + maxSubArray(nums));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: '[-2,1,-3,4,-1,2,1,-5,4]',
        expectedOutput: 'Maximum subarray sum: 6',
        points: 3
      }
    ]
  },

  'dijkstra-algorithm': {
    title: "Dijkstra's Algorithm",
    description: "Find the shortest path from a source node to all other nodes in a weighted graph.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement Dijkstra's algorithm
    
    public static void main(String[] args) {
        int V = 5;  // Number of vertices
        int[][] graph = new int[V][V];  // Adjacency matrix
        // Initialize graph and find shortest paths
    }
}`,
    solution: `public class Main {
    public static void dijkstra(int[][] graph, int src) {
        int V = graph.length;
        int[] dist = new int[V];
        boolean[] visited = new boolean[V];
        
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        for (int count = 0; count < V - 1; count++) {
            int u = minDistance(dist, visited);
            visited[u] = true;
            
            for (int v = 0; v < V; v++) {
                if (!visited[v] && graph[u][v] != 0 && 
                    dist[u] != Integer.MAX_VALUE &&
                    dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
        
        printSolution(dist);
    }
    
    private static int minDistance(int[] dist, boolean[] visited) {
        int min = Integer.MAX_VALUE, minIndex = -1;
        for (int v = 0; v < dist.length; v++) {
            if (!visited[v] && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }
        return minIndex;
    }
    
    private static void printSolution(int[] dist) {
        System.out.println("Vertex \t Distance from Source");
        for (int i = 0; i < dist.length; i++) {
            System.out.println(i + " \t\t " + dist[i]);
        }
    }
    
    public static void main(String[] args) {
        int[][] graph = {
            {0, 4, 0, 0, 0},
            {4, 0, 8, 0, 0},
            {0, 8, 0, 7, 0},
            {0, 0, 7, 0, 9},
            {0, 0, 0, 9, 0}
        };
        dijkstra(graph, 0);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Method Implementation',
        input: '',
        expectedOutput: 'dijkstra(int[][] graph',
        points: 2
      }
    ]
  },

  'knapsack-problem': {
    title: "Knapsack Problem (0/1)",
    description: "Solve the 0/1 knapsack problem using dynamic programming.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement 0/1 knapsack solution
    
    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int capacity = 50;
        // Find and print maximum value
    }
}`,
    solution: `public class Main {
    public static int knapsack(int[] values, int[] weights, int capacity) {
        int n = values.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 0; w <= capacity; w++) {
                if (weights[i-1] <= w) {
                    dp[i][w] = Math.max(values[i-1] + dp[i-1][w-weights[i-1]], 
                                      dp[i-1][w]);
                } else {
                    dp[i][w] = dp[i-1][w];
                }
            }
        }
        return dp[n][capacity];
    }
    
    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int capacity = 50;
        System.out.println("Maximum value: " + 
                         knapsack(values, weights, capacity));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'capacity = 50',
        expectedOutput: 'Maximum value: 220',
        points: 3
      }
    ]
  },

  'travelling-salesman-problem': {
    title: "Travelling Salesman Problem (TSP)",
    description: "Solve the TSP using dynamic programming or greedy methods.",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Implement TSP solution
    
    public static void main(String[] args) {
        int[][] graph = {
            {0, 10, 15, 20},
            {10, 0, 35, 25},
            {15, 35, 0, 30},
            {20, 25, 30, 0}
        };
        // Find and print minimum cost path
    }
}`,
    solution: `public class Main {
    static int n = 4;
    
    static int tsp(int[][] graph, boolean[] visited, int currPos, int count, int cost, int ans) {
        if (count == n && graph[currPos][0] > 0) {
            ans = Math.min(ans, cost + graph[currPos][0]);
            return ans;
        }
        
        for (int i = 0; i < n; i++) {
            if (!visited[i] && graph[currPos][i] > 0) {
                visited[i] = true;
                ans = tsp(graph, visited, i, count + 1, 
                         cost + graph[currPos][i], ans);
                visited[i] = false;
            }
        }
        return ans;
    }
    
    public static void main(String[] args) {
        int[][] graph = {
            {0, 10, 15, 20},
            {10, 0, 35, 25},
            {15, 35, 0, 30},
            {20, 25, 30, 0}
        };
        
        boolean[] visited = new boolean[n];
        visited[0] = true;
        int ans = Integer.MAX_VALUE;
        
        ans = tsp(graph, visited, 0, 1, 0, ans);
        System.out.println("Minimum cost: " + ans);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: '4x4 graph',
        expectedOutput: 'Minimum cost: 80',
        points: 4
      }
    ]
  },

  'maximum-area-histogram': {
    title: "Maximum Area in Histogram",
    description: "Find the maximum rectangular area in a histogram.",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Implement solution to find maximum area in histogram
    
    public static void main(String[] args) {
        int[] heights = {6, 2, 5, 4, 5, 1, 6};
        // Find and print maximum area
    }
}`,
    solution: `public class Main {
    public static int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int i = 0;
        
        while (i < heights.length) {
            if (stack.empty() || heights[stack.peek()] <= heights[i]) {
                stack.push(i++);
            } else {
                int height = heights[stack.pop()];
                int width = stack.empty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
        }
        
        while (!stack.empty()) {
            int height = heights[stack.pop()];
            int width = stack.empty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        return maxArea;
    }
    
    public static void main(String[] args) {
        int[] heights = {6, 2, 5, 4, 5, 1, 6};
        System.out.println("Maximum area: " + largestRectangleArea(heights));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: '[6,2,5,4,5,1,6]',
        expectedOutput: 'Maximum area: 12',
        points: 3
      }
    ]
  },

  'sudoku-solver': {
    title: "Sudoku Solver",
    description: "Create a backtracking algorithm to solve a Sudoku puzzle.",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Implement Sudoku solver using backtracking
    
    public static void main(String[] args) {
        int[][] board = new int[9][9];
        // Initialize board and solve
    }
}`,
    solution: `public class Main {
    public static boolean solveSudoku(int[][] board) {
        int row = -1;
        int col = -1;
        boolean isEmpty = false;
        
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == 0) {
                    row = i;
                    col = j;
                    isEmpty = true;
                    break;
                }
            }
            if (isEmpty) break;
        }
        
        if (!isEmpty) return true;
        
        for (int num = 1; num <= 9; num++) {
            if (isSafe(board, row, col, num)) {
                board[row][col] = num;
                if (solveSudoku(board)) return true;
                board[row][col] = 0;
            }
        }
        return false;
    }
    
    private static boolean isSafe(int[][] board, int row, int col, int num) {
        for (int x = 0; x < 9; x++)
            if (board[row][x] == num) return false;
            
        for (int x = 0; x < 9; x++)
            if (board[x][col] == num) return false;
            
        int startRow = row - row % 3, startCol = col - col % 3;
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (board[i + startRow][j + startCol] == num) return false;
                
        return true;
    }
    
    private static void printBoard(int[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++)
                System.out.print(board[i][j] + " ");
            System.out.println();
        }
    }
    
    public static void main(String[] args) {
        int[][] board = {
            {5,3,0,0,7,0,0,0,0},
            {6,0,0,1,9,5,0,0,0},
            {0,9,8,0,0,0,0,6,0},
            {8,0,0,0,6,0,0,0,3},
            {4,0,0,8,0,3,0,0,1},
            {7,0,0,0,2,0,0,0,6},
            {0,6,0,0,0,0,2,8,0},
            {0,0,0,4,1,9,0,0,5},
            {0,0,0,0,8,0,0,7,9}
        };
        
        if (solveSudoku(board)) {
            System.out.println("Solution exists:");
            printBoard(board);
        } else {
            System.out.println("No solution exists");
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'method',
        description: 'Solver Implementation',
        input: '',
        expectedOutput: 'solveSudoku(int[][] board)',
        points: 3
      },
      {
        id: 'tc2',
        type: 'method',
        description: 'Safety Check',
        input: '',
        expectedOutput: 'isSafe(int[][] board',
        points: 2
      }
    ]
  },

  'flood-fill-algorithm': {
    title: "Flood Fill Algorithm",
    description: "Implement the flood fill algorithm for a 2D array.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement flood fill algorithm
    
    public static void main(String[] args) {
        int[][] image = {
            {1, 1, 1},
            {1, 1, 0},
            {1, 0, 1}
        };
        int sr = 1, sc = 1, newColor = 2;
        // Fill and print result
    }
}`,
    solution: `public class Main {
    public static int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        if (image[sr][sc] == newColor) return image;
        fill(image, sr, sc, image[sr][sc], newColor);
        return image;
    }
    
    private static void fill(int[][] image, int sr, int sc, int color, int newColor) {
        if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || 
            image[sr][sc] != color) return;
            
        image[sr][sc] = newColor;
        fill(image, sr + 1, sc, color, newColor);
        fill(image, sr - 1, sc, color, newColor);
        fill(image, sr, sc + 1, color, newColor);
        fill(image, sr, sc - 1, color, newColor);
    }
    
    private static void printImage(int[][] image) {
        for (int[] row : image) {
            System.out.println(Arrays.toString(row));
        }
    }
    
    public static void main(String[] args) {
        int[][] image = {
            {1, 1, 1},
            {1, 1, 0},
            {1, 0, 1}
        };
        int sr = 1, sc = 1, newColor = 2;
        floodFill(image, sr, sc, newColor);
        printImage(image);
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'sr=1, sc=1, newColor=2',
        expectedOutput: '[2, 2, 2]\n[2, 2, 0]\n[2, 0, 1]',
        points: 3
      }
    ]
  },

  'longest-palindromic-subsequence': {
    title: "Longest Palindromic Subsequence",
    description: "Find the length of the longest palindromic subsequence in a string.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement longest palindromic subsequence solution
    
    public static void main(String[] args) {
        String s = "bbbab";
        // Find and print length of longest palindromic subsequence
    }
}`,
    solution: `public class Main {
    public static int longestPalindromeSubseq(String s) {
        int n = s.length();
        int[][] dp = new int[n][n];
        
        for (int i = 0; i < n; i++) {
            dp[i][i] = 1;
        }
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i < n - len + 1; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j) && len == 2) {
                    dp[i][j] = 2;
                }
                else if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = dp[i+1][j-1] + 2;
                }
                else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
                }
            }
        }
        return dp[0][n-1];
    }
    
    public static void main(String[] args) {
        String s = "bbbab";
        System.out.println("Length of longest palindromic subsequence: " + 
                         longestPalindromeSubseq(s));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 's = "bbbab"',
        expectedOutput: 'Length of longest palindromic subsequence: 4',
        points: 3
      }
    ]
  },

  'word-ladder': {
    title: "Word Ladder",
    description: "Find the shortest transformation sequence from one word to another.",
    difficulty: "Hard",
    initialCode: `public class Main {
    // Implement word ladder solution
    
    public static void main(String[] args) {
        String beginWord = "hit";
        String endWord = "cog";
        Set<String> wordList = new HashSet<>(Arrays.asList("hot","dot","dog","lot","log","cog"));
        // Find and print shortest transformation sequence length
    }
}`,
    solution: `public class Main {
    public static int ladderLength(String beginWord, String endWord, Set<String> wordList) {
        Set<String> reached = new HashSet<>();
        reached.add(beginWord);
        wordList.add(endWord);
        int distance = 1;
        
        while (!reached.contains(endWord)) {
            Set<String> toAdd = new HashSet<>();
            for (String each : reached) {
                for (int i = 0; i < each.length(); i++) {
                    char[] chars = each.toCharArray();
                    for (char ch = 'a'; ch <= 'z'; ch++) {
                        chars[i] = ch;
                        String word = new String(chars);
                        if (wordList.contains(word)) {
                            toAdd.add(word);
                            wordList.remove(word);
                        }
                    }
                }
            }
            distance++;
            if (toAdd.size() == 0) return 0;
            reached = toAdd;
        }
        return distance;
    }
    
    public static void main(String[] args) {
        String beginWord = "hit";
        String endWord = "cog";
        Set<String> wordList = new HashSet<>(Arrays.asList("hot","dot","dog","lot","log","cog"));
        System.out.println("Shortest transformation sequence length: " + 
                         ladderLength(beginWord, endWord, wordList));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'beginWord = "hit", endWord = "cog"',
        expectedOutput: 'Shortest transformation sequence length: 5',
        points: 4
      }
    ]
  },

  'kth-largest-element': {
    title: "Kth Largest Element in an Array",
    description: "Find the Kth largest element using a heap or quickselect.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement solution to find kth largest element
    
    public static void main(String[] args) {
        int[] nums = {3,2,1,5,6,4};
        int k = 2;
        // Find and print the kth largest element
    }
}`,
    solution: `public class Main {
    public static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        
        return minHeap.peek();
    }
    
    public static void main(String[] args) {
        int[] nums = {3,2,1,5,6,4};
        int k = 2;
        System.out.println(k + "th largest element: " + findKthLargest(nums, k));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'nums = [3,2,1,5,6,4], k = 2',
        expectedOutput: '2th largest element: 5',
        points: 3
      }
    ]
  },

  'graph-bipartite-check': {
    title: "Graph Bipartite Check",
    description: "Determine if a given graph is bipartite.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement bipartite check
    
    public static void main(String[] args) {
        int[][] graph = {{1,3},{0,2},{1,3},{0,2}};
        // Check and print if graph is bipartite
    }
}`,
    solution: `public class Main {
    public static boolean isBipartite(int[][] graph) {
        int n = graph.length;
        int[] colors = new int[n];
        Arrays.fill(colors, -1);
        
        for (int i = 0; i < n; i++) {
            if (colors[i] == -1) {
                if (!bfs(graph, i, colors)) {
                    return false;
                }
            }
        }
        return true;
    }
    
    private static boolean bfs(int[][] graph, int start, int[] colors) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        colors[start] = 0;
        
        while (!queue.isEmpty()) {
            int curr = queue.poll();
            for (int next : graph[curr]) {
                if (colors[next] == -1) {
                    colors[next] = 1 - colors[curr];
                    queue.offer(next);
                } else if (colors[next] == colors[curr]) {
                    return false;
                }
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        int[][] graph = {{1,3},{0,2},{1,3},{0,2}};
        System.out.println("Is bipartite: " + isBipartite(graph));
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'graph = [[1,3],[0,2],[1,3],[0,2]]',
        expectedOutput: 'Is bipartite: true',
        points: 3
      }
    ]
  },

  'merge-intervals': {
    title: "Merge Intervals",
    description: "Merge overlapping intervals in a list of intervals.",
    difficulty: "Medium",
    initialCode: `public class Main {
    // Implement interval merging
    
    public static void main(String[] args) {
        int[][] intervals = {{1,3},{2,6},{8,10},{15,18}};
        // Merge intervals and print result
    }
}`,
    solution: `public class Main {
    public static int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;
        
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
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
        int[][] intervals = {{1,3},{2,6},{8,10},{15,18}};
        int[][] merged = merge(intervals);
        System.out.println("Merged intervals:");
        for (int[] interval : merged) {
            System.out.println(Arrays.toString(interval));
        }
    }
}`,
    testCases: [
      {
        id: 'tc1',
        type: 'output',
        description: 'Basic Test Case',
        input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
        expectedOutput: 'Merged intervals:\n[1, 6]\n[8, 10]\n[15, 18]',
        points: 3
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