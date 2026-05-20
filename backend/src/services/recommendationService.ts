import { Recommendation, QuizQuestion } from "../types/quiz";

export const getFeedbackMessage = (score: number): string => {
  if (score >= 80) {
    return "Good work. You understand most OOP basics.";
  }

  if (score >= 50) {
    return "You are making progress. Review the topics you missed before moving forward.";
  }

  return "This topic may need more practice. Review the basics and try again when you are ready.";
};

const recommendationMessages: Record<QuizQuestion["topic"], string> = {
  "class-object": "Review the class and object examples before trying another quiz.",
  encapsulation: "Review how private fields and public methods work together.",
  inheritance: "Try the inheritance practice task next.",
  polymorphism: "Review method overriding examples before attempting the next quiz.",
  abstraction: "Review how abstraction hides unnecessary details and focuses on important behaviours."
};

export const getRecommendation = (weakTopics: QuizQuestion["topic"][]): Recommendation => {
  if (weakTopics.length === 0) {
    return {
      type: "next",
      targetTopic: "polymorphism",
      message: "You are ready to try the next OOP practice activity."
    };
  }

  const targetTopic = weakTopics[0];

  return {
    type: "review",
    targetTopic,
    message: recommendationMessages[targetTopic]
  };
};
