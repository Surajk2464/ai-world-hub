"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { SearchCommand } from "./search-command";

export function PremiumNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 text-lg font-bold text-slate-950 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
            AI
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors">
              AI World <span className="gradient-text">Hub</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Global Directory
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-cyan-400">
            Directory
          </Link>
          <Link href="/search" className="text-sm text-muted-foreground transition-colors hover:text-cyan-400">
            Search
          </Link>
          <Link href="/trending" className="text-sm text-muted-foreground transition-colors hover:text-cyan-400">
            Trending
          </Link>
          <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-cyan-400">
            Blog
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-purple-400">
            Contact
          </Link>
        </nav>

        {/* Stats Badge & Search */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 rounded-full glass px-4 py-2 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-cyan-400">10K+</span> Models Live
            </span>
          </div>
          <SearchCommand />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg glass p-2 text-muted-foreground md:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/5 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">Directory</Link>
            <Link href="/search" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">Search</Link>
            <Link href="/trending" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">Trending</Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">Blog</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
