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
    "Automated multi-asset copy trading on IC Markets cTrader. XAUUSD, BTCUSD, EURUSD and USDCAD. 25% performance fee, $100 minimum.",
  icons: {
    icon: "/images/pammx-logo.png",
    apple: "/images/pammx-logo.png",
  },
  openGraph: {
    title: "PAMMX | Copy Trading Strategy",
    description:
      "Copy PAMMX on IC Markets — automated multi-asset strategy. 25% performance fee, no management fee.",
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
