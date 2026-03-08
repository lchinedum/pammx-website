import Image from "next/image";
import { CtraderEmbed } from "@/components/CtraderEmbed";
import { SITE_LINKS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy Overview | PAMMX",
  description:
    "Active index trading built for consistency. PAMMX uses structured entries, disciplined scaling, and rapid profit realization through a multi-target exit framework.",
};

export default function StrategyPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Active Index Trading, Built for Consistency
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-300">
          PAMMX is an active index trading strategy designed to capture
          short-term momentum across highly liquid global indices. The system
          uses structured entries, disciplined scaling, and rapid profit
          realization through a multi-target exit framework.
        </p>
        <p className="mt-4 max-w-3xl text-gray-300">
          Trades follow a predefined scaling model with four profit targets
          (TP1–TP4), allowing early risk reduction while maintaining exposure
          when markets trend favorably.
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
                title: "Systematic Profit-Taking",
                desc: "Positions scale out as targets are reached, locking in gains while reducing exposure.",
              },
              {
                title: "Capital Preservation First",
                desc: "Risk management is embedded directly into the execution structure, with strict rules governing entries, exits, and maximum exposure.",
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
              src="/images/ctrader-scaling-1.png"
              alt="PAMMX scaling entries - 120 Lots, multi-level scaling"
              width={600}
              height={400}
              className="h-48 w-full object-cover object-top"
            />
            <div className="bg-pammx-dark-800 p-4">
              <p className="text-sm text-gray-300">
                Scaling entries (60+60 Lots) with systematic profit-taking
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/images/ctrader-scaling-2.png"
              alt="PAMMX multi-level scaling - 240 Lots"
              width={600}
              height={400}
              className="h-48 w-full object-cover object-top"
            />
            <div className="bg-pammx-dark-800 p-4">
              <p className="text-sm text-gray-300">
                Multi-target scaling (TP1–TP4) in action
              </p>
            </div>
          </div>
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
              "Exposure decreases automatically",
              "No long holding periods",
              "Strict rules for entries, exits, and scaling",
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
            "A systematic, rules-based approach",
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
