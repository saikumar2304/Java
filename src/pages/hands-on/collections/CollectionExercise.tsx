import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
    'array-list-ops': {
      title: "ArrayList Operations",
      description: "Implement basic ArrayList operations.",
      initialCode: `import java.util.ArrayList;
  
  public class Main {
      public static void main(String[] args) {
          ArrayList<String> list = new ArrayList<>();
          // Add three elements
          // Remove the second element
          // Print the list
      }
  }`,
      solution: `import java.util.ArrayList;
  
  public class Main {
      public static void main(String[] args) {
          ArrayList<String> list = new ArrayList<>();
          list.add("First");
          list.add("Second");
          list.add("Third");
          list.remove(1);
          System.out.println(list);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "[First, Third]"
        }
      ]
    },
    'linkedlist-implementation': {
      title: "LinkedList Implementation",
      description: "Use LinkedList to perform insertion and deletion operations.",
      initialCode: `import java.util.LinkedList;
  
  public class Main {
      public static void main(String[] args) {
          LinkedList<String> list = new LinkedList<>();
          // Add elements, remove one, and print the list
      }
  }`,
      solution: `import java.util.LinkedList;
  
  public class Main {
      public static void main(String[] args) {
          LinkedList<String> list = new LinkedList<>();
          list.add("One");
          list.add("Two");
          list.add("Three");
          list.remove(1);
          System.out.println(list);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "[One, Three]"
        }
      ]
    },
    'hashset-usage': {
      title: "HashSet Usage",
      description: "Demonstrate the use of HashSet to remove duplicates from a list.",
      initialCode: `import java.util.ArrayList;
  import java.util.HashSet;
  
  public class Main {
      public static void main(String[] args) {
          ArrayList<Integer> numbers = new ArrayList<>();
          numbers.add(1);
          numbers.add(2);
          numbers.add(2);
          numbers.add(3);
          // Use HashSet to remove duplicates and print the result
      }
  }`,
      solution: `import java.util.ArrayList;
  import java.util.HashSet;
  
  public class Main {
      public static void main(String[] args) {
          ArrayList<Integer> numbers = new ArrayList<>();
          numbers.add(1);
          numbers.add(2);
          numbers.add(2);
          numbers.add(3);
  
          HashSet<Integer> uniqueNumbers = new HashSet<>(numbers);
          System.out.println(uniqueNumbers);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "[1, 2, 3]"
        }
      ]
    },
    'treemap-basics': {
      title: "TreeMap Basics",
      description: "Store key-value pairs in a TreeMap and retrieve them in sorted order.",
      initialCode: `import java.util.TreeMap;
  
  public class Main {
      public static void main(String[] args) {
          TreeMap<String, Integer> map = new TreeMap<>();
          // Add key-value pairs and print the map
      }
  }`,
      solution: `import java.util.TreeMap;
  
  public class Main {
      public static void main(String[] args) {
          TreeMap<String, Integer> map = new TreeMap<>();
          map.put("Apple", 10);
          map.put("Banana", 5);
          map.put("Cherry", 7);
          System.out.println(map);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "{Apple=10, Banana=5, Cherry=7}"
        }
      ]
    },
    'queue-operations': {
      title: "Queue Operations",
      description: "Implement basic Queue operations like enqueue and dequeue.",
      initialCode: `import java.util.LinkedList;
  import java.util.Queue;
  
  public class Main {
      public static void main(String[] args) {
          Queue<Integer> queue = new LinkedList<>();
          // Add elements, remove one, and print the queue
      }
  }`,
      solution: `import java.util.LinkedList;
  import java.util.Queue;
  
  public class Main {
      public static void main(String[] args) {
          Queue<Integer> queue = new LinkedList<>();
          queue.add(1);
          queue.add(2);
          queue.add(3);
          queue.remove();
          System.out.println(queue);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "[2, 3]"
        }
      ]
    },
    'priorityqueue-example': {
      title: "Priority Queue Example",
      description: "Implement a task scheduler using PriorityQueue.",
      initialCode: `import java.util.PriorityQueue;
  
  public class Main {
      public static void main(String[] args) {
          PriorityQueue<Integer> pq = new PriorityQueue<>();
          // Add tasks and print them in priority order
      }
  }`,
      solution: `import java.util.PriorityQueue;
  
  public class Main {
      public static void main(String[] args) {
          PriorityQueue<Integer> pq = new PriorityQueue<>();
          pq.add(5);
          pq.add(1);
          pq.add(3);
          while (!pq.isEmpty()) {
              System.out.println(pq.poll());
          }
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "1\n3\n5"
        }
      ]
    },
    'hashmap-freq': {
      title: "Word Frequency Counter",
      description: "Count word frequencies using HashMap.",
      initialCode: `import java.util.HashMap;
  
  public class Main {
      public static void main(String[] args) {
          String text = "hello world hello java world";
          // Count and print word frequencies
      }
  }`,
      solution: `import java.util.HashMap;
  
  public class Main {
      public static void main(String[] args) {
          String text = "hello world hello java world";
          String[] words = text.split(" ");
          HashMap<String, Integer> freq = new HashMap<>();
          
          for (String word : words) {
              freq.put(word, freq.getOrDefault(word, 0) + 1);
          }
          
          System.out.println(freq);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "{world=2, java=1, hello=2}"
        }
      ]
    },
    'set-operations': {
      title: "Set Operations",
      description: "Implement union and intersection operations using HashSet.",
      initialCode: `import java.util.HashSet;
  
  public class Main {
      public static void main(String[] args) {
          HashSet<Integer> set1 = new HashSet<>();
          set1.add(1); set1.add(2); set1.add(3);
          
          HashSet<Integer> set2 = new HashSet<>();
          set2.add(2); set2.add(3); set2.add(4);
          
          // Find and print union and intersection
      }
  }`,
      solution: `import java.util.HashSet;
  
  public class Main {
      public static void main(String[] args) {
          HashSet<Integer> set1 = new HashSet<>();
          set1.add(1); set1.add(2); set1.add(3);
          
          HashSet<Integer> set2 = new HashSet<>();
          set2.add(2); set2.add(3); set2.add(4);
          
          // Union
          HashSet<Integer> union = new HashSet<>(set1);
          union.addAll(set2);
          
          // Intersection
          HashSet<Integer> intersection = new HashSet<>(set1);
          intersection.retainAll(set2);
          
          System.out.println("Union: " + union);
          System.out.println("Intersection: " + intersection);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "Union: [1, 2, 3, 4]\nIntersection: [2, 3]"
        }
      ]
    },
    'lru-cache': {
      title: "LRU Cache Implementation",
      description: "Implement an LRU Cache using LinkedHashMap.",
      initialCode: `import java.util.LinkedHashMap;
  import java.util.Map;
  
  public class LRUCache<K, V> extends LinkedHashMap<K, V> {
      private final int capacity;
  
      public LRUCache(int capacity) {
          super(capacity, 0.75f, true);
          this.capacity = capacity;
      }
  
      @Override
      protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
          return size() > capacity;
      }
  
      public static void main(String[] args) {
          LRUCache<Integer, String> cache = new LRUCache<>(3);
          cache.put(1, "A");
          cache.put(2, "B");
          cache.put(3, "C");
          cache.get(1);
          cache.put(4, "D");
          System.out.println(cache);
      }
  }`,
      solution: `import java.util.LinkedHashMap;
  import java.util.Map;
  
  public class LRUCache<K, V> extends LinkedHashMap<K, V> {
      private final int capacity;
  
      public LRUCache(int capacity) {
          super(capacity, 0.75f, true);
          this.capacity = capacity;
      }
  
      @Override
      protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
          return size() > capacity;
      }
  
      public static void main(String[] args) {
          LRUCache<Integer, String> cache = new LRUCache<>(3);
          cache.put(1, "A");
          cache.put(2, "B");
          cache.put(3, "C");
          cache.get(1);
          cache.put(4, "D");
          System.out.println(cache);
      }
  }`,
      testCases: [
        {
          input: "",
          expectedOutput: "{1=A, 3=C, 4=D}"
        }
      ]
    },

  'stack-implementation': {
    title: "Stack Implementation",
    description: "Use Stack to reverse a string or perform undo operations.",
    initialCode: `import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        String str = "Hello";
        // Use Stack to reverse the string
    }
}`,
    solution: `import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        String str = "Hello";
        Stack<Character> stack = new Stack<>();
        for (char c : str.toCharArray()) {
            stack.push(c);
        }
        StringBuilder reversed = new StringBuilder();
        while (!stack.isEmpty()) {
            reversed.append(stack.pop());
        }
        System.out.println(reversed.toString());
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "olleH"
      }
    ]
  },
  'comparator-sorting': {
    title: "Comparator Sorting",
    description: "Sort a list of objects using Comparator and Collections.sort().",
    initialCode: `import java.util.*;

public class Main {
    static class Person {
        String name;
        int age;

        Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }

    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));
        // Sort by age
    }
}`,
    solution: `import java.util.*;

