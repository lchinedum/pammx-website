/** cTrader Copy invite link — sends investors to copy PAMMX on IC Markets */
export const SITE_LINKS = {
  invite: "https://ct-sc.icmarkets.com/copy/strategy/113562?u=ctid7997148",
  strategy: "https://ct-sc.icmarkets.com/copy/strategy/113562?u=ctid7997148",
  investor: "https://ct-sc.icmarkets.com/investor/3hGJLQk?u=ctid7997148",
  ctraderProfile: "https://ctrader.com/u/ctid7997148",
} as const;

export const STRATEGY = {
  name: "PAMMX",
  tagline: "Smart Capital. Automated Growth.",
  markets: ["XAUUSD (Gold)", "NASDAQ", "GBPUSD"],
  primaryMarket: "Gold (XAUUSD)",
  minInvestment: 100,
  performanceFee: 25,
  leverage: "1:500",
  platform: "IC Markets cTrader Copy",
} as const;

export const CONTACT = {
  email: "support@pammx.com",
  lucky: { name: "Lucky", phone: "+1 650-398-8169", raw: "+16503988169" },
} as const;

export const CTRADER_EMBED = {
  widgetUrl: "https://ct-sc.icmarkets.com/widget.js",
  route: "/esp/113562/?lang=en&theme=dark&u=ctid7997148",
} as const;
