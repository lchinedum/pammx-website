import { SITE_LINKS, STRATEGY } from "@/lib/constants";
import { CTAButton } from "./CTAButton";

const copySteps = [
  {
    step: "1",
    title: "Click Copy Strategy",
    desc: "Use the invite link to open PAMMX on IC Markets cTrader Copy.",
  },
  {
    step: "2",
    title: "Open or log in to IC Markets",
    desc: "Create a live cTrader account if you don't have one. Complete verification.",
  },
  {
    step: "3",
    title: `Fund $${STRATEGY.minInvestment}+`,
    desc: "Deposit into your own account. You keep full control of your funds.",
  },
  {
    step: "4",
    title: "Start copying",
    desc: "Trades mirror automatically. Disconnect anytime from the cTrader Copy app.",
  },
];

export function CopyInviteSection() {
  return (
    <section className="border-t border-white/10 bg-pammx-dark-800/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Copy PAMMX in 4 Steps
          </h2>
          <p className="mt-4 text-gray-300">
            Your funds stay in your own IC Markets account. We earn{" "}
            {STRATEGY.performanceFee}% performance fee on net profits only — no
            management fee.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copySteps.map((item) => (
            <li
              key={item.step}
              className="rounded-xl border border-white/10 bg-pammx-dark/60 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pammx-blue to-pammx-green text-lg font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton href={SITE_LINKS.invite} external variant="primary">
            Copy PAMMX Strategy →
          </CTAButton>
          <CTAButton href={SITE_LINKS.investor} external variant="secondary">
            View Live Stats
          </CTAButton>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Invite link:{" "}
          <a
            href={SITE_LINKS.invite}
            className="text-pammx-blue hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE_LINKS.invite}
          </a>
        </p>
      </div>
    </section>
  );
}
