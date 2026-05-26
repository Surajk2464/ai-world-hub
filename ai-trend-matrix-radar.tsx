"use client";

import { useState, useEffect, useMemo } from "react";
import { Activity, TrendingUp, Zap, Users, Clock, Cpu, Database, Globe, ChevronRight } from "lucide-react";

interface TrendingTool {
  id: string;
  name: string;
  category: string;
  score: number;
  change: number;
  users: string;
  techStack: string[];
}

interface AITrendMatrixRadarProps {
  tools?: TrendingTool[];
}

// Sample data - ready for API injection
const defaultTrendingTools: TrendingTool[] = [
  { id: "1", name: "GPT-5 Preview", category: "LLM", score: 98.7, change: 12.4, users: "2.4M", techStack: ["Transformer", "RLHF", "MoE"] },
  { id: "2", name: "Claude Opus 4", category: "LLM", score: 96.2, change: 8.9, users: "1.8M", techStack: ["Constitutional AI", "RLAIF"] },
  { id: "3", name: "Midjourney v7", category: "Image", score: 94.8, change: 5.3, users: "3.1M", techStack: ["Diffusion", "CLIP", "LoRA"] },
  { id: "4", name: "Sora v2 Ultra", category: "Video", score: 93.1, change: 15.2, users: "890K", techStack: ["DiT", "Spacetime"] },
];

export function AITrendMatrixRadar({ tools = defaultTrendingTools }: AITrendMatrixRadarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liveScore, setLiveScore] = useState(tools[0]?.score || 0);
  const [pulseActive, setPulseActive] = useState(true);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tools.length]);

  useEffect(() => {
    setLiveScore(tools[activeIndex]?.score || 0);
    setPulseActive(true);
    const timeout = setTimeout(() => setPulseActive(false), 500);
    return () => clearTimeout(timeout);
  }, [activeIndex, tools]);

  const activeTool = tools[activeIndex];

  // Generate radar visualization bars
  const radarBars = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      height: 20 + Math.random() * 60,
      delay: i * 0.05,
    }));
  }, [activeIndex]);

  return (
    <section className="relative py-6 md:py-8">
      {/* Ambient glow background */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl glass-ultra">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">AI Trend Matrix</h2>
              <p className="text-xs text-muted-foreground">Real-time disruption radar</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
            <span>Live Sync</span>
          </div>
        </div>

        {/* Main Radar Panel */}
        <div className="glass-ultra rounded-2xl p-5 md:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-12">
            
            {/* Left: Live Disruption Node */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="relative flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-success/5 to-primary/5 border border-white/5 p-6 md:p-8">
                {/* Pulsing Node */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 rounded-full bg-success/30 ${pulseActive ? "animate-ping" : ""}`} />
                  <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-to-br from-success/20 to-success/5 border border-success/30 animate-pulse-glow">
                    <span className="text-2xl md:text-3xl font-bold text-success text-glow-green">{liveScore.toFixed(1)}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-success/10 border border-success/20 px-3 py-1 text-xs font-medium text-success">
                    <Zap className="h-3 w-3" />
                    Most Disruptive AI of the Hour
                  </span>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold text-foreground">{activeTool?.name}</h3>
                  <p className="text-sm text-muted-foreground">{activeTool?.category}</p>
                </div>

                {/* Change indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    <TrendingUp className="h-3 w-3" />
                    +{activeTool?.change}%
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    {activeTool?.users} users
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Radar Visualization */}
            <div className="lg:col-span-4 xl:col-span-5">
              <div className="relative h-48 md:h-56 flex items-end justify-center gap-1 rounded-xl bg-gradient-to-t from-muted/30 to-transparent p-4">
                {/* Radar bars */}
                {radarBars.map((bar, i) => (
                  <div
                    key={i}
                    className="w-2 md:w-2.5 rounded-t bg-gradient-to-t from-primary/60 to-primary/20 transition-all duration-500"
                    style={{
                      height: `${bar.height}%`,
                      animationDelay: `${bar.delay}s`,
                      opacity: i === Math.floor(radarBars.length / 2) ? 1 : 0.4 + Math.random() * 0.4,
                    }}
                  />
                ))}
                
                {/* Sweep line */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-pulse" />
                </div>

                {/* Labels */}
                <div className="absolute bottom-2 left-4 text-xs text-muted-foreground">
                  <Clock className="inline h-3 w-3 mr-1" />
                  24h Activity
                </div>
                <div className="absolute top-2 right-4 flex items-center gap-1 text-xs text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Peak: {Math.max(...radarBars.map(b => b.height)).toFixed(0)}%
                </div>
              </div>

              {/* Rating Graph Mini */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {tools.map((tool, i) => (
                  <button
                    key={tool.id}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-lg p-2 text-center transition-all ${
                      i === activeIndex 
                        ? "glass-strong border-primary/30 glow-border" 
                        : "glass border-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="text-sm font-bold text-foreground">{tool.score.toFixed(0)}</div>
                    <div className="text-[10px] text-muted-foreground truncate">{tool.name.split(" ")[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Tech Stack Breakdown */}
            <div className="lg:col-span-3">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Cpu className="h-4 w-4 text-primary" />
                Tech Stack
              </h4>
              
              <div className="space-y-2">
                {activeTool?.techStack.map((tech, i) => (
                  <div
                    key={tech}
                    className="flex items-center justify-between rounded-lg glass border border-white/5 px-3 py-2 transition-all hover:border-primary/20"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <Database className="h-3.5 w-3.5 text-accent" />
                      <span className="text-sm text-foreground">{tech}</span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                ))}
              </div>

              {/* Global reach indicator */}
              <div className="mt-4 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-white/5 p-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Globe className="h-3.5 w-3.5 text-accent" />
                  Global Adoption
                </div>
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                    style={{ width: `${(activeTool?.score || 0)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
