"use client";

import { quoteFiles } from "@/data/quotes";

interface StateUploadProps {
  onNext: () => void;
}

export default function StateUpload({ onNext }: StateUploadProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-[3.2rem]">
        <div className="text-[1.2rem] uppercase tracking-[0.15em] text-aon-teal font-medium mb-[0.8rem]">New Renewal</div>
        <h1 className="text-[3.2rem] leading-[3.6rem] font-display font-medium text-aon-navy tracking-[-0.02em]">iRobot Corporation</h1>
        <p className="text-[1.4rem] text-aon-gray-02 mt-[0.8rem] leading-[2.2rem]">
          Mid-Market Multinational Practice &middot; ~1,200 lives &middot; US + DE + JP + CN &middot; Effective 1/1/2027
        </p>
      </div>

      {/* Quote Cards */}
      <div className="grid grid-cols-3 gap-[1.6rem] mb-[3.2rem]">
        {quoteFiles.map((q, i) => (
          <div
            key={i}
            className="border border-aon-gray-05 rounded-[0.8rem] p-[2rem] bg-white hover:border-aon-gray-04 transition-colors"
          >
            <div className="flex items-start justify-between mb-[1.2rem]">
              <div className="text-[1.4rem] font-medium text-aon-navy">{q.carrier}</div>
              <span className="text-[1rem] font-medium bg-aon-red/8 text-aon-red px-[0.8rem] py-[0.2rem] rounded-[0.2rem] uppercase tracking-[0.1em]">
                PDF
              </span>
            </div>
            <div className="text-[1.1rem] text-aon-gray-03 mb-[0.4rem] font-mono">{q.filename}</div>
            <div className="flex items-center gap-[1.2rem] text-[1.1rem] text-aon-gray-04 mt-[1.2rem]">
              <span>{q.size}</span>
              <span>&middot;</span>
              <span>{q.uploaded}</span>
            </div>
            <div className="mt-[1.2rem] flex items-center gap-[0.6rem] text-aon-success text-[1.2rem]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4.5 7L6.5 9L9.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Uploaded
            </div>
          </div>
        ))}
      </div>

      {/* Prompt */}
      <div className="mb-[3.2rem]">
        <label className="text-[1.1rem] font-medium text-aon-gray-03 uppercase tracking-[0.12em] mb-[0.8rem] block">
          Agent Instructions
        </label>
        <textarea
          className="w-full border border-aon-gray-05 rounded-[0.6rem] p-[1.6rem] text-[1.4rem] text-aon-navy bg-aon-gray-08 resize-none focus:outline-none focus:border-aon-teal transition-colors leading-[2.2rem]"
          rows={3}
          defaultValue="Compare these three quotes for iRobot's 1/1/2027 renewal. Generate a recommendation and draft the RSR."
          readOnly
        />
      </div>

      {/* CTA — Aon red primary */}
      <button
        onClick={onNext}
        className="bg-aon-red text-white px-[2.4rem] py-[1.6rem] rounded-[0.4rem] text-[1.4rem] font-medium hover:bg-[#d00015] transition-colors flex items-center gap-[0.8rem] border border-aon-red"
      >
        Run Digital Placement Agent
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
