// All data below is hardcoded mock data for demo purposes only.

// ---------------- Distributor Co-Pilot ----------------

export const distributorProfile = {
  name: "Rajesh Mehta",
  city: "Mumbai",
  advisingSince: 2022,
  clients: 214,
  aum: "₹38.6 Cr",
  aumValue: 386000000,
  monthlySipBook: "₹42.8 L",
  clientRetention: 94,
  revenueThisQuarter: "₹18.6 L",
  annualTrailIncomeBase: 7440000, // ₹74.4L/yr at current adoption
};

export type RiskLevel = "High" | "Medium";

export interface ChurnClient {
  id: string;
  name: string;
  aum: string;
  riskScore: RiskLevel;
  reason: string;
  talkingPoints: string[];
}

export const churnClients: ChurnClient[] = [
  {
    id: "c1",
    name: "Vikram Desai",
    aum: "₹42.1 L",
    riskScore: "High",
    reason: "SIP paused twice",
    talkingPoints: [
      "Acknowledge the SIP pauses without judgment — ask what changed in his cash flow the last two months.",
      "Show him the goal-linked view: pausing the SIP pushes his child's education goal back by ~14 months.",
      "Offer a temporary SIP amount reduction instead of a full pause — keeps compounding alive.",
      "Mention the recent market dip is exactly when disciplined investors historically gained the most ground.",
    ],
  },
  {
    id: "c2",
    name: "Priya Nair",
    aum: "₹68.4 L",
    riskScore: "High",
    reason: "Logged in 8x during market dip",
    talkingPoints: [
      "High app activity during the dip usually signals anxiety, not intent to redeem — open with reassurance.",
      "Walk her through her portfolio's past recovery pattern after the 2024 correction.",
      "Offer a portfolio review call this week — clients who get a proactive call during volatility redeem 3x less often.",
      "Highlight her large-cap allocation is defensively positioned relative to her risk profile.",
    ],
  },
  {
    id: "c3",
    name: "Suresh Iyer",
    aum: "₹1.2 Cr",
    riskScore: "High",
    reason: "Large idle balance in savings",
    talkingPoints: [
      "₹18L has sat idle in his linked savings account for 40+ days — good opening for a top-up conversation.",
      "Position a liquid-to-hybrid STP rather than a lump sum — lower psychological barrier.",
      "Reference his stated goal of early retirement at 55 — idle cash is the biggest drag on that timeline.",
      "Suggest reviewing his asset allocation given the balance growth since last rebalancing.",
    ],
  },
  {
    id: "c4",
    name: "Meera Kulkarni",
    aum: "₹29.7 L",
    riskScore: "Medium",
    reason: "SIP paused once",
    talkingPoints: [
      "Single pause is often a temporary cash-flow issue — a light-touch check-in works better than a hard pitch.",
      "Ask if the pause was planned (e.g. a large expense) or reactive to market news.",
      "Offer to resume at a lower amount if cash flow is tight, rather than losing the SIP entirely.",
    ],
  },
  {
    id: "c5",
    name: "Arjun Rao",
    aum: "₹55.9 L",
    riskScore: "Medium",
    reason: "Logged in 6x during market dip",
    talkingPoints: [
      "Moderate anxiety signal — a short reassurance message may be enough before a full call.",
      "Share his portfolio's 3-year rolling return chart to contextualize the recent dip.",
      "Flag that his goal timeline (retirement 2041) has ample room to absorb short-term volatility.",
    ],
  },
  {
    id: "c6",
    name: "Kavita Joshi",
    aum: "₹34.2 L",
    riskScore: "Medium",
    reason: "Large idle balance in savings",
    talkingPoints: [
      "₹6.5L idle for 30+ days — smaller opportunity than Suresh's but still worth a nudge.",
      "Suggest a top-up to her existing Emergency Fund goal, which is currently under-funded.",
      "Low-pressure conversation — frame as 'put idle cash to work', not a hard sell.",
    ],
  },
];

export const totalChurnRiskCount = 12;

export interface CallScript {
  clientId: string;
  title: string;
  opener: string;
  lines: string[];
  closer: string;
}

