"use client";

import { Zap } from "lucide-react";
import { NewsItem, newsItems } from "@/lib/tools-data";

interface AIPulseTickerProps {
  items?: NewsItem[];
}

export function AIPulseTicker({ items = newsItems }: AIPulseTickerProps) {
  // Double the items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-slate-950/50 via-slate-900/30 to-slate-950/50 backdrop-blur-sm py-4">
      {/* Section Label */}
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-gradient-to-r from-slate-950 via-slate-950 to-transparent pl-4 pr-8">
        <div className="flex items-center gap-2 rounded-full glass-strong px-4 py-2 border border-cyan-500/30">
          <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />
          <span className="text-sm font-semibold text-cyan-400 whitespace-nowrap">
            AI Pulse Live
          </span>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="flex animate-marquee">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex shrink-0 items-center gap-6 px-8"
          >
            {/* Breaking Badge */}
            {item.isBreaking && (
              <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400 border border-red-500/30">
                Breaking
              </span>
            )}
            
            {/* Category */}
            <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-cyan-400 border border-cyan-500/20">
              {item.category}
            </span>
            
            {/* Headline */}
            <span className="text-sm text-foreground whitespace-nowrap">
              {item.headline}
            </span>
            
            {/* Timestamp */}
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {item.timestamp}
            </span>
            
            {/* Separator */}
            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
          </div>
        ))}
      </div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
