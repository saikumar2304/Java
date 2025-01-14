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

export const interfaceMCQs = [
  {
    id: 1,
    question: "What's wrong?\n```java\npublic interface Test {\n    private void method();\n}\n```",
    options: [
      { text: "Nothing wrong", isCorrect: false },
      { text: "Interface methods can't be private", isCorrect: true },
      { text: "Missing method body", isCorrect: false },
      { text: "Interface name invalid", isCorrect: false }
    ],
    explanation: "Interface methods are implicitly public and abstract. They cannot be private (before Java 9).",
    difficulty: 'Medium',
    category: 'Interface Basics',
    hasCode: true
  },
  {
    id: 2,
    question: "What's the output?\n```java\ninterface A {\n    default void show() {\n        System.out.println(\"A\");\n    }\n}\ninterface B {\n    default void show() {\n        System.out.println(\"B\");\n    }\n}\nclass C implements A, B {\n    public void show() {\n        A.super.show();\n        B.super.show();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().show();\n    }\n}\n```",
    options: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "A\nB", isCorrect: true },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The `show()` method in class C explicitly calls the `show()` method from both interfaces using `A.super` and `B.super`.",
    difficulty: 'Hard',
    category: 'Multiple Inheritance with Interfaces',
    hasCode: true
  },
  {
    id: 3,
    question: "What's the output?\n```java\ninterface Marker {}\nclass Test implements Marker {\n    public static void main(String[] args) {\n        Test obj = new Test();\n        System.out.println(obj instanceof Marker);\n    }\n}\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Marker interfaces have no methods. They are used to tag classes. `instanceof` works correctly for marker interfaces.",
    difficulty: 'Easy',
    category: 'Marker Interface',
    hasCode: true
  },
  {
    id: 4,
    question: "What's the output?\n```java\ninterface Functional {\n    void execute();\n}\npublic class Test {\n    public static void main(String[] args) {\n        Functional f = () -> System.out.println(\"Hello Functional Interface\");\n        f.execute();\n    }\n}\n```",
    options: [
      { text: "Hello Functional Interface", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "A functional interface has exactly one abstract method. Lambdas can be used to implement functional interfaces.",
    difficulty: 'Easy',
    category: 'Functional Interface',
    hasCode: true
  },
  {
    id: 5,
    question: "What's wrong?\n```java\npublic interface Test {\n    static void method() {\n        System.out.println(\"Static Method\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Test.method();\n    }\n}\n```",
    options: [
      { text: "Static methods can't be in interfaces", isCorrect: false },
      { text: "Nothing wrong, it works fine", isCorrect: true },
      { text: "Static method must be implemented in a class", isCorrect: false },
      { text: "Interfaces can't have method bodies", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are allowed since Java 8. They can be called directly using the interface name.",
    difficulty: 'Easy',
    category: 'Interface Static Methods',
    hasCode: true
  },
  {
    id: 6,
    question: "What's the output?\n```java\ninterface A {\n    int x = 10;\n}\nclass Test implements A {\n    public static void main(String[] args) {\n        System.out.println(x);\n    }\n}\n```",
    options: [
      { text: "10", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Variables in interfaces are `public static final` by default. They can be accessed directly in implementing classes.",
    difficulty: 'Easy',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 7,
    question: "What's the output?\n```java\ninterface A {\n    private void helper() {\n        System.out.println(\"Helper\");\n    }\n    default void call() {\n        helper();\n    }\n}\nclass Test implements A {\n    public static void main(String[] args) {\n        new Test().call();\n    }\n}\n```",
    options: [
      { text: "Helper", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Since Java 9, interfaces can have private methods to support code reuse inside default methods.",
    difficulty: 'Medium',
    category: 'Interface Private Methods',
    hasCode: true
  },
  {
    id: 8,
    question: "What's the output?\n```java\ninterface A {\n    default void show() {\n        System.out.println(\"A\");\n    }\n}\nclass B {\n    public void show() {\n        System.out.println(\"B\");\n    }\n}\nclass C extends B implements A {\n    public static void main(String[] args) {\n        new C().show();\n    }\n}\n```",
    options: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class methods take precedence over default methods from interfaces when a class inherits both.",
    difficulty: 'Medium',
    category: 'Class vs Interface',
    hasCode: true
  },
  {
    id: 9,
    question: "What's the output?\n```java\ninterface Outer {\n    interface Inner {\n        void display();\n    }\n}\nclass Test implements Outer.Inner {\n    public void display() {\n        System.out.println(\"Nested Interface\");\n    }\n    public static void main(String[] args) {\n        new Test().display();\n    }\n}\n```",
    options: [
      { text: "Nested Interface", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Nested interfaces can be implemented using their fully qualified name (`Outer.Inner`).",
    difficulty: 'Hard',
    category: 'Nested Interfaces',
    hasCode: true
  },
  {
    id: 10,
    question: "What's the output?\n```java\nimport java.util.*;\nclass Person {\n    String name;\n    Person(String name) {\n        this.name = name;\n    }\n    public String toString() {\n        return name;\n    }\n}\nclass Test {\n    public static void main(String[] args) {\n        List<Person> list = Arrays.asList(new Person(\"Alice\"), new Person(\"Bob\"));\n        list.sort((p1, p2) -> p1.name.compareTo(p2.name));\n        System.out.println(list);\n    }\n}\n```",
    options: [
      { text: "[Alice, Bob]", isCorrect: true },
      { text: "[Bob, Alice]", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Comparator is a functional interface used to define custom sorting logic.",
    difficulty: 'Hard',
    category: 'Comparator Interface',
    hasCode: true
  },
  {
    id: 11,
    question: "What's the output?\n```java\ninterface A {\n    static void method() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {\n}\npublic class Test {\n    public static void main(String[] args) {\n        B.method();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: false },
      { text: "Compilation error", isCorrect: true },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are not inherited. They must be accessed using the interface name directly.",
    difficulty: 'Hard',
    category: 'Interface Static Methods',
    hasCode: true
  },
  {
    id: 12,
    question: "What's the output?\n```java\ninterface A {\n    default void show() {\n        System.out.println(\"A\");\n    }\n}\ninterface B {\n    default void show() {\n        System.out.println(\"B\");\n    }\n}\nclass C implements A, B {\n    public void show() {\n        System.out.println(\"C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.show();\n    }\n}\n```",
    options: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "When there is a conflict in default methods, the implementing class must override the method to resolve it.",
    difficulty: 'Medium',
    category: 'Default Method Conflict',
    hasCode: true
  },
  {
    id: 13,
    question: "What's the output?\n```java\ninterface A {\n    int VALUE = 10;\n}\nclass Test implements A {\n    public static void main(String[] args) {\n        System.out.println(A.VALUE);\n        System.out.println(VALUE);\n    }\n}\n```",
    options: [
      { text: "10\n10", isCorrect: true },
      { text: "10\nCompilation error", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Variables in interfaces are `public static final` by default. They can be accessed via the interface name or directly in implementing classes.",
    difficulty: 'Easy',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 14,
    question: "What's the output?\n```java\ninterface A {\n    private static void helper() {\n        System.out.println(\"Helper\");\n    }\n    static void show() {\n        helper();\n        System.out.println(\"Show\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.show();\n    }\n}\n```",
    options: [
      { text: "Helper\nShow", isCorrect: true },
      { text: "Show", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods can call private static methods inside interfaces. This is valid since Java 9.",
    difficulty: 'Medium',
    category: 'Static and Private Methods',
    hasCode: true
  },
  {
    id: 15,
    question: "What's the output?\n```java\ninterface A {\n    void show();\n}\ninterface B extends A {\n}\nclass C implements B {\n    public void show() {\n        System.out.println(\"C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        B obj = new C();\n        obj.show();\n    }\n}\n```",
    options: [
      { text: "C", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Interface B inherits abstract methods from A. Implementing B implicitly implements A's methods.",
    difficulty: 'Easy',
    category: 'Interface Inheritance',
    hasCode: true
  },
  {
    id: 16,
    question: "What's the output?\n```java\ninterface A {\n    default void show() {\n        System.out.println(\"A\");\n    }\n}\nclass Test {\n    public static void main(String[] args) {\n        new A() {}.show();\n    }\n}\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "An anonymous class can implement an interface and use its default methods directly.",
    difficulty: 'Medium',
    category: 'Anonymous Classes',
    hasCode: true
  },
  {
    id: 17,
    question: "What's the output?\n```java\ninterface A {\n    static void show() {\n        System.out.println(\"Static A\");\n    }\n}\ninterface B {\n    static void show() {\n        System.out.println(\"Static B\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.show();\n        B.show();\n    }\n}\n```",
    options: [
      { text: "Static A\nStatic B", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are accessed using their respective interface names.",
    difficulty: 'Easy',
    category: 'Interface Static Methods',
    hasCode: true
  },
  {
    id: 18,
    question: "What's the output?\n```java\ninterface A {\n    int x = 10;\n}\ninterface B {\n    int x = 20;\n}\nclass Test implements A, B {\n    public static void main(String[] args) {\n        System.out.println(A.x + B.x);\n    }\n}\n```",
    options: [
      { text: "30", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "20", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "When interfaces have variables with the same name, they must be accessed with the interface name to avoid ambiguity.",
    difficulty: 'Medium',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 19,
    question: "What's the output?\n```java\ninterface A {\n    default void display() {\n        System.out.println(\"A\");\n    }\n}\nclass B implements A {\n    public void display() {\n        System.out.println(\"B\");\n        A.super.display();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new B().display();\n    }\n}\n```",
    options: [
      { text: "B\nA", isCorrect: true },
      { text: "A\nB", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class B overrides the `display` method and explicitly calls the default method of interface A using `A.super.display()`.",
    difficulty: 'Medium',
    category: 'Default Method Override',
    hasCode: true
  },
  {
    id: 20,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\nabstract class B implements A {\n    void anotherMethod() {\n        System.out.println(\"B's method\");\n    }\n}\nclass C extends B {\n    public void method() {\n        System.out.println(\"C's method\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        B obj = new C();\n        obj.method();\n        obj.anotherMethod();\n    }\n}\n```",
    options: [
      { text: "C's method\nB's method", isCorrect: true },
      { text: "B's method\nC's method", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Abstract class B partially implements interface A, and class C provides the complete implementation. Both methods can be called through the object of C.",
    difficulty: 'Hard',
    category: 'Abstract Class and Interface',
    hasCode: true
  },
  {
    id: 21,
    question: "What's the output?\n```java\ninterface A {\n    void show();\n}\ninterface B extends A {\n    default void show() {\n        System.out.println(\"B\");\n    }\n}\nclass C implements B {\n    public static void main(String[] args) {\n        new C().show();\n    }\n}\n```",
    options: [
      { text: "B", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Interface B provides a default implementation of `show()`. Class C inherits this default implementation and uses it.",
    difficulty: 'Medium',
    category: 'Interface Inheritance with Default Methods',
    hasCode: true
  },
  {
    id: 22,
    question: "What's the output?\n```java\ninterface A {\n    void display();\n    static void show() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {\n    public void display() {\n        System.out.println(\"Display in B\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.show();\n        new B().display();\n    }\n}\n```",
    options: [
      { text: "Static in A\nDisplay in B", isCorrect: true },
      { text: "Display in B\nStatic in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces can be called directly using the interface name. Instance methods require an object of the implementing class.",
    difficulty: 'Easy',
    category: 'Static Methods in Interfaces',
    hasCode: true
  },
  {
    id: 23,
    question: "What's the output?\n```java\ninterface A {\n    static int calculate(int x) {\n        return x * x;\n    }\n}\nclass Test {\n    public static void main(String[] args) {\n        int result = A.calculate(5);\n        System.out.println(result);\n    }\n}\n```",
    options: [
      { text: "25", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Static methods in interfaces can have logic and return values. They are called using the interface name.",
    difficulty: 'Easy',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 24,
    question: "What's the output?\n```java\ninterface A {\n    default void print() {\n        System.out.println(\"A\");\n    }\n}\ninterface B {\n    default void print() {\n        System.out.println(\"B\");\n    }\n}\nclass C implements A, B {\n    public void print() {\n        System.out.println(\"C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.print();\n    }\n}\n```",
    options: [
      { text: "C", isCorrect: true },
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Class C resolves the conflict between default methods in interfaces A and B by overriding the `print()` method.",
    difficulty: 'Medium',
    category: 'Default Method Conflict',
    hasCode: true
  },
  {
    id: 25,
    question: "What's the output?\n```java\ninterface A {\n    void methodA();\n}\ninterface B extends A {\n    void methodB();\n}\nclass Test implements B {\n    public void methodA() {\n        System.out.println(\"Method A\");\n    }\n    public void methodB() {\n        System.out.println(\"Method B\");\n    }\n    public static void main(String[] args) {\n        Test obj = new Test();\n        obj.methodA();\n        obj.methodB();\n    }\n}\n```",
    options: [
      { text: "Method A\nMethod B", isCorrect: true },
      { text: "Method B\nMethod A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Interface B inherits methodA from A and defines methodB. Class Test implements both methods.",
    difficulty: 'Easy',
    category: 'Interface Inheritance',
    hasCode: true
  },
  {
    id: 26,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\nabstract class B implements A {\n    abstract void display();\n}\nclass C extends B {\n    public void method() {\n        System.out.println(\"Method in C\");\n    }\n    public void display() {\n        System.out.println(\"Display in C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.method();\n        obj.display();\n    }\n}\n```",
    options: [
      { text: "Method in C\nDisplay in C", isCorrect: true },
      { text: "Display in C\nMethod in C", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Abstract class B partially implements interface A. Class C provides the complete implementation of both abstract methods.",
    difficulty: 'Medium',
    category: 'Abstract Class with Interface',
    hasCode: true
  },
  {
    id: 27,
    question: "What's the output?\n```java\ninterface A {\n    default void display() {\n        System.out.println(\"A\");\n    }\n}\nclass B implements A {\n    void display() {\n        System.out.println(\"B\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new B().display();\n    }\n}\n```",
    options: [
      { text: "B", isCorrect: true },
      { text: "A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class B does not properly override the default method from interface A because it is missing the @Override annotation. However, it still works as intended.",
    difficulty: 'Medium',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 28,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default Method in A\");\n    }\n}\ninterface B extends A {\n    default void method() {\n        System.out.println(\"Default Method in B\");\n    }\n}\nclass C implements B {\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default Method in B", isCorrect: true },
      { text: "Default Method in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C inherits the default method from the most specific interface (B) that provides the method.",
    difficulty: 'Medium',
    category: 'Default Method Inheritance',
    hasCode: true
  },
  {
    id: 29,
    question: "What's the output?\n```java\ninterface A {\n    int VALUE = 100;\n}\nclass Test {\n    public static void main(String[] args) {\n        System.out.println(A.VALUE + 50);\n    }\n}\n```",
    options: [
      { text: "150", isCorrect: true },
      { text: "100", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Interface variables are implicitly public, static, and final. They can be accessed using the interface name directly.",
    difficulty: 'Easy',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 30,
    question: "What's the output?\n```java\ninterface A {\n    static void display() {\n        System.out.println(\"Static A\");\n    }\n}\nclass B implements A {\n    static void display() {\n        System.out.println(\"Static B\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        B.display();\n    }\n}\n```",
    options: [
      { text: "Static B", isCorrect: true },
      { text: "Static A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are not inherited. Class B defines its own static method, which is independent of the interface's method.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 31,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B {\n    default void method() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements A, B {\n    public void method() {\n        A.super.method();\n        B.super.method();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in A\nDefault in B", isCorrect: true },
      { text: "Default in B\nDefault in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Class C resolves the conflict between default methods by explicitly invoking each interface's default method using `super`.",
    difficulty: 'Hard',
    category: 'Default Method Conflict',
    hasCode: true
  },
  {
    id: 32,
    question: "What's the output?\n```java\ninterface A {\n    static void display() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass Test {\n    public static void main(String[] args) {\n        A.display();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are accessed directly through the interface name. This is valid and prints the message.",
    difficulty: 'Easy',
    category: 'Static Methods in Interface',
    hasCode: true
  },
  {
    id: 33,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n    static void method2() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {\n    public void method() {\n        System.out.println(\"Implemented in B\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.method2();\n        new B().method();\n    }\n}\n```",
    options: [
      { text: "Static in A\nImplemented in B", isCorrect: true },
      { text: "Implemented in B\nStatic in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces must be called using the interface name. Instance methods require an object of the implementing class.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 34,
    question: "What's the output?\n```java\ninterface Marker {\n}\nclass A implements Marker {\n    void display() {\n        System.out.println(\"Marker Interface Example\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new A();\n        if (obj instanceof Marker) {\n            obj.display();\n        }\n    }\n}\n```",
    options: [
      { text: "Marker Interface Example", isCorrect: true },
      { text: "Nothing prints", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Marker interfaces (like `Marker`) do not have methods but can be used for tagging. The `instanceof` check succeeds.",
    difficulty: 'Easy',
    category: 'Marker Interface',
    hasCode: true
  },
  {
    id: 35,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\nclass B {\n    void method() {\n        System.out.println(\"Method in B\");\n    }\n}\nclass C extends B implements A {\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "Method in B", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Class C does not provide an implementation for the `method` in interface A, so it cannot compile.",
    difficulty: 'Hard',
    category: 'Interface Implementation',
    hasCode: true
  },
  {
    id: 36,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B {\n    default void method() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements A, B {\n    public void method() {\n        A.super.method();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in A", isCorrect: true },
      { text: "Default in B", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Class C resolves the conflict between default methods in A and B by explicitly calling `A.super.method()`.",
    difficulty: 'Medium',
    category: 'Default Method Conflict',
    hasCode: true
  },
  {
    id: 37,
    question: "What's the output?\n```java\ninterface A {\n    private static void method() {\n        System.out.println(\"Private Static in A\");\n    }\n    static void show() {\n        method();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.show();\n    }\n}\n```",
    options: [
      { text: "Private Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Private static methods in interfaces can only be called within the interface itself. The `show()` method calls the private static method successfully.",
    difficulty: 'Medium',
    category: 'Private Static Methods',
    hasCode: true
  },
  {
    id: 38,
    question: "What's the output?\n```java\ninterface A {\n    int x = 5;\n}\nclass B implements A {\n    int x = 10;\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        System.out.println(obj.x);\n    }\n}\n```",
    options: [
      { text: "5", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Interface variables are implicitly static and final. The `x` variable in class B is shadowed but not overridden.",
    difficulty: 'Medium',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 39,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B extends A {\n    default void method() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements B {\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in B", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "The `method` in interface B overrides the default method in interface A. Class C inherits the method from B.",
    difficulty: 'Medium',
    category: 'Default Method Override',
    hasCode: true
  },
  {
    id: 40,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\nclass B {\n    void method() {\n        System.out.println(\"B's method\");\n    }\n}\nclass C extends B implements A {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "B's method", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Class C does not explicitly implement the `method` from interface A, leading to a compilation error.",
    difficulty: 'Hard',
    category: 'Interface Implementation',
    hasCode: true
  },
  {
    id: 41,
    question: "What's the output?\n```java\ninterface A {\n    static void method() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {\n}\npublic class Test {\n    public static void main(String[] args) {\n        B.method();\n    }\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "Static in A", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are not inherited by implementing classes. They must be called using the interface name.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 42,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B extends A {\n}\nclass C implements B {\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C inherits the default method from interface A through interface B.",
    difficulty: 'Easy',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 43,
    question: "What's the output?\n```java\ninterface A {\n    static void show() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass Test {\n    public static void main(String[] args) {\n        A.show();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are valid and can be accessed using the interface name.",
    difficulty: 'Easy',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 44,
    question: "What's the output?\n```java\ninterface Marker {\n}\nclass A implements Marker {\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new A();\n        if (obj instanceof Marker) {\n            System.out.println(\"Marker Interface Example\");\n        }\n    }\n}\n```",
    options: [
      { text: "Marker Interface Example", isCorrect: true },
      { text: "Nothing prints", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Marker interfaces can be used for tagging purposes. The `instanceof` check succeeds.",
    difficulty: 'Easy',
    category: 'Marker Interface',
    hasCode: true
  },
  {
    id: 45,
    question: "What's the output?\n```java\ninterface A {\n    default void display() {\n        System.out.println(\"Display in A\");\n    }\n}\ninterface B {\n    default void display() {\n        System.out.println(\"Display in B\");\n    }\n}\nclass C implements A, B {\n    public void display() {\n        A.super.display();\n        B.super.display();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().display();\n    }\n}\n```",
    options: [
      { text: "Display in A\nDisplay in B", isCorrect: true },
      { text: "Display in A", isCorrect: false },
      { text: "Display in B", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Class C resolves the conflict by explicitly calling both `A.super.display()` and `B.super.display()`.",
    difficulty: 'Hard',
    category: 'Default Method Conflict',
    hasCode: true
  },
  {
    id: 46,
    question: "What's the output?\n```java\ninterface A {\n    static void display() {\n        System.out.println(\"Static in A\");\n    }\n}\ninterface B {\n    static void display() {\n        System.out.println(\"Static in B\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.display();\n        B.display();\n    }\n}\n```",
    options: [
      { text: "Static in A\nStatic in B", isCorrect: true },
      { text: "Static in A", isCorrect: false },
      { text: "Static in B", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are independent and accessed using the interface name.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 47,
    question: "What's the output?\n```java\ninterface A {\n    private static void helper() {\n        System.out.println(\"Helper method in A\");\n    }\n    static void call() {\n        helper();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.call();\n    }\n}\n```",
    options: [
      { text: "Helper method in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Private static methods in interfaces can be invoked within the interface itself using another static method.",
    difficulty: 'Medium',
    category: 'Private Static Methods',
    hasCode: true
  },
  {
    id: 48,
    question: "What's the output?\n```java\ninterface A {\n    int VALUE = 5;\n}\nclass B implements A {\n    int VALUE = 10;\n    void show() {\n        System.out.println(VALUE);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new B().show();\n    }\n}\n```",
    options: [
      { text: "10", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `VALUE` field in the class shadows the one in the interface. The class's field is accessed in the method.",
    difficulty: 'Medium',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 49,
    question: "What's the output?\n```java\ninterface A {\n    static void show() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {\n}\npublic class Test {\n    public static void main(String[] args) {\n        B.show();\n    }\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "Static in A", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are not inherited. They must be accessed using the interface name, not the implementing class.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 50,
    question: "What's the output?\n```java\ninterface Marker {\n}\nclass A implements Marker {\n}\npublic class Test {\n    public static void main(String[] args) {\n        Marker obj = new A();\n        System.out.println(obj instanceof A);\n    }\n}\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `instanceof` operator verifies that the object is an instance of class A. This is true in this case.",
    difficulty: 'Easy',
    category: 'Marker Interface',
    hasCode: true
  },
  {
    id: 51,
    question: "What's the output?\n```java\ninterface A {\n    default void show() {\n        System.out.println(\"Default in A\");\n    }\n}\nclass B implements A {\n}\npublic class Test {\n    public static void main(String[] args) {\n        new B().show();\n    }\n}\n```",
    options: [
      { text: "Default in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class B inherits the default method `show` from interface A.",
    difficulty: 'Easy',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 52,
    question: "What's the output?\n```java\ninterface A {\n    default void show() {\n        System.out.println(\"A\");\n    }\n}\ninterface B extends A {\n    default void show() {\n        System.out.println(\"B\");\n    }\n}\nclass C implements B {\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().show();\n    }\n}\n```",
    options: [
      { text: "B", isCorrect: true },
      { text: "A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Interface B overrides the default method from A. Class C inherits the method from B.",
    difficulty: 'Medium',
    category: 'Default Method Override',
    hasCode: true
  },
  {
    id: 53,
    question: "What's the output?\n```java\ninterface A {\n    static void method() {\n        System.out.println(\"Static in A\");\n    }\n}\ninterface B extends A {\n}\npublic class Test {\n    public static void main(String[] args) {\n        B.method();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are inherited by subinterfaces and can be accessed using the subinterface name.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 54,
    question: "What's the output?\n```java\ninterface A {\n    default void show() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B {\n    default void show() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements A, B {\n    @Override\n    public void show() {\n        A.super.show();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().show();\n    }\n}\n```",
    options: [
      { text: "Default in A", isCorrect: true },
      { text: "Default in B", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C resolves the conflict between A and B's default methods by explicitly calling `A.super.show()`.",
    difficulty: 'Hard',
    category: 'Default Method Conflict',
    hasCode: true
  },
  {
    id: 55,
    question: "What's the output?\n```java\ninterface A {\n    int VALUE = 5;\n}\ninterface B {\n    int VALUE = 10;\n}\nclass C implements A, B {\n    void printValue() {\n        System.out.println(A.VALUE + B.VALUE);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().printValue();\n    }\n}\n```",
    options: [
      { text: "15", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Interface variables are static and final. Explicit qualification is required to resolve ambiguity.",
    difficulty: 'Medium',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 56,
    question: "What's the output?\n```java\ninterface Marker {\n}\nclass A {\n}\nclass B extends A implements Marker {\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        System.out.println(obj instanceof Marker);\n    }\n}\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "`obj` is an instance of class B, which implements the Marker interface. Therefore, the `instanceof` check returns true.",
    difficulty: 'Easy',
    category: 'Marker Interface',
    hasCode: true
  },
  {
    id: 57,
    question: "What's the output?\n```java\ninterface Functional {\n    void execute();\n}\npublic class Test {\n    public static void main(String[] args) {\n        Functional f = () -> System.out.println(\"Lambda execution\");\n        f.execute();\n    }\n}\n```",
    options: [
      { text: "Lambda execution", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Interfaces with a single abstract method are functional interfaces, allowing lambda expressions.",
    difficulty: 'Medium',
    category: 'Functional Interface',
    hasCode: true
  },
  {
    id: 58,
    question: "What's the output?\n```java\ninterface A {\n    static void show() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass Test {\n    public static void main(String[] args) {\n        A.show();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are valid and accessible through the interface name.",
    difficulty: 'Easy',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 59,
    question: "What's the output?\n```java\ninterface A {\n    private void helper() {\n        System.out.println(\"Helper in A\");\n    }\n    default void show() {\n        helper();\n        System.out.println(\"Show in A\");\n    }\n}\nclass Test implements A {\n}\npublic class TestApp {\n    public static void main(String[] args) {\n        new Test().show();\n    }\n}\n```",
    options: [
      { text: "Helper in A\nShow in A", isCorrect: true },
      { text: "Show in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Private methods in interfaces can be called within default methods but not accessed externally.",
    difficulty: 'Medium',
    category: 'Private Methods',
    hasCode: true
  },
  {
    id: 60,
    question: "What's the output?\n```java\ninterface A {\n    void execute();\n}\ninterface B {\n    void execute();\n}\nclass Test implements A, B {\n    @Override\n    public void execute() {\n        System.out.println(\"Implemented\");\n    }\n}\npublic class TestApp {\n    public static void main(String[] args) {\n        new Test().execute();\n    }\n}\n```",
    options: [
      { text: "Implemented", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class Test implements both interfaces with identical methods. A single implementation suffices.",
    difficulty: 'Medium',
    category: 'Interface Implementation',
    hasCode: true
  },
  {
    id: 61,
    question: "What happens if you run this code?\n```java\ninterface A {\n    static void display() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {\n}\npublic class Test {\n    public static void main(String[] args) {\n        B.display();\n    }\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "Static in A", isCorrect: false },
      { text: "Runtime error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are not inherited by implementing classes and must be accessed using the interface name.",
    difficulty: 'Hard',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 62,
    question: "What's the output?\n```java\ninterface A {\n    default void print() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B {\n    default void print() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements A, B {\n    @Override\n    public void print() {\n        B.super.print();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().print();\n    }\n}\n```",
    options: [
      { text: "Default in B", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C resolves the conflict between A and B's default methods by explicitly calling `B.super.print()`.",
    difficulty: 'Hard',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 63,
    question: "What's the output?\n```java\ninterface A {\n    int x = 10;\n}\nclass B {\n    int x = 20;\n}\nclass C extends B implements A {\n    void show() {\n        System.out.println(x);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().show();\n    }\n}\n```",
    options: [
      { text: "20", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The field `x` in class B hides the field `x` in interface A. The class's field is accessed by default.",
    difficulty: 'Medium',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 64,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n    static void display() {\n        System.out.println(\"Static in A\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.display();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces can be accessed using the interface name, not through an instance.",
    difficulty: 'Easy',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 65,
    question: "What's the output?\n```java\ninterface A {\n    private void helper() {\n        System.out.println(\"Private helper in A\");\n    }\n    default void show() {\n        helper();\n        System.out.println(\"Show in A\");\n    }\n}\nclass B implements A {}\npublic class Test {\n    public static void main(String[] args) {\n        new B().show();\n    }\n}\n```",
    options: [
      { text: "Private helper in A\nShow in A", isCorrect: true },
      { text: "Show in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Private methods in interfaces can be called within default methods but not directly accessed from outside.",
    difficulty: 'Medium',
    category: 'Private Methods',
    hasCode: true
  },
  {
    id: 66,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\ninterface B {\n    void method();\n}\nclass C implements A, B {\n    @Override\n    public void method() {\n        System.out.println(\"Method from C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Method from C", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `method` from both interfaces is implemented in class C. No conflict arises because the method signatures are identical.",
    difficulty: 'Medium',
    category: 'Interface Implementation',
    hasCode: true
  },
  {
    id: 67,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B extends A {\n    default void method() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements B {}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in B", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Interface B overrides the default method from interface A. Class C inherits the implementation from B.",
    difficulty: 'Medium',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 68,
    question: "What's the output?\n```java\ninterface Marker {}\nclass A {}\nclass B extends A implements Marker {}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        System.out.println(obj instanceof Marker);\n    }\n}\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `instanceof` operator checks if the object is an instance of a class or implements an interface.",
    difficulty: 'Easy',
    category: 'Marker Interface',
    hasCode: true
  },
  {
    id: 69,
    question: "What's the output?\n```java\ninterface Functional {\n    void execute();\n}\npublic class Test {\n    public static void main(String[] args) {\n        Functional f = () -> System.out.println(\"Lambda Execution\");\n        f.execute();\n    }\n}\n```",
    options: [
      { text: "Lambda Execution", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Interfaces with a single abstract method are functional interfaces, allowing lambda expressions.",
    difficulty: 'Medium',
    category: 'Functional Interface',
    hasCode: true
  },
  {
    id: 70,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\nclass B implements A {\n    @Override\n    public void method() {\n        System.out.println(\"Override in B\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new B().method();\n    }\n}\n```",
    options: [
      { text: "Override in B", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Class B overrides the default method from interface A.",
    difficulty: 'Easy',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 71,
    question: "What's the output?\n```java\ninterface A {\n    void show();\n}\ninterface B {\n    void show();\n}\nclass C implements A, B {\n    public void show() {\n        System.out.println(\"Show in C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.show();\n    }\n}\n```",
    options: [
      { text: "Show in C", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C implements `show()` from both interfaces. The reference type `A` determines which interface `obj` uses, but the method is the same.",
    difficulty: 'Medium',
    category: 'Interface Implementation',
    hasCode: true
  },
  {
    id: 72,
    question: "What's the output?\n```java\ninterface A {\n    static void display() {\n        System.out.println(\"Static in A\");\n    }\n}\ninterface B extends A {\n    static void display() {\n        System.out.println(\"Static in B\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        B.display();\n    }\n}\n```",
    options: [
      { text: "Static in B", isCorrect: true },
      { text: "Static in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are not inherited by subinterfaces. B has its own `display()` method.",
    difficulty: 'Hard',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 73,
    question: "What's the output?\n```java\ninterface Marker {}\nclass A {}\nclass B extends A {}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        System.out.println(obj instanceof Marker);\n    }\n}\n```",
    options: [
      { text: "false", isCorrect: true },
      { text: "true", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class B does not implement the Marker interface, so `instanceof` returns false.",
    difficulty: 'Medium',
    category: 'Marker Interface',
    hasCode: true
  },
  {
    id: 74,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\nclass B implements A {\n}\nclass C extends B {\n    @Override\n    public void method() {\n        System.out.println(\"Override in C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Override in C", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Class C overrides the default method from A through inheritance from B.",
    difficulty: 'Medium',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 75,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\nclass B implements A {\n    public void method() {\n        System.out.println(\"Method in B\");\n    }\n}\nclass C extends B {\n}\npublic class Test {\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Method in B", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C inherits the `method` implementation from class B.",
    difficulty: 'Easy',
    category: 'Inheritance',
    hasCode: true
  },
  {
    id: 76,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\nclass B implements A {\n    public void method() {\n        System.out.println(\"Override in B\");\n    }\n}\nclass C extends B {\n}\npublic class Test {\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Override in B", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Class C inherits the overridden method from class B, which takes precedence over A's default method.",
    difficulty: 'Medium',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 77,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\nabstract class B implements A {\n    abstract void method();\n}\npublic class Test {\n    public static void main(String[] args) {\n        B obj = new B() {\n            void method() {\n                System.out.println(\"Anonymous Implementation\");\n            }\n        };\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Anonymous Implementation", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "An anonymous inner class is used to provide an implementation for the abstract method.",
    difficulty: 'Hard',
    category: 'Anonymous Class',
    hasCode: true
  },
  {
    id: 78,
    question: "What's the output?\n```java\ninterface A {\n    static void method() {\n        System.out.println(\"Static in A\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.method();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces can be accessed using the interface name.",
    difficulty: 'Easy',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 79,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B {\n    default void method() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements A, B {\n    public void method() {\n        System.out.println(\"Override in C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Override in C", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Default in B", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Class C resolves the conflict between A and B's default methods by overriding `method()`.",
    difficulty: 'Medium',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 80,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B extends A {\n}\nclass C implements B {}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C inherits the default method from A through interface B.",
    difficulty: 'Easy',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 81,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\nclass B implements A {\n}\nclass C extends B {\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C inherits the default method from interface A via class B.",
    difficulty: 'Easy',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 82,
    question: "What's the output?\n```java\ninterface A {\n    static void method() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {}\npublic class Test {\n    public static void main(String[] args) {\n        B.method();\n    }\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "Static in A", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces are not inherited by implementing classes and must be called using the interface name.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 83,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\nclass B implements A {\n    public void method() {\n        super.method();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new B().method();\n    }\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "You cannot use `super.method()` in a class to call an interface's default method. Use `InterfaceName.super.method()` instead.",
    difficulty: 'Hard',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 84,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\ninterface B {\n    void method();\n}\nclass C implements A, B {\n    @Override\n    public void method() {\n        System.out.println(\"Method in C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Method in C", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `method` is implemented in class C, resolving the conflict between A and B.",
    difficulty: 'Medium',
    category: 'Interface Implementation',
    hasCode: true
  },
  {
    id: 85,
    question: "What's the output?\n```java\ninterface A {\n    int x = 10;\n}\nclass B {\n    int x = 20;\n}\nclass C extends B implements A {\n    void display() {\n        System.out.println(x);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().display();\n    }\n}\n```",
    options: [
      { text: "20", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The field `x` in class B hides the field `x` in interface A. The class's field is accessed.",
    difficulty: 'Medium',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 86,
    question: "What's the output?\n```java\ninterface A {\n    static void show() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B {\n    public static void show() {\n        System.out.println(\"Static in B\");\n    }\n}\nclass C extends B implements A {}\npublic class Test {\n    public static void main(String[] args) {\n        C.show();\n    }\n}\n```",
    options: [
      { text: "Static in B", isCorrect: true },
      { text: "Static in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Class C inherits the static method from B, not from interface A.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 87,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B extends A {\n    default void method() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements B {}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in B", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Interface B overrides A's default method. Class C inherits B's implementation.",
    difficulty: 'Medium',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 88,
    question: "What's the output?\n```java\ninterface A {\n    static void display() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {}\npublic class Test {\n    public static void main(String[] args) {\n        A.display();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces can only be accessed using the interface name.",
    difficulty: 'Easy',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 89,
    question: "What's the output?\n```java\ninterface Marker {}\nclass A {}\nclass B extends A implements Marker {}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        System.out.println(obj instanceof Marker);\n    }\n}\n```",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "The `instanceof` operator checks if the object implements the Marker interface.",
    difficulty: 'Medium',
    category: 'Marker Interface',
    hasCode: true
  },
  {
    id: 90,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new A() {\n            public void method() {\n                System.out.println(\"Anonymous Implementation\");\n            }\n        };\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Anonymous Implementation", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "An anonymous inner class is used to provide an implementation of the method.",
    difficulty: 'Medium',
    category: 'Anonymous Class',
    hasCode: true
  },
  {
    id: 91,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B {\n    default void method() {\n        System.out.println(\"Default in B\");\n    }\n}\nclass C implements A, B {\n    @Override\n    public void method() {\n        A.super.method();\n        B.super.method();\n        System.out.println(\"Override in C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in A\nDefault in B\nOverride in C", isCorrect: true },
      { text: "Default in A\nOverride in C", isCorrect: false },
      { text: "Default in B\nOverride in C", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Class C explicitly calls default methods from both interfaces using `InterfaceName.super.method()`.",
    difficulty: 'Hard',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 92,
    question: "What's the output?\n```java\ninterface A {\n    private static void helper() {\n        System.out.println(\"Helper in A\");\n    }\n    static void method() {\n        helper();\n        System.out.println(\"Static in A\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A.method();\n    }\n}\n```",
    options: [
      { text: "Helper in A\nStatic in A", isCorrect: true },
      { text: "Static in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Private static methods in interfaces are allowed (Java 9+). They can only be called within the interface.",
    difficulty: 'Medium',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 93,
    question: "What's the output?\n```java\ninterface A {\n    int x = 10;\n}\nclass B {\n    int x = 20;\n}\nclass C extends B implements A {\n    void display() {\n        System.out.println(A.x);\n        System.out.println(super.x);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new C().display();\n    }\n}\n```",
    options: [
      { text: "10\n20", isCorrect: true },
      { text: "20\n10", isCorrect: false },
      { text: "10\n10", isCorrect: false },
      { text: "20\n20", isCorrect: false }
    ],
    explanation: "The field `x` in interface A is accessed using `A.x`, and the field in class B is accessed using `super.x`.",
    difficulty: 'Medium',
    category: 'Interface Variables',
    hasCode: true
  },
  {
    id: 94,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B extends A {}\ninterface C extends B {\n    default void method() {\n        System.out.println(\"Default in C\");\n    }\n}\nclass D implements C {}\npublic class Test {\n    public static void main(String[] args) {\n        new D().method();\n    }\n}\n```",
    options: [
      { text: "Default in C", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Interface C overrides the default method from interface A. Class D inherits the method from C.",
    difficulty: 'Medium',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 95,
    question: "What's the output?\n```java\ninterface A {\n    void method();\n}\nclass B implements A {\n    public void method() {\n        System.out.println(\"Method in B\");\n    }\n}\nclass C extends B {\n    public void method() {\n        super.method();\n        System.out.println(\"Method in C\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.method();\n    }\n}\n```",
    options: [
      { text: "Method in B\nMethod in C", isCorrect: true },
      { text: "Method in C", isCorrect: false },
      { text: "Method in B", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Class C overrides `method` but calls the superclass's implementation using `super.method()`.",
    difficulty: 'Medium',
    category: 'Interface Implementation',
    hasCode: true
  },
  {
    id: 96,
    question: "What's the output?\n```java\ninterface A {\n    private void helper() {\n        System.out.println(\"Helper in A\");\n    }\n    default void method() {\n        helper();\n        System.out.println(\"Default in A\");\n    }\n}\nclass B implements A {}\npublic class Test {\n    public static void main(String[] args) {\n        new B().method();\n    }\n}\n```",
    options: [
      { text: "Helper in A\nDefault in A", isCorrect: true },
      { text: "Default in A", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Private methods in interfaces (Java 9+) can be used in default methods but are not accessible outside.",
    difficulty: 'Medium',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 97,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B extends A {}\nclass C implements B {}\npublic class Test {\n    public static void main(String[] args) {\n        new C().method();\n    }\n}\n```",
    options: [
      { text: "Default in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class C inherits the default method from interface A through interface B.",
    difficulty: 'Easy',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 98,
    question: "What's the output?\n```java\ninterface A {\n    default void method() {\n        System.out.println(\"Default in A\");\n    }\n}\ninterface B extends A {}\ninterface C extends B {}\nclass D implements C {}\npublic class Test {\n    public static void main(String[] args) {\n        new D().method();\n    }\n}\n```",
    options: [
      { text: "Default in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Class D inherits the default method from interface A through the hierarchy.",
    difficulty: 'Easy',
    category: 'Default Methods',
    hasCode: true
  },
  {
    id: 99,
    question: "What's the output?\n```java\ninterface A {\n    static void display() {\n        System.out.println(\"Static in A\");\n    }\n}\nclass B implements A {}\npublic class Test {\n    public static void main(String[] args) {\n        A.display();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods in interfaces must be accessed using the interface name.",
    difficulty: 'Easy',
    category: 'Static Methods',
    hasCode: true
  },
  {
    id: 100,
    question: "What's the output?\n```java\ninterface A {\n    static void display() {\n        System.out.println(\"Static in A\");\n    }\n}\ninterface B extends A {}\npublic class Test {\n    public static void main(String[] args) {\n        B.display();\n    }\n}\n```",
    options: [
      { text: "Static in A", isCorrect: false },
      { text: "Compilation error", isCorrect: true },
      { text: "Nothing prints", isCorrect: false },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Static methods are not inherited by subinterfaces, so `B.display()` causes a compilation error.",
    difficulty: 'Hard',
    category: 'Static Methods',
    hasCode: true
  }
];


shuffleOptions(interfaceMCQs);