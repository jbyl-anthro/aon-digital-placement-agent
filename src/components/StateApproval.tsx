"use client";

import { activityLog, agentColors } from "@/data/activityLog";

interface StateApprovalProps {
  onReset: () => void;
}

export default function StateApproval({ onReset }: StateApprovalProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-aon-navy">Approval Confirmed</h1>
      </div>

      {/* Confirmation Card */}
      <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 12L10 16L18 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-aon-navy">RSR approved and sent</div>
            <div className="text-sm text-gray-500 mt-0.5">
              Delivered to client.contact@irobot.com — RSR delivered 12:47 PM EST
            </div>
          </div>
        </div>
      </div>

      {/* Audit Trail */}
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
        <button
          className="w-full px-5 py-3 flex items-center justify-between bg-aon-bg hover:bg-gray-100 transition-colors"
          onClick={(e) => {
            const panel = (e.currentTarget as HTMLElement).nextElementSibling;
            if (panel) panel.classList.toggle("hidden");
          }}
        >
          <span className="text-sm font-medium text-aon-navy">Audit Trail — Full Agent Log</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="border-t border-gray-200">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-500">
                <th className="text-left px-4 py-2 font-medium w-20">Time</th>
                <th className="text-left px-4 py-2 font-medium w-36">Agent</th>
                <th className="text-left px-4 py-2 font-medium">Action</th>
                <th className="text-left px-4 py-2 font-medium w-40">Tool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {activityLog.map((line, i) => (
                <tr key={i} className="hover:bg-aon-bg/50 transition-colors">
                  <td className="px-4 py-2 font-mono text-gray-400">{line.timestamp}</td>
                  <td className="px-4 py-2 font-medium" style={{ color: agentColors[line.agent] || "#334155" }}>
                    {line.agent}
                  </td>
                  <td className="px-4 py-2 text-gray-600">{line.action}</td>
                  <td className="px-4 py-2 font-mono text-gray-400">{line.tool || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-400">
          Total agent runtime: 11.7 seconds. Broker review: 4 minutes 22 seconds.
        </div>
        <button
          onClick={onReset}
          className="text-sm text-aon-navy hover:text-aon-navy/70 transition-colors font-medium flex items-center gap-1.5"
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
