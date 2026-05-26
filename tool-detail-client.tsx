"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  Lightbulb,
  DollarSign,
  BookOpen,
  Zap,
  TrendingUp,
  Users,
  Shield,
  ChevronRight,
  Sparkles,
  Target,
  Award,
  BarChart3,
  Layers
} from "lucide-react";
import { getRelatedTools, AITool } from "@/lib/tools-data";

interface ToolDetailClientProps {
  tool: AITool;
}

// Content block interface for dynamic data injection
interface ContentBlock {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

export function ToolDetailClient({ tool }: ToolDetailClientProps) {
  const relatedTools = getRelatedTools(tool, 3);

  // Dynamic content blocks ready for API injection
  const operationalGuide: ContentBlock = {
    title: "Operational Engine & Complete Features Guide",
    content: tool.description,
  };

  const extendedGuide: ContentBlock = {
    title: "Deep-Dive Technical Overview",
    content: tool.fullGuide || tool.howItWorks,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Radial Glow */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        
        <div className="relative mx-auto max-w-5xl px-4 py-8 md:py-12">
          {/* Back Link */}
          <Link
            href="/"
            className="mb-6 md:mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Directory
          </Link>

          {/* Tool Header - Mobile Optimized */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6">
              {/* Logo */}
              <div className="flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 text-5xl md:text-6xl shadow-2xl glow-subtle border border-white/10">
                {tool.logo}
              </div>
              
              {/* Title & Meta */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    {tool.name}
                  </h1>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs md:text-sm font-medium text-primary">
                    {tool.category}
                  </span>
                </div>
                
                <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                  {tool.shortDescription}
                </p>
                
                {/* Stats Row */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-1.5 rounded-full glass px-3 py-1.5 border border-white/10">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-foreground">{tool.rating}</span>
                    <span className="text-muted-foreground">/5</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>50k+ active users</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Verified Tool</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - CRO Optimized Layout */}
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        
        {/* ============================================ */}
        {/* UPPER BLOCK: Operational Guide & Features   */}
        {/* 150+ word container with clean typography   */}
        {/* ============================================ */}
        
        {/* Section 1: Complete Overview (Primary Content Block) */}
        <section className="mb-8 md:mb-12">
          <div className="mb-4 md:mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">{operationalGuide.title}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Comprehensive overview and operational insights</p>
            </div>
          </div>
          
          {/* Content Container - Optimized for 150+ words */}
          <div className="rounded-2xl glass border border-white/10 p-6 md:p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                {operationalGuide.content}
              </p>
              
              {/* Extended Guide Content */}
              {extendedGuide.content && extendedGuide.content !== tool.howItWorks && (
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {extendedGuide.content}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Section 2: How It Works - Technical Deep Dive */}
        <section className="mb-8 md:mb-12">
          <div className="mb-4 md:mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">How It Works</h2>
          </div>
          <div className="rounded-2xl glass border border-white/10 p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed">
              {tool.howItWorks}
            </p>
          </div>
        </section>

        {/* Section 3: Features Grid - Responsive */}
        <section className="mb-8 md:mb-12">
          <div className="mb-4 md:mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success/10 border border-success/20">
              <Layers className="h-5 w-5 text-success" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Key Features</h2>
          </div>
          
          {/* Mobile: Stacked | Desktop: Grid */}
          <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {tool.features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl glass border border-white/10 p-4 transition-all hover:border-primary/30 hover:glow-subtle"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </div>
                <span className="font-medium text-foreground text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Use Cases */}
        <section className="mb-8 md:mb-12">
          <div className="mb-4 md:mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-chart-4/10 border border-chart-4/20">
              <Target className="h-5 w-5 text-chart-4" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Ideal Use Cases</h2>
          </div>
          
          {/* Mobile: Single Column Stacked */}
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            {tool.useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-center gap-3 rounded-xl glass border border-white/10 p-4 transition-all hover:border-chart-4/30"
              >
                <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground text-sm md:text-base">{useCase}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================ */}
        {/* STRUCTURAL MATRIX: Pros & Cons Grid         */}
        {/* ============================================ */}
        
        <section className="mb-8 md:mb-12">
          <div className="mb-4 md:mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted border border-white/10">
              <BarChart3 className="h-5 w-5 text-foreground" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Pros, Cons & Structural Matrix</h2>
          </div>
          
          {/* Mobile: Stacked | Desktop: Side by Side */}
          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
            {/* Pros */}
            <div className="rounded-2xl glass border border-success/20 p-5 md:p-6">
              <h3 className="mb-4 flex items-center gap-2 text-base md:text-lg font-semibold text-success">
                <CheckCircle2 className="h-5 w-5" />
                Advantages
              </h3>
              <ul className="space-y-3">
                {tool.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="text-muted-foreground text-sm md:text-base">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Cons */}
            <div className="rounded-2xl glass border border-destructive/20 p-5 md:p-6">
              <h3 className="mb-4 flex items-center gap-2 text-base md:text-lg font-semibold text-destructive">
                <XCircle className="h-5 w-5" />
                Limitations
              </h3>
              <ul className="space-y-3">
                {tool.cons.map((con) => (
                  <li key={con} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <span className="text-muted-foreground text-sm md:text-base">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* MIDDLE BLOCK: Monetization Playbook         */}
        {/* 150+ word container with highlight BG       */}
        {/* ============================================ */}
        
        <section className="mb-8 md:mb-12">
          <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent p-6 md:p-8 relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 blur-3xl rounded-full -ml-24 -mb-24" />
            
            <div className="relative">
              {/* Header */}
              <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20 glow-cyan border border-primary/30">
                  <DollarSign className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    The Monetization Playbook
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    How to Earn Money with {tool.name}
                  </p>
                </div>
              </div>
              
              {/* Intro Text - 150+ Word Container */}
              <div className="mb-6 md:mb-8 rounded-xl bg-background/50 border border-white/5 p-5 md:p-6">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Unlock multiple revenue streams by mastering {tool.name}. This tool offers significant 
                  monetization potential for creators, freelancers, and entrepreneurs. Whether you are 
                  building a service-based business or creating digital products, the strategies below 
                  will help you generate consistent income. Each approach has been validated by 
                  successful practitioners who have built sustainable businesses around AI tools.
                </p>
              </div>
              
              {/* Strategies Grid - Mobile Stacked */}
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {tool.monetization.map((strategy, index) => (
                  <div
                    key={strategy}
                    className="group flex items-start gap-4 rounded-xl glass border border-white/10 p-4 md:p-5 transition-all hover:border-primary/30 hover:glow-subtle"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary border border-primary/20">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                        {strategy}
                      </h4>
                      <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                        Build a service offering around this capability
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pro Tip Box */}
              <div className="mt-6 md:mt-8 rounded-xl bg-background/50 border border-primary/20 p-5 md:p-6">
                <div className="flex items-center gap-3 text-primary mb-3">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-semibold text-sm md:text-base">Pro Tip: Income Potential</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Combine multiple strategies for maximum income potential. Start with one monetization 
                  method, master it, then expand to complementary services. Most successful users report 
                  earning $2,000-$10,000/month after 3-6 months of consistent effort. The key is to 
                  position yourself as a specialist rather than a generalist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="mb-8 md:mb-12">
            <div className="mb-4 md:mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted border border-white/10">
                <Lightbulb className="h-5 w-5 text-foreground" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Similar Tools to Explore</h2>
            </div>
            
            {/* Mobile: Stacked | Desktop: Grid */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
              {relatedTools.map((relatedTool) => (
                <Link
                  key={relatedTool.id}
                  href={`/tool/${relatedTool.slug}`}
                  className="group rounded-xl glass border border-white/10 p-4 md:p-5 transition-all hover:border-primary/30 hover:glow-subtle"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">{relatedTool.logo}</span>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                      {relatedTool.name}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {relatedTool.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ============================================ */}
        {/* ABSOLUTE BOTTOM: Pricing & Destination      */}
        {/* ============================================ */}
        
        <section className="rounded-2xl glass-strong border-2 border-primary/30 glow-border p-6 md:p-8">
          {/* Header */}
          <div className="mb-6 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Ready to Get Started?</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Access {tool.name} Now</h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Start building and monetizing with {tool.name} today
            </p>
          </div>
          
          {/* Official Pricing Tiers */}
          <div className="mb-6 md:mb-8 rounded-xl bg-background/50 border border-white/10 p-5 md:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                <DollarSign className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-lg font-semibold text-foreground">Official Pricing Tiers</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium border ${
                    tool.pricing === "Free" 
                      ? "bg-success/20 text-success border-success/30" 
                      : tool.pricing === "Freemium"
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-chart-4/20 text-chart-4 border-chart-4/30"
                  }`}>
                    {tool.pricing}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm md:text-base">
                  {tool.priceDetails || `${tool.pricing} access available`}
                </p>
              </div>
            </div>
          </div>
          
          {/* Destination Link Button */}
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-base md:text-lg font-semibold text-primary-foreground transition-all hover:glow-cyan border border-primary"
          >
            Visit {tool.name} Official Site
            <ExternalLink className="h-5 w-5" />
          </a>
          
          <p className="mt-4 text-center text-xs text-muted-foreground">
            External link opens in a new tab. AI World Hub is not affiliated with {tool.name}.
          </p>
        </section>
      </div>

      {/* Footer Link */}
      <div className="border-t border-white/5 py-6 md:py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Explore More AI Tools in Our Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
