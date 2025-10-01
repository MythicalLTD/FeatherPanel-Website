"use client";

import React, { useMemo } from "react";

type Datum = {
  label: string;
  value: number;
  color: string; // Tailwind class e.g. bg-emerald-500
};

function HBarChart({
  title,
  subtitle,
  unit,
  higherIsBetter,
  data,
}: {
  title: string;
  subtitle?: string;
  unit?: string;
  higherIsBetter?: boolean;
  data: Datum[];
}) {
  const max = useMemo(() => Math.max(1, ...data.map((d) => d.value)), [data]);
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle ? (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      <div className="space-y-4">
        {data.map((d) => {
          const pct = Math.max(4, Math.round((d.value / max) * 100));
          return (
            <div key={d.label} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{d.label}</span>
                <span className="tabular-nums text-muted-foreground">
                  {d.value}
                  {unit ? ` ${unit}` : ""}
                </span>
              </div>
              <div className="relative h-3 overflow-hidden rounded-md bg-muted">
                <div
                  className={`h-3 rounded-md ${d.color} transition-all duration-700`}
                  style={{ width: `${pct}%` }}
                  title={`${d.label}: ${d.value}${unit ? ` ${unit}` : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0" />
              </div>
            </div>
          );
        })}
      </div>
      {typeof higherIsBetter === "boolean" && (
        <div className="mt-4 text-xs text-muted-foreground">
          {higherIsBetter ? "Higher is better" : "Lower is better"}
        </div>
      )}
    </div>
  );
}

export function ComparisonCharts() {
  const performance: Datum[] = [
    { label: "Pyrodactyl", value: 63, color: "bg-orange-500" },
    { label: "Pelican", value: 59, color: "bg-yellow-500" },
    { label: "Pterodactyl", value: 49, color: "bg-red-500" },
    { label: "FeatherPanel", value: 24, color: "bg-emerald-500" },
  ];

  const size: Datum[] = [
    { label: "Pyrodactyl", value: 16, color: "bg-orange-500" },
    { label: "Pelican", value: 14, color: "bg-yellow-500" },
    { label: "Pterodactyl", value: 14, color: "bg-red-500" },
    { label: "FeatherPanel", value: 7, color: "bg-emerald-500" },
  ];

  const memoryUsage: Datum[] = [
    { label: "Pyrodactyl", value: 218, color: "bg-orange-500" },
    { label: "Pelican", value: 268, color: "bg-yellow-500" },
    { label: "Pterodactyl", value: 350, color: "bg-red-500" },
    { label: "FeatherPanel", value: 157, color: "bg-emerald-500" },
  ];

  const startupTime: Datum[] = [
    { label: "Pyrodactyl", value: 4.2, color: "bg-orange-500" },
    { label: "Pelican", value: 3.8, color: "bg-yellow-500" },
    { label: "Pterodactyl", value: 5.1, color: "bg-red-500" },
    { label: "FeatherPanel", value: 1.7, color: "bg-emerald-500" },
  ];

  return (
    <section className="container mx-auto px-6 py-24" id="comparison">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">Performance & Size</h2>
        <p className="mt-2 text-muted-foreground">
          Compare Pyrodactyl, Pelican, Pterodactyl, and FeatherPanel at a glance.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          <em>
            All benchmarks were performed on a Debian 13 machine with a Ryzen 5 5600G, 64GB DDR4 DRAM, and a clean install for each panel.
            2025-09-30
          </em>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <HBarChart
          title="Response Time [Web Browser]"
          subtitle="Relative response time (lower is better)"
          unit="ms"
          higherIsBetter={false}
          data={performance}
        />
        <HBarChart
          title="File Size [Server]"
          subtitle="Approximate file size (lower is better) (Without dependencies)"
          unit="MB"
          higherIsBetter={false}
          data={size}
        />
        <HBarChart
          title="Memory Usage [Web Browser]"
          subtitle="Average RAM usage while idle (lower is better) [Web Browser]"
          unit="MB"
          higherIsBetter={false}
          data={memoryUsage}
        />
        <HBarChart
          title="Load Usage [Server]   "
          subtitle="VM usage while on load (lower is better) [Server]"
          unit="%"
          higherIsBetter={false}
          data={startupTime}
        />
      </div>
    </section>
  );
}
