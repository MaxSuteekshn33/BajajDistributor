import Link from "next/link";
import {
  ArrowRight,
  Radar,
  UserPlus,
  Calculator,
  Sparkles,
  ShieldCheck,
  Scale,
  ExternalLink,
} from "lucide-react";
import { TopBanner } from "@/components/TopBanner";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { dataSpineSources, dataSpineConsentLine } from "@/lib/mockData";

const features = [
  {
    icon: Radar,
    title: "Churn Radar",
    description: "At-risk clients surfaced with AI-generated talking points, ranked by risk score.",
  },
  {
    icon: UserPlus,
    title: "Lead Feed",
    description: "Digitally-originated investors near you, ready to accept into your book.",
  },
  {
    icon: Calculator,
    title: "Earnings Simulator",
    description: "Model projected trail income as clients move to the assisted-direct channel.",
  },
  {
    icon: Sparkles,
    title: "FinBuddy",
    description: "AI/ML-scored portfolio health, risk flags, and next-best-actions for every client.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <TopBanner />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
            Bajaj Finserv Asset Management
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-primary-dark sm:text-4xl">
            The Distributor Co-Pilot
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
            One workspace for your whole book — churn signals, warm leads, earnings projections,
            and an AI/ML read on every client&apos;s portfolio before you walk into the room.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/dashboard">
              <Button variant="primary">
                Open Dashboard
                <ArrowRight size={15} />
              </Button>
            </Link>
            <Link href="/finbuddy">
              <Button variant="outline">
                <Sparkles size={15} />
                Open FinBuddy
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light text-primary">
                <f.icon size={18} />
              </div>
              <h3 className="mt-3 font-bold text-primary-dark">{f.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">{f.description}</p>
            </Card>
          ))}
        </div>

        {/* Security & Trust */}
        <div className="mt-14">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gain-soft text-gain">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary-dark">Security &amp; Trust</h2>
              <p className="text-xs text-gray-400">
                Every signal behind this app is consented and traceable back to its source.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {dataSpineSources.map((source) => (
              <Card key={source.name} className="p-5">
                <p className="text-sm font-semibold text-primary-dark">{source.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">{source.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-xl bg-primary-light p-4">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-primary" />
            <p className="text-xs font-medium leading-relaxed text-primary">
              {dataSpineConsentLine} All client, portfolio, and activity data in this prototype is
              synthetic mock data — no real customer information is stored, transmitted, or
              displayed anywhere in this app.
            </p>
          </div>
        </div>

        {/* License */}
        <div className="mt-14">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-muted text-gray-500">
              <Scale size={18} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary-dark">License</h2>
              <p className="text-xs text-gray-400">Open source, MIT licensed.</p>
            </div>
          </div>

          <Card className="mt-4 p-6">
            <p className="text-sm leading-relaxed text-gray-600">
              This project is released under the{" "}
              <span className="font-semibold text-primary-dark">MIT License</span> — free to use,
              copy, modify, and distribute, with attribution and without warranty. See the{" "}
              <code className="rounded bg-surface-muted px-1.5 py-0.5 text-xs">LICENSE</code> file
              in the repository for the full text.
            </p>
            <a
              href="https://github.com/MaxSuteekshn33/BajajDistributor/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <ExternalLink size={15} />
              View LICENSE on GitHub
              <ArrowRight size={13} />
            </a>
          </Card>
        </div>
      </main>
    </div>
  );
}