public class Main {
    static class Person {
        String name;
        int age;

        Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }

    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));

        Collections.sort(people, Comparator.comparingInt(p -> p.age));

        for (Person person : people) {
            System.out.println(person.name + " " + person.age);
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Bob 25\nAlice 30\nCharlie 35"
      }
    ]
  },
  'iterator-usage': {
    title: "Iterator Usage",
    description: "Use Iterator to traverse and modify a collection safely.",
    initialCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        // Remove even numbers using Iterator
    }
}`,
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        Iterator<Integer> iterator = numbers.iterator();
        while (iterator.hasNext()) {
            if (iterator.next() % 2 == 0) {
                iterator.remove();
            }
        }
        System.out.println(numbers);
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "[1, 3, 5]"
      }
    ]
  },
  'synchronized-collection': {
    title: "Synchronized Collection",
    description: "Demonstrate the use of synchronized collections in multithreading.",
    initialCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Collections.synchronizedList(new ArrayList<>());
        // Add and access elements in a synchronized manner
    }
}`,
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Collections.synchronizedList(new ArrayList<>());
        synchronized (numbers) {
            numbers.add(1);
            numbers.add(2);
            numbers.add(3);
        }
        synchronized (numbers) {
            for (int num : numbers) {
                System.out.println(num);
            }
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "1\n2\n3"
      }
    ]
  },
  'concurrenthashmap-demo': {
    title: "ConcurrentHashMap Demo",
    description: "Implement thread-safe operations using ConcurrentHashMap.",
    initialCode: `import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        // Add and access elements in a thread-safe manner
    }
}`,
    solution: `import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.put("C", 3);
        map.forEach((key, value) -> System.out.println(key + ": " + value));
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "A: 1\nB: 2\nC: 3"
      }
    ]
  },
  'custom-collection': {
    title: "Custom Collection",
    description: "Create a custom collection class that implements Collection interface.",
    initialCode: `import java.util.*;

public class CustomCollection<E> implements Collection<E> {
    // Implement required methods of Collection interface
}`,
    solution: `import java.util.*;

public class CustomCollection<E> implements Collection<E> {
    private final List<E> list = new ArrayList<>();

    @Override
    public int size() {
        return list.size();
    }

    @Override
    public boolean isEmpty() {
        return list.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return list.contains(o);
    }

    @Override
    public Iterator<E> iterator() {
        return list.iterator();
    }

    @Override
    public Object[] toArray() {
        return list.toArray();
    }

    @Override
    public <T> T[] toArray(T[] a) {
        return list.toArray(a);
    }

    @Override
    public boolean add(E e) {
        return list.add(e);
    }

    @Override
    public boolean remove(Object o) {
        return list.remove(o);
    }

    @Override
    public boolean containsAll(Collection<?> c) {
        return list.containsAll(c);
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        return list.addAll(c);
    }

    @Override
    public boolean removeAll(Collection<?> c) {
        return list.removeAll(c);
    }

    @Override
    public boolean retainAll(Collection<?> c) {
        return list.retainAll(c);
    }

    @Override
    public void clear() {
        list.clear();
    }
}`,
    testCases: []
  },
  'comparable-interface': {
    title: "Comparable Interface",
    description: "Implement Comparable to sort custom objects.",
    initialCode: `import java.util.*;

public class Main {
    static class Person implements Comparable<Person> {
        String name;
        int age;

        Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        // Implement Comparable's compareTo method
    }

    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));
        // Sort the list and print
    }
}`,
    solution: `import java.util.*;

