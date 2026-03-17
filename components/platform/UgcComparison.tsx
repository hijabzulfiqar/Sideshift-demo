import React from "react";
import SectionLabel from "./SectionLabel";
import type { ComparisonRow, UgcComparisonContent } from "@/types/platform";

interface UgcComparisonProps {
  content: UgcComparisonContent;
  rows: ComparisonRow[];
}

export default function UgcComparison({ content, rows }: UgcComparisonProps) {
  return (
    <section id="ugc-comparison" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-3 text-center md:gap-4">
              <SectionLabel>{content.label}</SectionLabel>
              <h2>{content.heading}</h2>
              <p className="max-w-[600px] text-[14px] leading-[1.5] text-[rgba(32,32,32,0.6)] md:text-base">
                {content.description}
              </p>
            </div>

            {/* Mobile Cards */}
            <div className="w-full space-y-3 md:hidden">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-black/[0.06] bg-white"
                >
                  <div className="bg-[#f5f5f5] px-4 py-2.5">
                    <span className="text-sm font-bold text-[#202020]">
                      {row.category}
                    </span>
                  </div>
                  <div className="flex flex-col divide-y divide-black/[0.06]">
                    <div className="flex items-start gap-2 px-4 py-3">
                      <span className="shrink-0 rounded-full bg-[#202020] px-2 py-0.5 text-[11px] font-semibold text-white">
                        UGC
                      </span>
                      <span className="text-sm leading-snug text-[#202020]">
                        {row.ugc}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 px-4 py-3">
                      <span className="shrink-0 rounded-full bg-[#e0e0e0] px-2 py-0.5 text-[11px] font-semibold text-[rgba(32,32,32,0.6)]">
                        Traditional
                      </span>
                      <span className="text-sm leading-snug text-[rgba(32,32,32,0.5)]">
                        {row.traditional}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden w-full md:block">
              <div className="mx-auto" style={{ maxWidth: "960px" }}>
                <div className="grid grid-cols-[200px_1fr_1fr] gap-x-6">
                  <div />
                  <div className="pb-3">
                    <span className="text-base font-bold text-[#202020]">
                      {content.ugcColumnHeader}
                    </span>
                  </div>
                  <div className="pb-3">
                    <span className="text-base font-bold text-[#202020]">
                      {content.traditionalColumnHeader}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-[200px_1fr_1fr] gap-x-6">
                  <div />
                  <div className="h-[3px] bg-[#202020]" />
                  <div className="h-[3px] bg-[#202020]" />
                </div>

                {rows.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[200px_1fr_1fr] gap-x-6"
                  >
                    <div className="flex items-center py-4">
                      <span className="text-[15px] font-bold text-[#202020]">
                        {row.category}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center border-b border-[#e0e0e0] py-4">
                      <span className="text-[15px] text-[#202020]">
                        {row.ugc}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center border-b border-[#e0e0e0] py-4">
                      <span className="text-[15px] text-[rgba(32,32,32,0.5)]">
                        {row.traditional}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
