type OptionCardProps = {
  optionId: string;
  text: string;
  selected: boolean;
  onSelect: (optionId: string) => void;
};

const OptionCard = ({ optionId, text, selected, onSelect }: OptionCardProps) => (
  <button
    type="button"
    onClick={() => onSelect(optionId)}
    className={`w-full rounded-2xl border px-4 py-3 text-left transition hover:border-sky-400 hover:bg-sky-50 ${
      selected ? "border-sky-500 bg-sky-100" : "border-slate-200 bg-white"
    }`}
  >
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700">
        {optionId}
      </span>
      <span className="text-slate-800">{text}</span>
    </div>
  </button>
);

export default OptionCard;
