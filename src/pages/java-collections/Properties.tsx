import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Properties: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Properties in Java
              </h1>
              <p className="text-gray-300">
                Properties is a specialized subclass of Hashtable that is used to maintain lists of key-value pairs where both keys and values are Strings. It is commonly used for configuration files, system properties, and application settings.
              </p>
            </div>

            {/* Creating Properties */}
            <MethodCard
              title="Creating Properties"
              description="Different ways to work with Properties"
            >
              <CodeBlock
                code={`// Creating Properties object
Properties props = new Properties();

// With default properties
Properties defaults = new Properties();
defaults.setProperty("timeout", "30");
Properties props = new Properties(defaults);

// Loading from file
try (FileInputStream fis = new FileInputStream("config.properties")) {
    props.load(fis);
}

// Loading from XML
try (FileInputStream fis = new FileInputStream("config.xml")) {
    props.loadFromXML(fis);
}

// System properties
Properties sysProps = System.getProperties();
String javaVersion = sysProps.getProperty("java.version");

// Environment properties
Map<String, String> env = System.getenv();`}
                language="java"
              />
            </MethodCard>

            {/* Properties Operations */}
            <MethodCard
              title="Properties Operations"
              description="Common operations with Properties"
            >
              <CodeBlock
                code={`Properties props = new Properties();

// Setting properties
props.setProperty("host", "localhost");
props.setProperty("port", "8080");

// Getting properties
String host = props.getProperty("host");
String port = props.getProperty("port", "80"); // With default

// Listing properties
props.list(System.out);

// Storing to file
try (FileOutputStream fos = new FileOutputStream("config.properties")) {
    props.store(fos, "Application Configuration");
}

// Storing as XML
try (FileOutputStream fos = new FileOutputStream("config.xml")) {
    props.storeToXML(fos, "Application Configuration");
}

// Enumerating properties
for (String key : props.stringPropertyNames()) {
    String value = props.getProperty(key);
    System.out.println(key + " = " + value);
}

// Property events
props.addPropertyChangeListener(evt -> 
    System.out.println("Property " + evt.getPropertyName() + " changed")
);`}
                language="java"
              />
            </MethodCard>

            {/* Configuration Examples */}
            <MethodCard
              title="Configuration Examples"
              description="Real-world usage examples of Properties"
            >
              <CodeBlock
                code={`// Application configuration
class AppConfig {
    private static final Properties config = new Properties();
    
    static {
        try (InputStream is = AppConfig.class
                .getResourceAsStream("/config.properties")) {
            config.load(is);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load config", e);
        }
    }
    
    public static String get(String key) {
        return config.getProperty(key);
    }
    
    public static String get(String key, String defaultValue) {
        return config.getProperty(key, defaultValue);
    }
}

// Database configuration
class DatabaseConfig {
    private final Properties dbProps = new Properties();
    
    public DatabaseConfig() {
        try (InputStream is = getClass()
                .getResourceAsStream("/db.properties")) {
            dbProps.load(is);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load DB config", e);
        }
    }
    
    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(
            dbProps.getProperty("db.url"),
            dbProps.getProperty("db.user"),
            dbProps.getProperty("db.password")
        );
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
                  <span>Non-string usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Resource leaks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unchecked exceptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing defaults</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Encoding issues</span>
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
                  <span>Use try-with-resources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Set defaults</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle exceptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document properties</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use XML for complex configs</span>
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
                  <span>Hierarchical properties</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Environment overrides</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Property listeners</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Resource bundling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Security considerations</span>
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
                  <span>String key-value pairs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Default properties</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>File persistence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>XML support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>System integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties; 