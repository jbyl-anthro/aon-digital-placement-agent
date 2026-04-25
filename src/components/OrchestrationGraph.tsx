"use client";

import { useMemo } from "react";
import { agentColors } from "@/data/activityLog";

interface OrchestrationGraphProps {
  activeAgent: string | null;
  activeTool: string | null;
}

interface SubagentDef {
  id: string;
  label: string;
  tools: { label: string; displayLabel: string }[];
  cx: number;
  cy: number;
  // Explicit tool positions — no auto-layout math
  toolPositions: { cx: number; cy: number }[];
}

const center = { cx: 400, cy: 240 };

const subagents: SubagentDef[] = [
  {
    id: "Quote Parser",
    label: "Quote Parser",
    tools: [
      { label: "quote-extractor-mcp", displayLabel: "quote-extractor" },
      { label: "m365-mcp", displayLabel: "m365" },
    ],
    cx: 240, cy: 90,
    toolPositions: [
      { cx: 130, cy: 30 },
      { cx: 340, cy: 30 },
    ],
  },
  {
    id: "Placement Analyst",
    label: "Placement Analyst",
    tools: [
      { label: "tbs-mcp", displayLabel: "tbs" },
      { label: "sop-knowledge-mcp", displayLabel: "sop-knowledge" },
    ],
    cx: 620, cy: 200,
    toolPositions: [
      { cx: 740, cy: 140 },
      { cx: 740, cy: 260 },
    ],
  },
  {
    id: "RSR Generator",
    label: "RSR Generator",
    tools: [
      { label: "m365-mcp", displayLabel: "m365" },
      { label: "sop-knowledge-mcp", displayLabel: "sop-knowledge" },
    ],
    cx: 400, cy: 400,
    toolPositions: [
      { cx: 280, cy: 460 },
      { cx: 520, cy: 460 },
    ],
  },
  {
    id: "Compliance Checker",
    label: "Compliance Checker",
    tools: [
      { label: "sop-knowledge-mcp", displayLabel: "sop-knowledge" },
    ],
    cx: 160, cy: 300,
    toolPositions: [
      { cx: 50, cy: 370 },
    ],
  },
];

export default function OrchestrationGraph({ activeAgent, activeTool }: OrchestrationGraphProps) {
  const allTools = useMemo(() => {
    return subagents.flatMap((sa) =>
      sa.tools.map((tool, i) => ({
        agentId: sa.id,
        agentCx: sa.cx,
        agentCy: sa.cy,
        ...tool,
        cx: sa.toolPositions[i].cx,
        cy: sa.toolPositions[i].cy,
      }))
    );
  }, []);

  return (
    <svg viewBox="0 0 800 500" className="w-full mx-auto" style={{ height: 380 }}>
      {/* Connections: Orchestrator → Subagents */}
      {subagents.map((sa) => {
        const isActive = activeAgent === sa.id || activeAgent === "Orchestrator";
        return (
          <line
            key={`line-${sa.id}`}
            x1={center.cx}
            y1={center.cy}
            x2={sa.cx}
            y2={sa.cy}
            stroke={isActive ? "#262836" : "#cddbde"}
            strokeWidth={isActive ? 2 : 1}
            className={isActive ? "flow-line" : ""}
            opacity={isActive ? 1 : 0.5}
          />
        );
      })}

      {/* Connections: Subagents → Tools */}
      {allTools.map((tool) => {
        const isActive = activeAgent === tool.agentId && activeTool === tool.label;
        return (
          <line
            key={`tool-line-${tool.agentId}-${tool.label}`}
            x1={tool.agentCx}
            y1={tool.agentCy}
            x2={tool.cx}
            y2={tool.cy}
            stroke={isActive ? agentColors[tool.agentId] || "#78838b" : "#cddbde"}
            strokeWidth={isActive ? 2 : 1}
            className={isActive ? "flow-line" : ""}
            opacity={isActive ? 1 : 0.3}
          />
        );
      })}

      {/* Tool nodes */}
      {allTools.map((tool) => {
        const isActive = activeAgent === tool.agentId && activeTool === tool.label;
        const color = agentColors[tool.agentId] || "#78838b";
        return (
          <g key={`tool-${tool.agentId}-${tool.label}`}>
            <rect
              x={tool.cx - 52}
              y={tool.cy - 13}
              width={104}
              height={26}
              rx={4}
              fill={isActive ? color : "#f9fcfc"}
              stroke={isActive ? color : "#cddbde"}
              strokeWidth={1}
              className={isActive ? "animate-glow-pulse" : ""}
            />
            <text
              x={tool.cx}
              y={tool.cy + 4}
              textAnchor="middle"
              className="font-mono"
              fontSize="9"
              fill={isActive ? "white" : "#919a9f"}
            >
              {tool.displayLabel}-mcp
            </text>
          </g>
        );
      })}

      {/* Subagent nodes */}
      {subagents.map((sa) => {
        const isActive = activeAgent === sa.id;
        const color = agentColors[sa.id] || "#78838b";
        return (
          <g key={sa.id}>
            <circle
              cx={sa.cx}
              cy={sa.cy}
              r={36}
              fill={isActive ? color : "white"}
              stroke={isActive ? color : "#cddbde"}
              strokeWidth={isActive ? 2 : 1}
              className={isActive ? "animate-glow-pulse" : ""}
            />
            <text
              x={sa.cx}
              y={sa.cy - 4}
              textAnchor="middle"
              fontSize="10"
              fontWeight="500"
              fill={isActive ? "white" : "#262836"}
            >
              {sa.label.split(" ")[0]}
            </text>
            <text
              x={sa.cx}
              y={sa.cy + 10}
              textAnchor="middle"
              fontSize="10"
              fontWeight="500"
              fill={isActive ? "white" : "#262836"}
            >
              {sa.label.split(" ").slice(1).join(" ")}
            </text>
          </g>
        );
      })}

      {/* Orchestrator node (center) */}
      <circle
        cx={center.cx}
        cy={center.cy}
        r={46}
        fill={activeAgent ? "#262836" : "white"}
        stroke="#262836"
        strokeWidth={2}
      />
      <text
        x={center.cx}
        y={center.cy + 5}
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill={activeAgent ? "white" : "#262836"}
      >
        Orchestrator
      </text>
    </svg>
  );
}
