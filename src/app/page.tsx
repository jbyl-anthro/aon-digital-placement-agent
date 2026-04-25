"use client";

import { useState, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import StateUpload from "@/components/StateUpload";
import StateOrchestration from "@/components/StateOrchestration";
import StateComparison from "@/components/StateComparison";
import StateRSR from "@/components/StateRSR";
import StateApproval from "@/components/StateApproval";
import { ActivityLine } from "@/data/activityLog";

export default function Home() {
  const [currentState, setCurrentState] = useState(1);
  const [sidebarLines, setSidebarLines] = useState<ActivityLine[]>([]);

  const handleLineStreamed = useCallback((line: ActivityLine) => {
    setSidebarLines((prev) => [...prev, line]);
  }, []);

  const goToState = (state: number) => {
    setCurrentState(state);
  };

  const reset = () => {
    setCurrentState(1);
    setSidebarLines([]);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar currentState={currentState} visibleLines={sidebarLines} />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-10">
          {currentState === 1 && <StateUpload onNext={() => goToState(2)} />}
          {currentState === 2 && (
            <StateOrchestration
              onNext={() => goToState(3)}
              onLineStreamed={handleLineStreamed}
            />
          )}
          {currentState === 3 && <StateComparison onNext={() => goToState(4)} />}
          {currentState === 4 && <StateRSR onNext={() => goToState(5)} />}
          {currentState === 5 && <StateApproval onReset={reset} />}
        </div>
      </main>
    </div>
  );
}
