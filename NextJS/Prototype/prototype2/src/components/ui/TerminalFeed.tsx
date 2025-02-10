//import { BrainCircuit } from 'lucide-react';

export default function TerminalFeed() {
  return (
    <div className="fixed bottom-4 left-4 w-64 bg-[rgba(15,23,42,0.95)] rounded-lg border border-slate-700/50 overflow-hidden hidden md:block">
      <div className="px-4 py-2 bg-[rgba(15,23,42,0.95)] border-b border-slate-600/50 flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm text-slate-300">Most Used Agents</span>
      </div>
      <div className="p-4 font-mono text-xs text-slate-400 h-32 overflow-y-auto">
        <p className="mb-1 animate-fade-in" style={{ animationDelay: '0s' }}>
          [AGENT] Analyzing Market Trends<span className="animate-ellipsis">...</span>
        </p>
        <p className="mb-1 animate-fade-in" style={{ animationDelay: '1s' }}>
          [AGENT] Optimized Medical Resource Allocation<span className="animate-blink">_</span>
        </p>
        <p className="mb-1 animate-fade-in" style={{ animationDelay: '2s' }}>
          [AGENT] Implementing Strategy Delta-4<span className="animate-ellipsis">...</span>
        </p>
        <p className="animate-pulse">
          [AGENT] Training on custom data<span className="animate-ellipsis">...</span>
        </p>
      </div>
    </div>
  );
}