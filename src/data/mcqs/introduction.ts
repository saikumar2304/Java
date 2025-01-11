export const introductionMCQs = [
  {
    id: 1,
    question: "Which company originally developed Java?",
    options: [
      { text: "Microsoft", isCorrect: false },
      { text: "Sun Microsystems", isCorrect: true },
      { text: "Oracle", isCorrect: false },
      { text: "IBM", isCorrect: false }
    ],
    explanation: "Java was originally developed by Sun Microsystems in 1991. Later, Sun Microsystems was acquired by Oracle Corporation in 2010.",
    difficulty: 'Easy',
    category: 'History'
  },
  {
    id: 2,
    question: "What is the correct file extension for a Java source file?",
    options: [
      { text: ".class", isCorrect: false },
      { text: ".js", isCorrect: false },
      { text: ".java", isCorrect: true },
      { text: ".jar", isCorrect: false }
    ],
    explanation: "Java source files must have the .java extension. The .class extension is for compiled bytecode files.",
    difficulty: 'Easy',
    category: 'Basics'
  },
  {
    id: 3,
    question: "What is the default value of an int variable in Java?",
    options: [
      { text: "null", isCorrect: false },
      { text: "0", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "In Java, numeric primitive types are automatically initialized to 0 (int, long, byte, short) when declared as class members.",
    difficulty: 'Easy',
    category: 'Variables'
  },
  {
    id: 4,
    question: "Which of these keywords is used to define a class in Java?",
    options: [
      { text: "class", isCorrect: true },
      { text: "struct", isCorrect: false },
      { text: "object", isCorrect: false },
      { text: "type", isCorrect: false }
    ],
    explanation: "The 'class' keyword is used to define a class in Java. Unlike C++, Java doesn't have structs.",
    difficulty: 'Easy',
    category: 'Basics'
  },
  {
    id: 5,
    question: "What is the size of boolean data type in Java?",
    options: [
      { text: "1 bit", isCorrect: false },
      { text: "1 byte", isCorrect: false },
      { text: "2 bytes", isCorrect: false },
      { text: "Not precisely defined", isCorrect: true }
    ],
    explanation: "The Java specification doesn't precisely define the size of boolean. It's up to the JVM implementation.",
    difficulty: 'Medium',
    category: 'Data Types'
  },
  {
    id: 6,
    question: "What happens when you compile and run this code?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x;\n        System.out.println(x);\n    }\n}\n```",
    options: [
      { text: "Prints 0", isCorrect: false },
      { text: "Prints null", isCorrect: false },
      { text: "Compilation Error", isCorrect: true },
      { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "Local variables must be initialized before use. Unlike class members, they don't get default values.",
    difficulty: 'Medium',
    category: 'Variables',
    hasCode: true
  },
  {
    id: 7,
    question: "Which of these is not a primitive data type in Java?",
    options: [
      { text: "byte", isCorrect: false },
      { text: "String", isCorrect: true },
      { text: "int", isCorrect: false },
      { text: "char", isCorrect: false }
    ],
    explanation: "String is a class in Java, not a primitive type. The eight primitive types are byte, short, int, long, float, double, char, and boolean.",
    difficulty: 'Easy',
    category: 'Data Types'
  },
  {
    id: 8,
    question: "What is the range of byte data type in Java?",
    options: [
      { text: "-128 to 127", isCorrect: true },
      { text: "0 to 255", isCorrect: false },
      { text: "-256 to 255", isCorrect: false },
      { text: "-32768 to 32767", isCorrect: false }
    ],
    explanation: "byte is an 8-bit signed integer with range from -128 (-2^7) to 127 (2^7 - 1).",
    difficulty: 'Medium',
    category: 'Data Types'
  },
  {
    id: 9,
    question: "What will this code print?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        System.out.println(10 / 3);\n    }\n}\n```",
    options: [
      { text: "3.3333...", isCorrect: false },
      { text: "3", isCorrect: true },
      { text: "3.0", isCorrect: false },
      { text: "4", isCorrect: false }
    ],
    explanation: "When dividing two integers in Java, the result is also an integer. Decimal part is truncated, not rounded.",
    difficulty: 'Easy',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 10,
    question: "Which statement is true about Java?",
    options: [
      { text: "Java is a purely object oriented language", isCorrect: false },
      { text: "Java supports multiple inheritance through classes", isCorrect: false },
      { text: "Java supports operator overloading", isCorrect: false },
      { text: "Java is platform independent", isCorrect: true }
    ],
    explanation: "Java is platform independent due to its 'Write Once, Run Anywhere' capability. It's not purely object oriented (has primitives) and doesn't support multiple inheritance through classes or operator overloading.",
    difficulty: 'Easy',
    category: 'Basics'
  },
  {
    id: 11,
    question: "What is the output of this code?\n```java\nint i = 5;\nSystem.out.println(i++ + ++i);\n```",
    options: [
      { text: "11", isCorrect: false },
      { text: "12", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "13", isCorrect: false }
    ],
    explanation: "First i++ uses 5 then increments to 6, then ++i increments to 7 and uses 7. So 5 + 7 = 12",
    difficulty: 'Medium',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 12,
    question: "What is the default value of a boolean variable in Java?",
    options: [
      { text: "true", isCorrect: false },
      { text: "false", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "0", isCorrect: false }
    ],
    explanation: "The default value of a boolean instance variable is false. This applies to class members, not local variables.",
    difficulty: 'Easy',
    category: 'Variables'
  },
  {
    id: 13,
    question: "Which of these is a valid identifier in Java?",
    options: [
      { text: "2variable", isCorrect: false },
      { text: "_value", isCorrect: true },
      { text: "class", isCorrect: false },
      { text: "my-var", isCorrect: false }
    ],
    explanation: "Identifiers can start with letter, $ or _. They can't start with numbers or contain hyphens. 'class' is a reserved keyword.",
    difficulty: 'Easy',
    category: 'Basics'
  },
  {
    id: 14,
    question: "What is the output?\n```java\nint x = 10;\nSystem.out.println(x > 5 ? \"A\" : \"B\");\n```",
    options: [
      { text: "10", isCorrect: false },
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "true", isCorrect: false }
    ],
    explanation: "This uses the ternary operator. Since x > 5 is true (10 > 5), it returns 'A'.",
    difficulty: 'Easy',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 15,
    question: "What happens here?\n```java\nbyte b = 128;\n```",
    options: [
      { text: "Runs successfully", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Compilation error", isCorrect: true },
      { text: "Sets b to -128", isCorrect: false }
    ],
    explanation: "128 is outside byte range (-128 to 127). This causes a compilation error as it's trying to assign an int literal that's too large for byte.",
    difficulty: 'Medium',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 16,
    question: "What is the result of 5.0 / 2?",
    options: [
      { text: "2.0", isCorrect: false },
      { text: "2.5", isCorrect: true },
      { text: "2", isCorrect: false },
      { text: "3.0", isCorrect: false }
    ],
    explanation: "When one operand is double (5.0), the result is double. 5.0 / 2 performs floating-point division.",
    difficulty: 'Easy',
    category: 'Operators'
  },
  {
    id: 17,
    question: "Which statement is true about char in Java?",
    options: [
      { text: "It's 8 bits", isCorrect: false },
      { text: "It can store negative values", isCorrect: false },
      { text: "It's 16 bits and unsigned", isCorrect: true },
      { text: "It's the same as byte", isCorrect: false }
    ],
    explanation: "char in Java is a 16-bit unsigned integer type that can store Unicode characters (0 to 65535).",
    difficulty: 'Medium',
    category: 'Data Types'
  },
  {
    id: 18,
    question: "What's wrong with this code?\n```java\nint x = null;\n```",
    options: [
      { text: "Nothing, it's valid", isCorrect: false },
      { text: "null can't be assigned to primitives", isCorrect: true },
      { text: "x should be declared as Integer", isCorrect: false },
      { text: "Missing semicolon", isCorrect: false }
    ],
    explanation: "null can only be assigned to reference types (objects). Primitive types like int cannot hold null.",
    difficulty: 'Medium',
    category: 'Variables',
    hasCode: true
  },
  {
    id: 19,
    question: "What is the output?\n```java\nSystem.out.println(\"5\" + 2);\n```",
    options: [
      { text: "7", isCorrect: false },
      { text: "52", isCorrect: true },
      { text: "5 2", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "When + is used with a String, it performs concatenation. The int 2 is converted to String \"2\" and concatenated.",
    difficulty: 'Easy',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 20,
    question: "Which is the widest numeric type in Java?",
    options: [
      { text: "long", isCorrect: false },
      { text: "double", isCorrect: true },
      { text: "float", isCorrect: false },
      { text: "int", isCorrect: false }
    ],
    explanation: "double is 64 bits and has the largest range among numeric types in Java.",
    difficulty: 'Easy',
    category: 'Data Types'
  },
  {
    id: 21,
    question: "What happens here?\n```java\nchar c = 65;\nSystem.out.println(c);\n```",
    options: [
      { text: "65", isCorrect: false },
      { text: "A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "65 is the ASCII value for 'A'. When printed, char shows the character representation, not the numeric value.",
    difficulty: 'Medium',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 22,
    question: "What is the output?\n```java\nint x = 5;\nSystem.out.println(x = 10);\n```",
    options: [
      { text: "5", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "true", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Assignment expressions return the assigned value. Here x is assigned 10, and then 10 is printed.",
    difficulty: 'Medium',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 23,
    question: "Which is not a valid variable declaration?",
    options: [
      { text: "int _count = 0;", isCorrect: false },
      { text: "int #count = 0;", isCorrect: true },
      { text: "int $count = 0;", isCorrect: false },
      { text: "int count2 = 0;", isCorrect: false }
    ],
    explanation: "# is not allowed in variable names. Only letters, digits, $ and _ are allowed, and names can't start with digits.",
    difficulty: 'Easy',
    category: 'Variables'
  },
  {
    id: 24,
    question: "What's the output?\n```java\nint i = 10;\ni = i++;\nSystem.out.println(i);\n```",
    options: [
      { text: "10", isCorrect: true },
      { text: "11", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Post-increment (i++) uses the old value in the assignment. So i gets the original value 10 back after increment.",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 25,
    question: "What's the value of x?\n```java\nint x = 'a' + 1;\n```",
    options: [
      { text: "a1", isCorrect: false },
      { text: "b", isCorrect: false },
      { text: "98", isCorrect: true },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "char 'a' has ASCII value 97. Adding 1 gives 98. This is numeric addition, not string concatenation.",
    difficulty: 'Medium',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 26,
    question: "Which declaration is valid?",
    options: [
      { text: "int x = 1, y = 2, int z = 3;", isCorrect: false },
      { text: "int x = 1, y = 2, z = 3;", isCorrect: true },
      { text: "int x = 1; int y = 2, int z = 3;", isCorrect: false },
      { text: "int x, y, z = 1, 2, 3;", isCorrect: false }
    ],
    explanation: "Multiple variables of the same type can be declared and initialized in one statement, separated by commas.",
    difficulty: 'Easy',
    category: 'Variables'
  },
  {
    id: 27,
    question: "What's wrong?\n```java\nlong l = 2147483648;\n```",
    options: [
      { text: "Nothing wrong", isCorrect: false },
      { text: "Number too large", isCorrect: false },
      { text: "Need L suffix", isCorrect: true },
      { text: "Should use int", isCorrect: false }
    ],
    explanation: "Integer literals are int by default. This number exceeds int range, so needs L suffix: 2147483648L",
    difficulty: 'Medium',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 28,
    question: "What's the output?\n```java\nboolean b = true;\nb++;\n```",
    options: [
      { text: "true", isCorrect: false },
      { text: "false", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "Compilation error", isCorrect: true }
    ],
    explanation: "Increment operator (++) can't be applied to boolean. Only numeric types can be incremented.",
    difficulty: 'Easy',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 29,
    question: "Which is true about float f = 1.0?",
    options: [
      { text: "Compiles successfully", isCorrect: false },
      { text: "Needs F suffix", isCorrect: true },
      { text: "Automatically converts", isCorrect: false },
      { text: "Should use double", isCorrect: false }
    ],
    explanation: "Decimal literals are double by default. To assign to float, need F suffix: 1.0F, or explicit cast.",
    difficulty: 'Medium',
    category: 'Data Types'
  },
  {
    id: 30,
    question: "What's the output?\n```java\nSystem.out.println(10 + 20 + \"30\" + 40 + 50);\n```",
    options: [
      { text: "150", isCorrect: false },
      { text: "30304050", isCorrect: true },
      { text: "102030", isCorrect: false },
      { text: "60304050", isCorrect: false }
    ],
    explanation: "Left to right: 10+20=30, then \"30\"+\"30\"=\"3030\", then \"3030\"+40=\"303040\", finally \"303040\"+50=\"30304050\"",
    difficulty: 'Medium',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 31,
    question: "What's the output?\n```java\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(y);\n```",
    options: [
      { text: "11", isCorrect: false },
      { text: "12", isCorrect: true },
      { text: "13", isCorrect: false },
      { text: "10", isCorrect: false }
    ],
    explanation: "x++ uses 5 then x becomes 6, ++x makes x 7 and uses 7. So 5 + 7 = 12",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 32,
    question: "What happens here?\n```java\nint x = (int)true;\n```",
    options: [
      { text: "x becomes 1", isCorrect: false },
      { text: "x becomes 0", isCorrect: false },
      { text: "Compilation error", isCorrect: true },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Cannot cast boolean to int in Java. This is a compile-time error.",
    difficulty: 'Medium',
    category: 'Type Casting',
    hasCode: true
  },
  {
    id: 33,
    question: "What's the value?\n```java\ndouble d = 10/3;\n```",
    options: [
      { text: "3.3333...", isCorrect: false },
      { text: "3.0", isCorrect: true },
      { text: "3", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Integer division happens first (10/3 = 3), then the result is converted to double (3.0)",
    difficulty: 'Medium',
    category: 'Type Casting',
    hasCode: true
  },
  {
    id: 34,
    question: "Which is valid?\n```java\nbyte b = 10;\nb = b + 1;\n```",
    options: [
      { text: "Both lines are valid", isCorrect: false },
      { text: "Only first line is valid", isCorrect: true },
      { text: "Only second line is valid", isCorrect: false },
      { text: "Neither line is valid", isCorrect: false }
    ],
    explanation: "b + 1 produces an int result. Can't assign int to byte without explicit cast. Use b++ or b += 1 instead.",
    difficulty: 'Medium',
    category: 'Type Casting',
    hasCode: true
  },
  {
    id: 35,
    question: "What's the output?\n```java\nSystem.out.println(1.0f == 1.0);\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "float is promoted to double for comparison. 1.0f and 1.0d represent the same value.",
    difficulty: 'Medium',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 36,
    question: "What's the output?\n```java\nint x = 5;\nSystem.out.println(x > 2 ? x < 4 ? 10 : 8 : 7);\n```",
    options: [
      { text: "10", isCorrect: false },
      { text: "8", isCorrect: true },
      { text: "7", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Nested ternary: x > 2 is true, then x < 4 is false, so result is 8",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 37,
    question: "What's the output?\n```java\nint i = 2;\nSystem.out.println(i += i *= i);\n```",
    options: [
      { text: "6", isCorrect: false },
      { text: "8", isCorrect: true },
      { text: "4", isCorrect: false },
      { text: "10", isCorrect: false }
    ],
    explanation: "First i *= i (i becomes 4), then i += 4 (i becomes 8). Final value is 8",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 38,
    question: "What's wrong?\n```java\nshort s = 1000;\ns += 1;\n```",
    options: [
      { text: "Nothing wrong", isCorrect: true },
      { text: "First line invalid", isCorrect: false },
      { text: "Second line invalid", isCorrect: false },
      { text: "Both lines invalid", isCorrect: false }
    ],
    explanation: "Compound assignment operators automatically cast the result. s += 1 is valid even though s + 1 would need explicit cast.",
    difficulty: 'Medium',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 39,
    question: "What's the output?\n```java\nSystem.out.println(10 ^ 2);\n```",
    options: [
      { text: "100", isCorrect: false },
      { text: "8", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "1010", isCorrect: false }
    ],
    explanation: "^ is bitwise XOR, not power. 1010(binary) XOR 0010 = 1000(binary) = 8",
    difficulty: 'Medium',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 40,
    question: "What's the value?\n```java\nint x = 'A' + 'B';\n```",
    options: [
      { text: "AB", isCorrect: false },
      { text: "131", isCorrect: true },
      { text: "195", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "'A' is 65 and 'B' is 66 in ASCII. 65 + 66 = 131",
    difficulty: 'Medium',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 41,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int i = 0;\n        System.out.println(i++ + i++ + ++i + ++i + i++);\n    }\n}\n```",
    options: [
      { text: "10", isCorrect: false },
      { text: "12", isCorrect: true },
      { text: "8", isCorrect: false },
      { text: "15", isCorrect: false }
    ],
    explanation: "Let's break it down:\n1. i++ uses 0, i becomes 1\n2. i++ uses 1, i becomes 2\n3. ++i makes i 3, uses 3\n4. ++i makes i 4, uses 4\n5. i++ uses 4, i becomes 5\nSo: 0 + 1 + 3 + 4 + 4 = 12",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 42,
    question: "What's the output?\n```java\npublic class Test {\n    static int x = 1;\n    public static void main(String[] args) {\n        System.out.println(x + \" \" + method());\n    }\n    static int method() {\n        return x++ + ++x;\n    }\n}\n```",
    options: [
      { text: "1 3", isCorrect: false },
      { text: "1 4", isCorrect: true },
      { text: "2 4", isCorrect: false },
      { text: "2 3", isCorrect: false }
    ],
    explanation: "First x (1) is evaluated for println. Then method() executes: x++ uses 1, x becomes 2, ++x makes x 3 and uses 3. So 1 + 3 = 4. Output is '1 4'",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 43,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int mask = 0x000F;\n        int value = 0x2222;\n        System.out.println(value & mask);\n    }\n}\n```",
    options: [
      { text: "2", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "15", isCorrect: false },
      { text: "34", isCorrect: false }
    ],
    explanation: "0x000F is 0000 0000 0000 1111 in binary\n0x2222 is 0010 0010 0010 0010 in binary\nBitwise AND gives 0000 0000 0000 0010 = 2",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 44,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        double d = 0.0/0.0;\n        System.out.println(d + 1);\n    }\n}\n```",
    options: [
      { text: "1.0", isCorrect: false },
      { text: "0.0", isCorrect: false },
      { text: "NaN", isCorrect: true },
      { text: "Infinity", isCorrect: false }
    ],
    explanation: "0.0/0.0 results in NaN (Not a Number). Any arithmetic operation with NaN results in NaN.",
    difficulty: 'Hard',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 45,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        Integer i1 = 127;\n        Integer i2 = 127;\n        Integer i3 = 128;\n        Integer i4 = 128;\n        System.out.println((i1==i2) + \" \" + (i3==i4));\n    }\n}\n```",
    options: [
      { text: "true true", isCorrect: false },
      { text: "false false", isCorrect: false },
      { text: "true false", isCorrect: true },
      { text: "false true", isCorrect: false }
    ],
    explanation: "Integer caches values from -128 to 127. For values in this range, same value refers to same object. Outside this range, new objects are created.",
    difficulty: 'Hard',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 46,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        System.out.println(Math.min(Double.MIN_VALUE, 0.0d));\n    }\n}\n```",
    options: [
      { text: "Double.MIN_VALUE", isCorrect: false },
      { text: "0.0", isCorrect: true },
      { text: "-Double.MAX_VALUE", isCorrect: false },
      { text: "NaN", isCorrect: false }
    ],
    explanation: "Double.MIN_VALUE is the smallest positive value (closest to zero). Therefore, 0.0 is actually less than Double.MIN_VALUE.",
    difficulty: 'Hard',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 47,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = -1;\n        System.out.println(x >>> 1);\n    }\n}\n```",
    options: [
      { text: "-1", isCorrect: false },
      { text: "2147483647", isCorrect: true },
      { text: "-2", isCorrect: false },
      { text: "0", isCorrect: false }
    ],
    explanation: "-1 is all 1s in binary. Unsigned right shift (>>>) fills with 0s, resulting in 0111...111 (2147483647)",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
  {
    id: 48,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        char[] chars = {'a', 'b', 'c'};\n        String s = new String(chars);\n        chars[0] = 'd';\n        System.out.println(s);\n    }\n}\n```",
    options: [
      { text: "abc", isCorrect: true },
      { text: "dbc", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "String creates a new array copy of chars. Modifying the original array doesn't affect the String.",
    difficulty: 'Hard',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 49,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int i = 1234567890;\n        float f = i;\n        System.out.println(i - (int)f);\n    }\n}\n```",
    options: [
      { text: "0", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "-2", isCorrect: true },
      { text: "2", isCorrect: false }
    ],
    explanation: "float has only 23 bits of precision. Converting large int to float and back can lose precision.",
    difficulty: 'Hard',
    category: 'Data Types',
    hasCode: true
  },
  {
    id: 50,
    question: "What's the output?\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int i = 1;\n        long l = 2;\n        float f = 3.0f;\n        double d = 4.0;\n        System.out.println((i+l+f+d) instanceof Double);\n    }\n}\n```",
    options: [
      { text: "true", isCorrect: false },
      { text: "false", isCorrect: false },
      { text: "1.0", isCorrect: false },
      { text: "Compilation error", isCorrect: true }
    ],
    explanation: "instanceof operator can't be used with primitive types. It only works with reference types.",
    difficulty: 'Hard',
    category: 'Operators',
    hasCode: true
  },
    {
      id: 51,
      question: "What happens here?\n```java\nint x = 10;\nSystem.out.println(x / 0);\n```",
      options: [
        { text: "Throws ArithmeticException", isCorrect: true },
        { text: "Prints Infinity", isCorrect: false },
        { text: "Prints NaN", isCorrect: false },
        { text: "Compilation error", isCorrect: false }
      ],
      explanation: "Dividing an integer by 0 throws ArithmeticException. However, dividing a floating-point number by 0 results in Infinity or NaN.",
      difficulty: 'Medium',
      category: 'Operators',
      hasCode: true
    },
    {
      id: 52,
      question: "What's the output?\n```java\nint x = 10;\nif (x = 5) {\n    System.out.println(\"True\");\n} else {\n    System.out.println(\"False\");\n}\n```",
      options: [
        { text: "True", isCorrect: false },
        { text: "False", isCorrect: false },
        { text: "Compilation error", isCorrect: true },
        { text: "Runtime error", isCorrect: false }
      ],
      explanation: "The condition of an if statement must evaluate to a boolean. Here, `x = 5` is an assignment, not a comparison, and results in a compilation error.",
      difficulty: 'Medium',
      category: 'Syntax',
      hasCode: true
    },
    {
      id: 53,
      question: "What happens here?\n```java\nint x;\nif (x > 0) {\n    System.out.println(\"Positive\");\n}\n```",
      options: [
        { text: "Prints Positive", isCorrect: false },
        { text: "Compilation error", isCorrect: true },
        { text: "Runtime error", isCorrect: false },
        { text: "Prints nothing", isCorrect: false }
      ],
      explanation: "Local variables must be initialized before use. Since `x` is declared but not initialized, it causes a compilation error.",
      difficulty: 'Easy',
      category: 'Variables',
      hasCode: true
    },
    {
      id: 54,
      question: "What happens here?\n```java\nint a = 10, b = 20;\nSystem.out.println(++a + b--);\n```",
      options: [
        { text: "30", isCorrect: false },
        { text: "31", isCorrect: true },
        { text: "32", isCorrect: false },
        { text: "Compilation error", isCorrect: false }
      ],
      explanation: "`++a` increments `a` to 11 before using it, while `b--` uses `b` as 20, then decrements it to 19. So, 11 + 20 = 31.",
      difficulty: 'Medium',
      category: 'Operators',
      hasCode: true
    },
    {
      id: 55,
      question: "What's the output?\n```java\nint x = 5;\nx += x -= x *= 2;\nSystem.out.println(x);\n```",
      options: [
        { text: "5", isCorrect: false },
        { text: "0", isCorrect: true },
        { text: "10", isCorrect: false },
        { text: "Compilation error", isCorrect: false }
      ],
      explanation: "The expression is evaluated as: `x *= 2` makes `x = 10`. Then, `x -= 10` makes `x = 0`. Finally, `x += 0` leaves `x = 0`.",
      difficulty: 'Hard',
      category: 'Operators',
      hasCode: true
    },
    {
      id: 56,
      question: "What's the result of this code?\n```java\nfinal int x = 5;\nx = 10;\nSystem.out.println(x);\n```",
      options: [
        { text: "10", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "Compilation error", isCorrect: true },
        { text: "Runtime error", isCorrect: false }
      ],
      explanation: "The `final` keyword makes `x` a constant. Attempting to reassign `x` causes a compilation error.",
      difficulty: 'Easy',
      category: 'Variables',
      hasCode: true
    },
    {
      id: 57,
      question: "What happens when this code runs?\n```java\nint a = 5;\nint b = 0;\nSystem.out.println(a / b);\n```",
      options: [
        { text: "Prints Infinity", isCorrect: false },
        { text: "Prints 0", isCorrect: false },
        { text: "Throws ArithmeticException", isCorrect: true },
        { text: "Compilation error", isCorrect: false }
      ],
      explanation: "Dividing an integer by zero throws `ArithmeticException`. This is different from floating-point numbers, where division by zero results in Infinity or NaN.",
      difficulty: 'Medium',
      category: 'Operators',
      hasCode: true
    },
    {
      id: 58,
      question: "What happens when this code is executed?\n```java\nint a = 10;\nint b = ++a * 2;\nSystem.out.println(b);\n```",
      options: [
        { text: "20", isCorrect: false },
        { text: "21", isCorrect: false },
        { text: "22", isCorrect: true },
        { text: "Compilation error", isCorrect: false }
      ],
      explanation: "`++a` increments `a` to 11 before using it in the multiplication. So, `b = 11 * 2`, resulting in `b = 22`.",
      difficulty: 'Easy',
      category: 'Operators',
      hasCode: true
    },
    {
      id: 59,
      question: "What's the output?\n```java\nint x = 10;\nSystem.out.println(x == 10 && x / 0 == 0);\n```",
      options: [
        { text: "true", isCorrect: false },
        { text: "false", isCorrect: false },
        { text: "Throws ArithmeticException", isCorrect: false },
        { text: "Compilation error", isCorrect: true }
      ],
      explanation: "Logical AND (`&&`) short-circuits. Since `x == 10` is true, it doesn't evaluate the second condition, avoiding an error.",
      difficulty: 'Medium',
      category: 'Operators',
      hasCode: true
    },
    {
      id: 60,
      question: "What's the result?\n```java\nint a = 1, b = 2;\nint c = a++ + ++b;\nSystem.out.println(c);\n```",
      options: [
        { text: "4", isCorrect: false },
        { text: "5", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "Compilation error", isCorrect: false }
      ],
      explanation: "`a++` uses the value of `a` as 1, then increments `a` to 2. `++b` increments `b` to 3 before using it. So, `c = 1 + 3 = 5`.",
      difficulty: 'Medium',
      category: 'Operators',
      hasCode: true
    },
    {
        id: 61,
        question: "What's the output of this code?\n```java\nint x = 10;\nx += ++x + x++;\nSystem.out.println(x);\n```",
        options: [
          { text: "33", isCorrect: false },
          { text: "32", isCorrect: true },
          { text: "31", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`++x` increments `x` to 11 and uses it, `x++` uses 11 and increments to 12. So `x = 10 + 11 + 11 = 32`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 62,
        question: "What happens in this code?\n```java\nint a = 5;\nint b = 2;\na = a << b;\nSystem.out.println(a);\n```",
        options: [
          { text: "20", isCorrect: true },
          { text: "10", isCorrect: false },
          { text: "15", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "Left shift operator (`<<`) shifts bits to the left, effectively multiplying `a` by 2 raised to the power `b`. Here, `a = 5 * 2^2 = 20`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 63,
        question: "What happens when you run this code?\n```java\nint x = 5;\nSystem.out.println(x++ * ++x);\n```",
        options: [
          { text: "35", isCorrect: true },
          { text: "42", isCorrect: false },
          { text: "25", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 5, then increments to 6. `++x` increments `x` to 7 and uses it. So, `5 * 7 = 35`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 64,
        question: "What's the output of this code?\n```java\nint x = 10;\nint y = x++ + x--;\nSystem.out.println(y);\n```",
        options: [
          { text: "21", isCorrect: true },
          { text: "20", isCorrect: false },
          { text: "19", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 10, then increments to 11. `x--` uses 11, then decrements back to 10. So, `y = 10 + 11 = 21`.",
        difficulty: 'Easy',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 65,
        question: "What happens here?\n```java\nint x = 7;\nSystem.out.println(x >> 1);\n```",
        options: [
          { text: "3", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "7", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "Right shift operator (`>>`) divides the number by 2 raised to the power of the shift count. Here, `7 >> 1` equals `7 / 2^1 = 3`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 66,
        question: "What happens in this code?\n```java\nint x = 5;\nx ^= x;\nSystem.out.println(x);\n```",
        options: [
          { text: "0", isCorrect: true },
          { text: "5", isCorrect: false },
          { text: "-5", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "The XOR operation (`^`) between a number and itself always results in 0. So, `x ^= x` sets `x` to 0.",
        difficulty: 'Easy',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 67,
        question: "What happens here?\n```java\nint a = 0;\nint b = a++ + ++a;\nSystem.out.println(b);\n```",
        options: [
          { text: "2", isCorrect: true },
          { text: "1", isCorrect: false },
          { text: "3", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a++` uses 0, then increments to 1. `++a` increments `a` to 2 and uses it. So, `b = 0 + 2 = 2`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 68,
        question: "What happens in this code?\n```java\nboolean b = true;\nSystem.out.println(b ? \"Yes\" : \"No\");\n```",
        options: [
          { text: "Yes", isCorrect: true },
          { text: "No", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The ternary operator evaluates the condition `b`. Since `b` is `true`, the result is `\"Yes\"`.",
        difficulty: 'Easy',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 69,
        question: "What happens when this code runs?\n```java\nint x = 1;\nx = x++ + x++;\nSystem.out.println(x);\n```",
        options: [
          { text: "3", isCorrect: true },
          { text: "2", isCorrect: false },
          { text: "4", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 1, then increments to 2. The second `x++` uses 2, then increments to 3. So, `x = 1 + 2 = 3`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 70,
        question: "What's the result of this code?\n```java\nint a = 5;\na = a * (a = 3);\nSystem.out.println(a);\n```",
        options: [
          { text: "15", isCorrect: true },
          { text: "25", isCorrect: false },
          { text: "3", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "The expression evaluates `a * (a = 3)`. The value of `a` in the multiplication is the original `a` (5), so `a = 5 * 3 = 15`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 71,
        question: "What happens in this code?\n```java\nint x = 10;\nx = x++ + --x + x--;\nSystem.out.println(x);\n```",
        options: [
          { text: "29", isCorrect: false },
          { text: "28", isCorrect: false },
          { text: "30", isCorrect: true },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 10, then increments to 11. `--x` decrements `x` to 10, and `x--` uses 10 then decrements to 9. So, `10 + 10 + 10 = 30`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 72,
        question: "What happens in this code?\n```java\nint a = 5;\nint b = a-- - --a;\nSystem.out.println(b);\n```",
        options: [
          { text: "2", isCorrect: true },
          { text: "0", isCorrect: false },
          { text: "-1", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a--` uses 5, then decrements `a` to 4. `--a` decrements `a` to 3 and uses it. So, `b = 5 - 3 = 2`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 73,
        question: "What's the output of this code?\n```java\nint x = 1;\nx += x++ + ++x;\nSystem.out.println(x);\n```",
        options: [
          { text: "5", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "6", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 1, then increments to 2. `++x` increments `x` to 3 and uses it. So, `x += 1 + 3` results in `x = 5`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 74,
        question: "What happens in this code?\n```java\nint x = 0;\nif (x++ == 0 && x++ == 1) {\n    System.out.println(\"True\");\n} else {\n    System.out.println(\"False\");\n}\n```",
        options: [
          { text: "True", isCorrect: true },
          { text: "False", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "`x++` uses 0, then increments to 1. The second `x++` uses 1 and increments to 2. Both conditions are true, so `True` is printed.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 75,
        question: "What's the output of this code?\n```java\nint a = 5;\nint b = 6;\nint c = a & b;\nSystem.out.println(c);\n```",
        options: [
          { text: "4", isCorrect: true },
          { text: "5", isCorrect: false },
          { text: "6", isCorrect: false },
          { text: "0", isCorrect: false }
        ],
        explanation: "The bitwise AND (`&`) compares each bit of `a` and `b`. For `5` (0101) and `6` (0110), the result is `0100` (4).",
        difficulty: 'Easy',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 76,
        question: "What happens here?\n```java\nint x = 1;\nx = x++ + x + ++x;\nSystem.out.println(x);\n```",
        options: [
          { text: "5", isCorrect: false },
          { text: "6", isCorrect: true },
          { text: "7", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 1, then increments to 2. `x` uses 2. `++x` increments `x` to 3 and uses it. So, `x = 1 + 2 + 3 = 6`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 77,
        question: "What happens here?\n```java\nint x = 2;\nx *= x++;\nSystem.out.println(x);\n```",
        options: [
          { text: "4", isCorrect: true },
          { text: "6", isCorrect: false },
          { text: "8", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 2, then increments to 3. `x *= 2` results in `4`.",
        difficulty: 'Easy',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 78,
        question: "What happens in this code?\n```java\nint x = 0;\nx = x++ - --x;\nSystem.out.println(x);\n```",
        options: [
          { text: "-1", isCorrect: false },
          { text: "0", isCorrect: true },
          { text: "1", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 0, then increments to 1. `--x` decrements `x` back to 0. So, `x = 0 - 0 = 0`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 79,
        question: "What happens here?\n```java\nint a = 10;\nint b = 20;\nb = a++ + b--;\nSystem.out.println(b);\n```",
        options: [
          { text: "30", isCorrect: true },
          { text: "31", isCorrect: false },
          { text: "29", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a++` uses 10, then increments to 11. `b--` uses 20, then decrements to 19. So, `b = 10 + 20 = 30`.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 80,
        question: "What happens in this code?\n```java\nint x = 1;\nx = x + ++x * x++;\nSystem.out.println(x);\n```",
        options: [
          { text: "5", isCorrect: true },
          { text: "7", isCorrect: false },
          { text: "6", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`++x` increments `x` to 2 and uses it. `x++` uses 2, then increments to 3. So, `x = 1 + 2 * 2 = 5`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 81,
        question: "What happens in this code?\n```java\nint a = 10;\na += a++ + ++a - --a;\nSystem.out.println(a);\n```",
        options: [
          { text: "21", isCorrect: true },
          { text: "22", isCorrect: false },
          { text: "23", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a++` uses 10, then increments to 11. `++a` increments `a` to 12, `--a` decrements it back to 11. So, `a += 10 + 12 - 11 = 21`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 82,
        question: "What happens here?\n```java\nint x = 5;\nx = x++ * x + ++x - x--;\nSystem.out.println(x);\n```",
        options: [
          { text: "30", isCorrect: true },
          { text: "31", isCorrect: false },
          { text: "29", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 5, then increments to 6. `++x` increments to 7 and uses it. `x--` uses 7, then decrements to 6. So `x = 5 * 6 + 7 - 7 = 30`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 83,
        question: "What happens when this code is executed?\n```java\nint x = 1;\nif (x++ == ++x || --x == x--) {\n    System.out.println(\"True\");\n} else {\n    System.out.println(\"False\");\n}\n```",
        options: [
          { text: "True", isCorrect: true },
          { text: "False", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "`x++ == ++x` evaluates to false because `x++` uses 1 and `++x` increments to 3. `--x == x--` evaluates to true because `--x` decrements to 2 and matches `x--`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 84,
        question: "What happens here?\n```java\nint a = 8;\na ^= a << 2;\nSystem.out.println(a);\n```",
        options: [
          { text: "40", isCorrect: true },
          { text: "32", isCorrect: false },
          { text: "24", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a << 2` shifts 8 (1000 in binary) to 32 (100000). XOR (`^`) of 8 and 32 results in 40 (101000 in binary).",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 85,
        question: "What happens in this code?\n```java\nint x = 7;\nx = x++ & ++x | x--;\nSystem.out.println(x);\n```",
        options: [
          { text: "15", isCorrect: true },
          { text: "7", isCorrect: false },
          { text: "5", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 7, then increments to 8. `++x` increments to 9, `x--` uses 9 then decrements to 8. The expression evaluates to `7 & 9 | 9 = 15`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 86,
        question: "What happens when this code runs?\n```java\nint x = 5;\nint y = 10;\nx ^= y ^= x ^= y;\nSystem.out.println(x + \",\" + y);\n```",
        options: [
          { text: "10,5", isCorrect: true },
          { text: "5,10", isCorrect: false },
          { text: "15,0", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "This is a trick to swap `x` and `y` using XOR. The final values are `x = 10` and `y = 5`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 87,
        question: "What happens here?\n```java\nint a = 10;\nint b = ~a;\nSystem.out.println(b);\n```",
        options: [
          { text: "-11", isCorrect: true },
          { text: "10", isCorrect: false },
          { text: "11", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "The bitwise complement (`~`) inverts all bits of `a`. For `10` (00001010 in binary), the complement is `-11`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 88,
        question: "What happens in this code?\n```java\nint x = 1;\nx += (x++ + ++x) * (--x - x--);\nSystem.out.println(x);\n```",
        options: [
          { text: "-1", isCorrect: false },
          { text: "0", isCorrect: false },
          { text: "1", isCorrect: true },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "Break it down: `x++` uses 1, `++x` increments to 3, `--x` decrements to 2, `x--` uses 2. Final computation gives `1`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 89,
        question: "What happens when this code runs?\n```java\nint x = 0;\nif (x++ == 0 & ++x == 2) {\n    System.out.println(\"True\");\n} else {\n    System.out.println(\"False\");\n}\n```",
        options: [
          { text: "True", isCorrect: true },
          { text: "False", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Unlike `&&`, the `&` operator does not short-circuit. Both conditions are true, so `True` is printed.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 90,
        question: "What happens here?\n```java\nint a = 5;\na = a++ * a-- / ++a;\nSystem.out.println(a);\n```",
        options: [
          { text: "2", isCorrect: false },
          { text: "1", isCorrect: false },
          { text: "5", isCorrect: true },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a++` uses 5, then increments to 6. `a--` uses 6, then decrements to 5. `++a` increments to 6. The computation is `5 * 6 / 6 = 5`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 91,
        question: "What happens in this code?\n```java\nint x = 2;\nx = x++ * ++x / --x + x--;\nSystem.out.println(x);\n```",
        options: [
          { text: "5", isCorrect: true },
          { text: "6", isCorrect: false },
          { text: "4", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 2, then increments to 3. `++x` increments to 4, `--x` decrements to 3, and `x--` uses 3, then decrements to 2. The result is `2 * 4 / 3 + 3 = 5`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 92,
        question: "What happens here?\n```java\nint a = 7;\na = a++ + ~a;\nSystem.out.println(a);\n```",
        options: [
          { text: "-1", isCorrect: true },
          { text: "0", isCorrect: false },
          { text: "1", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a++` uses 7, then increments to 8. `~a` inverts all bits of 8, resulting in `-9`. So `a = 7 + (-9) = -1`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 93,
        question: "What happens in this code?\n```java\nint x = 5;\nx *= x++ + ++x;\nSystem.out.println(x);\n```",
        options: [
          { text: "60", isCorrect: true },
          { text: "25", isCorrect: false },
          { text: "30", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 5, then increments to 6. `++x` increments `x` to 7. The calculation becomes `5 * (5 + 7) = 60`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 94,
        question: "What happens in this code?\n```java\nint a = 2, b = 3;\na += b *= a += 1;\nSystem.out.println(a);\n```",
        options: [
          { text: "14", isCorrect: false },
          { text: "9", isCorrect: false },
          { text: "11", isCorrect: true },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "Breakdown: `a += 1` makes `a = 3`. Then `b *= 3` makes `b = 9`. Finally, `a += 9` results in `a = 11`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 95,
        question: "What happens in this code?\n```java\nint x = 1;\nint y = 2;\nx = x++ + y-- - --x + ++y;\nSystem.out.println(x);\n```",
        options: [
          { text: "3", isCorrect: false },
          { text: "4", isCorrect: true },
          { text: "5", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 1, `y--` uses 2, then decrements to 1. `--x` decrements to 1, `++y` increments to 2. So `x = 1 + 2 - 1 + 2 = 4`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 96,
        question: "What happens when this code runs?\n```java\nint a = 5;\nint b = a++ + a-- - --a + ++a;\nSystem.out.println(b);\n```",
        options: [
          { text: "11", isCorrect: false },
          { text: "12", isCorrect: true },
          { text: "10", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a++` uses 5, then increments to 6. `a--` uses 6, then decrements to 5. `--a` decrements to 4, `++a` increments to 5. Result: `5 + 6 - 4 + 5 = 12`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 97,
        question: "What happens in this code?\n```java\nint x = 10;\nx = x++ / 2 + x-- * 2;\nSystem.out.println(x);\n```",
        options: [
          { text: "27", isCorrect: true },
          { text: "30", isCorrect: false },
          { text: "32", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 10, then increments to 11. `x--` uses 11, then decrements to 10. So `x = 10 / 2 + 11 * 2 = 27`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 98,
        question: "What happens when this code runs?\n```java\nint a = 5;\nint b = 10;\na = b-- / a++ + ++b * --a;\nSystem.out.println(a);\n```",
        options: [
          { text: "52", isCorrect: true },
          { text: "50", isCorrect: false },
          { text: "55", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`b--` uses 10, then decrements to 9. `a++` uses 5, then increments to 6. `++b` increments to 10. `--a` decrements to 5. Result: `10 / 5 + 10 * 5 = 52`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 99,
        question: "What happens in this code?\n```java\nint x = 2;\nx += x * x++ + ++x;\nSystem.out.println(x);\n```",
        options: [
          { text: "11", isCorrect: false },
          { text: "12", isCorrect: false },
          { text: "10", isCorrect: true },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`x++` uses 2, then increments to 3. `++x` increments to 4. So `x += 2 * 2 + 4`, resulting in `x = 2 + 4 + 4 = 10`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      },
      {
        id: 100,
        question: "What happens in this code?\n```java\nint a = 3;\na *= a++ + --a * ++a;\nSystem.out.println(a);\n```",
        options: [
          { text: "45", isCorrect: true },
          { text: "20", isCorrect: false },
          { text: "19", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "`a++` uses 3, then increments to 4. `--a` decrements to 3, `++a` increments to 4. So `a *= 3 + 3 * 4`, resulting in `a = 3 * (3 + 12) = 45`.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
      }
    
    

    
    
  
]; 