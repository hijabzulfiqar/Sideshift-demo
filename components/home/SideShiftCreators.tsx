"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  categories,
  categoryIcons,
  countries,
  creatorsData,
  industryFilters,
  platformLinks,
} from "@/data/creators";

function SideShiftCreators({
  platformMode = false,
  marketplaceMode = false,
  autoplayVideos = false,
  heading,
  subheading,
  badgeLabel,
  defaultCategory = "health",
  hideFilters = false,
}: {
  platformMode?: boolean;
  marketplaceMode?: boolean;
  autoplayVideos?: boolean;
  /** Override the default heading */
  heading?: string;
  /** Optional subheading below the heading */
  subheading?: string;
  /** Override category badge on cards (e.g. "Instagram") */
  badgeLabel?: string;
  /** Set the initially active category (e.g. "fashion", "tech", "gaming") */
  defaultCategory?: string;
  /** Hide all filter UI (countries, category tabs) — still filters by defaultCategory */
  hideFilters?: boolean;
} = {}) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const snapRef = useRef(false);

  // ── Refs ──
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isSwiping = useRef(false);
  const didSwipe = useRef(false);

  // ── Category dropdown state (mobile) ──
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allCategoryCreators = creatorsData.filter(
    (c) => c.category === activeCategory,
  );
  const baseCreators = platformMode ? creatorsData : allCategoryCreators;

  const count = baseCreators.length;

  const COPIES = 7;
  const extended = Array.from({ length: COPIES }, () => baseCreators).flat();

  const middleStart = count * 3 + 3;
  const [activeIndex, setActiveIndex] = useState(middleStart);

  useEffect(() => {
    snapRef.current = true;
    setActiveIndex(count * 3 + 3);
  }, [activeCategory, count]);

  useEffect(() => {
    const setIndex = Math.floor(activeIndex / count);
    if (setIndex < 2 || setIndex >= COPIES - 2) {
      const posInSet = activeIndex % count;
      const newIndex = count * 3 + posInSet;
      const timer = setTimeout(() => {
        snapRef.current = true;
        setActiveIndex(newIndex);
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, count]);

  const handleVideoToggle = useCallback(
    (creatorId: number) => {
      if (autoplayVideos) return;

      if (playingVideoId !== null && playingVideoId !== creatorId) {
        const prevVideo = videoRefs.current.get(playingVideoId);
        if (prevVideo) prevVideo.pause();
      }

      const video = videoRefs.current.get(creatorId);
      if (!video) return;

      if (playingVideoId === creatorId) {
        video.pause();
        setPlayingVideoId(null);
      } else {
        video.play();
        setPlayingVideoId(creatorId);
      }
    },
    [autoplayVideos, playingVideoId],
  );

  // ── Mute/unmute ──
  // Start muted so autoplay works, then unmute on first user interaction
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const unmute = () => {
      setIsMuted(false);
      window.removeEventListener("click", unmute);
      window.removeEventListener("touchstart", unmute);
      window.removeEventListener("pointerdown", unmute);
    };
    window.addEventListener("click", unmute, { once: true });
    window.addEventListener("touchstart", unmute, { once: true });
    window.addEventListener("pointerdown", unmute, { once: true });
    return () => {
      window.removeEventListener("click", unmute);
      window.removeEventListener("touchstart", unmute);
      window.removeEventListener("pointerdown", unmute);
    };
  }, []);

  // Sync muted state to all video elements
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      video.muted = isMuted;
    });
  }, [isMuted]);

  // ── Autoplay the active (center) video when index changes ──
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (autoplayVideos || !isInView) return;
    const activeCreator = extended[activeIndex];
    if (!activeCreator) return;

    // Pause previous video when swiping to a different card
    if (playingVideoId !== null && playingVideoId !== activeCreator.id) {
      const prevVideo = videoRefs.current.get(playingVideoId);
      if (prevVideo) prevVideo.pause();
    }

    // Auto-play the newly active card's video
    const activeVideo = videoRefs.current.get(activeCreator.id);
    if (activeVideo) {
      activeVideo.play().catch(() => {});
      setPlayingVideoId(activeCreator.id);
    }
  }, [activeIndex, isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Start/stop playback when section scrolls in/out of view ──
  useEffect(() => {
    const el = carouselRef.current;
    if (!el || autoplayVideos) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Auto-play the active card's video when section comes into view
          const activeCreator = extended[activeIndex];
          if (activeCreator) {
            const activeVideo = videoRefs.current.get(activeCreator.id);
            if (activeVideo) {
              activeVideo.play().catch(() => {});
              setPlayingVideoId(activeCreator.id);
            }
          }
        } else {
          // Pause ALL videos when scrolled away
          videoRefs.current.forEach((video) => video.pause());
          setPlayingVideoId(null);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoplayVideos]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Close dropdown on outside click ──
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // ── Pointer-based swipe (works on real mobile + DevTools simulation) ──
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
    isSwiping.current = false;
    didSwipe.current = false;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = Math.abs(e.clientX - touchStartX.current);
    const dy = Math.abs(e.clientY - touchStartY.current);
    if (dx > dy && dx > 10) {
      isSwiping.current = true;
      // Prevent vertical scroll while swiping horizontally
      e.preventDefault();
    }
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    if (touchStartX.current === null) return;
    const dx = e.clientX - touchStartX.current;
    const threshold = 30;
    if (isSwiping.current && Math.abs(dx) > threshold) {
      didSwipe.current = true;
      if (dx < 0) setActiveIndex((i) => i + 1);
      else setActiveIndex((i) => i - 1);
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current = false;
  }, []);

  const showCategoryBadge = !platformMode || !!badgeLabel;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#E0F5FF_30%,#D0EDFF_50%,#E0F5FF_70%,#FFFFFF_100%)] py-16 md:py-24">
      <div className="px-global">
        <div className="max-w-global mx-auto">
          {marketplaceMode && (
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm font-medium tracking-normal text-gray-500 md:text-base">
                  Browse creators by platform:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {platformLinks.map((p) => (
                    <Link
                      key={p.label}
                      href={p.href}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-gray-800 transition-shadow hover:shadow-sm"
                    >
                      {p.icon}
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <p className="text-sm font-medium tracking-normal text-gray-500 md:text-base">
                  Browse by industry:
                </p>

                {/* Desktop: pill buttons */}
                <div className="hidden flex-wrap items-center justify-center gap-2 md:flex">
                  {industryFilters.map((ind) => (
                    <button
                      key={ind.label}
                      onClick={() => setActiveCategory(ind.categoryId)}
                      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-all md:px-4 md:py-2.5 md:text-[15px] ${
                        activeCategory === ind.categoryId
                          ? "border-gray-200 bg-white text-gray-900 shadow-sm"
                          : "border-transparent bg-transparent text-gray-700 hover:border-gray-200 hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <span
                        className={
                          activeCategory === ind.categoryId
                            ? "text-gray-900"
                            : "text-gray-700"
                        }
                      >
                        {categoryIcons[ind.categoryId]}
                      </span>
                      {ind.label}
                    </button>
                  ))}
                </div>

                {/* Mobile: dropdown */}
                <div
                  className="relative w-full max-w-sm md:hidden"
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      {categoryIcons[activeCategory]}
                      {industryFilters.find(
                        (f) => f.categoryId === activeCategory,
                      )?.label ??
                        categories.find((c) => c.id === activeCategory)?.label}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="mt-2 rounded-2xl border border-gray-200 bg-white py-1 shadow-lg">
                      {industryFilters.map((ind) => (
                        <button
                          key={ind.label}
                          onClick={() => {
                            setActiveCategory(ind.categoryId);
                            setDropdownOpen(false);
                          }}
                          className={`flex w-full cursor-pointer items-center gap-2.5 px-5 py-2.5 text-left text-sm font-medium transition-colors ${
                            activeCategory === ind.categoryId
                              ? "bg-gray-50 text-gray-900"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {categoryIcons[ind.categoryId]}
                          {ind.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {!platformMode && !marketplaceMode && !hideFilters && (
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-medium tracking-normal text-gray-500 md:text-base">
                Meet our creators from:
              </p>
              <div className="inline-flex items-center justify-center gap-1 rounded-full border border-gray-100 bg-white/80 px-1.5 py-1.5 shadow-sm backdrop-blur-sm">
                {countries.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <c.Flag />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <h2
            className={`${platformMode || marketplaceMode ? "" : "mt-8 md:mt-12"} ${marketplaceMode ? "mt-8 md:mt-10" : ""} text-center max-[375px]:text-[28px] max-[320px]:text-[24px]`}
          >
            {heading ?? (
              <>
                Creator marketing starts
                <br className="hidden sm:block" /> with proven talent
              </>
            )}
          </h2>
          {subheading && (
            <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-gray-500 md:text-base">
              {subheading}
            </p>
          )}

          {!platformMode && !marketplaceMode && !hideFilters && (
            <>
              {/* Desktop: pill buttons */}
              <div className="mx-auto mt-8 hidden max-w-[1000px] flex-wrap items-center justify-center gap-1 md:mt-12 md:flex">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-all md:px-4 md:py-2.5 md:text-[15px] ${
                      activeCategory === cat.id
                        ? "border-gray-200 bg-white text-gray-900 shadow-sm"
                        : "border-transparent bg-transparent text-gray-700"
                    }`}
                  >
                    <span
                      className={
                        activeCategory === cat.id
                          ? "text-gray-900"
                          : "text-gray-700"
                      }
                    >
                      {categoryIcons[cat.id]}
                    </span>
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Mobile: dropdown */}
              <div
                className="relative mx-auto mt-6 w-full max-w-xs md:hidden"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    {categoryIcons[activeCategory]}
                    {categories.find((c) => c.id === activeCategory)?.label}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-gray-200 bg-white py-1 shadow-lg">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setDropdownOpen(false);
                        }}
                        className={`flex w-full cursor-pointer items-center gap-2.5 px-5 py-2.5 text-left text-sm font-medium transition-colors ${
                          activeCategory === cat.id
                            ? "bg-gray-50 text-gray-900"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {categoryIcons[cat.id]}
                        {cat.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div
        ref={carouselRef}
        className="relative mt-10 h-[520px] overflow-hidden md:mt-14 md:h-[580px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {extended.map((creator, index) => {
            const offset = index - activeIndex;
            if (Math.abs(offset) > 5) return null;

            const isActive = offset === 0;
            const useTransition = !snapRef.current;
            if (snapRef.current && offset === 0) {
              requestAnimationFrame(() => {
                snapRef.current = false;
              });
            }

            const FlagIcon = creator.countryFlag;
            const categoryLabel = categories.find(
              (c) => c.id === creator.category,
            )?.label;

            const cardWidth = 285;
            const gap = 12;
            const translateX = offset * (cardWidth + gap);

            return (
              <div
                key={`${creator.id}-${index}`}
                onClick={() => {
                  if (didSwipe.current) {
                    didSwipe.current = false;
                    return;
                  }
                  if (isActive && !autoplayVideos) {
                    handleVideoToggle(creator.id);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                className="absolute flex h-full cursor-pointer items-center justify-center"
                style={{
                  width: cardWidth,
                  transform: `translateX(${translateX}px)`,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  transition: useTransition ? "all 0.5s ease-out" : "none",
                }}
              >
                <div
                  style={{
                    padding: isActive ? 6 : 0,
                    border: isActive
                      ? "0.8px solid rgba(255,255,255,0.8)"
                      : "0.8px solid transparent",
                    borderRadius: isActive ? 52 : 500,
                    transform: isActive ? "scale(1)" : "scale(0.84)",
                    opacity: isActive ? 1 : 0.9,
                    height: isActive ? "82%" : "78%",
                    width: "100%",
                    transition: useTransition ? "all 0.5s ease-out" : "none",
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[52px]">
                    {showCategoryBadge && (
                      <div
                        className={`absolute top-4 left-1/2 z-20 -translate-x-1/2 rounded-full px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap ${isActive ? "bg-white/80 text-gray-800 backdrop-blur-md shadow-sm" : "bg-white/30 text-white backdrop-blur-md border border-white/30"}`}
                      >
                        {badgeLabel ?? categoryLabel}
                      </div>
                    )}

                    <video
                      ref={(el) => {
                        if (el) videoRefs.current.set(creator.id, el);
                      }}
                      src={creator.video}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ aspectRatio: "8 / 16" }}
                      muted={isMuted}
                      loop
                      playsInline
                      autoPlay={autoplayVideos}
                      preload="auto"
                    />

                    {/* Active card: mute toggle (top-right) — only when playing */}
                    {isActive && playingVideoId === creator.id && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted((m) => !m);
                        }}
                        className="absolute top-3 right-5 z-30 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <line x1="23" y1="9" x2="17" y2="15" />
                            <line x1="17" y1="9" x2="23" y2="15" />
                          </svg>
                        ) : (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                        )}
                      </button>
                    )}

                    {/* Active card: play icon (center) — only when paused */}
                    {isActive &&
                      !autoplayVideos &&
                      playingVideoId !== creator.id && (
                        <div className="absolute inset-0 z-15 flex items-center justify-center pointer-events-none">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/20 shadow-lg">
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 18 20"
                              fill="none"
                              className="ml-0.5"
                            >
                              <path
                                d="M17 10L1 19V1L17 10Z"
                                fill="white"
                                fillOpacity="0.9"
                              />
                            </svg>
                          </div>
                        </div>
                      )}

                    <div
                      className={`absolute inset-0 -z-10 bg-gradient-to-br ${creator.gradient}`}
                    />

                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
                    )}

                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 z-20 p-3">
                        <div className="flex items-center justify-between gap-2 rounded-[14px] bg-white/40 px-2.5 py-2 backdrop-blur-sm">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[13px] font-semibold text-gray-900">
                              {creator.name}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] text-gray-800">
                              {creator.rating}
                              <svg
                                width="11"
                                height="11"
                                viewBox="0 0 20 20"
                                fill="#f59e0b"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.274-3.957z" />
                              </svg>
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] text-gray-800">
                              <FlagIcon />
                              {creator.country}
                            </span>
                          </div>
                          <div
                            className={`h-9 w-9 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-gray-200 bg-gradient-to-br ${creator.gradient}`}
                          >
                            {creator.image ? (
                              <Image
                                src={creator.image}
                                alt={creator.name}
                                width={36}
                                height={36}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-sm font-bold leading-none text-white/80">
                                {creator.name[0]}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex justify-center md:mt-6">
        <Link href="https://app.sideshift.app/signup">
          <button className="cta-button-dark cursor-pointer rounded-full border border-[#202020] px-6 py-3 text-base font-bold text-white transition-all active:scale-98">
            Explore creators - it&apos;s free!
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SideShiftCreators;
