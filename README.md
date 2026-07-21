# Bajaj FinOS — Distributor Co-Pilot

Standalone distributor-facing prototype for Bajaj Finserv Asset Management, spun out of the [bajaj-finos](https://github.com/MaxSuteekshn33/BajajFinPortfolio) case-competition build. Next.js 16 (TypeScript, Tailwind v4, Framer Motion, Recharts, lucide-react). All data is hardcoded mock data in `src/lib/mockData.ts` — no backend.

Intended to be pushed to the `BajajDistributor` GitHub repo and deployed separately from the investor-facing app.

## What's here

- **`/` — Dashboard**: distributor KPIs, Churn Radar (AI talking points + call-script generator), Lead Feed, Earnings Simulator, Attribution Ledger.
- **`/finbuddy` — FinBuddy**: AI/ML-scored client-portfolio intelligence. Every client in the distributor's book gets a portfolio health score, risk/opportunity/behavioral insight cards with model confidence scores, goal tracking, holdings allocation, and next-best-actions — built so a distributor can walk into a client conversation already briefed.
- **`/finbuddy/[clientId]`**: full per-client view — allocation donut, goal progress, AI insights, recommended actions, recent activity, and one-click "Prep call" / "Generate report" for churn-flagged clients.

## Getting started

```bash
npm install
npm run dev -- -p 3005
```

Open [http://localhost:3005](http://localhost:3005).
