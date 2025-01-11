import React from 'react';
import { useParams } from 'react-router-dom';
import HandsOnExercise from '../../../components/HandsOnExercise';

const exercises = {
  'string-reverse': {
    title: "Reverse String",
    description: "Write a program to reverse a string without using StringBuilder.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        // Write your code here to reverse the string
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length / 2; i++) {
            char temp = chars[i];
            chars[i] = chars[chars.length - 1 - i];
            chars[chars.length - 1 - i] = temp;
        }
        System.out.println(new String(chars));
    }
}`,
    testCases: [{ input: "Hello World", expectedOutput: "dlroW olleH" }]
  },
  'count-vowels': {
    title: "Count Vowels",
    description: "Count the number of vowels in a given string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        // Write your code here to count vowels
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        int count = 0;
        str = str.toLowerCase();
        for (char c : str.toCharArray()) {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        System.out.println(count);
    }
}`,
    testCases: [{ input: "Hello World", expectedOutput: "3" }]
  },
  'palindrome': {
    title: "Check Palindrome",
    description: "Check if a given string is a palindrome.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "radar";
        // Write your code here to check if the string is a palindrome
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "radar";
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println(str.equals(reversed));
    }
}`,
    testCases: [{ input: "radar", expectedOutput: "true" }]
  },
  'count-words': {
    title: "Count Words",
    description: "Count the number of words in a given string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "Hello world!";
        // Write your code here to count words
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Hello world!";
        String[] words = str.trim().split("\\s+");
        System.out.println(words.length);
    }
}`,
    testCases: [{ input: "Hello world!", expectedOutput: "2" }]
  },
  'remove-whitespace': {
    title: "Remove Whitespace",
    description: "Remove all whitespace characters from a string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        // Write your code here to remove whitespace
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        System.out.println(str.replaceAll("\\s", ""));
    }
}`,
    testCases: [{ input: "Hello World", expectedOutput: "HelloWorld" }]
  },
  'longest-word': {
    title: "Longest Word",
    description: "Find the longest word in a given sentence.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String sentence = "This is an example";
        // Write your code here to find the longest word
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String sentence = "This is an example";
        String[] words = sentence.split("\\s+");
        String longest = "";
        for (String word : words) {
            if (word.length() > longest.length()) {
                longest = word;
            }
        }
        System.out.println(longest);
    }
}`,
    testCases: [{ input: "This is an example", expectedOutput: "example" }]
  },
  'character-frequency': {
    title: "Character Frequency",
    description: "Find the frequency of each character in a string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "hello";
        // Write your code here to find character frequency
    }
}`,
    solution: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        String str = "hello";
        HashMap<Character, Integer> frequency = new HashMap<>();
        for (char c : str.toCharArray()) {
            frequency.put(c, frequency.getOrDefault(c, 0) + 1);
        }
        System.out.println(frequency);
    }
}`,
    testCases: [{ input: "hello", expectedOutput: "{h=1, e=1, l=2, o=1}" }]
  },
  'first-non-repeating': {
    title: "First Non-Repeating Character",
    description: "Find the first non-repeating character in a string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "swiss";
        // Write your code here to find the first non-repeating character
    }
}`,
    solution: `import java.util.LinkedHashMap;

