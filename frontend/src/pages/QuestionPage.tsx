import OptionCard from "../components/OptionCard";
import type { Quiz } from "../types/quiz";

type QuestionPageProps = {
  quiz: Quiz;
  currentIndex: number;
  answers: Record<string, string>;
  onSelectAnswer: (questionId: string, optionId: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
};

const QuestionPage = ({
  quiz,
  currentIndex,
  answers,
  onSelectAnswer,
  onNext,
  onPrevious,
  onSubmit,
  isSubmitting
}: QuestionPageProps) => {
  const question = quiz.questions[currentIndex];
  const total = quiz.questions.length;
  const selectedOptionId = answers[question.questionId];
  const isLast = currentIndex === total - 1;

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-3xl bg-white/90 p-8 shadow-xl shadow-slate-200/40">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
        <span>
          Question {currentIndex + 1} of {total}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          {question.topic.replace("-", " ")}
        </span>
      </div>

      <h2 className="text-2xl font-semibold text-slate-900">{question.questionText}</h2>

      <div className="grid gap-3">
        {question.options.map((option) => (
          <OptionCard
            key={option.optionId}
            optionId={option.optionId}
            text={option.text}
            selected={selectedOptionId === option.optionId}
            onSelect={(optionId) => onSelectAnswer(question.questionId, optionId)}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        <div className="flex items-center gap-3">
          {!isLast && (
            <button
              type="button"
              onClick={onNext}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Next
            </button>
          )}
          {isLast && (
            <button
              type="button"
              onClick={onSubmit}
              disabled={!selectedOptionId || isSubmitting}
              className="rounded-xl bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuestionPage;
