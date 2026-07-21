"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { finbuddyClients } from "@/lib/mockData";

export function FinBuddyPromoCard() {
  const preview = finbuddyClients.slice(0, 4);
  const flagged = finbuddyClients.filter((c) => c.healthScore < 70).length;

  return (
    <Link
      href="/finbuddy"
      className="group relative block cursor-pointer overflow-hidden rounded-3xl p-7 sm:p-8"
      style={{
        background: "linear-gradient(135deg, #060a17 0%, #0b1220 55%, #131b30 100%)",
      }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#5b8def]/20 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-[#a78bfa]/15 blur-[70px]" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80">
            <Sparkles size={12} />
            AI/ML · FinBuddy
          </div>
          <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
            Every client&apos;s portfolio, read by a model before you walk in
          </h3>
          <p className="mt-1.5 max-w-md text-sm text-white/60">
            {finbuddyClients.length} clients scored for portfolio health, with AI-generated risk
            flags, opportunities, and next-best-actions — {flagged} need attention right now.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-transform duration-200 group-hover:translate-x-1">
            Open FinBuddy
            <ArrowRight size={15} />
          </span>
        </div>

        <div className="flex shrink-0 -space-x-3 sm:flex-col sm:-space-x-0 sm:-space-y-3">
          {preview.map((client) => (
            <div
              key={client.id}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 text-[10px] font-bold text-[#060a17] shadow-lg"
              style={{ background: "#5b8def", borderColor: "#0b1220" }}
            >
              {client.initials}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
