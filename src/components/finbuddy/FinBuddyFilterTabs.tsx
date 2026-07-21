"use client";

export type FinBuddyFilter = "all" | "attention" | "healthy";

const filters: { id: FinBuddyFilter; label: string }[] = [
  { id: "all", label: "All Clients" },
  { id: "attention", label: "Needs Attention" },
  { id: "healthy", label: "Healthy" },
];

export function FinBuddyFilterTabs({
  active,
  onChange,
}: {
  active: FinBuddyFilter;
  onChange: (f: FinBuddyFilter) => void;
}) {
  return (
    <div className="glass-panel inline-flex flex-wrap gap-1 rounded-full p-1">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 sm:text-sm ${
            active === f.id
              ? "bg-mkt-accent text-white"
              : "text-mkt-muted hover:bg-black/[0.04] hover:text-mkt-text"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
