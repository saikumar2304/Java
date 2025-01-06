import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ComparatorInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Comparator Interface in Java
              </h1>
              <p className="text-gray-300">
                The Comparator interface is used to define custom ordering for objects. It provides a way to compare two objects for ordering, especially useful when the natural ordering is not what we need or when we want to sort objects that don't implement Comparable.
              </p>
            </div>

            {/* Basic Comparator */}
            <MethodCard
              title="Basic Comparator"
              description="Creating and using a simple Comparator"
            >
              <CodeBlock
                code={`import java.util.Comparator;
import java.util.Arrays;

class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
}

// Comparator for sorting by age
class AgeComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return Integer.compare(s1.getAge(), s2.getAge());
    }
}

// Usage
public class ComparatorDemo {
    public static void main(String[] args) {
        Student[] students = {
            new Student("John", 20),
            new Student("Alice", 18),
            new Student("Bob", 19)
        };
        
        Arrays.sort(students, new AgeComparator());
        // Students are now sorted by age
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Multiple Comparators */}
            <MethodCard
              title="Multiple Comparators"
              description="Using different comparators for different sorting criteria"
            >
              <CodeBlock
                code={`// Name comparator
class NameComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.getName().compareTo(s2.getName());
    }
}

// Chaining comparators
class StudentComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        // First compare by age
        int ageCompare = Integer.compare(s1.getAge(), s2.getAge());
        if (ageCompare != 0) {
            return ageCompare;
        }
        // If ages are equal, compare by name
        return s1.getName().compareTo(s2.getName());
    }
}

// Using lambda expressions
Comparator<Student> byAge = (s1, s2) -> Integer.compare(s1.getAge(), s2.getAge());
Comparator<Student> byName = (s1, s2) -> s1.getName().compareTo(s2.getName());
Comparator<Student> byAgeReversed = byAge.reversed();`}
                language="java"
              />
            </MethodCard>

            {/* Comparator Methods */}
            <MethodCard
              title="Comparator Methods"
              description="Using built-in Comparator methods"
            >
              <CodeBlock
                code={`import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

class ComparatorMethodsDemo {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("John", 20),
            new Student("Alice", 18),
            new Student("Bob", 19)
        );
        
        // Using comparing()
        Comparator<Student> byAge = Comparator.comparing(Student::getAge);
        
        // Using thenComparing()
        Comparator<Student> byAgeAndName = Comparator
            .comparing(Student::getAge)
            .thenComparing(Student::getName);
        
        // Using nullsFirst()
        Comparator<Student> byAgeWithNulls = Comparator
            .nullsFirst(byAge);
        
        // Using with streams
        List<Student> sortedStudents = students.stream()
            .sorted(byAgeAndName)
            .collect(Collectors.toList());
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
                  <span>Inconsistent comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring null values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integer overflow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutating during sort</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Complex comparisons</span>
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
                  <span>Use comparing() method</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null values</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ensure consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use method references</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep comparisons simple</span>
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
                  <span>Use static comparators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Chain comparisons</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage streams API</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use utility methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider natural order</span>
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
                  <span>Custom ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comparison logic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Multiple sort criteria</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Null handling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sort stability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparatorInterface; 