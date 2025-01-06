import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const FunctionalInterface: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Functional Interfaces in Java
              </h1>
              <p className="text-gray-300">
                A functional interface is an interface that contains exactly one abstract method. They are the foundation for lambda expressions in Java. These interfaces can have any number of default or static methods.
              </p>
            </div>

            {/* Basic Functional Interface */}
            <MethodCard
              title="Basic Functional Interface"
              description="Creating and using functional interfaces"
            >
              <CodeBlock
                code={`@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
    
    // Default method is allowed
    default void printInfo() {
        System.out.println("Calculator Interface");
    }
}

public class Main {
    public static void main(String[] args) {
        // Using lambda expression
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;
        
        System.out.println(add.calculate(5, 3));      // 8
        System.out.println(multiply.calculate(5, 3)); // 15
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Built-in Functional Interfaces */}
            <MethodCard
              title="Built-in Functional Interfaces"
              description="Common functional interfaces from java.util.function"
            >
              <CodeBlock
                code={`import java.util.function.*;

public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        // Predicate - Takes one argument, returns boolean
        Predicate<Integer> isPositive = x -> x > 0;
        System.out.println(isPositive.test(5));  // true
        
        // Function - Takes one argument, returns a result
        Function<String, Integer> strLength = str -> str.length();
        System.out.println(strLength.apply("Hello"));  // 5
        
        // Consumer - Takes one argument, returns nothing
        Consumer<String> printer = str -> System.out.println(str);
        printer.accept("Hello World");  // Hello World
        
        // Supplier - Takes no arguments, returns a result
        Supplier<Double> random = () -> Math.random();
        System.out.println(random.get());  // Random number
        
        // BiFunction - Takes two arguments, returns a result
        BiFunction<Integer, Integer, String> sum = 
            (a, b) -> String.valueOf(a + b);
        System.out.println(sum.apply(2, 3));  // "5"
    }`}
                language="java"
              />
            </MethodCard>

            {/* Method References */}
            <MethodCard
              title="Method References"
              description="Using method references with functional interfaces"
            >
              <CodeBlock
                code={`import java.util.Arrays;
import java.util.List;

class StringProcessor {
    static String toUpperCase(String str) {
        return str.toUpperCase();
    }
}

public class MethodReferenceDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("john", "mary", "peter");
        
        // Using method reference
        names.forEach(System.out::println);
        
        // Static method reference
        names.stream()
            .map(StringProcessor::toUpperCase)
            .forEach(System.out::println);
        
        // Instance method reference
        String prefix = "User: ";
        names.stream()
            .map(prefix::concat)
            .forEach(System.out::println);
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
                  <span>Multiple abstract methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Missing @FunctionalInterface</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lambda parameter confusion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overcomplicating lambdas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ignoring built-in interfaces</span>
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
                  <span>Use @FunctionalInterface</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prefer built-in interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep lambdas simple</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use method references</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document behavior</span>
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
                  <span>Chain functional operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use type inference</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Leverage method references</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider composition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle exceptions properly</span>
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
                  <span>Single Abstract Method</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lambda Expressions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Method References</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Type Inference</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Functional Composition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalInterface; 