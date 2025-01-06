import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const ComparableVsComparator: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Comparable vs Comparator in Java
              </h1>
              <p className="text-gray-300">
                While both Comparable and Comparator are used for ordering objects, they serve different purposes. Comparable provides a natural ordering for a class, while Comparator defines custom ordering that can be used independently of the class definition.
              </p>
            </div>

            {/* Key Differences */}
            <MethodCard
              title="Key Differences"
              description="Comparing Comparable and Comparator interfaces"
            >
              <CodeBlock
                code={`// Comparable - Internal comparison (implements Comparable)
public class Student implements Comparable<Student> {
    private String name;
    private double gpa;
    
    @Override
    public int compareTo(Student other) {
        return Double.compare(this.gpa, other.gpa);
    }
}

// Comparator - External comparison (separate class/lambda)
public class StudentNameComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.getName().compareTo(s2.getName());
    }
}

// Usage examples
List<Student> students = new ArrayList<>();

// Using Comparable (natural ordering)
Collections.sort(students);  // Sorts by GPA

// Using Comparator (custom ordering)
Collections.sort(students, new StudentNameComparator());  // Sorts by name
Collections.sort(students, 
    (s1, s2) -> s1.getName().compareTo(s2.getName()));  // Lambda version`}
                language="java"
              />
            </MethodCard>

            {/* Multiple Sorting Criteria */}
            <MethodCard
              title="Multiple Sorting Criteria"
              description="Implementing multiple sort orders"
            >
              <CodeBlock
                code={`class Book implements Comparable<Book> {
    private String title;
    private String author;
    private int year;
    
    // Natural ordering by title
    @Override
    public int compareTo(Book other) {
        return this.title.compareTo(other.title);
    }
}

// Various Comparators for different sorting needs
class BookComparators {
    // By author
    public static final Comparator<Book> BY_AUTHOR = 
        Comparator.comparing(Book::getAuthor);
    
    // By year (reversed)
    public static final Comparator<Book> BY_YEAR_DESC = 
        Comparator.comparing(Book::getYear).reversed();
    
    // By author, then year
    public static final Comparator<Book> BY_AUTHOR_THEN_YEAR = 
        Comparator.comparing(Book::getAuthor)
                  .thenComparing(Book::getYear);
    
    // Complex custom comparison
    public static final Comparator<Book> CUSTOM = (b1, b2) -> {
        if (b1.getYear() != b2.getYear()) {
            return Integer.compare(b2.getYear(), b1.getYear());
        }
        int authorCompare = b1.getAuthor().compareTo(b2.getAuthor());
        if (authorCompare != 0) {
            return authorCompare;
        }
        return b1.getTitle().compareTo(b2.getTitle());
    };
}

// Usage
List<Book> books = new ArrayList<>();
books.sort(BookComparators.BY_AUTHOR);
books.sort(BookComparators.BY_YEAR_DESC);
books.sort(BookComparators.BY_AUTHOR_THEN_YEAR);`}
                language="java"
              />
            </MethodCard>

            {/* Practical Examples */}
            <MethodCard
              title="Practical Examples"
              description="Real-world usage scenarios"
            >
              <CodeBlock
                code={`// Using with TreeMap/TreeSet
TreeSet<Book> byTitle = new TreeSet<>();  // Uses natural ordering
TreeSet<Book> byAuthor = new TreeSet<>(BookComparators.BY_AUTHOR);

// Sorting with null values
Comparator<String> nullsFirst = Comparator.nullsFirst(
    String::compareTo
);
Comparator<String> nullsLast = Comparator.nullsLast(
    String::compareTo
);

// Combining multiple comparators
Comparator<Book> combined = BookComparators.BY_AUTHOR
    .thenComparing(BookComparators.BY_YEAR_DESC)
    .thenComparing(Book::getTitle);

// Using with streams
List<Book> sortedBooks = books.stream()
    .sorted(BookComparators.BY_AUTHOR_THEN_YEAR)
    .collect(Collectors.toList());

// Reversing comparators
Comparator<Book> reversed = BookComparators.BY_AUTHOR.reversed();

// Case-insensitive string comparison
Comparator<String> caseInsensitive = 
    String.CASE_INSENSITIVE_ORDER;`}
                language="java"
              />
            </MethodCard>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-8">
            {/* When to Use What */}
            <div className="bg-yellow-900/20 border border-yellow-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-yellow-200">
                When to Use What
              </h2>
              <ul className="space-y-3 text-yellow-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Comparable for natural ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Comparator for multiple orderings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Comparator for external ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Comparable for simple cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Comparator for flexibility</span>
                </li>
              </ul>
            </div>

            {/* Common Mistakes Section */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-200">
                Common Mistakes to Avoid
              </h2>
              <ul className="space-y-3 text-red-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mixing comparison logic</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Inconsistent ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring null cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Violating contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mutable comparison fields</span>
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
                  <span>Use helper methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Test edge cases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider immutability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use static factories</span>
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
                  <span>Custom ordering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comparison contract</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sort stability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Chain of comparison</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparableVsComparator; 