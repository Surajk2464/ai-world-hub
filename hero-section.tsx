"use client";

import { Search } from "lucide-react";
import { aiTools, categories } from "@/lib/tools-data";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function HeroSection({ searchQuery, onSearchChange }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -top-20 left-1/4 h-[300px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              10,000+ AI Tools Database
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-balance">Discover the Best</span>
            <br />
            <span className="gradient-text text-glow">AI Tools</span>
            <br />
            <span className="text-balance">for Every Task</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            Explore detailed reviews, pricing, features, and real use cases for the most
            powerful AI tools — for creators, students, developers, and businesses.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-xl">
            <div className="group relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-14 w-full rounded-xl border border-border bg-card pl-12 pr-4 text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:glow-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
