import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StringClass: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                String Class in Java
              </h1>
              <p className="text-gray-300">
                The String class in Java represents character strings and provides a rich set of methods for string manipulation. It is part of the java.lang package and is one of the most commonly used classes in Java.
              </p>
            </div>

            {/* Basic Methods Section */}
            <MethodCard
              title="Basic String Methods"
              description="Commonly used string operations"
            >
              <CodeBlock
                code={`String str = "Hello World";

// Length and emptiness
int length = str.length();          // 11
boolean isEmpty = str.isEmpty();    // false
boolean isBlank = str.isBlank();   // false

// Case conversion
String upper = str.toUpperCase();   // "HELLO WORLD"
String lower = str.toLowerCase();   // "hello world"

// Character access
char first = str.charAt(0);         // 'H'
char[] chars = str.toCharArray();   // ['H','e','l','l','o',' ','W','o','r','l','d']

// Substring operations
String sub1 = str.substring(6);     // "World"
String sub2 = str.substring(0, 5);  // "Hello"`}
                language="java"
              />
            </MethodCard>

            {/* Search Methods Section */}
            <MethodCard
              title="Search and Find Methods"
              description="Methods for searching within strings"
            >
              <CodeBlock
                code={`String text = "Hello World";

// Index finding
int index1 = text.indexOf('o');      // 4
int index2 = text.lastIndexOf('o');  // 7
int index3 = text.indexOf("World");  // 6

// Contains and matches
boolean has = text.contains("llo");  // true
boolean starts = text.startsWith("He");  // true
boolean ends = text.endsWith("ld");     // true

// Pattern matching
boolean matches = text.matches("Hello.*");  // true
boolean region = text.regionMatches(6, "World", 0, 5);  // true`}
                language="java"
              />
            </MethodCard>

            {/* Modification Methods Section */}
            <MethodCard
              title="String Modification Methods"
              description="Methods that return modified strings"
            >
              <CodeBlock
                code={`String str = "  Hello World  ";

// Trimming whitespace
String trimmed = str.trim();          // "Hello World"
String stripped = str.strip();        // "Hello World"

// Replacement
String rep1 = str.replace('o', 'x');  // "  Hellx Wxrld  "
String rep2 = str.replaceAll("\\s+", "");  // "HelloWorld"

// Splitting and joining
String[] words = str.split("\\s+");   // ["Hello", "World"]
String joined = String.join("-", words);  // "Hello-World"

// Padding and repeating
String padded = str.trim().padStart(15, '*');  // "****Hello World"
String repeated = "Ha".repeat(3);     // "HaHaHa"`}
                language="java"
              />
            </MethodCard>

            {/* Comparison Methods Section */}
            <MethodCard
              title="String Comparison Methods"
              description="Methods for comparing strings"
            >
              <CodeBlock
                code={`String s1 = "Hello";
String s2 = "hello";

// Equality checks
boolean equals = s1.equals(s2);              // false
boolean equalsIgnoreCase = s1.equalsIgnoreCase(s2);  // true

// Comparison
int comp1 = s1.compareTo(s2);                // negative value
int comp2 = s1.compareToIgnoreCase(s2);      // 0

// Content checks
boolean contentEquals = s1.contentEquals("Hello");  // true

// Null safe comparison
boolean isEqual = "Hello".equals(null);      // false
// boolean nullError = null.equals("Hello"); // NullPointerException`}
                language="java"
              />
            </MethodCard>

            {/* Utility Methods Section */}
            <MethodCard
              title="Utility Methods"
              description="Additional useful string operations"
            >
              <CodeBlock
                code={`// Value conversion
String numStr = String.valueOf(42);    // "42"
String boolStr = String.valueOf(true); // "true"
String charStr = String.valueOf('A');  // "A"

// Formatting
String formatted = String.format("%.2f", 3.14159);  // "3.14"

// Intern pool
String s1 = "Hello";
String s2 = new String("Hello").intern();
boolean sameRef = (s1 == s2);  // true after intern()

// Unicode and code points
int unicode = "A".codePointAt(0);     // 65
boolean isLetter = Character.isLetter('A');  // true`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar (3 columns) */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="list-disc ml-6 mt-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using == for comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not handling null strings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incorrect regex patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Index out of bounds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring case sensitivity</span>
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
                  <span>Use equals() for comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check bounds before substring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider case sensitivity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use appropriate methods</span>
                </li>
              </ul>
            </div>

            {/* Key Points Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Key Points
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Immutable class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rich method set</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread-safe</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unicode support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>String pool optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringClass; 