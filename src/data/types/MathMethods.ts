export const mathMethods = {
  name: 'Math',
  description: 'Provides commonly used mathematical operations and constants',
  methods: [
    {
      name: 'abs(double a)',
      description: 'Returns the absolute value of a number',
      example: 'Math.abs(-123.45); // Returns 123.45',
      category: 'numeric'
    },
    {
      name: 'max(double a, double b)',
      description: 'Returns the greater of two numbers',
      example: 'Math.max(10.5, 20.7); // Returns 20.7',
      category: 'numeric'
    },
    {
      name: 'min(double a, double b)',
      description: 'Returns the smaller of two numbers',
      example: 'Math.min(10.5, 20.7); // Returns 10.5',
      category: 'numeric'
    },
    {
      name: 'pow(double a, double b)',
      description: 'Returns the value of the first argument raised to the power of the second argument',
      example: 'Math.pow(2, 3); // Returns 8.0',
      category: 'numeric'
    },
    {
      name: 'sqrt(double a)',
      description: 'Returns the square root of a number',
      example: 'Math.sqrt(25); // Returns 5.0',
      category: 'numeric'
    }
  ]
};