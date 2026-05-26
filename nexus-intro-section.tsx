"use client";

import { Sparkles, Zap } from "lucide-react";

export function NexusIntroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 radial-glow opacity-40" />
      
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-cyan-500 to-transparent" />
      <div className="absolute -bottom-20 -left-40 h-80 w-80 rounded-full blur-3xl opacity-15 bg-gradient-to-tr from-purple-500 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        {/* Section Header with Icon */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Next-Generation AI Platform
          </span>
          <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
        </div>

        {/* Main Title with Gradient */}
        <h2 className="mb-6 text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="gradient-text-animated">THE AI WORLD HUB</span>
        </h2>

        {/* Divider */}
        <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        {/* Main Description - 400 words */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            Welcome to AI World Hub—your comprehensive gateway to 10,000+ cutting-edge AI models and thousands of premium 3D assets. This revolutionary platform serves as the central nexus for creators, developers, and enterprises seeking seamless access to the world&apos;s most advanced artificial intelligence tools and spatial computing resources in one unified ecosystem.
          </p>

          <p>
            The AI World Hub bridges the gap between traditional AI development and immersive spatial experiences. Whether you&apos;re building generative AI applications, training sophisticated machine learning models, or crafting photorealistic 3D environments, our platform provides seamless integration, unparalleled performance, and access to industry-leading tools and resources specifically curated for global innovation.
          </p>

          <p>
            At its core, AI World Hub democratizes access to enterprise-grade AI infrastructure. Our curated library of 10,000+ AI models spans every domain—from natural language processing and computer vision to advanced reinforcement learning and neural architecture search. Each model is vetted, documented, and optimized for production deployment, ensuring reliability and scalability for organizations of all sizes across every continent.
          </p>

          <p>
            Beyond artificial intelligence, the Hub specializes in comprehensive 3D asset management. Access premium 3D models, textures, environments, and animations optimized for real-time rendering. Integrate photogrammetry data, volumetric captures, and AI-enhanced procedural generation to bring your creative vision to life with unprecedented fidelity. Our platform leverages the latest spatial computing advancements.
          </p>

          <p>
            The platform features intelligent discovery, advanced filtering by performance metrics and compatibility, and real-time collaboration tools enabling teams to work synchronously. Our integrated marketplace connects creators with enterprises seeking specialized solutions, fostering innovation and driving the next frontier of AI-powered experiences. Access comprehensive documentation, tutorials, and expert support.
          </p>

          <p>
            Join thousands of innovators already transforming the future at AI World Hub. Where creativity meets computation. Where global talent connects with cutting-edge resources. Where the next generation of AI-powered experiences is built today.
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <button className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-8 py-3 font-semibold text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
            <Zap className="h-4 w-4" />
            <span>Explore 10,000+ Models</span>
            <div className="absolute inset-0 rounded-full opacity-0 shadow-lg shadow-cyan-500/50 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="inline-flex items-center gap-2 rounded-full glass-strong px-8 py-3 font-semibold text-foreground transition-all hover:glow-border">
            <span>Browse 3D Assets</span>
          </button>
        </div>

        {/* Stats Footer */}
        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 border-t border-white/5 pt-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400">10,000+</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">AI Models</div>
          </div>
          <div className="text-center border-l border-r border-white/5">
            <div className="text-2xl md:text-3xl font-bold text-purple-400">5,000+</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">3D Assets</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400">50,000+</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  );
}
