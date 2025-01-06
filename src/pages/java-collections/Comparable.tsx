import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ComparableInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Comparable Interface in Java
              </h1>
              <p className="text-gray-300">
                The Comparable interface imposes a total ordering on objects of a class that implements it. This ordering is referred to as the class's "natural ordering". Classes that implement Comparable can be automatically sorted in collections and arrays.
              </p>
            </div>

            {/* Basic Implementation */}
            <MethodCard
              title="Basic Implementation"
              description="Implementing Comparable interface"
            >
              <CodeBlock
                code={`public class Student implements Comparable<Student> {
    private String name;
    private int grade;
    
    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }
    
    @Override
    public int compareTo(Student other) {
        // Compare by grade
        return Integer.compare(this.grade, other.grade);
        
        // Or manually:
        // return this.grade - other.grade;
    }
    
    // getters, setters, toString...
}

// Using the natural ordering
List<Student> students = new ArrayList<>();
students.add(new Student("Alice", 85));
students.add(new Student("Bob", 92));
students.add(new Student("Charlie", 78));

// Automatic sorting using natural ordering
Collections.sort(students);  // Sorts by grade

// Using in TreeSet
TreeSet<Student> studentSet = new TreeSet<>();
studentSet.add(new Student("Alice", 85));  // Automatically ordered`}
                language="java"
              />
            </MethodCard>

            {/* Multiple Criteria */}
            <MethodCard
              title="Multiple Criteria"
              description="Implementing complex comparisons"
            >
              <CodeBlock
                code={`public class Employee implements Comparable<Employee> {
    private String department;
    private int salary;
    private String name;
    
    public Employee(String name, String department, int salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    @Override
    public int compareTo(Employee other) {
        // Primary: department
        int deptCompare = this.department.compareTo(other.department);
        if (deptCompare != 0) {
            return deptCompare;
        }
        
        // Secondary: salary (descending)
        int salaryCompare = Integer.compare(other.salary, this.salary);
        if (salaryCompare != 0) {
            return salaryCompare;
        }
        
        // Tertiary: name
        return this.name.compareTo(other.name);
    }
    
    // Alternative using Comparator methods
    @Override
    public int compareTo(Employee other) {
        return Comparator.comparing(Employee::getDepartment)
                        .thenComparing(Employee::getSalary, Comparator.reverseOrder())
                        .thenComparing(Employee::getName)
                        .compare(this, other);
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Best Practices */}
            <MethodCard
              title="Best Practices"
              description="Guidelines for implementing Comparable"
            >
              <CodeBlock
                code={`public class Product implements Comparable<Product> {
    private String name;
    private double price;
    
    // GOOD: Consistent with equals
    @Override
    public int compareTo(Product other) {
        if (other == null) {
            throw new NullPointerException();
        }
        if (this == other) {
            return 0;
        }
        
        int result = Double.compare(this.price, other.price);
        if (result != 0) {
            return result;
        }
        return this.name.compareTo(other.name);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Product)) return false;
        Product other = (Product) obj;
        return Double.compare(price, other.price) == 0 &&
               Objects.equals(name, other.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, price);
    }
    
    // BAD: Inconsistent with equals
    @Override
    public int compareTo(Product other) {
        return Double.compare(this.price, other.price);
        // Problem: Two products with same price but different names
        // will compare as equal here but not in equals()
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
                  <span>Inconsistent with equals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integer overflow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring null</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breaking symmetry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Violating transitivity</span>
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
                  <span>Match equals method</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use helper methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle null properly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider composition</span>
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
                  <span>Use Comparator methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Chain comparisons</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider immutability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Test edge cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance tuning</span>
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
                  <span>Natural ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Total ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Transitivity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Symmetry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparableInterface; 