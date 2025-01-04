export const arrayMethods = {
  name: 'Array',
  description: 'Fixed-size collection of elements of the same data type',
  methods: [
    // Basic Operations
    {
      name: 'length',
      description: 'Returns the length of the array',
      example: 'int[] arr = {1, 2, 3};\nSystem.out.println(arr.length); // Returns 3',
      category: 'basic'
    },
    {
      name: 'clone()',
      description: 'Creates and returns a shallow copy of the array',
      example: 'int[] original = {1, 2, 3};\nint[] copy = original.clone();',
      category: 'utility'
    },
    
    // Arrays Utility Class Methods
    {
      name: 'Arrays.sort(array)',
      description: 'Sorts the array into ascending order',
      example: 'int[] arr = {3, 1, 2};\nArrays.sort(arr); // arr is now {1, 2, 3}',
      category: 'utility'
    },
    {
      name: 'Arrays.binarySearch(array, key)',
      description: 'Searches for the specified element using binary search',
      example: 'int[] arr = {1, 2, 3};\nint index = Arrays.binarySearch(arr, 2); // Returns 1',
      category: 'search'
    },
    {
      name: 'Arrays.fill(array, value)',
      description: 'Assigns the specified value to each element',
      example: 'int[] arr = new int[3];\nArrays.fill(arr, 1); // arr is now {1, 1, 1}',
      category: 'manipulation'
    },
    {
      name: 'Arrays.copyOf(array, newLength)',
      description: 'Copies the array, truncating or padding with zeros to obtain the specified length',
      example: 'int[] original = {1, 2, 3};\nint[] copy = Arrays.copyOf(original, 4); // {1, 2, 3, 0}',
      category: 'utility'
    },
    {
      name: 'Arrays.copyOfRange(array, from, to)',
      description: 'Copies the specified range of the array into a new array',
      example: 'int[] original = {1, 2, 3, 4};\nint[] copy = Arrays.copyOfRange(original, 1, 3); // {2, 3}',
      category: 'utility'
    },
    {
      name: 'Arrays.equals(array1, array2)',
      description: 'Returns true if the two arrays are equal to one another',
      example: 'int[] arr1 = {1, 2};\nint[] arr2 = {1, 2};\nboolean equal = Arrays.equals(arr1, arr2); // true',
      category: 'comparison'
    },
    {
      name: 'Arrays.deepEquals(Object[] a1, Object[] a2)',
      description: 'Returns true if the two arrays are deeply equal to one another',
      example: 'Integer[][] arr1 = {{1}, {2}};\nInteger[][] arr2 = {{1}, {2}};\nboolean equal = Arrays.deepEquals(arr1, arr2);',
      category: 'comparison'
    },
    {
      name: 'Arrays.toString(array)',
      description: 'Returns a string representation of the array',
      example: 'int[] arr = {1, 2, 3};\nString str = Arrays.toString(arr); // "[1, 2, 3]"',
      category: 'conversion'
    },
    {
      name: 'Arrays.deepToString(Object[] array)',
      description: 'Returns a string representation of the "deep contents" of the array',
      example: 'Integer[][] arr = {{1}, {2}};\nString str = Arrays.deepToString(arr); // "[[1], [2]]"',
      category: 'conversion'
    },
    {
      name: 'Arrays.stream(array)',
      description: 'Returns a sequential stream with the array as its source',
      example: 'int[] arr = {1, 2, 3};\nIntStream stream = Arrays.stream(arr);',
      category: 'utility'
    }
  ]
};