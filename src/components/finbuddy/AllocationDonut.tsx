"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { formatINR } from "@/lib/format";
import type { AssetHolding } from "@/lib/mockData";

const assetColors: Record<string, string> = {
  Equity: "#00379f",
  Debt: "#5b8def",
  Hybrid: "#a78bfa",
  Cash: "#cbd5e1",
};

export function AllocationDonut({ holdings }: { holdings: AssetHolding[] }) {
  const byClass = holdings.reduce<Record<string, number>>((acc, h) => {
    acc[h.assetClass] = (acc[h.assetClass] ?? 0) + h.value;
    return acc;
  }, {});
  const data = Object.entries(byClass).map(([name, value]) => ({ name, value }));

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
      <div className="h-40 w-40 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={48}
              outerRadius={72}
              paddingAngle={2}
              isAnimationActive={false}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={assetColors[entry.name] ?? "#94a3b8"} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#ffffff",
                border: "1px solid rgba(16,24,43,0.1)",
                borderRadius: 12,
                fontSize: 12,
              }}
              formatter={(value) => formatINR(Number(value))}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {data.map((entry) => {
          const pct = Math.round((entry.value / holdings.reduce((s, h) => s + h.value, 0)) * 100);
          return (
            <div key={entry.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: assetColors[entry.name] ?? "#94a3b8" }}
                />
                <span className="text-mkt-text">{entry.name}</span>
              </div>
              <span className="font-semibold text-mkt-muted">{pct}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
