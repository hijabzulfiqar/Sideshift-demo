"use client";

import Link from "next/link";

const caseStudies = [
  {
    name: "Remini",
    metric: "20M",
    metricLabel: "installs in 60 days",
    highlight: "20x growth",
    description:
      "Remini leveraged SideShift\u2019s creator network to drive 20M installs in just 60 days, achieving 20x growth through high-volume UGC campaigns.",
    category: "Mobile App",
  },
  {
    name: "Photogeniq",
    metric: "69M",
    metricLabel: "views",
    highlight: "100x user growth",
    description:
      "Photogeniq scaled to 69M views and 100x user growth by running authentic creator content at volume through SideShift.",
    category: "Consumer App",
  },
  {
    name: "GPTZero",
    metric: "45M",
    metricLabel: "views in 30 days",
    highlight: "600+ TikToks",
    description:
      "GPTZero generated 45M views in 30 days with 600+ TikToks created by SideShift creators, driving massive organic awareness.",
    category: "AI / SaaS",
  },
  {
    name: "Brex",
    metric: "5.1M",
    metricLabel: "views",
    highlight: "sub-$5 CPM, 3x top-of-funnel",
    description:
      "Brex achieved 5.1M views at sub-$5 CPM and 3x top-of-funnel growth through SideShift\u2019s creator-powered campaigns.",
    category: "Fintech",
  },
  {
    name: "Cerca",
    metric: "Top 150",
    metricLabel: "App Store",
    highlight: "4x installs in 4 weeks",
    description:
      "Cerca broke into the App Store Top 150 and achieved 4x installs in just 4 weeks using SideShift creators.",
    category: "Social App",
  },
  {
    name: "YikYak",
    metric: "25M",
    metricLabel: "views",
    highlight: "12.3% engagement rate",
    description:
      "YikYak hit 25M views with a 12.3% engagement rate through authentic UGC content powered by SideShift.",
    category: "Social App",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Header */}
            <h2 className="max-w-[20ch] text-center max-[375px]:text-[28px]">
              Real Results From Real Companies
            </h2>

            {/* 3x2 Grid — same card design as SanityCaseStudyRow */}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div
                  key={study.name}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 transition-shadow duration-300 hover:shadow-md md:p-6"
                  style={{
                    boxShadow:
                      "0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.04)",
                  }}
                >
                  <div>
                    <span className="mb-2 block text-[12px] font-medium tracking-[0.04em] uppercase text-[rgba(32,32,32,0.5)]">
                      {study.category}
                    </span>

                    <div className="mb-2">
                      <span className="text-[36px] leading-[1] font-extrabold tracking-tight md:text-[44px]">
                        {study.metric}
                      </span>
                      <span className="ml-1.5 text-[14px] text-[rgba(32,32,32,0.55)] md:text-base">
                        {study.metricLabel}
                      </span>
                    </div>

                    <p className="line-clamp-2 text-[13px] leading-relaxed text-gray-500 md:text-sm">
                      {study.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-bold text-[#202020]">
                    {study.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
