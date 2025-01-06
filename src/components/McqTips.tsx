import React from 'react';

const McqTips: React.FC<{ category: string }> = ({ category }) => {
  const tips = {
    basics: [
      "Start by identifying the data type of variables in the question.",
      "Check for uninitialized variables in the scope of the program.",
      "Eliminate options based on syntax errors or type mismatches.",
      "Look for operator precedence and ensure logical evaluation step-by-step.",
      "Watch out for tricky casting operations, especially with incompatible types.",
      "Check if default values are causing subtle issues (e.g., null references).",
      "Focus on whether local variables are explicitly initialized—missing initialization leads to errors."
    ],
    'control-flow': [
      "Begin by analyzing conditions and their sequence of execution.",
      "Look for tricky break or continue statements within nested loops.",
      "In switch cases, check whether break statements are present to avoid fall-through.",
      "For loops, manually trace iterations for variable changes.",
      "Watch for infinite loops caused by incorrect condition updates.",
      "Double-check how labeled loops (e.g., `outer:`) influence execution.",
      "Analyze conditions with compound logical operators (&&, ||) for short-circuiting behavior."
    ],
    strings: [
      "Check if String comparisons use `==` (reference) or `.equals()` (content).",
      "Look for operations that create new Strings (e.g., replace, substring).",
      "Analyze String concatenation and ensure operator precedence is maintained.",
      "Watch for null references when methods like `.length()` or `.charAt()` are invoked.",
      "Focus on edge cases in substring extraction (e.g., index out of bounds).",
      "Be cautious with immutability—operations on Strings never modify the original instance.",
      "Check if interning impacts the results in String pool vs `new String()` comparisons."
    ],
    arrays: [
      "Verify the size and type of the array and its initialization.",
      "Manually trace multi-dimensional arrays, row by row, or column by column.",
      "Look for array out-of-bounds errors by checking access indices.",
      "Check for irregular arrays (jagged arrays) with differing lengths.",
      "Review initialization for primitive vs object arrays—object arrays default to null.",
      "Trace nested loops accessing arrays and check for mismatched dimensions.",
      "Verify that array operations (e.g., cloning or copying) are performed correctly."
    ],
    interfaces: [
      "Start by identifying the type of interface: functional, marker, or standard.",
      "Check whether interface methods are abstract, default, or static.",
      "Eliminate options by recognizing invalid modifiers (e.g., private or protected).",
      "Analyze conflicts in multiple inheritance scenarios with interfaces.",
      "Pay attention to functional interface annotations (`@FunctionalInterface`).",
      "Check if default methods introduce ambiguity in diamond problem scenarios.",
      "Remember that interfaces can extend other interfaces but not classes."
    ],
    methods: [
      "Look for method overloading by checking parameter types, not just names or return types.",
      "In method overriding, focus on access modifiers and return type compatibility.",
      "Trace recursive calls to identify base cases and potential infinite loops.",
      "Eliminate options that violate method signature rules in overloading or overriding.",
      "Watch for the use of `final` methods—they cannot be overridden.",
      "Check for static methods—they are not polymorphic and are resolved at compile time.",
      "Pay attention to `this` vs `super` for accessing current vs parent class methods."
    ],
    oop: [
      "Start by identifying class relationships: inheritance, composition, or aggregation.",
      "Check constructors to see if `super()` or overloading is used.",
      "Focus on the polymorphic behavior of overridden methods.",
      "Verify that abstract classes and interfaces are implemented correctly.",
      "Analyze access modifiers for inheritance scenarios (private, protected, public).",
      "Understand how static members behave in inherited classes.",
      "Look for final classes—they cannot be extended."
    ],
    collections: [
      "Analyze the type of collection being used: List, Set, or Map.",
      "Trace loops or streams iterating over collections.",
      "Check generics for type mismatches or unsafe operations.",
      "Eliminate options that misuse methods like `add()` or `remove()` on unmodifiable collections.",
      "Watch for ConcurrentModificationException when modifying a collection during iteration.",
      "Know which collections allow null values (e.g., HashMap, ArrayList).",
      "Understand sorting and comparison methods like `Comparator` and `Comparable`."
    ]
  };

  const tricks = {
    basics: [
      "Quickly scan for compilation errors—syntax and type mismatch are common traps.",
      "Memorize common default values (e.g., 0 for int, false for boolean).",
      "Eliminate options that involve illegal type casting or conversions.",
      "Remember, uninitialized local variables are not allowed in Java."
    ],
    'control-flow': [
      "Visualize nested loop execution using tables for clarity.",
      "Check for logical short-circuiting with && and || in complex conditions.",
      "Break down conditions involving labeled loops to understand flow redirection.",
      "Look for off-by-one errors in loop boundaries."
    ],
    strings: [
      "Use `.equals()` for content comparison, not `==`.",
      "Focus on whether new String objects or literals are being compared.",
      "Watch for methods like `substring` that may throw `IndexOutOfBoundsException`.",
      "Be cautious with concatenation—precedence can drastically change results."
    ],
    arrays: [
      "Verify dimensions in multi-dimensional arrays for nesting issues.",
      "Always validate array index operations to avoid `ArrayIndexOutOfBoundsException`.",
      "Identify shallow vs deep copies when cloning arrays.",
      "Check irregular array initialization (e.g., jagged arrays)."
    ],
    interfaces: [
      "Remember interfaces can have static and default methods (Java 8+).",
      "Pay attention to marker interfaces—they often influence behavior indirectly.",
      "Identify diamond problem scenarios with multiple default methods.",
      "Static methods in interfaces are not inherited."
    ],
    methods: [
      "Analyze parameter lists to resolve overloading questions.",
      "Focus on return type covariance in overriding methods.",
      "Static methods are resolved at compile time—polymorphism does not apply.",
      "Trace recursive calls carefully to avoid infinite loop traps."
    ],
    oop: [
      "Always check the hierarchy for overridden methods.",
      "Look for ambiguity in multiple inheritance with interfaces.",
      "Verify constructor behavior—parent constructors must always be called.",
      "Watch for static members—they are shared across all instances of a class."
    ],
    collections: [
      "Understand whether the collection is ordered or unordered.",
      "Check for thread safety in collection operations (e.g., Vector vs ArrayList).",
      "Identify immutable collections—methods like `add()` will throw exceptions.",
      "Trace operations like sorting to verify correctness of custom comparators."
    ]
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">Tips for {category}</h3>
      <ul className="list-disc pl-5 space-y-1">
        {tips[category as keyof typeof tips]?.map((tip, index) => (
          <li key={index} className="text-gray-300">{tip}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mt-4 mb-2">Tricks for {category}</h3>
      <ul className="list-disc pl-5 space-y-1">
        {tricks[category as keyof typeof tricks]?.map((trick, index) => (
          <li key={index} className="text-gray-300">{trick}</li>
        ))}
      </ul>
    </div>
  );
};

export default McqTips;
