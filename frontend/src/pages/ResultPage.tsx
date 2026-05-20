import type { SubmissionResult } from "../types/quiz";

type ResultPageProps = {
  result: SubmissionResult;
  onRetry: () => void;
  onBackToOverview: () => void;
};

const ResultPage = ({ result, onRetry, onBackToOverview }: ResultPageProps) => (
  <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-3xl bg-white/95 p-8 shadow-xl shadow-slate-200/50">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Your score</p>
        <h2 className="text-4xl font-semibold text-slate-900">{result.score}%</h2>
      </div>
      <span
        className={`rounded-full px-4 py-2 text-sm font-semibold ${
          result.passed ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
        }`}
      >
        {result.passed ? "Completed" : "Keep practicing"}
      </span>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Correct answers</p>
        <p className="text-xl font-semibold text-slate-900">
          {result.correctAnswers} / {result.totalQuestions}
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Weak topics</p>
        <p className="text-lg font-semibold text-slate-900">
          {result.weakTopics.length > 0
            ? result.weakTopics.map((topic) => topic.replace("-", " ")).join(", ")
            : "None. Great job!"}
        </p>
      </div>
    </div>

    <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-slate-700">
      {result.feedback}
    </div>

    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Next step</p>
      <p className="text-lg font-semibold text-slate-900">{result.recommendation.message}</p>
    </div>

    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onRetry}
        className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
      >
        Try Again
      </button>
      <button
        type="button"
        onClick={onBackToOverview}
        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Back to Overview
      </button>
    </div>
  </section>
);

export default ResultPage;
