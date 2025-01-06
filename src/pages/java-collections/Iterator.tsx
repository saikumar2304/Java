import React from 'react';
import MethodCard from '../../components/MethodCard';
import CodeBlock from '../../components/CodeBlock';

const Iterator: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9 space-y-8">
            {/* Introduction Section */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-100">
                Iterator Interface in Java
              </h1>
              <p className="text-gray-300">
                The Iterator interface provides a way to traverse through a collection of objects sequentially. It's a fundamental part of Java's collection framework that enables uniform access to elements regardless of the underlying collection type.
              </p>
            </div>

            {/* Basic Usage */}
            <MethodCard
              title="Basic Usage"
              description="Common Iterator operations"
            >
              <CodeBlock
                code={`List<String> list = Arrays.asList("A", "B", "C");
Iterator<String> iterator = list.iterator();

// Basic iteration
while (iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}

// Using for-each (internally uses Iterator)
for (String element : list) {
    System.out.println(element);
}

// Removing elements during iteration
Iterator<String> iter = list.iterator();
while (iter.hasNext()) {
    String element = iter.next();
    if (element.equals("B")) {
        iter.remove();  // Safe way to remove during iteration
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Custom Iterator */}
            <MethodCard
              title="Custom Iterator"
              description="Implementing custom Iterator"
            >
              <CodeBlock
                code={`class CustomCollection<T> implements Iterable<T> {
    private T[] elements;
    private int size;
    
    @SuppressWarnings("unchecked")
    public CustomCollection(int capacity) {
        elements = (T[]) new Object[capacity];
        size = 0;
    }
    
    public void add(T element) {
        if (size < elements.length) {
            elements[size++] = element;
        }
    }
    
    @Override
    public Iterator<T> iterator() {
        return new CustomIterator();
    }
    
    private class CustomIterator implements Iterator<T> {
        private int currentIndex = 0;
        private boolean canRemove = false;
        
        @Override
        public boolean hasNext() {
            return currentIndex < size;
        }
        
        @Override
        public T next() {
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            canRemove = true;
            return elements[currentIndex++];
        }
        
        @Override
        public void remove() {
            if (!canRemove) {
                throw new IllegalStateException();
            }
            // Shift elements left
            for (int i = currentIndex - 1; i < size - 1; i++) {
                elements[i] = elements[i + 1];
            }
            elements[--size] = null;
            currentIndex--;
            canRemove = false;
        }
    }
}`}
                language="java"
              />
            </MethodCard>

            {/* Advanced Patterns */}
            <MethodCard
              title="Advanced Patterns"
              description="Advanced Iterator usage patterns"
            >
              <CodeBlock
                code={`// Filtered Iterator
class FilteredIterator<T> implements Iterator<T> {
    private final Iterator<T> iterator;
    private final Predicate<T> predicate;
    private T nextElement;
    private boolean hasNext;
    
    public FilteredIterator(Iterator<T> iterator, Predicate<T> predicate) {
        this.iterator = iterator;
        this.predicate = predicate;
        advance();
    }
    
    private void advance() {
        while (iterator.hasNext()) {
            nextElement = iterator.next();
            if (predicate.test(nextElement)) {
                hasNext = true;
                return;
            }
        }
        hasNext = false;
    }
    
    @Override
    public boolean hasNext() {
        return hasNext;
    }
    
    @Override
    public T next() {
        if (!hasNext) {
            throw new NoSuchElementException();
        }
        T result = nextElement;
        advance();
        return result;
    }
}

// Usage example
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Iterator<Integer> evenNumbers = new FilteredIterator<>(
    numbers.iterator(),
    n -> n % 2 == 0
);

// Chaining Iterators
class ChainedIterator<T> implements Iterator<T> {
    private final Queue<Iterator<T>> iterators;
    private Iterator<T> current;
    
    public ChainedIterator(Iterator<T>... iterators) {
        this.iterators = new LinkedList<>(Arrays.asList(iterators));
        advance();
    }
    
    private void advance() {
        while ((current == null || !current.hasNext()) 
               && !iterators.isEmpty()) {
            current = iterators.poll();
        }
    }
    
    @Override
    public boolean hasNext() {
        return current != null && current.hasNext();
    }
    
    @Override
    public T next() {
        if (!hasNext()) {
            throw new NoSuchElementException();
        }
        T result = current.next();
        advance();
        return result;
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
                  <span>Modifying collection directly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Calling next() without hasNext()</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Multiple remove() calls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Concurrent modification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reusing exhausted iterators</span>
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
                  <span>Use for-each when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Check hasNext() first</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Handle exceptions properly</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use fail-fast iterators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consider thread safety</span>
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
                  <span>Custom implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lazy evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Filtering patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Chaining iterators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance optimization</span>
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
                  <span>Sequential access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fail-fast behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Iterator contract</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Safe removal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Iterable interface</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iterator; 