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

  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
    }
  }, [visibleCount]);

  const visibleLines = activityLog.slice(0, visibleCount);

  return (
    <div className="animate-fade-in">
      <div className="mb-[2.4rem]">
        <div className="text-[1.2rem] uppercase tracking-[0.15em] text-aon-teal font-medium mb-[0.8rem]">Step 2</div>
        <h1 className="text-[3.2rem] leading-[3.6rem] font-display font-medium text-aon-navy tracking-[-0.02em]">Agent Orchestration</h1>
        <p className="text-[1.4rem] text-aon-gray-02 mt-[0.8rem]">
          Processing iRobot Corporation renewal — orchestrator delegating to subagents
        </p>
      </div>

      {/* Graph */}
      <div className="bg-aon-gray-08 rounded-[0.8rem] p-[1.6rem] mb-[2.4rem] border border-aon-gray-06">
        <OrchestrationGraph activeAgent={activeAgent} activeTool={activeTool} />
      </div>

      {/* Activity Stream */}
      <div className="bg-aon-navy rounded-[0.8rem] p-[2rem] mb-[2.4rem]">
        <div className="flex items-center gap-[0.8rem] mb-[1.2rem]">
          <div className={`w-[0.6rem] h-[0.6rem] rounded-full ${done ? "bg-aon-success" : "bg-aon-red animate-pulse"}`} />
          <span className="text-[1rem] uppercase tracking-[0.15em] text-white/40 font-medium">
            {done ? "Execution Complete" : "Live Execution Log"}
          </span>
        </div>
        <div
          ref={streamRef}
          className="h-[20rem] overflow-y-auto activity-stream space-y-[0.4rem]"
        >
          {visibleLines.map((line, i) => (
            <div key={i} className="animate-slide-in font-mono text-[1.1rem] leading-[1.8rem]">
              <span className="text-white/25">[{line.timestamp}]</span>{" "}
              <span className="font-medium" style={{ color: agentColors[line.agent] || "#919a9f" }}>
                {line.agent}:
              </span>{" "}
              <span className="text-white/70">{line.action}</span>
            </div>
          ))}
          {!done && (
            <div className="flex items-center gap-[0.6rem] mt-[0.4rem]">
              <div className="w-[0.5rem] h-[0.5rem] bg-aon-red rounded-full animate-pulse" />
              <span className="text-white/25 text-[1rem] font-mono">processing…</span>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      {done && (
        <button
          onClick={onNext}
          className="bg-aon-red text-white px-[2.4rem] py-[1.6rem] rounded-[0.4rem] text-[1.4rem] font-medium hover:bg-[#d00015] transition-colors flex items-center gap-[0.8rem] border border-aon-red animate-fade-in"
        >
          Review Recommendation
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
