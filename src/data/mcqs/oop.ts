export const oopMCQs = [
  {
    id: 1,
    question: "What's wrong?\n```java\nclass Parent {\n    void method() {}\n}\nclass Child extends Parent {\n    private void method() {}\n}\n```",
    options: [
      { text: "Nothing wrong", isCorrect: false },
      { text: "Can't reduce visibility in Child", isCorrect: true },
      { text: "Method must be static", isCorrect: false },
      { text: "Missing @Override", isCorrect: false }
    ],
    explanation: "When overriding, the child method cannot reduce the visibility of the parent method.",
    difficulty: 'Medium',
    category: 'Method Overriding',
    hasCode: true
  }
  // ... Add more OOP MCQs
]; 