import Image from "next/image";
import { CtraderEmbed } from "@/components/CtraderEmbed";
import { SITE_LINKS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy Overview | PAMMX",
  description:
    "PAMMX is a manually traded, gold-focused strategy on cTrader Copy — discretionary execution with strict 1% risk per trade.",
};

export default function StrategyPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Discretionary Gold Trading, Built on Discipline
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-300">
          PAMMX is a manually traded strategy focused on gold (XAUUSD), with
          occasional NASDAQ and GBPUSD trades. Every position is placed and
          managed by an experienced trader — no algorithms, no bots — with
          strict 1% risk per trade.
        </p>
        <p className="mt-4 max-w-3xl text-gray-300">
          Track record: 203 trades · 65.5% win rate · 2.27 profit factor · 1%
          risk per trade. Winners are managed actively — profits are taken as
          trades develop and exposure is reduced as positions move in our
          favor.
        </p>
      </section>

      <section className="border-t border-white/10 bg-pammx-dark-800/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Core Principles</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "High-Probability Setups",
                desc: "Targets short-term, repeatable patterns that occur frequently during major global sessions.",
              },
              {
                title: "Frequent Trade Opportunities",
                desc: "Operates in highly liquid index markets where volatility provides consistent short-term momentum.",
              },
              {
                title: "Active Trade Management",
                desc: "Positions are managed as targets are reached — locking in gains and reducing exposure while letting winners run.",
              },
              {
                title: "Capital Preservation First",
                desc: "Risk management is non-negotiable: every trade risks a maximum of 1%, with defined exits and capped exposure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-pammx-dark/50 p-6"
              >
                <h3 className="font-semibold text-pammx-green">{item.title}</h3>
                <p className="mt-2 text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white">
          Why This Approach Works
        </h2>
        <p className="mt-4 max-w-3xl text-gray-300">
          Instead of relying on a few large trades, PAMMX focuses on consistent
          execution and incremental gains. This produces a smoother equity curve
          and reduces emotional and financial volatility.
        </p>
        <p className="mt-4 max-w-3xl text-gray-300">
          The strategy performs best in liquid index markets where momentum and
          volatility create regular opportunities.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/images/ctrader-compact.png"
              alt="Short-term trade execution"
              width={600}
              height={400}
              className="h-48 w-full object-cover object-top"
            />
            <div className="bg-pammx-dark-800 p-4">
              <p className="text-sm text-gray-300">
                Short-term trade cycles with rapid execution
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-pammx-dark-800/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Risk Management Framework
          </h2>
          <ul className="mt-6 space-y-3 text-gray-300">
            {[
              "Positions reduce as trades move into profit",
              "Exposure is reduced as trades move into profit",
              "No long holding periods",
              "Defined entries, exits, and position sizing on every trade",
              "Designed to protect capital while participating in favorable market conditions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pammx-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white">Investor Profile</h2>
        <p className="mt-4 text-gray-300">
          PAMMX is suitable for investors seeking:
        </p>
        <ul className="mt-4 space-y-2 text-gray-300">
          {[
            "Active market participation",
            "Short-term trade cycles",
            "Controlled drawdowns",
            "Medium- to long-term capital growth",
            "A disciplined, trader-led approach",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-pammx-green">•</span> {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-lg border border-pammx-blue/30 bg-pammx-blue/5 p-6">
          <h3 className="font-semibold text-white">Investment Requirements</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Minimum recommended investment: $100+</li>
            <li>Recommended horizon: Medium to long term</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10 bg-pammx-dark-800/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Live Strategy View</h2>
          <p className="mt-2 text-gray-400">
            View real-time performance and metrics from the cTrader platform.
          </p>
          <div className="mt-6">
            <CtraderEmbed />
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href={SITE_LINKS.strategy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pammx-blue hover:underline"
            >
              Open in cTrader →
            </a>
            <a
              href={SITE_LINKS.investor}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pammx-green px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              Request Access
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
