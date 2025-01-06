import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const EnumMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                EnumMap in Java
              </h1>
              <p className="text-gray-300">
                EnumMap is a specialized Map implementation for use with enum type keys. It is highly efficient and compact, as it is represented internally as an array. All keys must come from a single enum type that is specified when the map is created.
              </p>
            </div>

            {/* Creating EnumMap */}
            <MethodCard
              title="Creating EnumMap"
              description="Different ways to initialize EnumMap"
            >
              <CodeBlock
                code={`enum DayOfWeek { 
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY 
}

// Basic constructor
EnumMap<DayOfWeek, String> schedule1 = new EnumMap<>(DayOfWeek.class);

// From another EnumMap
EnumMap<DayOfWeek, String> schedule2 = new EnumMap<>(schedule1);

// From Map
Map<DayOfWeek, String> source = new HashMap<>();
source.put(DayOfWeek.MONDAY, "Work");
EnumMap<DayOfWeek, String> schedule3 = new EnumMap<>(source);

// Using Map.of (Java 9+)
EnumMap<DayOfWeek, String> schedule4 = new EnumMap<>(DayOfWeek.class);
schedule4.putAll(Map.of(
    DayOfWeek.MONDAY, "Work",
    DayOfWeek.SATURDAY, "Leisure"
));`}
                language="java"
              />
            </MethodCard>

            {/* EnumMap Operations */}
            <MethodCard
              title="EnumMap Operations"
              description="Common operations with EnumMap"
            >
              <CodeBlock
                code={`EnumMap<DayOfWeek, List<String>> schedule = 
    new EnumMap<>(DayOfWeek.class);

// Adding entries
schedule.put(DayOfWeek.MONDAY, Arrays.asList("Meeting", "Work"));
schedule.put(DayOfWeek.FRIDAY, Arrays.asList("Work", "Party"));

// Getting values
List<String> mondaySchedule = schedule.get(DayOfWeek.MONDAY);
List<String> defaultSchedule = 
    schedule.getOrDefault(DayOfWeek.SUNDAY, Collections.emptyList());

// Checking contents
boolean hasMonday = schedule.containsKey(DayOfWeek.MONDAY);
boolean hasParty = schedule.containsValue(Arrays.asList("Work", "Party"));

// Removing entries
schedule.remove(DayOfWeek.FRIDAY);

// Iteration (maintains enum order)
for (Map.Entry<DayOfWeek, List<String>> entry : schedule.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Bulk operations
schedule.clear();
schedule.putAll(Map.of(
    DayOfWeek.MONDAY, Arrays.asList("Work"),
    DayOfWeek.FRIDAY, Arrays.asList("Fun")
));`}
                language="java"
              />
            </MethodCard>

            {/* Practical Examples */}
            <MethodCard
              title="Practical Examples"
              description="Real-world usage examples of EnumMap"
            >
              <CodeBlock
                code={`// State machine transitions
enum State { IDLE, RUNNING, PAUSED, STOPPED }
enum Event { START, STOP, PAUSE, RESUME }

class StateMachine {
    private EnumMap<State, EnumMap<Event, State>> transitions =
        new EnumMap<>(State.class);
    
    public StateMachine() {
        // Initialize transitions
        for (State state : State.values()) {
            transitions.put(state, new EnumMap<>(Event.class));
        }
        
        // Define transitions
        transitions.get(State.IDLE).put(Event.START, State.RUNNING);
        transitions.get(State.RUNNING).put(Event.PAUSE, State.PAUSED);
        transitions.get(State.RUNNING).put(Event.STOP, State.STOPPED);
        transitions.get(State.PAUSED).put(Event.RESUME, State.RUNNING);
    }
    
    public State getNextState(State currentState, Event event) {
        return transitions.get(currentState).get(event);
    }
}

// Permission management
enum Permission { READ, WRITE, EXECUTE }
enum UserRole { ADMIN, USER, GUEST }

class PermissionManager {
    private EnumMap<UserRole, EnumSet<Permission>> permissions =
        new EnumMap<>(UserRole.class);
    
    public PermissionManager() {
        permissions.put(UserRole.ADMIN, EnumSet.allOf(Permission.class));
        permissions.put(UserRole.USER, 
            EnumSet.of(Permission.READ, Permission.WRITE));
        permissions.put(UserRole.GUEST, 
            EnumSet.of(Permission.READ));
    }
    
    public boolean hasPermission(UserRole role, Permission permission) {
        return permissions.get(role).contains(permission);
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
                  <span>Wrong enum class</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Null key usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mixed enum types</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unnecessary synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring enum order</span>
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
                  <span>Use for enum keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage enum ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider EnumSet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Proper initialization</span>
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
                  <span>State machines</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Nested EnumMaps</span>
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
                  <span>Iteration order</span>
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
                  <span>Enum-based keys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Array backing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Natural ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type safety</span>
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

export default EnumMap; 