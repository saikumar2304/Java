import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const EnumSet: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                EnumSet in Java
              </h1>
              <p className="text-gray-300">
                EnumSet is a specialized Set implementation for use with enum types. It is highly efficient, using a bit vector internally. All elements in an EnumSet must come from a single enum type that is specified when the set is created.
              </p>
            </div>

            {/* Creating EnumSet */}
            <MethodCard
              title="Creating EnumSet"
              description="Different ways to initialize EnumSet"
            >
              <CodeBlock
                code={`enum Day { 
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY 
}

// Empty EnumSet
EnumSet<Day> empty = EnumSet.noneOf(Day.class);

// All values
EnumSet<Day> allDays = EnumSet.allOf(Day.class);

// Specific values
EnumSet<Day> weekDays = EnumSet.of(
    Day.MONDAY, Day.TUESDAY, Day.WEDNESDAY, 
    Day.THURSDAY, Day.FRIDAY
);

// Range of values
EnumSet<Day> workDays = EnumSet.range(Day.MONDAY, Day.FRIDAY);

// Complement of a set
EnumSet<Day> weekend = EnumSet.complementOf(weekDays);

// Copy constructor
EnumSet<Day> copy = EnumSet.copyOf(weekDays);

// From Collection
List<Day> list = Arrays.asList(Day.MONDAY, Day.FRIDAY);
EnumSet<Day> fromList = EnumSet.copyOf(list);`}
                language="java"
              />
            </MethodCard>

            {/* EnumSet Operations */}
            <MethodCard
              title="EnumSet Operations"
              description="Common operations with EnumSet"
            >
              <CodeBlock
                code={`EnumSet<Day> days = EnumSet.noneOf(Day.class);

// Adding elements
days.add(Day.MONDAY);
days.addAll(EnumSet.of(Day.TUESDAY, Day.WEDNESDAY));

// Removing elements
days.remove(Day.MONDAY);
days.removeAll(EnumSet.of(Day.TUESDAY, Day.WEDNESDAY));

// Checking contents
boolean hasMonday = days.contains(Day.MONDAY);
boolean hasAll = days.containsAll(
    EnumSet.of(Day.MONDAY, Day.TUESDAY)
);

// Bulk operations
days.clear();                    // Remove all elements
days.addAll(EnumSet.allOf(Day.class));  // Add all enum values

// Set operations
EnumSet<Day> weekDays = EnumSet.range(Day.MONDAY, Day.FRIDAY);
EnumSet<Day> weekend = EnumSet.complementOf(weekDays);

// Iteration (maintains enum order)
for (Day day : days) {
    System.out.println(day);
}

// Converting to array
Day[] array = days.toArray(new Day[0]);

// Size operations
boolean isEmpty = days.isEmpty();
int size = days.size();`}
                language="java"
              />
            </MethodCard>

            {/* Practical Examples */}
            <MethodCard
              title="Practical Examples"
              description="Real-world usage examples of EnumSet"
            >
              <CodeBlock
                code={`// Flags and permissions
enum Permission { READ, WRITE, EXECUTE, DELETE }

class FilePermissions {
    private EnumSet<Permission> permissions;
    
    public FilePermissions() {
        permissions = EnumSet.noneOf(Permission.class);
    }
    
    public void grantPermission(Permission permission) {
        permissions.add(permission);
    }
    
    public void revokePermission(Permission permission) {
        permissions.remove(permission);
    }
    
    public boolean hasPermission(Permission permission) {
        return permissions.contains(permission);
    }
    
    public void grantAllPermissions() {
        permissions = EnumSet.allOf(Permission.class);
    }
}

// Style flags
enum Style { BOLD, ITALIC, UNDERLINE, STRIKETHROUGH }

class TextFormatter {
    private EnumSet<Style> activeStyles;
    
    public TextFormatter() {
        activeStyles = EnumSet.noneOf(Style.class);
    }
    
    public void toggleStyle(Style style) {
        if (activeStyles.contains(style)) {
            activeStyles.remove(style);
        } else {
            activeStyles.add(style);
        }
    }
    
    public boolean hasStyle(Style style) {
        return activeStyles.contains(style);
    }
    
    public String format(String text) {
        // Apply styles based on activeStyles
        return text; // Simplified implementation
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
                  <span>Mixed enum types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Null element usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrong enum class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary HashSet use</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring bit vector</span>
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
                  <span>Use factory methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prefer over HashSet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage bit operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider immutability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type safety</span>
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
                  <span>Bit vector operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Memory efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Set operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Range operations</span>
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
                  <span>Bit vector backing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type safety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enum ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Set operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnumSet; 