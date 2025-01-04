export const stringMethods = {
  name: 'String',
  description: 'Represents text as a sequence of Unicode characters',
  methods: [
    // Basic Operations
    {
      name: 'length()',
      description: 'Returns the length of the string',
      example: '"Hello".length() // Returns 5',
      category: 'basic'
    },
    {
      name: 'isEmpty()',
      description: 'Returns true if length is 0',
      example: '"".isEmpty() // Returns true',
      category: 'basic'
    },
    {
      name: 'isBlank()',
      description: 'Returns true if string is empty or contains only white space',
      example: '"   ".isBlank() // Returns true',
      category: 'basic'
    },
    {
      name: 'charAt(int index)',
      description: 'Returns the character at the specified index',
      example: '"Hello".charAt(0) // Returns "H"',
      category: 'basic'
    },

    // Comparison Methods
    {
      name: 'equals(Object obj)',
      description: 'Compares this string to another object',
      example: '"Hello".equals("Hello") // Returns true',
      category: 'comparison'
    },
    {
      name: 'equalsIgnoreCase(String str)',
      description: 'Compares strings ignoring case considerations',
      example: '"Hello".equalsIgnoreCase("hello") // Returns true',
      category: 'comparison'
    },
    {
      name: 'compareTo(String str)',
      description: 'Compares two strings lexicographically',
      example: '"apple".compareTo("banana") // Returns negative number',
      category: 'comparison'
    },
    {
      name: 'compareToIgnoreCase(String str)',
      description: 'Compares two strings lexicographically, ignoring case',
      example: '"APPLE".compareToIgnoreCase("banana") // Returns negative number',
      category: 'comparison'
    },

    // Search Methods
    {
      name: 'contains(CharSequence s)',
      description: 'Returns true if this string contains the specified sequence',
      example: '"Hello".contains("el") // Returns true',
      category: 'search'
    },
    {
      name: 'indexOf(String str)',
      description: 'Returns the index of the first occurrence of the specified substring',
      example: '"Hello".indexOf("l") // Returns 2',
      category: 'search'
    },
    {
      name: 'lastIndexOf(String str)',
      description: 'Returns the index of the last occurrence of the specified substring',
      example: '"Hello".lastIndexOf("l") // Returns 3',
      category: 'search'
    },
    {
      name: 'startsWith(String prefix)',
      description: 'Tests if this string starts with the specified prefix',
      example: '"Hello".startsWith("He") // Returns true',
      category: 'search'
    },
    {
      name: 'endsWith(String suffix)',
      description: 'Tests if this string ends with the specified suffix',
      example: '"Hello".endsWith("lo") // Returns true',
      category: 'search'
    },
    {
      name: 'matches(String regex)',
      description: 'Tests if this string matches the given regular expression',
      example: '"Hello123".matches(".*\\d+.*") // Returns true',
      category: 'search'
    },

    // Manipulation Methods
    {
      name: 'substring(int beginIndex)',
      description: 'Returns a substring from beginIndex to the end',
      example: '"Hello".substring(2) // Returns "llo"',
      category: 'manipulation'
    },
    {
      name: 'substring(int beginIndex, int endIndex)',
      description: 'Returns a substring from beginIndex to endIndex-1',
      example: '"Hello".substring(1, 4) // Returns "ell"',
      category: 'manipulation'
    },
    {
      name: 'concat(String str)',
      description: 'Concatenates the specified string to the end',
      example: '"Hello".concat(" World") // Returns "Hello World"',
      category: 'manipulation'
    },
    {
      name: 'replace(char old, char new)',
      description: 'Replaces all occurrences of a specified character with another character',
      example: '"Hello".replace("l", "w") // Returns "Hewwo"',
      category: 'manipulation'
    },
    {
      name: 'replace(CharSequence target, CharSequence replacement)',
      description: 'Replaces all occurrences of a specified CharSequence with another',
      example: '"Hello".replace("llo", "y") // Returns "Hey"',
      category: 'manipulation'
    },
    {
      name: 'replaceAll(String regex, String replacement)',
      description: 'Replaces all substrings matching the regex with the replacement',
      example: '"Hello, Hello".replaceAll("Hello", "Hi") // Returns "Hi, Hi"',
      category: 'manipulation'
    },
    {
      name: 'replaceFirst(String regex, String replacement)',
      description: 'Replaces first substring matching the regex with the replacement',
      example: '"Hello, Hello".replaceFirst("Hello", "Hi") // Returns "Hi, Hello"',
      category: 'manipulation'
    },
    {
      name: 'trim()',
      description: 'Removes whitespace from both ends of the string',
      example: '" Hello ".trim() // Returns "Hello"',
      category: 'manipulation'
    },
    {
      name: 'strip()',
      description: 'Returns a string with all leading and trailing whitespace removed',
      example: '"  Hello  ".strip() // Returns "Hello"',
      category: 'manipulation'
    },
    {
      name: 'stripLeading()',
      description: 'Returns a string with all leading whitespace removed',
      example: '"  Hello  ".stripLeading() // Returns "Hello  "',
      category: 'manipulation'
    },
    {
      name: 'stripTrailing()',
      description: 'Returns a string with all trailing whitespace removed',
      example: '"  Hello  ".stripTrailing() // Returns "  Hello"',
      category: 'manipulation'
    },
    {
      name: 'repeat(int count)',
      description: 'Returns a string whose value is this string repeated count times',
      example: '"Ha".repeat(3) // Returns "HaHaHa"',
      category: 'manipulation'
    },

    // Case Conversion
    {
      name: 'toLowerCase()',
      description: 'Converts string to lowercase letters',
      example: '"Hello".toLowerCase() // Returns "hello"',
      category: 'case'
    },
    {
      name: 'toUpperCase()',
      description: 'Converts string to uppercase letters',
      example: '"Hello".toUpperCase() // Returns "HELLO"',
      category: 'case'
    },

    // Split and Join
    {
      name: 'split(String regex)',
      description: 'Splits string into array of substrings based on regex',
      example: '"Hello World".split(" ") // Returns ["Hello", "World"]',
      category: 'manipulation'
    },
    {
      name: 'split(String regex, int limit)',
      description: 'Splits string into array with maximum number of parts',
      example: '"a:b:c:d".split(":", 2) // Returns ["a", "b:c:d"]',
      category: 'manipulation'
    },
    {
      name: 'join(CharSequence delimiter, CharSequence... elements)',
      description: 'Returns a new String composed of elements joined with the delimiter',
      example: 'String.join(", ", "Apple", "Banana", "Orange") // Returns "Apple, Banana, Orange"',
      category: 'static'
    },

    // Static Methods
    {
      name: 'valueOf(Object obj)',
      description: 'Returns the string representation of an object',
      example: 'String.valueOf(123) // Returns "123"',
      category: 'static'
    },
    {
      name: 'format(String format, Object... args)',
      description: 'Returns a formatted string using the specified format string and arguments',
      example: 'String.format("Hello %s", "World") // Returns "Hello World"',
      category: 'static'
    }
  ]
};