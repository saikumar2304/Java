export const booleanMethods = {
  name: 'Boolean',
  description: 'Wrapper class for boolean primitive type',
  methods: [
    // Instance Methods
    {
      name: 'booleanValue()',
      description: 'Returns the primitive boolean value of this Boolean object',
      example: 'Boolean.TRUE.booleanValue(); // Returns true',
      category: 'basic'
    },
    {
      name: 'toString()',
      description: 'Returns a String object representing this Boolean value',
      example: 'Boolean.TRUE.toString(); // Returns "true"',
      category: 'conversion'
    },
    {
      name: 'compareTo(Boolean b)',
      description: 'Compares two Boolean objects numerically',
      example: 'Boolean.TRUE.compareTo(Boolean.FALSE); // Returns 1',
      category: 'comparison'
    },
    {
      name: 'equals(Object obj)',
      description: 'Returns true if the argument is a Boolean object that represents the same value',
      example: 'Boolean.TRUE.equals(Boolean.TRUE); // Returns true',
      category: 'comparison'
    },
    {
      name: 'hashCode()',
      description: 'Returns a hash code for this Boolean object',
      example: 'Boolean.TRUE.hashCode(); // Returns 1231',
      category: 'utility'
    },

    // Static Methods
    {
      name: 'valueOf(boolean b)',
      description: 'Returns a Boolean instance representing the specified boolean value',
      example: 'Boolean.valueOf(true); // Returns Boolean.TRUE',
      category: 'static'
    },
    {
      name: 'valueOf(String s)',
      description: 'Returns a Boolean with a value represented by the specified string',
      example: 'Boolean.valueOf("true"); // Returns Boolean.TRUE',
      category: 'static'
    },
    {
      name: 'parseBoolean(String s)',
      description: 'Parses the string argument as a boolean',
      example: 'Boolean.parseBoolean("true"); // Returns true',
      category: 'static'
    },
    {
      name: 'getBoolean(String name)',
      description: 'Returns true if and only if the system property named by the argument exists and is equal to "true"',
      example: 'Boolean.getBoolean("java.specification.version"); // Returns system property',
      category: 'static'
    },
    {
      name: 'logicalAnd(boolean a, boolean b)',
      description: 'Returns the result of applying the logical AND operator to the specified boolean operands',
      example: 'Boolean.logicalAnd(true, false); // Returns false',
      category: 'static'
    },
    {
      name: 'logicalOr(boolean a, boolean b)',
      description: 'Returns the result of applying the logical OR operator to the specified boolean operands',
      example: 'Boolean.logicalOr(true, false); // Returns true',
      category: 'static'
    },
    {
      name: 'logicalXor(boolean a, boolean b)',
      description: 'Returns the result of applying the logical XOR operator to the specified boolean operands',
      example: 'Boolean.logicalXor(true, false); // Returns true',
      category: 'static'
    }
  ]
};