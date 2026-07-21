"use client";

import { AlertTriangle, TrendingUp, Activity } from "lucide-react";
import type { AiInsight } from "@/lib/mockData";

const config = {
  risk: { icon: AlertTriangle, label: "Risk flag", bg: "bg-loss-soft", fg: "text-loss" },
  opportunity: { icon: TrendingUp, label: "Opportunity", bg: "bg-gain-soft", fg: "text-gain" },
  behavioral: { icon: Activity, label: "Behavioral signal", bg: "bg-mkt-accent-soft", fg: "text-mkt-accent" },
};

export function InsightCard({ insight }: { insight: AiInsight }) {
  const c = config[insight.type];
  const Icon = c.icon;

  return (
    <div className="glass-panel rounded-2xl p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${c.bg} ${c.fg}`}>
            <Icon size={15} />
          </div>
          <div>
            <p className={`text-[10px] font-semibold uppercase tracking-wide ${c.fg}`}>{c.label}</p>
            <p className="mt-0.5 font-bold text-mkt-text">{insight.title}</p>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[10px] uppercase tracking-wide text-mkt-muted">Confidence</p>
          <p className="font-bold text-mkt-text">{insight.confidence}%</p>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-mkt-muted">{insight.detail}</p>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06]">
        <div
          className={`h-full rounded-full ${insight.type === "risk" ? "bg-loss" : insight.type === "opportunity" ? "bg-gain" : "bg-mkt-accent"}`}
          style={{ width: `${insight.confidence}%` }}
        />
      </div>
    </div>
  );
}
