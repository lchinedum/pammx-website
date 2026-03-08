import Link from "next/link";
import { SITE_LINKS, CONTACT } from "@/lib/constants";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/strategy", label: "Strategy" },
  { href: "/performance", label: "Performance" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-pammx-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              PAMMX
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Copy Trading Strategy. Active index trading for consistent,
              short-term market engagement.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.lucky.raw}`}
                  className="transition hover:text-white"
                >
                  {CONTACT.lucky.name}: {CONTACT.lucky.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.matt.raw}`}
                  className="transition hover:text-white"
                >
                  {CONTACT.matt.name}: {CONTACT.matt.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              cTrader
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={SITE_LINKS.strategy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  View Strategy
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.investor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Investor Access
                </a>
              </li>
              <li>
                <a
                  href={SITE_LINKS.ctraderProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  cTrader Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-gray-500">
            Past performance does not guarantee future results. Trading involves
            risk. PAMMX is a copy trading strategy for informational purposes
            only.
          </p>
          <p className="mt-2 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} PAMMX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
