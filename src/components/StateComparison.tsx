"use client";

import { comparisonData, recommendationReasons } from "@/data/quotes";

interface StateComparisonProps {
  onNext: () => void;
}

export default function StateComparison({ onNext }: StateComparisonProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-[2.4rem]">
        <div className="text-[1.2rem] uppercase tracking-[0.15em] text-aon-teal font-medium mb-[0.8rem]">Step 3</div>
        <h1 className="text-[3.2rem] leading-[3.6rem] font-display font-medium text-aon-navy tracking-[-0.02em]">Quote Comparison & Recommendation</h1>
        <p className="text-[1.4rem] text-aon-gray-02 mt-[0.8rem]">
          iRobot Corporation — 1/1/2027 Renewal — 3 carrier quotes analyzed
        </p>
      </div>

      {/* Comparison Table */}
      <div className="border border-aon-gray-05 rounded-[0.8rem] overflow-hidden mb-[3.2rem]">
        <table className="w-full text-[1.3rem]">
          <thead>
            <tr className="bg-aon-navy text-white">
              <th className="text-left px-[1.6rem] py-[1.2rem] font-medium w-[18rem]"></th>
              <th className="text-left px-[1.6rem] py-[1.2rem] font-medium">Cigna Global</th>
              <th className="text-left px-[1.6rem] py-[1.2rem] font-medium">Allianz Care</th>
              <th className="text-left px-[1.6rem] py-[1.2rem] font-medium">MetLife International</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <tr key={i} className={`border-t border-aon-gray-06 ${i % 2 === 0 ? "bg-white" : "bg-aon-gray-08"}`}>
                <td className="px-[1.6rem] py-[1.2rem] font-medium text-aon-navy">{row.label}</td>
                <td className="px-[1.6rem] py-[1.2rem] text-aon-gray-01">{row.cigna}</td>
                <td className="px-[1.6rem] py-[1.2rem] text-aon-gray-01">{row.allianz}</td>
                <td className="px-[1.6rem] py-[1.2rem] text-aon-gray-01">
                  {row.metlifeFlag ? (
                    <span className="flex items-center gap-[0.6rem]">
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
      <div className="border border-aon-success/30 bg-aon-success/5 rounded-[0.8rem] p-[2.4rem] mb-[3.2rem]">
        <div className="flex items-center gap-[1.2rem] mb-[1.6rem]">
          <div className="w-[3.2rem] h-[3.2rem] bg-aon-success rounded-full flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-[2rem] font-display font-medium text-aon-navy">Cigna Global — Recommended</h2>
        </div>
        <ul className="space-y-[1.2rem]">
          {recommendationReasons.map((reason, i) => (
            <li key={i} className="flex items-start gap-[1.2rem] text-[1.4rem] text-aon-gray-01 leading-[2.2rem]">
              <span className="text-aon-success mt-[0.2rem] shrink-0">&#x2022;</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button
        onClick={onNext}
        className="bg-aon-red text-white px-[2.4rem] py-[1.6rem] rounded-[0.4rem] text-[1.4rem] font-medium hover:bg-[#d00015] transition-colors flex items-center gap-[0.8rem] border border-aon-red"
      >
        Generate RSR
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
