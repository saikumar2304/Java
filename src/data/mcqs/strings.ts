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

export const stringMCQs = [
        {
          id: 1,
          question: "What's the output?\n```java\nString s1 = \"Hello\";\nString s2 = \"Hello\";\nString s3 = new String(\"Hello\");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1 == s3);\n```",
          options: [
            { text: "true true", isCorrect: false },
            { text: "true false", isCorrect: true },
            { text: "false false", isCorrect: false },
            { text: "false true", isCorrect: false }
          ],
          explanation: "String literals use the string pool (s1 == s2). new String() creates a new object, so s1 != s3.",
          difficulty: 'Medium',
          category: 'String Pool',
          hasCode: true
        },
        {
          id: 2,
          question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"a\" + \"bc\";\nSystem.out.println(s1 == s2);\n```",
          options: [
            { text: "true", isCorrect: true },
            { text: "false", isCorrect: false },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "String concatenation of literals is evaluated at compile-time and uses the string pool, so s1 == s2.",
          difficulty: 'Medium',
          category: 'String Pool',
          hasCode: true
        },
        {
          id: 3,
          question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = new String(\"abc\").intern();\nSystem.out.println(s1 == s2);\n```",
          options: [
            { text: "true", isCorrect: true },
            { text: "false", isCorrect: false },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "Calling intern() on s2 makes it refer to the string pool object, so s1 == s2.",
          difficulty: 'Hard',
          category: 'String Pool',
          hasCode: true
        },
        {
          id: 4,
          question: "What's the output?\n```java\nString s = null;\ns = s + \"Hello\";\nSystem.out.println(s);\n```",
          options: [
            { text: "Hello", isCorrect: false },
            { text: "nullHello", isCorrect: true },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "When null is concatenated with a string, null is converted to the string \"null\".",
          difficulty: 'Medium',
          category: 'String Concatenation',
          hasCode: true
        },
        {
          id: 5,
          question: "What's the output?\n```java\nString s = \"hello\";\ns.toUpperCase();\nSystem.out.println(s);\n```",
          options: [
            { text: "hello", isCorrect: true },
            { text: "HELLO", isCorrect: false },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "Strings are immutable. The toUpperCase() method returns a new string, but the original string remains unchanged.",
          difficulty: 'Easy',
          category: 'String Immutability',
          hasCode: true
        },
        {
          id: 6,
          question: "What's the output?\n```java\nString s = \"java\";\nSystem.out.println(s.substring(1, 3));\n```",
          options: [
            { text: "av", isCorrect: true },
            { text: "ava", isCorrect: false },
            { text: "jav", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "The substring method includes the start index (1) but excludes the end index (3), so it returns \"av\".",
          difficulty: 'Easy',
          category: 'String Substring',
          hasCode: true
        },
        {
          id: 7,
          question: "What's the output?\n```java\nString s = \"Hello\";\ns.concat(\" World\");\nSystem.out.println(s);\n```",
          options: [
            { text: "Hello World", isCorrect: false },
            { text: "Hello", isCorrect: true },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "Strings are immutable. The concat() method creates a new string but does not modify the original.",
          difficulty: 'Easy',
          category: 'String Immutability',
          hasCode: true
        },
        {
          id: 8,
          question: "What's the output?\n```java\nString s1 = \"Test\";\nString s2 = s1.replace('T', 'P');\nSystem.out.println(s2);\n```",
          options: [
            { text: "Pest", isCorrect: true },
            { text: "Test", isCorrect: false },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "The replace method creates a new string with the replacement applied. The original string remains unchanged.",
          difficulty: 'Medium',
          category: 'String Replace',
          hasCode: true
        },
        {
          id: 9,
          question: "What's the output?\n```java\nString s = \"123\";\nSystem.out.println(s.charAt(3));\n```",
          options: [
            { text: "3", isCorrect: false },
            { text: "Runtime error", isCorrect: true },
            { text: "Compilation error", isCorrect: false },
            { text: "Index out of bounds", isCorrect: false }
          ],
          explanation: "The valid indices for the string \"123\" are 0, 1, and 2. Accessing index 3 throws an `IndexOutOfBoundsException`.",
          difficulty: 'Medium',
          category: 'String Indexing',
          hasCode: true
        },
        {
          id: 10,
          question: "What's the output?\n```java\nString s = \"abcdef\";\nSystem.out.println(s.substring(2));\n```",
          options: [
            { text: "cdef", isCorrect: true },
            { text: "abcdef", isCorrect: false },
            { text: "Runtime error", isCorrect: false },
            { text: "Compilation error", isCorrect: false }
          ],
          explanation: "The substring method with one argument includes all characters from the given index to the end of the string.",
          difficulty: 'Easy',
          category: 'String Substring',
          hasCode: true
        },
        {
          id: 11,
          question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"ab\" + \"c\";\nSystem.out.println(s1.equals(s2));\n```",
          options: [
            { text: "true", isCorrect: true },
            { text: "false", isCorrect: false },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "The equals method checks the content of strings. Since both have the same content, it returns true.",
          difficulty: 'Easy',
          category: 'String Equality',
          hasCode: true
        },
        {
          id: 12,
          question: "What's the output?\n```java\nString s1 = \"Test\";\nString s2 = null;\nSystem.out.println(s1 + s2);\n```",
          options: [
            { text: "Testnull", isCorrect: true },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false },
            { text: "nullTest", isCorrect: false }
          ],
          explanation: "Concatenation with null converts null to the string \"null\", so the result is \"Testnull\".",
          difficulty: 'Easy',
          category: 'String Concatenation',
          hasCode: true
        },
        {
          id: 13,
          question: "What's the output?\n```java\nString s = \" \";\nSystem.out.println(s.isEmpty());\n```",
          options: [
            { text: "true", isCorrect: false },
            { text: "false", isCorrect: true },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "The isEmpty method checks if the string's length is 0. A single space is not considered empty.",
          difficulty: 'Medium',
          category: 'String Methods',
          hasCode: true
        },
        {
          id: 14,
          question: "What's the output?\n```java\nString s = \"java\";\nSystem.out.println(s.startsWith(\"j\"));\n```",
          options: [
            { text: "true", isCorrect: true },
            { text: "false", isCorrect: false },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "The startsWith method checks if the string starts with the given prefix. Here, it returns true.",
          difficulty: 'Easy',
          category: 'String Methods',
          hasCode: true
        },
        {
          id: 15,
          question: "What's the output?\n```java\nString s = \"Hello World\";\nSystem.out.println(s.split(\" \")[1]);\n```",
          options: [
            { text: "World", isCorrect: true },
            { text: "Hello", isCorrect: false },
            { text: "Compilation error", isCorrect: false },
            { text: "Runtime error", isCorrect: false }
          ],
          explanation: "The split method splits the string into an array of substrings. Index 1 corresponds to \"World\".",
          difficulty: 'Medium',
          category: 'String Split',
          hasCode: true
        },
        {
            id: 16,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"abc\".toUpperCase();\nSystem.out.println(s1.equals(s2));\n```",
            options: [
              { text: "true", isCorrect: false },
              { text: "false", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The equals method is case-sensitive. \"abc\" is not equal to \"ABC\".",
            difficulty: 'Easy',
            category: 'String Equality',
            hasCode: true
          },
          {
            id: 17,
            question: "What's the output?\n```java\nString s = \"abcdef\";\nSystem.out.println(s.indexOf('d'));\n```",
            options: [
              { text: "3", isCorrect: true },
              { text: "-1", isCorrect: false },
              { text: "4", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The indexOf method returns the position of the first occurrence of the specified character. 'd' is at index 3.",
            difficulty: 'Easy',
            category: 'String Indexing',
            hasCode: true
          },
          {
            id: 18,
            question: "What's the output?\n```java\nString s = \"java\";\nSystem.out.println(s.endsWith(\"va\"));\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The endsWith method checks if the string ends with the specified suffix. Here, it returns true.",
            difficulty: 'Easy',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 19,
            question: "What's the output?\n```java\nString s = \"  java  \";\nSystem.out.println(s.trim());\n```",
            options: [
              { text: "java", isCorrect: true },
              { text: "  java  ", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The trim method removes leading and trailing whitespace from the string.",
            difficulty: 'Easy',
            category: 'String Trim',
            hasCode: true
          },
          {
            id: 20,
            question: "What's the output?\n```java\nString s = \"java\";\nSystem.out.println(s.charAt(s.length()));\n```",
            options: [
              { text: "Runtime error", isCorrect: true },
              { text: "a", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Empty character", isCorrect: false }
            ],
            explanation: "The valid indices for the string \"java\" are 0 to 3. Accessing index 4 throws an `IndexOutOfBoundsException`.",
            difficulty: 'Medium',
            category: 'String Indexing',
            hasCode: true
          },
          {
            id: 21,
            question: "What's the output?\n```java\nString s = \"java\";\nSystem.out.println(s.replace('j', 'k'));\n```",
            options: [
              { text: "kava", isCorrect: true },
              { text: "java", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The replace method creates a new string by replacing all occurrences of the specified character.",
            difficulty: 'Easy',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 22,
            question: "What's the output?\n```java\nString s1 = \"Hello\";\nString s2 = \"HELLO\".toLowerCase();\nSystem.out.println(s1.equals(s2));\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The toLowerCase method converts the string to lowercase. The equals method then compares the content, which matches.",
            difficulty: 'Medium',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 23,
            question: "What's the output?\n```java\nString s = \"12345\";\nSystem.out.println(s.substring(1, 3));\n```",
            options: [
              { text: "23", isCorrect: true },
              { text: "234", isCorrect: false },
              { text: "123", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The substring method includes the start index (1) but excludes the end index (3), so it returns \"23\".",
            difficulty: 'Easy',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 24,
            question: "What's the output?\n```java\nString s = \"Hello World\";\nSystem.out.println(s.split(\" \")[0]);\n```",
            options: [
              { text: "Hello", isCorrect: true },
              { text: "World", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The split method splits the string into an array of substrings. Index 0 corresponds to \"Hello\".",
            difficulty: 'Easy',
            category: 'String Split',
            hasCode: true
          },
          {
            id: 25,
            question: "What's the output?\n```java\nString s1 = \"Hello\";\nString s2 = \"Hello\".toLowerCase();\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: false },
              { text: "false", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The toLowerCase method creates a new string object. The == operator compares references, which are not the same.",
            difficulty: 'Medium',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 26,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"a\" + new String(\"bc\");\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: false },
              { text: "false", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Although the content is the same, s2 creates a new object because of `new String`. `==` compares references, not content.",
            difficulty: 'Hard',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 27,
            question: "What's the output?\n```java\nString s1 = \"test\";\nString s2 = s1;\ns1 = \"TEST\";\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: false },
              { text: "false", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Strings are immutable. Assigning `s1 = \"TEST\"` creates a new object, so s1 and s2 now point to different references.",
            difficulty: 'Hard',
            category: 'String Immutability',
            hasCode: true
          },
          {
            id: 28,
            question: "What's the output?\n```java\nString s1 = \"java\";\nString s2 = \"j\" + \"ava\";\nString s3 = s1;\ns3 = s3.concat(\"script\");\nSystem.out.println(s1 + s3);\n```",
            options: [
              { text: "javajavascript", isCorrect: true },
              { text: "javascriptjavascript", isCorrect: false },
              { text: "javajava", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `concat` method creates a new string for s3, but s1 remains unchanged because strings are immutable.",
            difficulty: 'Hard',
            category: 'String Immutability',
            hasCode: true
          },
          {
            id: 29,
            question: "What's the output?\n```java\nString s = \"a\";\nfor (int i = 0; i < 3; i++) {\n    s += s;\n}\nSystem.out.println(s.length());\n```",
            options: [
              { text: "16", isCorrect: true },
              { text: "8", isCorrect: false },
              { text: "32", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "On each iteration, the length doubles (1 → 2 → 4 → 8). After three iterations, the final length is 16.",
            difficulty: 'Hard',
            category: 'String Operations',
            hasCode: true
          },
          {
            id: 30,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"def\";\ns1.concat(s2);\nSystem.out.println(s1);\n```",
            options: [
              { text: "abc", isCorrect: true },
              { text: "abcdef", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `concat` method does not modify the original string. It creates a new string, but it's not assigned to s1.",
            difficulty: 'Hard',
            category: 'String Immutability',
            hasCode: true
          },
          {
            id: 31,
            question: "What's the output?\n```java\nString s = null;\ns += \"java\";\nSystem.out.println(s);\n```",
            options: [
              { text: "nulljava", isCorrect: true },
              { text: "java", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Concatenating `null` with a string converts `null` to the string \"null\", so the result is \"nulljava\".",
            difficulty: 'Medium',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 32,
            question: "What's the output?\n```java\nString s = \"java\";\ns = s.substring(0, 2) + s.substring(2);\nSystem.out.println(s);\n```",
            options: [
              { text: "java", isCorrect: true },
              { text: "jaava", isCorrect: false },
              { text: "jav", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The substring calls do not change the string. The concatenation recreates the same string \"java\".",
            difficulty: 'Hard',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 33,
            question: "What's the output?\n```java\nString s = \"java\";\nSystem.out.println(s.indexOf('a', 2));\n```",
            options: [
              { text: "3", isCorrect: true },
              { text: "1", isCorrect: false },
              { text: "-1", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `indexOf` method starts searching from index 2. It finds 'a' at index 3.",
            difficulty: 'Medium',
            category: 'String Indexing',
            hasCode: true
          },
          {
            id: 34,
            question: "What's the output?\n```java\nString s1 = \"java\";\nString s2 = \"ja\" + \"va\";\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "String concatenation of literals is evaluated at compile-time and uses the string pool. Therefore, s1 == s2.",
            difficulty: 'Hard',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 35,
            question: "What's the output?\n```java\nString s = \"\";\nfor (int i = 0; i < 3; i++) {\n    s += i;\n}\nSystem.out.println(s);\n```",
            options: [
              { text: "012", isCorrect: true },
              { text: "123", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "On each iteration, the value of `i` is appended to `s`. The result is \"012\".",
            difficulty: 'Medium',
            category: 'String Operations',
            hasCode: true
          },
          {
            id: 36,
            question: "What's the output?\n```java\nString s = \"java\";\nSystem.out.println(s.lastIndexOf('a'));\n```",
            options: [
              { text: "3", isCorrect: true },
              { text: "1", isCorrect: false },
              { text: "2", isCorrect: false },
              { text: "-1", isCorrect: false }
            ],
            explanation: "The `lastIndexOf` method returns the last occurrence of the character 'a', which is at index 3.",
            difficulty: 'Medium',
            category: 'String Indexing',
            hasCode: true
          },
          {
            id: 37,
            question: "What's the output?\n```java\nString s1 = \"Java\";\nString s2 = \"J\" + \"ava\";\nSystem.out.println(s1.equals(s2));\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true true", isCorrect: false },
              { text: "true false", isCorrect: true },
              { text: "false true", isCorrect: false },
              { text: "false false", isCorrect: false }
            ],
            explanation: "The `equals` method checks content and returns true. `==` compares references, and s2 is newly constructed.",
            difficulty: 'Hard',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 38,
            question: "What's the output?\n```java\nString s = \"hello\";\nSystem.out.println(s.substring(5));\n```",
            options: [
              { text: "Empty string", isCorrect: true },
              { text: "hello", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The substring method allows the start index to be equal to the string's length, returning an empty string.",
            difficulty: 'Hard',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 39,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"abc\";\ns1 = s1.concat(\"d\");\nSystem.out.println(s1.equals(s2));\n```",
            options: [
              { text: "false", isCorrect: true },
              { text: "true", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `concat` method creates a new string, so s1 is no longer equal to s2.",
            difficulty: 'Medium',
            category: 'String Immutability',
            hasCode: true
          },
          {
            id: 40,
            question: "What's the output?\n```java\nString s = \"java\";\ns += null;\nSystem.out.println(s);\n```",
            options: [
              { text: "javanull", isCorrect: true },
              { text: "java", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Concatenating `null` with a string converts `null` to the string \"null\", resulting in \"javanull\".",
            difficulty: 'Medium',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 41,
            question: "What's the output?\n```java\nString s = \"abcabcabc\";\nSystem.out.println(s.replace(\"abc\", \"\"));\n```",
            options: [
              { text: "\"\"", isCorrect: true },
              { text: "abc", isCorrect: false },
              { text: "abcabc", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `replace` method replaces all occurrences of \"abc\" with an empty string, resulting in \"\".",
            difficulty: 'Hard',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 42,
            question: "What's the output?\n```java\nString s = \"hello\";\ns = s.substring(1, 4).toUpperCase();\nSystem.out.println(s);\n```",
            options: [
              { text: "ELL", isCorrect: true },
              { text: "ello", isCorrect: false },
              { text: "HELLO", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The substring method extracts \"ell\", and `toUpperCase` converts it to \"ELL\".",
            difficulty: 'Medium',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 43,
            question: "What's the output?\n```java\nString s1 = \"Test\";\nString s2 = \"test\";\nSystem.out.println(s1.equalsIgnoreCase(s2));\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `equalsIgnoreCase` method compares strings ignoring case differences, so it returns true.",
            difficulty: 'Medium',
            category: 'String Equality',
            hasCode: true
          },
          {
            id: 44,
            question: "What's the output?\n```java\nString s = \"java\";\ns = s.replace('j', 'J').concat(\" SE\");\nSystem.out.println(s);\n```",
            options: [
              { text: "Java SE", isCorrect: true },
              { text: "java SE", isCorrect: false },
              { text: "JavaSE", isCorrect: false },
              { text: "java", isCorrect: false }
            ],
            explanation: "The `replace` method changes 'j' to 'J', and `concat` appends \" SE\".",
            difficulty: 'Medium',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 45,
            question: "What's the output?\n```java\nString s = \"\";\nSystem.out.println(s.isEmpty() && s.length() == 0);\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `isEmpty` method returns true for an empty string, and `length() == 0` is also true. Both conditions are true.",
            difficulty: 'Medium',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 46,
            question: "What's the output?\n```java\nString s1 = \"\";\nString s2 = null;\nSystem.out.println(s1 + s2);\n```",
            options: [
              { text: "null", isCorrect: false },
              { text: "nullnull", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Concatenating an empty string with `null` converts `null` to the string \"null\", resulting in \"nullnull\".",
            difficulty: 'Medium',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 47,
            question: "What's the output?\n```java\nString s1 = \"Java\";\nString s2 = \" \" + s1;\nSystem.out.println(s2.trim() == s1);\n```",
            options: [
              { text: "true", isCorrect: false },
              { text: "false", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `trim` method removes leading and trailing spaces but creates a new string. `==` compares references, which are different.",
            difficulty: 'Hard',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 48,
            question: "What's the output?\n```java\nString s = \"hello\";\nSystem.out.println(s.charAt(0) == s.substring(0, 1).charAt(0));\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Both `charAt(0)` and `substring(0, 1).charAt(0)` extract the same character 'h'. The comparison returns true.",
            difficulty: 'Medium',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 49,
            question: "What's the output?\n```java\nString s = \"abc\";\nSystem.out.println(s.substring(0, 1).concat(s.substring(1, 3).toUpperCase()));\n```",
            options: [
              { text: "aBC", isCorrect: true },
              { text: "ABC", isCorrect: false },
              { text: "abc", isCorrect: false },
              { text: "aBc", isCorrect: false }
            ],
            explanation: "The `substring(0, 1)` extracts 'a', and `substring(1, 3).toUpperCase()` converts 'bc' to 'BC'. Concatenating them gives 'aBC'.",
            difficulty: 'Hard',
            category: 'String Manipulation',
            hasCode: true
          },
          {
            id: 50,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = s1 + \"def\";\ns1 = s2;\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Both `s1` and `s2` reference the same string object after `s1 = s2`. The `==` comparison returns true.",
            difficulty: 'Medium',
            category: 'String References',
            hasCode: true
          },
          {
            id: 51,
            question: "What's the output?\n```java\nString s = \"Java\";\ns = s.replace('a', 'o').replace('o', 'a');\nSystem.out.println(s);\n```",
            options: [
              { text: "Java", isCorrect: true },
              { text: "Jovo", isCorrect: false },
              { text: "Jova", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The first `replace('a', 'o')` converts 'Java' to 'Jovo', and the second `replace('o', 'a')` converts 'Jovo' back to 'Java'.",
            difficulty: 'Medium',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 52,
            question: "What's the output?\n```java\nString s1 = \"Java\";\nString s2 = \"Java\";\ns1 = s1.concat(\"SE\");\nSystem.out.println(s1.equals(s2));\n```",
            options: [
              { text: "false", isCorrect: true },
              { text: "true", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `concat` method modifies `s1` but does not affect `s2`. Hence, `s1` is not equal to `s2`.",
            difficulty: 'Medium',
            category: 'String Immutability',
            hasCode: true
          },
          {
            id: 53,
            question: "What's the output?\n```java\nString s = \"Java\";\nSystem.out.println(s.substring(0, s.indexOf('a')));\n```",
            options: [
              { text: "J", isCorrect: true },
              { text: "Ja", isCorrect: false },
              { text: "Java", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `indexOf('a')` returns 1. The `substring(0, 1)` extracts the substring from index 0 to 1 (exclusive), which is 'J'.",
            difficulty: 'Medium',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 54,
            question: "What's the output?\n```java\nString s = \"\";\nfor (int i = 0; i < 3; i++) {\n    s = s + i;\n}\nSystem.out.println(s.equals(\"012\"));\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The loop appends the values 0, 1, and 2 to `s`, creating \"012\". The `equals` method correctly compares the contents.",
            difficulty: 'Medium',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 55,
            question: "What's the output?\n```java\nString s1 = \"Java\";\nString s2 = \"Java\";\nSystem.out.println(s1.hashCode() == s2.hashCode());\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `hashCode` method returns the same value for strings with identical content, even if they are different objects.",
            difficulty: 'Medium',
            category: 'String HashCode',
            hasCode: true
          },
          {
            id: 56,
            question: "What's the output?\n```java\nString s1 = \"Java\";\nString s2 = \"JAVA\";\nSystem.out.println(s1.compareToIgnoreCase(s2));\n```",
            options: [
              { text: "0", isCorrect: true },
              { text: "1", isCorrect: false },
              { text: "-1", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `compareToIgnoreCase` method ignores case differences. Since the strings are equal ignoring case, the result is 0.",
            difficulty: 'Hard',
            category: 'String Comparison',
            hasCode: true
          },
          {
            id: 57,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"ab\" + \"c\";\nString s3 = new String(\"abc\");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1 == s3);\n```",
            options: [
              { text: "true false", isCorrect: true },
              { text: "true true", isCorrect: false },
              { text: "false false", isCorrect: false },
              { text: "false true", isCorrect: false }
            ],
            explanation: "s1 and s2 point to the same string pool reference. s3 is created as a new object using `new String`, so `s1 != s3`.",
            difficulty: 'Hard',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 58,
            question: "What's the output?\n```java\nString s = \" \" + null;\nSystem.out.println(s.trim().length());\n```",
            options: [
              { text: "4", isCorrect: true },
              { text: "3", isCorrect: false },
              { text: "0", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "Concatenating a space with `null` results in the string \" null\". Trimming removes the space, leaving \"null\", which has a length of 4.",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 59,
            question: "What's the output?\n```java\nString s = \"Java\";\ns = s.replace('J', 'K').replace('K', 'J');\nSystem.out.println(s);\n```",
            options: [
              { text: "Java", isCorrect: true },
              { text: "Kava", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The first `replace('J', 'K')` changes 'Java' to 'Kava'. The second `replace('K', 'J')` reverts it back to 'Java'.",
            difficulty: 'Hard',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 60,
            question: "What's the output?\n```java\nString s = \"java\";\ns = s.substring(0, 2).toUpperCase() + s.substring(2);\nSystem.out.println(s);\n```",
            options: [
              { text: "JAva", isCorrect: true },
              { text: "java", isCorrect: false },
              { text: "JA", isCorrect: false },
              { text: "JAVA", isCorrect: false }
            ],
            explanation: "The substring `s.substring(0, 2)` extracts 'ja', which is converted to 'JA'. The rest of the string 'va' is appended, forming 'JAva'.",
            difficulty: 'Hard',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 61,
            question: "What's the output?\n```java\nString s = \"abcdef\";\ns = s.substring(1, 5).substring(1, 3);\nSystem.out.println(s);\n```",
            options: [
              { text: "cd", isCorrect: true },
              { text: "bcde", isCorrect: false },
              { text: "cde", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The first `substring(1, 5)` extracts 'bcde'. The second `substring(1, 3)` extracts 'cd' from 'bcde'.",
            difficulty: 'Hard',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 62,
            question: "What's the output?\n```java\nString s1 = \"\";\nString s2 = null;\nSystem.out.println(s1.concat(\"Java\"));\nSystem.out.println(s2.concat(\"Java\"));\n```",
            options: [
              { text: "\"Java\" and NullPointerException", isCorrect: true },
              { text: "\"Java\" and \"Java\"", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "`s1.concat(\"Java\")` returns \"Java\". `s2.concat(\"Java\")` throws a NullPointerException because s2 is null.",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 63,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = s1.toUpperCase();\nString s3 = s1.toLowerCase();\nSystem.out.println(s1 == s3);\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "If the `toLowerCase` method does not change the string (already lowercase), it returns the same reference, so `s1 == s3`.",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 64,
            question: "What's the output?\n```java\nString s = \"abc\";\ns = s.concat(null);\nSystem.out.println(s);\n```",
            options: [
              { text: "Compilation error", isCorrect: true },
              { text: "abcnull", isCorrect: false },
              { text: "Runtime error", isCorrect: false },
              { text: "null", isCorrect: false }
            ],
            explanation: "The `concat` method does not accept null as an argument. Passing null results in a compilation error.",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 65,
            question: "What's the output?\n```java\nString s = \"a\";\ns = s.repeat(3).replace('a', 'b');\nSystem.out.println(s);\n```",
            options: [
              { text: "bbb", isCorrect: true },
              { text: "aaa", isCorrect: false },
              { text: "aab", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `repeat` method repeats the string three times to create \"aaa\". The `replace('a', 'b')` changes it to \"bbb\".",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 66,
            question: "What's the output?\n```java\nString s1 = \"abcd\";\nString s2 = s1.substring(0, 2).concat(s1.substring(2));\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: false },
              { text: "false", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `substring` and `concat` methods create new objects. Even though `s1` and `s2` have the same content, they refer to different objects.",
            difficulty: 'Hard',
            category: 'String Immutability',
            hasCode: true
          },
          {
            id: 67,
            question: "What's the output?\n```java\nString s = \"abc\";\ns = s.replace('a', 'b').replace('b', 'c');\nSystem.out.println(s);\n```",
            options: [
              { text: "cbc", isCorrect: true },
              { text: "abc", isCorrect: false },
              { text: "bcc", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The first `replace('a', 'b')` converts 'abc' to 'bbc'. The second `replace('b', 'c')` changes 'bbc' to 'cbc'.",
            difficulty: 'Hard',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 68,
            question: "What's the output?\n```java\nString s1 = \"a\";\nString s2 = \"a\".repeat(3);\nSystem.out.println(s1 == s2.substring(0, 1));\n```",
            options: [
              { text: "true", isCorrect: false },
              { text: "false", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "`s2.substring(0, 1)` creates a new string. The references are not the same, so `s1 != s2.substring(0, 1)`.",
            difficulty: 'Hard',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 69,
            question: "What's the output?\n```java\nString s = \" \";\ns = s.trim();\nSystem.out.println(s.isEmpty());\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "`trim()` removes all leading and trailing spaces. Since the string only contains a space, it becomes empty, and `isEmpty()` returns true.",
            difficulty: 'Hard',
            category: 'String Trim',
            hasCode: true
          },
          {
            id: 70,
            question: "What's the output?\n```java\nString s = null;\ns += \"java\";\nSystem.out.println(s);\n```",
            options: [
              { text: "nulljava", isCorrect: true },
              { text: "java", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Using `+=` with `null` implicitly converts `null` to the string \"null\", resulting in \"nulljava\".",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 71,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"a\" + \"b\" + \"c\";\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "String concatenation with literals is evaluated at compile-time, so `s1` and `s2` refer to the same string pool object.",
            difficulty: 'Hard',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 72,
            question: "What's the output?\n```java\nString s1 = \"java\";\nString s2 = \"java\";\ns2 = s2 + \"\";\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "false", isCorrect: true },
              { text: "true", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Adding an empty string creates a new object, so `s1` and `s2` do not refer to the same object.",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 73,
            question: "What's the output?\n```java\nString s = \"Hello\";\ns = s.concat(\"World\").substring(5).trim();\nSystem.out.println(s);\n```",
            options: [
              { text: "World", isCorrect: true },
              { text: "HelloWorld", isCorrect: false },
              { text: "WorldHello", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `concat` method appends \"World\" to \"Hello\", resulting in \"HelloWorld\". The `substring(5)` extracts \"World\".",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 74,
            question: "What's the output?\n```java\nString s = \"Hello\";\ns = s.replace('H', 'h').concat(\" World\").substring(0, 5);\nSystem.out.println(s);\n```",
            options: [
              { text: "hello", isCorrect: true },
              { text: "Hello", isCorrect: false },
              { text: "hello World", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `replace` method changes 'H' to 'h', and `substring(0, 5)` extracts \"hello\" from \"hello World\".",
            difficulty: 'Hard',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 75,
            question: "What's the output?\n```java\nString s = \"abc\";\nSystem.out.println(s.repeat(2).substring(1, 5));\n```",
            options: [
              { text: "bcab", isCorrect: true },
              { text: "abca", isCorrect: false },
              { text: "abcabc", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `repeat(2)` creates \"abcabc\", and `substring(1, 5)` extracts characters from index 1 to 4, which are \"bcab\".",
            difficulty: 'Hard',
            category: 'String Repeat',
            hasCode: true
          },
          {
            id: 76,
            question: "What's the output?\n```java\nString s = \"Java\";\ns = s.concat(\" \").concat(null);\nSystem.out.println(s);\n```",
            options: [
              { text: "Java null", isCorrect: true },
              { text: "Java", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `concat` method converts null to the string \"null\", resulting in \"Java null\".",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 77,
            question: "What's the output?\n```java\nString s = \" \" + null + null;\nSystem.out.println(s);\n```",
            options: [
              { text: " nullnull", isCorrect: true },
              { text: "nullnull", isCorrect: false },
              { text: "null", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The concatenation of a space with null and another null results in the string \" nullnull\".",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 78,
            question: "What's the output?\n```java\nString s1 = \"Java\";\nString s2 = new String(\"Java\").intern();\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `intern` method returns the string from the string pool if it exists. Both `s1` and `s2` refer to the same string pool object.",
            difficulty: 'Hard',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 79,
            question: "What's the output?\n```java\nString s = \"abcd\";\ns = s.substring(1, 1);\nSystem.out.println(s);\n```",
            options: [
              { text: "\"\"", isCorrect: true },
              { text: "abcd", isCorrect: false },
              { text: "Runtime error", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `substring(1, 1)` call extracts an empty string since the start and end indices are the same.",
            difficulty: 'Hard',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 80,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"abc\".replace('a', 'a');\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `replace` method returns the same string object if no changes are made, so `s1 == s2` is true.",
            difficulty: 'Hard',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 81,
            question: "What's the output?\n```java\nString s = \"hello\";\nSystem.out.println(s.substring(s.length()));\n```",
            options: [
              { text: "\"\"", isCorrect: true },
              { text: "hello", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `substring(s.length())` extracts a substring starting at the end of the string, resulting in an empty string.",
            difficulty: 'Hard',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 82,
            question: "What's the output?\n```java\nString s1 = \"Java\";\nString s2 = s1.concat(\" \").trim();\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "false", isCorrect: true },
              { text: "true", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `concat` method creates a new string, and `trim` does not affect the reference. Thus, `s1` and `s2` are different objects.",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 83,
            question: "What's the output?\n```java\nString s = \"Java\";\nSystem.out.println(s.startsWith(\"\"));\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "An empty string is a valid prefix for any string, so `startsWith(\"\")` returns true.",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 84,
            question: "What's the output?\n```java\nString s = \"\".concat(null);\nSystem.out.println(s);\n```",
            options: [
              { text: "null", isCorrect: true },
              { text: "\"\"", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `concat` method converts null to the string \"null\", so the result is \"null\".",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 85,
            question: "What's the output?\n```java\nString s = \"abc\";\ns = s.toUpperCase().toLowerCase();\nSystem.out.println(s == \"abc\");\n```",
            options: [
              { text: "false", isCorrect: true },
              { text: "true", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The transformations create new objects. The `==` operator compares references, which are not the same.",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 86,
            question: "What's the output?\n```java\nString s = \" \";\nSystem.out.println(s.isBlank() + \" \" + s.isEmpty());\n```",
            options: [
              { text: "true false", isCorrect: true },
              { text: "false true", isCorrect: false },
              { text: "true true", isCorrect: false },
              { text: "false false", isCorrect: false }
            ],
            explanation: "`isBlank` checks if the string contains only whitespace, while `isEmpty` checks if the length is 0. The string contains a space, so `isBlank` is true and `isEmpty` is false.",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 87,
            question: "What's the output?\n```java\nString s = \"Java\";\nSystem.out.println(s.repeat(0));\n```",
            options: [
              { text: "\"\"", isCorrect: true },
              { text: "Java", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Repeating a string 0 times results in an empty string.",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 88,
            question: "What's the output?\n```java\nString s = \"Java\";\ns = null + s;\nSystem.out.println(s);\n```",
            options: [
              { text: "nullJava", isCorrect: true },
              { text: "Java", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `+` operator concatenates `null` with the string `s`, resulting in \"nullJava\".",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 89,
            question: "What's the output?\n```java\nString s1 = \"Hello\";\nString s2 = \"Hello\";\nSystem.out.println((s1 + s2).equals(s1.concat(s2)));\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `+` operator and `concat` method produce the same content. The `equals` method compares the values, returning `true`.",
            difficulty: 'Hard',
            category: 'String Comparison',
            hasCode: true
          },
          {
            id: 90,
            question: "What's the output?\n```java\nString s = \"abcd\";\nSystem.out.println(s.substring(2, 2));\n```",
            options: [
              { text: "\"\"", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "abcd", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "When the start index equals the end index in `substring`, an empty string is returned.",
            difficulty: 'Hard',
            category: 'String Substring',
            hasCode: true
          },
          {
            id: 91,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"a\" + \"b\" + \"c\";\nSystem.out.println(s1.equals(s2));\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "true true", isCorrect: true },
              { text: "true false", isCorrect: false },
              { text: "false false", isCorrect: false },
              { text: "false true", isCorrect: false }
            ],
            explanation: "String concatenation with literals is computed at compile-time. Both `s1` and `s2` refer to the same string pool object.",
            difficulty: 'Hard',
            category: 'String Pool',
            hasCode: true
          },
          {
            id: 92,
            question: "What's the output?\n```java\nString s = \"abc\";\nSystem.out.println(s.indexOf(\"\"));\n```",
            options: [
              { text: "0", isCorrect: true },
              { text: "-1", isCorrect: false },
              { text: "Runtime error", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "An empty string is considered to be at the start of any string, so `indexOf(\"\")` returns 0.",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 93,
            question: "What's the output?\n```java\nString s = \"Java\";\nSystem.out.println(s.contains(\"\"));\n```",
            options: [
              { text: "true", isCorrect: true },
              { text: "false", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "Every string contains an empty string, so `contains(\"\")` always returns true.",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 94,
            question: "What's the output?\n```java\nString s = \"abc\";\nSystem.out.println(s.charAt(s.length()));\n```",
            options: [
              { text: "Runtime error", isCorrect: true },
              { text: "c", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "empty", isCorrect: false }
            ],
            explanation: "Attempting to access `charAt(s.length())` throws a `StringIndexOutOfBoundsException` because indices start from 0.",
            difficulty: 'Hard',
            category: 'String Indexing',
            hasCode: true
          },
          {
            id: 95,
            question: "What's the output?\n```java\nString s = \"\";\ns += null;\nSystem.out.println(s);\n```",
            options: [
              { text: "null", isCorrect: true },
              { text: "\"\"", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `+=` operator converts null to the string \"null\", so the output is \"null\".",
            difficulty: 'Hard',
            category: 'String Concatenation',
            hasCode: true
          },
          {
            id: 96,
            question: "What's the output?\n```java\nString s = null;\nSystem.out.println(\"\".equals(s));\n```",
            options: [
              { text: "false", isCorrect: true },
              { text: "true", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The `equals` method compares the content of strings. Since `s` is null, it cannot equal an empty string.",
            difficulty: 'Hard',
            category: 'String Comparison',
            hasCode: true
          },
          {
            id: 97,
            question: "What's the output?\n```java\nString s = \"abc\";\ns = s.replace('x', 'y');\nSystem.out.println(s);\n```",
            options: [
              { text: "abc", isCorrect: true },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false },
              { text: "ybc", isCorrect: false }
            ],
            explanation: "The `replace` method does nothing if the character to be replaced ('x') is not found in the string.",
            difficulty: 'Hard',
            category: 'String Replace',
            hasCode: true
          },
          {
            id: 98,
            question: "What's the output?\n```java\nString s = \"a\";\ns = s.repeat(0).concat(s.repeat(2));\nSystem.out.println(s);\n```",
            options: [
              { text: "aa", isCorrect: true },
              { text: "a", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The first `repeat(0)` results in an empty string. The second `repeat(2)` creates \"aa\", so the result is \"aa\".",
            difficulty: 'Hard',
            category: 'String Methods',
            hasCode: true
          },
          {
            id: 99,
            question: "What's the output?\n```java\nString s1 = \"abc\";\nString s2 = \"abc\".toUpperCase().toLowerCase();\nSystem.out.println(s1 == s2);\n```",
            options: [
              { text: "false", isCorrect: true },
              { text: "true", isCorrect: false },
              { text: "Compilation error", isCorrect: false },
              { text: "Runtime error", isCorrect: false }
            ],
            explanation: "The transformations create a new object for `s2`. The `==` operator compares references, so `s1 != s2`.",
            difficulty: 'Hard',
            category: 'String Comparison',
            hasCode: true
          },
          {
            id: 100,
            question: "What's the output?\n```java\nString s = \"abc\";\ns = s.repeat(3).replace(\"ab\", \"\");\nSystem.out.println(s);\n```",
            options: [
              { text: "ccc", isCorrect: true },
              { text: "abccba", isCorrect: false },
              { text: "abcabc", isCorrect: false },
              { text: "Compilation error", isCorrect: false }
            ],
            explanation: "The `repeat(3)` creates \"abcabcabc\". The `replace(\"ab\", \"\")` removes all occurrences of \"ab\", leaving \"ccc\".",
            difficulty: 'Hard',
            category: 'String Replace',
            hasCode: true
          }
        ];
        
        
        
        
        
        
        
        
        shuffleOptions(stringMCQs);