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


export const controlFlowMCQs = [
  {
    id: 1,
    question: "What's the output?\n```java\nint x = 1;\nif(x = 2) { // Note: single =\n    System.out.println(\"True\");\n} else {\n    System.out.println(\"False\");\n}\n```",
    options: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: false },
      { text: "Compilation error", isCorrect: true },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "In Java, assignment (=) in if condition is invalid. Unlike C/C++, if condition must be boolean.",
    difficulty: 'Medium',
    category: 'If Statement',
    hasCode: true
  },
  {
    id: 2,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i < 2) {\n    i++;\n    continue;\n    System.out.println(i);\n}\nSystem.out.println(\"Final: \" + i);\n```",
    options: [
      { text: "1 2 Final: 2", isCorrect: false },
      { text: "Final: 2", isCorrect: true },
      { text: "Compilation error", isCorrect: false },
      { text: "Unreachable code", isCorrect: false }
    ],
    explanation: "continue skips rest of loop body. println inside loop is unreachable but compiler doesn't error. Only 'Final: 2' is printed.",
    difficulty: 'Easy',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 3,
    question: "What's the output?\n```java\nint x = 3;\nswitch(x) {\n    case 1: System.out.print(\"A\");\n    case 2: System.out.print(\"B\");\n    case 3: System.out.print(\"C\");\n    case 4: System.out.print(\"D\");\n}\n```",
    options: [
      { text: "C", isCorrect: false },
      { text: "CD", isCorrect: true },
      { text: "BCD", isCorrect: false },
      { text: "ABCD", isCorrect: false }
    ],
    explanation: "Without break statements, switch falls through. Starting from matching case 3, executes all following cases.",
    difficulty: 'Easy',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 4,
    question: "What's the output?\n```java\nint i = 0;\nfor(; i < 3; i++) {\n    if(i == 1) {\n        continue;\n    }\n    System.out.print(i);\n    if(i == 2) {\n        break;\n    }\n}\nSystem.out.print(i);\n```",
    options: [
      { text: "023", isCorrect: false },
      { text: "013", isCorrect: false },
      { text: "023", isCorrect: false },
      { text: "023", isCorrect: true }
    ],
    explanation: "Prints 0 (i=0), skips 1 (continue), prints 2 (i=2), breaks, then prints 3 (final i value after break)",
    difficulty: 'Medium',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 5,
    question: "What's wrong?\n```java\nint x = 1;\nswitch(x) {\n    case 1.0: System.out.println(\"One\");\n    case 2.0: System.out.println(\"Two\");\n}\n```",
    options: [
      { text: "Nothing wrong", isCorrect: false },
      { text: "Missing break statements", isCorrect: false },
      { text: "Compilation error: invalid case values", isCorrect: true },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Case values must be constant expressions of same type as switch expression (or convertible to it). Can't use doubles for int switch.",
    difficulty: 'Medium',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 6,
    question: "What's the output?\n```java\nouter: for(int i = 0; i < 3; i++) {\n    for(int j = 0; j < 3; j++) {\n        if(i == j) {\n            continue outer;\n        }\n        System.out.print(i + \"\" + j + \" \");\n    }\n}\n```",
    options: [
      { text: "01 02 10 12 20 21", isCorrect: true },
      { text: "01 02 12 20 21", isCorrect: false },
      { text: "Nothing prints", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Labeled continue skips to next iteration of outer loop when i equals j. Skips when combinations are 00, 11, and 22.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 7,
    question: "What's the output?\n```java\nint x = 10;\nwhile(x > 0) {\n    do {\n        if(x == 5) break;\n        System.out.print(x + \" \");\n    } while(false);\n    x -= 2;\n}\n```",
    options: [
      { text: "10 8 6 4 2", isCorrect: true },
      { text: "10 8 6", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "Infinite loop", isCorrect: false }
    ],
    explanation: "The break only exits the do-while loop. Since do-while has false condition, it runs once per while iteration. When x=5, it skips printing but continues while loop.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 8,
    question: "What's the output?\n```java\nfinal int x = 1;\nint y = 1;\nswitch(y) {\n    case x: System.out.print(\"A\"); break;\n    case x+1: System.out.print(\"B\"); break;\n    case 3: System.out.print(\"C\"); break;\n    default: System.out.print(\"D\");\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: false },
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "D", isCorrect: false }
    ],
    explanation: "Case values must be compile-time constants. 'x' is a final variable with compile-time constant value, so it's valid. x+1 is also a constant expression.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 9,
    question: "What's the output?\n```java\nint i = 0;\nfor(System.out.print(\"A\"); i < 2; System.out.print(\"B\")) {\n    i++;\n    if(i == 1) continue;\n    System.out.print(\"C\");\n}\n```",
    options: [
      { text: "ACBC", isCorrect: false },
      { text: "ABCB", isCorrect: false },
      { text: "ABC", isCorrect: false },
      { text: "ABBC", isCorrect: true }
    ],
    explanation: "A (initialization), then for i=0: B (increment), i=1: continue skips C, B (increment), i=2: prints C, B (increment), loop ends.",
    difficulty: 'Hard',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 10,
    question: "What's the output?\n```java\nint x = 5;\nswitch(x) {\n    case 5: x++;\n    case 6: x += 2;\n    default: x += 3;\n    case 1: x += 4;\n}\nSystem.out.println(x);\n```",
    options: [
      { text: "14", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "15", isCorrect: false },
      { text: "9", isCorrect: false }
    ],
    explanation: "Falls through all cases after 5: x++ (6), x+=2 (8), x+=3 (11), x+=4 (15). Order matters, and default can be anywhere!",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 11,
    question: "What's the output?\n```java\nboolean b = false;\nif(b = true && false) {\n    System.out.print(\"A\");\n} else {\n    System.out.print(\"B\");\n}\nSystem.out.print(b);\n```",
    options: [
      { text: "Btrue", isCorrect: false },
      { text: "Bfalse", isCorrect: true },
      { text: "Afalse", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Operator precedence: (b = (true && false)). First true && false evaluates to false, then b is assigned false. Prints B and then value of b.",
    difficulty: 'Hard',
    category: 'If Statement',
    hasCode: true
  },
  {
    id: 12,
    question: "What's the output?\n```java\nint i = 0;\nouter:\nwhile(true) {\n    i++;\n    inner:\n    for(int j = 0; j < 10; j++) {\n        if(j == 3) break outer;\n        if(j == 2) continue inner;\n        System.out.print(j);\n    }\n}\nSystem.out.print(i);\n```",
    options: [
      { text: "0111", isCorrect: true },
      { text: "01121", isCorrect: false },
      { text: "011", isCorrect: false },
      { text: "Infinite loop", isCorrect: false }
    ],
    explanation: "Prints 0,1 (j=0,1), skips 2 (continue), prints nothing for j=2, breaks at j=3, then prints i=1.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 13,
    question: "What's the output?\n```java\nint x = 0;\ndo while(x < 1)\n    System.out.print(x++);\nwhile(x < 2);\n```",
    options: [
      { text: "01", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "Compilation error", isCorrect: true },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "This is a syntax error. 'do while' is not valid - it should be 'do { } while();'. The code structure is ambiguous.",
    difficulty: 'Hard',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 14,
    question: "What's the output?\n```java\nint x = 3;\nswitch(x) {\n    default: System.out.print(\"D\");\n    case 0: System.out.print(\"A\");\n    case 1: System.out.print(\"B\"); break;\n    case 2: System.out.print(\"C\");\n}\n```",
    options: [
      { text: "DAB", isCorrect: true },
      { text: "D", isCorrect: false },
      { text: "AB", isCorrect: false },
      { text: "C", isCorrect: false }
    ],
    explanation: "When no case matches, default is executed. Since default is not at the end and has no break, it falls through to cases 0 and 1.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 15,
    question: "What's the output?\n```java\nint i = 5;\nwhile(i-- > 0) {\n    if(i == 2) continue;\n    System.out.print(i);\n    if(i == 4) break;\n}\n```",
    options: [
      { text: "4", isCorrect: true },
      { text: "43", isCorrect: false },
      { text: "432", isCorrect: false },
      { text: "4310", isCorrect: false }
    ],
    explanation: "i starts at 5, decrements to 4, prints 4, then breaks. The continue at i==2 is never reached because of the break.",
    difficulty: 'Hard',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 16,
    question: "What's the output?\n```java\nint i = 0;\nfor(;;) {\n    if(++i > 5) break;\n    if(i % 2 == 0) continue;\n    System.out.print(i);\n}\n```",
    options: [
      { text: "135", isCorrect: true },
      { text: "1234", isCorrect: false },
      { text: "123", isCorrect: false },
      { text: "Infinite loop", isCorrect: false }
    ],
    explanation: "Infinite for loop with break condition. Skips even numbers with continue. Prints 1,3,5 before breaking at 6.",
    difficulty: 'Hard',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 17,
    question: "What's the output?\n```java\nint x = 0;\nswitch(x) {\n    case 0: System.out.print(\"A\");\n    case 128: System.out.print(\"B\");\n    case 'a': System.out.print(\"C\");\n    case 0x10: System.out.print(\"D\");\n}\n```",
    options: [
      { text: "ABCD", isCorrect: false },
      { text: "ABC", isCorrect: false },
      { text: "ABCD", isCorrect: true },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "All case values are valid integer literals: 0, 128, 'a' (97), 0x10 (16). Falls through all cases from 0.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 18,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i++ < 2) {\n    outer: for(int j = 0; j < 2; j++) {\n        for(int k = 0; k < 2; k++) {\n            if(i == 1) continue outer;\n            System.out.print(i);\n        }\n    }\n}\n```",
    options: [
      { text: "22", isCorrect: true },
      { text: "222", isCorrect: false },
      { text: "2222", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "When i=1, continue outer skips inner loops. When i=2, prints '2' twice (2 iterations of k loop in first j iteration, then continue outer).",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 19,
    question: "What's the output?\n```java\nint x = 1, y = 1;\ndo {\n    x++;\n    y += x;\n    if(y > 4) break;\n    continue;\n} while(x < 5);\nSystem.out.println(x + \" \" + y);\n```",
    options: [
      { text: "3 6", isCorrect: true },
      { text: "2 3", isCorrect: false },
      { text: "4 7", isCorrect: false },
      { text: "5 15", isCorrect: false }
    ],
    explanation: "First iteration: x=2,y=3. Second iteration: x=3,y=6. Breaks because y>4. continue is unreachable.",
    difficulty: 'Hard',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 20,
    question: "What's the output?\n```java\nint x = 1;\nswitch(x) {\n    case 1: x = 2;\n    case 2: x = 3;\n    case 3: x = 4;\n    default: x = 5;\n    case 4: x = 6;\n}\nSystem.out.println(x);\n```",
    options: [
      { text: "2", isCorrect: false },
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: true },
      { text: "3", isCorrect: false }
    ],
    explanation: "Falls through all cases from 1, executing each assignment. Final value is from case 4, which is 6.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 21,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i < 2) {\n    for(int j = 0; j < 2; j++) {\n        if(i == j) break;\n        continue;\n    }\n    i++;\n    System.out.print(i);\n}\n```",
    options: [
      { text: "12", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "continue is unreachable due to break when i==j. Inner loop breaks immediately when i=j=0, then prints 1. Second iteration completes normally, prints 2.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 22,
    question: "What's the output?\n```java\nint x = 0;\nswitch(x) {\n    case 0:\n        int y = 10;\n        break;\n    case 1:\n        y = 20;\n        System.out.print(y);\n}\n```",
    options: [
      { text: "10", isCorrect: false },
      { text: "20", isCorrect: false },
      { text: "Compilation error", isCorrect: true },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Variable y is declared in case 0's scope but used in case 1. Variables declared in one case are not accessible in other cases.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 23,
    question: "What's the output?\n```java\nint i = 0;\ndo {\n    i++;\n    if(i == 1) continue;\n    i++;\n} while(i <= 5);\nSystem.out.println(i);\n```",
    options: [
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "4", isCorrect: false }
    ],
    explanation: "When i=1, continue skips i++. Values: 0→1(continue)→2→4→6→7(exit). Final value is 7.",
    difficulty: 'Hard',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 24,
    question: "What's the output?\n```java\nint x = 1, y = 1;\nouter: while(x < 3) {\n    x++;\n    inner: while(y < 3) {\n        y++;\n        if(y == 2) continue outer;\n        System.out.print(x + \"\" + y);\n    }\n}\n```",
    options: [
      { text: "Nothing prints", isCorrect: true },
      { text: "22", isCorrect: false },
      { text: "21", isCorrect: false },
      { text: "23", isCorrect: false }
    ],
    explanation: "y becomes 2 in first iteration of inner loop, continues to outer loop. In next iteration, y is still 2, same happens. Never reaches print.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 25,
    question: "What's the output?\n```java\nint x = 1;\nswitch(x + 1) {\n    case 1: System.out.print(1);\n    case 2: System.out.print(2);\n    case 3: System.out.print(3);\n    default: System.out.print(4);\n    case 0: System.out.print(5);\n}\n```",
    options: [
      { text: "12345", isCorrect: false },
      { text: "2345", isCorrect: true },
      { text: "234", isCorrect: false },
      { text: "345", isCorrect: false }
    ],
    explanation: "x+1 is 2, matches case 2. Falls through all subsequent cases including default and case 0.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 26,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i < 2) {\n    i++;\n    System.out.print(i);\n    if(i == 1) {\n        i++;\n        continue;\n    }\n}\n```",
    options: [
      { text: "12", isCorrect: false },
      { text: "13", isCorrect: false },
      { text: "1", isCorrect: true },
      { text: "123", isCorrect: false }
    ],
    explanation: "When i=1, prints 1, then i++ makes it 2, continue skips to condition which is false (2 not < 2), so loop ends.",
    difficulty: 'Hard',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 27,
    question: "What's the output?\n```java\nint x = 0;\nswitch(x) {\n    case 0:\n        int y = 1;\n        System.out.print(y);\n    case 1:\n        y = 2;\n        System.out.print(y);\n        break;\n    default:\n        System.out.print(\"default\");\n}\n```",
    options: [
      { text: "12", isCorrect: false },
      { text: "11", isCorrect: false },
      { text: "Compilation error", isCorrect: true },
      { text: "Runtime error", isCorrect: false }
    ],
    explanation: "Variable y's scope is limited to case 0. Attempting to use y in case 1 without declaration causes compilation error.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 28,
    question: "What's the output?\n```java\nint i = 0;\nouter:\nfor(; i < 3; i++) {\n    inner:\n    for(int j = 0; j < 2; j++) {\n        if(i == j) {\n            continue outer;\n        }\n        System.out.print(i + \"\" + j);\n    }\n}\n```",
    options: [
      { text: "01 10 21 20", isCorrect: true },
      { text: "01 10 20", isCorrect: false },
      { text: "00 01 11 21", isCorrect: false },
      { text: "01 11 21", isCorrect: false }
    ],
    explanation: "When i=j, continues to outer loop. Prints: i=0,j=1 then i=1,j=0 then i=2,j=0,1",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 29,
    question: "What's the output?\n```java\nint x = 1;\nswitch(x) {\n    default:\n    case 0:\n        x++;\n    case 1:\n        x += 2;\n        break;\n    case 2:\n        x *= 2;\n}\nSystem.out.println(x);\n```",
    options: [
      { text: "3", isCorrect: true },
      { text: "4", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "6", isCorrect: false }
    ],
    explanation: "Matches case 1, adds 2 to x (1+2=3), then breaks. Default and case 2 are not executed.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 30,
    question: "What's the output?\n```java\nint i = 0;\ndo {\n    if(i++ == 0) continue;\n    System.out.print(i);\n} while(i < 3);\n```",
    options: [
      { text: "23", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "1", isCorrect: false }
    ],
    explanation: "First iteration: i=0, continue skips print, i becomes 1. Then prints 2,3 in next iterations.",
    difficulty: 'Medium',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 31,
    question: "What's the output?\n```java\nint i = 0;\nouter: while(true) {\n    i++;\n    middle: for(int j = 0; j < 3; j++) {\n        if(j == 1) continue outer;\n        inner: for(int k = 0; k < 3; k++) {\n            if(i * j * k > 2) break middle;\n            System.out.print(i + \"\" + j + \"\" + k + \" \");\n        }\n    }\n    if(i > 2) break;\n}\n```",
    options: [
      { text: "100 101 102 200 ", isCorrect: true },
      { text: "100 101 102 ", isCorrect: false },
      { text: "100 101 102 201 202 ", isCorrect: false },
      { text: "Infinite loop", isCorrect: false }
    ],
    explanation: "Complex nested loop: i=1: prints 100,101,102, then j=1 continues outer. i=2: prints 200, then j=1 continues outer. i=3: breaks outer loop.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 32,
    question: "What's the output?\n```java\nint x = 1, y = 1;\nswitch(x) {\n    case 1:\n        switch(y) {\n            case 1: System.out.print(\"A\");\n            case 2: System.out.print(\"B\"); break;\n            case 3: System.out.print(\"C\");\n        }\n    case 2:\n        switch(y) {\n            case 1: System.out.print(\"D\");\n            default: System.out.print(\"E\");\n        }\n}\n```",
    options: [
      { text: "AB", isCorrect: false },
      { text: "ABDE", isCorrect: true },
      { text: "ABCD", isCorrect: false },
      { text: "ADE", isCorrect: false }
    ],
    explanation: "Nested switch: First prints AB (y=1, falls through to B, then breaks). Outer switch falls through to case 2, prints DE (y=1 falls through to default).",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 33,
    question: "What's the output?\n```java\nint i = 0;\ndo {\n    i++;\n    if(i == 2) continue;\n    do {\n        i++;\n        if(i == 4) break;\n        System.out.print(i + \" \");\n    } while(i < 5);\n} while(i < 6);\n```",
    options: [
      { text: "2 3 5 ", isCorrect: true },
      { text: "2 3 ", isCorrect: false },
      { text: "2 3 4 ", isCorrect: false },
      { text: "2 3 4 5 ", isCorrect: false }
    ],
    explanation: "Complex nested do-while: First prints 2, then i=2(continue), i=3(prints 3), i=4(break), i=5(prints 5), i=6(exit).",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 34,
    question: "What's the output?\n```java\nint x = 0;\nloop: {\n    try {\n        for(; x < 3; x++) {\n            if(x == 1) break loop;\n            System.out.print(x);\n        }\n    } finally {\n        System.out.print(\"F\");\n    }\n}\nSystem.out.print(x);\n```",
    options: [
      { text: "0F1", isCorrect: true },
      { text: "01F1", isCorrect: false },
      { text: "0F", isCorrect: false },
      { text: "F1", isCorrect: false }
    ],
    explanation: "Labeled block with try-finally: Prints 0, then x=1 breaks loop, finally executes printing F, then prints x(1).",
    difficulty: 'Hard',
    category: 'Control Flow',
    hasCode: true
  },
  {
    id: 35,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i < 3) {\n    i++;\n    loop: for(int j = 0; j < 2; j++) {\n        for(int k = 0; k < 2; k++) {\n            if(i * k == 2) break loop;\n            if(j * k == 1) continue loop;\n            System.out.print(i + \"\" + j + \"\" + k + \" \");\n        }\n    }\n}\n```",
    options: [
      { text: "100 110 200 300 ", isCorrect: true },
      { text: "100 200 300 ", isCorrect: false },
      { text: "100 110 200 210 300 310 ", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Complex loop with break/continue to label: i=1: prints 100,110. i=2: k=1 makes i*k=2, breaks loop. i=3: same pattern.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 36,
    question: "What's the output?\n```java\nint i = 0;\nouter: for(;;) {\n    i++;\n    inner: while(true) {\n        if(i > 3) break outer;\n        continue outer;\n        System.out.print(i);\n    }\n    System.out.print(\"X\");\n}\nSystem.out.print(i);\n```",
    options: [
      { text: "4", isCorrect: true },
      { text: "X4", isCorrect: false },
      { text: "XXX4", isCorrect: false },
      { text: "Infinite loop", isCorrect: false }
    ],
    explanation: "continue outer skips 'X' print. Loop increments i until i>3. Unreachable print in inner loop. Final i is 4.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 37,
    question: "What's the output?\n```java\nint x = 1;\nswitch(x) {\n    case 1: try {\n        System.out.print(\"A\");\n        if(x == 1) break;\n        System.out.print(\"B\");\n    } finally {\n        System.out.print(\"C\");\n    }\n    case 2: System.out.print(\"D\");\n}\n```",
    options: [
      { text: "ACD", isCorrect: true },
      { text: "AC", isCorrect: false },
      { text: "ABCD", isCorrect: false },
      { text: "AD", isCorrect: false }
    ],
    explanation: "Prints A, then break triggers finally block printing C, then falls through to case 2 printing D.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 38,
    question: "What's the output?\n```java\nint i = 0;\ndo while(i < 3)\n    label: {\n        i++;\n        if(i == 2) break label;\n        System.out.print(i);\n    }\nwhile(i < 4);\nSystem.out.print(\"End\" + i);\n```",
    options: [
      { text: "13End4", isCorrect: true },
      { text: "1End2", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "13End3", isCorrect: false }
    ],
    explanation: "Prints 1, i=2(breaks label), i=3(prints 3), i=4(exits). break label only breaks the block, not the loop.",
    difficulty: 'Hard',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 39,
    question: "What's the output?\n```java\nint x = 0;\nloop: {\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            x++;\n            if(i == j) continue;\n            if(x > 4) break loop;\n            System.out.print(x);\n        }\n    }\n}\nSystem.out.print(\"End\" + x);\n```",
    options: [
      { text: "234End5", isCorrect: true },
      { text: "234End6", isCorrect: false },
      { text: "123End4", isCorrect: false },
      { text: "12345End6", isCorrect: false }
    ],
    explanation: "Skip when i=j (0,0 1,1 2,2). Prints x=2,3,4, breaks at x=5. Complex interaction of continue and break loop.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 40,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i < 3) switch(i++) {\n    default: continue;\n    case 1: System.out.print(i + \"\");\n    case 0: System.out.print(i + \"\");\n}\n```",
    options: [
      { text: "122", isCorrect: true },
      { text: "012", isCorrect: false },
      { text: "11", isCorrect: false },
      { text: "Infinite loop", isCorrect: false }
    ],
    explanation: "Complex switch in while: i=0(falls through, prints 1), i=1(prints 2,2), i=2(default continues). Very tricky post-increment interaction.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 41,
    question: "What's the output?\n```java\nint x = 0;\ntry {\n    loop: for(;x < 3;x++) {\n        try {\n            if(x == 0) continue;\n            if(x == 1) break loop;\n            System.out.print(x);\n        } finally {\n            System.out.print(\"F\");\n        }\n    }\n} finally {\n    System.out.print(x);\n}\n```",
    options: [
      { text: "FF1", isCorrect: true },
      { text: "F1", isCorrect: false },
      { text: "FF2", isCorrect: false },
      { text: "FFF2", isCorrect: false }
    ],
    explanation: "x=0(continue executes finally F), x=1(break executes finally F), outer finally prints 1. Complex finally with loop control.",
    difficulty: 'Hard',
    category: 'Control Flow',
    hasCode: true
  },
  {
    id: 42,
    question: "What's the output?\n```java\nint i = 0;\nouter: do {\n    i++;\n    inner: do {\n        if(i == 1) continue outer;\n        if(i == 2) break inner;\n        if(i == 3) break outer;\n        System.out.print(i);\n    } while(true);\n    System.out.print(\"X\");\n} while(i < 4);\n```",
    options: [
      { text: "X", isCorrect: true },
      { text: "2X", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "2X3", isCorrect: false }
    ],
    explanation: "i=1(continues outer), i=2(breaks inner, prints X), i=3(breaks outer). Very tricky nested do-while with multiple breaks.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 43,
    question: "What's the output?\n```java\nint x = 1;\nswitch(x) {\n    case 1 -> {\n        System.out.print(\"A\");\n        if(x == 1) yield;\n        System.out.print(\"B\");\n    }\n    case 2 -> System.out.print(\"C\");\n}\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "AB", isCorrect: false },
      { text: "AC", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Using new switch expression syntax. yield without value in arrow case is like break in traditional switch. B is unreachable.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 44,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i < 3) {\n    int j = i++;\n    outer: do {\n        j++;\n        inner: do {\n            if(j == 2) continue outer;\n            System.out.print(j);\n        } while(false);\n        System.out.print(\"X\");\n    } while(j < 2);\n}\n```",
    options: [
      { text: "1X3X4X", isCorrect: true },
      { text: "1X2X3X", isCorrect: false },
      { text: "123X", isCorrect: false },
      { text: "1X3X", isCorrect: false }
    ],
    explanation: "Complex nested do-while with continue to label. Very tricky interaction between i, j and loop controls.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 45,
    question: "What's the output?\n```java\nint x = 0;\nswitch(x) {\n    case 0: {\n        int y = 1;\n        System.out.print(y);\n    }\n    case 1: {\n        int y = 2;\n        System.out.print(y);\n    }\n}\n```",
    options: [
      { text: "12", isCorrect: true },
      { text: "11", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "22", isCorrect: false }
    ],
    explanation: "Block scoping allows redeclaration of y. Each case has its own scope due to blocks. Falls through printing both values.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 46,
    question: "What's the output?\n```java\nint i = 0;\nouter: for(;;) {\n    try {\n        while(true) {\n            i++;\n            if(i == 2) continue outer;\n            if(i == 3) throw new Exception();\n            if(i == 4) break outer;\n            System.out.print(i);\n        }\n    } catch(Exception e) {\n        System.out.print(\"E\");\n        continue outer;\n    }\n}\n```",
    options: [
      { text: "1E", isCorrect: true },
      { text: "1", isCorrect: false },
      { text: "12E", isCorrect: false },
      { text: "Infinite loop", isCorrect: false }
    ],
    explanation: "Prints 1, i=2(continues), i=3(throws exception, prints E, continues), i=4(breaks outer). Complex exception with loop control.",
    difficulty: 'Hard',
    category: 'Control Flow',
    hasCode: true
  },
  {
    id: 47,
    question: "What's the output?\n```java\nint x = 1;\nswitch(x) {\n    case 1 -> {\n        System.out.print(\"A\");\n        if(x == 1) yield;\n        System.out.print(\"B\");\n    }\n    case 2 -> System.out.print(\"C\");\n}\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "AB", isCorrect: false },
      { text: "AC", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Using new switch expression syntax. yield without value in arrow case is like break in traditional switch. B is unreachable.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 48,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i < 3) {\n    int j = i++;\n    outer: do {\n        j++;\n        inner: do {\n            if(j == 2) continue outer;\n            System.out.print(j);\n        } while(false);\n        System.out.print(\"X\");\n    } while(j < 2);\n}\n```",
    options: [
      { text: "1X3X4X", isCorrect: true },
      { text: "1X2X3X", isCorrect: false },
      { text: "123X", isCorrect: false },
      { text: "1X3X", isCorrect: false }
    ],
    explanation: "Complex nested do-while with continue to label. Very tricky interaction between i, j and loop controls.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 49,
    question: "What's the output?\n```java\nint x = 1;\nswitch(x) {\n    case 1 -> {\n        System.out.print(\"A\");\n        if(x == 1) yield;\n        System.out.print(\"B\");\n    }\n    case 2 -> System.out.print(\"C\");\n}\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "AB", isCorrect: false },
      { text: "AC", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Using new switch expression syntax. yield without value in arrow case is like break in traditional switch. B is unreachable.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 50,
    question: "What's the output?\n```java\nint i = 0;\nwhile(i < 3) {\n    int j = i++;\n    outer: do {\n        j++;\n        inner: do {\n            if(j == 2) continue outer;\n            System.out.print(j);\n        } while(false);\n        System.out.print(\"X\");\n    } while(j < 2);\n}\n```",
    options: [
      { text: "1X3X4X", isCorrect: true },
      { text: "1X2X3X", isCorrect: false },
      { text: "123X", isCorrect: false },
      { text: "1X3X", isCorrect: false }
    ],
    explanation: "Complex nested do-while with continue to label. Very tricky interaction between i, j and loop controls.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 51,
    question: "What's the output?\n```java\nint x = 5;\nif (x > 0)\n    if (x < 10)\n        System.out.println(\"A\");\n    else\n        System.out.println(\"B\");\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "Compilation error", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "This is a classic 'dangling else' problem. The inner `if` (x < 10) gets the `else`, so 'A' is printed because x > 0 and x < 10.",
    difficulty: 'Hard',
    category: 'If Statement',
    hasCode: true
  },
  {
    id: 52,
    question: "What's the output?\n```java\nint x = 10;\nif (x > 5) {\n    System.out.println(\"A\");\n} else if (x > 8) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"C\");\n}\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The first `if` condition is true (x > 5), so the other conditions (`else if` and `else`) are not evaluated. 'A' is printed.",
    difficulty: 'Medium',
    category: 'If-Else Ladder',
    hasCode: true
  },
  {
    id: 53,
    question: "What's the output?\n```java\nint x = 3;\nswitch(x) {\n    case 1: x += 1;\n    case 3: x += 2;\n    case 5: x += 3;\n    default: x += 4;\n}\nSystem.out.println(x);\n```",
    options: [
      { text: "12", isCorrect: true },
      { text: "9", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Since there are no break statements, execution falls through all cases from `case 3`. Result: `x = 3 + 2 + 3 + 4 = 12`.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 54,
    question: "What's the output?\n```java\nfor (int i = 0; i < 3; i++) {\n    if (i == 1) break;\n    System.out.print(i);\n}\nSystem.out.print(\"Done\");\n```",
    options: [
      { text: "0Done", isCorrect: true },
      { text: "01Done", isCorrect: false },
      { text: "Done", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop breaks when `i == 1`, so only 0 is printed. After the loop ends, 'Done' is printed.",
    difficulty: 'Medium',
    category: 'Loops',
    hasCode: true
  },
  {
    id: 55,
    question: "What's the output?\n```java\nint x = 5;\ndo {\n    System.out.println(\"A\");\n    if (x-- == 4) continue;\n} while (x > 0);\n```",
    options: [
      { text: "Infinite loop", isCorrect: false },
      { text: "AA", isCorrect: false },
      { text: "AAA", isCorrect: true },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The `continue` doesn't cause an infinite loop because `x--` is still decremented. The loop runs three times before `x > 0` becomes false.",
    difficulty: 'Hard',
    category: 'Do-While',
    hasCode: true
  },
  {
    id: 56,
    question: "What's the output?\n```java\nint x = 1;\nswitch (x) {\n    case 1: System.out.print(\"A\");\n    default: System.out.print(\"B\");\n    case 2: System.out.print(\"C\");\n}\n```",
    options: [
      { text: "ABC", isCorrect: true },
      { text: "AB", isCorrect: false },
      { text: "AC", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Case 1 matches, so 'A' is printed. Falls through to default ('B') and then to case 2 ('C').",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 57,
    question: "What's the output?\n```java\nint i = 0;\nwhile (i++ < 3) {\n    if (i == 2) continue;\n    System.out.print(i);\n}\n```",
    options: [
      { text: "13", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "When `i == 2`, `continue` skips the print statement. Only 1 and 3 are printed.",
    difficulty: 'Hard',
    category: 'While',
    hasCode: true
  },
  {
    id: 58,
    question: "What's the output?\n```java\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        if (i == j) break;\n        System.out.print(i + \"\" + j);\n    }\n}\n```",
    options: [
      { text: "01 02 12 21", isCorrect: true },
      { text: "00 01 02", isCorrect: false },
      { text: "01 12 21", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Break exits the inner loop when `i == j`. Otherwise, the pairs (i, j) are printed.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 59,
    question: "What's the output?\n```java\nint x = 10;\nif (x > 5) {\n    System.out.print(\"A\");\n    return;\n}\nSystem.out.print(\"B\");\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "AB", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`return` exits the method after printing 'A'. The statement to print 'B' is not executed.",
    difficulty: 'Medium',
    category: 'Return',
    hasCode: true
  },
  {
    id: 60,
    question: "What's the output?\n```java\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 2; j++) {\n        if (i == 0 && j == 1) break;\n        System.out.print(i + \"\" + j);\n    }\n}\n```",
    options: [
      { text: "00 10 11", isCorrect: false },
      { text: "00 10", isCorrect: true },
      { text: "00", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "Break exits the inner loop when `i == 0 && j == 1`. Execution resumes at the next iteration of the outer loop.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 61,
    question: "What's the output?\n```java\nint x = 3;\nif (x > 2) {\n    System.out.print(\"A\");\n} else if (x > 1) {\n    System.out.print(\"B\");\n} else {\n    System.out.print(\"C\");\n}\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The first `if` condition is true (`x > 2`), so 'A' is printed, and the rest of the conditions are skipped.",
    difficulty: 'Easy',
    category: 'If-Else Ladder',
    hasCode: true
  },
  {
    id: 62,
    question: "What's the output?\n```java\nint x = 5;\nswitch (x) {\n    case 1: System.out.print(\"A\"); break;\n    case 2: System.out.print(\"B\"); break;\n    default: System.out.print(\"C\");\n}\n```",
    options: [
      { text: "C", isCorrect: true },
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Since no case matches, the default block is executed, printing 'C'.",
    difficulty: 'Easy',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 63,
    question: "What's the output?\n```java\nint i = 0;\nfor (; i < 3; i++) {\n    if (i == 2) break;\n    System.out.print(i);\n}\nSystem.out.print(i);\n```",
    options: [
      { text: "012", isCorrect: true },
      { text: "01", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop prints 0 and 1, then breaks when `i == 2`. After the loop, `i` is printed, which is 2.",
    difficulty: 'Medium',
    category: 'For Loop',
    hasCode: true
  },
  {
    id: 64,
    question: "What's the output?\n```java\nint x = 10;\ndo {\n    System.out.print(x);\n    x--;\n} while (x > 7);\n```",
    options: [
      { text: "1098", isCorrect: true },
      { text: "109", isCorrect: false },
      { text: "10987", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The `do-while` loop executes until `x > 7`. The numbers 10, 9, and 8 are printed.",
    difficulty: 'Easy',
    category: 'Do-While Loop',
    hasCode: true
  },
  {
    id: 65,
    question: "What's the output?\n```java\nint x = 5;\nwhile (x-- > 0) {\n    if (x == 2) continue;\n    System.out.print(x);\n}\n```",
    options: [
      { text: "43210", isCorrect: false },
      { text: "43210", isCorrect: false },
      { text: "4310", isCorrect: true },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "When `x == 2`, the `continue` skips printing. The output is '4310'.",
    difficulty: 'Medium',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 66,
    question: "What's the output?\n```java\nint x = 1;\nswitch (x) {\n    case 1: System.out.print(\"A\");\n    default: System.out.print(\"B\");\n    case 2: System.out.print(\"C\");\n}\n```",
    options: [
      { text: "ABC", isCorrect: true },
      { text: "AB", isCorrect: false },
      { text: "AC", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Case 1 matches, so 'A' is printed. Since there is no break, it falls through to default ('B') and case 2 ('C').",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 67,
    question: "What's the output?\n```java\nint x = 5;\nif (x < 5);\nSystem.out.print(\"A\");\nelse\nSystem.out.print(\"B\");\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "The semicolon after the `if` condition creates an empty statement, causing a compilation error because `else` has no matching `if`.",
    difficulty: 'Hard',
    category: 'If Statement',
    hasCode: true
  },
  {
    id: 68,
    question: "What's the output?\n```java\nint x = 0;\nwhile (++x < 5) {\n    System.out.print(x);\n}\n```",
    options: [
      { text: "1234", isCorrect: true },
      { text: "01234", isCorrect: false },
      { text: "12345", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`++x` increments `x` before comparison, so the loop prints 1, 2, 3, and 4.",
    difficulty: 'Easy',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 69,
    question: "What's the output?\n```java\nint x = 2;\ndo {\n    System.out.print(x);\n    x *= 2;\n} while (x < 10);\n```",
    options: [
      { text: "248", isCorrect: true },
      { text: "24", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "24816", isCorrect: false }
    ],
    explanation: "The `do-while` loop executes as long as `x < 10`. The values 2, 4, and 8 are printed.",
    difficulty: 'Easy',
    category: 'Do-While Loop',
    hasCode: true
  },
  {
    id: 70,
    question: "What's the output?\n```java\nint x = 1;\nswitch (x) {\n    case 1: System.out.print(\"A\"); break;\n    case 2: System.out.print(\"B\"); break;\n    default: System.out.print(\"C\");\n}\n```",
    options: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "AB", isCorrect: false }
    ],
    explanation: "Case 1 matches, so 'A' is printed. The break prevents any further execution.",
    difficulty: 'Easy',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 71,
    question: "What's the output?\n```java\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        if (i == j) continue;\n        System.out.print(i + \"\" + j);\n    }\n}\n```",
    options: [
      { text: "01 02 12 21", isCorrect: true },
      { text: "Nothing prints", isCorrect: false },
      { text: "00 01 02", isCorrect: false },
      { text: "11 12", isCorrect: false }
    ],
    explanation: "The `continue` skips printing when `i == j`. The valid pairs are printed.",
    difficulty: 'Medium',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 72,
    question: "What's the output?\n```java\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) continue;\n    System.out.print(i);\n}\n```",
    options: [
      { text: "135", isCorrect: true },
      { text: "12345", isCorrect: false },
      { text: "24", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "The `continue` skips even numbers, so only the odd numbers (1, 3, 5) are printed.",
    difficulty: 'Easy',
    category: 'For Loop',
    hasCode: true
  },
  {
    id: 73,
    question: "What's the output?\n```java\nint x = 10;\nwhile (x > 0) {\n    x--;\n    if (x % 2 == 0) System.out.print(x);\n}\n```",
    options: [
      { text: "86420", isCorrect: true },
      { text: "97531", isCorrect: false },
      { text: "8642", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop decrements `x` and prints it only if it's even. Values printed are 8, 6, 4, 2, 0.",
    difficulty: 'Medium',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 74,
    question: "What's the output?\n```java\nint x = 1;\ndo {\n    x++;\n    if (x == 3) continue;\n    System.out.print(x);\n} while (x < 5);\n```",
    options: [
      { text: "24", isCorrect: true },
      { text: "234", isCorrect: false },
      { text: "12345", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The `continue` skips printing when `x == 3`. Values printed are 2 and 4.",
    difficulty: 'Medium',
    category: 'Do-While Loop',
    hasCode: true
  },
  {
    id: 75,
    question: "What's the output?\n```java\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        if (i + j == 2) break;\n        System.out.print(i + \"\" + j);\n    }\n}\n```",
    options: [
      { text: "001011", isCorrect: true },
      { text: "0011", isCorrect: false },
      { text: "01", isCorrect: false },
      { text: "Nothing prints", isCorrect: false }
    ],
    explanation: "The `break` exits the inner loop when `i + j == 2`. Valid pairs are printed as 00, 01, 10, 11.",
    difficulty: 'Medium',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 76,
    question: "What's the output?\n```java\nint x = 0;\nswitch (x) {\n    case 0:\n    case 1: System.out.print(\"A\");\n    case 2:\n    default: System.out.print(\"B\");\n}\n```",
    options: [
      { text: "ABB", isCorrect: true },
      { text: "AB", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "There are no `break` statements, so execution falls through all cases. Output is 'ABB'.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 77,
    question: "What's the output?\n```java\nfor (int i = 0; i < 3; i++) {\n    if (i == 1) return;\n    System.out.print(i);\n}\nSystem.out.print(\"Done\");\n```",
    options: [
      { text: "0", isCorrect: true },
      { text: "01Done", isCorrect: false },
      { text: "Done", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The `return` exits the method entirely when `i == 1`, so only 0 is printed before the method ends.",
    difficulty: 'Hard',
    category: 'Return',
    hasCode: true
  },
  {
    id: 78,
    question: "What's the output?\n```java\nint x = 3;\nif (x > 5) {\n    System.out.print(\"A\");\n} else {\n    if (x < 2) {\n        System.out.print(\"B\");\n    } else {\n        System.out.print(\"C\");\n    }\n}\n```",
    options: [
      { text: "C", isCorrect: true },
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The first `if` condition is false (`x > 5`), so the `else` block executes. Inside it, `x < 2` is also false, so 'C' is printed.",
    difficulty: 'Medium',
    category: 'If-Else Ladder',
    hasCode: true
  },
  {
    id: 79,
    question: "What's the output?\n```java\nint x = 1;\nfor (; x <= 5; x += 2) {\n    System.out.print(x);\n}\n```",
    options: [
      { text: "135", isCorrect: true },
      { text: "12345", isCorrect: false },
      { text: "15", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop increments `x` by 2 in each iteration, so only 1, 3, and 5 are printed.",
    difficulty: 'Easy',
    category: 'For Loop',
    hasCode: true
  },
  {
    id: 80,
    question: "What's the output?\n```java\nint x = 1;\nwhile (x <= 3) {\n    System.out.print(x);\n    x += 2;\n}\n```",
    options: [
      { text: "13", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop increments `x` by 2 in each iteration, so the values 1 and 3 are printed.",
    difficulty: 'Easy',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 81,
    question: "What's the output?\n```java\nint x = 10;\ndo {\n    x--;\n    if (x == 7) break;\n    System.out.print(x);\n} while (x > 5);\n```",
    options: [
      { text: "987", isCorrect: true },
      { text: "9876", isCorrect: false },
      { text: "10987", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop decrements `x` and prints it until `x == 7`, at which point the `break` exits the loop.",
    difficulty: 'Medium',
    category: 'Do-While Loop',
    hasCode: true
  },
  {
    id: 82,
    question: "What's the output?\n```java\nfor (int i = 0; i < 5; i++) {\n    if (i % 2 == 0) continue;\n    System.out.print(i);\n}\n```",
    options: [
      { text: "135", isCorrect: true },
      { text: "12345", isCorrect: false },
      { text: "24", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "The `continue` skips even numbers, so only 1, 3, and 5 are printed.",
    difficulty: 'Easy',
    category: 'For Loop',
    hasCode: true
  },
  {
    id: 83,
    question: "What's the output?\n```java\nint x = 0;\ndo {\n    System.out.print(x);\n} while (++x < 3);\n```",
    options: [
      { text: "012", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "0123", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "`do-while` executes at least once, printing 0, then increments `x` and continues until `x < 3` is false.",
    difficulty: 'Medium',
    category: 'Do-While Loop',
    hasCode: true
  },
  {
    id: 84,
    question: "What's the output?\n```java\nint i = 0;\nfor (; i < 5; i++) {\n    if (i == 3) break;\n    if (i % 2 == 0) continue;\n    System.out.print(i);\n}\nSystem.out.print(i);\n```",
    options: [
      { text: "12", isCorrect: true },
      { text: "13", isCorrect: false },
      { text: "123", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop prints odd values (1) but stops at `i == 3`. After the loop, `i` is printed as 3.",
    difficulty: 'Hard',
    category: 'For Loop',
    hasCode: true
  },
  {
    id: 85,
    question: "What's the output?\n```java\nint x = 5;\nswitch (x) {\n    default: System.out.print(\"Default\");\n    case 1: System.out.print(\"One\");\n    case 2: System.out.print(\"Two\");\n}\n```",
    options: [
      { text: "DefaultOneTwo", isCorrect: true },
      { text: "Default", isCorrect: false },
      { text: "DefaultOne", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The `default` case executes since no other case matches. Without `break` statements, execution falls through all cases.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 86,
    question: "What's the output?\n```java\nint x = 0;\ndo {\n    x++;\n    if (x % 2 == 0) continue;\n    System.out.print(x);\n} while (x < 5);\n```",
    options: [
      { text: "135", isCorrect: true },
      { text: "12345", isCorrect: false },
      { text: "12", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "The `continue` skips printing even numbers. The odd values (1, 3, 5) are printed.",
    difficulty: 'Medium',
    category: 'Do-While Loop',
    hasCode: true
  },
  {
    id: 87,
    question: "What's the output?\n```java\nint i = 0;\nwhile (true) {\n    if (i++ == 3) break;\n    if (i % 2 == 0) continue;\n    System.out.print(i);\n}\n```",
    options: [
      { text: "135", isCorrect: false },
      { text: "13", isCorrect: false },
      { text: "24", isCorrect: true },
      { text: "No output", isCorrect: false }
    ],
    explanation: "The `continue` skips printing when `i % 2 == 0`. The loop breaks at `i == 3`. Only `2` and `4` are printed.",
    difficulty: 'Hard',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 88,
    question: "What's the output?\n```java\nint x = 1;\nswitch (x) {\n    case 1:\n        System.out.print(\"A\");\n        if (x == 1) break;\n        System.out.print(\"B\");\n    case 2:\n        System.out.print(\"C\");\n}\n```",
    options: [
      { text: "Compilation error", isCorrect: true },
      { text: "A", isCorrect: false },
      { text: "AB", isCorrect: false },
      { text: "AC", isCorrect: false }
    ],
    explanation: "Java requires every case to end in a statement or `break`. The `if` condition after case 1 doesn't satisfy this.",
    difficulty: 'Hard',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 89,
    question: "What's the output?\n```java\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == j) break;\n        System.out.print(i + \"\" + j);\n    }\n}\n```",
    options: [
      { text: "01 02 12 21", isCorrect: true },
      { text: "012", isCorrect: false },
      { text: "021", isCorrect: false },
      { text: "123", isCorrect: false }
    ],
    explanation: "The inner loop breaks when `i == j`. Only pairs where `i != j` are printed.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 90,
    question: "What's the output?\n```java\nint x = 0;\nwhile (++x < 3) {\n    System.out.print(x);\n    if (x == 2) break;\n}\n```",
    options: [
      { text: "12", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "`++x` increments `x` before comparison. Loop prints `1` and `2`, then breaks at `x == 2`.",
    difficulty: 'Medium',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 91,
    question: "What's the output?\n```java\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i + j > 2) break;\n        System.out.print(i + \"\" + j);\n    }\n}\n```",
    options: [
      { text: "00 01 02 10 11 20", isCorrect: true },
      { text: "00 01 10 11 20", isCorrect: false },
      { text: "00 01 02 10 20", isCorrect: false },
      { text: "00 01", isCorrect: false }
    ],
    explanation: "The inner loop breaks when `i + j > 2`. Valid pairs are printed as `00, 01, 02, 10, 11, 20`.",
    difficulty: 'Hard',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 92,
    question: "What's the output?\n```java\nint x = 0;\nwhile (++x < 5) {\n    if (x == 3) continue;\n    System.out.print(x);\n}\n```",
    options: [
      { text: "1245", isCorrect: true },
      { text: "12345", isCorrect: false },
      { text: "135", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "`continue` skips printing when `x == 3`. The loop prints `1, 2, 4, 5`.",
    difficulty: 'Hard',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 93,
    question: "What's the output?\n```java\nint i = 0;\ndo {\n    if (++i % 2 == 0) continue;\n    System.out.print(i);\n} while (i < 5);\n```",
    options: [
      { text: "135", isCorrect: true },
      { text: "12345", isCorrect: false },
      { text: "1245", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "`continue` skips printing even numbers. Only odd values `1, 3, 5` are printed.",
    difficulty: 'Hard',
    category: 'Do-While Loop',
    hasCode: true
  },
  {
    id: 94,
    question: "What's the output?\n```java\nint x = 10;\nwhile (x > 5) {\n    if (--x % 2 != 0) continue;\n    System.out.print(x);\n}\n```",
    options: [
      { text: "8642", isCorrect: true },
      { text: "97531", isCorrect: false },
      { text: "864", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "`continue` skips printing odd numbers. Only even values (8, 6, 4, 2) are printed.",
    difficulty: 'Medium',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 95,
    question: "What's the output?\n```java\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        if (i == 1) break;\n        System.out.print(i + \"\" + j);\n    }\n}\n```",
    options: [
      { text: "001020", isCorrect: true },
      { text: "0010", isCorrect: false },
      { text: "012", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "The inner loop breaks entirely when `i == 1`. For other values of `i`, pairs are printed normally.",
    difficulty: 'Medium',
    category: 'Nested Loops',
    hasCode: true
  },
  {
    id: 96,
    question: "What's the output?\n```java\nint i = 0;\nwhile (i++ < 3) {\n    System.out.print(i);\n    if (i == 2) break;\n}\n```",
    options: [
      { text: "12", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "`i++` increments `i` after the comparison. Loop prints `1` and `2`, then breaks at `i == 2`.",
    difficulty: 'Medium',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 97,
    question: "What's the output?\n```java\nint x = 1;\nswitch (x) {\n    case 0:\n        System.out.print(\"A\");\n    case 1:\n        System.out.print(\"B\");\n    case 2:\n        System.out.print(\"C\");\n    default:\n        System.out.print(\"D\");\n}\n```",
    options: [
      { text: "BCD", isCorrect: true },
      { text: "ABCD", isCorrect: false },
      { text: "D", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "Without `break` statements, execution falls through all cases starting from case 1.",
    difficulty: 'Medium',
    category: 'Switch',
    hasCode: true
  },
  {
    id: 98,
    question: "What's the output?\n```java\nint x = 5;\ndo {\n    System.out.print(x);\n} while (x++ < 5);\n```",
    options: [
      { text: "5", isCorrect: true },
      { text: "56", isCorrect: false },
      { text: "No output", isCorrect: false },
      { text: "Compilation error", isCorrect: false }
    ],
    explanation: "The loop executes at least once. `x++` increments `x` after comparison, so only `5` is printed.",
    difficulty: 'Easy',
    category: 'Do-While Loop',
    hasCode: true
  },
  {
    id: 99,
    question: "What's the output?\n```java\nint x = 0;\nwhile (++x < 5) {\n    if (x == 3) break;\n    System.out.print(x);\n}\n```",
    options: [
      { text: "12", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "`++x` increments `x` before comparison. Loop prints `1` and `2`, then breaks when `x == 3`.",
    difficulty: 'Easy',
    category: 'While Loop',
    hasCode: true
  },
  {
    id: 100,
    question: "What's the output?\n```java\nint i = 0;\ndo {\n    if (i++ % 2 == 0) continue;\n    System.out.print(i);\n} while (i < 5);\n```",
    options: [
      { text: "135", isCorrect: true },
      { text: "12345", isCorrect: false },
      { text: "24", isCorrect: false },
      { text: "No output", isCorrect: false }
    ],
    explanation: "`continue` skips printing even numbers. Only odd values (`1, 3, 5`) are printed.",
    difficulty: 'Medium',
    category: 'Do-While Loop',
    hasCode: true
  }

]; 

shuffleOptions(controlFlowMCQs);