"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface SanityCaseStudy {
  slug: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl?: string | null;
}

interface SanityCaseStudyRowProps {
  heading?: string;
  limit?: number;
}

export default function SanityCaseStudyRow({
  heading = "See How Brands Are Growing with SideShift",
  limit = 3,
}: SanityCaseStudyRowProps) {
  const [studies, setStudies] = useState<SanityCaseStudy[]>([]);

  useEffect(() => {
    fetch(`/api/sanity-proxy?type=casestudies&limit=${limit}`)
      .then((res) => res.json())
      .then((data: SanityCaseStudy[]) => setStudies(data))
      .catch(console.error);
  }, [limit]);

  if (studies.length === 0) return null;

  return (
    <section className="relative py-16 md:py-24">
      <div className="px-global">
        <div className="max-w-global mx-auto">
          <h2 className="mb-8 text-center max-[375px]:text-[28px] max-[320px]:text-[24px] md:mb-12">
            {heading}
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/casestudies/${study.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 transition-shadow duration-300 hover:shadow-md md:p-6"
                style={{
                  boxShadow:
                    "0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.04)",
                }}
              >
                {study.thumbnailUrl && (
                  <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-50">
                    <img
                      src={study.thumbnailUrl}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {study.category && (
                  <span className="mb-2 text-[12px] font-medium tracking-[0.04em] uppercase text-[rgba(32,32,32,0.5)]">
                    {study.category}
                  </span>
                )}

                <h3 className="line-clamp-2 text-[15px] leading-snug font-semibold text-gray-900 md:text-base">
                  {study.title}
                </h3>

                {study.description && (
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-gray-500 md:text-sm">
                    {study.description}
                  </p>
                )}

                <div className="mt-4 flex items-center gap-1 text-sm font-bold text-[#202020]">
                  Read More
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 5h8.5M6.5 1.5 10 5l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/casestudies">
              <Button variant="secondary">
                <span>Explore All Case Studies</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
