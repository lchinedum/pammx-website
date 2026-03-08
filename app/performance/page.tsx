import { CtraderEmbed } from "@/components/CtraderEmbed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance | PAMMX",
  description:
    "View live performance metrics, ROI, equity curve, and drawdown for the PAMMX copy trading strategy.",
};

export default function PerformancePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Performance
        </h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          Live metrics from the PAMMX strategy. Data updates automatically from
          the cTrader platform.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CtraderEmbed />
      </section>

      <section className="border-t border-white/10 bg-pammx-dark-800/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Past performance does not guarantee future results. Trading involves
            risk. The information on this page is for informational purposes
            only and does not constitute financial or investment advice.
          </p>
        </div>
      </section>
    </>
  );
}