public class Main {
    static class Person implements Comparable<Person> {
        String name;
        int age;

        Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        @Override
        public int compareTo(Person other) {
            return Integer.compare(this.age, other.age);
        }
    }

    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));
        Collections.sort(people);
        for (Person person : people) {
            System.out.println(person.name + " " + person.age);
        }
    }
}`,
    testCases: [
      {
        input: "",
        expectedOutput: "Bob 25\nAlice 30\nCharlie 35"
      }
    ]
  },
  'collections-utility': {
    title: "Collections Utility Methods",
    description: "Use Collections class methods like shuffle, reverse, and max.",
    initialCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        // Shuffle and reverse the list
    }
}`,
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        Collections.shuffle(numbers);
        System.out.println("Shuffled: " + numbers);
        Collections.reverse(numbers);
        System.out.println("Reversed: " + numbers);
        System.out.println("Max: " + Collections.max(numbers));
    }
}`,
    testCases: []
  },
  'immutable-collections': {
    title: "Immutable Collections",
    description: "Create and use immutable collections.",
    initialCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Create an immutable list
    }
}`,
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> immutableList = List.of("A", "B", "C");
        System.out.println(immutableList);
    }
}`,
    testCases: []
  }
};
  

const CollectionExercise: React.FC = () => {
  const { exerciseId } = useParams();
  const exercise = exerciseId ? exercises[exerciseId as keyof typeof exercises] : null;

  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  return (
    <HandsOnExercise
      title={exercise.title}
      description={exercise.description}
      initialCode={exercise.initialCode}
      solution={exercise.solution}
      testCases={exercise.testCases}
    />
  );
};

export default CollectionExercise;