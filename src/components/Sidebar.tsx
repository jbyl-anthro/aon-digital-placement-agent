"use client";

import { ActivityLine } from "@/data/activityLog";

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
    <aside className="w-[28rem] min-w-[28rem] h-screen bg-aon-navy text-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-[2.4rem] py-[2.4rem] border-b border-white/10">
        <div className="flex items-center gap-[1.2rem]">
          {/* Aon logo — red wordmark on white */}
          <div className="flex items-center justify-center">
            <svg width="56" height="28" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2 22.4H8.6L7.2 26H3.2L10.4 8h4l7.2 18h-4.2l-1.4-3.6h-1.8zm-0.8-3.2l-2-5.6-2 5.6h4zm16.8-7.6c4.4 0 7.6 3.2 7.6 7.6s-3.2 7.6-7.6 7.6-7.6-3.2-7.6-7.6 3.2-7.6 7.6-7.6zm0 12c2.4 0 4-1.8 4-4.4s-1.6-4.4-4-4.4-4 1.8-4 4.4 1.6 4.4 4 4.4zM41.6 12h3.6v2c1-1.4 2.6-2.4 4.6-2.4 3.4 0 5.4 2.2 5.4 5.8V26h-3.6v-7.8c0-2.2-1-3.4-2.8-3.4-1.8 0-3.2 1.2-3.6 2.8V26H41.6V12z" fill="#eb0017"/>
            </svg>
          </div>
          <div className="border-l border-white/20 pl-[1.2rem]">
            <div className="text-[1.4rem] font-medium leading-tight tracking-[-0.01em]">Digital Placement</div>
            <div className="text-[1.1rem] text-white/40 tracking-wide">Agent</div>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="px-[2.4rem] py-[2rem] border-b border-white/10">
        <div className="text-[1rem] uppercase tracking-[0.15em] text-white/30 mb-[1.6rem] font-medium">Workflow</div>
        <div className="space-y-[0.4rem]">
          {steps.map((step, i) => {
            const stateIndex = i + 1;
            const isComplete = stateIndex < currentState;
            const isCurrent = stateIndex === currentState;
            return (
              <div key={i} className="flex items-center gap-[1.2rem] py-[0.6rem]">
                <div
                  className={`w-[2rem] h-[2rem] rounded-full flex items-center justify-center text-[1rem] font-medium shrink-0 transition-all duration-300 ${
                    isComplete
                      ? "bg-aon-success text-white"
                      : isCurrent
                      ? "bg-aon-red text-white"
                      : "bg-white/8 text-white/30"
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
                  className={`text-[1.2rem] transition-all duration-300 ${
                    isCurrent ? "text-white font-medium" : isComplete ? "text-white/50" : "text-white/25"
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
        <div className="px-[2.4rem] pt-[1.6rem] pb-[0.8rem]">
          <div className="text-[1rem] uppercase tracking-[0.15em] text-white/30 font-medium">System Activity</div>
        </div>
        <div className="flex-1 overflow-y-auto px-[1.6rem] pb-[1.6rem] activity-stream">
          {visibleLines.length === 0 ? (
            <div className="text-[1.1rem] text-white/15 mt-[0.8rem] px-[0.4rem]">Waiting for agent execution…</div>
          ) : (
            <div className="space-y-[0.6rem]">
              {visibleLines.map((line, i) => (
                <div
                  key={i}
                  className="animate-fade-in text-[1rem] leading-[1.6rem]"
                >
                  <span className="font-mono text-white/25">[{line.timestamp}]</span>{" "}
                  <span className="font-medium" style={{ color: sidebarAgentColor(line.agent) }}>
                    {line.agent}:
                  </span>{" "}
                  <span className="text-white/60">{line.action}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

function sidebarAgentColor(agent: string): string {
  const colorMap: Record<string, string> = {
    "Orchestrator": "#8b8da0",
    "Quote Parser": "#5cc5e0",
    "Placement Analyst": "#4eddb8",
    "RSR Generator": "#ffad6e",
    "Compliance Checker": "#7dd8e5",
  };
  return colorMap[agent] || "#8b8da0";
}
