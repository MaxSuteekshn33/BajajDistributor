"use client";

import Link from "next/link";
import { AlertTriangle, TrendingUp, Activity, ChevronRight } from "lucide-react";
import { HealthScoreDial } from "@/components/finbuddy/HealthScoreDial";
import type { FinBuddyClient } from "@/lib/mockData";

const insightIcon = {
  risk: AlertTriangle,
  opportunity: TrendingUp,
  behavioral: Activity,
};

export function ClientCard({ client }: { client: FinBuddyClient }) {
  const topInsight = client.insights[0];
  const Icon = topInsight ? insightIcon[topInsight.type] : Activity;
  const needsAttention = client.healthScore < 70;

  return (
    <Link
      href={`/finbuddy/${client.id}`}
      className="glass-panel group flex flex-col gap-4 rounded-2xl p-5 transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mkt-accent-soft text-sm font-bold text-mkt-accent">
            {client.initials}
          </div>
          <div>
            <p className="font-bold text-mkt-text">{client.name}</p>
            <p className="text-xs text-mkt-muted">
              {client.city} · {client.riskProfile}
            </p>
          </div>
        </div>
        <HealthScoreDial score={client.healthScore} size={44} />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-mkt-muted">AUM</p>
          <p className="font-bold text-mkt-text">{client.aum}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wide text-mkt-muted">XIRR</p>
          <p className="font-bold text-mkt-gain">+{client.xirr}%</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wide text-mkt-muted">Health</p>
          <p className={`font-bold ${needsAttention ? "text-alert" : "text-mkt-gain"}`}>
            {needsAttention ? "Needs attention" : "Healthy"}
          </p>
        </div>
      </div>

      {topInsight && (
        <div className="flex items-start gap-2 rounded-xl bg-black/[0.03] p-3">
          <Icon
            size={14}
            className={`mt-0.5 shrink-0 ${
              topInsight.type === "risk"
                ? "text-mkt-loss"
                : topInsight.type === "opportunity"
                  ? "text-mkt-gain"
                  : "text-mkt-accent"
            }`}
          />
          <p className="text-xs leading-relaxed text-mkt-muted">{topInsight.title}</p>
        </div>
      )}

      <div className="flex items-center justify-end text-xs font-semibold text-mkt-accent">
        View portfolio
        <ChevronRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
