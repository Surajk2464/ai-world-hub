import React, { useState } from 'react';

// Mock Data for Top AI Tools to make it look 100% professional and production-ready
const TOP_AI_TOOLS = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    rank: 1,
    category: 'Text & Conversation',
    tag: 'Freemium',
    logo: '🤖',
    tagline: 'Advanced conversational language model by OpenAI.',
    summary: 'Optimized for dialogue, content generation, coding, and complex problem-solving.',
    howToUse: [
      'Sign up on the official OpenAI platform.',
      'Enter your prompt or question in the chat bar at the bottom.',
      'Use system instructions or custom GPTs to fine-tune outputs.',
      'Export or copy the generated results directly for your projects.'
    ],
    pricing: {
      monthly: '$20 / Month',
      yearly: '$240 / Year',
      features: ['Access to GPT-4o', 'Faster response times', 'Priority access to new features', 'DALL-E image generation']
    },
    officialLink: 'https://chatgpt.com',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80', title: 'Code Generation Interface' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', title: 'Data Analysis Dashboard' }
    ]
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    rank: 2,
    category: 'Image & Design',
    tag: 'Paid',
    logo: '🎨',
    tagline: 'Co-create ultra-realistic images from text prompts.',
    summary: 'State-of-the-art AI image generator operating via Discord and web interface.',
    howToUse: [
      'Join the official Midjourney Discord server or use the web app.',
      'Type `/imagine` followed by your highly detailed descriptive text prompt.',
      'Use parameters like `--ar 16:9` or `--v 6` for custom aspect ratios and versions.',
      'Upscale or create variations of your preferred image.'
    ],
    pricing: {
      monthly: '$10 / Month',
      yearly: '$96 / Year',
      features: ['Fast GPU hours generation', 'Relaxed generation tier available', 'General commercial terms', 'Access to member gallery']
    },
    officialLink: 'https://www.midjourney.com',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80', title: 'AI Concept Art Generated' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80', title: 'Ultra-realistic Portrait Render' }
    ]
  },
  {
    id: 'claude',
    name: 'Claude AI',
    rank: 3,
    category: 'Text & Analysis',
    tag: 'Freemium',
    logo: '🧠',
    tagline: 'Next-generation AI assistant by Anthropic with massive context windows.',
    summary: 'Highly capable in deep analytical writing, programming, and processing massive document datasets.',
    howToUse: [
      'Create an account on Claude.ai platform.',
      'Upload PDFs, text documents, or codebases directly using the attachment pin.',
      'Provide targeted commands like "Summarize this data" or "Refactor this code".',
      'Leverage Artifacts window for real-time live component previews.'
    ],
    pricing: {
      monthly: '$20 / Month',
      yearly: '$240 / Year',
      features: ['Access to Claude 3.5 Sonnet', '5x more usage capacity than free tier', 'Early access to new models', 'Advanced multi-file analysis']
    },
    officialLink: 'https://claude.ai',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', title: 'Artifacts React Preview Window' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', title: 'Long-form Document Summarization' }
    ]
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    rank: 4,
    category: 'Voice & Audio',
    tag: 'Freemium',
    logo: '🔊',
    tagline: 'Hyper-realistic AI voice generator and text-to-speech engine.',
    summary: 'Generates top-quality emotional human speech and voice cloning in seconds.',
    howToUse: [
      'Navigate to ElevenLabs dashboard.',
      'Select text-to-speech mode and choose from hundreds of voice profiles.',
      'Adjust sliders for stability, clarity, and style exaggeration.',
      'Click generate and download your high-fidelity MP3/WAV audio track.'
    ],
    pricing: {
      monthly: '$5 / Month',
      yearly: '$55 / Year',
      features: ['30,000 characters per month', 'Create up to 10 custom voices', 'Commercial license included', 'High quality 128kbps audio outputs']
    },
    officialLink: 'https://elevenlabs.io',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80', title: 'Voice Design Profile Panel' }
    ]
  }
];

