"use client";

import Link from "next/link";
import { AITool } from "@/lib/tools-data";
import { ArrowRight, Star, Sparkles } from "lucide-react";

interface PremiumToolCardProps {
  tool: AITool;
}

export function PremiumToolCard({ tool }: PremiumToolCardProps) {
  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="group relative flex flex-col rounded-2xl glass border border-white/10 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      {/* Animated neon border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
      
      <div className="relative flex flex-col p-5 md:p-6">
        {/* Header: Logo + Rating */}
        <div className="mb-4 md:mb-5 flex items-start justify-between">
          <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/10 text-3xl md:text-4xl shadow-lg border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors duration-300">
            {tool.logo}
          </div>
          <div className="flex items-center gap-1.5 rounded-full glass border border-white/10 px-2.5 md:px-3 py-1 md:py-1.5 group-hover:border-cyan-500/30 transition-colors duration-300">
            <Star className="h-3 w-3 md:h-3.5 md:w-3.5 fill-cyan-400 text-cyan-400" />
            <span className="text-xs md:text-sm font-medium text-foreground">{tool.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg md:text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
          {tool.name}
        </h3>

        {/* Category Badge */}
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 md:px-2.5 py-0.5 md:py-1 text-xs font-medium text-cyan-400 group-hover:border-cyan-500/60 transition-colors duration-300">
            {tool.category}
          </span>
        </div>

        {/* Short Description - Expandable content area for 400+ words */}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3 md:line-clamp-4">
          {tool.shortDescription}
        </p>

        {/* Features Grid - Scalable for comprehensive data */}
        <div className="mb-4 md:mb-5 flex flex-wrap gap-1.5 md:gap-2">
          {tool.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1 rounded-lg bg-muted/30 border border-white/5 px-2 md:px-2.5 py-1 md:py-1.5 text-xs text-muted-foreground group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all duration-300"
            >
              <Sparkles className="h-2.5 w-2.5 md:h-3 md:w-3 text-cyan-400/60" />
              <span className="line-clamp-1">{feature}</span>
            </span>
          ))}
          {tool.features.length > 3 && (
            <span className="inline-flex items-center rounded-lg bg-muted/30 border border-white/5 px-2 md:px-2.5 py-1 md:py-1.5 text-xs text-muted-foreground group-hover:border-cyan-500/20 transition-colors duration-300">
              +{tool.features.length - 3} more
            </span>
          )}
        </div>

        {/* Separator */}
        <div className="mb-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* CTA - No Pricing, Only Guide Access */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Full Guide Available</span>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm font-semibold text-cyan-400 transition-all group-hover:translate-x-1 group-hover:text-cyan-300 duration-300">
            Read Review
            <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
