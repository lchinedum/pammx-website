"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SITE_LINKS } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/strategy", label: "Strategy" },
  { href: "/performance", label: "Performance" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-pammx-dark/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/pammx-logo.png"
            alt="PAMMX"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="hidden text-lg font-bold text-white sm:inline">
            PAMMX
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_LINKS.strategy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-pammx-blue hover:text-blue-400"
          >
            View Strategy
          </a>
          <a
            href={SITE_LINKS.investor}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-pammx-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Request Access
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-pammx-dark-800 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_LINKS.strategy}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm font-medium text-pammx-blue"
              onClick={() => setMobileOpen(false)}
            >
              View Strategy
            </a>
            <a
              href={SITE_LINKS.investor}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-pammx-green px-3 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Request Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
