export type QuizOption = {
  optionId: string;
  text: string;
};

export type QuizQuestion = {
  questionId: string;
  topic: "class-object" | "encapsulation" | "inheritance" | "polymorphism" | "abstraction";
  difficulty: "easy" | "medium";
  questionText: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
};

export type Quiz = {
  quizId: string;
  title: string;
  description: string;
  estimatedTimeMinutes: number;
  difficulty: "beginner" | "intermediate";
  questions: QuizQuestion[];
};

export type QuizSubmissionAnswer = {
  questionId: string;
  selectedOptionId: string;
};

export type Recommendation = {
  type: "review" | "next";
  targetTopic: QuizQuestion["topic"];
  message: string;
};

export type SubmissionResult = {
  submissionId: string;
  quizId: string;
  userId: string;
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctAnswers: number;
  weakTopics: QuizQuestion["topic"][];
  feedback: string;
  recommendation: Recommendation;
};
