"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import type { Article, ArticlesContent } from "@/types/platform";

interface RelatedArticlesProps {
  content: ArticlesContent;
  articles: Article[];
}

export default function RelatedArticles({ content, articles }: RelatedArticlesProps) {
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({});
  const slugKey = useMemo(() => articles.map((a) => a.slug).join(","), [articles]);

  useEffect(() => {
    if (!slugKey) return;
    fetch(`/api/sanity-proxy?type=blog-thumbnails&slugs=${encodeURIComponent(slugKey)}`)
      .then((res) => res.json())
      .then((map: Record<string, string>) => setThumbnails(map))
      .catch(console.error);
  }, [slugKey]);

  return (
    <section id="related-articles" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <div className="flex flex-col items-center gap-3 text-center md:gap-4">
              <SectionLabel>{content.label}</SectionLabel>
              <h2>{content.heading}</h2>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="platform-feature-card group flex flex-col gap-4 rounded-2xl p-5 transition-shadow hover:shadow-md md:p-6"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f1f3f5]">
                    {thumbnails[article.slug] && (
                      <img
                        src={thumbnails[article.slug]}
                        alt={article.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <span className="text-[12px] font-medium tracking-[0.04em] uppercase text-[rgba(32,32,32,0.5)]">
                    {article.category}
                  </span>
                  <h3 className="text-[16px] leading-[1.3] font-bold text-[#202020] group-hover:text-[rgba(32,32,32,0.8)] md:text-[18px]">
                    {article.title}
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-[rgba(32,32,32,0.6)] md:text-[14px]">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto text-[13px] font-medium text-[rgba(32,32,32,0.4)]">
                    {article.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
