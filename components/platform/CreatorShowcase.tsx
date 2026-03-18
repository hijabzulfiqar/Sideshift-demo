"use client";
import { useRef, useState } from "react";

export interface ShowcaseVideo {
  src: string;
  /** Optional creator name overlay */
  creator?: string;
  /** Optional platform badge (e.g. "TikTok", "Instagram") */
  platform?: string;
}

interface CreatorShowcaseProps {
  videos: ShowcaseVideo[];
  heading?: string;
  subheading?: string;
}

/**
 * Auto-switching layout based on video count:
 *  - 6+  → Carousel (horizontal scroll with arrows)
 *  - 3-5 → Centered row
 *  - 1-2 → Two-up pair
 */
export default function CreatorShowcase({
  videos,
  heading = "Creator Content That Converts",
  subheading,
}: CreatorShowcaseProps) {
  const count = videos.length;
  if (count === 0) return null;

  const mode: "carousel" | "centered" | "pair" =
    count >= 6 ? "carousel" : count >= 3 ? "centered" : "pair";

  return (
    <section className="relative py-16 md:py-24">
      <div className="px-global">
        <div className="max-w-global mx-auto">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="max-[375px]:text-[28px] max-[320px]:text-[24px]">
              {heading}
            </h2>
            {subheading && (
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-500 md:text-base">
                {subheading}
              </p>
            )}
          </div>

          {mode === "carousel" && <CarouselLayout videos={videos} />}
          {mode === "centered" && <CenteredRowLayout videos={videos} />}
          {mode === "pair" && <TwoUpLayout videos={videos} />}
        </div>
      </div>
    </section>
  );
}

/* ── Video card shared by all layouts ── */

function VideoCard({
  video,
  className = "",
}: {
  video: ShowcaseVideo;
  className?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function toggle() {
    const el = videoRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      el.play();
      setIsPlaying(true);
    }
  }

  return (
    <div
      className={`group relative aspect-[9/16] flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 ${className}`}
    >
      <video
        ref={videoRef}
        src={video.src}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        onClick={toggle}
      />

      {/* Play button overlay */}
      {!isPlaying && (
        <button
          onClick={toggle}
          className="absolute inset-0 z-10 flex items-center justify-center"
          aria-label="Play video"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path
                d="M17 10L1 19V1L17 10Z"
                fill="#202020"
                stroke="#202020"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      )}

      {/* Bottom info bar */}
      {(video.creator || video.platform) && (
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
          <div className="flex items-end justify-between gap-2">
            {video.creator && (
              <span className="text-sm font-semibold text-white">
                {video.creator}
              </span>
            )}
            {video.platform && (
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                {video.platform}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Carousel layout (6+ videos) ── */

function CarouselLayout({ videos }: { videos: ShowcaseVideo[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-3 overflow-x-auto scroll-smooth pb-4 md:gap-4"
      >
        {videos.map((v, i) => (
          <VideoCard
            key={i}
            video={v}
            className="w-[200px] md:w-[220px] lg:w-[240px]"
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 -left-4 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg md:flex"
        aria-label="Scroll left"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="rotate-180"
        >
          <path
            d="M6 3l5 5-5 5"
            stroke="#202020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 -right-4 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg md:flex"
        aria-label="Scroll right"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 3l5 5-5 5"
            stroke="#202020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

/* ── Centered row layout (3-5 videos) ── */

function CenteredRowLayout({ videos }: { videos: ShowcaseVideo[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      {videos.map((v, i) => (
        <VideoCard
          key={i}
          video={v}
          className="w-[180px] md:w-[200px] lg:w-[220px]"
        />
      ))}
    </div>
  );
}

/* ── Two-up pair layout (1-2 videos) ── */

function TwoUpLayout({ videos }: { videos: ShowcaseVideo[] }) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      {videos.map((v, i) => (
        <VideoCard
          key={i}
          video={v}
          className="w-[220px] md:w-[260px] lg:w-[280px]"
        />
      ))}
    </div>
  );
}
