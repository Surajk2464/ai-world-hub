"use client";

import { useState, useMemo } from "react";
import { AITool } from "@/lib/tools-data";
import { PremiumToolCard } from "./premium-tool-card";
import { ChevronLeft, ChevronRight, Grid3X3, LayoutList, Loader2 } from "lucide-react";

interface PremiumToolsGridProps {
  tools: AITool[];
  totalCount?: number;
  isLoading?: boolean;
  error?: Error | null;
}

const ITEMS_PER_PAGE = 12;

export function PremiumToolsGrid({ tools, totalCount, isLoading: externalLoading, error }: PremiumToolsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(false);

  const internalLoading = isLoading || externalLoading || false;

  const totalPages = tools.length > 0 ? Math.ceil(Math.max(tools.length, totalCount || 0) / ITEMS_PER_PAGE) : 1;
  
  const paginatedTools = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return tools.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [tools, currentPage]);

  const goToPage = (page: number) => {
    setIsLoading(true);
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    
    // Smooth scroll to grid
    setTimeout(() => {
      const gridElement = document.getElementById("tools-grid");
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsLoading(false);
    }, 300);
  };

  const displayTotal = totalCount || tools.length;
  const displayString = displayTotal > 100 ? `${Math.floor(displayTotal / 100) * 100}+` : displayTotal.toString();

  return (
    <section id="tools-grid" className="py-8 md:py-12 scroll-mt-20 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-6 md:mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-foreground gradient-text">
              AI & 3D Asset Directory
            </h2>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground">
              Showing {paginatedTools.length} of {displayString} premium tools in our database
            </p>
          </div>
          
          {/* View Mode Toggle - Desktop Only */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex rounded-lg glass border border-white/10 p-1 bg-white/5 backdrop-blur-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-md px-3 py-1.5 text-sm transition-all ${
                  viewMode === "grid" 
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-md px-3 py-1.5 text-sm transition-all ${
                  viewMode === "list" 
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="List view"
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tools Grid - Mobile: Staggered Single Column | Desktop: Grid */}
        <div 
          className={`relative ${internalLoading ? "opacity-50" : ""} transition-opacity ${
            viewMode === "grid" 
              ? "grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-4"
          }`}
        >
          {internalLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Loader2 className="h-8 w-8 text-cyan-400 animate-spin" />
            </div>
          )}

          {error && (
            <div className="col-span-full rounded-lg glass p-8 border border-red-500/30 text-center">
              <p className="text-red-400">Failed to load tools. Please try again.</p>
            </div>
          )}

          {tools.length === 0 && !error && !internalLoading && (
            <div className="col-span-full rounded-lg glass p-8 border border-white/10 text-center">
              <p className="text-muted-foreground">No tools found in this category.</p>
            </div>
          )}
          
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className={`${
                viewMode === "grid" && index % 2 === 1 
                  ? "sm:translate-y-0 md:translate-y-0" 
                  : ""
              }`}
              style={{
                // Staggered animation delay for mobile
                animationDelay: `${index * 50}ms`,
              }}
            >
              <PremiumToolCard tool={tool} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 md:mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1 || isLoading}
                className="rounded-lg glass border border-white/10 p-2 md:p-2.5 text-muted-foreground transition-all hover:text-foreground hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              
              {/* Page Numbers - Responsive */}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      disabled={isLoading}
                      className={`h-8 w-8 md:h-10 md:w-10 rounded-lg text-xs md:text-sm font-medium transition-all ${
                        currentPage === pageNum
                          ? "glass-strong border border-primary/30 glow-border text-primary"
                          : "glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
                      }`}
                      aria-label={`Page ${pageNum}`}
                      aria-current={currentPage === pageNum ? "page" : undefined}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages || isLoading}
                className="rounded-lg glass border border-white/10 p-2 md:p-2.5 text-muted-foreground transition-all hover:text-foreground hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}

        {/* Load More Indicator */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Database updates continuously. New tools added daily.
          </p>
        </div>
      </div>
    </section>
  );
}
