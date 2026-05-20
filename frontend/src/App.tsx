import { useEffect, useMemo, useState } from "react";
import { fetchQuiz, fetchSubmissionResult, submitQuiz } from "./api/quizApi";
import OverviewPage from "./pages/OverviewPage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import type { Quiz, SubmissionResult } from "./types/quiz";

type Screen = "overview" | "quiz" | "result";

const App = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [screen, setScreen] = useState<Screen>("overview");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const data = await fetchQuiz();
        setQuiz(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load quiz.");
      } finally {
        setIsLoading(false);
      }
    };

    loadQuiz();
  }, []);

  const answersArray = useMemo(
    () =>
      Object.entries(answers).map(([questionId, selectedOptionId]) => ({
        questionId,
        selectedOptionId
      })),
    [answers]
  );

  const handleSelectAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = async () => {
    if (!quiz) {
      return;
    }

    setIsSubmitting(true);
    try {
      const submission = await submitQuiz({
        userId: "student001",
        answers: answersArray
      });
      const submissionResult = await fetchSubmissionResult(submission.submissionId);
      setResult(submissionResult);
      setScreen("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
    setScreen("quiz");
  };

  const handleBackToOverview = () => {
    setAnswers({});
    setCurrentIndex(0);
    setResult(null);
    setScreen("overview");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-600">
        Loading quiz...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-4 text-rose-700">
          {error}
        </div>
      </div>
    );
  }

  if (!quiz) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-sky-50 to-emerald-50 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">OOP Learning Flow</p>
            <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">OOP Quiz Performance Test</h1>
          </div>
          <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            Beginner-friendly practice
          </span>
        </header>

        {screen === "overview" && <OverviewPage quiz={quiz} onStart={() => setScreen("quiz")} />}

        {screen === "quiz" && (
          <QuestionPage
            quiz={quiz}
            currentIndex={currentIndex}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            onNext={() => setCurrentIndex((prev) => Math.min(prev + 1, quiz.questions.length - 1))}
            onPrevious={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}

        {screen === "result" && result && (
          <ResultPage result={result} onRetry={handleRetry} onBackToOverview={handleBackToOverview} />
        )}
      </div>
    </div>
  );
};

export default App;