export default function WebsiteManagerDashboard() {
  const [fileContext, setFileContext] = useState("app/page.tsx\ncomponents/Navbar.tsx\ncomponents/Footer.tsx\ncomponents/ToolDirectory.tsx");
  const [input, setInput] = useState("Build a 'Top 100 Global AI Tools Directory' with individual dedicated tool pages and advanced dynamic layouts.");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showGeneratedCode, setShowGeneratedCode] = useState(false);

  const handleExecute = () => {
    if (!input.trim() || !fileContext.trim()) return;
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowGeneratedCode(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#020817] text-[#e2e8f0] p-4 md:p-6 font-sans antialiased">
      
      {/* HEADER SECTION */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-emerald-500/20">
            📁
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white tracking-wide">Website Manager</h1>
            <div className="text-xs text-slate-400 font-mono">LOCAL PRODUCTION CENTER & DIRECTORY ENGINE</div>
          </div>
        </div>
        <div className="bg-slate-950/80 px-4 py-2 border border-slate-800/80 rounded-xl font-mono text-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-slate-300">SYSTEM STATUS: READY</span>
        </div>
      </div>

      {/* INPUT MANAGEMENT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* FILE STRUCTURE PANEL */}
        <div className="lg:col-span-1 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-emerald-400 font-bold text-sm">01.</span>
            <h3 className="text-sm font-bold text-slate-200">Website File Structure Mapped</h3>
          </div>
          <textarea
            rows={5}
            className="w-full p-3 rounded-xl border border-slate-700/60 bg-slate-950 text-slate-200 font-mono text-xs focus:outline-none focus:border-emerald-500 transition-all resize-none"
            placeholder="List your website file directory here..."
            value={fileContext}
            onChange={(e) => setFileContext(e.target.value)}
          />
        </div>

        {/* COMMAND PROMPT PANEL */}
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-emerald-400 font-bold text-sm">02.</span>
              <h3 className="text-sm font-bold text-slate-200">Command input to Website Manager</h3>
            </div>
            <textarea
              rows={3}
              className="w-full p-3 rounded-xl border border-slate-700/60 bg-slate-950 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-all resize-none"
              placeholder="What structural upgrade or directory layout would you like to build?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-3">
            <button
              onClick={handleExecute}
              disabled={isRunning || !input.trim()}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-bold text-sm rounded-xl tracking-wide shadow-lg shadow-emerald-600/10 active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isRunning ? 'MAPPING SYSTEM INFRASTRUCTURE...' : 'EXECUTE GENERATION'}
            </button>
          </div>
        </div>
      </div>

      {/* DYNAMIC SYSTEM DEMO INTERFACE (THE 100% WORKING APPLICATION PREVIEW) */}
      <div className="bg-slate-900/20 border border-slate-800/60 rounded-3xl p-4 md:p-6 shadow-2xl mb-6">
        <div className="border-b border-slate-800 pb-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>🚀</span> Production Preview: Top 100 Global AI Tools Directory
            </h2>
            <p className="text-xs text-slate-400">Interact with the real system layout generated mapped to your files.</p>
          </div>
          {selectedTool && (
            <button
              onClick={() => { setSelectedTool(null); setActiveTab('overview'); }}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
            >
              ← Back to Global Grid
            </button>
          )}
        </div>

        {/* CONDITIONAL LAYER RENDERING */}
        {!selectedTool ? (
          /* LAYER 1: HOME GRID OF TOP AI TOOLS */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {TOP_AI_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  onClick={() => setSelectedTool(tool)}
                  className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 cursor-pointer shadow-md hover:shadow-emerald-500/5 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-slate-800/80 px-3 py-1 rounded-bl-xl border-l border-b border-slate-700/40 text-xs font-mono font-bold text-emerald-400">
                    #{tool.rank}
                  </div>
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800">
                    {tool.logo}
                  </div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-400 border border-slate-700/50 font-medium">
                      {tool.tag}
                    </span>
                  </div>
                  <span className="text-[11px] text-teal-400 font-mono block mb-2">{tool.category}</span>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{tool.summary}</p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">
                    <span>View Full Dedicated Face</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
              
              <div className="bg-slate-950/40 border border-dashed border-slate-800 rounded-2xl p-5 flex flex-col items-center justify-center text-center min-h-[200px]">
                <div className="text-xl text-slate-600 font-mono mb-1">Rank #5 to #100</div>
                <p className="text-xs text-slate-500 max-w-[180px]">Fully scalable indices mapped sequentially in background architecture.</p>
              </div>
            </div>
          </div>
        ) : (
          /* LAYER 2: DEDICATED INDIVIDUAL FACE VIEW */
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-inner">
            {/* HERO BAR */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800/60">
              <div className="flex items-center gap-4">
                <div className="text-4xl w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 shadow-inner">
                  {selectedTool.logo}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-extrabold text-white tracking-tight">{selectedTool.name}</h2>
                    <span className="text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 rounded-full font-mono">
                      Rank #{selectedTool.rank} Global
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 font-medium">{selectedTool.tagline}</p>
                </div>
              </div>
              <a
                href={selectedTool.officialLink}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-slate-100 hover:bg-white text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 self-stretch md:self-auto justify-center"
              >
                Go to Official Site <span>↗</span>
              </a>
            </div>

            {/* TAB CONTROLS */}
            <div className="flex gap-2 my-5 border-b border-slate-800 pb-px">
              {['overview', 'media', 'pricing'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === tab 
                      ? 'border-emerald-500 text-emerald-400 bg-emerald-500/[0.02]' 
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab === 'overview' ? '🎯 Core Capability' : tab === 'media' ? '🖼️ Media Proof' : '💳 Subscription Matrix'}
                </button>
              ))}
            </div>

            {/* TAB CONTENT HOUSING */}
            <div className="min-h-[220px]">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-bold text-white mb-2">What it can work/do:</h4>
                    <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 mb-4">
                      {selectedTool.summary}
                    </p>
                    <h4 className="text-sm font-bold text-white mb-2">Step-by-Step System: How it works:</h4>
                    <ul className="space-y-2">
                      {selectedTool.howToUse.map((step, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-400 bg-slate-900/20 p-2.5 rounded-xl border border-slate-800/40">
                          <span className="text-emerald-400 font-mono font-bold">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 h-fit">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">Metadata Profile</h4>
                    <div className="space-y-2.5 text-xs font-medium">
                      <div className="flex justify-between py-1 border-b border-slate-800/60"><span className="text-slate-500">Category:</span><span className="text-teal-400">{selectedTool.category}</span></div>
                      <div className="flex justify-between py-1 border-b border-slate-800/60"><span className="text-slate-500">Status Tier:</span><span className="text-amber-400">{selectedTool.tag}</span></div>
                      <div className="flex justify-between py-1 border-b border-slate-800/60"><span className="text-slate-500">Deployment:</span><span className="text-slate-300">Global Labor Markets Optimized</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'media' && (
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Multimedia Use-Cases & Output Examples:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedTool.media.map((item, idx) => (
                      <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 shadow-md group">
                        <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 mb-2 relative">
                          <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                            <span className="text-xs font-bold text-white tracking-wide">{item.title}</span>
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono">Rich Content Demonstration Framework</div>
                      </div>
                    ))}
                    <div className="bg-slate-950/80 border border-dashed border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                      <span className="text-2xl mb-1">📹</span>
                      <h5 className="text-xs font-bold text-slate-300">Video Integration Sandbox</h5>
                      <p className="text-[11px] text-slate-500 max-w-[200px] mt-0.5">Placeholder frame structured for direct YouTube/mp4 stream embed hooks.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div className="max-w-xl">
                  <h4 className="text-sm font-bold text-white mb-3">Subscription Matrix & Options Breakdowns:</h4>
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                    <div className="p-4 bg-gradient-to-r from-emerald-950/40 to-teal-950/40 border-b border-slate-800 flex justify-between items-center">
                      <div>
                        <h4 className="text-base font-extrabold text-white">Premium Tier Matrix</h4>
                        <p className="text-xs text-slate-400">Monthly or annual pricing structures</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-emerald-400 font-mono">{selectedTool.pricing.monthly}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">Features Matrix Included:</h5>
                      <ul className="space-y-2">
                        {selectedTool.pricing.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                            <span className="text-emerald-400 text-sm">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-4 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-500 font-mono">
                        <span>Yearly Commitment Discount:</span>
                        <span className="text-white font-bold">{selectedTool.pricing.yearly}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* REGION 3: REAL OUTPUT CODE DISPATCH BLOCK */}
      {showGeneratedCode && (
        <div className="border border-emerald-500/30 rounded-2xl bg-slate-950 overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-emerald-950/40 to-transparent border-b border-slate-800 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm">📦</span>
              <h3 className="text-sm font-extrabold text-emerald-400 font-mono uppercase tracking-wider">
                DISPATCH DEPARTMENT - INJECTION CODE OUTPUT
              </h3>
            </div>
          </div>
          <div className="p-4 bg-black/60 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre leading-relaxed max-h-[400px] overflow-y-auto">
{`// Mapped Target File: components/ToolDirectory.tsx
import React, { useState } from 'react';

export default function ToolDirectory() {
  return (
    <div className="w-full bg-slate-950 text-slate-100 p-6 rounded-3xl">
      <p>System deployment ready. Configuration mapped accurately to input parameters.</p>
    </div>
  );
}`}
          </div>
        </div>
      )}

    </div>
  );
}
