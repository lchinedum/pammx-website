import Image from "next/image";
import { SITE_LINKS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | PAMMX",
  description:
    "Learn how PAMMX executes strategy, scales positions, manages risk, and optimizes for evolving market conditions.",
};

const steps = [
  {
    title: "Strategy Execution",
    desc: "PAMMX trades short-term momentum patterns on major global indices using a structured entry model.",
    image: "/images/ctrader-compact.png",
  },
  {
    title: "Scaling & Profit Targets",
    desc: "Positions scale out at TP1–TP4, reducing risk while capturing extended moves.",
    image: "/images/ctrader-scaling-1.png",
  },
  {
    title: "Automated Risk Controls",
    desc: "Exposure decreases as trades move into profit, ensuring capital preservation.",
    image: "/images/ctrader-scaling-2.png",
  },
  {
    title: "Continuous Optimization",
    desc: "The system adapts to evolving market conditions while maintaining strict rule-based execution.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          How It Works
        </h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          A four-step process from entry to optimization.
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-8 lg:flex-row lg:items-center"
              >
                <div className="flex-shrink-0 lg:w-1/3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pammx-green/20 text-xl font-bold text-pammx-green">
                    {index + 1}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-white">
                    Step {index + 1} — {step.title}
                  </h2>
                  <p className="mt-2 text-gray-300">{step.desc}</p>
                </div>
                {step.image && (
                  <div className="flex-1 overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={350}
                      className="h-56 w-full object-cover object-top lg:h-72"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-pammx-dark-800/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-pammx-blue/30 bg-pammx-blue/5 p-8 text-center">
            <h2 className="text-xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-2 text-gray-300">
              Request access to begin receiving performance updates.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href={SITE_LINKS.investor}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-pammx-green px-6 py-3 font-semibold text-white hover:bg-emerald-500"
              >
                Request Access
              </a>
              <a
                href={SITE_LINKS.strategy}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-pammx-blue px-6 py-3 font-semibold text-pammx-blue hover:bg-pammx-blue/10"
              >
                View Strategy
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
