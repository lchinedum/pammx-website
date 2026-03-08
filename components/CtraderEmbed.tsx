"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { CTRADER_EMBED } from "@/lib/constants";

declare global {
  interface Window {
    putInitScript?: (name: string) => void;
    runPlugin?: (rootId: string, config: object) => void;
  }
}

export function CtraderEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const runPlugin = window.runPlugin;
    const putInitScript = window.putInitScript;

    if (runPlugin && putInitScript && containerRef.current) {
      putInitScript("runPlugin");
      runPlugin("ctrader-plugin-root", {
        route: CTRADER_EMBED.route,
        appConfig: {
          strategy: { showStrategyPromotion: true },
        },
      });
    }
  }, []);

  return (
    <>
      <Script
        src={CTRADER_EMBED.widgetUrl}
        strategy="afterInteractive"
        onLoad={() => {
          if (window.putInitScript && window.runPlugin) {
            window.putInitScript("runPlugin");
            window.runPlugin("ctrader-plugin-root", {
              route: CTRADER_EMBED.route,
              appConfig: {
                strategy: { showStrategyPromotion: true },
              },
            });
          }
        }}
      />
      <div
        id="ctrader-plugin-root"
        ref={containerRef}
        className="min-h-[500px] w-full rounded-lg border border-white/10 bg-pammx-dark-800"
        style={{ minHeight: "600px" }}
      />
    </>
  );
}
