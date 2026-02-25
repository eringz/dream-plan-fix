"use client";
import { motion } from "framer-motion";
import { Zap, Compass, Wrench, Activity, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function HubPage() {
  return (
    <div className="space-y-8">
      {/* --- HUD HEADER --- */}
      <header className="flex justify-between items-end border-b border-white/5 pb-8">                          
        <div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
            Dream <span className="text-accent">Plan</span> Fix
          </h1>
          <div className="flex items-center gap-3 mt-3">
            <span className="h-[1px] w-8 bg-accent/50"></span>
            <p className="text-[10px] tracking-[0.4em] opacity-40 uppercase">System Command v2.0.4</p>
          </div>
        </div>
        <div className="hidden lg:flex gap-10 text-[10px] tracking-widest uppercase opacity-50">
          <div className="text-right">
            <p className="text-accent mb-1 underline underline-offset-4">Sync Status</p>
            <p>Node-01: Active</p>
          </div>
          <div className="text-right">
            <p className="text-accent mb-1 underline underline-offset-4">Location</p>
            <p>Manila / PH</p>
          </div>
        </div>
      </header>

      {/* --- BENTO GRID MECHANICS --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        
        {/* LARGE TILE: PLAN STATION (THE HUB) */}
        <motion.div 
          whileHover={{ scale: 0.99 }}
          className="md:col-span-2 md:row-span-2 glass-panel rounded-[2rem] p-10 relative overflow-hidden border-cyan-500/20 group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-all group-hover:rotate-12">
            <Compass size={120} className="text-cyan-400" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-cyan-500/10 text-cyan-400 text-[10px] px-3 py-1 rounded-full border border-cyan-500/30 uppercase tracking-widest">Plan Station</span>
              <h2 className="text-4xl font-bold tracking-tight">Tech Radar</h2>
              <p className="text-sm opacity-60 max-w-[280px]">Automated hype-filtering engine. No noise, just raw technical evolution and updates.</p>
            </div>
            <button className="flex items-center gap-2 w-fit px-8 py-3 bg-cyan-500/10 border border-cyan-500/40 rounded-xl text-[10px] uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-black transition-all">
              Initialize Radar <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* DREAM STATION (ANIME/ESCAPES) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 glass-panel rounded-[2rem] p-8 border-purple-500/20 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div>
              <Zap className="text-purple-400 mb-4" size={28} />
              <h2 className="text-2xl font-bold italic tracking-tight">Dream Station</h2>
              <p className="text-xs opacity-50 mt-1">Escapism & Creative Fuel</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl text-right">
              <span className="text-[10px] block opacity-40 uppercase mb-1">Queue</span>
              <span className="text-xs text-purple-300 font-medium">Solo Leveling S2</span>
            </div>
          </div>
        </motion.div>

        {/* FIX STATION (TRADE/FINANCE) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 glass-panel rounded-[2rem] p-8 border-emerald-500/20 relative overflow-hidden"
        >
          <Wrench className="text-emerald-400 mb-4" size={24} />
          <h3 className="font-bold text-lg leading-none">Fix Station</h3>
          <p className="text-[10px] opacity-40 uppercase mt-2">Asset Mgmt</p>
          <div className="mt-8">
             <div className="flex justify-between text-[10px] mb-2 opacity-60">
                <span>PORTFOLIO</span>
                <span className="text-emerald-400">+12.5%</span>
             </div>
             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[70%] shadow-[0_0_15px_#10b981]"></div>
             </div>
          </div>
        </motion.div>

        {/* SYSTEM ANALYTICS */}
        <div className="md:col-span-1 glass-panel rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border-white/5">
            <Activity size={32} className="text-accent animate-pulse mb-4" />
            <span className="text-[10px] tracking-[0.3em] opacity-30 uppercase">System Latency</span>
            <span className="text-2xl font-mono font-light mt-1">0.042ms</span>
        </div>

        {/* HYPE SHIELD STATUS */}
        <div className="md:col-span-2 glass-panel rounded-[2rem] p-8 flex items-center gap-8 border-blue-500/10">
            <div className="p-5 bg-blue-500/5 rounded-2xl border border-blue-500/20">
              <ShieldCheck size={32} className="text-blue-400 shadow-blue-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-1">Hype-Shield v1.0</h4>
              <p className="text-[10px] opacity-40 leading-relaxed uppercase">Actively scrubbing clickbait from 12 monitored channels. Filtering low-value marketing jargon.</p>
            </div>
        </div>

      </div>
    </div>
  );
}