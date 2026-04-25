"use client";

import { comparisonData, recommendationReasons } from "@/data/quotes";

interface StateComparisonProps {
  onNext: () => void;
}

export default function StateComparison({ onNext }: StateComparisonProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-aon-navy">Quote Comparison & Recommendation</h1>
        <p className="text-sm text-gray-500 mt-1">
          iRobot Corporation — 1/1/2027 Renewal — 3 carrier quotes analyzed
        </p>
      </div>

      {/* Comparison Table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-aon-navy text-white">
              <th className="text-left px-4 py-3 font-medium w-48"></th>
              <th className="text-left px-4 py-3 font-medium">Cigna Global</th>
              <th className="text-left px-4 py-3 font-medium">Allianz Care</th>
              <th className="text-left px-4 py-3 font-medium">MetLife International</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-aon-bg/50"}`}>
                <td className="px-4 py-3 font-medium text-gray-700">{row.label}</td>
                <td className="px-4 py-3 text-gray-600">{row.cigna}</td>
                <td className="px-4 py-3 text-gray-600">{row.allianz}</td>
                <td className="px-4 py-3 text-gray-600">
                  {row.metlifeFlag ? (
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-aon-red shrink-0">
                        <path d="M7 1L1 13H13L7 1Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
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
      <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-aon-navy">Cigna Global — Recommended</h2>
          </div>
        </div>
        <ul className="space-y-3">
          {recommendationReasons.map((reason, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 mt-0.5 shrink-0">&#x2022;</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button
        onClick={onNext}
        className="bg-aon-navy text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-aon-navy/90 transition-colors flex items-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 6H11M5 8H11M5 10H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        Generate RSR
      </button>
    </div>
  );
}
