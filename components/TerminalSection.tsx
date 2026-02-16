
import React, { useState, useEffect, useRef } from 'react';

const TerminalSection: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands = [
    "> INITIALIZING NEURAL-SEC CORE V4.0.0...",
    "> SYNCING WITH GLOBAL NODES...",
    "> NODES DETECTED: [TOK, NY, LDN, BUE, BER]",
    "> ORIGIN: ARGENTINA HUB — ACTIVE",
    "> SCANNING WORLDWIDE CORPORATE SUBNETS...",
    "> [!] CRITICAL VULNERABILITY FOUND IN EXTERNAL API",
    "> DEPLOYING QUANTUM PATCH...",
    "> ENCRYPTING DATA PIPELINE...",
    "> GLOBAL SYSTEMS: SECURED.",
    "> STATUS: 100% OPERATIONAL."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setLogs(prev => [...prev, commands[i]]);
        i++;
      } else {
        setTimeout(() => {
          setLogs([]);
          i = 0;
        }, 5000);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#0a0515] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(217,70,239,0.1)]">
        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] mono text-slate-500 uppercase tracking-[0.2em]">neural-sec-global — bash</span>
          <div className="w-10" />
        </div>
        <div 
          ref={scrollRef}
          className="p-6 h-[400px] overflow-y-auto mono text-fuchsia-400 text-sm md:text-base bg-black/40"
        >
          {logs.map((log, idx) => (
            <div key={idx} className="mb-2 animate-in fade-in duration-500">
              <span className="text-indigo-500 mr-2">root@global:</span> {log}
            </div>
          ))}
          <div className="w-2 h-5 bg-fuchsia-500 animate-pulse inline-block align-middle" />
        </div>
      </div>
    </div>
  );
};

export default TerminalSection;
