import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const MarkerInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Marker Interfaces in Java
              </h1>
              <p className="text-gray-300">
                A marker interface is an empty interface (no methods) that serves as a tag to mark classes for special handling by the JVM or frameworks. Common examples include Serializable, Cloneable, and Remote interfaces.
              </p>
            </div>

            {/* Basic Marker Interface */}
            <MethodCard
              title="Basic Marker Interface"
              description="Creating and using marker interfaces"
            >
              <CodeBlock
                code={`// Marker interface definition
interface Deletable {
    // No methods - just marks classes that can be deleted
}

// Class implementing marker interface
class Document implements Deletable {
    private String content;
    
    public Document(String content) {
        this.content = content;
    }
}

// Using marker interface
class DocumentManager {
    public void deleteIfPossible(Object obj) {
        if (obj instanceof Deletable) {
            // Safe to delete
            System.out.println("Deleting object...");
        } else {
            System.out.println("Object cannot be deleted");
        }
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Built-in Marker Interfaces */}
            <MethodCard
              title="Built-in Marker Interfaces"
              description="Using Java's built-in marker interfaces"
            >
              <CodeBlock
                code={`// Serializable marker interface
class User implements Serializable {
    private String username;
    private transient String password; // Won't be serialized
    
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}

// Cloneable marker interface
class Configuration implements Cloneable {
    private Map<String, String> settings;
    
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

// Using marker interfaces
public class MarkerDemo {
    public static void main(String[] args) {
        User user = new User("john", "password123");
        Configuration config = new Configuration();
        
        // Check for marker interfaces
        System.out.println("User is Serializable: " + 
            (user instanceof Serializable));
        System.out.println("Config is Cloneable: " + 
            (config instanceof Cloneable));
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Custom Marker Interface Usage */}
            <MethodCard
              title="Custom Marker Interface Usage"
              description="Implementing custom marker interfaces"
            >
              <CodeBlock
                code={`// Custom marker interfaces
interface Printable {}
interface Exportable {}

class Report implements Printable, Exportable {
    private String title;
    private String content;
}

class DocumentProcessor {
    public void process(Object document) {
        if (document instanceof Printable) {
            System.out.println("Document can be printed");
        }
        
        if (document instanceof Exportable) {
            System.out.println("Document can be exported");
        }
        
        if (document instanceof Printable && 
            document instanceof Exportable) {
            System.out.println("Document can be printed and exported");
        }
    }
}`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-8">
            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Adding methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overuse of markers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring annotations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Poor documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Misusing instanceof</span>
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
                  <span>Use meaningful names</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider annotations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep it simple</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use sparingly</span>
                </li>
              </ul>
            </div>

            {/* Pro Tips Section */}
            <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-200">
                Pro Tips
              </h2>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use for runtime checks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider type safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Combine with annotations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plan inheritance hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use for framework integration</span>
                </li>
              </ul>
            </div>

            {/* Key Concepts Section */}
            <div className="bg-purple-900/20 border border-purple-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-purple-200">
                Key Concepts
              </h2>
              <ul className="space-y-3 text-purple-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Empty interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Runtime type checking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Behavioral marking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Framework integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkerInterface; 