public class Main {
    public static void main(String[] args) {
        String str = "swiss";
        LinkedHashMap<Character, Integer> frequency = new LinkedHashMap<>();
        for (char c : str.toCharArray()) {
            frequency.put(c, frequency.getOrDefault(c, 0) + 1);
        }
        for (char c : frequency.keySet()) {
            if (frequency.get(c) == 1) {
                System.out.println(c);
                return;
            }
        }
    }
}`,
    testCases: [{ input: "swiss", expectedOutput: "w" }]
  },
  // Add remaining problems...
  'remove-duplicates': {
    title: "Remove Duplicates",
    description: "Remove duplicate characters from a string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "programming";
        // Write your code here to remove duplicate characters
    }
}`,
    solution: `import java.util.LinkedHashSet;

public class Main {
    public static void main(String[] args) {
        String str = "programming";
        LinkedHashSet<Character> set = new LinkedHashSet<>();
        for (char c : str.toCharArray()) {
            set.add(c);
        }
        StringBuilder result = new StringBuilder();
        for (char c : set) {
            result.append(c);
        }
        System.out.println(result.toString());
    }
}`,
    testCases: [{ input: "programming", expectedOutput: "progamin" }]
  },
  'isomorphic-strings': {
    title: "Isomorphic Strings",
    description: "Check if two strings are isomorphic.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String s1 = "egg";
        String s2 = "add";
        // Write your code here to check if the strings are isomorphic
    }
}`,
    solution: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        String s1 = "egg";
        String s2 = "add";
        if (s1.length() != s2.length()) {
            System.out.println(false);
            return;
        }
        HashMap<Character, Character> map = new HashMap<>();
        for (int i = 0; i < s1.length(); i++) {
            char c1 = s1.charAt(i);
            char c2 = s2.charAt(i);
            if (map.containsKey(c1)) {
                if (map.get(c1) != c2) {
                    System.out.println(false);
                    return;
                }
            } else {
                if (map.containsValue(c2)) {
                    System.out.println(false);
                    return;
                }
                map.put(c1, c2);
            }
        }
        System.out.println(true);
    }
}`,
    testCases: [
      { input: { s1: "egg", s2: "add" }, expectedOutput: "true" },
      { input: { s1: "foo", s2: "bar" }, expectedOutput: "false" }
    ]
  },
  'longest-palindromic-substring': {
    title: "Longest Palindromic Substring",
    description: "Find the longest palindromic substring in a string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "babad";
        // Write your code here to find the longest palindromic substring
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "babad";
        if (str.isEmpty()) {
            System.out.println("");
            return;
        }
        int start = 0, end = 0;
        for (int i = 0; i < str.length(); i++) {
            int len1 = expandAroundCenter(str, i, i);
            int len2 = expandAroundCenter(str, i, i + 1);
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        System.out.println(str.substring(start, end + 1));
    }

    private static int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
}`,
    testCases: [{ input: "babad", expectedOutput: "bab" }]
  },
  'substring-anagrams': {
    title: "Substring Anagrams",
    description: "Find all substrings of a string that are anagrams of another string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String s = "cbaebabacd";
        String p = "abc";
        // Write your code here to find all substring anagrams
    }
}`,
    solution: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String s = "cbaebabacd";
        String p = "abc";
        List<Integer> result = findAnagrams(s, p);
        System.out.println(result);
    }

    private static List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        if (s.length() < p.length()) return result;

        HashMap<Character, Integer> pCount = new HashMap<>();
        HashMap<Character, Integer> sCount = new HashMap<>();

        for (char c : p.toCharArray()) {
            pCount.put(c, pCount.getOrDefault(c, 0) + 1);
        }

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            sCount.put(c, sCount.getOrDefault(c, 0) + 1);

            if (i >= p.length()) {
                char start = s.charAt(i - p.length());
                if (sCount.get(start) == 1) {
                    sCount.remove(start);
                } else {
                    sCount.put(start, sCount.get(start) - 1);
                }
            }

            if (sCount.equals(pCount)) {
                result.add(i - p.length() + 1);
            }
        }
        return result;
    }
}`,
    testCases: [{ input: { s: "cbaebabacd", p: "abc" }, expectedOutput: "[0, 6]" }]
  },
  'wildcard-matching': {
    title: "Wildcard Matching",
    description: "Implement wildcard matching with '?' and '*'.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String s = "aa";
        String p = "a*";
        // Write your code here to implement wildcard matching
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String s = "aa";
        String p = "a*";
        System.out.println(isMatch(s, p));
    }

    private static boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;

        for (int j = 1; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 1];
            }
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '?' || p.charAt(j - 1) == s.charAt(i - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (p.charAt(j - 1) == '*') {
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                }
            }
        }
        return dp[m][n];
    }
}`,
    testCases: [
      { input: { s: "aa", p: "a*" }, expectedOutput: "true" },
      { input: { s: "aa", p: "?" }, expectedOutput: "false" }
    ]
  },
  'edit-distance': {
    title: "Edit Distance",
    description: "Calculate the minimum edit distance between two strings using dynamic programming.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String word1 = "horse";
        String word2 = "ros";
        // Write your code here to calculate the edit distance
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String word1 = "horse";
        String word2 = "ros";
        System.out.println(minDistance(word1, word2));
    }

    private static int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0) {
                    dp[i][j] = j;
                } else if (j == 0) {
                    dp[i][j] = i;
                } else if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j - 1],
                                            Math.min(dp[i - 1][j], dp[i][j - 1]));
                }
            }
        }
        return dp[m][n];
    }
}`,
    testCases: [
      { input: { word1: "horse", word2: "ros" }, expectedOutput: "3" },
      { input: { word1: "intention", word2: "execution" }, expectedOutput: "5" }
    ]
  },
  'decode-ways': {
    title: "Decode Ways",
    description: "Decode a numeric string into letters using a given encoding scheme.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String s = "226";
        // Write your code here to find the number of ways to decode the string
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String s = "226";
        System.out.println(numDecodings(s));
    }

    private static int numDecodings(String s) {
        if (s == null || s.length() == 0) return 0;
        int n = s.length();
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = s.charAt(0) != '0' ? 1 : 0;
        for (int i = 2; i <= n; i++) {
            int oneDigit = Integer.parseInt(s.substring(i - 1, i));
            int twoDigits = Integer.parseInt(s.substring(i - 2, i));
            if (oneDigit >= 1) dp[i] += dp[i - 1];
            if (twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i - 2];
        }
        return dp[n];
    }
}`,
    testCases: [
      { input: "226", expectedOutput: "3" },
      { input: "06", expectedOutput: "0" }
    ]
  },
  'reverse-words': {
    title: "Reverse Words",
    description: "Reverse the order of words in a string.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String s = "Java is fun";
        // Write your code here to reverse the words
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String s = "Java is fun";
        String[] words = s.trim().split("\\s+");
        StringBuilder reversed = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]).append(" ");
        }
        System.out.println(reversed.toString().trim());
    }
}`,
    testCases: [
      { input: "Java is fun", expectedOutput: "fun is Java" },
      { input: "  Hello World!  ", expectedOutput: "World! Hello" }
    ]
  },
  'validate-ip': {
    title: "Validate IP Address",
    description: "Check if a string is a valid IPv4 or IPv6 address.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String ip = "192.168.1.1";
        // Write your code here to validate the IP address
    }
}`,
    solution: `import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        String ip = "192.168.1.1";
        System.out.println(validateIPAddress(ip));
    }

    private static String validateIPAddress(String ip) {
        String ipv4Pattern = "^(\\d{1,3}\\.){3}\\d{1,3}$";
        String ipv6Pattern = "^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$";
        if (ip.matches(ipv4Pattern)) {
            for (String part : ip.split("\\.")) {
                if (Integer.parseInt(part) > 255) return "Neither";
            }
            return "IPv4";
        } else if (ip.matches(ipv6Pattern)) {
            return "IPv6";
        }
        return "Neither";
    }
}`,
    testCases: [
      { input: "192.168.1.1", expectedOutput: "IPv4" },
      { input: "2001:0db8:85a3:0000:0000:8a2e:0370:7334", expectedOutput: "IPv6" },
      { input: "256.256.256.256", expectedOutput: "Neither" }
    ]
  },
  'group-anagrams': {
    title: "Group Anagrams",
    description: "Group an array of strings into anagrams.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        // Write your code here to group anagrams
    }
}`,
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        List<List<String>> grouped = groupAnagrams(strs);
        System.out.println(grouped);
    }

    private static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            map.putIfAbsent(key, new ArrayList<>());
            map.get(key).add(str);
        }
        return new ArrayList<>(map.values());
    }
}`,
    testCases: [
      { input: ["eat", "tea", "tan", "ate", "nat", "bat"], expectedOutput: "[[eat, tea, ate], [tan, nat], [bat]]" }
    ]
  },
  'string-compression': {
    title: "String Compression",
    description: "Compress a string by replacing sequences of the same character with that character followed by the count.",
    initialCode: `public class Main {
    public static void main(String[] args) {
        String str = "aaabbc";
        // Write your code here to compress the string
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "aaabbc";
        StringBuilder compressed = new StringBuilder();
        int count = 1;

        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == str.charAt(i - 1)) {
                count++;
            } else {
                compressed.append(str.charAt(i - 1)).append(count);
                count = 1;
            }
        }

        compressed.append(str.charAt(str.length() - 1)).append(count);
        System.out.println(compressed.length() < str.length() ? compressed : str);
    }
}`,
    testCases: [
      { input: "aaabbc", expectedOutput: "a3b2c1" },
      { input: "abcdef", expectedOutput: "abcdef" }
    ]
  },
  'generate-parentheses': {
    title: "Generate Parentheses",
    description: "Generate all valid combinations of n pairs of parentheses.",
    initialCode: `import java.util.List;

public class Main {
    public static void main(String[] args) {
        int n = 3;
        // Write your code here to generate parentheses
    }
}`,
    solution: `import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int n = 3;
        List<String> result = new ArrayList<>();
        generateParentheses(result, "", 0, 0, n);
        System.out.println(result);
    }

    private static void generateParentheses(List<String> result, String current, int open, int close, int max) {
        if (current.length() == max * 2) {
            result.add(current);
            return;
        }

        if (open < max) {
            generateParentheses(result, current + "(", open + 1, close, max);
        }
        if (close < open) {
            generateParentheses(result, current + ")", open, close + 1, max);
        }
    }
}`,
    testCases: [
      { input: "3", expectedOutput: "[((())), (()()), (())(), ()(()), ()()()]" },
      { input: "1", expectedOutput: "[(())]" }
    ]
  }
};

const StringExercise: React.FC = () => {
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

export default StringExercise;