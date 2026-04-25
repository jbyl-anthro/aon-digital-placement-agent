"use client";

import { quoteFiles } from "@/data/quotes";

interface StateUploadProps {
  onNext: () => void;
}

export default function StateUpload({ onNext }: StateUploadProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-aon-navy">New Renewal — iRobot Corporation</h1>
        <p className="text-sm text-gray-500 mt-1">
          Mid-Market Multinational Practice &middot; ~1,200 lives &middot; US + DE + JP + CN &middot; Effective 1/1/2027
        </p>
      </div>

      {/* Quote Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {quoteFiles.map((q, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-4 bg-white hover:border-gray-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-sm font-medium text-aon-navy">{q.carrier}</div>
              <span className="text-[10px] font-medium bg-red-50 text-aon-red px-1.5 py-0.5 rounded uppercase tracking-wider">
                PDF
              </span>
            </div>
            <div className="text-xs text-gray-500 mb-1 font-mono">{q.filename}</div>
            <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-3">
              <span>{q.size}</span>
              <span>&middot;</span>
              <span>{q.uploaded}</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-emerald-600 text-xs">
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
        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
          Agent Instructions
        </label>
        <textarea
          className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-700 bg-aon-bg resize-none focus:outline-none focus:ring-2 focus:ring-aon-navy/20 focus:border-aon-navy/30"
          rows={3}
          defaultValue="Compare these three quotes for iRobot's 1/1/2027 renewal. Generate a recommendation and draft the RSR."
          readOnly
        />
      </div>

      {/* CTA */}
      <button
        onClick={onNext}
        className="bg-aon-navy text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-aon-navy/90 transition-colors flex items-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Run Digital Placement Agent
      </button>
    </div>
  );
}
