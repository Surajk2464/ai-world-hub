"use client";

import Link from "next/link";
import { AITool } from "@/lib/tools-data";
import { ArrowRight, Star } from "lucide-react";

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:glow-border"
    >
      {/* Logo */}
      <div className="mb-4 flex items-start">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-3xl">
          {tool.logo}
        </div>
      </div>

      {/* Title and Rating */}
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        <div className="flex items-center gap-1 text-amber-400">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs">{tool.rating}</span>
        </div>
      </div>

      {/* Short Description */}
      <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
        {tool.shortDescription}
      </p>

      {/* Feature Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {tool.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-1 text-sm font-medium text-primary">
        Read Review & Guide
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