export const callScripts: CallScript[] = [
  {
    clientId: "c1",
    title: "SIP paused twice — reactivation call",
    opener:
      "\"Hi Vikram, this is Rajesh from Bajaj Finserv. Noticed your SIP paused the last two months — wanted to check in, not to sell anything.\"",
    lines: [
      "Ask what changed in his cash flow — listen without judgment before pitching anything.",
      "Show the goal-linked view: pausing pushes his child's education goal back by ~14 months.",
      "Offer a temporary SIP reduction instead of a full pause — keeps compounding alive.",
      "Note that this exact dip is historically when disciplined investors gain the most ground.",
    ],
    closer:
      "\"Even a smaller amount restarted today keeps you on track — shall I set that up while we're on the call?\"",
  },
  {
    clientId: "c2",
    title: "8x dip logins — reassurance call",
    opener:
      "\"Hi Priya, saw you've been checking your portfolio quite a bit this week — totally normal with markets moving. Wanted to walk you through what's actually happening.\"",
    lines: [
      "Open with reassurance — high app activity during a dip usually signals anxiety, not intent to redeem.",
      "Walk through her portfolio's recovery pattern after the 2024 correction using her own numbers.",
      "Offer a proactive portfolio review this week — clients who get a call during volatility redeem 3x less.",
      "Highlight that her large-cap allocation is already defensively positioned for her risk profile.",
    ],
    closer:
      "\"Nothing about your plan has changed — want me to send a short summary you can keep for reference?\"",
  },
  {
    clientId: "c3",
    title: "Idle savings balance — top-up call",
    opener:
      "\"Hi Suresh, noticed about ₹18L has been sitting in your linked savings account for a while — thought I'd flag it since it's not doing much there.\"",
    lines: [
      "Frame it as an opportunity, not a sales pitch — idle cash earning near-zero is the opener.",
      "Position a liquid-to-hybrid STP rather than a lump sum — lower psychological barrier to start.",
      "Reference his stated goal of early retirement at 55 — idle cash is the biggest drag on that timeline.",
      "Suggest a quick asset allocation review given how much the balance has grown since last rebalancing.",
    ],
    closer:
      "\"Even moving half of it into a staggered plan this week would make a real difference by 55 — want me to draft that?\"",
  },
];

export interface Lead {
  id: string;
  name: string;
  city: string;
  investmentIntent: string;
  distance: string;
  projectedTrailPerYear: number;
  aumValue: number;
}

export const leads: Lead[] = [
  {
    id: "l1",
    name: "Neha Kapoor",
    city: "Andheri, Mumbai",
    investmentIntent: "₹15,000/mo SIP — Tax saving (ELSS)",
    distance: "3.1 km away",
    projectedTrailPerYear: 2700,
    aumValue: 1800000,
  },
  {
    id: "l2",
    name: "Rohan Bhatt",
    city: "Bandra, Mumbai",
    investmentIntent: "₹5,00,000 lumpsum — Retirement planning",
    distance: "4.8 km away",
    projectedTrailPerYear: 7500,
    aumValue: 500000,
  },
  {
    id: "l3",
    name: "Sanjana Pillai",
    city: "Powai, Mumbai",
    investmentIntent: "₹8,000/mo SIP — Child education goal",
    distance: "6.2 km away",
    projectedTrailPerYear: 1440,
    aumValue: 960000,
  },
];

export type Channel = "App" | "Assisted" | "Branch";

export interface LedgerEntry {
  id: string;
  client: string;
  transaction: string;
  channel: Channel;
  attributionStatus: string;
  trailEarned: string;
}

