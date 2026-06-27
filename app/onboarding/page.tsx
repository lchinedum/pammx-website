import { SITE_LINKS, STRATEGY } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Onboarding | PAMMX",
  description:
    "Simple account setup, transparent strategy overview, clear funding instructions. No long-term lockups.",
};

const expectations = [
  "Simple account setup",
  "Transparent strategy overview",
  "Clear funding instructions",
  "No long-term lockups",
  "Medium- to long-term growth focus",
];

const steps = [
  "Click the Copy PAMMX invite link",
  "Open or log in to IC Markets (cTrader)",
  "Complete verification if required",
  `Fund your account ($${STRATEGY.minInvestment} minimum)`,
  "Start copying — trades mirror automatically",
];

export default function OnboardingPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Investor Onboarding
        </h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          A straightforward process to get you started with PAMMX.
        </p>
      </section>

      <section className="border-t border-white/10 bg-pammx-dark-800/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            What Investors Can Expect
          </h2>
          <ul className="mt-6 space-y-3">
            {expectations.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white">Onboarding Steps</h2>
        <ol className="mt-8 space-y-6">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 rounded-lg border border-white/10 bg-pammx-dark-800/50 p-6"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pammx-blue/20 font-bold text-pammx-blue">
                {index + 1}
              </span>
              <span className="text-gray-200">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-lg border border-pammx-green/30 bg-pammx-green/5 p-8">
          <h3 className="text-xl font-bold text-white">Get Started</h3>
          <p className="mt-2 text-gray-300">
            Minimum investment: ${STRATEGY.minInvestment}. Use the invite link
            below to copy PAMMX on cTrader Copy.
          </p>
          <a
            href={SITE_LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-pammx-green px-6 py-3 font-semibold text-white hover:bg-emerald-500"
          >
            Copy PAMMX Strategy →
          </a>
        </div>
      </section>
    </>
  );
}
