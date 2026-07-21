"use client";

function scoreColor(score: number) {
  if (score >= 85) return "#15803d";
  if (score >= 70) return "#00379f";
  return "#ea580c";
}

export function HealthScoreDial({ score, size = 56 }: { score: number; size?: number }) {
  const color = scoreColor(score);
  const track = "rgba(0,0,0,0.08)";

  return (
    <div
      className="relative flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${color} ${score * 3.6}deg, ${track} 0deg)`,
      }}
    >
      <div className="flex items-center justify-center rounded-full bg-mkt-surface" style={{ width: size - 10, height: size - 10 }}>
        <span className="text-xs font-extrabold tabular-nums text-mkt-text">{score}</span>
      </div>
    </div>
  );
}
