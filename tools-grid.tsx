"use client";

import { useState } from "react";
import { AITool } from "@/lib/tools-data";
import { ToolCard } from "./tool-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ToolsGridProps {
  tools: AITool[];
  totalCount: number;
}

const TOOLS_PER_PAGE = 20;

export function ToolsGrid({ tools, totalCount }: ToolsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(tools.length / TOOLS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOOLS_PER_PAGE;
  const endIndex = startIndex + TOOLS_PER_PAGE;
  const currentTools = tools.slice(startIndex, endIndex);
  
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(endIndex, tools.length)} of {tools.length} tools
          {tools.length !== totalCount && ` (filtered from ${totalCount})`}
        </p>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        
        {tools.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-medium text-foreground">No tools found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-border hover:border-primary hover:text-primary disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline ml-1">Previous</span>
              </Button>
              
              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, index) => (
                  typeof page === "number" ? (
                    <Button
                      key={index}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => goToPage(page)}
                      className={
                        currentPage === page
                          ? "bg-primary text-primary-foreground"
                          : "border-border hover:border-primary hover:text-primary"
                      }
                    >
                      {page}
                    </Button>
                  ) : (
                    <span key={index} className="px-2 text-muted-foreground">
                      {page}
                    </span>
                  )
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-border hover:border-primary hover:text-primary disabled:opacity-50"
              >
                <span className="hidden sm:inline mr-1">Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
