"use client";

import { activityLog, agentColors } from "@/data/activityLog";

interface StateApprovalProps {
  onReset: () => void;
}

export default function StateApproval({ onReset }: StateApprovalProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-[3.2rem]">
        <div className="text-[1.2rem] uppercase tracking-[0.15em] text-aon-teal font-medium mb-[0.8rem]">Step 5</div>
        <h1 className="text-[3.2rem] leading-[3.6rem] font-display font-medium text-aon-navy tracking-[-0.02em]">Approval Confirmed</h1>
      </div>

      {/* Confirmation Card */}
      <div className="border border-aon-success/30 bg-aon-success/5 rounded-[0.8rem] p-[2.4rem] mb-[3.2rem]">
        <div className="flex items-center gap-[1.6rem]">
          <div className="w-[4.8rem] h-[4.8rem] bg-aon-success rounded-full flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 12L10 16L18 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-[1.8rem] font-display font-medium text-aon-navy">RSR approved and sent</div>
            <div className="text-[1.4rem] text-aon-gray-02 mt-[0.4rem]">
              Delivered to client.contact@irobot.com — RSR delivered 12:47 PM EST
            </div>
          </div>
        </div>
      </div>

      {/* Audit Trail */}
      <div className="border border-aon-gray-05 rounded-[0.8rem] overflow-hidden mb-[2.4rem]">
        <button
          className="w-full px-[2rem] py-[1.2rem] flex items-center justify-between bg-aon-gray-08 hover:bg-aon-gray-07 transition-colors"
          onClick={(e) => {
            const panel = (e.currentTarget as HTMLElement).nextElementSibling;
            if (panel) panel.classList.toggle("hidden");
          }}
        >
          <span className="text-[1.4rem] font-medium text-aon-navy">Audit Trail — Full Agent Log</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-aon-gray-04">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="border-t border-aon-gray-05">
          <table className="w-full text-[1.2rem]">
            <thead>
              <tr className="bg-aon-gray-08 text-aon-gray-03">
                <th className="text-left px-[1.6rem] py-[0.8rem] font-medium w-[7rem]">Time</th>
                <th className="text-left px-[1.6rem] py-[0.8rem] font-medium w-[14rem]">Agent</th>
                <th className="text-left px-[1.6rem] py-[0.8rem] font-medium">Action</th>
                <th className="text-left px-[1.6rem] py-[0.8rem] font-medium w-[16rem]">Tool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-aon-gray-06">
              {activityLog.map((line, i) => (
                <tr key={i} className="hover:bg-aon-gray-08 transition-colors">
                  <td className="px-[1.6rem] py-[0.6rem] font-mono text-aon-gray-04">{line.timestamp}</td>
                  <td className="px-[1.6rem] py-[0.6rem] font-medium" style={{ color: agentColors[line.agent] || "#262836" }}>
                    {line.agent}
                  </td>
                  <td className="px-[1.6rem] py-[0.6rem] text-aon-gray-01">{line.action}</td>
                  <td className="px-[1.6rem] py-[0.6rem] font-mono text-aon-gray-04">{line.tool || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-[1.2rem] text-aon-gray-04">
          Total agent runtime: 11.7 seconds. Broker review: 4 minutes 22 seconds.
        </div>
        <button
          onClick={onReset}
          className="text-[1.4rem] text-aon-navy hover:text-aon-red transition-colors font-medium flex items-center gap-[0.6rem]"
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
