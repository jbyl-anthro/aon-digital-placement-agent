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
  tools: string[];
  cx: number;
  cy: number;
}

const subagents: SubagentDef[] = [
  { id: "Quote Parser", label: "Quote Parser", tools: ["quote-extractor-mcp", "m365-mcp"], cx: 250, cy: 70 },
  { id: "Placement Analyst", label: "Placement Analyst", tools: ["tbs-mcp", "sop-knowledge-mcp"], cx: 490, cy: 190 },
  { id: "RSR Generator", label: "RSR Generator", tools: ["m365-mcp", "sop-knowledge-mcp"], cx: 250, cy: 340 },
  { id: "Compliance Checker", label: "Compliance Checker", tools: ["sop-knowledge-mcp"], cx: 60, cy: 190 },
];

const orchestratorPos = { cx: 275, cy: 200 };

function getToolPositions(sa: SubagentDef): { label: string; cx: number; cy: number }[] {
  const dx = sa.cx - orchestratorPos.cx;
  const dy = sa.cy - orchestratorPos.cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const ndx = dx / dist;
  const ndy = dy / dist;

  return sa.tools.map((tool, i) => {
    const offset = sa.tools.length === 1 ? 0 : (i - 0.5) * 50;
    return {
      label: tool,
      cx: sa.cx + ndx * 65 + (-ndy) * offset,
      cy: sa.cy + ndy * 65 + ndx * offset,
    };
  });
}

export default function OrchestrationGraph({ activeAgent, activeTool }: OrchestrationGraphProps) {
  const toolPositions = useMemo(() => {
    return subagents.map((sa) => ({
      agent: sa.id,
      tools: getToolPositions(sa),
    }));
  }, []);

  return (
    <svg viewBox="0 0 550 420" className="w-full max-w-[56rem] mx-auto" style={{ height: 340 }}>
      {/* Connections: Orchestrator → Subagents */}
      {subagents.map((sa) => {
        const isActive = activeAgent === sa.id || activeAgent === "Orchestrator";
        return (
          <line
            key={`line-${sa.id}`}
            x1={orchestratorPos.cx}
            y1={orchestratorPos.cy}
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
      {toolPositions.map((group) =>
        group.tools.map((tool) => {
          const sa = subagents.find((s) => s.id === group.agent)!;
          const isActive = activeAgent === group.agent && activeTool === tool.label;
          return (
            <line
              key={`tool-line-${group.agent}-${tool.label}`}
              x1={sa.cx}
              y1={sa.cy}
              x2={tool.cx}
              y2={tool.cy}
              stroke={isActive ? agentColors[group.agent] || "#78838b" : "#cddbde"}
              strokeWidth={isActive ? 2 : 1}
              className={isActive ? "flow-line" : ""}
              opacity={isActive ? 1 : 0.3}
            />
          );
        })
      )}

      {/* Tool nodes */}
      {toolPositions.map((group) =>
        group.tools.map((tool) => {
          const isActive = activeAgent === group.agent && activeTool === tool.label;
          return (
            <g key={`tool-${group.agent}-${tool.label}`}>
              <rect
                x={tool.cx - 48}
                y={tool.cy - 12}
                width={96}
                height={24}
                rx={3}
                fill={isActive ? (agentColors[group.agent] || "#78838b") : "#f9fcfc"}
                stroke={isActive ? (agentColors[group.agent] || "#78838b") : "#cddbde"}
                strokeWidth={1}
                className={isActive ? "animate-glow-pulse" : ""}
              />
              <text
                x={tool.cx}
                y={tool.cy + 3.5}
                textAnchor="middle"
                className="text-[8px] font-mono"
                fill={isActive ? "white" : "#919a9f"}
              >
                {tool.label}
              </text>
            </g>
          );
        })
      )}

      {/* Subagent nodes */}
      {subagents.map((sa) => {
        const isActive = activeAgent === sa.id;
        const color = agentColors[sa.id] || "#78838b";
        return (
          <g key={sa.id}>
            <circle
              cx={sa.cx}
              cy={sa.cy}
              r={32}
              fill={isActive ? color : "white"}
              stroke={isActive ? color : "#cddbde"}
              strokeWidth={isActive ? 2 : 1}
              className={isActive ? "animate-glow-pulse" : ""}
            />
            <text
              x={sa.cx}
              y={sa.cy - 3}
              textAnchor="middle"
              className="text-[9px] font-medium"
              fill={isActive ? "white" : "#262836"}
            >
              {sa.label.split(" ")[0]}
            </text>
            <text
              x={sa.cx}
              y={sa.cy + 9}
              textAnchor="middle"
              className="text-[9px] font-medium"
              fill={isActive ? "white" : "#262836"}
            >
              {sa.label.split(" ").slice(1).join(" ")}
            </text>
          </g>
        );
      })}

      {/* Orchestrator node (center) */}
      <circle
        cx={orchestratorPos.cx}
        cy={orchestratorPos.cy}
        r={42}
        fill={activeAgent ? "#262836" : "white"}
        stroke="#262836"
        strokeWidth={2}
      />
      <text
        x={orchestratorPos.cx}
        y={orchestratorPos.cy + 4}
        textAnchor="middle"
        className="text-[11px] font-semibold"
        fill={activeAgent ? "white" : "#262836"}
      >
        Orchestrator
      </text>
    </svg>
  );
}
