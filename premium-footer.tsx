"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function PremiumFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-card/30">
      {/* Radial Glow */}
      <div className="absolute inset-0 radial-glow-bottom pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground">
                AI
              </div>
              <span className="text-lg font-bold text-foreground">
                AI World <span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The definitive international directory for AI tools. 
              Discover, compare, and master the best AI solutions for every task.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="rounded-lg glass p-2.5 text-muted-foreground transition-all hover:text-foreground hover:glow-border">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="rounded-lg glass p-2.5 text-muted-foreground transition-all hover:text-foreground hover:glow-border">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-lg glass p-2.5 text-muted-foreground transition-all hover:text-foreground hover:glow-border">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="/contact" className="rounded-lg glass p-2.5 text-muted-foreground transition-all hover:text-foreground hover:glow-border">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Categories
            </h3>
            <ul className="space-y-3">
              {["Writing", "Design", "Video", "Coding", "Audio", "Image"].map((cat) => (
                <li key={cat}>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {cat} AI Tools
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">Blog & News</Link></li>
              <li><Link href="/trending" className="text-sm text-muted-foreground transition-colors hover:text-primary">Trending Tools</Link></li>
              <li><Link href="/search" className="text-sm text-muted-foreground transition-colors hover:text-primary">Search</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">Submit Tool</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">API Docs</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              About
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI World Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
            <button
              onClick={scrollToTop}
              className="rounded-lg glass p-2 text-muted-foreground transition-all hover:text-foreground hover:glow-border"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
