"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { VideoShowcase, videoShowcases } from "@/lib/tools-data";

interface VideoShowcaseSliderProps {
  showcases?: VideoShowcase[];
}

export function VideoShowcaseSlider({ showcases = videoShowcases }: VideoShowcaseSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, showcases.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcases.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcases.length) % showcases.length);
    setIsAutoPlaying(false);
  };

  const current = showcases[currentIndex];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative aspect-video max-h-[80vh] w-full">
        {/* Animated gradient background with cyberpunk colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20 animate-pulse" />
        
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow" />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 video-overlay" />
        
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 border border-cyan-500/30 bg-slate-950/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
              AI World Hub Live
            </span>
          </div>
          
          {/* Title */}
          <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {current.title}
          </h1>
          
          {/* Subtitle */}
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {current.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {current.toolSlug && (
              <a
                href={`/tool/${current.toolSlug}`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 font-medium text-slate-950 transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 duration-300"
              >
                <Play className="h-4 w-4" />
                Explore Model
              </a>
            )}
            <button className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 font-medium text-foreground transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 duration-300 border border-white/10">
              Discover More
            </button>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full glass p-3 text-foreground transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full glass p-3 text-foreground transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {showcases.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "w-8 bg-cyan-500 shadow-lg shadow-cyan-500/50" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
