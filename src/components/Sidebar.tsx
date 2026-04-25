"use client";

import { ActivityLine, agentColors } from "@/data/activityLog";

const steps = [
  "Upload Quotes",
  "Orchestration",
  "Comparison & Recommendation",
  "RSR Preview",
  "Approval & Audit Trail",
];

interface SidebarProps {
  currentState: number;
  visibleLines: ActivityLine[];
}

export default function Sidebar({ currentState, visibleLines }: SidebarProps) {
  return (
    <aside className="w-72 min-w-72 h-screen bg-aon-navy text-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <span className="text-aon-navy font-bold text-sm tracking-tight">Aon</span>
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">Digital Placement</div>
            <div className="text-xs text-white/50">Agent</div>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Workflow</div>
        <div className="space-y-1">
          {steps.map((step, i) => {
            const stateIndex = i + 1;
            const isComplete = stateIndex < currentState;
            const isCurrent = stateIndex === currentState;
            return (
              <div key={i} className="flex items-center gap-3 py-1.5">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium shrink-0 transition-all duration-300 ${
                    isComplete
                      ? "bg-emerald-500 text-white"
                      : isCurrent
                      ? "bg-white text-aon-navy"
                      : "bg-white/10 text-white/40"
                  }`}
                >
                  {isComplete ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    stateIndex
                  )}
                </div>
                <span
                  className={`text-xs transition-all duration-300 ${
                    isCurrent ? "text-white font-medium" : isComplete ? "text-white/60" : "text-white/30"
                  }`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Stream */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-5 pt-4 pb-2">
          <div className="text-[10px] uppercase tracking-widest text-white/40">System Activity</div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-4 activity-stream">
          {visibleLines.length === 0 ? (
            <div className="text-xs text-white/20 mt-2 px-1">Waiting for agent execution…</div>
          ) : (
            <div className="space-y-1.5">
              {visibleLines.map((line, i) => (
                <div
                  key={i}
                  className="animate-fade-in text-[11px] leading-relaxed"
                >
                  <span className="font-mono text-white/30">[{line.timestamp}]</span>{" "}
                  <span className="font-medium" style={{ color: agentColors[line.agent] ? lighten(agentColors[line.agent]) : "#94a3b8" }}>
                    {line.agent}:
                  </span>{" "}
                  <span className="text-white/70">{line.action}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

function lighten(hex: string): string {
  // Simple lighten for sidebar display on dark bg
  const colorMap: Record<string, string> = {
    "#002B49": "#6db3d4",
    "#1a6b8a": "#5cc5e0",
    "#2d7d4f": "#6dd49a",
    "#7c5bbf": "#b39deb",
    "#b8860b": "#e8c44a",
  };
  return colorMap[hex] || "#94a3b8";
}
