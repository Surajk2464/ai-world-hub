"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/lib/tools-data";

interface PremiumCategoryScrollbarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryIcons: Record<string, string> = {
  All: "🌐",
  Writing: "✍️",
  Design: "🎨",
  Research: "🔬",
  Video: "🎬",
  Coding: "💻",
  Audio: "🎵",
  Productivity: "⚡",
  Marketing: "📈",
  Image: "🖼️",
  "Content Creation": "🎬",
  "Data Analysis": "📊",
  "Translation": "🌍",
  "Chatbots": "🤖",
};

export function PremiumCategoryScrollbar({
  selectedCategory,
  onCategoryChange,
}: PremiumCategoryScrollbarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">
            Browse by Category
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="rounded-full glass p-2 text-muted-foreground transition-all hover:text-foreground hover:glow-border"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full glass p-2 text-muted-foreground transition-all hover:text-foreground hover:glow-border"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`group flex shrink-0 items-center gap-3 rounded-xl px-5 py-4 transition-all ${
                  isSelected
                    ? "glass-strong glow-border bg-primary/10"
                    : "glass hover:glass-strong hover:glow-subtle"
                }`}
              >
                <span className="text-2xl">{categoryIcons[category]}</span>
                <div className="flex flex-col items-start">
                  <span
                    className={`text-sm font-medium ${
                      isSelected ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {category === "All" ? "Browse all" : "Explore"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
