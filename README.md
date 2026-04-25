# Aon Digital Placement Agent — Demo Mock

A clickable visualization of the Digital Placement Agent workflow scoped in the Aon partnership proposal. This is a **client-side mock** — no real LLM calls, no backend, no database. Everything runs in the browser with simulated delays.

## Quick Start

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Optimized for 1440px+ displays (laptop/projector).

## What It Shows

The demo walks through five sequential states of an agentic renewal workflow:

1. **Upload Quotes** — Three pre-loaded carrier quote PDFs (Cigna Global, Allianz Care, MetLife International) for a fictional iRobot Corporation renewal
2. **Orchestration** — Animated graph showing orchestrator → subagents → MCP tools architecture, with a real-time activity stream that types out agent actions with realistic timing
3. **Comparison & Recommendation** — Side-by-side quote comparison table with ranked recommendation and explainable reasoning
4. **RSR Preview** — Aon-branded Renewal Summary Report rendered as a document preview, with broker review notes
5. **Approval & Audit Trail** — Confirmation card with full audit trail of every agent action

The left sidebar shows a workflow stepper and a persistent system activity panel that streams agent actions as the user progresses.

## What It Does NOT Show

- This is **not a working agent**. There are no real LLM calls, no API integrations, and no actual document processing.
- The activity log timing and content is entirely simulated (hardcoded delays of 300–1200ms between lines, ~12 seconds total).
- Quote data, comparison numbers, and recommendation reasoning are all fictional but realistic for a mid-market multinational health benefits renewal.
- File uploads are not functional — the three quotes are pre-loaded as static cards.

## Architecture Notes

- Next.js 14 (App Router) with TypeScript and Tailwind CSS
- All state is managed client-side with React useState
- The orchestration graph is rendered with inline SVG (no external charting libraries)
- Animations use Tailwind keyframes and CSS transitions
- Brand colors: Aon Navy (#002B49), Aon Red (#E30613)

## Before the Meeting

- Replace the "Aon" text placeholder in the sidebar with the actual Aon logo SVG
- All dollar figures are illustrative — acknowledge this verbally if the audience includes anyone who knows iRobot's actual benefits spend
- The activity stream runs for ~12 seconds; slow it down by increasing delay values in `src/data/activityLog.ts` if the room needs more time to read

## Tech Stack

- Next.js 14.2
- TypeScript
- Tailwind CSS
- No external runtime dependencies beyond React and Next.js
