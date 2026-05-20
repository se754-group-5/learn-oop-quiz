import type { Quiz } from "../types/quiz";

type OverviewPageProps = {
  quiz: Quiz;
  onStart: () => void;
};

const OverviewPage = ({ quiz, onStart }: OverviewPageProps) => (
  <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-3xl bg-white/80 p-8 shadow-lg shadow-slate-200/40 backdrop-blur">
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{quiz.difficulty}</p>
      <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{quiz.title}</h1>
      <p className="text-lg text-slate-600">{quiz.description}</p>
    </div>

    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Estimated time</p>
        <p className="text-xl font-semibold text-slate-900">{quiz.estimatedTimeMinutes} minutes</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Questions</p>
        <p className="text-xl font-semibold text-slate-900">{quiz.questions.length}</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-500">Focus</p>
        <p className="text-xl font-semibold text-slate-900">Java OOP Basics</p>
      </div>
    </div>

    <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-slate-700">
      Learn at your own pace. This quiz is here to guide you, not judge you.
    </div>

    <button
      type="button"
      onClick={onStart}
      className="w-full rounded-2xl bg-sky-600 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-sky-300/50 transition hover:bg-sky-700"
    >
      Start Quiz
    </button>
  </section>
);

export default OverviewPage;
