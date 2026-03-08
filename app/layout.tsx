import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "PAMMX | Copy Trading Strategy",
    template: "%s | PAMMX",
  },
  description:
    "Smart Capital. Automated Growth. A disciplined index-trading strategy engineered for consistent, short-term market engagement.",
  icons: {
    icon: "/images/pammx-logo.png",
    apple: "/images/pammx-logo.png",
  },
  openGraph: {
    title: "PAMMX | Copy Trading Strategy",
    description:
      "Active exposure to global index markets through a rules-based, momentum-driven trading system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-pammx-dark text-gray-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
