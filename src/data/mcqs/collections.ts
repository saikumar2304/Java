export const collectionMCQs = [
  {
    id: 1,
    question: "What's wrong?\n```java\nArrayList<int> list = new ArrayList<int>();\n```",
    options: [
      { text: "Nothing wrong", isCorrect: false },
      { text: "Generics don't work with primitives", isCorrect: true },
      { text: "Should use List interface", isCorrect: false },
      { text: "Missing size parameter", isCorrect: false }
    ],
    explanation: "Generics in Java only work with reference types. Use Integer instead of int.",
    difficulty: 'Medium',
    category: 'Collections Basics',
    hasCode: true
  },
  {
    id: 2,
    question: `What will the following code output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");
        list.add("C");
        list.remove(1);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[A, C]", isCorrect: true },
        { text: "[A, B, C]", isCorrect: false },
        { text: "[A]", isCorrect: false },
        { text: "[B, C]", isCorrect: false }
    ],
    explanation: "The `remove(1)` method removes the element at index 1 (zero-based indexing).",
    difficulty: 'Easy',
    category: 'ArrayList',
    hasCode: true
},
{
    id: 3,
    question: `What is the output of this code?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Set<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(1);
        System.out.println(set.size());
    }
}
\`\`\``,
    options: [
        { text: "2", isCorrect: true },
        { text: "3", isCorrect: false },
        { text: "1", isCorrect: false },
        { text: "0", isCorrect: false }
    ],
    explanation: "HashSet does not allow duplicate elements, so adding `1` twice does not increase the size.",
    difficulty: 'Easy',
    category: 'HashSet',
    hasCode: true
},
{
    id: 4,
    question: `What happens when the following code is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("A", "Apple");
        map.put("B", "Ball");
        map.put("A", "Ant");
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{A=Ant, B=Ball}", isCorrect: true },
        { text: "{A=Apple, B=Ball}", isCorrect: false },
        { text: "{A=Ant}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "When a duplicate key is added to a HashMap, the old value is replaced by the new value.",
    difficulty: 'Medium',
    category: 'HashMap',
    hasCode: true
},
{
    id: 5,
    question: `What will the following code output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = new LinkedList<>();
        list.add("X");
        list.add("Y");
        list.add(1, "Z");
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[X, Z, Y]", isCorrect: true },
        { text: "[X, Y, Z]", isCorrect: false },
        { text: "[Z, X, Y]", isCorrect: false },
        { text: "[X, Y]", isCorrect: false }
    ],
    explanation: "The `add(int index, E element)` method inserts the element at the specified position in the LinkedList.",
    difficulty: 'Easy',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 6,
    question: `What happens when this code is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Queue<Integer> queue = new PriorityQueue<>();
        queue.add(5);
        queue.add(1);
        queue.add(3);
        System.out.println(queue.poll());
    }
}
\`\`\``,
    options: [
        { text: "1", isCorrect: true },
        { text: "5", isCorrect: false },
        { text: "3", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "A PriorityQueue orders its elements based on their natural ordering or a specified comparator. `poll()` removes the smallest element.",
    difficulty: 'Medium',
    category: 'PriorityQueue',
    hasCode: true
},
{
    id: 7,
    question: `What will be the result of executing this code?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Deque<String> deque = new ArrayDeque<>();
        deque.add("A");
        deque.addFirst("B");
        deque.addLast("C");
        System.out.println(deque);
    }
}
\`\`\``,
    options: [
        { text: "[B, A, C]", isCorrect: true },
        { text: "[A, B, C]", isCorrect: false },
        { text: "[C, A, B]", isCorrect: false },
        { text: "[A, C]", isCorrect: false }
    ],
    explanation: "`addFirst` adds the element to the front, while `addLast` adds it to the end of the deque.",
    difficulty: 'Medium',
    category: 'Deque',
    hasCode: true
},
{
    id: 8,
    question: `What happens when this TreeSet code is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Set<Integer> treeSet = new TreeSet<>();
        treeSet.add(10);
        treeSet.add(5);
        treeSet.add(20);
        System.out.println(treeSet);
    }
}
\`\`\``,
    options: [
        { text: "[5, 10, 20]", isCorrect: true },
        { text: "[10, 5, 20]", isCorrect: false },
        { text: "[20, 5, 10]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "TreeSet maintains its elements in sorted order according to their natural ordering.",
    difficulty: 'Easy',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 9,
    question: `What will happen with this Collections.sort example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Banana");
        list.add("Apple");
        list.add("Cherry");
        Collections.sort(list);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[Apple, Banana, Cherry]", isCorrect: true },
        { text: "[Banana, Apple, Cherry]", isCorrect: false },
        { text: "[Cherry, Banana, Apple]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.sort` sorts the list in natural (lexicographical) order for strings.",
    difficulty: 'Easy',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 10,
    question: `What happens with this LinkedHashMap example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<String, Integer> map = new LinkedHashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.put("C", 3);
        map.remove("B");
        map.put("D", 4);
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{A=1, C=3, D=4}", isCorrect: true },
        { text: "{C=3, A=1, D=4}", isCorrect: false },
        { text: "{D=4, A=1, C=3}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "LinkedHashMap maintains the insertion order, even after a key is removed or a new key is added.",
    difficulty: 'Medium',
    category: 'LinkedHashMap',
    hasCode: true
},
{
    id: 11,
    question: `What will this TreeMap code output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<String, Integer> treeMap = new TreeMap<>();
        treeMap.put("Banana", 3);
        treeMap.put("Apple", 5);
        treeMap.put("Cherry", 2);
        System.out.println(treeMap);
    }
}
\`\`\``,
    options: [
        { text: "{Apple=5, Banana=3, Cherry=2}", isCorrect: true },
        { text: "{Banana=3, Apple=5, Cherry=2}", isCorrect: false },
        { text: "{Cherry=2, Apple=5, Banana=3}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "TreeMap sorts its keys in natural order (lexicographically for strings).",
    difficulty: 'Medium',
    category: 'TreeMap',
    hasCode: true
},
{
    id: 12,
    question: `What is the result of this PriorityQueue code?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Queue<Integer> pq = new PriorityQueue<>();
        pq.add(15);
        pq.add(5);
        pq.add(20);
        System.out.println(pq.poll() + " " + pq.peek());
    }
}
\`\`\``,
    options: [
        { text: "5 15", isCorrect: true },
        { text: "15 20", isCorrect: false },
        { text: "5 20", isCorrect: false },
        { text: "20 15", isCorrect: false }
    ],
    explanation: "`poll` retrieves and removes the smallest element, while `peek` retrieves but does not remove the smallest element.",
    difficulty: 'Medium',
    category: 'PriorityQueue',
    hasCode: true
},
{
    id: 13,
    question: `What happens with this ListIterator example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");
        list.add("C");
        ListIterator<String> it = list.listIterator();
        while (it.hasNext()) {
            String val = it.next();
            if (val.equals("B")) {
                it.set("D");
            }
        }
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[A, D, C]", isCorrect: true },
        { text: "[A, B, C]", isCorrect: false },
        { text: "[A, D]", isCorrect: false },
        { text: "[D, C]", isCorrect: false }
    ],
    explanation: "`ListIterator.set` replaces the last element returned by `next` with the specified element.",
    difficulty: 'Medium',
    category: 'ListIterator',
    hasCode: true
},
{
    id: 14,
    question: `What will this HashSet code output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple");
        set.add("Cherry");
        System.out.println(set);
    }
}
\`\`\``,
    options: [
        { text: "[Banana, Apple, Cherry]", isCorrect: true },
        { text: "[Apple, Banana, Cherry]", isCorrect: true }, // HashSet order is not guaranteed
        { text: "[Apple, Cherry, Banana]", isCorrect: true },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "HashSet does not allow duplicates, but it does not guarantee insertion order.",
    difficulty: 'Easy',
    category: 'HashSet',
    hasCode: true
},
{
    id: 15,
    question: `What happens when this Collections.reverse example is used?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        Collections.reverse(list);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[5, 4, 3, 2, 1]", isCorrect: true },
        { text: "[1, 2, 3, 4, 5]", isCorrect: false },
        { text: "[2, 1, 4, 3, 5]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.reverse` reverses the order of elements in the specified list.",
    difficulty: 'Easy',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 16,
    question: `What is the output of this LinkedList example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("First");
        list.addLast("Last");
        list.addFirst("Very First");
        System.out.println(list.getFirst() + " and " + list.getLast());
    }
}
\`\`\``,
    options: [
        { text: "Very First and Last", isCorrect: true },
        { text: "First and Last", isCorrect: false },
        { text: "Very First and First", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`addFirst` and `addLast` add elements at the beginning and end of the list, respectively. `getFirst` and `getLast` retrieve them.",
    difficulty: 'Medium',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 17,
    question: `What happens with this NavigableSet example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        NavigableSet<Integer> set = new TreeSet<>(Arrays.asList(10, 20, 30, 40));
        System.out.println(set.lower(25) + " and " + set.higher(25));
    }
}
\`\`\``,
    options: [
        { text: "20 and 30", isCorrect: true },
        { text: "10 and 40", isCorrect: false },
        { text: "25 and 30", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`lower` retrieves the greatest element strictly less than the given element, and `higher` retrieves the least element strictly greater.",
    difficulty: 'Hard',
    category: 'NavigableSet',
    hasCode: true
},
{
    id: 18,
    question: `What will this ArrayDeque example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Deque<Integer> deque = new ArrayDeque<>();
        deque.add(10);
        deque.addFirst(5);
        deque.addLast(15);
        System.out.println(deque.pollFirst() + " " + deque.pollLast());
    }
}
\`\`\``,
    options: [
        { text: "5 15", isCorrect: true },
        { text: "10 15", isCorrect: false },
        { text: "15 5", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`pollFirst` retrieves and removes the first element, and `pollLast` retrieves and removes the last element.",
    difficulty: 'Medium',
    category: 'ArrayDeque',
    hasCode: true
},
{
    id: 19,
    question: `What happens when this code is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Set<String> set = new LinkedHashSet<>();
        set.add("B");
        set.add("A");
        set.add("C");
        System.out.println(set);
    }
}
\`\`\``,
    options: [
        { text: "[B, A, C]", isCorrect: true },
        { text: "[A, B, C]", isCorrect: false },
        { text: "[C, A, B]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "LinkedHashSet maintains the order of elements based on their insertion sequence.",
    difficulty: 'Medium',
    category: 'LinkedHashSet',
    hasCode: true
},
{
    id: 20,
    question: `What will be the result of this HashMap iteration example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("X", 10);
        map.put("Y", 20);
        map.put("Z", 30);
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " = " + entry.getValue());
        }
    }
}
\`\`\``,
    options: [
        { text: "Random order of X=10, Y=20, Z=30", isCorrect: true },
        { text: "X=10\nY=20\nZ=30", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "HashMap does not guarantee insertion order. The order of iteration depends on the hash of the keys.",
    difficulty: 'Medium',
    category: 'HashMap',
    hasCode: true
},
{
    id: 21,
    question: `What is the output of this Collections.binarySearch example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 3, 5, 7, 9);
        System.out.println(Collections.binarySearch(list, 5));
    }
}
\`\`\``,
    options: [
        { text: "2", isCorrect: true },
        { text: "3", isCorrect: false },
        { text: "-1", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`binarySearch` returns the index of the key if it exists in the list. Indexing starts from 0.",
    difficulty: 'Medium',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 22,
    question: `What happens with this ConcurrentHashMap example?
\`\`\`java
import java.util.concurrent.*;
public class Test {
    public static void main(String[] args) {
        Map<String, Integer> map = new ConcurrentHashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.putIfAbsent("A", 3);
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{A=1, B=2}", isCorrect: true },
        { text: "{A=3, B=2}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`putIfAbsent` does not override the value if the key already exists in the map.",
    difficulty: 'Medium',
    category: 'ConcurrentHashMap',
    hasCode: true
},
{
    id: 23,
    question: `What is the result of this ArrayList example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.set(1, 30);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[10, 30]", isCorrect: true },
        { text: "[10, 20, 30]", isCorrect: false },
        { text: "[30, 10]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`set` replaces the element at the specified index in the ArrayList.",
    difficulty: 'Easy',
    category: 'ArrayList',
    hasCode: true
},
{
    id: 24,
    question: `What happens when the following HashTable code is run?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Hashtable<Integer, String> table = new Hashtable<>();
        table.put(1, "A");
        table.put(2, "B");
        table.put(3, "C");
        System.out.println(table.get(2));
    }
}
\`\`\``,
    options: [
        { text: "B", isCorrect: true },
        { text: "A", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`get` retrieves the value associated with the specified key in the HashTable.",
    difficulty: 'Easy',
    category: 'HashTable',
    hasCode: true
},
{
    id: 25,
    question: `What is the result of this custom comparator example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(5, 2, 8, 1);
        Collections.sort(list, (a, b) -> b - a);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[8, 5, 2, 1]", isCorrect: true },
        { text: "[1, 2, 5, 8]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "The custom comparator sorts the list in descending order.",
    difficulty: 'Medium',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 26,
    question: `What will be the output of this LinkedList example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("X");
        list.add("Y");
        list.add("Z");
        list.removeFirst();
        list.removeLast();
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[Y]", isCorrect: true },
        { text: "[X, Z]", isCorrect: false },
        { text: "[]", isCorrect: false },
        { text: "[X, Y, Z]", isCorrect: false }
    ],
    explanation: "`removeFirst` removes the first element, and `removeLast` removes the last element, leaving only the middle element.",
    difficulty: 'Easy',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 27,
    question: `What happens when this TreeSet example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Set<Integer> set = new TreeSet<>(Comparator.reverseOrder());
        set.add(10);
        set.add(5);
        set.add(20);
        System.out.println(set);
    }
}
\`\`\``,
    options: [
        { text: "[20, 10, 5]", isCorrect: true },
        { text: "[5, 10, 20]", isCorrect: false },
        { text: "[10, 20, 5]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "TreeSet sorts its elements based on the comparator provided. Here, it sorts in descending order.",
    difficulty: 'Medium',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 28,
    question: `What will the following PriorityQueue output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Queue<String> queue = new PriorityQueue<>();
        queue.add("Orange");
        queue.add("Apple");
        queue.add("Banana");
        System.out.println(queue.poll());
    }
}
\`\`\``,
    options: [
        { text: "Apple", isCorrect: true },
        { text: "Orange", isCorrect: false },
        { text: "Banana", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "PriorityQueue orders its elements lexicographically for strings. The smallest (lexicographically) element is removed first by `poll`.",
    difficulty: 'Medium',
    category: 'PriorityQueue',
    hasCode: true
},
{
    id: 29,
    question: `What is the output of this Map merge operation?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("A", 5);
        map.put("B", 10);
        map.merge("A", 10, Integer::sum);
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{A=15, B=10}", isCorrect: true },
        { text: "{A=5, B=10}", isCorrect: false },
        { text: "{A=10, B=10}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`merge` updates the value of the specified key using the provided function. Here, the sum of 5 and 10 is computed for key 'A'.",
    difficulty: 'Hard',
    category: 'HashMap',
    hasCode: true
},
{
    id: 30,
    question: `What happens when this Collections.rotate example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "C", "D");
        Collections.rotate(list, 2);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[C, D, A, B]", isCorrect: true },
        { text: "[A, B, C, D]", isCorrect: false },
        { text: "[B, C, D, A]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.rotate` rotates the elements in the list by the specified distance (2 in this case).",
    difficulty: 'Medium',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 31,
    question: `What happens with this LinkedHashMap iteration?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<Integer, String> map = new LinkedHashMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");
        map.get(2);
        map.put(4, "Four");
        System.out.println(map.keySet());
    }
}
\`\`\``,
    options: [
        { text: "[1, 2, 3, 4]", isCorrect: true },
        { text: "[2, 1, 3, 4]", isCorrect: false },
        { text: "[1, 3, 2, 4]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "LinkedHashMap maintains the insertion order. Accessing an element does not change its position.",
    difficulty: 'Medium',
    category: 'LinkedHashMap',
    hasCode: true
},
{
    id: 32,
    question: `What will the following HashSet example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Alpha");
        set.add("Beta");
        set.add("Alpha");
        System.out.println(set.size());
    }
}
\`\`\``,
    options: [
        { text: "2", isCorrect: true },
        { text: "3", isCorrect: false },
        { text: "1", isCorrect: false },
        { text: "0", isCorrect: false }
    ],
    explanation: "HashSet does not allow duplicate elements. Adding 'Alpha' twice does not increase the size of the set.",
    difficulty: 'Easy',
    category: 'HashSet',
    hasCode: true
},
{
    id: 33,
    question: `What happens with this ArrayList sublist example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(10, 20, 30, 40, 50);
        List<Integer> subList = list.subList(1, 4);
        System.out.println(subList);
    }
}
\`\`\``,
    options: [
        { text: "[20, 30, 40]", isCorrect: true },
        { text: "[10, 20, 30]", isCorrect: false },
        { text: "[20, 30]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`subList` returns a view of the list from the specified `fromIndex` (inclusive) to `toIndex` (exclusive).",
    difficulty: 'Medium',
    category: 'ArrayList',
    hasCode: true
},
{
    id: 34,
    question: `What will be the result of this Stack example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();
        stack.push("A");
        stack.push("B");
        stack.pop();
        System.out.println(stack.peek());
    }
}
\`\`\``,
    options: [
        { text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`pop` removes the top element, and `peek` retrieves the new top element without removing it.",
    difficulty: 'Easy',
    category: 'Stack',
    hasCode: true
},
{
    id: 35,
    question: `What happens with this ArrayDeque example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Deque<String> deque = new ArrayDeque<>();
        deque.offerFirst("X");
        deque.offerLast("Y");
        deque.pollFirst();
        System.out.println(deque);
    }
}
\`\`\``,
    options: [
        { text: "[Y]", isCorrect: true },
        { text: "[X, Y]", isCorrect: false },
        { text: "[]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`offerFirst` adds an element at the front, and `pollFirst` removes the first element.",
    difficulty: 'Medium',
    category: 'ArrayDeque',
    hasCode: true
},
{
    id: 36,
    question: `What is the output of this PriorityQueue example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());
        pq.add(5);
        pq.add(10);
        pq.add(1);
        System.out.println(pq.poll());
    }
}
\`\`\``,
    options: [
        { text: "10", isCorrect: true },
        { text: "1", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "With a reverse-order comparator, the `PriorityQueue` behaves as a max-heap, so the largest element (10) is removed first.",
    difficulty: 'Medium',
    category: 'PriorityQueue',
    hasCode: true
},
{
    id: 37,
    question: `What will this LinkedHashMap example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");
        map.remove(2);
        System.out.println(map.keySet());
    }
}
\`\`\``,
    options: [
        { text: "[1, 3]", isCorrect: true },
        { text: "[1, 2, 3]", isCorrect: false },
        { text: "[3, 1]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`LinkedHashMap` maintains insertion order, even after some keys are removed.",
    difficulty: 'Easy',
    category: 'LinkedHashMap',
    hasCode: true
},
{
    id: 38,
    question: `What happens when this ConcurrentHashMap example is executed?
\`\`\`java
import java.util.concurrent.*;
public class Test {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        map.put("A", 1);
        map.put("B", 2);
        map.compute("A", (k, v) -> v + 1);
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{A=2, B=2}", isCorrect: true },
        { text: "{A=1, B=2}", isCorrect: false },
        { text: "{A=3, B=2}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`compute` updates the value for the given key by applying the specified function.",
    difficulty: 'Medium',
    category: 'ConcurrentHashMap',
    hasCode: true
},
{
    id: 39,
    question: `What will this Deque example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Deque<String> deque = new ArrayDeque<>();
        deque.add("A");
        deque.add("B");
        deque.addFirst("C");
        deque.pollLast();
        System.out.println(deque);
    }
}
\`\`\``,
    options: [
        { text: "[C, A]", isCorrect: true },
        { text: "[A, B]", isCorrect: false },
        { text: "[C, B]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`addFirst` adds the element at the front, and `pollLast` removes the last element.",
    difficulty: 'Medium',
    category: 'Deque',
    hasCode: true
},
{
    id: 40,
    question: `What happens when this Collections.shuffle example is used?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
        Collections.shuffle(list);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "A random permutation of [1, 2, 3, 4, 5]", isCorrect: true },
        { text: "[1, 2, 3, 4, 5]", isCorrect: false },
        { text: "[5, 4, 3, 2, 1]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.shuffle` randomly permutes the list.",
    difficulty: 'Easy',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 41,
    question: `What is the result of this TreeMap example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(5, "Five");
        map.put(1, "One");
        map.put(3, "Three");
        System.out.println(map.descendingMap());
    }
}
\`\`\``,
    options: [
        { text: "{5=Five, 3=Three, 1=One}", isCorrect: true },
        { text: "{1=One, 3=Three, 5=Five}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`descendingMap` returns a view of the map in reverse order of the natural ordering of its keys.",
    difficulty: 'Medium',
    category: 'TreeMap',
    hasCode: true
},
{
    id: 42,
    question: `What will this Collections.frequency example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "A", "C", "A");
        System.out.println(Collections.frequency(list, "A"));
    }
}
\`\`\``,
    options: [
        { text: "3", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "1", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.frequency` counts the number of occurrences of the specified element in the list.",
    difficulty: 'Easy',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 43,
    question: `What is the output of this HashSet iteration example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Alpha");
        set.add("Beta");
        set.add("Gamma");
        for (String s : set) {
            System.out.print(s + " ");
        }
    }
}
\`\`\``,
    options: [
        { text: "Random order of Alpha Beta Gamma", isCorrect: true },
        { text: "Alpha Beta Gamma", isCorrect: false },
        { text: "Gamma Beta Alpha", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "HashSet does not guarantee any specific iteration order.",
    difficulty: 'Easy',
    category: 'HashSet',
    hasCode: true
},
{
    id: 44,
    question: `What will this ArrayList clear example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        list.clear();
        System.out.println(list.isEmpty());
    }
}
\`\`\``,
    options: [
        { text: "true", isCorrect: true },
        { text: "false", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`clear` removes all elements from the list, making it empty.",
    difficulty: 'Easy',
    category: 'ArrayList',
    hasCode: true
},
{
    id: 45,
    question: `What will this Stack example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println(stack.pop() + " " + stack.peek());
    }
}
\`\`\``,
    options: [
        { text: "30 20", isCorrect: true },
        { text: "20 10", isCorrect: false },
        { text: "30 10", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`pop` removes the top element, and `peek` retrieves the new top element without removing it.",
    difficulty: 'Easy',
    category: 'Stack',
    hasCode: true
},
{
    id: 46,
    question: `What happens when this LinkedList iteration example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("Alpha");
        list.add("Beta");
        list.add("Gamma");
        Iterator<String> it = list.descendingIterator();
        while (it.hasNext()) {
            System.out.print(it.next() + " ");
        }
    }
}
\`\`\``,
    options: [
        { text: "Gamma Beta Alpha", isCorrect: true },
        { text: "Alpha Beta Gamma", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`descendingIterator` iterates over the elements in reverse order.",
    difficulty: 'Medium',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 47,
    question: `What will be the result of this HashMap compute example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.compute("A", (k, v) -> v * 10);
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{A=10}", isCorrect: true },
        { text: "{A=1}", isCorrect: false },
        { text: "{A=0}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`compute` updates the value of the specified key using the provided function.",
    difficulty: 'Medium',
    category: 'HashMap',
    hasCode: true
},
{
    id: 48,
    question: `What happens with this TreeSet ceiling example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>(Arrays.asList(10, 20, 30, 40));
        System.out.println(set.ceiling(25));
    }
}
\`\`\``,
    options: [
        { text: "30", isCorrect: true },
        { text: "25", isCorrect: false },
        { text: "40", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`ceiling` returns the smallest element greater than or equal to the given value (25).",
    difficulty: 'Medium',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 49,
    question: `What is the output of this PriorityQueue example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        PriorityQueue<String> pq = new PriorityQueue<>();
        pq.add("Orange");
        pq.add("Apple");
        pq.add("Banana");
        pq.poll();
        System.out.println(pq);
    }
}
\`\`\``,
    options: [
        { text: "[Banana, Orange]", isCorrect: true },
        { text: "[Orange, Banana]", isCorrect: false },
        { text: "[Apple, Orange, Banana]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`poll` removes the smallest element (lexicographically) from the PriorityQueue.",
    difficulty: 'Medium',
    category: 'PriorityQueue',
    hasCode: true
},
{
    id: 50,
    question: `What happens when this NavigableSet floor example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        NavigableSet<Integer> set = new TreeSet<>(Arrays.asList(10, 20, 30, 40));
        System.out.println(set.floor(25));
    }
}
\`\`\``,
    options: [
        { text: "20", isCorrect: true },
        { text: "25", isCorrect: false },
        { text: "30", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`floor` returns the largest element less than or equal to the given value (25).",
    difficulty: 'Medium',
    category: 'NavigableSet',
    hasCode: true
},
{
    id: 51,
    question: `What is the result of this Collections.max example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 5, 3, 10, 2);
        System.out.println(Collections.max(list));
    }
}
\`\`\``,
    options: [
        { text: "10", isCorrect: true },
        { text: "5", isCorrect: false },
        { text: "1", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.max` returns the largest element in the specified collection.",
    difficulty: 'Easy',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 52,
    question: `What happens with this LinkedHashSet example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedHashSet<String> set = new LinkedHashSet<>();
        set.add("Alpha");
        set.add("Beta");
        set.add("Gamma");
        set.remove("Beta");
        System.out.println(set);
    }
}
\`\`\``,
    options: [
        { text: "[Alpha, Gamma]", isCorrect: true },
        { text: "[Gamma, Alpha]", isCorrect: false },
        { text: "[Alpha, Beta, Gamma]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`LinkedHashSet` maintains insertion order, and `remove` removes the specified element.",
    difficulty: 'Easy',
    category: 'LinkedHashSet',
    hasCode: true
},
{
    id: 53,
    question: `What will this TreeMap firstKey example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(10, "Ten");
        map.put(5, "Five");
        map.put(20, "Twenty");
        System.out.println(map.firstKey());
    }
}
\`\`\``,
    options: [
        { text: "5", isCorrect: true },
        { text: "10", isCorrect: false },
        { text: "20", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`firstKey` returns the smallest key in the TreeMap.",
    difficulty: 'Easy',
    category: 'TreeMap',
    hasCode: true
},
{
    id: 54,
    question: `What happens when this HashTable example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Hashtable<Integer, String> table = new Hashtable<>();
        table.put(1, "A");
        table.put(2, "B");
        table.put(3, "C");
        table.remove(2);
        System.out.println(table);
    }
}
\`\`\``,
    options: [
        { text: "{1=A, 3=C}", isCorrect: true },
        { text: "{1=A, 2=B, 3=C}", isCorrect: false },
        { text: "{2=B}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`remove` removes the specified key-value pair from the HashTable.",
    difficulty: 'Easy',
    category: 'HashTable',
    hasCode: true
},
{
    id: 55,
    question: `What will this ArrayList example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
        list.add(1, "D");
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[A, D, B, C]", isCorrect: true },
        { text: "[A, B, D, C]", isCorrect: false },
        { text: "[D, A, B, C]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`add(int index, E element)` inserts the specified element at the given position in the list.",
    difficulty: 'Easy',
    category: 'ArrayList',
    hasCode: true
},
{
    id: 56,
    question: `What happens when this TreeSet example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>();
        set.add(10);
        set.add(5);
        set.add(20);
        System.out.println(set.headSet(10));
    }
}
\`\`\``,
    options: [
        { text: "[5]", isCorrect: true },
        { text: "[10]", isCorrect: false },
        { text: "[5, 10]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`headSet(E toElement)` returns a view of the elements strictly less than the specified element (10).",
    difficulty: 'Medium',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 57,
    question: `What is the output of this LinkedHashMap iteration?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<Integer, String> map = new LinkedHashMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.print(entry.getKey() + " ");
        }
    }
}
\`\`\``,
    options: [
        { text: "1 2 3", isCorrect: true },
        { text: "3 2 1", isCorrect: false },
        { text: "2 3 1", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`LinkedHashMap` maintains insertion order during iteration.",
    difficulty: 'Easy',
    category: 'LinkedHashMap',
    hasCode: true
},
{
    id: 58,
    question: `What happens with this Collections.replaceAll example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "A", "C");
        Collections.replaceAll(list, "A", "X");
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[X, B, X, C]", isCorrect: true },
        { text: "[A, B, X, C]", isCorrect: false },
        { text: "[X, B, A, C]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`replaceAll` replaces all occurrences of the specified old value with the new value in the list.",
    difficulty: 'Medium',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 59,
    question: `What is the output of this PriorityQueue example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(15);
        pq.offer(5);
        pq.offer(10);
        System.out.println(pq.poll() + " " + pq.peek());
    }
}
\`\`\``,
    options: [
        { text: "5 10", isCorrect: true },
        { text: "15 5", isCorrect: false },
        { text: "5 15", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`poll` removes the smallest element, and `peek` retrieves the next smallest element without removing it.",
    difficulty: 'Medium',
    category: 'PriorityQueue',
    hasCode: true
},
{
    id: 60,
    question: `What happens with this HashSet contains example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>(Arrays.asList("A", "B", "C"));
        System.out.println(set.contains("B"));
    }
}
\`\`\``,
    options: [
        { text: "true", isCorrect: true },
        { text: "false", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`contains` checks if the specified element exists in the set.",
    difficulty: 'Easy',
    category: 'HashSet',
    hasCode: true
},
{
    id: 61,
    question: `What is the result of this Deque example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Deque<String> deque = new ArrayDeque<>();
        deque.add("A");
        deque.addFirst("B");
        deque.addLast("C");
        System.out.println(deque.pollFirst() + " " + deque.pollLast());
    }
}
\`\`\``,
    options: [
        { text: "B C", isCorrect: true },
        { text: "A B", isCorrect: false },
        { text: "A C", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`pollFirst` removes the first element, and `pollLast` removes the last element.",
    difficulty: 'Medium',
    category: 'Deque',
    hasCode: true
},
{
    id: 62,
    question: `What happens with this LinkedList sublist example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>(Arrays.asList(1, 2, 3, 4, 5));
        List<Integer> subList = list.subList(2, 4);
        System.out.println(subList);
    }
}
\`\`\``,
    options: [
        { text: "[3, 4]", isCorrect: true },
        { text: "[2, 3]", isCorrect: false },
        { text: "[3, 4, 5]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`subList` returns a view of the list from the specified `fromIndex` (inclusive) to `toIndex` (exclusive).",
    difficulty: 'Medium',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 63,
    question: `What will this TreeSet last example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>(Arrays.asList(5, 10, 15, 20));
        System.out.println(set.last());
    }
}
\`\`\``,
    options: [
        { text: "20", isCorrect: true },
        { text: "15", isCorrect: false },
        { text: "10", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`last` returns the largest element in the TreeSet.",
    difficulty: 'Easy',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 64,
    question: `What is the output of this LinkedHashMap putIfAbsent example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();
        map.put(1, "One");
        map.putIfAbsent(1, "Two");
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{1=One}", isCorrect: true },
        { text: "{1=Two}", isCorrect: false },
        { text: "{}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`putIfAbsent` does not overwrite an existing value for the specified key.",
    difficulty: 'Easy',
    category: 'LinkedHashMap',
    hasCode: true
},
{
    id: 65,
    question: `What happens with this TreeSet tailSet example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>(Arrays.asList(5, 10, 15, 20));
        System.out.println(set.tailSet(15));
    }
}
\`\`\``,
    options: [
        { text: "[15, 20]", isCorrect: true },
        { text: "[10, 15, 20]", isCorrect: false },
        { text: "[5, 10, 15, 20]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`tailSet(E fromElement)` returns a view of the elements greater than or equal to the specified element.",
    difficulty: 'Medium',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 66,
    question: `What is the result of this HashMap computeIfAbsent example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.computeIfAbsent(1, k -> "Value" + k);
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{1=Value1}", isCorrect: true },
        { text: "{1=null}", isCorrect: false },
        { text: "{}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`computeIfAbsent` computes a value for the key if it is not already present in the map.",
    difficulty: 'Medium',
    category: 'HashMap',
    hasCode: true
},
{
    id: 67,
    question: `What happens with this ArrayDeque pollFirst example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Deque<String> deque = new ArrayDeque<>(Arrays.asList("A", "B", "C"));
        System.out.println(deque.pollFirst());
    }
}
\`\`\``,
    options: [
        { text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`pollFirst` retrieves and removes the first element from the deque.",
    difficulty: 'Easy',
    category: 'ArrayDeque',
    hasCode: true
},
{
    id: 68,
    question: `What is the result of this Collections.swap example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "C", "D");
        Collections.swap(list, 1, 3);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[A, D, C, B]", isCorrect: true },
        { text: "[A, B, C, D]", isCorrect: false },
        { text: "[D, B, C, A]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.swap` swaps the elements at the specified positions in the list.",
    difficulty: 'Medium',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 69,
    question: `What happens with this LinkedHashSet iteration?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedHashSet<Integer> set = new LinkedHashSet<>(Arrays.asList(10, 20, 30));
        for (Integer i : set) {
            System.out.print(i + " ");
        }
    }
}
\`\`\``,
    options: [
        { text: "10 20 30", isCorrect: true },
        { text: "30 20 10", isCorrect: false },
        { text: "20 30 10", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`LinkedHashSet` maintains insertion order during iteration.",
    difficulty: 'Easy',
    category: 'LinkedHashSet',
    hasCode: true
},
{
    id: 70,
    question: `What will this PriorityQueue comparator example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());
        pq.offer(10);
        pq.offer(5);
        pq.offer(20);
        System.out.println(pq.poll());
    }
}
\`\`\``,
    options: [
        { text: "20", isCorrect: true },
        { text: "5", isCorrect: false },
        { text: "10", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "With a reverse-order comparator, the largest element is removed first by `poll`.",
    difficulty: 'Medium',
    category: 'PriorityQueue',
    hasCode: true
},
{
    id: 71,
    question: `What is the output of this TreeMap example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(3, "Three");
        map.put(1, "One");
        map.put(2, "Two");
        System.out.println(map.firstEntry());
    }
}
\`\`\``,
    options: [
        { text: "1=One", isCorrect: true },
        { text: "3=Three", isCorrect: false },
        { text: "2=Two", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`firstEntry` returns the entry with the smallest key in the map.",
    difficulty: 'Easy',
    category: 'TreeMap',
    hasCode: true
},
{
    id: 72,
    question: `What happens with this Collections.fill example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "C");
        Collections.fill(list, "X");
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[X, X, X]", isCorrect: true },
        { text: "[A, B, C]", isCorrect: false },
        { text: "[X, B, C]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.fill` replaces all elements in the list with the specified value.",
    difficulty: 'Medium',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 73,
    question: `What is the result of this LinkedList add example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("A");
        list.add("B");
        list.addFirst("C");
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[C, A, B]", isCorrect: true },
        { text: "[A, C, B]", isCorrect: false },
        { text: "[B, C, A]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`addFirst` inserts the specified element at the beginning of the list.",
    difficulty: 'Easy',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 74,
    question: `What is the output of this TreeSet comparator example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeSet<String> set = new TreeSet<>(Comparator.reverseOrder());
        set.add("Banana");
        set.add("Apple");
        set.add("Cherry");
        System.out.println(set);
    }
}
\`\`\``,
    options: [
        { text: "[Cherry, Banana, Apple]", isCorrect: true },
        { text: "[Apple, Banana, Cherry]", isCorrect: false },
        { text: "[Banana, Cherry, Apple]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "The reverse-order comparator sorts the elements in descending order.",
    difficulty: 'Medium',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 75,
    question: `What will this HashMap example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("A", "Apple");
        map.put("B", "Ball");
        map.put("A", "Ant");
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{A=Ant, B=Ball}", isCorrect: true },
        { text: "{A=Apple, B=Ball}", isCorrect: false },
        { text: "{B=Ball}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "When a duplicate key is added, the old value is replaced with the new one in a HashMap.",
    difficulty: 'Easy',
    category: 'HashMap',
    hasCode: true
},
{
    id: 76,
    question: `What happens with this TreeMap higherEntry example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(10, "Ten");
        map.put(20, "Twenty");
        map.put(30, "Thirty");
        System.out.println(map.higherEntry(20));
    }
}
\`\`\``,
    options: [
        { text: "30=Thirty", isCorrect: true },
        { text: "20=Twenty", isCorrect: false },
        { text: "10=Ten", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`higherEntry` returns the smallest entry strictly greater than the given key.",
    difficulty: 'Medium',
    category: 'TreeMap',
    hasCode: true
},
{
    id: 77,
    question: `What is the result of this Stack iteration example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();
        stack.push("A");
        stack.push("B");
        stack.push("C");
        for (String s : stack) {
            System.out.print(s + " ");
        }
    }
}
\`\`\``,
    options: [
        { text: "A B C", isCorrect: true },
        { text: "C B A", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "Iteration over a Stack using enhanced for-loop follows its insertion order.",
    difficulty: 'Easy',
    category: 'Stack',
    hasCode: true
},
{
    id: 78,
    question: `What will this Collections.rotate example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "C", "D");
        Collections.rotate(list, -2);
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[C, D, A, B]", isCorrect: true },
        { text: "[B, C, D, A]", isCorrect: false },
        { text: "[A, B, C, D]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`rotate` with a negative distance shifts elements to the left by the specified amount.",
    difficulty: 'Medium',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 79,
    question: `What happens with this TreeSet comparator example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>(Comparator.reverseOrder());
        set.add(10);
        set.add(5);
        set.add(20);
        System.out.println(set.first());
    }
}
\`\`\``,
    options: [
        { text: "20", isCorrect: true },
        { text: "10", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "With a reverse-order comparator, `first` retrieves the largest element in the set.",
    difficulty: 'Medium',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 80,
    question: `What is the output of this Deque example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Deque<Integer> deque = new ArrayDeque<>();
        deque.offerFirst(1);
        deque.offerLast(2);
        System.out.println(deque.pollLast());
    }
}
\`\`\``,
    options: [
        { text: "2", isCorrect: true },
        { text: "1", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`pollLast` retrieves and removes the last element from the deque.",
    difficulty: 'Easy',
    category: 'Deque',
    hasCode: true
},
{
    id: 81,
    question: `What happens with this LinkedList contains example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>(Arrays.asList(1, 2, 3, 4));
        System.out.println(list.contains(3));
    }
}
\`\`\``,
    options: [
        { text: "true", isCorrect: true },
        { text: "false", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`contains` checks whether the list contains the specified element.",
    difficulty: 'Easy',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 82,
    question: `What is the result of this LinkedHashMap compute example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();
        map.put(1, "One");
        map.compute(1, (k, v) -> v + " Updated");
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{1=One Updated}", isCorrect: true },
        { text: "{1=One}", isCorrect: false },
        { text: "{1=null}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`compute` updates the value of the specified key based on the provided function.",
    difficulty: 'Medium',
    category: 'LinkedHashMap',
    hasCode: true
},
{
    id: 83,
    question: `What happens with this HashSet iteration?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>(Arrays.asList("X", "Y", "Z"));
        for (String s : set) {
            System.out.print(s + " ");
        }
    }
}
\`\`\``,
    options: [
        { text: "Random order of X Y Z", isCorrect: true },
        { text: "X Y Z", isCorrect: false },
        { text: "Z Y X", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`HashSet` does not guarantee iteration order.",
    difficulty: 'Easy',
    category: 'HashSet',
    hasCode: true
},
{
    id: 84,
    question: `What will this PriorityQueue example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());
        pq.add(15);
        pq.add(10);
        pq.add(5);
        System.out.println(pq.poll() + " " + pq.peek());
    }
}
\`\`\``,
    options: [
        { text: "15 10", isCorrect: true },
        { text: "5 15", isCorrect: false },
        { text: "10 5", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "With a reverse-order comparator, `poll` removes the largest element (15), and `peek` retrieves the next largest element (10).",
    difficulty: 'Medium',
    category: 'PriorityQueue',
    hasCode: true
},
{
    id: 85,
    question: `What happens when this TreeMap entrySet example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(1, "One");
        map.put(3, "Three");
        map.put(2, "Two");
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
\`\`\``,
    options: [
        { text: "1 -> One\n2 -> Two\n3 -> Three", isCorrect: true },
        { text: "3 -> Three\n2 -> Two\n1 -> One", isCorrect: false },
        { text: "1 -> One\n3 -> Three\n2 -> Two", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`TreeMap` maintains natural order for keys, so the entries are iterated in ascending order of keys.",
    difficulty: 'Easy',
    category: 'TreeMap',
    hasCode: true
},
{
    id: 86,
    question: `What will this ArrayDeque remove example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Deque<String> deque = new ArrayDeque<>(Arrays.asList("A", "B", "C"));
        deque.remove("B");
        System.out.println(deque);
    }
}
\`\`\``,
    options: [
        { text: "[A, C]", isCorrect: true },
        { text: "[B, C]", isCorrect: false },
        { text: "[A, B, C]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`remove` removes the first occurrence of the specified element in the deque.",
    difficulty: 'Easy',
    category: 'ArrayDeque',
    hasCode: true
},
{
    id: 87,
    question: `What happens with this LinkedHashSet retainAll example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedHashSet<Integer> set = new LinkedHashSet<>(Arrays.asList(1, 2, 3, 4));
        set.retainAll(Arrays.asList(2, 4, 6));
        System.out.println(set);
    }
}
\`\`\``,
    options: [
        { text: "[2, 4]", isCorrect: true },
        { text: "[1, 3]", isCorrect: false },
        { text: "[1, 2, 3, 4]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`retainAll` retains only the elements that are present in both the LinkedHashSet and the specified collection.",
    difficulty: 'Medium',
    category: 'LinkedHashSet',
    hasCode: true
},
{
    id: 88,
    question: `What is the output of this Collections.reverseOrder example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(3, 1, 4, 1, 5);
        Collections.sort(list, Collections.reverseOrder());
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[5, 4, 3, 1, 1]", isCorrect: true },
        { text: "[1, 1, 3, 4, 5]", isCorrect: false },
        { text: "[3, 4, 1, 5, 1]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`Collections.reverseOrder` sorts the list in descending order.",
    difficulty: 'Medium',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 89,
    question: `What will this HashMap replace example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "One");
        map.replace(1, "Updated One");
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{1=Updated One}", isCorrect: true },
        { text: "{1=One}", isCorrect: false },
        { text: "{}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`replace` updates the value for the specified key if it exists in the map.",
    difficulty: 'Easy',
    category: 'HashMap',
    hasCode: true
},
{
    id: 90,
    question: `What happens with this TreeSet addAll example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>(Arrays.asList(5, 10));
        set.addAll(Arrays.asList(15, 20, 5));
        System.out.println(set);
    }
}
\`\`\``,
    options: [
        { text: "[5, 10, 15, 20]", isCorrect: true },
        { text: "[15, 20, 5, 10]", isCorrect: false },
        { text: "[10, 5, 15, 20]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`addAll` adds all elements from the specified collection, ignoring duplicates, and `TreeSet` maintains natural ordering.",
    difficulty: 'Easy',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 91,
    question: `What will this LinkedList poll example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>(Arrays.asList("Alpha", "Beta", "Gamma"));
        System.out.println(list.poll());
    }
}
\`\`\``,
    options: [
        { text: "Alpha", isCorrect: true },
        { text: "Beta", isCorrect: false },
        { text: "Gamma", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`poll` retrieves and removes the first element of the list.",
    difficulty: 'Easy',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 92,
    question: `What is the output of this TreeMap tailMap example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");
        System.out.println(map.tailMap(2));
    }
}
\`\`\``,
    options: [
        { text: "{2=Two, 3=Three}", isCorrect: true },
        { text: "{1=One, 2=Two}", isCorrect: false },
        { text: "{3=Three}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`tailMap(K fromKey)` returns a view of the map containing entries greater than or equal to the given key.",
    difficulty: 'Medium',
    category: 'TreeMap',
    hasCode: true
},
{
    id: 93,
    question: `What happens with this HashMap merge example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "A");
        map.merge(1, "B", String::concat);
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{1=AB}", isCorrect: true },
        { text: "{1=A}", isCorrect: false },
        { text: "{1=B}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`merge` combines the existing value and the new value using the provided function.",
    difficulty: 'Medium',
    category: 'HashMap',
    hasCode: true
},
{
    id: 94,
    question: `What will this HashMap keySet example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");
        System.out.println(map.keySet());
    }
}
\`\`\``,
    options: [
        { text: "[1, 2, 3]", isCorrect: true },
        { text: "[One, Two, Three]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`keySet` returns a set view of the keys contained in the map.",
    difficulty: 'Easy',
    category: 'HashMap',
    hasCode: true
},
{
    id: 95,
    question: `What is the output of this LinkedList descendingIterator example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>(Arrays.asList(10, 20, 30));
        Iterator<Integer> it = list.descendingIterator();
        while (it.hasNext()) {
            System.out.print(it.next() + " ");
        }
    }
}
\`\`\``,
    options: [
        { text: "30 20 10", isCorrect: true },
        { text: "10 20 30", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`descendingIterator` iterates through the elements in reverse order.",
    difficulty: 'Easy',
    category: 'LinkedList',
    hasCode: true
},
{
    id: 96,
    question: `What happens with this Collections.singletonList example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = Collections.singletonList("A");
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[A]", isCorrect: true },
        { text: "[]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`singletonList` creates an immutable list containing only the specified element.",
    difficulty: 'Easy',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 97,
    question: `What will this TreeSet subSet example output?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeSet<Integer> set = new TreeSet<>(Arrays.asList(10, 20, 30, 40, 50));
        System.out.println(set.subSet(20, 40));
    }
}
\`\`\``,
    options: [
        { text: "[20, 30]", isCorrect: true },
        { text: "[20, 30, 40]", isCorrect: false },
        { text: "[10, 20]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`subSet(E fromElement, E toElement)` returns a view of the portion of the set between the specified elements, excluding the upper bound.",
    difficulty: 'Medium',
    category: 'TreeSet',
    hasCode: true
},
{
    id: 98,
    question: `What happens when this Collections.emptyList example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        List<String> list = Collections.emptyList();
        System.out.println(list);
    }
}
\`\`\``,
    options: [
        { text: "[]", isCorrect: true },
        { text: "[null]", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`emptyList` returns an immutable empty list.",
    difficulty: 'Easy',
    category: 'Collections Utility',
    hasCode: true
},
{
    id: 99,
    question: `What is the result of this TreeMap pollFirstEntry example?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");
        System.out.println(map.pollFirstEntry());
    }
}
\`\`\``,
    options: [
        { text: "1=One", isCorrect: true },
        { text: "2=Two", isCorrect: false },
        { text: "3=Three", isCorrect: false },
        { text: "Compilation Error", isCorrect: false }
    ],
    explanation: "`pollFirstEntry` removes and returns the entry with the smallest key in the map.",
    difficulty: 'Medium',
    category: 'TreeMap',
    hasCode: true
},
{
    id: 100,
    question: `What happens when this LinkedHashMap clear example is executed?
\`\`\`java
import java.util.*;
public class Test {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");
        map.clear();
        System.out.println(map);
    }
}
\`\`\``,
    options: [
        { text: "{}", isCorrect: true },
        { text: "{1=One, 2=Two, 3=Three}", isCorrect: false },
        { text: "Compilation Error", isCorrect: false },
        { text: "Runtime Error", isCorrect: false }
    ],
    explanation: "`clear` removes all entries from the LinkedHashMap, leaving it empty.",
    difficulty: 'Easy',
    category: 'LinkedHashMap',
    hasCode: true
}


]; 