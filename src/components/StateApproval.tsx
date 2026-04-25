"use client";

import { activityLog, agentColors } from "@/data/activityLog";

interface StateApprovalProps {
  onReset: () => void;
}

export default function StateApproval({ onReset }: StateApprovalProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.15em] text-aon-teal font-medium mb-1">Step 5</div>
        <h1 className="text-3xl font-display font-medium text-aon-navy tracking-tight">Approval Confirmed</h1>
      </div>

      {/* Confirmation Card */}
      <div className="border border-aon-success/30 bg-aon-success/5 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-aon-success rounded-full flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 12L10 16L18 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-display font-medium text-aon-navy">RSR approved and sent</div>
            <div className="text-sm text-aon-gray-02 mt-0.5">
              Delivered to client.contact@irobot.com — RSR delivered 12:47 PM EST
            </div>
          </div>
        </div>
      </div>

      {/* Audit Trail */}
      <div className="border border-aon-gray-05 rounded-lg overflow-hidden mb-6">
        <button
          className="w-full px-5 py-3 flex items-center justify-between bg-aon-gray-08 hover:bg-aon-gray-07 transition-colors"
          onClick={(e) => {
            const panel = (e.currentTarget as HTMLElement).nextElementSibling;
            if (panel) panel.classList.toggle("hidden");
          }}
        >
          <span className="text-sm font-medium text-aon-navy">Audit Trail — Full Agent Log</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-aon-gray-04">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="border-t border-aon-gray-05">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-aon-gray-08 text-aon-gray-03">
                <th className="text-left px-4 py-2 font-medium w-16">Time</th>
                <th className="text-left px-4 py-2 font-medium w-32">Agent</th>
                <th className="text-left px-4 py-2 font-medium">Action</th>
                <th className="text-left px-4 py-2 font-medium w-36">Tool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-aon-gray-06">
              {activityLog.map((line, i) => (
                <tr key={i} className="hover:bg-aon-gray-08 transition-colors">
                  <td className="px-4 py-1.5 font-mono text-aon-gray-04">{line.timestamp}</td>
                  <td className="px-4 py-1.5 font-medium" style={{ color: agentColors[line.agent] || "#262836" }}>
                    {line.agent}
                  </td>
                  <td className="px-4 py-1.5 text-aon-gray-01">{line.action}</td>
                  <td className="px-4 py-1.5 font-mono text-aon-gray-04">{line.tool || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-aon-gray-04">
          Total agent runtime: 11.7 seconds. Broker review: 4 minutes 22 seconds.
        </div>
        <button
          onClick={onReset}
          className="text-sm text-aon-navy hover:text-aon-red transition-colors font-medium flex items-center gap-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7a5 5 0 019.33-2.5M12 7a5 5 0 01-9.33 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M11 2v3h-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12V9h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Run another renewal
        </button>
      </div>
    </div>
  );
}
