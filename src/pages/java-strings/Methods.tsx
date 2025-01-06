import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StringMethods: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                String Methods in Java
              </h1>
              <p className="text-gray-300">
                Java String class provides a rich set of methods for string manipulation. Here's a comprehensive guide to all available string methods with examples.
              </p>
            </div>

            {/* Basic Methods Section */}
            <MethodCard
              title="Basic String Methods"
              description="Fundamental string operations"
            >
              <CodeBlock
                code={`String str = "Hello World";

// Length
int length = str.length();  // 11

// Character access
char ch = str.charAt(0);    // 'H'
char[] chars = str.toCharArray();  // ['H','e','l','l','o',' ','W','o','r','l','d']

// Case conversion
String upper = str.toUpperCase();  // "HELLO WORLD"
String lower = str.toLowerCase();  // "hello world"

// Whitespace handling
String text = "  Hello  ";
String trimmed = text.trim();      // "Hello"
String stripped = text.strip();    // "Hello"
String stripLeading = text.stripLeading();  // "Hello  "
String stripTrailing = text.stripTrailing();  // "  Hello"`}
                language="java"
              />
            </MethodCard>

            {/* Search Methods Section */}
            <MethodCard
              title="Search and Find Methods"
              description="Methods for searching within strings"
            >
              <CodeBlock
                code={`String str = "Hello World";

// Index finding
int index = str.indexOf('o');         // 4
int lastIndex = str.lastIndexOf('o'); // 7
int wordIndex = str.indexOf("World"); // 6

// Contains and checks
boolean contains = str.contains("llo");     // true
boolean starts = str.startsWith("He");      // true
boolean ends = str.endsWith("ld");          // true
boolean empty = str.isEmpty();              // false
boolean blank = str.isBlank();              // false

// Pattern matching
boolean matches = str.matches("Hello.*");   // true
boolean regionMatch = str.regionMatches(6, "World", 0, 5); // true`}
                language="java"
              />
            </MethodCard>

            {/* Substring Methods Section */}
            <MethodCard
              title="Substring and Split Methods"
              description="Methods for extracting parts of strings"
            >
              <CodeBlock
                code={`String str = "Hello World Java";

// Substring extraction
String sub1 = str.substring(6);     // "World Java"
String sub2 = str.substring(6, 11); // "World"

// Split operations
String[] words = str.split(" ");    // ["Hello", "World", "Java"]
String[] parts = str.split("o");    // ["Hell", " W", "rld Java"]

// Join operations
String joined = String.join("-", words);  // "Hello-World-Java"

// Substrings with regex
String[] tokens = str.split("\\s+"); // Split by whitespace
String[] lines = str.split("\\n");   // Split by newline`}
                language="java"
              />
            </MethodCard>

            {/* Modification Methods Section */}
            <MethodCard
              title="String Modification Methods"
              description="Methods that return modified strings"
            >
              <CodeBlock
                code={`String str = "Hello World";

// Replace operations
String rep1 = str.replace('l', 'L');           // "HeLLo WorLd"
String rep2 = str.replaceAll("l", "L");        // "HeLLo WorLd"
String rep3 = str.replaceFirst("l", "L");      // "HeLlo World"

// Format operations
String formatted = String.format("Hello %s", "John");  // "Hello John"
String formatted2 = "Value is %d".formatted(42);       // "Value is 42"

// Padding
String padded = "Hello".indent(4);     // "    Hello"
String repeated = "Ha".repeat(3);       // "HaHaHa"

// Transform (Java 12+)
String transformed = str.transform(s -> s.toUpperCase());  // "HELLO WORLD"`}
                language="java"
              />
            </MethodCard>

            {/* Comparison Methods Section */}
            <MethodCard
              title="String Comparison Methods"
              description="Methods for comparing strings"
            >
              <CodeBlock
                code={`String str1 = "Hello";
String str2 = "hello";

// Equality checks
boolean equals = str1.equals(str2);              // false
boolean equalsIgnoreCase = str1.equalsIgnoreCase(str2);  // true

// Comparison
int comp1 = str1.compareTo(str2);                // negative value
int comp2 = str1.compareToIgnoreCase(str2);      // 0

// Content checks
boolean contentEquals = str1.contentEquals("Hello");  // true
boolean contentEquals2 = str1.contentEquals(new StringBuilder("Hello"));  // true

// Null-safe comparison
String nullStr = null;
boolean isEqual = "Hello".equals(nullStr);      // false (safe)`}
                language="java"
              />
            </MethodCard>

            {/* Utility Methods Section */}
            <MethodCard
              title="Utility Methods"
              description="Additional string utility methods"
            >
              <CodeBlock
                code={`// Value conversion
String numStr = String.valueOf(42);       // "42"
String boolStr = String.valueOf(true);    // "true"
String charStr = String.valueOf('A');     // "A"
String objStr = String.valueOf(new Object());  // "java.lang.Object@hashcode"

// Intern pool
String s1 = "Hello";
String s2 = new String("Hello").intern();
boolean sameRef = (s1 == s2);            // true

// Code point operations
int codePoint = str.codePointAt(0);      // Unicode value
int codePointCount = str.codePointCount(0, str.length());
String fromChars = String.copyValueOf(new char[]{'a', 'b', 'c'});  // "abc"`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar (3 columns) */}
          <div className="col-span-3 space-y-8">
            {/* Method Categories */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-indigo-800 dark:text-indigo-200">
                Method Categories
              </h2>
              <ul className="space-y-3 text-indigo-700 dark:text-indigo-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Information Methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comparison Methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Manipulation Methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Search Methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Utility Methods</span>
                </li>
              </ul>
            </div>

            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not checking for null</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong index bounds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using == instead of equals()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring case sensitivity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect regex patterns</span>
                </li>
              </ul>
            </div>

            {/* Best Practices Section */}
            <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-200">
                Best Practices
              </h2>
              <ul className="space-y-3 text-green-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use appropriate methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check bounds before substring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider case sensitivity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use StringBuilder for concat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringMethods; 