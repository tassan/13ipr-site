"use client";

import dynamic from "next/dynamic";

// Carrega após hidratação — não bloqueia FCP/LCP
const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
  { ssr: false }
);

export default function SpeedInsightsDeferred() {
  return <SpeedInsights />;
}
