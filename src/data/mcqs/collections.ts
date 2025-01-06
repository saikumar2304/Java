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
  }
  // ... Add more collection MCQs
]; 