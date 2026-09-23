import { HeroBanner } from "@/components/HeroBanner";
import { CopyInviteSection } from "@/components/CopyInviteSection";
import Link from "next/link";
import { SITE_LINKS, STRATEGY } from "@/lib/constants";

const highlights = [
  `Primary focus: ${STRATEGY.primaryMarket}`,
  "Occasional NASDAQ & GBPUSD setups",
  "Discretionary trading, 1% risk per trade",
  "25% performance fee on profits only",
  `Minimum investment: $${STRATEGY.minInvestment}`,
  "Your funds stay in your own account",
  "Track record: 203 trades · 65.5% win rate · 2.27 profit factor",
];

const markets = [
  {
    symbol: "XAUUSD",
    name: "Gold",
    role: "Primary",
    desc: "Most trades target gold momentum and session-based setups.",
  },
  {
    symbol: "NASDAQ",
    name: "US Tech Index",
    role: "Occasional",
    desc: "Traded selectively, when market conditions warrant.",
  },
  {
    symbol: "GBPUSD",
    name: "Cable",
    role: "Occasional",
    desc: "FX exposure when high-probability setups appear.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Gold-Focused Copy Trading
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            PAMMX is a manually traded, disciplined strategy on{" "}
            {STRATEGY.platform}. You copy the same account the trader runs, with full
            transparency on performance and drawdowns.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {markets.map((m) => (
            <div
              key={m.symbol}
              className="rounded-xl border border-white/10 bg-pammx-dark-800/50 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">
                  {m.symbol}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    m.role === "Primary"
                      ? "bg-pammx-green/20 text-pammx-green"
                      : "bg-pammx-blue/20 text-pammx-blue"
                  }`}
                >
                  {m.role}
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-gray-200">{m.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-pammx-dark-800/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Why Copy PAMMX
          </h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-pammx-dark/50 px-4 py-3"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pammx-green/20 text-pammx-green">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CopyInviteSection />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-pammx-green/30 bg-gradient-to-br from-pammx-green/10 to-pammx-blue/10 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to copy?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Join via the official cTrader Copy invite link. Minimum $
            {STRATEGY.minInvestment}. Past performance does not guarantee future
            results — only invest capital you can afford to lose.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE_LINKS.invite}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pammx-green px-8 py-3.5 text-lg font-semibold text-white transition hover:bg-emerald-500"
            >
              Copy PAMMX Strategy →
            </a>
            <Link
              href="/performance"
              className="rounded-lg border-2 border-white/20 px-8 py-3.5 text-lg font-semibold text-white transition hover:bg-white/5"
            >
              See Performance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