export const ledgerEntries: LedgerEntry[] = [
  {
    id: "t1",
    client: "Ananya Sharma",
    transaction: "SIP top-up ₹6,000",
    channel: "App",
    attributionStatus: "Credited to you",
    trailEarned: "₹9",
  },
  {
    id: "t2",
    client: "Vikram Desai",
    transaction: "Lumpsum ₹1,20,000",
    channel: "Assisted",
    attributionStatus: "Credited to you",
    trailEarned: "₹180",
  },
  {
    id: "t3",
    client: "Priya Nair",
    transaction: "SIP renewal ₹25,000/mo",
    channel: "App",
    attributionStatus: "Credited to you",
    trailEarned: "₹375",
  },
  {
    id: "t4",
    client: "Suresh Iyer",
    transaction: "STP setup ₹18,00,000",
    channel: "Branch",
    attributionStatus: "Credited to you",
    trailEarned: "₹2,700",
  },
  {
    id: "t5",
    client: "Meera Kulkarni",
    transaction: "New SIP ₹10,000/mo",
    channel: "App",
    attributionStatus: "Credited to you",
    trailEarned: "₹150",
  },
  {
    id: "t6",
    client: "Arjun Rao",
    transaction: "Switch: Debt → Hybrid",
    channel: "Assisted",
    attributionStatus: "Credited to you",
    trailEarned: "₹84",
  },
];

export interface DataSpineSource {
  name: string;
  description: string;
}

export const dataSpineSources: DataSpineSource[] = [
  {
    name: "Account Aggregator framework",
    description: "Consented bank & investment account data via the RBI-regulated AA network.",
  },
  {
    name: "AMC transactions",
    description: "SIPs, lumpsums, switches, and redemptions across Bajaj Finserv AMC schemes.",
  },
  {
    name: "Advisor CRM",
    description: "Call notes and meeting history from your dedicated advisor, kept in sync with your app.",
  },
  {
    name: "Bajaj group signals",
    description: "Consented cross-sell signals from other Bajaj Finserv products, where opted in.",
  },
];

export const dataSpineConsentLine = "All signals consent-gated under DPDP Act 2023.";

// ---------------- FinBuddy — AI/ML client portfolio intelligence ----------------

export type RiskProfile = "Conservative" | "Moderate" | "Aggressive";
export type InsightType = "risk" | "opportunity" | "behavioral";

export interface AssetHolding {
  assetClass: string;
  name: string;
  value: number;
  allocationPct: number;
  oneYearReturn: number;
}

export interface FinBuddyGoal {
  name: string;
  progress: number;
  status: "on-track" | "complete" | "off-track";
  targetAmount: number;
  currentAmount: number;
  targetYear: number;
}

export interface AiInsight {
  type: InsightType;
  title: string;
  detail: string;
  confidence: number; // 0-100, model confidence score
}

export interface ActivityEvent {
  date: string;
  event: string;
}

export interface FinBuddyClient {
  id: string;
  name: string;
  initials: string;
  city: string;
  age: number;
  persona: string;
  riskProfile: RiskProfile;
  sinceYear: number;
  aumValue: number;
  aum: string;
  xirr: number;
  healthScore: number; // AI/ML composite portfolio health score, 0-100
  churnClientId?: string; // links back to churnClients if this person is also flagged there
  holdings: AssetHolding[];
  goals: FinBuddyGoal[];
  insights: AiInsight[];
  recommendedActions: string[];
  activity: ActivityEvent[];
}

