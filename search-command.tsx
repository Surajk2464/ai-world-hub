'use client'

import { useState, useCallback, useEffect } from 'react'
import { Search, X, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useSearch } from '@/lib/hooks/useData'
import { AiTool } from '@/lib/database.types'

export function SearchCommand() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const { results, isLoading } = useSearch(query, 15)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(!open)
      } else if (e.key === 'Escape') {
        setOpen(false)
      } else if (open && e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (open && e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((i) => Math.max(i - 1, 0))
      } else if (open && e.key === 'Enter' && results.length > 0) {
        e.preventDefault()
        window.location.href = `/tool/${results[selectedIndex].slug}`
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, results, selectedIndex])

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full glass-strong border border-white/10 px-3 py-2 text-sm text-muted-foreground transition-all hover:border-cyan-500/30 hover:text-foreground md:flex"
      >
        <Search className="h-4 w-4" />
        <span className="text-xs text-muted-foreground">
          Search <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-xs font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </span>
      </button>

      {/* Search Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed left-1/2 top-1/4 w-full max-w-2xl -translate-x-1/2 rounded-lg glass-strong border border-white/10 shadow-2xl md:top-1/3">
            {/* Search Input */}
            <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
              <Search className="h-5 w-5 text-cyan-400" />
              <input
                autoFocus
                placeholder="Search AI tools by name, category, tags..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelectedIndex(0)
                }}
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin text-cyan-400" />
                </div>
              )}

              {!isLoading && results.length === 0 && query && (
                <div className="px-4 py-8 text-center text-muted-foreground">
                  No tools found matching your query.
                </div>
              )}

              {!isLoading && results.length === 0 && !query && (
                <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                  Start typing to search for AI tools...
                </div>
              )}

              {results.map((result, index) => (
                <Link
                  key={result.id}
                  href={`/tool/${result.slug}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-start gap-3 border-b border-white/5 px-4 py-3 transition-all hover:bg-cyan-500/5 ${
                    index === selectedIndex ? 'bg-cyan-500/10 border-l-2 border-l-cyan-500' : ''
                  }`}
                >
                  {result.logo && (
                    <img
                      src={result.logo}
                      alt={result.name}
                      className="h-10 w-10 rounded-lg object-contain"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground truncate">
                        {result.name}
                      </p>
                      {result.rating > 4.5 && (
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded">
                          ⭐ {result.rating.toFixed(1)}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {result.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer */}
            {results.length > 0 && (
              <div className="border-t border-white/5 px-4 py-2 text-xs text-muted-foreground flex items-center justify-between">
                <span>
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </span>
                <span className="text-xs">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1 font-mono text-xs">↵</kbd>
                  to select
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
