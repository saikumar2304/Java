function shuffleOptions(mcqs: any[]) {
    mcqs.forEach(mcq => {
      // Fisher-Yates shuffle algorithm
      const options = mcq.options;
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
    });
}

export const methodMCQs = [
    {
      id: 1,
      question: "What's wrong?\n```java\nclass Test {\n    void method(int x) {}\n    int method(int y) { return y; }\n}\n```",
      options: [
        { text: "Nothing wrong", isCorrect: false },
        { text: "Method overloading requires different parameters", isCorrect: true },
        { text: "Return type must be same", isCorrect: false },
        { text: "Parameter names must be same", isCorrect: false }
      ],
      explanation: "Method overloading is based on parameter types, not return type or parameter names.",
      difficulty: 'Medium',
      category: 'Method Overloading',
      hasCode: true
    },
    {
      id: 2,
      question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"Static method\");\n    }\n    void method(double x) {\n        System.out.println(\"Instance method\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Test().method(5);\n    }\n}\n```",
      options: [
        { text: "Static method", isCorrect: false },
        { text: "Instance method", isCorrect: true },
        { text: "Compilation error", isCorrect: false },
        { text: "Runtime error", isCorrect: false }
      ],
      explanation: "Overloading selects the method based on the parameter type. int is widened to double for the instance method.",
      difficulty: 'Medium',
      category: 'Method Overloading',
      hasCode: true
    },
    {
      id: 3,
      question: "What's the output?\n```java\nclass Test {\n    public void method() {\n        method();\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        new Test().method();\n    }\n}\n```",
      options: [
        { text: "Infinite recursion", isCorrect: false },
        { text: "StackOverflowError", isCorrect: true },
        { text: "Compilation error", isCorrect: false },
        { text: "Nothing prints", isCorrect: false }
      ],
      explanation: "Calling `method()` within itself causes infinite recursion, leading to a `StackOverflowError`.",
      difficulty: 'Medium',
      category: 'Recursion',
      hasCode: true
    },
    {
      id: 4,
      question: "What's the output?\n```java\nclass Test {\n    public void method(int x) {}\n    public void method(int x, int y) {}\n}\npublic class Main {\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.method(1, 2);\n    }\n}\n```",
      options: [
        { text: "Nothing prints", isCorrect: true },
        { text: "1, 2", isCorrect: false },
        { text: "Compilation error", isCorrect: false },
        { text: "Runtime error", isCorrect: false }
      ],
      explanation: "Overloading allows the method to accept different parameter lists, but no print statements exist in the code.",
      difficulty: 'Easy',
      category: 'Method Overloading',
      hasCode: true
    },
    {
      id: 5,
      question: "What's the output?\n```java\nclass Test {\n    public static void main(String[] args) {\n        Test t = null;\n        t.method();\n    }\n    static void method() {\n        System.out.println(\"Static method\");\n    }\n}\n```",
      options: [
        { text: "Static method", isCorrect: true },
        { text: "Compilation error", isCorrect: false },
        { text: "Runtime error", isCorrect: false },
        { text: "NullPointerException", isCorrect: false }
      ],
      explanation: "Static methods are called on the class, even if the object reference is null. No exception is thrown.",
      difficulty: 'Medium',
      category: 'Static Methods',
      hasCode: true
    },
    {
      id: 6,
      question: "What's wrong?\n```java\nclass Test {\n    static void method() {\n        return 10;\n    }\n}\n```",
      options: [
        { text: "Nothing wrong", isCorrect: false },
        { text: "Static methods cannot return values", isCorrect: false },
        { text: "Method must specify return type", isCorrect: true },
        { text: "Static methods must take parameters", isCorrect: false }
      ],
      explanation: "The method specifies `void` but attempts to return a value. Change `void` to `int`.",
      difficulty: 'Medium',
      category: 'Return Types',
      hasCode: true
    },
    {
      id: 7,
      question: "What's the output?\n```java\nclass Test {\n    void method() {\n        System.out.println(\"No parameters\");\n    }\n    void method(int x) {\n        System.out.println(\"One parameter\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.method();\n    }\n}\n```",
      options: [
        { text: "No parameters", isCorrect: true },
        { text: "One parameter", isCorrect: false },
        { text: "Compilation error", isCorrect: false },
        { text: "Runtime error", isCorrect: false }
      ],
      explanation: "Method overloading selects the method based on the number of parameters passed.",
      difficulty: 'Easy',
      category: 'Method Overloading',
      hasCode: true
    },
    {
      id: 8,
      question: "What's the output?\n```java\nclass Test {\n    static void method(int... x) {\n        System.out.println(x.length);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Test.method(1, 2, 3, 4);\n    }\n}\n```",
      options: [
        { text: "4", isCorrect: true },
        { text: "Compilation error", isCorrect: false },
        { text: "Runtime error", isCorrect: false },
        { text: "0", isCorrect: false }
      ],
      explanation: "Varargs accept zero or more arguments. The method prints the number of arguments passed.",
      difficulty: 'Medium',
      category: 'Varargs',
      hasCode: true
    },
    {
      id: 9,
      question: "What's the output?\n```java\nclass Test {\n    static int method(int x, int... y) {\n        return y.length;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Test.method(1));\n    }\n}\n```",
      options: [
        { text: "0", isCorrect: true },
        { text: "1", isCorrect: false },
        { text: "Compilation error", isCorrect: false },
        { text: "Runtime error", isCorrect: false }
      ],
      explanation: "Passing a single argument fills the first parameter (x). Varargs remain empty, so their length is 0.",
      difficulty: 'Medium',
      category: 'Varargs',
      hasCode: true
    },
    {
      id: 10,
      question: "What's wrong?\n```java\nclass Test {\n    private void method() {}\n    public void method() {}\n}\n```",
      options: [
        { text: "Nothing wrong", isCorrect: false },
        { text: "Access modifiers cannot differ in overloaded methods", isCorrect: true },
        { text: "Method overloading requires different parameters", isCorrect: false },
        { text: "Return type must be same", isCorrect: false }
      ],
      explanation: "Access modifiers alone do not qualify as overloading. Parameters must differ.",
      difficulty: 'Hard',
      category: 'Access Modifiers',
      hasCode: true
    },
    {
        id: 11,
        question: "What's the output?\n```java\nclass Test {\n    static void method() {\n        System.out.println(\"Static Method\");\n    }\n    void method() {\n        System.out.println(\"Instance Method\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.method();\n    }\n}\n```",
        options: [
          { text: "Static Method", isCorrect: false },
          { text: "Instance Method", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The instance method is called because `method` without `static` refers to the object.",
        difficulty: 'Medium',
        category: 'Static vs Instance',
        hasCode: true
      },
      {
        id: 12,
        question: "What's wrong?\n```java\nclass Test {\n    static void method(int x, int... y) {}\n    static void method(int... y) {}\n}\n```",
        options: [
          { text: "Nothing wrong", isCorrect: false },
          { text: "Ambiguous method calls", isCorrect: true },
          { text: "Return type mismatch", isCorrect: false },
          { text: "Overloading rules violated", isCorrect: false }
        ],
        explanation: "Having two varargs methods with overlapping signatures causes ambiguity during calls.",
        difficulty: 'Hard',
        category: 'Varargs',
        hasCode: true
      },
      {
        id: 13,
        question: "What's the output?\n```java\nclass Test {\n    static int method(int x) {\n        return method(x - 1) + x;\n    }\n    public static void main(String[] args) {\n        System.out.println(method(5));\n    }\n}\n```",
        options: [
          { text: "15", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: true },
          { text: "StackOverflowError", isCorrect: true }
        ],
        explanation: "Infinite recursion occurs because the base case to stop recursion is missing.",
        difficulty: 'Hard',
        category: 'Recursion',
        hasCode: true
      },
      {
        id: 14,
        question: "What's the output?\n```java\nclass Test {\n    static int method(int x) {\n        if (x == 1) return 1;\n        return x * method(x - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(method(5));\n    }\n}\n```",
        options: [
          { text: "120", isCorrect: true },
          { text: "25", isCorrect: false },
          { text: "15", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "This is a recursive factorial calculation, correctly implemented with a base case.",
        difficulty: 'Medium',
        category: 'Recursion',
        hasCode: true
      },
      {
        id: 15,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Object o) {\n        System.out.println(\"Object\");\n    }\n    static void method(String s) {\n        System.out.println(\"String\");\n    }\n    public static void main(String[] args) {\n        method(null);\n    }\n}\n```",
        options: [
          { text: "Object", isCorrect: false },
          { text: "String", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "String is more specific than Object, so the method accepting String is called.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 16,
        question: "What's the output?\n```java\nclass Test {\n    public int method() {\n        return 10;\n    }\n}\nclass Main extends Test {\n    public long method() {\n        return 20L;\n    }\n    public static void main(String[] args) {\n        Test t = new Main();\n        System.out.println(t.method());\n    }\n}\n```",
        options: [
          { text: "10", isCorrect: false },
          { text: "20", isCorrect: false },
          { text: "Compilation error", isCorrect: true },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Overridden methods must have the same return type. Here, `int` and `long` are incompatible.",
        difficulty: 'Hard',
        category: 'Return Types',
        hasCode: true
      },
      {
        id: 17,
        question: "What's the output?\n```java\nclass Test {\n    public void method() {\n        System.out.println(\"Test method\");\n    }\n}\nclass Main {\n    public static void main(String[] args) {\n        new Test() {\n            public void method() {\n                System.out.println(\"Anonymous method\");\n            }\n        }.method();\n    }\n}\n```",
        options: [
          { text: "Test method", isCorrect: false },
          { text: "Anonymous method", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "An anonymous inner class overrides the `method()` and calls its implementation.",
        difficulty: 'Medium',
        category: 'Anonymous Class',
        hasCode: true
      },
      {
        id: 18,
        question: "What's the output?\n```java\nclass Test {\n    static void method() {\n        System.out.println(\"Test method\");\n    }\n}\nclass Main extends Test {\n    static void method() {\n        System.out.println(\"Main method\");\n    }\n    public static void main(String[] args) {\n        Test t = new Main();\n        t.method();\n    }\n}\n```",
        options: [
          { text: "Test method", isCorrect: true },
          { text: "Main method", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Static methods are resolved at compile-time based on reference type, not runtime object.",
        difficulty: 'Hard',
        category: 'Static Methods',
        hasCode: true
      },
      {
        id: 19,
        question: "What's wrong?\n```java\nclass Test {\n    void method(int x) {}\n    int method(int x) {}\n}\n```",
        options: [
          { text: "Nothing wrong", isCorrect: false },
          { text: "Method overloading requires different parameters", isCorrect: false },
          { text: "Overloaded methods cannot differ only in return type", isCorrect: true },
          { text: "Overloading is not allowed in Java", isCorrect: false }
        ],
        explanation: "Overloading requires different parameters. Return type alone is insufficient to distinguish overloaded methods.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 20,
        question: "What's the output?\n```java\nclass Test {\n    static void method() {\n        System.out.println(\"Static method\");\n    }\n}\nclass Main {\n    public static void main(String[] args) {\n        Test.method();\n    }\n}\n```",
        options: [
          { text: "Static method", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Nothing prints", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Static methods are accessed using the class name, without needing an instance.",
        difficulty: 'Easy',
        category: 'Static Methods',
        hasCode: true
      },
      {
        id: 21,
        question: "What's the output?\n```java\nclass Test {\n    void method(int x, double y) {\n        System.out.println(\"int, double\");\n    }\n    void method(double x, int y) {\n        System.out.println(\"double, int\");\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.method(10, 10);\n    }\n}\n```",
        options: [
          { text: "int, double", isCorrect: false },
          { text: "double, int", isCorrect: false },
          { text: "Compilation error", isCorrect: true },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Ambiguity arises because both methods match equally well, causing a compilation error.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 22,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Object o) {\n        System.out.println(\"Object\");\n    }\n    static void method(Integer i) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        method(null);\n    }\n}\n```",
        options: [
          { text: "Object", isCorrect: false },
          { text: "Integer", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Integer is more specific than Object, so the method accepting Integer is chosen.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 23,
        question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(long x) {\n        System.out.println(\"long\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10);\n    }\n}\n```",
        options: [
          { text: "int", isCorrect: true },
          { text: "long", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Exact match takes precedence over widening. The int version is called.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 24,
        question: "What's the output?\n```java\nclass Test {\n    static void method(int... x) {\n        System.out.println(\"Varargs\");\n    }\n    static void method(int x) {\n        System.out.println(\"Single int\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
        options: [
          { text: "Varargs", isCorrect: false },
          { text: "Single int", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Single int method is more specific, so it is chosen over varargs.",
        difficulty: 'Medium',
        category: 'Varargs',
        hasCode: true
      },
      {
        id: 25,
        question: "What's the output?\n```java\nclass Test {\n    static void method(short s) {\n        System.out.println(\"short\");\n    }\n    static void method(int i) {\n        System.out.println(\"int\");\n    }\n    public static void main(String[] args) {\n        method((short) 10);\n    }\n}\n```",
        options: [
          { text: "short", isCorrect: true },
          { text: "int", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Explicit cast to short ensures that the short version of the method is called.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 26,
        question: "What's the output?\n```java\nclass Test {\n    static int method(int x) {\n        return x * 2;\n    }\n    public static void main(String[] args) {\n        System.out.println(Test.method(3));\n    }\n}\n```",
        options: [
          { text: "6", isCorrect: true },
          { text: "3", isCorrect: false },
          { text: "9", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "The static method doubles the value passed as an argument, returning 6.",
        difficulty: 'Easy',
        category: 'Static Methods',
        hasCode: true
      },
      {
        id: 27,
        question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    static void method(long x) {\n        System.out.println(\"long\");\n    }\n    public static void main(String[] args) {\n        method(10L);\n    }\n}\n```",
        options: [
          { text: "int", isCorrect: false },
          { text: "long", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Passing 10L explicitly as long calls the method accepting a long parameter.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 28,
        question: "What's the output?\n```java\nclass Test {\n    static void method(double... x) {\n        System.out.println(\"Varargs\");\n    }\n    static void method(double x) {\n        System.out.println(\"Single double\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
        options: [
          { text: "Varargs", isCorrect: false },
          { text: "Single double", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Exact match is chosen first. Varargs is used only when no exact match exists.",
        difficulty: 'Medium',
        category: 'Varargs',
        hasCode: true
      },
      {
        id: 29,
        question: "What's the output?\n```java\nclass Test {\n    static void method(float x) {\n        System.out.println(\"float\");\n    }\n    static void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        method(10.0);\n    }\n}\n```",
        options: [
          { text: "float", isCorrect: false },
          { text: "double", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Floating-point literals like `10.0` are double by default, so the double method is called.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 30,
        question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10);\n    }\n}\n```",
        options: [
          { text: "int", isCorrect: true },
          { text: "Integer", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Primitive int takes precedence over autoboxed Integer when exact matches are considered.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 31,
        question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    static void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        method((Integer) null);\n    }\n}\n```",
        options: [
          { text: "int", isCorrect: false },
          { text: "Integer", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `null` value matches the `Integer` version, as it's a reference type.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 32,
        question: "What's the output?\n```java\nclass Test {\n    void method(float x) {\n        System.out.println(\"float\");\n    }\n    void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10);\n    }\n}\n```",
        options: [
          { text: "float", isCorrect: false },
          { text: "double", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Primitive widening occurs, so the `double` version is chosen.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 33,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    static void method(String x) {\n        System.out.println(\"String\");\n    }\n    public static void main(String[] args) {\n        method(\"Test\");\n    }\n}\n```",
        options: [
          { text: "Object", isCorrect: false },
          { text: "String", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `String` version is chosen because it is more specific than `Object`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 34,
        question: "What's the output?\n```java\nclass Test {\n    void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10);\n    }\n}\n```",
        options: [
          { text: "Number", isCorrect: true },
          { text: "Object", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `Number` method is chosen because it's more specific than `Object`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 35,
        question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        new Test().method(null);\n    }\n}\n```",
        options: [
          { text: "int", isCorrect: false },
          { text: "Object", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `Object` method is chosen because `null` cannot match primitive types.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 36,
        question: "What's the output?\n```java\nclass Test {\n    void method(String x) {\n        System.out.println(\"String\");\n    }\n    void method(CharSequence x) {\n        System.out.println(\"CharSequence\");\n    }\n    public static void main(String[] args) {\n        new Test().method(\"Test\");\n    }\n}\n```",
        options: [
          { text: "String", isCorrect: true },
          { text: "CharSequence", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `String` version is chosen because it is more specific than `CharSequence`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 37,
        question: "What's the output?\n```java\nclass Test {\n    void method(String x) {\n        System.out.println(\"String\");\n    }\n    void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        new Test().method(\"Test\");\n    }\n}\n```",
        options: [
          { text: "String", isCorrect: true },
          { text: "Object", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `String` version is chosen because it is more specific than `Object`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 38,
        question: "What's the output?\n```java\nclass Test {\n    void method(CharSequence x) {\n        System.out.println(\"CharSequence\");\n    }\n    void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        new Test().method(\"Test\");\n    }\n}\n```",
        options: [
          { text: "CharSequence", isCorrect: true },
          { text: "Object", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `CharSequence` version is chosen because `String` implements `CharSequence`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 39,
        question: "What's the output?\n```java\nclass Test {\n    static void method(String... x) {\n        System.out.println(\"Varargs\");\n    }\n    static void method(String x) {\n        System.out.println(\"Single String\");\n    }\n    public static void main(String[] args) {\n        method(\"Test\");\n    }\n}\n```",
        options: [
          { text: "Varargs", isCorrect: false },
          { text: "Single String", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The single `String` method is more specific than the varargs method.",
        difficulty: 'Medium',
        category: 'Varargs',
        hasCode: true
      },
      {
        id: 40,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    static void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    static void method(String x) {\n        System.out.println(\"String\");\n    }\n    public static void main(String[] args) {\n        method(null);\n    }\n}\n```",
        options: [
          { text: "String", isCorrect: true },
          { text: "Integer", isCorrect: false },
          { text: "Object", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "The `String` version is chosen because it is the most specific match for `null`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 41,
        question: "What's the output?\n```java\nclass Test {\n    void method(int x, double y) {\n        System.out.println(\"int, double\");\n    }\n    void method(double x, int y) {\n        System.out.println(\"double, int\");\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.method(10, 10.0);\n    }\n}\n```",
        options: [
          { text: "int, double", isCorrect: true },
          { text: "double, int", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The exact parameter types match the method `int, double`, so it is selected.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 42,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    static void method(StringBuilder x) {\n        System.out.println(\"StringBuilder\");\n    }\n    public static void main(String[] args) {\n        method(new StringBuilder(\"Test\"));\n    }\n}\n```",
        options: [
          { text: "Object", isCorrect: false },
          { text: "StringBuilder", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `StringBuilder` method is chosen as it is more specific than `Object`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 43,
        question: "What's the output?\n```java\nclass Test {\n    void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    void method(Float x) {\n        System.out.println(\"Float\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10.0f);\n    }\n}\n```",
        options: [
          { text: "Number", isCorrect: false },
          { text: "Float", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `Float` method is chosen because it is more specific than `Number`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 44,
        question: "What's the output?\n```java\nclass Test {\n    void method(long x) {\n        System.out.println(\"long\");\n    }\n    void method(int... x) {\n        System.out.println(\"varargs\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10);\n    }\n}\n```",
        options: [
          { text: "long", isCorrect: true },
          { text: "varargs", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Exact matches and widening take precedence over varargs.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 45,
        question: "What's the output?\n```java\nclass Test {\n    static void method(int x, int y) {\n        System.out.println(\"Two ints\");\n    }\n    static void method(int... x) {\n        System.out.println(\"Varargs\");\n    }\n    public static void main(String[] args) {\n        method(10, 20);\n    }\n}\n```",
        options: [
          { text: "Two ints", isCorrect: true },
          { text: "Varargs", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The two-parameter method is chosen because it is more specific than varargs.",
        difficulty: 'Medium',
        category: 'Varargs',
        hasCode: true
      },
      {
        id: 46,
        question: "What's the output?\n```java\nclass Test {\n    void method(int x, Integer y) {\n        System.out.println(\"int, Integer\");\n    }\n    void method(Integer x, int y) {\n        System.out.println(\"Integer, int\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10, (Integer) null);\n    }\n}\n```",
        options: [
          { text: "int, Integer", isCorrect: true },
          { text: "Integer, int", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The first method matches exactly with the arguments passed.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 47,
        question: "What's the output?\n```java\nclass Test {\n    static void method(byte x) {\n        System.out.println(\"byte\");\n    }\n    static void method(short x) {\n        System.out.println(\"short\");\n    }\n    public static void main(String[] args) {\n        method((byte) 10);\n    }\n}\n```",
        options: [
          { text: "byte", isCorrect: true },
          { text: "short", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The explicit cast ensures the `byte` method is called.",
        difficulty: 'Easy',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 48,
        question: "What's the output?\n```java\nclass Test {\n    static void method(double x) {\n        System.out.println(\"double\");\n    }\n    static void method(Double x) {\n        System.out.println(\"Double\");\n    }\n    public static void main(String[] args) {\n        method(10.0);\n    }\n}\n```",
        options: [
          { text: "double", isCorrect: true },
          { text: "Double", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Primitive widening takes precedence over autoboxing, so the `double` method is chosen.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 49,
        question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    static void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        method(new Integer(10));\n    }\n}\n```",
        options: [
          { text: "int", isCorrect: false },
          { text: "Integer", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `Integer` method is chosen because the argument is an `Integer` object.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 50,
        question: "What's the output?\n```java\nclass Test {\n    static void method(float x) {\n        System.out.println(\"float\");\n    }\n    static void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
        options: [
          { text: "float", isCorrect: false },
          { text: "double", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "Primitive widening happens first, so the `double` method is chosen for `int` to `double` conversion.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 51,
        question: "What's the output?\n```java\nclass Test {\n    static void method(short x) {\n        System.out.println(\"short\");\n    }\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    public static void main(String[] args) {\n        method((short) 10);\n    }\n}\n```",
        options: [
          { text: "short", isCorrect: true },
          { text: "int", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The explicit cast to `short` ensures the `short` method is chosen.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 52,
        question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(float x) {\n        System.out.println(\"float\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10.5);\n    }\n}\n```",
        options: [
          { text: "int", isCorrect: false },
          { text: "float", isCorrect: false },
          { text: "Compilation error", isCorrect: true },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "There is no matching method for `double` (10.5 is double by default).",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 53,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    static void method(String x) {\n        System.out.println(\"String\");\n    }\n    static void method(StringBuilder x) {\n        System.out.println(\"StringBuilder\");\n    }\n    public static void main(String[] args) {\n        method(null);\n    }\n}\n```",
        options: [
          { text: "String", isCorrect: true },
          { text: "StringBuilder", isCorrect: false },
          { text: "Object", isCorrect: false },
          { text: "Compilation error", isCorrect: false }
        ],
        explanation: "The most specific method (`String`) is chosen when `null` can match multiple methods.",
        difficulty: 'Hard',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 54,
        question: "What's the output?\n```java\nclass Test {\n    void method(int x, double y) {\n        System.out.println(\"int, double\");\n    }\n    void method(double x, int y) {\n        System.out.println(\"double, int\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10, 10);\n    }\n}\n```",
        options: [
          { text: "Compilation error", isCorrect: true },
          { text: "int, double", isCorrect: false },
          { text: "double, int", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The call is ambiguous because both methods could match after type conversion.",
        difficulty: 'Hard',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 55,
        question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    static void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        Integer x = 10;\n        method(x);\n    }\n}\n```",
        options: [
          { text: "int", isCorrect: false },
          { text: "Integer", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `Integer` method is chosen because the argument is explicitly an `Integer` object.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 56,
        question: "What's the output?\n```java\nclass Test {\n    void method(byte... x) {\n        System.out.println(\"byte varargs\");\n    }\n    void method(short x) {\n        System.out.println(\"short\");\n    }\n    public static void main(String[] args) {\n        new Test().method((byte) 10);\n    }\n}\n```",
        options: [
          { text: "byte varargs", isCorrect: true },
          { text: "short", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `byte varargs` method is chosen because it matches the argument.",
        difficulty: 'Medium',
        category: 'Varargs',
        hasCode: true
      },
      {
        id: 57,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    static void method(CharSequence x) {\n        System.out.println(\"CharSequence\");\n    }\n    public static void main(String[] args) {\n        method(\"Test\");\n    }\n}\n```",
        options: [
          { text: "CharSequence", isCorrect: true },
          { text: "Object", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "`String` implements `CharSequence`, so the `CharSequence` method is chosen over the `Object` method.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 58,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    static void method(Double x) {\n        System.out.println(\"Double\");\n    }\n    public static void main(String[] args) {\n        method(10.5);\n    }\n}\n```",
        options: [
          { text: "Number", isCorrect: false },
          { text: "Double", isCorrect: true },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `Double` method is chosen because it is more specific than `Number`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 59,
        question: "What's the output?\n```java\nclass Test {\n    void method(String x) {\n        System.out.println(\"String\");\n    }\n    void method(CharSequence x) {\n        System.out.println(\"CharSequence\");\n    }\n    public static void main(String[] args) {\n        new Test().method((CharSequence) \"Test\");\n    }\n}\n```",
        options: [
          { text: "CharSequence", isCorrect: true },
          { text: "String", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The explicit cast to `CharSequence` ensures that the `CharSequence` method is called.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
      {
        id: 60,
        question: "What's the output?\n```java\nclass Test {\n    static void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
        options: [
          { text: "Number", isCorrect: true },
          { text: "Object", isCorrect: false },
          { text: "Compilation error", isCorrect: false },
          { text: "Runtime error", isCorrect: false }
        ],
        explanation: "The `Number` method is chosen because `Integer` (10) is a subclass of `Number`.",
        difficulty: 'Medium',
        category: 'Method Overloading',
        hasCode: true
      },
        {
          id: 61,
          question: "What's the output?\n```java\nclass Test {\n    static void method(int x, int y) {\n        System.out.println(x + y);\n    }\n    static void method(int... x) {\n        System.out.println(x.length);\n    }\n    public static void main(String[] args) {\n        method(10, 20);\n    }\n}\n```",
          options: [
            { text: "30", isCorrect: true },
            { text: "2", isCorrect: false },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "The exact match for two parameters is selected, ignoring the varargs method.",
          difficulty: 'Medium',
          category: 'Varargs',
          hasCode: true
        },
        {
            id: 62,
            question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10L);\n    }\n}\n```",
            options: [
              { text: "int", isCorrect: false },
              { text: "double", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `long` value is widened to `double` since there is no exact match for `long`.",
            difficulty: 'Medium',
            category: 'Type Conversion',
            hasCode: true
          },
          {
            id: 63,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x, Integer y) {\n        System.out.println(\"int, Integer\");\n    }\n    static void method(Integer x, int y) {\n        System.out.println(\"Integer, int\");\n    }\n    public static void main(String[] args) {\n        method(10, new Integer(20));\n    }\n}\n```",
            options: [
              { text: "int, Integer", isCorrect: true },
              { text: "Integer, int", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The exact parameter match is chosen when overloads are available.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 64,
            question: "What's the output?\n```java\nclass Test {\n    void method(float x) {\n        System.out.println(\"float\");\n    }\n    void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10.5f);\n    }\n}\n```",
            options: [
              { text: "float", isCorrect: true },
              { text: "double", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `float` method is chosen because the argument is explicitly a `float`.",
            difficulty: 'Easy',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 65,
            question: "What's the output?\n```java\nclass Test {\n    void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    void method(Double x) {\n        System.out.println(\"Double\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10.5);\n    }\n}\n```",
            options: [
              { text: "Number", isCorrect: false },
              { text: "Double", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `Double` method is chosen because it is more specific than `Number`.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 66,
            question: "What's the output?\n```java\nclass Test {\n    void method(String x) {\n        System.out.println(\"String\");\n    }\n    void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        new Test().method(null);\n    }\n}\n```",
            options: [
              { text: "String", isCorrect: true },
              { text: "Object", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `String` method is chosen because it is more specific than `Object`.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 67,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x, int y) {\n        System.out.println(x + y);\n    }\n    static void method(int... x) {\n        System.out.println(x.length);\n    }\n    public static void main(String[] args) {\n        method(10, 20);\n    }\n}\n```",
            options: [
              { text: "30", isCorrect: true },
              { text: "2", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The exact match for two parameters is selected, ignoring the varargs method.",
            difficulty: 'Medium',
            category: 'Varargs',
            hasCode: true
          },
          {
            id: 68,
            question: "What's the output?\n```java\nclass Test {\n    void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    void method(CharSequence x) {\n        System.out.println(\"CharSequence\");\n    }\n    public static void main(String[] args) {\n        method(\"Test\");\n    }\n}\n```",
            options: [
              { text: "CharSequence", isCorrect: true },
              { text: "Object", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "`String` implements `CharSequence`, so the `CharSequence` method is chosen over the `Object` method.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 69,
            question: "What's the output?\n```java\nclass Test {\n    static void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
            options: [
              { text: "Number", isCorrect: true },
              { text: "Object", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `Number` method is chosen because `Integer` (10) is a subclass of `Number`.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 70,
            question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10L);\n    }\n}\n```",
            options: [
              { text: "int", isCorrect: false },
              { text: "double", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `long` value is widened to `double` since there is no exact match for `long`.",
            difficulty: 'Medium',
            category: 'Type Conversion',
            hasCode: true
          },
          {
            id: 71,
            question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        new Test().method((Integer) 10);\n    }\n}\n```",
            options: [
              { text: "Integer", isCorrect: true },
              { text: "int", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The explicit cast to Integer ensures the `Integer` method is chosen.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 72,
            question: "What's the output?\n```java\nclass Test {\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    static void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        method((Object) 10);\n    }\n}\n```",
            options: [
              { text: "Object", isCorrect: true },
              { text: "Integer", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The explicit cast to Object ensures the `Object` method is called.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 73,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x, int y) {\n        System.out.println(x + y);\n    }\n    static void method(int... x) {\n        System.out.println(x.length);\n    }\n    public static void main(String[] args) {\n        method(10, 20);\n    }\n}\n```",
            options: [
              { text: "30", isCorrect: true },
              { text: "2", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The exact match for two parameters is selected, ignoring the varargs method.",
            difficulty: 'Medium',
            category: 'Varargs',
            hasCode: true
          },
          {
            id: 74,
            question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(float x) {\n        System.out.println(\"float\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10.0);\n    }\n}\n```",
            options: [
              { text: "float", isCorrect: false },
              { text: "Compilation error", isCorrect: true },
              { text: "int", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "There is no method accepting `double`, and the compiler doesn't automatically cast to `float`.",
            difficulty: 'Medium',
            category: 'Type Conversion',
            hasCode: true
          },
          {
            id: 75,
            question: "What's the output?\n```java\nclass Test {\n    void method(int x, double y) {\n        System.out.println(\"int, double\");\n    }\n    void method(double x, int y) {\n        System.out.println(\"double, int\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10, 10);\n    }\n}\n```",
            options: [
              { text: "int, double", isCorrect: false },
              { text: "double, int", isCorrect: false },
              { text: "Compilation error", isCorrect: true },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The call is ambiguous because both methods could match after type conversion.",
            difficulty: 'Hard',
            category: 'Method Overloading',
            hasCode: true
          },
          {
            id: 76,
            question: "What's the output?\n```java\nclass Test {\n    void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    void method(String x) {\n        System.out.println(\"String\");\n    }\n    public static void main(String[] args) {\n        new Test().method(null);\n    }\n}\n```",
            options: [
                { text: "String", isCorrect: true },
                { text: "Object", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `String` method is chosen because it is more specific than `Object` when dealing with `null`.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 77,
            question: "What's the output?\n```java\nclass Test {\n    void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10);\n    }\n}\n```",
            options: [
                { text: "Integer", isCorrect: true },
                { text: "Number", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `Integer` method is chosen because the argument `10` matches `Integer` more specifically than `Number`.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 78,
            question: "What's the output?\n```java\nclass Test {\n    static void method(float x) {\n        System.out.println(\"float\");\n    }\n    static void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        method(10.5);\n    }\n}\n```",
            options: [
                { text: "float", isCorrect: false },
                { text: "double", isCorrect: true },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `double` method is chosen because the literal `10.5` is treated as a `double` by default.",
            difficulty: 'Easy',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 79,
            question: "What's the output?\n```java\nclass Test {\n    void method(int x, float y) {\n        System.out.println(\"int, float\");\n    }\n    void method(float x, int y) {\n        System.out.println(\"float, int\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10, 20);\n    }\n}\n```",
            options: [
                { text: "int, float", isCorrect: false },
                { text: "float, int", isCorrect: false },
                { text: "Compilation error", isCorrect: true },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The call is ambiguous because both methods could match after type conversion.",
            difficulty: 'Hard',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 80,
            question: "What's the output?\n```java\nclass Test {\n    static void method(long x) {\n        System.out.println(\"long\");\n    }\n    static void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
            options: [
                { text: "long", isCorrect: true },
                { text: "double", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `long` method is chosen because `10` (an `int`) can be widened to `long` directly.",
            difficulty: 'Easy',
            category: 'Type Conversion',
            hasCode: true
        },
        {
            id: 81,
            question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(long x) {\n        System.out.println(\"long\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10L);\n    }\n}\n```",
            options: [
                { text: "int", isCorrect: false },
                { text: "long", isCorrect: true },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `long` method is chosen because `10L` is explicitly a `long`.",
            difficulty: 'Easy',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 82,
            question: "What's the output?\n```java\nclass Test {\n    void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    public static void main(String[] args) {\n        new Test().method((Integer) 10);\n    }\n}\n```",
            options: [
                { text: "Integer", isCorrect: true },
                { text: "int", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The explicit cast to `Integer` ensures the `Integer` method is called.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 83,
            question: "What's the output?\n```java\nclass Test {\n    void method(float x) {\n        System.out.println(\"float\");\n    }\n    void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10.5f);\n    }\n}\n```",
            options: [
                { text: "float", isCorrect: true },
                { text: "double", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `float` method is chosen because `10.5f` is explicitly a `float`.",
            difficulty: 'Easy',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 84,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    static void method(long x) {\n        System.out.println(\"long\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
            options: [
                { text: "int", isCorrect: true },
                { text: "long", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `int` method is chosen because the argument matches exactly.",
            difficulty: 'Easy',
            category: 'Type Conversion',
            hasCode: true
        },
        {
            id: 85,
            question: "What's the output?\n```java\nclass Test {\n    void method(short x) {\n        System.out.println(\"short\");\n    }\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    public static void main(String[] args) {\n        new Test().method((short) 10);\n    }\n}\n```",
            options: [
                { text: "short", isCorrect: true },
                { text: "int", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The explicit cast to `short` ensures the `short` method is chosen.",
            difficulty: 'Easy',
            category: 'Type Conversion',
            hasCode: true
        },
        {
            id: 86,
            question: "What's the output?\n```java\nclass Test {\n    static void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    static void method(Double x) {\n        System.out.println(\"Double\");\n    }\n    public static void main(String[] args) {\n        method(10.5);\n    }\n}\n```",
            options: [
                { text: "Number", isCorrect: false },
                { text: "Double", isCorrect: true },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `Double` method is chosen because `10.5` is a `double`, which is more specific than `Number`.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 87,
            question: "What's the output?\n```java\nclass Test {\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    static void method(String x) {\n        System.out.println(\"String\");\n    }\n    public static void main(String[] args) {\n        method((Object) \"Hello\");\n    }\n}\n```",
            options: [
                { text: "Object", isCorrect: true },
                { text: "String", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The explicit cast to `Object` ensures the `Object` method is called.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 88,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x, int y) {\n        System.out.println(\"Two ints\");\n    }\n    static void method(int... x) {\n        System.out.println(\"Varargs\");\n    }\n    public static void main(String[] args) {\n        method(10, 20);\n    }\n}\n```",
            options: [
                { text: "Two ints", isCorrect: true },
                { text: "Varargs", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The method with two arguments is chosen over the varargs method because it is an exact match.",
            difficulty: 'Easy',
            category: 'Varargs',
            hasCode: true
        },
        {
            id: 89,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    static void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
            options: [
                { text: "int", isCorrect: true },
                { text: "double", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `int` method is chosen because the argument matches exactly.",
            difficulty: 'Easy',
            category: 'Type Conversion',
            hasCode: true
        },
        {
            id: 90,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int... x) {\n        System.out.println(\"Varargs\");\n    }\n    public static void main(String[] args) {\n        method();\n    }\n}\n```",
            options: [
                { text: "Varargs", isCorrect: true },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false },
                { text: "Nothing", isCorrect: false }
            ],
            explanation: "The varargs method is invoked even with no arguments. The array `x` has a length of 0 in this case.",
            difficulty: 'Easy',
            category: 'Varargs',
            hasCode: true
        },
        {
            id: 91,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    static void method(Integer x) {\n        System.out.println(\"Integer\");\n    }\n    public static void main(String[] args) {\n        method((int) 10);\n    }\n}\n```",
            options: [
                { text: "int", isCorrect: true },
                { text: "Integer", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `int` method is chosen because the explicit cast ensures the primitive type `int` is used.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 92,
            question: "What's the output?\n```java\nclass Test {\n    static void method(Object x) {\n        System.out.println(\"Object\");\n    }\n    static void method(StringBuilder x) {\n        System.out.println(\"StringBuilder\");\n    }\n    public static void main(String[] args) {\n        method((Object) new StringBuilder(\"Hello\"));\n    }\n}\n```",
            options: [
                { text: "Object", isCorrect: true },
                { text: "StringBuilder", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The explicit cast to `Object` ensures the `Object` method is called.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 93,
            question: "What's the output?\n```java\nclass Test {\n    static void method(float x) {\n        System.out.println(\"float\");\n    }\n    static void method(double x) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        method(10.0);\n    }\n}\n```",
            options: [
                { text: "float", isCorrect: false },
                { text: "double", isCorrect: true },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `double` method is chosen because the literal `10.0` is treated as a `double` by default.",
            difficulty: 'Medium',
            category: 'Type Conversion',
            hasCode: true
        },
        {
            id: 94,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int... x) {\n        System.out.println(x.length);\n    }\n    public static void main(String[] args) {\n        method(10, 20, 30);\n    }\n}\n```",
            options: [
                { text: "3", isCorrect: true },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false },
                { text: "0", isCorrect: false }
            ],
            explanation: "The varargs method is invoked with three arguments, so the array `x` has a length of 3.",
            difficulty: 'Easy',
            category: 'Varargs',
            hasCode: true
        },
        {
            id: 95,
            question: "What's the output?\n```java\nclass Test {\n    static void method(long x) {\n        System.out.println(\"long\");\n    }\n    static void method(float x) {\n        System.out.println(\"float\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
            options: [
                { text: "long", isCorrect: true },
                { text: "float", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `long` method is chosen because `10` (an `int`) can be widened to `long` directly.",
            difficulty: 'Medium',
            category: 'Type Conversion',
            hasCode: true
        },
        {
            id: 96,
            question: "What's the output?\n```java\nclass Test {\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    void method(long x) {\n        System.out.println(\"long\");\n    }\n    public static void main(String[] args) {\n        new Test().method(10L);\n    }\n}\n```",
            options: [
                { text: "int", isCorrect: false },
                { text: "long", isCorrect: true },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `long` method is chosen because `10L` is explicitly a `long`.",
            difficulty: 'Easy',
            category: 'Method Overloading',
            hasCode: true
        },
        {
            id: 97,
            question: "What's the output?\n```java\nclass Test {\n    void method(short x) {\n        System.out.println(\"short\");\n    }\n    void method(int x) {\n        System.out.println(\"int\");\n    }\n    public static void main(String[] args) {\n        new Test().method((short) 10);\n    }\n}\n```",
            options: [
                { text: "short", isCorrect: true },
                { text: "int", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The explicit cast to `short` ensures the `short` method is chosen.",
            difficulty: 'Easy',
            category: 'Type Conversion',
            hasCode: true
        },
        {
            id: 98,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x) {\n        System.out.println(\"int\");\n    }\n    static void method(long x) {\n        System.out.println(\"long\");\n    }\n    public static void main(String[] args) {\n        method(10);\n    }\n}\n```",
            options: [
                { text: "int", isCorrect: true },
                { text: "long", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `int` method is chosen because the argument matches exactly.",
            difficulty: 'Easy',
            category: 'Type Conversion',
            hasCode: true
        },
        {
            id: 99,
            question: "What's the output?\n```java\nclass Test {\n    static void method(int x, int y) {\n        System.out.println(\"Two ints\");\n    }\n    static void method(int... x) {\n        System.out.println(\"Varargs\");\n    }\n    public static void main(String[] args) {\n        method(10, 20);\n    }\n}\n```",
            options: [
                { text: "Two ints", isCorrect: true },
                { text: "Varargs", isCorrect: false },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The method with two arguments is chosen over the varargs method because it is an exact match.",
            difficulty: 'Easy',
            category: 'Varargs',
            hasCode: true
        },
        {
            id: 100,
            question: "What's the output?\n```java\nclass Test {\n    static void method(Number x) {\n        System.out.println(\"Number\");\n    }\n    static void method(Double x) {\n        System.out.println(\"Double\");\n    }\n    public static void main(String[] args) {\n        method(10.5);\n    }\n}\n```",
            options: [
                { text: "Number", isCorrect: false },
                { text: "Double", isCorrect: true },
                { text: "Compilation error", isCorrect: false },
                { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `Double` method is chosen because `10.5` is a `double`, which is more specific than `Number`.",
            difficulty: 'Medium',
            category: 'Method Overloading',
            hasCode: true
        }
        
    ];
    shuffleOptions(methodMCQs);