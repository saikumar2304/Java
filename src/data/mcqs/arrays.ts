export const arrayMCQs = [
  {
    id: 1,
    question: "What's the output?\n```java\nint[] arr = new int[3];\narr[1] = 1;\nSystem.out.println(arr[0] + \",\" + arr[1] + \",\" + arr[2]);\n```",
    options: [
      { text: "null,1,null", isCorrect: false },
      { text: "0,1,0", isCorrect: true },
      { text: "undefined,1,undefined", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Array elements are initialized with default values. For int arrays, default is 0.",
    difficulty: 'Easy',
    category: 'Array Basics',
    hasCode: true
  },
  {
    id: 2,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nSystem.out.println(arr[4]);\n```",
    options: [
      { text: "4", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "Array indices in Java start at 0 and go up to length-1. Accessing `arr[4]` throws an `ArrayIndexOutOfBoundsException`.",
    difficulty: 'Medium',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 3,
    question: "What's the output?\n```java\nint[][] arr = new int[2][3];\nSystem.out.println(arr[0][2]);\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Multidimensional array elements are also initialized with default values. For int, the default is 0.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 4,
    question: "What's the output?\n```java\nint[] arr = null;\nSystem.out.println(arr.length);\n```",
    options: [
      { text: "0", isCorrect: false },
      { text: "null", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Accessing the `length` property on a null array throws a `NullPointerException`.",
    difficulty: 'Hard',
    category: 'Array Null',
    hasCode: true
  },
  {
    id: 5,
    question: "What's the output?\n```java\nint[] arr = new int[3];\nSystem.out.println(arr[-1]);\n```",
    options: [
      { text: "Runtime error", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Negative indices are invalid in Java arrays. This throws an `ArrayIndexOutOfBoundsException`.",
    difficulty: 'Hard',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 6,
    question: "What's the output?\n```java\nint[][] arr = new int[2][];\narr[0] = new int[]{1, 2, 3};\nSystem.out.println(arr[1][0]);\n```",
    options: [
      { text: "0", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "The second row (`arr[1]`) is null, so accessing any index of it throws a `NullPointerException`.",
    difficulty: 'Hard',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 7,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nfor(int i : arr) {\n    arr[1] = 5;\n    System.out.print(i + \" \");\n}\n```",
    options: [
      { text: "1 5 3", isCorrect: false },
      { text: "1 2 3", isCorrect: true },
      { text: "1 5 5", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The enhanced for loop uses a copy of the current element, so changes to the array don't affect the iteration.",
    difficulty: 'Hard',
    category: 'Enhanced For Loop',
    hasCode: true
  },
  {
    id: 8,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nSystem.out.println(arr instanceof Object);\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "In Java, arrays are objects, so `arr instanceof Object` evaluates to true.",
    difficulty: 'Medium',
    category: 'Array Type',
    hasCode: true
  },
  {
    id: 9,
    question: "What's the output?\n```java\nint[] arr1 = {1, 2, 3};\nint[] arr2 = {1, 2, 3};\nSystem.out.println(arr1 == arr2);\n```",
    options: [
      { text: "true", isCorrect: false },
      { text: "false", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `==` operator compares references, not content. Since `arr1` and `arr2` are different objects, the result is false.",
    difficulty: 'Medium',
    category: 'Array Comparison',
    hasCode: true
  },
  {
    id: 10,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[1, 2, 3, 4]", isCorrect: true },
      { text: "1234", isCorrect: false },
      { text: "1, 2, 3, 4", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`Arrays.toString` provides a string representation of the array, including brackets and elements separated by commas.",
    difficulty: 'Medium',
    category: 'Array Methods',
    hasCode: true
  },
  {
    id: 11,
    question: "What's the output?\n```java\nint[] arr = {};\nSystem.out.println(arr.length);\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "An empty array has a length of 0.",
    difficulty: 'Easy',
    category: 'Array Basics',
    hasCode: true
  },
  {
    id: 12,
    question: "What's the output?\n```java\nint[][] arr = new int[2][0];\nSystem.out.println(arr.length);\n```",
    options: [
      { text: "2", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The outer array has a length of 2, but each inner array is empty with length 0.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 13,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nSystem.out.println(Arrays.equals(arr, new int[]{1, 2, 3, 4}));\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `Arrays.equals` method compares the content of two arrays, element by element. Since the contents match, it returns true.",
    difficulty: 'Medium',
    category: 'Array Comparison',
    hasCode: true
  },
  {
    id: 14,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\narr[1] = new int[]{5, 6, 7};\nSystem.out.println(arr[1][2]);\n```",
    options: [
      { text: "7", isCorrect: true },
      { text: "6", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The second row is reassigned to an array of size 3. Accessing `arr[1][2]` is valid and outputs 7.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 15,
    question: "What's the output?\n```java\nint[] arr = new int[3];\narr[0] = 10;\narr[2] = 20;\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[10, 0, 20]", isCorrect: true },
      { text: "[10, 20]", isCorrect: false },
      { text: "null", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Unassigned elements in the array default to 0. The output is [10, 0, 20].",
    difficulty: 'Easy',
    category: 'Array Initialization',
    hasCode: true
  },
  {
    id: 16,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30, 40};\nSystem.out.println(arr[3 - 1]);\n```",
    options: [
      { text: "30", isCorrect: true },
      { text: "40", isCorrect: false },
      { text: "20", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The expression `3 - 1` evaluates to 2, so `arr[2]` is accessed, which holds the value 30.",
    difficulty: 'Easy',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 17,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30};\nint[] copy = Arrays.copyOf(arr, 5);\nSystem.out.println(Arrays.toString(copy));\n```",
    options: [
      { text: "[10, 20, 30, 0, 0]", isCorrect: true },
      { text: "[10, 20, 30, null, null]", isCorrect: false },
      { text: "[10, 20, 30]", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`Arrays.copyOf` creates a new array with a specified length. Unfilled positions default to 0 for int arrays.",
    difficulty: 'Medium',
    category: 'Array Copy',
    hasCode: true
  },
  {
    id: 18,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4, 5}, {6}};\nSystem.out.println(arr[1].length);\n```",
    options: [
      { text: "3", isCorrect: true },
      { text: "2", isCorrect: false },
      { text: "4", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`arr[1]` refers to the second row, which has 3 elements. Therefore, `arr[1].length` is 3.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 19,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nfor (int i = 0; i < arr.length; i++) {\n    arr[i] = arr[i] * i;\n}\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[0, 2, 6, 12]", isCorrect: true },
      { text: "[1, 2, 3, 4]", isCorrect: false },
      { text: "[1, 4, 9, 16]", isCorrect: false },
      { text: "[0, 1, 2, 3]", isCorrect: false }
    ],
    explanation: "Each element is multiplied by its index, resulting in [0, 2, 6, 12].",
    difficulty: 'Hard',
    category: 'Array Manipulation',
    hasCode: true
  },
  {
    id: 20,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30};\nSystem.out.println(Arrays.binarySearch(arr, 20));\n```",
    options: [
      { text: "1", isCorrect: true },
      { text: "2", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "-1", isCorrect: false }
    ],
    explanation: "`Arrays.binarySearch` returns the index of the specified element. Here, 20 is at index 1.",
    difficulty: 'Medium',
    category: 'Array Search',
    hasCode: true
  },
  {
    id: 21,
    question: "What's the output?\n```java\nint[] arr = {5, 10, 15};\nSystem.out.println(Arrays.hashCode(arr));\n```",
    options: [
      { text: "An integer hash code", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "5", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`Arrays.hashCode` generates a hash code based on the array's contents.",
    difficulty: 'Hard',
    category: 'Array Hashing',
    hasCode: true
  },
  {
    id: 22,
    question: "What's the output?\n```java\nString[] arr = new String[3];\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[null, null, null]", isCorrect: true },
      { text: "[0, 0, 0]", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Uninitialized elements in a String array default to `null`. `Arrays.toString` includes these `null` values.",
    difficulty: 'Easy',
    category: 'Array Initialization',
    hasCode: true
  },
  {
    id: 23,
    question: "What's the output?\n```java\nint[] arr = {3, 2, 1};\nArrays.sort(arr);\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[1, 2, 3]", isCorrect: true },
      { text: "[3, 2, 1]", isCorrect: false },
      { text: "[2, 3, 1]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`Arrays.sort` sorts the array in ascending order. The result is [1, 2, 3].",
    difficulty: 'Medium',
    category: 'Array Sorting',
    hasCode: true
  },
  {
    id: 24,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr.getClass().getName());\n```",
    options: [
      { text: "[I", isCorrect: true },
      { text: "int[]", isCorrect: false },
      { text: "[int", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The `getClass().getName()` for an array of type int returns `[I`, where `[` represents an array and `I` denotes the int type.",
    difficulty: 'Hard',
    category: 'Array Reflection',
    hasCode: true
  },
  {
    id: 25,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4, 5}};\nSystem.out.println(Arrays.deepToString(arr));\n```",
    options: [
      { text: "[[1, 2], [3, 4, 5]]", isCorrect: true },
      { text: "[1, 2, 3, 4, 5]", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`Arrays.deepToString` is used for nested arrays, providing a string representation of multidimensional arrays.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 26,
    question: "What's the output?\n```java\nint[] arr1 = {1, 2, 3};\nint[] arr2 = arr1;\narr2[0] = 10;\nSystem.out.println(arr1[0]);\n```",
    options: [
      { text: "10", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Arrays in Java are reference types. Modifying `arr2` affects `arr1` because they reference the same memory location.",
    difficulty: 'Hard',
    category: 'Array References',
    hasCode: true
  },
  {
    id: 27,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30};\nSystem.out.println(Arrays.binarySearch(arr, 25));\n```",
    options: [
      { text: "-3", isCorrect: true },
      { text: "25", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`Arrays.binarySearch` returns a negative value when the element is not found. `-3` indicates that 25 would fit at index 2.",
    difficulty: 'Hard',
    category: 'Array Search',
    hasCode: true
  },
  {
    id: 28,
    question: "What's the output?\n```java\nint[] arr = new int[0];\nSystem.out.println(arr.length);\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "An array with size 0 is valid in Java. Its length is 0.",
    difficulty: 'Easy',
    category: 'Array Initialization',
    hasCode: true
  },
  {
    id: 29,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr[-1]);\n```",
    options: [
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "undefined", isCorrect: false },
      { text: "0", isCorrect: false }
    ],
    explanation: "Negative indices are invalid in Java, and accessing `arr[-1]` throws an `ArrayIndexOutOfBoundsException`.",
    difficulty: 'Hard',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 30,
    question: "What's the output?\n```java\nString[] arr = {\"A\", \"B\", \"C\"};\nfor (String s : arr) {\n    s = s.toLowerCase();\n}\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[A, B, C]", isCorrect: true },
      { text: "[a, b, c]", isCorrect: false },
      { text: "[null, null, null]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The enhanced for loop creates a copy of each element in `s`, so changes to `s` don't affect the original array.",
    difficulty: 'Hard',
    category: 'Enhanced For Loop',
    hasCode: true
  },
  {
    id: 31,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30};\nfor (int i = 0; i < arr.length; i++) {\n    arr[i] *= i;\n}\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[0, 20, 60]", isCorrect: true },
      { text: "[10, 20, 30]", isCorrect: false },
      { text: "[0, 20, 30]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Each element is multiplied by its index, resulting in [0, 20, 60].",
    difficulty: 'Medium',
    category: 'Array Manipulation',
    hasCode: true
  },
  {
    id: 32,
    question: "What's the output?\n```java\nint[] arr1 = {1, 2, 3};\nint[] arr2 = Arrays.copyOf(arr1, arr1.length);\nSystem.out.println(arr1 == arr2);\n```",
    options: [
      { text: "false", isCorrect: true },
      { text: "true", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `copyOf` method creates a new array, so `arr1` and `arr2` reference different objects.",
    difficulty: 'Medium',
    category: 'Array Copy',
    hasCode: true
  },
  {
    id: 33,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\narr[0] = new int[]{1, 2};\narr[1] = new int[]{3, 4, 5};\nSystem.out.println(arr[1][2]);\n```",
    options: [
      { text: "5", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "The second row is reassigned to an array of size 3. Accessing `arr[1][2]` is valid and outputs 5.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 34,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nfor (int i = 0; i < arr.length; i++) {\n    arr[i] = arr[arr.length - i - 1];\n}\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[4, 3, 3, 4]", isCorrect: true },
      { text: "[4, 3, 2, 1]", isCorrect: false },
      { text: "[1, 2, 3, 4]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop overwrites elements while iterating. The result is [4, 3, 3, 4].",
    difficulty: 'Hard',
    category: 'Array Manipulation',
    hasCode: true
  },
  {
    id: 35,
    question: "What's the output?\n```java\nint[][] arr = new int[2][];\narr[0] = new int[]{1, 2};\narr[1] = null;\nSystem.out.println(arr[1][0]);\n```",
    options: [
      { text: "null", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "0", isCorrect: false }
    ],
    explanation: "The second row is null, so accessing any index of it throws a `NullPointerException`.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 36,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nSystem.out.println(arr[-1]);\n```",
    options: [
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "undefined", isCorrect: false },
      { text: "0", isCorrect: false }
    ],
    explanation: "Negative indices are not allowed in Java arrays, and this throws an `ArrayIndexOutOfBoundsException`.",
    difficulty: 'Medium',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 37,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nint[] clone = arr.clone();\nclone[0] = 10;\nSystem.out.println(arr[0]);\n```",
    options: [
      { text: "1", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`clone()` creates a shallow copy of the array. Changes to `clone` do not affect the original array.",
    difficulty: 'Medium',
    category: 'Array Cloning',
    hasCode: true
  },
  {
    id: 38,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4}};\nfor (int[] row : arr) {\n    row[0] *= 2;\n}\nSystem.out.println(Arrays.deepToString(arr));\n```",
    options: [
      { text: "[[2, 2], [6, 4]]", isCorrect: true },
      { text: "[[1, 2], [3, 4]]", isCorrect: false },
      { text: "[[2, 2], [3, 4]]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop modifies the first element of each row in the array. The result is [[2, 2], [6, 4]].",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 39,
    question: "What's the output?\n```java\nint[] arr = new int[3];\nSystem.out.println(arr[0]);\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Array elements are initialized to default values. For `int`, the default value is 0.",
    difficulty: 'Easy',
    category: 'Array Basics',
    hasCode: true
  },
  {
    id: 40,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\nSystem.out.println(arr[0][0] + arr[1][1]);\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "All elements of a multidimensional array are initialized to default values. The sum of arr[0][0] and arr[1][1] is 0.",
    difficulty: 'Easy',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 41,
    question: "What's the output?\n```java\nString[] arr = new String[2];\nSystem.out.println(arr[0] + arr[1]);\n```",
    options: [
      { text: "nullnull", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "String array elements are initialized to null. Concatenating null values produces 'nullnull'.",
    difficulty: 'Medium',
    category: 'Array Basics',
    hasCode: true
  },
  {
    id: 42,
    question: "What's the output?\n```java\nint[] arr = new int[3];\narr[0] = 1;\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[1, 0, 0]", isCorrect: true },
      { text: "[1, null, null]", isCorrect: false },
      { text: "[1]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Only `arr[0]` is assigned a value; the rest are initialized to their default value of 0. Output is [1, 0, 0].",
    difficulty: 'Easy',
    category: 'Array Basics',
    hasCode: true
  },
  {
    id: 43,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30};\nSystem.out.println(arr instanceof Object);\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "In Java, arrays are objects, so `arr instanceof Object` returns true.",
    difficulty: 'Medium',
    category: 'Array and Object',
    hasCode: true
  },
  {
    id: 44,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nfor (int i : arr) {\n    i = i * 2;\n}\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[1, 2, 3]", isCorrect: true },
      { text: "[2, 4, 6]", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The enhanced for loop works on a copy of the array's elements, so changes to `i` do not affect the array.",
    difficulty: 'Hard',
    category: 'Enhanced For Loop',
    hasCode: true
  },
  {
    id: 45,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4}};\nfor (int[] subArr : arr) {\n    subArr[0] = subArr[0] * 2;\n}\nSystem.out.println(Arrays.deepToString(arr));\n```",
    options: [
      { text: "[[2, 2], [6, 4]]", isCorrect: true },
      { text: "[[1, 2], [3, 4]]", isCorrect: false },
      { text: "[[1, 4], [3, 8]]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop modifies the first element of each subarray. The result is [[2, 2], [6, 4]].",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 46,
    question: "What's the output?\n```java\nint[] arr = new int[0];\nSystem.out.println(arr.length);\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "An array with size 0 is valid in Java. Its length is 0.",
    difficulty: 'Easy',
    category: 'Array Basics',
    hasCode: true
  },
  {
    id: 47,
    question: "What's the output?\n```java\nint[] arr1 = {1, 2, 3};\nint[] arr2 = Arrays.copyOf(arr1, 5);\nSystem.out.println(Arrays.toString(arr2));\n```",
    options: [
      { text: "[1, 2, 3, 0, 0]", isCorrect: true },
      { text: "[1, 2, 3]", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "[1, 2, 3, null, null]", isCorrect: false }
    ],
    explanation: "`Arrays.copyOf` creates a new array with the specified length. Extra elements are initialized to their default values.",
    difficulty: 'Medium',
    category: 'Array Copy',
    hasCode: true
  },
  {
    id: 48,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr[3]);\n```",
    options: [
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "Accessing an index out of bounds (here `arr[3]`) throws an `ArrayIndexOutOfBoundsException` at runtime.",
    difficulty: 'Medium',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 49,
    question: "What's the output?\n```java\nint[] arr1 = {1, 2, 3};\nint[] arr2 = {1, 2, 3};\nSystem.out.println(arr1 == arr2);\n```",
    options: [
      { text: "false", isCorrect: true },
      { text: "true", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `==` operator checks for reference equality. Since `arr1` and `arr2` are different objects, it returns false.",
    difficulty: 'Medium',
    category: 'Array Comparison',
    hasCode: true
  },
  {
    id: 50,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30};\nSystem.out.println(Arrays.binarySearch(arr, 25));\n```",
    options: [
      { text: "-3", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "25", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`Arrays.binarySearch` returns a negative value when the element is not found. `-3` indicates the insertion point at index 2.",
    difficulty: 'Hard',
    category: 'Array Search',
    hasCode: true
  },
  {
    id: 51,
    question: "What's the output?\n```java\nint[] arr = null;\nSystem.out.println(arr.length);\n```",
    options: [
      { text: "0", isCorrect: false },
      { text: "null", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: true }
    ],
    explanation: "Accessing the length property on a null array throws a `NullPointerException`.",
    difficulty: 'Hard',
    category: 'Null Arrays',
    hasCode: true
  },
  {
    id: 52,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4}};\nSystem.out.println(arr[1][0] + arr[0][1]);\n```",
    options: [
      { text: "5", isCorrect: true },
      { text: "6", isCorrect: false },
      { text: "4", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Accessing `arr[1][0]` gives 3, and `arr[0][1]` gives 2. Their sum is 5.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 53,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4, 5};\nfor (int i = 0; i < arr.length; i += 2) {\n    System.out.print(arr[i] + \" \");\n}\n```",
    options: [
      { text: "1 3 5", isCorrect: true },
      { text: "1 2 3 4 5", isCorrect: false },
      { text: "1 3", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop increments by 2, so it accesses indices 0, 2, and 4. Output is `1 3 5`.",
    difficulty: 'Medium',
    category: 'Looping Through Arrays',
    hasCode: true
  },
  {
    id: 54,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(Arrays.toString(arr).charAt(0));\n```",
    options: [
      { text: "[", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`Arrays.toString(arr)` returns `[1, 2, 3]` as a string. The first character is `[`. Accessing `charAt(0)` gives `[`. ",
    difficulty: 'Hard',
    category: 'Array Strings',
    hasCode: true
  },
  {
    id: 55,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\narr[3] = 4;\nSystem.out.println(arr[3]);\n```",
    options: [
      { text: "4", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: true }
    ],
    explanation: "Accessing or assigning a value to an out-of-bounds index (`arr[3]` in this case) results in an `ArrayIndexOutOfBoundsException`.",
    difficulty: 'Hard',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 56,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(Arrays.deepToString(new Object[]{arr}));\n```",
    options: [
      { text: "[[1, 2, 3]]", isCorrect: true },
      { text: "[1, 2, 3]", isCorrect: false },
      { text: "[1, 2, 3, null]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Wrapping an array in an Object array and using `Arrays.deepToString` treats it as a nested structure, producing `[[1, 2, 3]]`.",
    difficulty: 'Medium',
    category: 'Array Nesting',
    hasCode: true
  },
  {
    id: 57,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30};\nSystem.out.println(arr[1] == arr[2] / arr[0]);\n```",
    options: [
      { text: "false", isCorrect: true },
      { text: "true", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The comparison checks if `20 == 30 / 10`, which is false.",
    difficulty: 'Hard',
    category: 'Array Arithmetic',
    hasCode: true
  },
  {
    id: 58,
    question: "What's the output?\n```java\nint[] arr1 = {1, 2, 3};\nint[] arr2 = arr1.clone();\nSystem.out.println(arr1 == arr2);\n```",
    options: [
      { text: "false", isCorrect: true },
      { text: "true", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`clone()` creates a new array. `arr1` and `arr2` are different objects, so `arr1 == arr2` is false.",
    difficulty: 'Medium',
    category: 'Array Cloning',
    hasCode: true
  },
  {
    id: 59,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4}};\nSystem.out.println(arr[0][1] * arr[1][0]);\n```",
    options: [
      { text: "6", isCorrect: true },
      { text: "8", isCorrect: false },
      { text: "4", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`arr[0][1]` is 2 and `arr[1][0]` is 3. Their product is 6.",
    difficulty: 'Easy',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 60,
    question: "What's the output?\n```java\nint[][] arr = new int[2][];\narr[0] = new int[]{1, 2};\narr[1] = new int[]{3};\nSystem.out.println(arr[1][1]);\n```",
    options: [
      { text: "0", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "Accessing `arr[1][1]` results in an `ArrayIndexOutOfBoundsException` because the second row has only one element.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 61,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nfor (int i = 0; i <= arr.length; i++) {\n    System.out.print(arr[i] + \" \");\n}\n```",
    options: [
      { text: "1 2 3 4", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "1 2 3 4 0", isCorrect: false }
    ],
    explanation: "The loop accesses an out-of-bounds index (`arr[4]`), causing an `ArrayIndexOutOfBoundsException`.",
    difficulty: 'Medium',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 62,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30};\nSystem.out.println(arr[arr.length - 1]);\n```",
    options: [
      { text: "30", isCorrect: true },
      { text: "20", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Accessing `arr[arr.length - 1]` retrieves the last element, which is 30.",
    difficulty: 'Easy',
    category: 'Array Basics',
    hasCode: true
  },
  {
    id: 63,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\nSystem.out.println(arr[1][1] == 0);\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "All elements of a multidimensional array are initialized to their default values, and for int, it is 0.",
    difficulty: 'Easy',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 64,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\narr = null;\nSystem.out.println(arr[0]);\n```",
    options: [
      { text: "0", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "null", isCorrect: false }
    ],
    explanation: "Accessing an element of a null array results in a `NullPointerException`.",
    difficulty: 'Hard',
    category: 'Null Arrays',
    hasCode: true
  },
  {
    id: 65,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr[-1]);\n```",
    options: [
      { text: "0", isCorrect: false },
      { text: "Runtime error", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "Negative indices are not allowed in Java, resulting in an `ArrayIndexOutOfBoundsException`.",
    difficulty: 'Hard',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 66,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr instanceof Object);\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "In Java, arrays are objects, so `arr instanceof Object` returns true.",
    difficulty: 'Medium',
    category: 'Array and Object',
    hasCode: true
  },
  {
    id: 67,
    question: "What's the output?\n```java\nint[] arr1 = {1, 2, 3};\nint[] arr2 = arr1;\narr2[0] = 10;\nSystem.out.println(arr1[0]);\n```",
    options: [
      { text: "10", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`arr1` and `arr2` point to the same array in memory. Changing an element via `arr2` affects `arr1`.",
    difficulty: 'Medium',
    category: 'Array References',
    hasCode: true
  },
  {
    id: 68,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(Arrays.binarySearch(arr, 2));\n```",
    options: [
      { text: "1", isCorrect: true },
      { text: "2", isCorrect: false },
      { text: "-2", isCorrect: false },
      { text: "0", isCorrect: false }
    ],
    explanation: "`Arrays.binarySearch` returns the index of the found element. In this case, 2 is at index 1.",
    difficulty: 'Medium',
    category: 'Array Search',
    hasCode: true
  },
  {
    id: 69,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4, 5}};\nSystem.out.println(arr[1].length);\n```",
    options: [
      { text: "3", isCorrect: true },
      { text: "2", isCorrect: false },
      { text: "5", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The second row of the array has three elements, so `arr[1].length` returns 3.",
    difficulty: 'Easy',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 70,
    question: "What's the output?\n```java\nint[] arr = new int[]{1, 2, 3, 4};\nfor (int i = arr.length - 1; i >= 0; i--) {\n    System.out.print(arr[i] + \" \");\n}\n```",
    options: [
      { text: "4 3 2 1", isCorrect: true },
      { text: "1 2 3 4", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The loop iterates in reverse order, printing the elements from last to first.",
    difficulty: 'Easy',
    category: 'Reverse Loop',
    hasCode: true
  },
  {
    id: 71,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr.length == arr[0] + arr[2]);\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`arr.length` is 3, and `arr[0] + arr[2]` equals 3. The expression evaluates to true.",
    difficulty: 'Medium',
    category: 'Array Arithmetic',
    hasCode: true
  },
  {
    id: 72,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\narr[0] = new int[]{1, 2, 3};\nSystem.out.println(arr[0][2]);\n```",
    options: [
      { text: "3", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The reference at `arr[0]` is reassigned to a new array of size 3. Accessing `arr[0][2]` is valid and outputs 3.",
    difficulty: 'Medium',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 73,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nint sum = 0;\nfor (int value : arr) {\n    sum += value;\n}\nSystem.out.println(sum);\n```",
    options: [
      { text: "6", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The enhanced for loop adds all array elements (1 + 2 + 3 = 6).",
    difficulty: 'Easy',
    category: 'Enhanced For Loop',
    hasCode: true
  },
  {
    id: 74,
    question: "What's the output?\n```java\nint[] arr = {10, 20, 30, 40};\nSystem.out.println(arr[1]++);\nSystem.out.println(arr[1]);\n```",
    options: [
      { text: "20 21", isCorrect: true },
      { text: "21 21", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`arr[1]++` returns the current value (20) and increments it. The next print shows 21.",
    difficulty: 'Medium',
    category: 'Array Indexing',
    hasCode: true
  },
  {
    id: 75,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nSystem.out.println(Arrays.equals(arr, new int[]{1, 2, 3, 4}));\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`Arrays.equals` compares the content of both arrays, not references. The arrays are equal, so it returns true.",
    difficulty: 'Medium',
    category: 'Array Comparison',
    hasCode: true
  },
  {
    id: 76,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nint[][] multi = {arr, arr};\nmulti[0][0] = 10;\nSystem.out.println(arr[0]);\n```",
    options: [
      { text: "10", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Both `multi[0]` and `arr` reference the same array. Modifying `multi[0][0]` affects `arr[0]`.",
    difficulty: 'Hard',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 77,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3, 4};\nfor (int i = 0; i < arr.length; i++) {\n    arr[i] *= i;\n}\nSystem.out.println(Arrays.toString(arr));\n```",
    options: [
      { text: "[0, 2, 6, 12]", isCorrect: true },
      { text: "[1, 2, 3, 4]", isCorrect: false },
      { text: "[0, 1, 2, 3]", isCorrect: false },
      { text: "[0, 1, 4, 9]", isCorrect: false }
    ],
    explanation: "Each element is multiplied by its index. Results: 0*1=0, 1*2=2, 2*3=6, 3*4=12.",
    difficulty: 'Medium',
    category: 'Array Modification',
    hasCode: true
  },
  {
    id: 78,
    question: "What's the output?\n```java\nint[] arr1 = {1, 2, 3};\nint[] arr2 = arr1.clone();\narr2[1] = 20;\nSystem.out.println(Arrays.toString(arr1));\n```",
    options: [
      { text: "[1, 2, 3]", isCorrect: true },
      { text: "[1, 20, 3]", isCorrect: false },
      { text: "[1, 3, 3]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`clone()` creates a deep copy for 1D arrays. Modifying `arr2` does not affect `arr1`.",
    difficulty: 'Medium',
    category: 'Array Cloning',
    hasCode: true
  },
  {
    id: 79,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(Arrays.asList(arr));\n```",
    options: [
      { text: "[[1, 2, 3]]", isCorrect: false },
      { text: "[1, 2, 3]", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "[[I@hashcode]", isCorrect: true }
    ],
    explanation: "`Arrays.asList` treats the array as a single element, resulting in a single entry for the array reference.",
    difficulty: 'Hard',
    category: 'Arrays Utility',
    hasCode: true
  },
  {
    id: 80,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nSystem.out.println(arr.getClass().getSimpleName());\n```",
    options: [
      { text: "int[]", isCorrect: true },
      { text: "int", isCorrect: false },
      { text: "Array", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`getClass().getSimpleName()` retrieves the simple class name of the array, which is `int[]`.",
    difficulty: 'Medium',
    category: 'Array Metadata',
    hasCode: true
  },
  {
    id: 81,
    question: "What's the output?\n```java\nint[][] arr = new int[2][3];\nSystem.out.println(arr[0][0] + arr[1][1]);\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "All elements in a multidimensional array are initialized to their default value (0 for int).",
    difficulty: 'Easy',
    category: 'Multidimensional Arrays',
    hasCode: true
  },
  {
    id: 82,
    question: "What's the output?\n```java\nint[] arr = {1, 2, 3};\nint[][] multi = {arr, arr.clone()};\nmulti[0][0] = 10;\nSystem.out.println(multi[1][0]);\n```",
    options: [
      { text: "1", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The clone creates a separate copy of the array. Modifying `multi[0][0]` does not affect `multi[1][0]`.",
    difficulty: 'Hard',
    category: 'Array Cloning',
    hasCode: true
  },
  {
    id: 83,
    question: "What's the output?\n```java\nint[] arr = new int[0];\nSystem.out.println(arr.length);\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "An array of length 0 is valid in Java. Its `length` property returns 0.",
    difficulty: 'Easy',
    category: 'Array Basics',
    hasCode: true
  },
  {
    id: 84,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4}};\nSystem.out.println(arr[0][1] + arr[1][0]);\n```",
    options: [
      { text: "5", isCorrect: true },
      { text: "6", isCorrect: false },
      { text: "4", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`arr[0][1]` is 2 and `arr[1][0]` is 3. Adding them results in 5.",
    difficulty: 'Easy',
    category: '2D Array Basics',
    hasCode: true
  },
  {
    id: 85,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\nSystem.out.println(arr.length);\n```",
    options: [
      { text: "2", isCorrect: true },
      { text: "4", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`arr.length` returns the number of rows in the 2D array, which is 2.",
    difficulty: 'Easy',
    category: '2D Array Basics',
    hasCode: true
  },
  {
    id: 86,
    question: "What's the output?\n```java\nint[][] arr = new int[3][];\narr[0] = new int[]{1, 2};\narr[1] = new int[]{3, 4, 5};\nSystem.out.println(arr[1][2]);\n```",
    options: [
      { text: "5", isCorrect: true },
      { text: "4", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The second row (`arr[1]`) contains {3, 4, 5}, and `arr[1][2]` is 5.",
    difficulty: 'Medium',
    category: 'Jagged Arrays',
    hasCode: true
  },
  {
    id: 87,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4, 5}};\nSystem.out.println(arr[1].length);\n```",
    options: [
      { text: "3", isCorrect: true },
      { text: "2", isCorrect: false },
      { text: "4", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The second row (`arr[1]`) has 3 elements. Its length is 3.",
    difficulty: 'Easy',
    category: 'Jagged Arrays',
    hasCode: true
  },
  {
    id: 88,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\narr[1][1] = 10;\nSystem.out.println(arr[0][1] + arr[1][1]);\n```",
    options: [
      { text: "10", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "20", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`arr[0][1]` is 0 (default value), and `arr[1][1]` is 10. Adding them results in 10.",
    difficulty: 'Medium',
    category: '2D Array Initialization',
    hasCode: true
  },
  {
    id: 89,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2, 3}, {4, 5, 6}};\nfor (int i = 0; i < arr.length; i++) {\n    for (int j = 0; j < arr[i].length; j++) {\n        System.out.print(arr[i][j] + \" \");\n    }\n}\n```",
    options: [
      { text: "1 2 3 4 5 6", isCorrect: true },
      { text: "123456", isCorrect: false },
      { text: "1 2 3\n4 5 6", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The nested loop iterates over all rows and columns, printing each element in order.",
    difficulty: 'Medium',
    category: '2D Array Traversal',
    hasCode: true
  },
  {
    id: 90,
    question: "What's the output?\n```java\nint[][] arr = {{1}, {2, 3}};\nfor (int[] row : arr) {\n    for (int value : row) {\n        System.out.print(value);\n    }\n}\n```",
    options: [
      { text: "123", isCorrect: true },
      { text: "12 3", isCorrect: false },
      { text: "1 23", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The enhanced for loop iterates over each row and element, printing all values in sequence.",
    difficulty: 'Easy',
    category: '2D Array Traversal',
    hasCode: true
  },
  {
    id: 91,
    question: "What's the output?\n```java\nint[][] arr = new int[3][3];\nSystem.out.println(arr[2][2] == 0);\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "All elements of the 2D array are initialized to their default value (0 for int).",
    difficulty: 'Easy',
    category: 'Default Values',
    hasCode: true
  },
  {
    id: 92,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\narr[1] = new int[]{5, 10, 15};\nSystem.out.println(arr[1][2]);\n```",
    options: [
      { text: "15", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "5", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The second row (`arr[1]`) is reassigned to a new array of size 3. Accessing `arr[1][2]` is valid and outputs 15.",
    difficulty: 'Medium',
    category: 'Jagged Arrays',
    hasCode: true
  },
  {
    id: 93,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\narr[1] = null;\nSystem.out.println(arr[1][0]);\n```",
    options: [
      { text: "Runtime error", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "null", isCorrect: false }
    ],
    explanation: "Accessing a null reference in an array causes a `NullPointerException`.",
    difficulty: 'Hard',
    category: 'Null Arrays',
    hasCode: true
  },
  {
    id: 94,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4}};\nSystem.out.println(Arrays.deepToString(arr));\n```",
    options: [
      { text: "[[1, 2], [3, 4]]", isCorrect: true },
      { text: "[1, 2, 3, 4]", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`Arrays.deepToString` converts a multidimensional array to a string representation, including nested arrays.",
    difficulty: 'Medium',
    category: 'Array to String',
    hasCode: true
  },
  {
    id: 95,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\nfor (int i = 0; i < arr.length; i++) {\n    System.out.println(arr[i]);\n}\n```",
    options: [
      { text: "[I@hashcode", isCorrect: true },
      { text: "[0, 0]", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Printing a row of a 2D array directly outputs the hashcode representation of the array object.",
    difficulty: 'Hard',
    category: 'Array References',
    hasCode: true
  },
  {
    id: 96,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4}};\narr[1] = arr[0];\nSystem.out.println(arr[1][1]);\n```",
    options: [
      { text: "2", isCorrect: true },
      { text: "4", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "After assigning `arr[0]` to `arr[1]`, both rows reference the same array. `arr[1][1]` is 2, as it now points to `arr[0][1]`.",
    difficulty: 'Medium',
    category: 'Array References',
    hasCode: true
  },
  {
    id: 97,
    question: "What's the output?\n```java\nint[][] arr = new int[2][2];\nSystem.out.println(arr[1].getClass().getName());\n```",
    options: [
      { text: "[I", isCorrect: true },
      { text: "int[]", isCorrect: false },
      { text: "Array", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`getClass().getName()` outputs the type of the object. `[I` indicates an array of integers.",
    difficulty: 'Medium',
    category: 'Array Metadata',
    hasCode: true
  },
  {
    id: 98,
    question: "What's the output?\n```java\nint[][] arr = new int[3][3];\nfor (int i = 0; i < arr.length; i++) {\n    arr[i][i] = i + 1;\n}\nSystem.out.println(Arrays.deepToString(arr));\n```",
    options: [
      { text: "[[1, 0, 0], [0, 2, 0], [0, 0, 3]]", isCorrect: true },
      { text: "[[1, 1, 1], [2, 2, 2], [3, 3, 3]]", isCorrect: false },
      { text: "[[0, 0, 0], [0, 0, 0], [0, 0, 0]]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The diagonal elements are set to `i + 1` for each row, while other elements remain at their default value (0).",
    difficulty: 'Medium',
    category: '2D Array Modification',
    hasCode: true
  },
  {
    id: 99,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, null};\nSystem.out.println(arr[1][0]);\n```",
    options: [
      { text: "Runtime error", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "null", isCorrect: false }
    ],
    explanation: "Accessing an element of a `null` row causes a `NullPointerException`.",
    difficulty: 'Hard',
    category: 'Null Arrays',
    hasCode: true
  },
  {
    id: 100,
    question: "What's the output?\n```java\nint[][] arr = {{1, 2}, {3, 4}};\narr[0] = null;\nSystem.out.println(Arrays.deepToString(arr));\n```",
    options: [
      { text: "[null, [3, 4]]", isCorrect: true },
      { text: "[[1, 2], [3, 4]]", isCorrect: false },
      { text: "[0, [3, 4]]", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Reassigning `arr[0]` to `null` makes the first row null. `Arrays.deepToString` correctly represents it as `null`.",
    difficulty: 'Medium',
    category: 'Array Modification',
    hasCode: true
  }
];



