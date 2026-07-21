"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, PhoneCall, FileText, CheckSquare, Clock } from "lucide-react";
import { TopBanner } from "@/components/TopBanner";
import { HealthScoreDial } from "@/components/finbuddy/HealthScoreDial";
import { AllocationDonut } from "@/components/finbuddy/AllocationDonut";
import { InsightCard } from "@/components/finbuddy/InsightCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CallScriptModal } from "@/components/distributor/CallScriptModal";
import { ReportPreviewModal } from "@/components/distributor/ReportPreviewModal";
import { formatINR } from "@/lib/format";
import { churnClients, getFinBuddyClient, ChurnClient } from "@/lib/mockData";

export default function FinBuddyClientPage() {
  const params = useParams<{ clientId: string }>();
  const client = getFinBuddyClient(params.clientId);
  const [scriptOpen, setScriptOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  if (!client) return notFound();

  const linkedChurnClient: ChurnClient | null =
    (client.churnClientId && churnClients.find((c) => c.id === client.churnClientId)) || null;

  const totalValue = client.holdings.reduce((s, h) => s + h.value, 0);

  return (
    <div className="mkt-scope flex flex-1 flex-col bg-mkt-bg">
      <TopBanner />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <Link href="/finbuddy" className="inline-flex items-center gap-1.5 text-xs font-semibold text-mkt-muted hover:text-mkt-text">
          <ArrowLeft size={13} /> Back to FinBuddy
        </Link>

        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-mkt-accent-soft text-lg font-bold text-mkt-accent">
              {client.initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-mkt-text">{client.name}</h1>
                {linkedChurnClient && (
                  <Badge tone={linkedChurnClient.riskScore === "High" ? "red" : "orange"}>
                    {linkedChurnClient.riskScore} churn risk
                  </Badge>
                )}
              </div>
              <p className="text-xs text-mkt-muted">
                {client.persona} · {client.city} · {client.riskProfile} risk profile · client since {client.sinceYear}
              </p>
            </div>
          </div>
          <HealthScoreDial score={client.healthScore} size={64} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="glass-panel rounded-xl p-4">
            <p className="text-[10px] uppercase tracking-wide text-mkt-muted">AUM</p>
            <p className="mt-1 text-lg font-bold text-mkt-text">{client.aum}</p>
          </div>
          <div className="glass-panel rounded-xl p-4">
            <p className="text-[10px] uppercase tracking-wide text-mkt-muted">XIRR</p>
            <p className="mt-1 text-lg font-bold text-mkt-gain">+{client.xirr}%</p>
          </div>
          <div className="glass-panel rounded-xl p-4">
            <p className="text-[10px] uppercase tracking-wide text-mkt-muted">Health Score</p>
            <p className="mt-1 text-lg font-bold text-mkt-text">{client.healthScore}/100</p>
          </div>
          <div className="glass-panel rounded-xl p-4">
            <p className="text-[10px] uppercase tracking-wide text-mkt-muted">Active Goals</p>
            <p className="mt-1 text-lg font-bold text-mkt-text">{client.goals.length}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-mkt-text">AI/ML Insights</h2>
            <p className="text-xs text-mkt-muted">
              Generated from transaction behaviour, app activity, and goal-linked signals.
            </p>
            <div className="mt-3 flex flex-col gap-3">
              {client.insights.map((insight) => (
                <InsightCard key={insight.title} insight={insight} />
              ))}
            </div>

            <div className="glass-panel mt-4 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-mkt-text">
                <CheckSquare size={15} className="text-mkt-accent" />
                <h3 className="text-sm font-bold">Recommended actions</h3>
              </div>
              <ul className="mt-3 space-y-2.5">
                {client.recommendedActions.map((action, i) => (
                  <li key={i} className="flex gap-2.5 text-xs leading-relaxed text-mkt-muted">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mkt-accent-soft text-[9px] font-bold text-mkt-accent">
                      {i + 1}
                    </span>
                    {action}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {linkedChurnClient ? (
                  <>
                    <Button variant="primary" className="text-xs" onClick={() => setScriptOpen(true)}>
                      <PhoneCall size={13} />
                      Prep call
                    </Button>
                    <Button variant="outline" className="text-xs" onClick={() => setReportOpen(true)}>
                      <FileText size={13} />
                      Generate report
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" className="text-xs" onClick={() => setReportOpen(true)}>
                    <FileText size={13} />
                    Generate report
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold text-mkt-text">Portfolio allocation</h2>
            <div className="glass-panel mt-3 rounded-2xl p-5">
              <AllocationDonut holdings={client.holdings} />
              <div className="mt-4 space-y-2 border-t border-black/5 pt-4">
                {client.holdings.map((h) => (
                  <div key={h.name} className="flex items-center justify-between text-xs">
                    <span className="text-mkt-text">{h.name}</span>
                    <span className="tabular-nums font-semibold text-mkt-gain">+{h.oneYearReturn}%</span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-black/5 pt-2 text-xs font-bold text-mkt-text">
                  <span>Total</span>
                  <span className="tabular-nums">{formatINR(totalValue)}</span>
                </div>
              </div>
            </div>

            <h2 className="mt-6 text-sm font-bold text-mkt-text">Goals</h2>
            <div className="mt-3 flex flex-col gap-3">
              {client.goals.map((goal) => (
                <div key={goal.name} className="glass-panel rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-mkt-text">{goal.name}</p>
                    <Badge tone={goal.status === "complete" ? "green" : goal.status === "off-track" ? "orange" : "blue"}>
                      {goal.status === "complete" ? "Complete" : goal.status === "off-track" ? "Off Track" : "On Track"}
                    </Badge>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-black/[0.06]">
                    <div
                      className={`h-full rounded-full ${goal.status === "off-track" ? "bg-alert" : goal.status === "complete" ? "bg-gain" : "bg-mkt-accent"}`}
                      style={{ width: `${Math.min(goal.progress, 100)}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] text-mkt-muted">
                    {formatINR(goal.currentAmount)} of {formatINR(goal.targetAmount)} · target {goal.targetYear}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-6 text-sm font-bold text-mkt-text">Recent activity</h2>
            <div className="glass-panel mt-3 rounded-2xl p-5">
              <ul className="space-y-3">
                {client.activity.map((event, i) => (
                  <li key={i} className="flex gap-2.5 text-xs">
                    <Clock size={13} className="mt-0.5 shrink-0 text-mkt-muted" />
                    <div>
                      <p className="text-mkt-text">{event.event}</p>
                      <p className="text-mkt-muted">{event.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <CallScriptModal client={scriptOpen ? linkedChurnClient : null} onClose={() => setScriptOpen(false)} />
      <ReportPreviewModal
        client={reportOpen ? linkedChurnClient ?? { id: client.id, name: client.name, aum: client.aum, riskScore: "Medium", reason: "", talkingPoints: client.recommendedActions } : null}
        onClose={() => setReportOpen(false)}
      />
    </div>
  );
}
