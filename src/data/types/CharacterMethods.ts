export const characterMethods = {
  name: 'Character',
  description: 'Wrapper class for char primitive, representing a single Unicode character',
  methods: [
    // Basic Methods
    {
      name: 'charValue()',
      description: 'Returns the primitive char value of this Character object',
      example: "Character ch = new Character('A');\nchar primitive = ch.charValue();",
      category: 'basic'
    },
    {
      name: 'toString()',
      description: 'Returns a String object representing this Character value',
      example: "Character ch = 'A';\nString str = ch.toString();",
      category: 'conversion'
    },
    
    // Character Type Checks
    {
      name: 'isLetter(char ch)',
      description: 'Determines if the specified character is a letter',
      example: "Character.isLetter('A'); // Returns true",
      category: 'check'
    },
    {
      name: 'isDigit(char ch)',
      description: 'Determines if the specified character is a digit',
      example: "Character.isDigit('5'); // Returns true",
      category: 'check'
    },
    {
      name: 'isLetterOrDigit(char ch)',
      description: 'Determines if the specified character is a letter or digit',
      example: "Character.isLetterOrDigit('A'); // Returns true",
      category: 'check'
    },
    {
      name: 'isWhitespace(char ch)',
      description: 'Determines if the specified character is white space',
      example: "Character.isWhitespace(' '); // Returns true",
      category: 'check'
    },
    {
      name: 'isSpaceChar(char ch)',
      description: 'Determines if the specified character is a Unicode space character',
      example: "Character.isSpaceChar(' '); // Returns true",
      category: 'check'
    },
    {
      name: 'isJavaIdentifierStart(char ch)',
      description: 'Determines if the specified character is permissible as the first character in a Java identifier',
      example: "Character.isJavaIdentifierStart('A'); // Returns true",
      category: 'check'
    },
    {
      name: 'isJavaIdentifierPart(char ch)',
      description: 'Determines if the specified character may be part of a Java identifier',
      example: "Character.isJavaIdentifierPart('2'); // Returns true",
      category: 'check'
    },

    // Case Methods
    {
      name: 'isUpperCase(char ch)',
      description: 'Determines if the specified character is an uppercase character',
      example: "Character.isUpperCase('A'); // Returns true",
      category: 'case'
    },
    {
      name: 'isLowerCase(char ch)',
      description: 'Determines if the specified character is a lowercase character',
      example: "Character.isLowerCase('a'); // Returns true",
      category: 'case'
    },
    {
      name: 'toUpperCase(char ch)',
      description: 'Converts the character to uppercase',
      example: "Character.toUpperCase('a'); // Returns 'A'",
      category: 'case'
    },
    {
      name: 'toLowerCase(char ch)',
      description: 'Converts the character to lowercase',
      example: "Character.toLowerCase('A'); // Returns 'a'",
      category: 'case'
    },

    // Numeric Methods
    {
      name: 'getNumericValue(char ch)',
      description: 'Returns the int value that the specified character represents',
      example: "Character.getNumericValue('5'); // Returns 5",
      category: 'numeric'
    },
    {
      name: 'digit(char ch, int radix)',
      description: 'Returns the numeric value of the character in the specified radix',
      example: "Character.digit('A', 16); // Returns 10",
      category: 'numeric'
    }
  ]
};