"use client";

import { comparisonData, recommendationReasons, complianceChecklist, countryPlans } from "@/data/quotes";

interface StateRSRProps {
  onNext: () => void;
}

export default function StateRSR({ onNext }: StateRSRProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-aon-navy">Renewal Summary Report</h1>
        <p className="text-sm text-gray-500 mt-1">Review and approve before sending to client</p>
      </div>

      {/* Document Frame */}
      <div className="bg-gray-200 rounded-xl p-6 mb-6">
        <div className="bg-white doc-frame rounded-lg max-w-3xl mx-auto overflow-hidden">
          {/* Doc Header */}
          <div className="bg-aon-navy px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-aon-navy font-bold text-[10px]">Aon</span>
              </div>
              <span className="text-white text-sm font-medium">Renewal Summary Report</span>
            </div>
            <span className="text-white/60 text-xs">April 25, 2026</span>
          </div>

          <div className="px-8 py-6 space-y-6 text-sm">
            {/* Executive Summary */}
            <section>
              <h3 className="text-base font-semibold text-aon-navy mb-2 border-b border-gray-100 pb-1">
                Executive Summary
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Aon conducted a competitive renewal analysis for iRobot Corporation&apos;s international health benefits program,
                covering approximately 1,200 lives across the United States, Germany, Japan, and China with an effective date
                of January 1, 2027. Three carrier quotes were evaluated — Cigna Global, Allianz Care, and MetLife International.
                Based on network breadth, compliance alignment, and client-stated priorities, we recommend Cigna Global as the
                carrier of choice for this renewal period.
              </p>
            </section>

            {/* Account Overview */}
            <section>
              <h3 className="text-base font-semibold text-aon-navy mb-2 border-b border-gray-100 pb-1">
                Account Overview
              </h3>
              <table className="w-full text-xs">
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Client", "iRobot Corporation"],
                    ["Lives Covered", "~1,200"],
                    ["Countries", "United States, Germany, Japan, China"],
                    ["Effective Date", "January 1, 2027"],
                    ["Prior Carrier", "Cigna Global (incumbent)"],
                    ["Practice", "Mid-Market Multinational"],
                  ].map(([k, v], i) => (
                    <tr key={i}>
                      <td className="py-1.5 font-medium text-gray-500 w-36">{k}</td>
                      <td className="py-1.5 text-gray-700">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Quote Comparison */}
            <section>
              <h3 className="text-base font-semibold text-aon-navy mb-2 border-b border-gray-100 pb-1">
                Quote Comparison
              </h3>
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500 border-b border-gray-200">
                    <th className="text-left py-1.5 font-medium"></th>
                    <th className="text-left py-1.5 font-medium">Cigna Global</th>
                    <th className="text-left py-1.5 font-medium">Allianz Care</th>
                    <th className="text-left py-1.5 font-medium">MetLife Intl</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {comparisonData.slice(0, 6).map((row, i) => (
                    <tr key={i}>
                      <td className="py-1.5 font-medium text-gray-500">{row.label}</td>
                      <td className="py-1.5 text-gray-700">{row.cigna}</td>
                      <td className="py-1.5 text-gray-700">{row.allianz}</td>
                      <td className={`py-1.5 ${row.metlifeFlag ? "text-aon-red font-medium" : "text-gray-700"}`}>
                        {row.metlife}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Recommendation */}
            <section>
              <h3 className="text-base font-semibold text-aon-navy mb-2 border-b border-gray-100 pb-1">
                Recommendation: Cigna Global
              </h3>
              <ul className="space-y-1.5">
                {recommendationReasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-emerald-500 mt-0.5">&#x2022;</span>
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Country Plans */}
            <section>
              <h3 className="text-base font-semibold text-aon-navy mb-2 border-b border-gray-100 pb-1">
                Country-by-Country Plan Terms
              </h3>
              <div className="space-y-3">
                {countryPlans.map((cp, i) => (
                  <div key={i}>
                    <div className="text-xs font-semibold text-aon-navy mb-1">{cp.country}</div>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="text-gray-400 border-b border-gray-100">
                          <th className="text-left py-1 w-28"></th>
                          <th className="text-left py-1">Cigna</th>
                          <th className="text-left py-1">Allianz</th>
                          <th className="text-left py-1">MetLife</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        <tr>
                          <td className="py-1 text-gray-500">Premium</td>
                          <td className="py-1 text-gray-700">{cp.cigna.premium}</td>
                          <td className="py-1 text-gray-700">{cp.allianz.premium}</td>
                          <td className="py-1 text-gray-700">{cp.metlife.premium}</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-500">Network</td>
                          <td className="py-1 text-gray-700">{cp.cigna.network}</td>
                          <td className="py-1 text-gray-700">{cp.allianz.network}</td>
                          <td className="py-1 text-gray-700">{cp.metlife.network}</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-500">Key Terms</td>
                          <td className="py-1 text-gray-700">{cp.cigna.keyTerms}</td>
                          <td className="py-1 text-gray-700">{cp.allianz.keyTerms}</td>
                          <td className="py-1 text-gray-700">{cp.metlife.keyTerms}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </section>

            {/* Compliance Checklist */}
            <section>
              <h3 className="text-base font-semibold text-aon-navy mb-2 border-b border-gray-100 pb-1">
                Compliance Checklist
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {complianceChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-500 shrink-0">
                      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
                      <path d="M3.5 6L5.5 8L8.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Broker Notes placeholder */}
            <section>
              <h3 className="text-base font-semibold text-aon-navy mb-2 border-b border-gray-100 pb-1">
                Broker Review Notes
              </h3>
              <div className="border border-dashed border-gray-200 rounded p-3 text-xs text-gray-400 italic">
                No notes added
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Broker Notes Input */}
      <div className="mb-6">
        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
          Broker review notes — anything to flag before sending?
        </label>
        <textarea
          className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-aon-navy/20 focus:border-aon-navy/30"
          rows={3}
          placeholder="Add any notes for the client record…"
        />
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <button className="border border-gray-200 text-gray-600 px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          Edit RSR
        </button>
        <button
          onClick={onNext}
          className="bg-aon-navy text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-aon-navy/90 transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Approve and Send to Client
        </button>
      </div>
    </div>
  );
}
