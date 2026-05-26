"use client";

import { Category, categories } from "@/lib/tools-data";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
