"use client";

import { quoteFiles } from "@/data/quotes";

interface StateUploadProps {
  onNext: () => void;
}

export default function StateUpload({ onNext }: StateUploadProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.15em] text-aon-teal font-medium mb-1">New Renewal</div>
        <h1 className="text-3xl font-display font-medium text-aon-navy tracking-tight">iRobot Corporation</h1>
        <p className="text-sm text-aon-gray-02 mt-1">
          Mid-Market Multinational Practice &middot; ~1,200 lives &middot; US + DE + JP + CN &middot; Effective 1/1/2027
        </p>
      </div>

      {/* Quote Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {quoteFiles.map((q, i) => (
          <div
            key={i}
            className="border border-aon-gray-05 rounded-lg p-4 bg-white hover:border-aon-gray-04 transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm font-medium text-aon-navy">{q.carrier}</div>
              <span className="text-[10px] font-medium bg-aon-red/8 text-aon-red px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 ml-2">
                PDF
              </span>
            </div>
            <div className="text-[11px] text-aon-gray-03 font-mono truncate" title={q.filename}>{q.filename}</div>
            <div className="flex items-center gap-2 text-[11px] text-aon-gray-04 mt-2">
              <span>{q.size}</span>
              <span>&middot;</span>
              <span>{q.uploaded}</span>
            </div>
            <div className="mt-auto pt-3 flex items-center gap-1.5 text-aon-success text-xs">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3.5 6L5.5 8L8.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Uploaded
            </div>
          </div>
        ))}
      </div>

      {/* Prompt */}
      <div className="mb-8">
        <label className="text-[11px] font-medium text-aon-gray-03 uppercase tracking-[0.12em] mb-2 block">
          Agent Instructions
        </label>
        <textarea
          className="w-full border border-aon-gray-05 rounded-md p-4 text-sm text-aon-navy bg-aon-gray-08 resize-none focus:outline-none focus:border-aon-teal transition-colors"
          rows={3}
          defaultValue="Compare these three quotes for iRobot's 1/1/2027 renewal. Generate a recommendation and draft the RSR."
          readOnly
        />
      </div>

      {/* CTA — Aon red primary */}
      <button
        onClick={onNext}
        className="bg-aon-red text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#d00015] transition-colors inline-flex items-center gap-2 border border-aon-red"
      >
        Run Digital Placement Agent
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
