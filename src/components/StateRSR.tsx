"use client";

import { comparisonData, recommendationReasons, complianceChecklist, countryPlans } from "@/data/quotes";

interface StateRSRProps {
  onNext: () => void;
}

export default function StateRSR({ onNext }: StateRSRProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-[2.4rem]">
        <div className="text-[1.2rem] uppercase tracking-[0.15em] text-aon-teal font-medium mb-[0.8rem]">Step 4</div>
        <h1 className="text-[3.2rem] leading-[3.6rem] font-display font-medium text-aon-navy tracking-[-0.02em]">Renewal Summary Report</h1>
        <p className="text-[1.4rem] text-aon-gray-02 mt-[0.8rem]">Review and approve before sending to client</p>
      </div>

      {/* Document Frame */}
      <div className="bg-aon-gray-07 rounded-[0.8rem] p-[2.4rem] mb-[2.4rem]">
        <div className="bg-white doc-frame rounded-[0.4rem] max-w-[64rem] mx-auto overflow-hidden">
          {/* Doc Header */}
          <div className="bg-aon-navy px-[3.2rem] py-[1.6rem] flex items-center justify-between">
            <div className="flex items-center gap-[1.2rem]">
              <svg width="40" height="20" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2 22.4H8.6L7.2 26H3.2L10.4 8h4l7.2 18h-4.2l-1.4-3.6h-1.8zm-0.8-3.2l-2-5.6-2 5.6h4zm16.8-7.6c4.4 0 7.6 3.2 7.6 7.6s-3.2 7.6-7.6 7.6-7.6-3.2-7.6-7.6 3.2-7.6 7.6-7.6zm0 12c2.4 0 4-1.8 4-4.4s-1.6-4.4-4-4.4-4 1.8-4 4.4 1.6 4.4 4 4.4zM41.6 12h3.6v2c1-1.4 2.6-2.4 4.6-2.4 3.4 0 5.4 2.2 5.4 5.8V26h-3.6v-7.8c0-2.2-1-3.4-2.8-3.4-1.8 0-3.2 1.2-3.6 2.8V26H41.6V12z" fill="#eb0017"/>
              </svg>
              <div className="w-px h-[1.6rem] bg-white/20" />
              <span className="text-white text-[1.3rem] font-medium">Renewal Summary Report</span>
            </div>
            <span className="text-white/50 text-[1.1rem]">April 25, 2026</span>
          </div>

          <div className="px-[3.2rem] py-[2.4rem] space-y-[2.4rem] text-[1.3rem]">
            {/* Executive Summary */}
            <section>
              <h3 className="text-[1.6rem] font-display font-medium text-aon-navy mb-[0.8rem] pb-[0.4rem] border-b border-aon-gray-06">
                Executive Summary
              </h3>
              <p className="text-aon-gray-01 leading-[2rem]">
                Aon conducted a competitive renewal analysis for iRobot Corporation&apos;s international health benefits program,
                covering approximately 1,200 lives across the United States, Germany, Japan, and China with an effective date
                of January 1, 2027. Three carrier quotes were evaluated — Cigna Global, Allianz Care, and MetLife International.
                Based on network breadth, compliance alignment, and client-stated priorities, we recommend Cigna Global as the
                carrier of choice for this renewal period.
              </p>
            </section>

            {/* Account Overview */}
            <section>
              <h3 className="text-[1.6rem] font-display font-medium text-aon-navy mb-[0.8rem] pb-[0.4rem] border-b border-aon-gray-06">
                Account Overview
              </h3>
              <table className="w-full text-[1.2rem]">
                <tbody className="divide-y divide-aon-gray-06">
                  {[
                    ["Client", "iRobot Corporation"],
                    ["Lives Covered", "~1,200"],
                    ["Countries", "United States, Germany, Japan, China"],
                    ["Effective Date", "January 1, 2027"],
                    ["Prior Carrier", "Cigna Global (incumbent)"],
                    ["Practice", "Mid-Market Multinational"],
                  ].map(([k, v], i) => (
                    <tr key={i}>
                      <td className="py-[0.6rem] font-medium text-aon-gray-03 w-[14rem]">{k}</td>
                      <td className="py-[0.6rem] text-aon-navy">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Quote Comparison */}
            <section>
              <h3 className="text-[1.6rem] font-display font-medium text-aon-navy mb-[0.8rem] pb-[0.4rem] border-b border-aon-gray-06">
                Quote Comparison
              </h3>
              <table className="w-full text-[1.2rem]">
                <thead>
                  <tr className="text-aon-gray-03 border-b border-aon-gray-05">
                    <th className="text-left py-[0.6rem] font-medium"></th>
                    <th className="text-left py-[0.6rem] font-medium">Cigna Global</th>
                    <th className="text-left py-[0.6rem] font-medium">Allianz Care</th>
                    <th className="text-left py-[0.6rem] font-medium">MetLife Intl</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-aon-gray-06">
                  {comparisonData.slice(0, 6).map((row, i) => (
                    <tr key={i}>
                      <td className="py-[0.6rem] font-medium text-aon-gray-03">{row.label}</td>
                      <td className="py-[0.6rem] text-aon-navy">{row.cigna}</td>
                      <td className="py-[0.6rem] text-aon-navy">{row.allianz}</td>
                      <td className={`py-[0.6rem] ${row.metlifeFlag ? "text-aon-red font-medium" : "text-aon-navy"}`}>
                        {row.metlife}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Recommendation */}
            <section>
              <h3 className="text-[1.6rem] font-display font-medium text-aon-navy mb-[0.8rem] pb-[0.4rem] border-b border-aon-gray-06">
                Recommendation: Cigna Global
              </h3>
              <ul className="space-y-[0.6rem]">
                {recommendationReasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-[0.8rem] text-aon-gray-01 leading-[2rem]">
                    <span className="text-aon-success mt-[0.2rem]">&#x2022;</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Country Plans */}
            <section>
              <h3 className="text-[1.6rem] font-display font-medium text-aon-navy mb-[0.8rem] pb-[0.4rem] border-b border-aon-gray-06">
                Country-by-Country Plan Terms
              </h3>
              <div className="space-y-[1.6rem]">
                {countryPlans.map((cp, i) => (
                  <div key={i}>
                    <div className="text-[1.2rem] font-medium text-aon-teal mb-[0.4rem]">{cp.country}</div>
                    <table className="w-full text-[1.1rem]">
                      <thead>
                        <tr className="text-aon-gray-04 border-b border-aon-gray-06">
                          <th className="text-left py-[0.4rem] w-[10rem]"></th>
                          <th className="text-left py-[0.4rem]">Cigna</th>
                          <th className="text-left py-[0.4rem]">Allianz</th>
                          <th className="text-left py-[0.4rem]">MetLife</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-aon-gray-06">
                        <tr>
                          <td className="py-[0.4rem] text-aon-gray-03">Premium</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.cigna.premium}</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.allianz.premium}</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.metlife.premium}</td>
                        </tr>
                        <tr>
                          <td className="py-[0.4rem] text-aon-gray-03">Network</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.cigna.network}</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.allianz.network}</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.metlife.network}</td>
                        </tr>
                        <tr>
                          <td className="py-[0.4rem] text-aon-gray-03">Key Terms</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.cigna.keyTerms}</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.allianz.keyTerms}</td>
                          <td className="py-[0.4rem] text-aon-navy">{cp.metlife.keyTerms}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </section>

            {/* Compliance Checklist */}
            <section>
              <h3 className="text-[1.6rem] font-display font-medium text-aon-navy mb-[0.8rem] pb-[0.4rem] border-b border-aon-gray-06">
                Compliance Checklist
              </h3>
              <div className="grid grid-cols-2 gap-x-[2.4rem] gap-y-[0.4rem]">
                {complianceChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-[0.8rem] text-[1.1rem] text-aon-gray-01">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-aon-success shrink-0">
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
              <h3 className="text-[1.6rem] font-display font-medium text-aon-navy mb-[0.8rem] pb-[0.4rem] border-b border-aon-gray-06">
                Broker Review Notes
              </h3>
              <div className="border border-dashed border-aon-gray-05 rounded-[0.4rem] p-[1.2rem] text-[1.2rem] text-aon-gray-04 italic">
                No notes added
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Broker Notes Input */}
      <div className="mb-[2.4rem]">
        <label className="text-[1.1rem] font-medium text-aon-gray-03 uppercase tracking-[0.12em] mb-[0.8rem] block">
          Broker review notes — anything to flag before sending?
        </label>
        <textarea
          className="w-full border border-aon-gray-05 rounded-[0.6rem] p-[1.6rem] text-[1.4rem] text-aon-navy bg-white resize-none focus:outline-none focus:border-aon-teal transition-colors leading-[2.2rem]"
          rows={3}
          placeholder="Add any notes for the client record…"
        />
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-[1.2rem]">
        <button className="border border-aon-red text-aon-red px-[2.4rem] py-[1.6rem] rounded-[0.4rem] text-[1.4rem] font-medium hover:bg-aon-red/5 transition-colors">
          Edit RSR
        </button>
        <button
          onClick={onNext}
          className="bg-aon-red text-white px-[2.4rem] py-[1.6rem] rounded-[0.4rem] text-[1.4rem] font-medium hover:bg-[#d00015] transition-colors flex items-center gap-[0.8rem] border border-aon-red"
        >
          Approve and Send to Client
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
