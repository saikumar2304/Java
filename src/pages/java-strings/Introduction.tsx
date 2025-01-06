import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StringIntroduction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Java Strings
              </h1>
              <p className="text-gray-300">
                Strings in Java are sequences of characters. They are objects of the class java.lang.String and are widely used in Java programming. Unlike many other programming languages, Java implements strings as immutable objects.
              </p>
            </div>

            {/* String Creation Section */}
            <MethodCard
              title="Creating Strings"
              description="Different ways to create strings in Java"
            >
              <CodeBlock
                code={`// String literal
String str1 = "Hello World";

// Using new keyword
String str2 = new String("Hello World");

// Character array to String
char[] charArray = {'H', 'e', 'l', 'l', 'o'};
String str3 = new String(charArray);

// String concatenation
String str4 = "Hello" + " " + "World";`}
                language="java"
              />
            </MethodCard>

            {/* String Operations Section */}
            <MethodCard
              title="Basic String Operations"
              description="Common operations with strings"
            >
              <CodeBlock
                code={`String text = "Hello World";

// Get length
int length = text.length();  // 11

// Get character at position
char ch = text.charAt(0);    // 'H'

// Get substring
String sub = text.substring(0, 5);  // "Hello"

// Convert case
String upper = text.toUpperCase();  // "HELLO WORLD"
String lower = text.toLowerCase();  // "hello world"

// Check if empty
boolean isEmpty = text.isEmpty();  // false

// Check if contains
boolean contains = text.contains("Hello");  // true`}
                language="java"
              />
            </MethodCard>

            {/* String Comparison Section */}
            <MethodCard
              title="String Comparison"
              description="Different ways to compare strings"
            >
              <CodeBlock
                code={`String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

// Using equals()
boolean isEqual1 = s1.equals(s2);      // true
boolean isEqual2 = s1.equals(s3);      // true

// Using == operator
boolean isEqual3 = (s1 == s2);         // true (string pool)
boolean isEqual4 = (s1 == s3);         // false (different objects)

// Case-insensitive comparison
boolean isEqual5 = s1.equalsIgnoreCase("hello");  // true

// Compare lexicographically
int result = s1.compareTo("World");    // negative value`}
                language="java"
              />
            </MethodCard>

            {/* String Pool Section */}
            <MethodCard
              title="String Pool"
              description="Understanding Java String Pool"
            >
              <CodeBlock
                code={`// String literal - uses string pool
String str1 = "Hello";
String str2 = "Hello";  // Points to same object as str1

// Using new - creates new object
String str3 = new String("Hello");

// Intern method - adds to string pool
String str4 = str3.intern();  // Now points to pooled instance

System.out.println(str1 == str2);  // true
System.out.println(str1 == str3);  // false
System.out.println(str1 == str4);  // true`}
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
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Using == for string comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>String concatenation in loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not handling null strings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring string immutability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary string objects</span>
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
                  <span>Use StringBuilder for concatenation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prefer string literals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use intern() when appropriate</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null checks</span>
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
                  <span>Strings are immutable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>String pool optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Multiple creation methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rich set of methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread-safe by design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringIntroduction; 