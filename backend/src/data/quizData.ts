import { Quiz } from "../types/quiz";

export const oopBasicsQuiz: Quiz = {
  quizId: "oop-basics",
  title: "OOP Basics Quiz",
  description: "Practice core Java OOP concepts in a short beginner-friendly quiz.",
  estimatedTimeMinutes: 5,
  difficulty: "beginner",
  questions: [
    {
      questionId: "q1",
      topic: "class-object",
      difficulty: "easy",
      questionText: "What is an object in Java?",
      options: [
        { optionId: "A", text: "An instance of a class" },
        { optionId: "B", text: "A loop structure" },
        { optionId: "C", text: "A type of comment" },
        { optionId: "D", text: "A package name" }
      ],
      correctOptionId: "A",
      explanation: "An object is an instance of a class. It has state and behaviour."
    },
    {
      questionId: "q2",
      topic: "encapsulation",
      difficulty: "easy",
      questionText: "Which option best describes encapsulation?",
      options: [
        { optionId: "A", text: "Running the same method many times" },
        { optionId: "B", text: "Hiding internal data and controlling access through methods" },
        { optionId: "C", text: "Creating many classes with the same name" },
        { optionId: "D", text: "Writing code without objects" }
      ],
      correctOptionId: "B",
      explanation: "Encapsulation means keeping data private and providing controlled access through methods."
    },
    {
      questionId: "q3",
      topic: "inheritance",
      difficulty: "easy",
      questionText: "What does inheritance allow a class to do?",
      options: [
        { optionId: "A", text: "Delete all fields from another class" },
        { optionId: "B", text: "Use fields and methods from a parent class" },
        { optionId: "C", text: "Stop objects from being created" },
        { optionId: "D", text: "Convert Java code into HTML" }
      ],
      correctOptionId: "B",
      explanation: "Inheritance allows a child class to reuse fields and methods from a parent class."
    },
    {
      questionId: "q4",
      topic: "polymorphism",
      difficulty: "medium",
      questionText: "What is polymorphism in OOP?",
      options: [
        { optionId: "A", text: "One interface or method behaving in different ways" },
        { optionId: "B", text: "Only using one class in a program" },
        { optionId: "C", text: "Removing all methods from a class" },
        { optionId: "D", text: "Writing comments in different languages" }
      ],
      correctOptionId: "A",
      explanation: "Polymorphism allows the same method or interface to behave differently depending on the object."
    },
    {
      questionId: "q5",
      topic: "abstraction",
      difficulty: "medium",
      questionText: "Why is abstraction useful in OOP?",
      options: [
        { optionId: "A", text: "It hides unnecessary details and shows only important features" },
        { optionId: "B", text: "It makes every field public" },
        { optionId: "C", text: "It prevents classes from having methods" },
        { optionId: "D", text: "It removes the need for objects" }
      ],
      correctOptionId: "A",
      explanation: "Abstraction helps learners focus on what something does instead of all internal details."
    }
  ]
};
