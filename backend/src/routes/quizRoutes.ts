import { Router } from "express";
import { oopBasicsQuiz } from "../data/quizData";

export const quizRoutes = Router();

quizRoutes.get("/api/quizzes/oop-basics", (_req, res) => {
  const sanitizedQuestions = oopBasicsQuiz.questions.map(({ correctOptionId, explanation, ...question }) => ({
    ...question
  }));

  res.json({
    ...oopBasicsQuiz,
    questions: sanitizedQuestions
  });
});
