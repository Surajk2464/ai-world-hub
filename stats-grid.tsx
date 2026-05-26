"use client";

import { categories } from "@/lib/tools-data";

export function StatsGrid() {
  const stats = [
    { value: "10,000+", label: "AI Tools" },
    { value: `${categories.length - 1}`, label: "Categories" },
    { value: "100%", label: "Reviews" },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border bg-card/50 p-6 text-center transition-all hover:border-primary/30 hover:glow-border"
            >
              <span className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