export const finbuddyClients: FinBuddyClient[] = [
  {
    id: "f1",
    name: "Vikram Desai",
    initials: "VD",
    city: "Mumbai",
    age: 41,
    persona: "Cautious Provider",
    riskProfile: "Moderate",
    sinceYear: 2021,
    aumValue: 4210000,
    aum: "₹42.1 L",
    xirr: 9.8,
    healthScore: 54,
    churnClientId: "c1",
    holdings: [
      { assetClass: "Equity", name: "Large & Midcap Fund", value: 1600000, allocationPct: 38, oneYearReturn: 11.2 },
      { assetClass: "Equity", name: "Flexi Cap Fund", value: 920000, allocationPct: 22, oneYearReturn: 9.4 },
      { assetClass: "Debt", name: "Corporate Bond Fund", value: 860000, allocationPct: 20, oneYearReturn: 7.1 },
      { assetClass: "Hybrid", name: "Balanced Advantage Fund", value: 630000, allocationPct: 15, oneYearReturn: 8.6 },
      { assetClass: "Cash", name: "Savings / Idle", value: 200000, allocationPct: 5, oneYearReturn: 3.5 },
    ],
    goals: [
      {
        name: "Child's Education 2033",
        progress: 41,
        status: "off-track",
        targetAmount: 4500000,
        currentAmount: 1845000,
        targetYear: 2033,
      },
      {
        name: "Retirement 2046",
        progress: 58,
        status: "on-track",
        targetAmount: 30000000,
        currentAmount: 5400000,
        targetYear: 2046,
      },
    ],
    insights: [
      {
        type: "risk",
        title: "SIP discipline breaking down",
        detail:
          "Two SIP pauses in the last 90 days, both within 5 days of a market drawdown >2%. Pattern matches the model's highest-confidence churn precursor.",
        confidence: 91,
      },
      {
        type: "risk",
        title: "Child's education goal slipping",
        detail: "At current pace, this goal lands ~14 months behind its 2033 target — driven directly by the paused contributions.",
        confidence: 87,
      },
      {
        type: "opportunity",
        title: "Responsive to loss-framing during past dips",
        detail: "Historically resumed full SIP within 2 weeks when shown goal-timeline impact rather than return charts. Lead with the goal view, not performance.",
        confidence: 76,
      },
    ],
    recommendedActions: [
      "Call this week — reactivation window closes fast after a 2nd consecutive pause.",
      "Lead with the goal-timeline visual, not a market recovery pitch.",
      "Offer a reduced SIP amount as a bridge rather than asking for full resumption.",
    ],
    activity: [
      { date: "2026-07-14", event: "SIP payment failed / paused (2nd occurrence)" },
      { date: "2026-06-29", event: "Viewed portfolio 4x in one day during market dip" },
      { date: "2026-05-02", event: "Logged a support query about NAV drop" },
    ],
  },
  {
    id: "f2",
    name: "Priya Nair",
    initials: "PN",
    city: "Mumbai",
    age: 34,
    persona: "Anxious Optimizer",
    riskProfile: "Aggressive",
    sinceYear: 2020,
    aumValue: 6840000,
    aum: "₹68.4 L",
    xirr: 14.1,
    healthScore: 71,
    churnClientId: "c2",
    holdings: [
      { assetClass: "Equity", name: "Small Cap Fund", value: 2050000, allocationPct: 30, oneYearReturn: 16.8 },
      { assetClass: "Equity", name: "Large Cap Fund", value: 2390000, allocationPct: 35, oneYearReturn: 10.9 },
      { assetClass: "Equity", name: "Sectoral — Tech Fund", value: 1370000, allocationPct: 20, oneYearReturn: 13.4 },
      { assetClass: "Debt", name: "Short Duration Fund", value: 1030000, allocationPct: 15, oneYearReturn: 6.9 },
    ],
    goals: [
      { name: "Home Down Payment 2028", progress: 66, status: "on-track", targetAmount: 3500000, currentAmount: 2310000, targetYear: 2028 },
      { name: "Retirement 2052", progress: 22, status: "on-track", targetAmount: 45000000, currentAmount: 3900000, targetYear: 2052 },
    ],
    insights: [
      {
        type: "behavioral",
        title: "Volatility-triggered checking behavior",
        detail: "Logged in 8x during this month's dip vs. a normal baseline of 1-2x/week. High app engagement without any redemption request — classic anxiety signature, not exit intent.",
        confidence: 94,
      },
      {
        type: "opportunity",
        title: "Portfolio is defensively positioned already",
        detail: "35% large-cap weighting cushions this specific dip well relative to her risk profile — a good, factual reassurance point.",
        confidence: 82,
      },
      {
        type: "opportunity",
        title: "Proactive-call responders retain 3x better",
        detail: "Clients with this exact behavioral signature who received a call within 48 hours of the anxiety spike showed a 3x lower 90-day redemption rate.",
        confidence: 79,
      },
    ],
    recommendedActions: [
      "Proactive reassurance call within 48 hours — don't wait for her to reach out.",
      "Show the 2024 correction recovery chart using her own portfolio numbers.",
      "Close with a written summary she can re-read next time she feels anxious.",
    ],
    activity: [
      { date: "2026-07-15", event: "Logged in 8x this week during market dip" },
      { date: "2026-07-10", event: "Viewed 'redeem' screen without submitting" },
      { date: "2026-06-20", event: "Increased SIP by ₹5,000/mo after bonus" },
    ],
  },
  {
    id: "f3",
    name: "Suresh Iyer",
    initials: "SI",
    city: "Mumbai",
    age: 52,
    persona: "Idle Capital Holder",
    riskProfile: "Conservative",
    sinceYear: 2018,
    aumValue: 12000000,
    aum: "₹1.2 Cr",
    xirr: 8.4,
    healthScore: 62,
    churnClientId: "c3",
    holdings: [
      { assetClass: "Debt", name: "Corporate Bond Fund", value: 4800000, allocationPct: 40, oneYearReturn: 7.4 },
      { assetClass: "Hybrid", name: "Balanced Advantage Fund", value: 3600000, allocationPct: 30, oneYearReturn: 8.9 },
      { assetClass: "Equity", name: "Large Cap Fund", value: 1800000, allocationPct: 15, oneYearReturn: 10.5 },
      { assetClass: "Cash", name: "Linked Savings (Idle)", value: 1800000, allocationPct: 15, oneYearReturn: 3.2 },
    ],
    goals: [
      { name: "Early Retirement 2029", progress: 74, status: "on-track", targetAmount: 40000000, currentAmount: 29600000, targetYear: 2029 },
    ],
    insights: [
      {
        type: "opportunity",
        title: "₹18L idle balance, 40+ days",
        detail: "Linked savings balance has grown steadily and sat idle past the model's 30-day 'deployable capital' threshold — the single largest AUM-growth opportunity in this book.",
        confidence: 96,
      },
      {
        type: "risk",
        title: "Idle cash is the biggest drag on his own stated goal",
        detail: "At his early-retirement-at-55 timeline, this idle balance alone represents ~9 months of lost compounding versus a liquid-to-hybrid STP.",
        confidence: 84,
      },
      {
        type: "opportunity",
        title: "High trust, low friction relationship",
        detail: "6-year tenure, no complaints, no missed SIPs — a low-resistance conversation, best positioned as portfolio housekeeping rather than a sales pitch.",
        confidence: 71,
      },
    ],
    recommendedActions: [
      "Open with 'idle cash' framing, not a product pitch.",
      "Propose a staggered liquid-to-hybrid STP over lump sum.",
      "Bundle in a quick allocation review given balance growth since last rebalance.",
    ],
    activity: [
      { date: "2026-07-01", event: "Linked savings balance crossed ₹18L idle threshold" },
      { date: "2026-05-18", event: "Last rebalancing review" },
      { date: "2026-03-02", event: "Increased SIP by ₹15,000/mo" },
    ],
  },
  {
    id: "f4",
    name: "Meera Kulkarni",
    initials: "MK",
    city: "Pune",
    age: 37,
    persona: "Cash-Flow Sensitive",
    riskProfile: "Moderate",
    sinceYear: 2022,
    aumValue: 2970000,
    aum: "₹29.7 L",
    xirr: 10.6,
    healthScore: 68,
    churnClientId: "c4",
    holdings: [
      { assetClass: "Equity", name: "Flexi Cap Fund", value: 1330000, allocationPct: 45, oneYearReturn: 10.1 },
      { assetClass: "Debt", name: "Short Duration Fund", value: 890000, allocationPct: 30, oneYearReturn: 6.8 },
      { assetClass: "Hybrid", name: "Balanced Advantage Fund", value: 750000, allocationPct: 25, oneYearReturn: 8.2 },
    ],
    goals: [
      { name: "Emergency Fund", progress: 88, status: "on-track", targetAmount: 400000, currentAmount: 352000, targetYear: 2026 },
      { name: "Europe Trip 2028", progress: 51, status: "on-track", targetAmount: 600000, currentAmount: 306000, targetYear: 2028 },
    ],
    insights: [
      {
        type: "behavioral",
        title: "Single SIP pause, low churn signature",
        detail: "One pause in 4 years, no dip-triggered logins. Model classifies this as most likely a temporary cash-flow event, not disengagement.",
        confidence: 68,
      },
      {
        type: "opportunity",
        title: "Light-touch check-in likely sufficient",
        detail: "Clients with this profile resumed SIPs unprompted 60% of the time within 60 days — a soft nudge outperforms a hard pitch here.",
        confidence: 63,
      },
    ],
    recommendedActions: [
      "Send a light-touch check-in message rather than booking a call.",
      "Offer to resume at a lower amount if cash flow is the driver.",
    ],
    activity: [
      { date: "2026-07-05", event: "SIP paused (1st occurrence in 4 years)" },
      { date: "2026-04-11", event: "Europe Trip goal created" },
    ],
  },
  {
    id: "f5",
    name: "Arjun Rao",
    initials: "AR",
    city: "Thane",
    age: 29,
    persona: "Long-Horizon Builder",
    riskProfile: "Aggressive",
    sinceYear: 2023,
    aumValue: 5590000,
    aum: "₹55.9 L",
    xirr: 15.3,
    healthScore: 79,
    churnClientId: "c5",
    holdings: [
      { assetClass: "Equity", name: "Small Cap Fund", value: 1957000, allocationPct: 35, oneYearReturn: 17.9 },
      { assetClass: "Equity", name: "Mid Cap Fund", value: 1677000, allocationPct: 30, oneYearReturn: 14.2 },
      { assetClass: "Equity", name: "Flexi Cap Fund", value: 1118000, allocationPct: 20, oneYearReturn: 11.6 },
      { assetClass: "Debt", name: "Corporate Bond Fund", value: 838000, allocationPct: 15, oneYearReturn: 7.0 },
    ],
    goals: [{ name: "Retirement 2041", progress: 19, status: "on-track", targetAmount: 60000000, currentAmount: 5100000, targetYear: 2041 }],
    insights: [
      {
        type: "behavioral",
        title: "Moderate dip-anxiety signal",
        detail: "6 logins this week vs. baseline of ~2 — a milder version of the same pattern seen in higher-risk clients, worth a short message before it escalates.",
        confidence: 58,
      },
      {
        type: "opportunity",
        title: "16-year runway absorbs volatility easily",
        detail: "Retirement target of 2041 gives significant room to ride out short-term dips — a strong, factual reassurance point for this client specifically.",
        confidence: 80,
      },
    ],
    recommendedActions: [
      "Short reassurance message before this escalates into a call-worthy signal.",
      "Share his 3-year rolling return chart for context.",
    ],
    activity: [{ date: "2026-07-16", event: "Logged in 6x this week during market dip" }],
  },
  {
    id: "f6",
    name: "Kavita Joshi",
    initials: "KJ",
    city: "Nashik",
    age: 45,
    persona: "Idle Capital Holder",
    riskProfile: "Conservative",
    sinceYear: 2019,
    aumValue: 3420000,
    aum: "₹34.2 L",
    xirr: 8.9,
    healthScore: 66,
    churnClientId: "c6",
    holdings: [
      { assetClass: "Debt", name: "Corporate Bond Fund", value: 1710000, allocationPct: 50, oneYearReturn: 7.2 },
      { assetClass: "Hybrid", name: "Balanced Advantage Fund", value: 1026000, allocationPct: 30, oneYearReturn: 8.5 },
      { assetClass: "Cash", name: "Linked Savings (Idle)", value: 684000, allocationPct: 20, oneYearReturn: 3.3 },
    ],
    goals: [{ name: "Emergency Fund", progress: 64, status: "off-track", targetAmount: 500000, currentAmount: 320000, targetYear: 2027 }],
    insights: [
      {
        type: "opportunity",
        title: "₹6.5L idle for 30+ days",
        detail: "Smaller opportunity than similar idle-cash clients in this book, but still crosses the deployable-capital threshold.",
        confidence: 74,
      },
    ],
    recommendedActions: ["Suggest topping up the under-funded Emergency Fund goal directly from idle cash."],
    activity: [{ date: "2026-06-25", event: "Linked savings balance crossed idle threshold" }],
  },
  {
    id: "f7",
    name: "Ananya Sharma",
    initials: "AS",
    city: "Pune",
    age: 29,
    persona: "Steady Accumulator",
    riskProfile: "Moderate",
    sinceYear: 2022,
    aumValue: 4823000,
    aum: "₹48.2 L",
    xirr: 12.4,
    healthScore: 92,
    holdings: [
      { assetClass: "Equity", name: "Flexi Cap Fund", value: 2170000, allocationPct: 45, oneYearReturn: 11.8 },
      { assetClass: "Equity", name: "Large Cap Fund", value: 1206000, allocationPct: 25, oneYearReturn: 10.4 },
      { assetClass: "Debt", name: "Short Duration Fund", value: 964000, allocationPct: 20, oneYearReturn: 6.9 },
      { assetClass: "Hybrid", name: "Balanced Advantage Fund", value: 483000, allocationPct: 10, oneYearReturn: 8.3 },
    ],
    goals: [
      { name: "Home Down Payment 2029", progress: 72, status: "on-track", targetAmount: 2000000, currentAmount: 1440000, targetYear: 2029 },
      { name: "Emergency Fund", progress: 100, status: "complete", targetAmount: 300000, currentAmount: 300000, targetYear: 2026 },
      { name: "Europe Trip 2027", progress: 37, status: "off-track", targetAmount: 400000, currentAmount: 148000, targetYear: 2027 },
    ],
    insights: [
      {
        type: "behavioral",
        title: "Model-textbook 'Steady Accumulator'",
        detail: "Consistent monthly SIPs, rare panic behavior, increases contributions after salary hikes. Lowest churn-risk percentile in this book.",
        confidence: 95,
      },
      {
        type: "opportunity",
        title: "Europe Trip goal has room for a small top-up ask",
        detail: "A ₹6,000 one-time top-up or ₹500 SIP increase fully closes the gap — low-friction upsell given her track record of saying yes to small nudges.",
        confidence: 81,
      },
    ],
    recommendedActions: ["Low-pressure nudge toward the Europe Trip top-up — high historical acceptance rate for this persona."],
    activity: [
      { date: "2026-07-08", event: "Accepted in-app nudge, SIP top-up ₹6,000" },
      { date: "2026-05-14", event: "Increased SIP by ₹2,000/mo after salary hike" },
    ],
  },
  {
    id: "f8",
    name: "Rohit Malhotra",
    initials: "RM",
    city: "Mumbai",
    age: 38,
    persona: "High-Trust Veteran",
    riskProfile: "Aggressive",
    sinceYear: 2017,
    aumValue: 18600000,
    aum: "₹1.86 Cr",
    xirr: 16.7,
    healthScore: 97,
    holdings: [
      { assetClass: "Equity", name: "Small Cap Fund", value: 5580000, allocationPct: 30, oneYearReturn: 18.2 },
      { assetClass: "Equity", name: "Mid Cap Fund", value: 4650000, allocationPct: 25, oneYearReturn: 14.9 },
      { assetClass: "Equity", name: "Flexi Cap Fund", value: 4650000, allocationPct: 25, oneYearReturn: 12.1 },
      { assetClass: "Debt", name: "Corporate Bond Fund", value: 3720000, allocationPct: 20, oneYearReturn: 7.3 },
    ],
    goals: [{ name: "Retirement 2044", progress: 63, status: "on-track", targetAmount: 90000000, currentAmount: 56700000, targetYear: 2044 }],
    insights: [
      {
        type: "opportunity",
        title: "Prime referral candidate",
        detail: "9-year tenure, top-decile XIRR, zero support tickets — model flags him as the highest-propensity referral source in this book.",
        confidence: 88,
      },
    ],
    recommendedActions: ["Ask for a warm referral at the next scheduled review — strong relationship, no urgency needed."],
    activity: [{ date: "2026-06-30", event: "Quarterly review completed, no action items" }],
  },
];

export function getFinBuddyClient(id: string): FinBuddyClient | undefined {
  return finbuddyClients.find((c) => c.id === id);
}
