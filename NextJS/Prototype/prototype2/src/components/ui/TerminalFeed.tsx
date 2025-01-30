//import { BrainCircuit } from 'lucide-react';

export default function TerminalFeed() {
  return (
    <div className="fixed bottom-4 left-4 w-64 bg-slate-800/90 rounded-lg border border-slate-700/50 overflow-hidden hidden md:block">
      <div className="px-4 py-2 bg-slate-700/50 border-b border-slate-600/50 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-sm text-slate-300">Agent Activity</span>
      </div>
      <div className="p-4 font-mono text-xs text-slate-400 h-32 overflow-y-auto">
        <p className="mb-1 animate-fade-in" style={{ animationDelay: '0s' }}>[INFO] Analyzing market trends...</p>
        <p className="mb-1 animate-fade-in" style={{ animationDelay: '1s' }}>[SUCCESS] Optimized resource allocation</p>
        <p className="mb-1 animate-fade-in" style={{ animationDelay: '2s' }}>[ACTION] Implementing strategy delta-4</p>
        <p className="animate-pulse">[ACTIVE] Learning from new data...</p>
      </div>
    </div>
  );
}