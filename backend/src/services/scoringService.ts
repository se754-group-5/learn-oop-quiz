import { Quiz, QuizSubmissionAnswer } from "../types/quiz";

export type ScoringResult = {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  weakTopics: Quiz["questions"][number]["topic"][];
};

export const scoreQuiz = (quiz: Quiz, answers: QuizSubmissionAnswer[]): ScoringResult => {
  const totalQuestions = quiz.questions.length;
  const answerMap = new Map(answers.map((answer) => [answer.questionId, answer.selectedOptionId]));

  let correctAnswers = 0;
  const weakTopics: ScoringResult["weakTopics"] = [];

  for (const question of quiz.questions) {
    const selectedOptionId = answerMap.get(question.questionId);
    if (selectedOptionId === question.correctOptionId) {
      correctAnswers += 1;
      continue;
    }

    if (!weakTopics.includes(question.topic)) {
      weakTopics.push(question.topic);
    }
  }

  const score = Math.round((correctAnswers / totalQuestions) * 100);

  return {
    score,
    correctAnswers,
    totalQuestions,
    weakTopics: weakTopics.slice(0, 2)
  };
};
