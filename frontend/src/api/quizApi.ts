import { apiClient } from "./client";
import type { Quiz, QuizSubmissionAnswer, SubmissionResponse, SubmissionResult } from "../types/quiz";

export const fetchQuiz = (): Promise<Quiz> => apiClient<Quiz>("/api/quizzes/oop-basics");

export const submitQuiz = (payload: {
  userId: string;
  answers: QuizSubmissionAnswer[];
}): Promise<SubmissionResponse> =>
  apiClient<SubmissionResponse>("/api/quizzes/oop-basics/submissions", {
    method: "POST",
    body: JSON.stringify(payload)
  });

export const fetchSubmissionResult = (submissionId: string): Promise<SubmissionResult> =>
  apiClient<SubmissionResult>(`/api/submissions/${submissionId}/result`);
