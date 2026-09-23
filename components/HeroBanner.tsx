import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { SITE_LINKS, STRATEGY } from "@/lib/constants";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pammx-dark via-pammx-dark-800 to-pammx-dark">
      <div className="absolute inset-0 bg-pammx-blue/10" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="flex-shrink-0">
            <Image
              src="/images/pammx-logo.png"
              alt="PAMMX - Copy Trading Strategy"
              width={320}
              height={320}
              className="h-48 w-auto object-contain sm:h-56"
              priority
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-12 lg:flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-pammx-green">
              IC Markets cTrader Copy
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {STRATEGY.tagline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-300">
              Primarily <strong className="text-white">gold (XAUUSD)</strong>,
              with occasional <strong className="text-white">NASDAQ</strong> and{" "}
              <strong className="text-white">GBPUSD</strong> trades.
              Discretionary trading by an experienced trader, mirrored on
              cTrader Copy in real time.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {[
                `${STRATEGY.performanceFee}% perf. fee`,
                `$${STRATEGY.minInvestment} min`,
                STRATEGY.leverage,
                "No mgmt fee",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <CTAButton href={SITE_LINKS.invite} external variant="primary">
                Copy PAMMX Strategy
              </CTAButton>
              <CTAButton href={SITE_LINKS.investor} external variant="secondary">
                View Live Stats
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
