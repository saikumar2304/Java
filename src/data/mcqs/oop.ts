export const oopMCQs = [
    {
      id: 1,
      question: `What's the output of the following code?
  \`\`\`java
  class A {
      static void method() {
          System.out.println("A");
      }
  }
  class B extends A {
      static void method() {
          System.out.println("B");
      }
  }
  public class Test {
      public static void main(String[] args) {
          A obj = new B();
          obj.method();
      }
  }
  \`\`\``,
      options: [
        { text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
      ],
      explanation: "Static methods are not overridden but hidden, so the method in A is called.",
      difficulty: 'Hard',
      category: 'Static Methods',
      hasCode: true
    },
    {
      id: 2,
      question: `What happens in the following code?
  \`\`\`java
  class Base {
      private void display() {
          System.out.println("Base");
      }
  }
  class Derived extends Base {
      public void display() {
          System.out.println("Derived");
      }
  }
  public class Test {
      public static void main(String[] args) {
          Base obj = new Derived();
          obj.display();
      }
  }
  \`\`\``,
      options: [
        { text: "Base", isCorrect: false },
        { text: "Derived", isCorrect: false },
        { text: "Compilation Error", isCorrect: true },
        { text: "Runtime Error", isCorrect: false }
      ],
      explanation: "Private methods in the base class are not visible in the derived class, so the method in Derived is unrelated and causes a compilation error.",
      difficulty: 'Hard',
      category: 'Private Methods',
      hasCode: true
    },
    {
      id: 3,
      question: `Identify the problem with the following code:
  \`\`\`java
  abstract class Animal {
      abstract void sound();
  }
  class Dog extends Animal {
      void sound() {
          System.out.println("Bark");
      }
  }
  class Test {
      public static void main(String[] args) {
          Animal a = new Animal();
      }
  }
  \`\`\``,
      options: [
        { text: "Nothing is wrong", isCorrect: false },
        { text: "Cannot instantiate abstract class", isCorrect: true },
        { text: "Missing implementation of sound()", isCorrect: false },
        { text: "Compilation Error in Dog", isCorrect: false }
      ],
      explanation: "You cannot instantiate an abstract class directly. Only subclasses can be instantiated.",
      difficulty: 'Medium',
      category: 'Abstract Classes',
      hasCode: true
    },
    {
      id: 4,
      question: `What is the result of the following code?
  \`\`\`java
  interface I {
      default void display() {
          System.out.println("Interface");
      }
  }
  class A {
      public void display() {
          System.out.println("Class A");
      }
  }
  class B extends A implements I {
      public static void main(String[] args) {
          B obj = new B();
          obj.display();
      }
  }
  \`\`\``,
      options: [
        { text: "Interface", isCorrect: false },
        { text: "Class A", isCorrect: true },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
      ],
      explanation: "Class methods take precedence over default interface methods if both are present.",
      difficulty: 'Hard',
      category: 'Default Methods',
      hasCode: true
    },
    {
      id: 5,
      question: `What does the following code output?
  \`\`\`java
  class Parent {
      void print() throws IOException {
          System.out.println("Parent");
      }
  }
  class Child extends Parent {
      void print() throws Exception {
          System.out.println("Child");
      }
  }
  public class Test {
      public static void main(String[] args) {
          Parent obj = new Child();
          obj.print();
      }
  }
  \`\`\``,
      options: [
        { text: "Parent", isCorrect: false },
        { text: "Child", isCorrect: false },
        { text: "Compilation Error", isCorrect: true },
        { text: "Runtime Error", isCorrect: false }
      ],
      explanation: "The overridden method in Child cannot throw a broader checked exception than the method in Parent.",
      difficulty: 'Very Hard',
      category: 'Exception Handling',
      hasCode: true
    },
    {
      id: 6,
      question: `What is the result of the following code?
  \`\`\`java
  class X {
      final void display() {
          System.out.println("Final Method");
      }
  }
  class Y extends X {
      void display() {
          System.out.println("Overridden Method");
      }
  }
  public class Test {
      public static void main(String[] args) {
          Y obj = new Y();
          obj.display();
      }
  }
  \`\`\``,
      options: [
        { text: "Final Method", isCorrect: false },
        { text: "Overridden Method", isCorrect: false },
        { text: "Compilation Error", isCorrect: true },
        { text: "Runtime Error", isCorrect: false }
      ],
      explanation: "A final method cannot be overridden in a subclass, causing a compilation error.",
      difficulty: 'Hard',
      category: 'Final Methods',
      hasCode: true
    },
    {
      id: 7,
      question: `What's the output of the following code?
  \`\`\`java
  class A {
      public void show() {
          System.out.println("A");
      }
  }
  class B extends A {
      public void show() {
          System.out.println("B");
      }
  }
  class C extends B {
      public void show() {
          System.out.println("C");
      }
  }
  public class Test {
      public static void main(String[] args) {
          A obj = new C();
          obj.show();
      }
  }
  \`\`\``,
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: true },
        { text: "Compilation Error", isCorrect: false }
      ],
      explanation: "Dynamic method dispatch ensures that the overridden method in the most derived class is called.",
      difficulty: 'Medium',
      category: 'Polymorphism',
      hasCode: true
    },
    {
      id: 8,
      question: `What happens in the following scenario?
  \`\`\`java
  class Test {
      public static void main(String[] args) {
          Object obj = "Hello";
          Integer num = (Integer) obj;
          System.out.println(num);
      }
  }
  \`\`\``,
      options: [
        { text: "Hello", isCorrect: false },
        { text: "null", isCorrect: false },
        { text: "Runtime Error", isCorrect: true },
        { text: "Compilation Error", isCorrect: false }
      ],
      explanation: "A ClassCastException occurs at runtime because obj is not an instance of Integer.",
      difficulty: 'Hard',
      category: 'Type Casting',
      hasCode: true
    },
    {
        id: 9,
        question: `What will the following code output?
    \`\`\`java
    interface A {
        int value = 10; // public, static, final by default
    }
    class Test implements A {
        public static void main(String[] args) {
            System.out.println(value);
            value = 20;
        }
    }
    \`\`\``,
        options: [
          { text: "10", isCorrect: false },
          { text: "Compilation Error", isCorrect: true },
          { text: "20", isCorrect: false },
          { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Interface fields are implicitly public, static, and final. Attempting to modify `value` causes a compilation error.",
        difficulty: 'Medium',
        category: 'Interfaces',
        hasCode: true
    },
    {
        id: 10,
        question: `What happens when the following code is executed?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            String str = null;
            System.out.println(str.length());
        }
    }
    \`\`\``,
        options: [
          { text: "null", isCorrect: false },
          { text: "Compilation Error", isCorrect: false },
          { text: "Runtime Error", isCorrect: true },
          { text: "0", isCorrect: false }
        ],
        explanation: "A NullPointerException occurs at runtime because `str` is null and does not reference an object.",
        difficulty: 'Easy',
        category: 'NullPointerException',
        hasCode: true
    },
    {
        id: 11,
        question: `What does the following code print?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            System.out.println(10 + 20 + "Hello" + 10 + 20);
        }
    }
    \`\`\``,
        options: [
          { text: "30Hello1020", isCorrect: true },
          { text: "1020Hello1020", isCorrect: false },
          { text: "30Hello30", isCorrect: false },
          { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "When a string is encountered during addition, concatenation occurs instead of arithmetic. Hence, `10 + 20` is evaluated first, resulting in `30Hello1020`.",
        difficulty: 'Easy',
        category: 'String Concatenation',
        hasCode: true
    },
    {
        id: 12,
        question: `What is the output of this program?
    \`\`\`java
    class Base {
        void method() {
            System.out.println("Base");
        }
    }
    class Derived extends Base {
        void method() {
            super.method();
            System.out.println("Derived");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Base obj = new Derived();
            obj.method();
        }
    }
    \`\`\``,
        options: [
          { text: "Base", isCorrect: true },
          { text: "Base\nDerived", isCorrect: false },
          { text: "Derived", isCorrect: false },
          { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "Although `Derived` overrides `method`, `Base`'s method is never called because `obj` references a `Base` type.",
        difficulty: 'Hard',
        category: 'Method Overriding',
        hasCode: true
    },
    {
        id: 13,
        question: `What does the following code print?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            int x = 0;
            int y = 10 / x;
            System.out.println(y);
        }
    }
    \`\`\``,
        options: [
          { text: "0", isCorrect: false },
          { text: "Infinity", isCorrect: false },
          { text: "Runtime Error", isCorrect: true },
          { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "Division by zero causes an ArithmeticException at runtime.",
        difficulty: 'Easy',
        category: 'ArithmeticException',
        hasCode: true
    },
    {
        id: 14,
        question: `What is the result of the following program?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            String s1 = "Hello";
            String s2 = new String("Hello");
            System.out.println(s1 == s2);
        }
    }
    \`\`\``,
        options: [
          { text: "true", isCorrect: false },
          { text: "false", isCorrect: true },
          { text: "Compilation Error", isCorrect: false },
          { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "`s1` and `s2` are not the same object in memory, so `==` returns false. Use `.equals()` to compare values.",
        difficulty: 'Medium',
        category: 'String Comparison',
        hasCode: true
    },
    {
        id: 15,
        question: `What happens in the following code?
    \`\`\`java
    class Parent {
        Parent() {
            System.out.println("Parent Constructor");
        }
    }
    class Child extends Parent {
        Child() {
            System.out.println("Child Constructor");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Child obj = new Child();
        }
    }
    \`\`\``,
        options: [
          { text: "Child Constructor", isCorrect: false },
          { text: "Parent Constructor\nChild Constructor", isCorrect: true },
          { text: "Compilation Error", isCorrect: false },
          { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The parent class constructor is always called before the child class constructor.",
        difficulty: 'Easy',
        category: 'Constructors',
        hasCode: true
    },
    {
        id: 16,
        question: `What will happen in the following code?
    \`\`\`java
    class A {
        A() {
            System.out.println("A");
        }
    }
    class B extends A {
        B() {
            super();
            System.out.println("B");
        }
    }
    class C extends B {
        C() {
            System.out.println("C");
        }
    }
    public class Test {
        public static void main(String[] args) {
            C obj = new C();
        }
    }
    \`\`\``,
        options: [
            { text: "C", isCorrect: false },
            { text: "A\nB\nC", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Constructors of superclasses are invoked in order starting from the topmost superclass.",
        difficulty: 'Medium',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 17,
        question: `What is the result of this program?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            try {
                System.out.println("A");
                int x = 1 / 0;
                System.out.println("B");
            } catch (ArithmeticException e) {
                System.out.println("C");
            } finally {
                System.out.println("D");
            }
        }
    }
    \`\`\``,
        options: [
            { text: "A\nB\nD", isCorrect: false },
            { text: "A\nC\nD", isCorrect: true },
            { text: "A\nC", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "An ArithmeticException is caught in the `catch` block, and the `finally` block always executes.",
        difficulty: 'Medium',
        category: 'Exception Handling',
        hasCode: true
    },
    {
        id: 18,
        question: `What is the output of the following code?
    \`\`\`java
    class A {
        static void print() {
            System.out.println("A");
        }
    }
    class B extends A {
        static void print() {
            System.out.println("B");
        }
    }
    public class Test {
        public static void main(String[] args) {
            A obj = new B();
            obj.print();
        }
    }
    \`\`\``,
        options: [
            { text: "A", isCorrect: true },
            { text: "B", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Static methods are not polymorphic and are called based on the reference type, not the object type.",
        difficulty: 'Hard',
        category: 'Static Methods',
        hasCode: true
    },
    {
        id: 19,
        question: `What will the following program print?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            String str1 = "Hello";
            String str2 = "Hello";
            System.out.println(str1 == str2);
        }
    }
    \`\`\``,
        options: [
            { text: "true", isCorrect: true },
            { text: "false", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "String literals are interned in Java, so `str1` and `str2` point to the same memory location.",
        difficulty: 'Easy',
        category: 'String Pool',
        hasCode: true
    },
    {
        id: 20,
        question: `What is the output of this code?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            int x = 5;
            int y = 0;
            if (y != 0 && x / y > 1) {
                System.out.println("Condition met");
            } else {
                System.out.println("Condition not met");
            }
        }
    }
    \`\`\``,
        options: [
            { text: "Condition met", isCorrect: false },
            { text: "Condition not met", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The `&&` operator short-circuits, so `x / y` is not evaluated when `y != 0` is false, avoiding a runtime exception.",
        difficulty: 'Medium',
        category: 'Short-Circuit Evaluation',
        hasCode: true
    },
    {
        id: 21,
        question: `What happens in the following code?
    \`\`\`java
    interface A {
        void display();
    }
    class Test implements A {
        public void display() {
            System.out.println("Hello");
        }
        public static void main(String[] args) {
            Test obj = new Test();
            obj.display();
        }
    }
    \`\`\``,
        options: [
            { text: "Hello", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false },
            { text: "No Output", isCorrect: false }
        ],
        explanation: "The `display` method is implemented in the `Test` class, so it prints `Hello`.",
        difficulty: 'Easy',
        category: 'Interfaces',
        hasCode: true
    },
    {
        id: 22,
        question: `What does the following code do?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            int x = 10;
            int y = x++;
            System.out.println(x + ", " + y);
        }
    }
    \`\`\``,
        options: [
            { text: "10, 10", isCorrect: false },
            { text: "11, 10", isCorrect: true },
            { text: "10, 11", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "The `x++` operator increments `x` after its current value is assigned to `y`.",
        difficulty: 'Easy',
        category: 'Post-Increment',
        hasCode: true
    },
    {
        id: 23,
        question: `What happens when the following code is executed?
    \`\`\`java
    class A {
        public static void main(String[] args) {
            int x = 5;
            int y = 10;
            System.out.println(x > y ? x : y);
        }
    }
    \`\`\``,
        options: [
            { text: "5", isCorrect: false },
            { text: "10", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The ternary operator evaluates the condition `x > y`, which is false, so it returns `y`.",
        difficulty: 'Easy',
        category: 'Ternary Operator',
        hasCode: true
    },
    {
        id: 24,
        question: `What will the following program print?
    \`\`\`java
    class Test {
        static int x = 10;
        static {
            x += 5;
        }
        public static void main(String[] args) {
            System.out.println(x);
        }
    }
    \`\`\``,
        options: [
            { text: "10", isCorrect: false },
            { text: "15", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The static block is executed when the class is loaded, adding 5 to the static variable `x`.",
        difficulty: 'Medium',
        category: 'Static Blocks',
        hasCode: true
    },
    {
        id: 25,
        question: `What is the result of the following code?
    \`\`\`java
    class A {
        int x = 10;
        static int y = 20;
    }
    class Test {
        public static void main(String[] args) {
            A obj1 = new A();
            A obj2 = new A();
            obj1.x += 5;
            obj2.y += 10;
            System.out.println(obj1.x + ", " + obj2.y);
        }
    }
    \`\`\``,
        options: [
            { text: "15, 30", isCorrect: true },
            { text: "15, 20", isCorrect: false },
            { text: "10, 30", isCorrect: false },
            { text: "10, 20", isCorrect: false }
        ],
        explanation: "Instance variables are unique for each object, but static variables are shared across all instances.",
        difficulty: 'Medium',
        category: 'Static and Instance Variables',
        hasCode: true
    },
    {
        id: 26,
        question: `What is the result of the following code?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            int x = 5;
            int y = 0;
            try {
                int z = x / y;
            } catch (ArithmeticException e) {
                System.out.println("Caught an Exception");
            } finally {
                System.out.println("Finally Block Executed");
            }
        }
    }
    \`\`\``,
        options: [
            { text: "Caught an Exception", isCorrect: false },
            { text: "Caught an Exception\nFinally Block Executed", isCorrect: true },
            { text: "Finally Block Executed", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The exception is caught, and the finally block is always executed after the catch block.",
        difficulty: 'Easy',
        category: 'Exception Handling',
        hasCode: true
    },
    {
        id: 27,
        question: `What happens in the following code?
    \`\`\`java
    interface A {
        void display();
        default void show() {
            System.out.println("Interface Default Method");
        }
    }
    class Test implements A {
        public void display() {
            System.out.println("Implemented Display");
        }
        public static void main(String[] args) {
            A obj = new Test();
            obj.display();
            obj.show();
        }
    }
    \`\`\``,
        options: [
            { text: "Implemented Display", isCorrect: false },
            { text: "Implemented Display\nInterface Default Method", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Default methods in interfaces can be directly invoked by implementing classes if not overridden.",
        difficulty: 'Medium',
        category: 'Interfaces and Default Methods',
        hasCode: true
    },
    {
        id: 28,
        question: `What is the output of the following program?
    \`\`\`java
    class A {
        static void method() {
            System.out.println("Static Method in A");
        }
    }
    class B extends A {
        static void method() {
            System.out.println("Static Method in B");
        }
    }
    public class Test {
        public static void main(String[] args) {
            A obj = new B();
            obj.method();
        }
    }
    \`\`\``,
        options: [
            { text: "Static Method in A", isCorrect: true },
            { text: "Static Method in B", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Static methods are resolved at compile-time based on the reference type, not the runtime object.",
        difficulty: 'Hard',
        category: 'Static Methods',
        hasCode: true
    },
    {
        id: 29,
        question: `What will the following code print?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            System.out.println("5" + 5 + 5);
            System.out.println(5 + 5 + "5");
        }
    }
    \`\`\``,
        options: [
            { text: "555 and 105", isCorrect: true },
            { text: "555 and 55", isCorrect: false },
            { text: "105 and 555", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "Concatenation occurs when a string is encountered, causing different behaviors for `\"5\" + 5` vs `5 + \"5\"`.",
        difficulty: 'Easy',
        category: 'String Concatenation',
        hasCode: true
    },
    {
        id: 30,
        question: `What is the result of the following program?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            int x = 5;
            x = x++ + ++x;
            System.out.println(x);
        }
    }
    \`\`\``,
        options: [
            { text: "11", isCorrect: true },
            { text: "10", isCorrect: false },
            { text: "12", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "The post-increment `x++` adds the value of `x` before incrementing, while `++x` increments first, resulting in `5 + 6 = 11`.",
        difficulty: 'Hard',
        category: 'Increment Operators',
        hasCode: true
    },
    {
        id: 31,
        question: `What happens with this code?
    \`\`\`java
    class A {
        public static void main(String[] args) {
            Integer x = 1000;
            Integer y = 1000;
            System.out.println(x == y);
        }
    }
    \`\`\``,
        options: [
            { text: "true", isCorrect: false },
            { text: "false", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Objects are compared using `==`, which checks reference equality. Since `x` and `y` are different objects, it returns `false`.",
        difficulty: 'Medium',
        category: 'Autoboxing',
        hasCode: true
    },
    {
        id: 32,
        question: `What is the output of the following code?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            String s = "Java";
            s.concat(" Programming");
            System.out.println(s);
        }
    }
    \`\`\``,
        options: [
            { text: "Java Programming", isCorrect: false },
            { text: "Java", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Strings in Java are immutable. The `concat` method creates a new string, but it is not assigned to `s`.",
        difficulty: 'Easy',
        category: 'Strings',
        hasCode: true
    },
    {
        id: 33,
        question: `What happens when this code is executed?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            String s1 = "Java";
            String s2 = new String("Java");
            System.out.println(s1.equals(s2));
            System.out.println(s1 == s2);
        }
    }
    \`\`\``,
        options: [
            { text: "true\nfalse", isCorrect: true },
            { text: "false\nfalse", isCorrect: false },
            { text: "true\ntrue", isCorrect: false },
            { text: "false\ntrue", isCorrect: false }
        ],
        explanation: "`equals` checks value equality, while `==` checks reference equality. The two references point to different objects.",
        difficulty: 'Medium',
        category: 'String Comparison',
        hasCode: true
    },
    {
        id: 34,
        question: `What will this program output?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            int x = 10;
            try {
                int y = x / 0;
            } catch (Exception e) {
                System.out.println("Exception caught");
            } finally {
                System.out.println("Finally executed");
            }
        }
    }
    \`\`\``,
        options: [
            { text: "Exception caught", isCorrect: false },
            { text: "Exception caught\nFinally executed", isCorrect: true },
            { text: "Finally executed", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "Division by zero causes an ArithmeticException, which is caught, and then the finally block executes.",
        difficulty: 'Easy',
        category: 'Exception Handling',
        hasCode: true
    },
    {
        id: 35,
        question: `What happens in the following code?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            int x = 5;
            int y = ++x + x++ + --x;
            System.out.println(y);
        }
    }
    \`\`\``,
        options: [
            { text: "18", isCorrect: true },
            { text: "15", isCorrect: false },
            { text: "16", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "The expression evaluates as `6 + 6 + 5 = 18` due to a combination of pre- and post-increments.",
        difficulty: 'Hard',
        category: 'Operators',
        hasCode: true
    },
    {
        id: 36,
        question: `What is the output of the following code?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            int x = 0;
            int y = 0;
            System.out.println(x++ == ++y);
        }
    }
    \`\`\``,
        options: [
            { text: "true", isCorrect: false },
            { text: "false", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "`x++` evaluates as 0 (then increments), while `++y` evaluates as 1 (after incrementing). The comparison returns false.",
        difficulty: 'Medium',
        category: 'Operators',
        hasCode: true
    },
    {
        id: 37,
        question: `What does this code do?
    \`\`\`java
    class Test {
        static void method() throws Exception {
            throw new Exception("Error");
        }
        public static void main(String[] args) {
            try {
                method();
            } catch (Exception e) {
                System.out.println("Caught: " + e.getMessage());
            }
        }
    }
    \`\`\``,
        options: [
            { text: "Caught: Error", isCorrect: true },
            { text: "Error", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The `method` throws an exception, which is caught in the `catch` block, printing the message.",
        difficulty: 'Medium',
        category: 'Exception Handling',
        hasCode: true
    },
    {
        id: 38,
        question: `What happens in this case?
    \`\`\`java
    class A {
        void display() {
            System.out.println("A");
        }
    }
    class B extends A {
        void display() {
            System.out.println("B");
        }
    }
    public class Test {
        public static void main(String[] args) {
            A obj = new B();
            obj.display();
        }
    }
    \`\`\``,
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Dynamic method dispatch ensures that the overridden method in the subclass (`B`) is called.",
        difficulty: 'Easy',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 39,
        question: `What will this output?
    \`\`\`java
    class Test {
        public static void main(String[] args) {
            System.out.println("Hello " + null);
        }
    }
    \`\`\``,
        options: [
            { text: "Hello null", isCorrect: true },
            { text: "null", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Concatenating a string with `null` results in `Hello null`.",
        difficulty: 'Easy',
        category: 'String Concatenation',
        hasCode: true
    },
    {
        id: 40,
        question: `What type of relationship is demonstrated in the following code?
    \`\`\`java
    class Engine {
        void start() {
            System.out.println("Engine starts");
        }
    }
    class Car {
        private Engine engine;
        Car(Engine engine) {
            this.engine = engine;
        }
        void drive() {
            engine.start();
            System.out.println("Car is driving");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Engine engine = new Engine();
            Car car = new Car(engine);
            car.drive();
        }
    }
    \`\`\``,
        options: [
            { text: "Association", isCorrect: true },
            { text: "Aggregation", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Composition", isCorrect: false }
        ],
        explanation: "The `Car` class has an `Engine` object passed to it, demonstrating a loose association between the two classes.",
        difficulty: 'Medium',
        category: 'Association',
        hasCode: true
    },
    {
        id: 41,
        question: `What type of relationship does the following code represent?
    \`\`\`java
    class Book {
        private String title;
        public Book(String title) {
            this.title = title;
        }
        public String getTitle() {
            return title;
        }
    }
    class Library {
        private List<Book> books;
        Library() {
            books = new ArrayList<>();
        }
        void addBook(Book book) {
            books.add(book);
        }
        List<Book> getBooks() {
            return books;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Library library = new Library();
            library.addBook(new Book("Java Programming"));
            System.out.println(library.getBooks().get(0).getTitle());
        }
    }
    \`\`\``,
        options: [
            { text: "Aggregation", isCorrect: true },
            { text: "Composition", isCorrect: false },
            { text: "Association", isCorrect: false },
            { text: "Inheritance", isCorrect: false }
        ],
        explanation: "The `Library` class holds a list of `Book` objects but does not control their lifecycle, representing aggregation.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 42,
        question: `What is encapsulated in the following class?
    \`\`\`java
    class Account {
        private double balance;
        public double getBalance() {
            return balance;
        }
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
            }
        }
        public void withdraw(double amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
            }
        }
    }
    public class Test {
        public static void main(String[] args) {
            Account account = new Account();
            account.deposit(500);
            account.withdraw(200);
            System.out.println(account.getBalance());
        }
    }
    \`\`\``,
        options: [
            { text: "The balance variable", isCorrect: true },
            { text: "The deposit and withdraw methods", isCorrect: false },
            { text: "Encapsulation is not used", isCorrect: false },
            { text: "Account class lifecycle", isCorrect: false }
        ],
        explanation: "The `balance` variable is encapsulated by making it private and accessing it through public getter and setter methods.",
        difficulty: 'Easy',
        category: 'Encapsulation',
        hasCode: true
    },
    {
        id: 43,
        question: `What will the following program print?
    \`\`\`java
    abstract class Shape {
        abstract void draw();
    }
    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing Circle");
        }
    }
    class Rectangle extends Shape {
        void draw() {
            System.out.println("Drawing Rectangle");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Shape shape = new Circle();
            shape.draw();
            shape = new Rectangle();
            shape.draw();
        }
    }
    \`\`\``,
        options: [
            { text: "Drawing Circle\nDrawing Rectangle", isCorrect: true },
            { text: "Drawing Circle", isCorrect: false },
            { text: "Drawing Rectangle", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "This demonstrates polymorphism where the `draw` method is dynamically resolved at runtime based on the object type.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 44,
        question: `What type of relationship is shown here?
    \`\`\`java
    class Keyboard {
        void type() {
            System.out.println("Typing...");
        }
    }
    class Computer {
        private Keyboard keyboard = new Keyboard();
        void work() {
            keyboard.type();
            System.out.println("Processing...");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Computer computer = new Computer();
            computer.work();
        }
    }
    \`\`\``,
        options: [
            { text: "Composition", isCorrect: true },
            { text: "Aggregation", isCorrect: false },
            { text: "Association", isCorrect: false },
            { text: "Inheritance", isCorrect: false }
        ],
        explanation: "The `Computer` class owns and controls the lifecycle of the `Keyboard` object, representing composition.",
        difficulty: 'Medium',
        category: 'Composition',
        hasCode: true
    },
    {
        id: 45,
        question: `What happens in the following inheritance scenario?
    \`\`\`java
    class Animal {
        void sound() {
            System.out.println("Animal sound");
        }
    }
    class Dog extends Animal {
        void sound() {
            System.out.println("Bark");
        }
    }
    class Cat extends Animal {
        void sound() {
            System.out.println("Meow");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Animal animal = new Dog();
            animal.sound();
            animal = new Cat();
            animal.sound();
        }
    }
    \`\`\``,
        options: [
            { text: "Bark\nMeow", isCorrect: true },
            { text: "Animal sound\nAnimal sound", isCorrect: false },
            { text: "Animal sound\nMeow", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "Polymorphism allows dynamic method dispatch, resolving the `sound` method at runtime based on the object type.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 46,
        question: `What will be the output?
    \`\`\`java
    abstract class Vehicle {
        abstract void run();
        void stop() {
            System.out.println("Vehicle stopped");
        }
    }
    class Bike extends Vehicle {
        void run() {
            System.out.println("Bike is running");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Vehicle vehicle = new Bike();
            vehicle.run();
            vehicle.stop();
        }
    }
    \`\`\``,
        options: [
            { text: "Bike is running\nVehicle stopped", isCorrect: true },
            { text: "Vehicle stopped", isCorrect: false },
            { text: "Bike is running", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "The abstract method `run` is implemented in `Bike`, and the `stop` method is directly used from the `Vehicle` class.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 47,
        question: `What is the purpose of the following code?
    \`\`\`java
    abstract class Employee {
        abstract double calculateSalary();
    }
    class FullTimeEmployee extends Employee {
        double calculateSalary() {
            return 50000;
        }
    }
    class PartTimeEmployee extends Employee {
        double calculateSalary() {
            return 20000;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Employee emp1 = new FullTimeEmployee();
            Employee emp2 = new PartTimeEmployee();
            System.out.println(emp1.calculateSalary());
            System.out.println(emp2.calculateSalary());
        }
    }
    \`\`\``,
        options: [
            { text: "50000\n20000", isCorrect: true },
            { text: "50000\nCompilation Error", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates abstraction and polymorphism by providing a common interface to calculate salaries.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 48,
        question: `What is the result of the following code?
    \`\`\`java
    class Person {
        private String name;
        private Address address;
        Person(String name, Address address) {
            this.name = name;
            this.address = address;
        }
        Address getAddress() {
            return address;
        }
    }
    class Address {
        private String city;
        Address(String city) {
            this.city = city;
        }
        String getCity() {
            return city;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Address address = new Address("New York");
            Person person = new Person("John", address);
            System.out.println(person.getAddress().getCity());
        }
    }
    \`\`\``,
        options: [
            { text: "New York", isCorrect: true },
            { text: "John", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates aggregation, where the `Person` class has a reference to the `Address` class.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 49,
        question: `What will the following code output?
    \`\`\`java
    class Parent {
        final void show() {
            System.out.println("Parent");
        }
    }
    class Child extends Parent {
        void show() {
            System.out.println("Child");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Parent obj = new Child();
            obj.show();
        }
    }
    \`\`\``,
        options: [
            { text: "Compilation Error", isCorrect: true },
            { text: "Child", isCorrect: false },
            { text: "Parent", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "A `final` method in the parent class cannot be overridden in the child class.",
        difficulty: 'Hard',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 50,
        question: `What happens in the following code?
    \`\`\`java
    interface Vehicle {
        void start();
    }
    class Car implements Vehicle {
        public void start() {
            System.out.println("Car starts");
        }
    }
    class Bike implements Vehicle {
        public void start() {
            System.out.println("Bike starts");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Vehicle vehicle = new Car();
            vehicle.start();
            vehicle = new Bike();
            vehicle.start();
        }
    }
    \`\`\``,
        options: [
            { text: "Car starts\nBike starts", isCorrect: true },
            { text: "Car starts", isCorrect: false },
            { text: "Bike starts", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "This demonstrates polymorphism using interfaces, where the method implementation depends on the runtime object type.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 51,
        question: `What type of relationship is demonstrated in the code below?
    \`\`\`java
    class Department {
        private String name;
        Department(String name) {
            this.name = name;
        }
        String getName() {
            return name;
        }
    }
    class University {
        private List<Department> departments;
        University() {
            departments = new ArrayList<>();
        }
        void addDepartment(Department dept) {
            departments.add(dept);
        }
        List<Department> getDepartments() {
            return departments;
        }
    }
    public class Test {
        public static void main(String[] args) {
            University uni = new University();
            uni.addDepartment(new Department("Computer Science"));
            System.out.println(uni.getDepartments().get(0).getName());
        }
    }
    \`\`\``,
        options: [
            { text: "Aggregation", isCorrect: true },
            { text: "Composition", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Polymorphism", isCorrect: false }
        ],
        explanation: "The `University` class has a list of `Department` objects, demonstrating aggregation.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 52,
        question: `What will happen if the following code is executed?
    \`\`\`java
    class Parent {
        private void display() {
            System.out.println("Parent");
        }
    }
    class Child extends Parent {
        public void display() {
            System.out.println("Child");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Parent obj = new Child();
            obj.display();
        }
    }
    \`\`\``,
        options: [
            { text: "Compilation Error", isCorrect: true },
            { text: "Parent", isCorrect: false },
            { text: "Child", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Private methods in the parent class are not visible to the child class, so the `display` method in `Child` does not override it.",
        difficulty: 'Hard',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 53,
        question: `What type of inheritance is demonstrated below?
    \`\`\`java
    class Animal {
        void eat() {
            System.out.println("Animal eats");
        }
    }
    class Mammal extends Animal {
        void walk() {
            System.out.println("Mammal walks");
        }
    }
    class Dog extends Mammal {
        void bark() {
            System.out.println("Dog barks");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Dog dog = new Dog();
            dog.eat();
            dog.walk();
            dog.bark();
        }
    }
    \`\`\``,
        options: [
            { text: "Multilevel Inheritance", isCorrect: true },
            { text: "Single Inheritance", isCorrect: false },
            { text: "Multiple Inheritance", isCorrect: false },
            { text: "Composition", isCorrect: false }
        ],
        explanation: "This is multilevel inheritance where `Dog` inherits from `Mammal`, which in turn inherits from `Animal`.",
        difficulty: 'Medium',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 54,
        question: `What happens in the following composition scenario?
    \`\`\`java
    class Processor {
        void process() {
            System.out.println("Processing data...");
        }
    }
    class Computer {
        private Processor processor = new Processor();
        void compute() {
            processor.process();
            System.out.println("Computing tasks...");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Computer computer = new Computer();
            computer.compute();
        }
    }
    \`\`\``,
        options: [
            { text: "Processing data...\nComputing tasks...", isCorrect: true },
            { text: "Computing tasks...", isCorrect: false },
            { text: "Processing data...", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "The `Computer` class owns and controls the lifecycle of the `Processor` class, demonstrating composition.",
        difficulty: 'Medium',
        category: 'Composition',
        hasCode: true
    },
    {
        id: 55,
        question: `What type of abstraction is shown here?
    \`\`\`java
    interface Shape {
        void draw();
    }
    class Circle implements Shape {
        public void draw() {
            System.out.println("Drawing Circle");
        }
    }
    class Square implements Shape {
        public void draw() {
            System.out.println("Drawing Square");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Shape shape = new Circle();
            shape.draw();
            shape = new Square();
            shape.draw();
        }
    }
    \`\`\``,
        options: [
            { text: "Interface Abstraction", isCorrect: true },
            { text: "Class Abstraction", isCorrect: false },
            { text: "Composition", isCorrect: false },
            { text: "Inheritance", isCorrect: false }
        ],
        explanation: "This demonstrates abstraction through an interface, where the implementation of `draw` depends on the concrete class.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 56,
        question: `What happens in the following composition code?
    \`\`\`java
    class Battery {
        void charge() {
            System.out.println("Charging...");
        }
    }
    class Smartphone {
        private Battery battery = new Battery();
        void use() {
            battery.charge();
            System.out.println("Using smartphone...");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Smartphone phone = new Smartphone();
            phone.use();
        }
    }
    \`\`\``,
        options: [
            { text: "Charging...\nUsing smartphone...", isCorrect: true },
            { text: "Using smartphone...", isCorrect: false },
            { text: "Charging...", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "The `Smartphone` class owns and controls the `Battery` object, demonstrating composition.",
        difficulty: 'Medium',
        category: 'Composition',
        hasCode: true
    },
    {
        id: 57,
        question: `What is the result of the following polymorphism scenario?
    \`\`\`java
    abstract class Animal {
        abstract void sound();
    }
    class Dog extends Animal {
        void sound() {
            System.out.println("Bark");
        }
    }
    class Cat extends Animal {
        void sound() {
            System.out.println("Meow");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Animal animal = new Dog();
            animal.sound();
            animal = new Cat();
            animal.sound();
        }
    }
    \`\`\``,
        options: [
            { text: "Bark\nMeow", isCorrect: true },
            { text: "Meow\nBark", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates polymorphism where the method `sound` is resolved dynamically based on the object type at runtime.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 58,
        question: `What is the output of this inheritance example?
    \`\`\`java
    class Parent {
        Parent() {
            System.out.println("Parent Constructor");
        }
    }
    class Child extends Parent {
        Child() {
            System.out.println("Child Constructor");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Child obj = new Child();
        }
    }
    \`\`\``,
        options: [
            { text: "Parent Constructor\nChild Constructor", isCorrect: true },
            { text: "Child Constructor", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The constructor of the parent class is always called first when creating an object of a derived class.",
        difficulty: 'Easy',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 59,
        question: `What type of relationship is demonstrated here?
    \`\`\`java
    class Engine {
        void start() {
            System.out.println("Engine starts");
        }
    }
    class Car {
        private Engine engine;
        Car(Engine engine) {
            this.engine = engine;
        }
        void drive() {
            engine.start();
            System.out.println("Car is driving");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Engine engine = new Engine();
            Car car = new Car(engine);
            car.drive();
        }
    }
    \`\`\``,
        options: [
            { text: "Aggregation", isCorrect: true },
            { text: "Composition", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Polymorphism", isCorrect: false }
        ],
        explanation: "The `Car` class uses an `Engine` object without controlling its lifecycle, representing aggregation.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 60,
        question: `What happens in this encapsulation scenario?
    \`\`\`java
    class BankAccount {
        private double balance;
        public double getBalance() {
            return balance;
        }
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
            }
        }
        public void withdraw(double amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
            }
        }
    }
    public class Test {
        public static void main(String[] args) {
            BankAccount account = new BankAccount();
            account.deposit(1000);
            account.withdraw(500);
            System.out.println(account.getBalance());
        }
    }
    \`\`\``,
        options: [
            { text: "500.0", isCorrect: true },
            { text: "1000.0", isCorrect: false },
            { text: "0.0", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "The balance is encapsulated by making it private, and only controlled access is provided via public methods.",
        difficulty: 'Medium',
        category: 'Encapsulation',
        hasCode: true
    },
    {
        id: 61,
        question: `What is demonstrated in the following code?
    \`\`\`java
    abstract class Employee {
        abstract double calculateSalary();
    }
    class Manager extends Employee {
        double calculateSalary() {
            return 80000;
        }
    }
    class Intern extends Employee {
        double calculateSalary() {
            return 20000;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Employee emp = new Manager();
            System.out.println(emp.calculateSalary());
            emp = new Intern();
            System.out.println(emp.calculateSalary());
        }
    }
    \`\`\``,
        options: [
            { text: "80000\n20000", isCorrect: true },
            { text: "20000\n80000", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates polymorphism and abstraction, where the implementation of `calculateSalary` depends on the runtime object type.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 62,
        question: `What type of polymorphism is demonstrated in the following code?
    \`\`\`java
    class Calculator {
        int add(int a, int b) {
            return a + b;
        }
        double add(double a, double b) {
            return a + b;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Calculator calc = new Calculator();
            System.out.println(calc.add(5, 10));
            System.out.println(calc.add(5.5, 10.5));
        }
    }
    \`\`\``,
        options: [
            { text: "Compile-time Polymorphism", isCorrect: true },
            { text: "Runtime Polymorphism", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Encapsulation", isCorrect: false }
        ],
        explanation: "This demonstrates method overloading, a form of compile-time polymorphism where multiple methods share the same name but differ in parameter types.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 63,
        question: `What type of inheritance is demonstrated in this code?
    \`\`\`java
    class Animal {
        void eat() {
            System.out.println("Animal eats");
        }
    }
    class Mammal extends Animal {
        void walk() {
            System.out.println("Mammal walks");
        }
    }
    class Dog extends Mammal {
        void bark() {
            System.out.println("Dog barks");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Dog dog = new Dog();
            dog.eat();
            dog.walk();
            dog.bark();
        }
    }
    \`\`\``,
        options: [
            { text: "Multilevel Inheritance", isCorrect: true },
            { text: "Hierarchical Inheritance", isCorrect: false },
            { text: "Single Inheritance", isCorrect: false },
            { text: "Composition", isCorrect: false }
        ],
        explanation: "This demonstrates multilevel inheritance where `Dog` inherits from `Mammal`, and `Mammal` inherits from `Animal`.",
        difficulty: 'Medium',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 64,
        question: `What is the output of the following code?
    \`\`\`java
    class Parent {
        void display() {
            System.out.println("Parent display");
        }
    }
    class Child extends Parent {
        void display() {
            System.out.println("Child display");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Parent obj = new Child();
            obj.display();
        }
    }
    \`\`\``,
        options: [
            { text: "Child display", isCorrect: true },
            { text: "Parent display", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates runtime polymorphism where the overridden `display` method in `Child` is called at runtime.",
        difficulty: 'Easy',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 65,
        question: `What happens in this aggregation scenario?
    \`\`\`java
    class Course {
        private String name;
        Course(String name) {
            this.name = name;
        }
        String getName() {
            return name;
        }
    }
    class Student {
        private List<Course> courses;
        Student() {
            courses = new ArrayList<>();
        }
        void addCourse(Course course) {
            courses.add(course);
        }
        List<Course> getCourses() {
            return courses;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Student student = new Student();
            student.addCourse(new Course("Math"));
            System.out.println(student.getCourses().get(0).getName());
        }
    }
    \`\`\``,
        options: [
            { text: "Math", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false },
            { text: "Null", isCorrect: false }
        ],
        explanation: "The `Student` class maintains a list of `Course` objects, representing aggregation as the courses are loosely coupled.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 66,
        question: `What happens in this example of encapsulation?
    \`\`\`java
    class Product {
        private double price;
        public double getPrice() {
            return price;
        }
        public void setPrice(double price) {
            if (price > 0) {
                this.price = price;
            }
        }
    }
    public class Test {
        public static void main(String[] args) {
            Product product = new Product();
            product.setPrice(100.50);
            System.out.println(product.getPrice());
        }
    }
    \`\`\``,
        options: [
            { text: "100.5", isCorrect: true },
            { text: "0.0", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The `price` variable is encapsulated and only accessible through the public getter and setter methods.",
        difficulty: 'Easy',
        category: 'Encapsulation',
        hasCode: true
    },
    {
        id: 67,
        question: `What will the following program print?
    \`\`\`java
    abstract class Shape {
        abstract double area();
    }
    class Rectangle extends Shape {
        private double length, width;
        Rectangle(double length, double width) {
            this.length = length;
            this.width = width;
        }
        double area() {
            return length * width;
        }
    }
    class Circle extends Shape {
        private double radius;
        Circle(double radius) {
            this.radius = radius;
        }
        double area() {
            return Math.PI * radius * radius;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Shape shape1 = new Rectangle(4, 5);
            Shape shape2 = new Circle(3);
            System.out.println(shape1.area());
            System.out.println(shape2.area());
        }
    }
    \`\`\``,
        options: [
            { text: "20.0\n28.27", isCorrect: true },
            { text: "20.0\nRuntime Error", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates abstraction where the `area` method is defined in the abstract class `Shape` and implemented in its subclasses.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 68,
        question: `What is demonstrated by this code?
    \`\`\`java
    class Author {
        private String name;
        Author(String name) {
            this.name = name;
        }
        String getName() {
            return name;
        }
    }
    class Book {
        private String title;
        private Author author;
        Book(String title, Author author) {
            this.title = title;
            this.author = author;
        }
        String getDetails() {
            return title + " by " + author.getName();
        }
    }
    public class Test {
        public static void main(String[] args) {
            Author author = new Author("George Orwell");
            Book book = new Book("1984", author);
            System.out.println(book.getDetails());
        }
    }
    \`\`\``,
        options: [
            { text: "1984 by George Orwell", isCorrect: true },
            { text: "George Orwell", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates aggregation, where `Book` has an `Author` object but does not control its lifecycle.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 69,
        question: `What is the output of this program?
    \`\`\`java
    class Animal {
        void sound() {
            System.out.println("Animal makes sound");
        }
    }
    class Dog extends Animal {
        void sound() {
            System.out.println("Dog barks");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Animal animal = new Dog();
            animal.sound();
        }
    }
    \`\`\``,
        options: [
            { text: "Dog barks", isCorrect: true },
            { text: "Animal makes sound", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates runtime polymorphism where the overridden `sound` method is called based on the object type.",
        difficulty: 'Easy',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 70,
        question: `What type of inheritance is shown here?
    \`\`\`java
    class Vehicle {
        void run() {
            System.out.println("Vehicle is running");
        }
    }
    class Car extends Vehicle {
        void run() {
            System.out.println("Car is running");
        }
    }
    class Bike extends Vehicle {
        void run() {
            System.out.println("Bike is running");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Vehicle car = new Car();
            Vehicle bike = new Bike();
            car.run();
            bike.run();
        }
    }
    \`\`\``,
        options: [
            { text: "Hierarchical Inheritance", isCorrect: true },
            { text: "Multilevel Inheritance", isCorrect: false },
            { text: "Single Inheritance", isCorrect: false },
            { text: "Composition", isCorrect: false }
        ],
        explanation: "This demonstrates hierarchical inheritance where multiple classes (Car, Bike) inherit from a single parent class (Vehicle).",
        difficulty: 'Medium',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 71,
        question: `What is encapsulated in the following class?
    \`\`\`java
    class BankAccount {
        private double balance;
        public double getBalance() {
            return balance;
        }
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
            }
        }
    }
    public class Test {
        public static void main(String[] args) {
            BankAccount account = new BankAccount();
            account.deposit(1000);
            System.out.println(account.getBalance());
        }
    }
    \`\`\``,
        options: [
            { text: "The balance variable", isCorrect: true },
            { text: "The deposit method", isCorrect: false },
            { text: "Encapsulation is not used", isCorrect: false },
            { text: "No data is encapsulated", isCorrect: false }
        ],
        explanation: "The balance is a private variable, accessible only via controlled public methods, demonstrating encapsulation.",
        difficulty: 'Easy',
        category: 'Encapsulation',
        hasCode: true
    },
    {
        id: 72,
        question: `What is the result of this abstract class implementation?
    \`\`\`java
    abstract class Shape {
        abstract void draw();
    }
    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing Circle");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Shape shape = new Circle();
            shape.draw();
        }
    }
    \`\`\``,
        options: [
            { text: "Drawing Circle", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false },
            { text: "No Output", isCorrect: false }
        ],
        explanation: "The abstract method `draw` is implemented in the `Circle` class and called via polymorphism.",
        difficulty: 'Easy',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 73,
        question: `What happens in this composition scenario?
    \`\`\`java
    class Processor {
        void process() {
            System.out.println("Processing...");
        }
    }
    class Computer {
        private Processor processor = new Processor();
        void compute() {
            processor.process();
            System.out.println("Computing tasks...");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Computer computer = new Computer();
            computer.compute();
        }
    }
    \`\`\``,
        options: [
            { text: "Processing...\nComputing tasks...", isCorrect: true },
            { text: "Computing tasks...", isCorrect: false },
            { text: "Processing...", isCorrect: false },
            { text: "Compilation Error", isCorrect: false }
        ],
        explanation: "The `Computer` class owns and controls the lifecycle of the `Processor` class, demonstrating composition.",
        difficulty: 'Medium',
        category: 'Composition',
        hasCode: true
    },
    {
        id: 74,
        question: `What happens with this aggregation code?
    \`\`\`java
    class Department {
        private String name;
        Department(String name) {
            this.name = name;
        }
        String getName() {
            return name;
        }
    }
    class Company {
        private List<Department> departments = new ArrayList<>();
        void addDepartment(Department dept) {
            departments.add(dept);
        }
        List<Department> getDepartments() {
            return departments;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Company company = new Company();
            company.addDepartment(new Department("HR"));
            System.out.println(company.getDepartments().get(0).getName());
        }
    }
    \`\`\``,
        options: [
            { text: "HR", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false },
            { text: "Null", isCorrect: false }
        ],
        explanation: "The `Company` class holds references to multiple `Department` objects without owning their lifecycle, representing aggregation.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 75,
        question: `What happens when the following code is executed?
    \`\`\`java
    class Parent {
        void display() {
            System.out.println("Parent display");
        }
    }
    class Child extends Parent {
        void display() {
            System.out.println("Child display");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Parent obj = new Child();
            obj.display();
        }
    }
    \`\`\``,
        options: [
            { text: "Child display", isCorrect: true },
            { text: "Parent display", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates runtime polymorphism where the overridden `display` method in the `Child` class is called at runtime.",
        difficulty: 'Easy',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 76,
        question: `What is the type of relationship demonstrated in the code below?
    \`\`\`java
    class Wheel {
        void rotate() {
            System.out.println("Wheel rotates");
        }
    }
    class Car {
        private Wheel wheel;
        Car(Wheel wheel) {
            this.wheel = wheel;
        }
        void move() {
            wheel.rotate();
            System.out.println("Car moves");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Wheel wheel = new Wheel();
            Car car = new Car(wheel);
            car.move();
        }
    }
    \`\`\``,
        options: [
            { text: "Aggregation", isCorrect: true },
            { text: "Composition", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Polymorphism", isCorrect: false }
        ],
        explanation: "The `Car` class uses a `Wheel` object but does not control its lifecycle, representing aggregation.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 77,
        question: `What is demonstrated by this code?
    \`\`\`java
    abstract class Appliance {
        abstract void turnOn();
    }
    class Fan extends Appliance {
        void turnOn() {
            System.out.println("Fan turns on");
        }
    }
    class Light extends Appliance {
        void turnOn() {
            System.out.println("Light turns on");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Appliance fan = new Fan();
            Appliance light = new Light();
            fan.turnOn();
            light.turnOn();
        }
    }
    \`\`\``,
        options: [
            { text: "Fan turns on\nLight turns on", isCorrect: true },
            { text: "Light turns on\nFan turns on", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates abstraction and polymorphism where the abstract method `turnOn` is implemented in different ways by subclasses.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 78,
        question: `What is the output of this encapsulation example?
    \`\`\`java
    class Student {
        private String name;
        private int age;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public int getAge() {
            return age;
        }
        public void setAge(int age) {
            if (age > 0) {
                this.age = age;
            }
        }
    }
    public class Test {
        public static void main(String[] args) {
            Student student = new Student();
            student.setName("Alice");
            student.setAge(20);
            System.out.println(student.getName() + " is " + student.getAge() + " years old.");
        }
    }
    \`\`\``,
        options: [
            { text: "Alice is 20 years old.", isCorrect: true },
            { text: "Alice is 0 years old.", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The `name` and `age` fields are private and accessed only through public methods, demonstrating encapsulation.",
        difficulty: 'Easy',
        category: 'Encapsulation',
        hasCode: true
    },
    {
        id: 79,
        question: `What is demonstrated by this inheritance example?
    \`\`\`java
    class Employee {
        void work() {
            System.out.println("Employee works");
        }
    }
    class Manager extends Employee {
        void manage() {
            System.out.println("Manager manages");
        }
    }
    class Developer extends Employee {
        void code() {
            System.out.println("Developer codes");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Manager manager = new Manager();
            Developer developer = new Developer();
            manager.work();
            manager.manage();
            developer.work();
            developer.code();
        }
    }
    \`\`\``,
        options: [
            { text: "Hierarchical Inheritance", isCorrect: true },
            { text: "Multilevel Inheritance", isCorrect: false },
            { text: "Composition", isCorrect: false },
            { text: "Aggregation", isCorrect: false }
        ],
        explanation: "Both `Manager` and `Developer` classes inherit from the `Employee` class, representing hierarchical inheritance.",
        difficulty: 'Medium',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 80,
        question: `What happens when this code is executed?
    \`\`\`java
    interface Payment {
        void pay(double amount);
    }
    class CreditCardPayment implements Payment {
        public void pay(double amount) {
            System.out.println("Paid " + amount + " using Credit Card");
        }
    }
    class PayPalPayment implements Payment {
        public void pay(double amount) {
            System.out.println("Paid " + amount + " using PayPal");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Payment payment = new CreditCardPayment();
            payment.pay(100.0);
            payment = new PayPalPayment();
            payment.pay(200.0);
        }
    }
    \`\`\``,
        options: [
            { text: "Paid 100.0 using Credit Card\nPaid 200.0 using PayPal", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false },
            { text: "Paid 200.0 using PayPal", isCorrect: false }
        ],
        explanation: "This demonstrates polymorphism where different implementations of the `pay` method are invoked dynamically.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 81,
        question: `What type of relationship is demonstrated?
    \`\`\`java
    class CPU {
        void process() {
            System.out.println("CPU processing...");
        }
    }
    class Laptop {
        private CPU cpu = new CPU();
        void run() {
            cpu.process();
            System.out.println("Laptop running...");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Laptop laptop = new Laptop();
            laptop.run();
        }
    }
    \`\`\``,
        options: [
            { text: "Composition", isCorrect: true },
            { text: "Aggregation", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Encapsulation", isCorrect: false }
        ],
        explanation: "The `Laptop` class owns and controls the lifecycle of the `CPU` object, demonstrating composition.",
        difficulty: 'Medium',
        category: 'Composition',
        hasCode: true
    },
    {
        id: 82,
        question: `What happens when this code is executed?
    \`\`\`java
    class Animal {
        void makeSound() {
            System.out.println("Animal makes sound");
        }
    }
    class Dog extends Animal {
        void makeSound() {
            System.out.println("Dog barks");
        }
    }
    class Cat extends Animal {
        void makeSound() {
            System.out.println("Cat meows");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Animal animal1 = new Dog();
            Animal animal2 = new Cat();
            animal1.makeSound();
            animal2.makeSound();
        }
    }
    \`\`\``,
        options: [
            { text: "Dog barks\nCat meows", isCorrect: true },
            { text: "Animal makes sound\nAnimal makes sound", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates polymorphism where the overridden `makeSound` method is resolved dynamically based on the object type.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 83,
        question: `What type of relationship is demonstrated in this code?
    \`\`\`java
    class Screen {
        void display() {
            System.out.println("Displaying on screen...");
        }
    }
    class Laptop {
        private Screen screen = new Screen();
        void show() {
            screen.display();
            System.out.println("Laptop in use...");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Laptop laptop = new Laptop();
            laptop.show();
        }
    }
    \`\`\``,
        options: [
            { text: "Composition", isCorrect: true },
            { text: "Aggregation", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Encapsulation", isCorrect: false }
        ],
        explanation: "The `Laptop` class owns and manages the `Screen` object, representing composition.",
        difficulty: 'Medium',
        category: 'Composition',
        hasCode: true
    },
    {
        id: 84,
        question: `What is the output of this code?
    \`\`\`java
    class Animal {
        void makeSound() {
            System.out.println("Animal makes a sound");
        }
    }
    class Bird extends Animal {
        void makeSound() {
            System.out.println("Bird chirps");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Animal animal = new Bird();
            animal.makeSound();
        }
    }
    \`\`\``,
        options: [
            { text: "Bird chirps", isCorrect: true },
            { text: "Animal makes a sound", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates runtime polymorphism where the `makeSound` method is dynamically resolved to the `Bird` class implementation.",
        difficulty: 'Easy',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 85,
        question: `What is the purpose of this abstract class?
    \`\`\`java
    abstract class Account {
        abstract double getBalance();
    }
    class SavingsAccount extends Account {
        private double balance;
        SavingsAccount(double balance) {
            this.balance = balance;
        }
        double getBalance() {
            return balance;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Account account = new SavingsAccount(1000);
            System.out.println(account.getBalance());
        }
    }
    \`\`\``,
        options: [
            { text: "1000", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false },
            { text: "Abstract class cannot have instances", isCorrect: false }
        ],
        explanation: "The abstract class `Account` provides a blueprint for subclasses like `SavingsAccount` to implement the `getBalance` method.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 86,
        question: `What happens when this interface is used?
    \`\`\`java
    interface Payment {
        void makePayment(double amount);
    }
    class CreditCardPayment implements Payment {
        public void makePayment(double amount) {
            System.out.println("Payment of " + amount + " made via Credit Card.");
        }
    }
    class PayPalPayment implements Payment {
        public void makePayment(double amount) {
            System.out.println("Payment of " + amount + " made via PayPal.");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Payment payment = new CreditCardPayment();
            payment.makePayment(500);
            payment = new PayPalPayment();
            payment.makePayment(750);
        }
    }
    \`\`\``,
        options: [
            { text: "Payment of 500 made via Credit Card.\nPayment of 750 made via PayPal.", isCorrect: true },
            { text: "Payment of 750 made via PayPal.", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates polymorphism through an interface where different implementations of `makePayment` are invoked dynamically.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 87,
        question: `What type of inheritance is demonstrated here?
    \`\`\`java
    class Vehicle {
        void run() {
            System.out.println("Vehicle is running");
        }
    }
    class Truck extends Vehicle {
        void load() {
            System.out.println("Truck is loading");
        }
    }
    class Bike extends Vehicle {
        void balance() {
            System.out.println("Bike is balancing");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Truck truck = new Truck();
            Bike bike = new Bike();
            truck.run();
            truck.load();
            bike.run();
            bike.balance();
        }
    }
    \`\`\``,
        options: [
            { text: "Hierarchical Inheritance", isCorrect: true },
            { text: "Multilevel Inheritance", isCorrect: false },
            { text: "Single Inheritance", isCorrect: false },
            { text: "Composition", isCorrect: false }
        ],
        explanation: "Multiple child classes (`Truck` and `Bike`) inherit from a single parent class (`Vehicle`), representing hierarchical inheritance.",
        difficulty: 'Medium',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 88,
        question: `What is encapsulated in this code?
    \`\`\`java
    class Employee {
        private String name;
        private double salary;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public double getSalary() {
            return salary;
        }
        public void setSalary(double salary) {
            if (salary > 0) {
                this.salary = salary;
            }
        }
    }
    public class Test {
        public static void main(String[] args) {
            Employee emp = new Employee();
            emp.setName("John");
            emp.setSalary(5000);
            System.out.println(emp.getName() + " earns " + emp.getSalary());
        }
    }
    \`\`\``,
        options: [
            { text: "John earns 5000", isCorrect: true },
            { text: "John earns 0", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The `name` and `salary` fields are private and accessed via getter and setter methods, demonstrating encapsulation.",
        difficulty: 'Easy',
        category: 'Encapsulation',
        hasCode: true
    },
    {
        id: 89,
        question: `What will this program print?
    \`\`\`java
    abstract class Shape {
        abstract double area();
    }
    class Rectangle extends Shape {
        private double length, width;
        Rectangle(double length, double width) {
            this.length = length;
            this.width = width;
        }
        double area() {
            return length * width;
        }
    }
    class Circle extends Shape {
        private double radius;
        Circle(double radius) {
            this.radius = radius;
        }
        double area() {
            return Math.PI * radius * radius;
        }
    }
    public class Test {
        public static void main(String[] args) {
            Shape shape1 = new Rectangle(5, 10);
            Shape shape2 = new Circle(7);
            System.out.println(shape1.area());
            System.out.println(shape2.area());
        }
    }
    \`\`\``,
        options: [
            { text: "50.0\n153.93804002589985", isCorrect: true },
            { text: "50.0\n49.0", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates abstraction where the `area` method is implemented differently in each subclass.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 90,
        question: `What type of relationship is demonstrated in this code?
    \`\`\`java
    class Engine {
        void start() {
            System.out.println("Engine starts");
        }
    }
    class Car {
        private Engine engine;
        Car(Engine engine) {
            this.engine = engine;
        }
        void drive() {
            engine.start();
            System.out.println("Car is driving");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Engine engine = new Engine();
            Car car = new Car(engine);
            car.drive();
        }
    }
    \`\`\``,
        options: [
            { text: "Aggregation", isCorrect: true },
            { text: "Composition", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Encapsulation", isCorrect: false }
        ],
        explanation: "The `Car` class uses the `Engine` object but does not control its lifecycle, representing aggregation.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 91,
        question: `What happens in this example of polymorphism?
    \`\`\`java
    class Animal {
        void eat() {
            System.out.println("Animal eats");
        }
    }
    class Lion extends Animal {
        void eat() {
            System.out.println("Lion eats meat");
        }
    }
    class Deer extends Animal {
        void eat() {
            System.out.println("Deer eats grass");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Animal animal1 = new Lion();
            Animal animal2 = new Deer();
            animal1.eat();
            animal2.eat();
        }
    }
    \`\`\``,
        options: [
            { text: "Lion eats meat\nDeer eats grass", isCorrect: true },
            { text: "Animal eats\nAnimal eats", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates runtime polymorphism where the `eat` method is overridden and dynamically resolved based on the object type.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 92,
        question: `What is demonstrated in this abstraction example?
    \`\`\`java
    abstract class Vehicle {
        abstract void run();
    }
    class Car extends Vehicle {
        void run() {
            System.out.println("Car is running");
        }
    }
    class Bike extends Vehicle {
        void run() {
            System.out.println("Bike is running");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Vehicle car = new Car();
            Vehicle bike = new Bike();
            car.run();
            bike.run();
        }
    }
    \`\`\``,
        options: [
            { text: "Car is running\nBike is running", isCorrect: true },
            { text: "Vehicle is running\nVehicle is running", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates abstraction where the abstract method `run` is implemented differently in each subclass.",
        difficulty: 'Medium',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 93,
        question: `What type of inheritance is used in this code?
    \`\`\`java
    class Animal {
        void live() {
            System.out.println("Animal lives");
        }
    }
    class Mammal extends Animal {
        void giveBirth() {
            System.out.println("Mammal gives birth");
        }
    }
    class Human extends Mammal {
        void speak() {
            System.out.println("Human speaks");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Human human = new Human();
            human.live();
            human.giveBirth();
            human.speak();
        }
    }
    \`\`\``,
        options: [
            { text: "Multilevel Inheritance", isCorrect: true },
            { text: "Hierarchical Inheritance", isCorrect: false },
            { text: "Single Inheritance", isCorrect: false },
            { text: "Composition", isCorrect: false }
        ],
        explanation: "This demonstrates multilevel inheritance where `Human` inherits from `Mammal`, and `Mammal` inherits from `Animal`.",
        difficulty: 'Medium',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 94,
        question: `What happens when the following code is executed?
    \`\`\`java
    class Parent {
        void display() {
            System.out.println("Parent display");
        }
    }
    class Child extends Parent {
        @Override
        void display() {
            System.out.println("Child display");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Parent obj = new Child();
            obj.display();
        }
    }
    \`\`\``,
        options: [
            { text: "Child display", isCorrect: true },
            { text: "Parent display", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates runtime polymorphism where the `display` method in the `Child` class overrides the method in `Parent`.",
        difficulty: 'Easy',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 95,
        question: `What is the purpose of encapsulation in this example?
    \`\`\`java
    class Product {
        private String name;
        private double price;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public double getPrice() {
            return price;
        }
        public void setPrice(double price) {
            if (price > 0) {
                this.price = price;
            }
        }
    }
    public class Test {
        public static void main(String[] args) {
            Product product = new Product();
            product.setName("Laptop");
            product.setPrice(1000);
            System.out.println(product.getName() + " costs $" + product.getPrice());
        }
    }
    \`\`\``,
        options: [
            { text: "Laptop costs $1000", isCorrect: true },
            { text: "Laptop costs $0", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "The `name` and `price` fields are encapsulated, ensuring controlled access via getter and setter methods.",
        difficulty: 'Easy',
        category: 'Encapsulation',
        hasCode: true
    },
    {
        id: 96,
        question: `What is demonstrated in this polymorphism example?
    \`\`\`java
    interface Animal {
        void sound();
    }
    class Dog implements Animal {
        public void sound() {
            System.out.println("Dog barks");
        }
    }
    class Cat implements Animal {
        public void sound() {
            System.out.println("Cat meows");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Animal dog = new Dog();
            Animal cat = new Cat();
            dog.sound();
            cat.sound();
        }
    }
    \`\`\``,
        options: [
            { text: "Dog barks\nCat meows", isCorrect: true },
            { text: "Animal makes sound\nAnimal makes sound", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "This demonstrates polymorphism through interfaces, where the `sound` method is implemented differently in each class.",
        difficulty: 'Medium',
        category: 'Polymorphism',
        hasCode: true
    },
    {
        id: 97,
        question: `What type of relationship is demonstrated in this code?
    \`\`\`java
    class Library {
        private String name;
        Library(String name) {
            this.name = name;
        }
        String getName() {
            return name;
        }
    }
    class Book {
        private Library library;
        Book(Library library) {
            this.library = library;
        }
        String getLibraryName() {
            return library.getName();
        }
    }
    public class Test {
        public static void main(String[] args) {
            Library library = new Library("City Library");
            Book book = new Book(library);
            System.out.println("The book belongs to " + book.getLibraryName());
        }
    }
    \`\`\``,
        options: [
            { text: "Aggregation", isCorrect: true },
            { text: "Composition", isCorrect: false },
            { text: "Inheritance", isCorrect: false },
            { text: "Encapsulation", isCorrect: false }
        ],
        explanation: "The `Book` class holds a reference to the `Library` class, representing aggregation as the lifecycle of the library is independent.",
        difficulty: 'Medium',
        category: 'Aggregation',
        hasCode: true
    },
    {
        id: 98,
        question: `What is the output of this abstraction example?
    \`\`\`java
    abstract class Instrument {
        abstract void play();
    }
    class Guitar extends Instrument {
        void play() {
            System.out.println("Playing Guitar");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Instrument guitar = new Guitar();
            guitar.play();
        }
    }
    \`\`\``,
        options: [
            { text: "Playing Guitar", isCorrect: true },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false },
            { text: "No Output", isCorrect: false }
        ],
        explanation: "This demonstrates abstraction where the `play` method is defined in the abstract class and implemented in the subclass.",
        difficulty: 'Easy',
        category: 'Abstraction',
        hasCode: true
    },
    {
        id: 99,
        question: `What type of inheritance is used here?
    \`\`\`java
    class Shape {
        void display() {
            System.out.println("Displaying shape");
        }
    }
    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing circle");
        }
    }
    class Square extends Shape {
        void draw() {
            System.out.println("Drawing square");
        }
    }
    public class Test {
        public static void main(String[] args) {
            Circle circle = new Circle();
            Square square = new Square();
            circle.display();
            circle.draw();
            square.display();
            square.draw();
        }
    }
    \`\`\``,
        options: [
            { text: "Hierarchical Inheritance", isCorrect: true },
            { text: "Multilevel Inheritance", isCorrect: false },
            { text: "Single Inheritance", isCorrect: false },
            { text: "Composition", isCorrect: false }
        ],
        explanation: "Multiple subclasses (`Circle` and `Square`) inherit from the same parent class (`Shape`), demonstrating hierarchical inheritance.",
        difficulty: 'Medium',
        category: 'Inheritance',
        hasCode: true
    },
    {
        id: 100,
        question: `What is the purpose of encapsulation in this example?
    \`\`\`java
    class BankAccount {
        private double balance;
        public double getBalance() {
            return balance;
        }
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
            }
        }
        public void withdraw(double amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
            }
        }
    }
    public class Test {
        public static void main(String[] args) {
            BankAccount account = new BankAccount();
            account.deposit(1000);
            account.withdraw(500);
            System.out.println("Remaining Balance: " + account.getBalance());
        }
    }
    \`\`\``,
        options: [
            { text: "Remaining Balance: 500", isCorrect: true },
            { text: "Remaining Balance: 0", isCorrect: false },
            { text: "Compilation Error", isCorrect: false },
            { text: "Runtime Error", isCorrect: false }
        ],
        explanation: "Encapsulation ensures the balance is accessed and modified only through controlled methods, promoting data security.",
        difficulty: 'Easy',
        category: 'Encapsulation',
        hasCode: true
    }
  
  ];
  