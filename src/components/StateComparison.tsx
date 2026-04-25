"use client";

import { comparisonData, recommendationReasons } from "@/data/quotes";

interface StateComparisonProps {
  onNext: () => void;
}

export default function StateComparison({ onNext }: StateComparisonProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="text-xs uppercase tracking-[0.15em] text-aon-teal font-medium mb-1">Step 3</div>
        <h1 className="text-3xl font-display font-medium text-aon-navy tracking-tight">Quote Comparison & Recommendation</h1>
        <p className="text-sm text-aon-gray-02 mt-1">
          iRobot Corporation — 1/1/2027 Renewal — 3 carrier quotes analyzed
        </p>
      </div>

      {/* Comparison Table */}
      <div className="border border-aon-gray-05 rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-aon-navy text-white">
              <th className="text-left px-4 py-3 font-medium w-44"></th>
              <th className="text-left px-4 py-3 font-medium">Cigna Global</th>
              <th className="text-left px-4 py-3 font-medium">Allianz Care</th>
              <th className="text-left px-4 py-3 font-medium">MetLife International</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <tr key={i} className={`border-t border-aon-gray-06 ${i % 2 === 0 ? "bg-white" : "bg-aon-gray-08"}`}>
                <td className="px-4 py-2.5 font-medium text-aon-navy text-[13px]">{row.label}</td>
                <td className="px-4 py-2.5 text-aon-gray-01 text-[13px]">{row.cigna}</td>
                <td className="px-4 py-2.5 text-aon-gray-01 text-[13px]">{row.allianz}</td>
                <td className="px-4 py-2.5 text-aon-gray-01 text-[13px]">
                  {row.metlifeFlag ? (
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-aon-red shrink-0">
                        <path d="M7 1L1 13H13L7 1Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                        <line x1="7" y1="5.5" x2="7" y2="8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <circle cx="7" cy="10.5" r="0.7" fill="currentColor" />
                      </svg>
                      <span className="text-aon-red font-medium">{row.metlife}</span>
                    </span>
                  ) : (
                    row.metlife
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommendation */}
      <div className="border border-aon-success/30 bg-aon-success/5 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-aon-success rounded-full flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-xl font-display font-medium text-aon-navy">Cigna Global — Recommended</h2>
        </div>
        <ul className="space-y-3">
          {recommendationReasons.map((reason, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-aon-gray-01 leading-relaxed">
              <span className="text-aon-success mt-0.5 shrink-0">&#x2022;</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button
        onClick={onNext}
        className="bg-aon-red text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#d00015] transition-colors inline-flex items-center gap-2 border border-aon-red"
      >
        Generate RSR
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
