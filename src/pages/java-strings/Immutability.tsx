import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const StringImmutability: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content Area (9 columns) */}
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                String Immutability in Java
              </h1>
              <p className="text-gray-300">
                In Java, strings are immutable, which means once a String object is created, its content cannot be changed. Any operation that appears to modify a string actually creates a new string object.
              </p>
            </div>

            {/* Immutability Example Section */}
            <MethodCard
              title="String Immutability Example"
              description="Understanding how string operations create new objects"
            >
              <CodeBlock
                code={`String str = "Hello";
System.out.println(str.hashCode());  // Print original hash

str = str + " World";  // Creates new string object
System.out.println(str.hashCode());  // Different hash

// Original "Hello" object remains unchanged in memory
// New "Hello World" object is created
// Old "Hello" object becomes eligible for garbage collection`}
                language="java"
              />
            </MethodCard>

            {/* String Pool Benefits Section */}
            <MethodCard
              title="String Pool Benefits"
              description="How immutability enables string pooling"
            >
              <CodeBlock
                code={`String str1 = "Hello";
String str2 = "Hello";  // Reuses same object
String str3 = new String("Hello");  // Creates new object

System.out.println(str1 == str2);  // true (same object)
System.out.println(str1 == str3);  // false (different objects)
System.out.println(str1.equals(str3));  // true (same content)`}
                language="java"
              />
            </MethodCard>

            {/* Memory Impact Section */}
            <MethodCard
              title="Memory Impact"
              description="Understanding memory implications of string operations"
            >
              <CodeBlock
                code={`// Bad practice: Creates many string objects
String result = "";
for(int i = 0; i < 5; i++) {
    result += i;  // Creates new string each time
}

// Better practice: Use StringBuilder
StringBuilder sb = new StringBuilder();
for(int i = 0; i < 5; i++) {
    sb.append(i);  // Modifies same object
}
String result = sb.toString();`}
                language="java"
              />
            </MethodCard>

            {/* Security Benefits Section */}
            <MethodCard
              title="Security Benefits"
              description="How immutability helps in security"
            >
              <CodeBlock
                code={`public class UserCredentials {
    private final String username;
    private final String password;
    
    public UserCredentials(String username, String password) {
        this.username = username;
        this.password = password;
    }
    
    // Strings being immutable means these values can't be modified
    public String getUsername() {
        return username;
    }
    
    public String getPassword() {
        return password;
    }
}`}
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
                  <span>String concatenation in loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary string objects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Modifying shared strings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring memory implications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not using StringBuilder</span>
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
                  <span>Use StringBuilder for concatenation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage string pool</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider memory usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use intern() for duplicates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Understand object creation</span>
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
                  <span>Cannot modify after creation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thread-safe by default</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enables string pooling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Secure for sensitive data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hashcode caching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringImmutability; 