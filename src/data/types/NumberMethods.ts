export const numberMethods = {
  name: 'Number',
  description: 'Abstract superclass for numeric wrapper classes like Integer, Double, etc.',
  methods: [
    // Conversion Methods
    {
      name: 'intValue()',
      description: 'Returns the value as an int',
      example: 'new Integer(123).intValue(); // Returns 123',
      category: 'conversion'
    },
    {
      name: 'longValue()',
      description: 'Returns the value as a long',
      example: 'new Integer(123).longValue(); // Returns 123L',
      category: 'conversion'
    },
    {
      name: 'floatValue()',
      description: 'Returns the value as a float',
      example: 'new Integer(123).floatValue(); // Returns 123.0f',
      category: 'conversion'
    },
    {
      name: 'doubleValue()',
      description: 'Returns the value as a double',
      example: 'new Integer(123).doubleValue(); // Returns 123.0d',
      category: 'conversion'
    },
    {
      name: 'byteValue()',
      description: 'Returns the value as a byte',
      example: 'new Integer(123).byteValue(); // Returns 123 as byte',
      category: 'conversion'
    },
    {
      name: 'shortValue()',
      description: 'Returns the value as a short',
      example: 'new Integer(123).shortValue(); // Returns 123 as short',
      category: 'conversion'
    },

    // Parsing Methods
    {
      name: 'parseInt(String s)',
      description: 'Parses the string argument as a signed decimal integer',
      example: 'Integer.parseInt("123"); // Returns 123',
      category: 'static'
    },
    {
      name: 'parseDouble(String s)',
      description: 'Parses the string argument as a double',
      example: 'Double.parseDouble("123.45"); // Returns 123.45',
      category: 'static'
    },
    {
      name: 'parseLong(String s)',
      description: 'Parses the string argument as a signed decimal long',
      example: 'Long.parseLong("123"); // Returns 123L',
      category: 'static'
    },
    {
      name: 'parseFloat(String s)',
      description: 'Parses the string argument as a float',
      example: 'Float.parseFloat("123.45"); // Returns 123.45f',
      category: 'static'
    },

    // Value Of Methods
    {
      name: 'valueOf(String s)',
      description: 'Returns a Number object holding the value of the specified String',
      example: 'Integer.valueOf("123"); // Returns Integer object',
      category: 'static'
    },
    {
      name: 'valueOf(int i)',
      description: 'Returns a Number object holding the specified primitive',
      example: 'Integer.valueOf(123); // Returns Integer object',
      category: 'static'
    },

    // Utility Methods
    {
      name: 'toString()',
      description: 'Returns a string representation of the number',
      example: 'new Integer(123).toString(); // Returns "123"',
      category: 'conversion'
    },
    {
      name: 'equals(Object obj)',
      description: 'Compares this Number object to another object',
      example: 'new Integer(123).equals(new Integer(123)); // Returns true',
      category: 'comparison'
    },
    {
      name: 'hashCode()',
      description: 'Returns a hash code for this Number object',
      example: 'new Integer(123).hashCode(); // Returns hash code',
      category: 'utility'
    },
    {
      name: 'compareTo(Number n)',
      description: 'Compares two Number objects numerically',
      example: 'new Integer(123).compareTo(new Integer(456)); // Returns negative number',
      category: 'comparison'
    }
  ]
};