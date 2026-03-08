import { HeroBanner } from "@/components/HeroBanner";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Value Proposition
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            PAMMX delivers active exposure to global index markets through a
            rules-based, momentum-driven trading system. Designed for investors
            seeking steady capital growth with controlled drawdowns.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-pammx-dark-800/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Key Highlights
          </h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Active short-term index strategy",
              "Multi-target scaling model (TP1–TP4)",
              "Systematic profit-taking",
              "Capital preservation at the core",
              "Minimum investment: $100+",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-pammx-dark/50 px-4 py-3"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pammx-green/20 text-pammx-green">
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
          <div className="mt-10 flex justify-center gap-4">
            <a
              href={SITE_LINKS.investor}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pammx-green px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
            >
              Request Access
            </a>
            <Link
              href="/strategy"
              className="rounded-lg border-2 border-pammx-blue px-6 py-3 font-semibold text-pammx-blue transition hover:bg-pammx-blue/10"
            >
              View Strategy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
