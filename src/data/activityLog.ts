export interface ActivityLine {
  timestamp: string;
  agent: string;
  action: string;
  tool?: string;
  delay: number; // ms after previous line
}

export const activityLog: ActivityLine[] = [
  { timestamp: "00:00.4", agent: "Orchestrator", action: "Received renewal request for iRobot Corporation", delay: 400 },
  { timestamp: "00:00.8", agent: "Orchestrator", action: "Delegating quote parsing to Quote Parser subagent", delay: 400 },
  { timestamp: "00:01.2", agent: "Quote Parser", action: "Calling quote-extractor-mcp on Cigna_Global_quote.pdf", tool: "quote-extractor-mcp", delay: 400 },
  { timestamp: "00:02.1", agent: "Quote Parser", action: "Extracted 47 fields from Cigna quote — premium, network, exclusions, copays", tool: "quote-extractor-mcp", delay: 900 },
  { timestamp: "00:02.4", agent: "Quote Parser", action: "Calling quote-extractor-mcp on Allianz_Care_quote.pdf", tool: "quote-extractor-mcp", delay: 300 },
  { timestamp: "00:03.0", agent: "Quote Parser", action: "Extracted 43 fields from Allianz quote", tool: "quote-extractor-mcp", delay: 600 },
  { timestamp: "00:03.3", agent: "Quote Parser", action: "Calling quote-extractor-mcp on MetLife_International_quote.pdf", tool: "quote-extractor-mcp", delay: 300 },
  { timestamp: "00:03.9", agent: "Quote Parser", action: "Extracted 41 fields from MetLife quote", tool: "quote-extractor-mcp", delay: 600 },
  { timestamp: "00:04.2", agent: "Quote Parser", action: "Normalized to standard schema — handing back to Orchestrator", delay: 300 },
  { timestamp: "00:04.5", agent: "Orchestrator", action: "Delegating placement analysis to Placement Analyst subagent", delay: 300 },
  { timestamp: "00:04.8", agent: "Placement Analyst", action: "Calling tbs-mcp for iRobot account history", tool: "tbs-mcp", delay: 300 },
  { timestamp: "00:05.4", agent: "Placement Analyst", action: "Loaded 3 years of plan history, 4 country plan structures, prior renewal outcomes", tool: "tbs-mcp", delay: 600 },
  { timestamp: "00:05.7", agent: "Placement Analyst", action: "Calling sop-knowledge-mcp for mid-market multinational placement rules", tool: "sop-knowledge-mcp", delay: 300 },
  { timestamp: "00:06.2", agent: "Placement Analyst", action: "Loaded 11 applicable placement guidelines", tool: "sop-knowledge-mcp", delay: 500 },
  { timestamp: "00:06.6", agent: "Placement Analyst", action: "Flagged: MetLife carves out mental-health parity in Germany (line 47, exclusion §3.b)", delay: 400 },
  { timestamp: "00:07.0", agent: "Placement Analyst", action: "Cross-referenced client preferences — wellness expansion was top renewal priority", delay: 400 },
  { timestamp: "00:07.4", agent: "Placement Analyst", action: "Generated ranked recommendation — handing back to Orchestrator", delay: 400 },
  { timestamp: "00:07.7", agent: "Orchestrator", action: "Delegating RSR generation to RSR Generator subagent", delay: 300 },
  { timestamp: "00:08.0", agent: "RSR Generator", action: "Calling sop-knowledge-mcp for Aon RSR template — mid-market multinational", tool: "sop-knowledge-mcp", delay: 300 },
  { timestamp: "00:08.5", agent: "RSR Generator", action: "Loaded template v4.2", tool: "sop-knowledge-mcp", delay: 500 },
  { timestamp: "00:09.0", agent: "RSR Generator", action: "Compiling executive summary, comparison matrix, country-by-country breakdown", delay: 500 },
  { timestamp: "00:10.2", agent: "RSR Generator", action: "Draft RSR ready — handing back to Orchestrator", delay: 1200 },
  { timestamp: "00:10.5", agent: "Orchestrator", action: "Delegating compliance review to Compliance Checker", delay: 300 },
  { timestamp: "00:10.9", agent: "Compliance Checker", action: "Calling sop-knowledge-mcp for compliance checklist", tool: "sop-knowledge-mcp", delay: 400 },
  { timestamp: "00:11.4", agent: "Compliance Checker", action: "14/14 checks passed — handing back to Orchestrator", tool: "sop-knowledge-mcp", delay: 500 },
  { timestamp: "00:11.7", agent: "Orchestrator", action: "Workflow complete — ready for broker review", delay: 300 },
];

export const agentColors: Record<string, string> = {
  "Orchestrator": "#002B49",
  "Quote Parser": "#1a6b8a",
  "Placement Analyst": "#2d7d4f",
  "RSR Generator": "#7c5bbf",
  "Compliance Checker": "#b8860b",
};
