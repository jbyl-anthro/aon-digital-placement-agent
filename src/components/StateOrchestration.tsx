"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { activityLog, ActivityLine, agentColors } from "@/data/activityLog";
import OrchestrationGraph from "./OrchestrationGraph";

interface StateOrchestrationProps {
  onNext: () => void;
  onLineStreamed: (line: ActivityLine) => void;
}

export default function StateOrchestration({ onNext, onLineStreamed }: StateOrchestrationProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);
  const streamRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const currentLine = visibleCount > 0 ? activityLog[visibleCount - 1] : null;
  const activeAgent = currentLine?.agent || null;
  const activeTool = currentLine?.tool || null;

  const streamLines = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let index = 0;
    function showNext() {
      if (index >= activityLog.length) {
        setDone(true);
        return;
      }
      const line = activityLog[index];
      const delay = line.delay;
      setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
        onLineStreamed(line);
        index++;
        showNext();
      }, delay);
    }
    showNext();
  }, [onLineStreamed]);

  useEffect(() => {
    streamLines();
  }, [streamLines]);

  // Auto-scroll the activity stream
  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
    }
  }, [visibleCount]);

  const visibleLines = activityLog.slice(0, visibleCount);

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-aon-navy">Agent Orchestration</h1>
        <p className="text-sm text-gray-500 mt-1">
          Processing iRobot Corporation renewal — orchestrator delegating to subagents
        </p>
      </div>

      {/* Graph */}
      <div className="bg-aon-bg rounded-xl p-4 mb-6 border border-gray-100">
        <OrchestrationGraph activeAgent={activeAgent} activeTool={activeTool} />
      </div>

      {/* Activity Stream */}
      <div className="bg-gray-950 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-2 h-2 rounded-full ${done ? "bg-emerald-400" : "bg-aon-red animate-pulse"}`} />
          <span className="text-[10px] uppercase tracking-widest text-gray-400">
            {done ? "Execution Complete" : "Live Execution Log"}
          </span>
        </div>
        <div
          ref={streamRef}
          className="h-48 overflow-y-auto activity-stream space-y-1"
        >
          {visibleLines.map((line, i) => (
            <div key={i} className="animate-slide-in font-mono text-[12px] leading-relaxed">
              <span className="text-gray-600">[{line.timestamp}]</span>{" "}
              <span className="font-medium" style={{ color: agentColors[line.agent] || "#94a3b8" }}>
                {line.agent}:
              </span>{" "}
              <span className="text-gray-300">{line.action}</span>
            </div>
          ))}
          {!done && (
            <div className="flex items-center gap-1.5 mt-1">
              <div className="w-1.5 h-1.5 bg-aon-red rounded-full animate-pulse" />
              <span className="text-gray-600 text-[11px] font-mono">processing…</span>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      {done && (
        <button
          onClick={onNext}
          className="bg-aon-navy text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-aon-navy/90 transition-colors flex items-center gap-2 animate-fade-in"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Review Recommendation
        </button>
      )}
    </div>
  );
}
