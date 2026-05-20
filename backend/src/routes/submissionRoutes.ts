import { Router } from "express";
import { oopBasicsQuiz } from "../data/quizData";
import { getFeedbackMessage, getRecommendation } from "../services/recommendationService";
import { scoreQuiz } from "../services/scoringService";
import { QuizSubmissionAnswer, SubmissionResult } from "../types/quiz";

export const submissionRoutes = Router();

const submissions = new Map<string, SubmissionResult>();

const buildSubmissionId = (): string => {
  const randomNumber = Math.floor(Math.random() * 10000);
  return `sub-${Date.now()}-${randomNumber}`;
};

submissionRoutes.post("/api/quizzes/oop-basics/submissions", (req, res) => {
  const { userId, answers } = req.body as { userId?: string; answers?: QuizSubmissionAnswer[] };

  if (!userId) {
    return res.status(400).json({ message: "userId is required." });
  }

  if (!Array.isArray(answers)) {
    return res.status(400).json({ message: "answers must be an array." });
  }

  for (const answer of answers) {
    if (!answer?.questionId) {
      return res.status(400).json({ message: "questionId is required for each answer." });
    }

    if (!answer?.selectedOptionId) {
      return res.status(400).json({ message: "selectedOptionId is required for each answer." });
    }

    const question = oopBasicsQuiz.questions.find((item) => item.questionId === answer.questionId);

    if (!question) {
      return res.status(400).json({ message: `Unknown questionId: ${answer.questionId}` });
    }

    const optionExists = question.options.some((option) => option.optionId === answer.selectedOptionId);

    if (!optionExists) {
      return res.status(400).json({ message: `Unknown optionId for ${answer.questionId}` });
    }
  }

  const scoring = scoreQuiz(oopBasicsQuiz, answers);
  const passed = scoring.score >= 50;
  const feedback = getFeedbackMessage(scoring.score);
  const recommendation = getRecommendation(scoring.weakTopics);
  const submissionId = buildSubmissionId();

  const result: SubmissionResult = {
    submissionId,
    quizId: oopBasicsQuiz.quizId,
    userId,
    score: scoring.score,
    passed,
    totalQuestions: scoring.totalQuestions,
    correctAnswers: scoring.correctAnswers,
    weakTopics: scoring.weakTopics,
    feedback,
    recommendation
  };

  submissions.set(submissionId, result);

  return res.json({
    submissionId,
    quizId: oopBasicsQuiz.quizId,
    score: scoring.score,
    passed,
    message: "Your answers were submitted successfully."
  });
});

submissionRoutes.get("/api/submissions/:submissionId/result", (req, res) => {
  const { submissionId } = req.params;
  const result = submissions.get(submissionId);

  if (!result) {
    return res.status(404).json({ message: "Submission not found." });
  }

  return res.json(result);
});
