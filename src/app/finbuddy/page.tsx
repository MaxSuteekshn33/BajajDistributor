"use client";

import { useMemo, useState } from "react";
import { Sparkles, Search } from "lucide-react";
import { TopBanner } from "@/components/TopBanner";
import { ClientCard } from "@/components/finbuddy/ClientCard";
import { FinBuddyFilterTabs, FinBuddyFilter } from "@/components/finbuddy/FinBuddyFilterTabs";
import { finbuddyClients } from "@/lib/mockData";

export default function FinBuddyPage() {
  const [filter, setFilter] = useState<FinBuddyFilter>("all");
  const [query, setQuery] = useState("");

  const clients = useMemo(() => {
    return finbuddyClients.filter((c) => {
      if (filter === "attention" && c.healthScore >= 70) return false;
      if (filter === "healthy" && c.healthScore < 70) return false;
      if (query && !c.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [filter, query]);

  const needingAttention = finbuddyClients.filter((c) => c.healthScore < 70).length;

  return (
    <div className="mkt-scope flex flex-1 flex-col bg-mkt-bg">
      <TopBanner />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mkt-accent-soft text-mkt-accent">
            <Sparkles size={18} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-mkt-text">FinBuddy</h1>
            <p className="text-xs text-mkt-muted">
              AI/ML-scored portfolio intelligence for your book — {finbuddyClients.length} clients,{" "}
              {needingAttention} flagged for attention
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <FinBuddyFilterTabs active={filter} onChange={setFilter} />
          <div className="glass-panel flex items-center gap-2 rounded-full px-3.5 py-2 sm:w-64">
            <Search size={14} className="text-mkt-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clients..."
              className="w-full bg-transparent text-sm text-mkt-text placeholder:text-mkt-muted focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        {clients.length === 0 && (
          <p className="mt-10 text-center text-sm text-mkt-muted">No clients match this filter.</p>
        )}
      </main>
    </div>
  );
}
