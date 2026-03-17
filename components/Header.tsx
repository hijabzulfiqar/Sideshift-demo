"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Logo from "@/components/Logo";
import Image from "next/image";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";
import {
  platforms,
  platformFeatures,
  useCases,
  businessTypes,
  industries,
  resources,
} from "@/data/navigation";

// ─── Utility Icons ──────────────────────────────────────────────────

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      className={className}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExtLinkIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 opacity-50"
    >
      <path d="M12 9v4a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4M9 2h5v5M6.5 9.5L14 2" />
    </svg>
  );
}

type DropdownKey = "Platform" | "Solutions" | "Resources";

// ─── Shared Components ──────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 px-2.5 text-[11px] font-semibold tracking-[0.08em] text-[#adb5bd] uppercase">
      {children}
    </div>
  );
}

function MenuLink({
  href,
  icon,
  label,
  desc,
  onClick,
  showArrow,
}: {
  href: string;
  icon?: React.ReactNode;
  label: string;
  desc?: string;
  onClick?: () => void;
  showArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-all hover:bg-[#f8f9fa]"
    >
      {icon}
      <div className="min-w-0 flex-1">
        <div className="text-[13.5px] leading-tight font-medium text-[#212529] transition-colors group-hover:text-[#014163]">
          {label}
        </div>
        {desc && (
          <div className="mt-0.5 text-[12px] leading-[1.4] text-[#868e96]">
            {desc}
          </div>
        )}
      </div>
      {showArrow && (
        <ArrowRightIcon className="shrink-0 text-[#dee2e6] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#014163]" />
      )}
    </Link>
  );
}

// ─── Main Component ─────────────────────────────────────────────────

export default function Header({ isCreator = false, demoMode = false }: { isCreator?: boolean; demoMode?: boolean }) {
  const isBrand = !isCreator;
  const variant = getHeroVariant();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const isMenuOpenRef = useRef(false);
  const lastScrollPosition = useRef(0);
  const ticking = useRef(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobileMenu = () => {
    if (isMenuOpen) {
      headerRef.current?.classList.add("active");
      document.body.classList.remove("mobile-menu-open");
    } else {
      headerRef.current?.classList.remove("active");
      document.body.classList.add("mobile-menu-open");
    }
    setIsMenuOpen(!isMenuOpen);
    isMenuOpenRef.current = !isMenuOpen;
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    isMenuOpenRef.current = false;
    document.body.classList.remove("mobile-menu-open");
    setMobileExpanded(null);
  };

  const handleDropdownEnter = useCallback((label: DropdownKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  }, []);

  const closeDropdown = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(null);
  }, []);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const isDesktop = window.innerWidth >= 1024;
    const delta = isDesktop ? 70 : 100;

    function handleScroll() {
      if (!header) return;
      const currentScrollPosition = window.scrollY;
      if (
        Math.abs(currentScrollPosition - lastScrollPosition.current) > delta
      ) {
        if (currentScrollPosition > lastScrollPosition.current) {
          header.classList.add("menu-hidden");
          if (isMenuOpenRef.current) {
            setIsMenuOpen(false);
            isMenuOpenRef.current = false;
            document.body.classList.remove("mobile-menu-open");
          }
        } else {
          header.classList.remove("menu-hidden");
        }
        // Close desktop dropdown on scroll
        setOpenDropdown(null);
        lastScrollPosition.current = currentScrollPosition;
      }
      ticking.current = false;
    }

    function onScroll() {
      if (!header) return;
      if (!isMenuOpenRef.current) {
        if (!ticking.current) {
          window.requestAnimationFrame(handleScroll);
          ticking.current = true;
        }
      }
      if (window.scrollY > 0) {
        if (!isMenuOpenRef.current) header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }

    if (window.scrollY > 0) header.classList.add("active");
    lastScrollPosition.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // ─── Mobile Accordion ─────────────────────────────────────────

  const MobileAccordion = ({
    id,
    label,
    children,
  }: {
    id: string;
    label: string;
    children: React.ReactNode;
  }) => (
    <div>
      <button
        onClick={() => setMobileExpanded(mobileExpanded === id ? null : id)}
        className="flex w-full items-center justify-between border-b border-[rgba(0,0,0,0.10)] py-[18px] text-left text-base leading-[140%] font-bold tracking-[-0.157px] text-[#202020]"
      >
        <span>{label}</span>
        <span
          className={`flex transition-transform duration-200 ${mobileExpanded === id ? "rotate-180" : ""}`}
        >
          <ChevronDown />
        </span>
      </button>
      <AnimatePresence>
        {mobileExpanded === id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-b border-[rgba(0,0,0,0.10)] px-2 py-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const MobileSection = ({
    label,
    items,
    showIcons,
  }: {
    label: string;
    items: {
      name: string;
      desc: string;
      icon?: React.ReactNode;
      href: string;
    }[];
    showIcons?: boolean;
  }) => (
    <>
      <div className="mb-1 text-[11px] font-semibold tracking-[0.08em] text-[#868e96] uppercase">
        {label}
      </div>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={closeMobileMenu}
          className="flex items-center gap-2.5 py-2"
        >
          {showIcons && item.icon}
          <div>
            <div className="text-[14px] font-medium text-[#212529]">
              {item.name}
            </div>
            <div className="text-[12px] text-[#868e96]">{item.desc}</div>
          </div>
        </Link>
      ))}
    </>
  );

  // ─── Render ───────────────────────────────────────────────────

  return (
    <div className="sticky top-0 z-50 w-full">
      <header
        ref={headerRef}
        className="absolute top-0 z-50 flex h-18 w-full items-center justify-center border-2 border-transparent transition-all duration-500 ease-[cubic-bezier(0.64_-0.01,_0,_1)] will-change-transform sm:h-22"
      >
        <div className="px-global w-full">
          <div className="max-w-global relative z-0 mx-auto">
            <div className="flex items-center justify-between">
              {/* Left: Logo + Nav */}
              <div className="flex items-center gap-3 min-[375px]:gap-5">
                <Link
                  href="/"
                  className="flex items-center gap-1.5"
                  aria-label="SideShift home"
                  onClick={closeMobileMenu}
                >
                  <Logo />
                </Link>

                <nav
                  className="hidden items-center gap-1 lg:flex"
                  aria-label="Primary"
                >
                  {(["Platform", "Solutions"] as DropdownKey[]).map((label) => (
                    <div
                      key={label}
                      onMouseEnter={() => handleDropdownEnter(label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        className={`flex items-center gap-1.5 px-3 py-2 text-base leading-[140%] font-medium whitespace-nowrap transition-colors ${
                          openDropdown === label
                            ? "text-[#202020]"
                            : "text-[rgba(32,32,32,0.75)] hover:text-[#202020]"
                        }`}
                        aria-expanded={openDropdown === label}
                        aria-haspopup="true"
                      >
                        {label}
                        <ChevronDown
                          className={`transition-transform duration-200 ${openDropdown === label ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  ))}

                  <Link
                    href="/pricing"
                    className="px-3 py-2 text-base leading-[140%] text-[rgba(32,32,32,0.75)] transition-colors hover:text-[#202020]"
                  >
                    Pricing
                  </Link>

                  <div
                    onMouseEnter={() => handleDropdownEnter("Resources")}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3 py-2 text-base leading-[140%] font-medium whitespace-nowrap transition-colors ${
                        openDropdown === "Resources"
                          ? "text-[#202020]"
                          : "text-[rgba(32,32,32,0.75)] hover:text-[#202020]"
                      }`}
                      aria-expanded={openDropdown === "Resources"}
                      aria-haspopup="true"
                    >
                      Resources
                      <ChevronDown
                        className={`transition-transform duration-200 ${openDropdown === "Resources" ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                </nav>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">
                <div className="hidden items-center gap-5 lg:flex">
                  <Link
                    href="/creators"
                    className="flex items-center gap-1.5 text-base leading-[140%] text-[rgba(32,32,32,0.75)] transition-colors hover:text-[#202020]"
                  >
                    For Creators <ExtLinkIcon />
                  </Link>
                  <Link
                    href="https://app.sideshift.app/signin"
                    className="font-geist text-base leading-[140%] font-bold text-[#202020] transition-colors hover:text-[#202020]"
                  >
                    Log in
                  </Link>
                  <Link href={demoMode ? "/contact" : "https://app.sideshift.app/signup"}>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        handleCTAClick(
                          demoMode ? "book_demo_header" : "start_free_trial_header",
                          isBrand,
                          variant,
                        )
                      }
                    >
                      <span>{demoMode ? "Book a Demo" : "Start Free Trial"}</span>
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-1.5 min-[375px]:gap-2 lg:hidden">
                  <Link href={demoMode ? "/contact" : "https://app.sideshift.app/signup"}>
                    <Button
                      size="sm"
                      variant="primary"
                      className="px-3 text-[13px] min-[375px]:px-4 min-[375px]:text-[14px]"
                      onClick={() =>
                        handleCTAClick(
                          demoMode ? "book_demo_header" : "start_free_trial_header",
                          isBrand,
                          variant,
                        )
                      }
                    >
                      <span>{demoMode ? "Book a Demo" : "Start Free Trial"}</span>
                    </Button>
                  </Link>
                  <button
                    onClick={toggleMobileMenu}
                    className="shrink-0 rounded-lg transition-colors hover:bg-gray-100"
                    aria-label="Toggle mobile menu"
                  >
                    {isMenuOpen ? (
                      <Image
                        src="/icons/x.avif"
                        width={26}
                        height={26}
                        alt=""
                        className="w-[22px] max-w-none min-[375px]:w-[26px]"
                      />
                    ) : (
                      <Image
                        src="/icons/equal.avif"
                        width={32}
                        height={32}
                        className="w-[26px] max-w-none min-[375px]:w-[32px]"
                        alt=""
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bg absolute top-0 left-0 -z-10 h-full w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.64_-0.01,_0,_1)]"></div>
      </header>

      {/* ─── Desktop Backdrop ─── */}
      <AnimatePresence>
        {openDropdown && (
          <motion.div
            key="megamenu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-30 hidden lg:block"
            onClick={closeDropdown}
          />
        )}
      </AnimatePresence>

      {/* ─── Desktop Megamenu Panel ─── */}
      <AnimatePresence>
        {openDropdown && (
          <motion.div
            key="megamenu-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: [0.2, 0, 0, 1] }}
            className="fixed top-[65.9px] right-0 left-0 z-40 hidden lg:block"
            onMouseEnter={() => handleDropdownEnter(openDropdown)}
            onMouseLeave={handleDropdownLeave}
          >
            {/* Hover bridge — extends hit area upward so mouse can travel from nav buttons to panel */}
            <div
              className="absolute -top-4 right-0 left-0 h-4"
              aria-hidden="true"
            />

            {/* Panel */}
            <div className="px-global pt-2">
              <div className="mx-auto max-w-[980px] overflow-hidden rounded-2xl border border-black/[0.06] bg-white/[0.98] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.03)] backdrop-blur-xl">
                <div className="p-6">
                  {/* ── Platform Panel ── */}
                  {openDropdown === "Platform" && (
                    <div className="grid grid-cols-[1fr_1px_1fr_1px_260px] gap-7">
                      {/* By Platform */}
                      <div>
                        <SectionLabel>By Platform</SectionLabel>
                        <div className="flex flex-col gap-0.5">
                          {platforms.map((p) => (
                            <MenuLink
                              key={p.name}
                              href={p.href}
                              icon={p.icon}
                              label={p.name}
                              desc={p.desc}
                              onClick={closeDropdown}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-b from-transparent via-[#e9ecef] to-transparent" />

                      {/* Platform Features */}
                      <div>
                        <SectionLabel>Platform Features</SectionLabel>
                        <div className="flex flex-col gap-0.5">
                          {platformFeatures.map((f) => (
                            <MenuLink
                              key={f.name}
                              href={f.href}
                              icon={f.icon}
                              label={f.name}
                              desc={f.desc}
                              onClick={closeDropdown}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-b from-transparent via-[#e9ecef] to-transparent" />

                      {/* Featured */}
                      <div>
                        <SectionLabel>Featured</SectionLabel>
                        <Link
                          href="/casestudies"
                          onClick={closeDropdown}
                          className="group mb-2.5 block overflow-hidden rounded-xl border border-black/[0.04] bg-[#f8f9fa] transition-shadow hover:shadow-sm"
                        >
                          <Image
                            src="/assets/home/bento1.avif"
                            width={400}
                            height={200}
                            alt="Photogeniq Case Study"
                            className="h-[80px] w-full object-cover"
                          />
                          <div className="p-3">
                            <div className="text-[13px] font-semibold text-[#212529]">
                              Photogeniq Case Study
                            </div>
                            <div className="text-[11.5px] leading-[1.4] text-[#868e96]">
                              69M views in 30 days.
                            </div>
                            <span className="mt-1.5 flex items-center gap-1 text-[12px] font-semibold text-[#014163]">
                              Read more{" "}
                              <ArrowRightIcon className="text-[#014163] transition-transform duration-200 group-hover:translate-x-0.5" />
                            </span>
                          </div>
                        </Link>
                        <Link
                          href={demoMode ? "/contact" : "https://app.sideshift.app/signup"}
                          onClick={closeDropdown}
                          className="group block rounded-xl bg-[#1a1a2e] p-3 text-white transition-opacity hover:opacity-90"
                        >
                          <div className="text-[13px] font-semibold">
                            {demoMode ? "Book a Demo" : "Start Free Trial"}
                          </div>
                          <div className="mb-2 text-[11.5px] leading-[1.4] text-white/60">
                            {demoMode ? "Talk to our team today." : "Join 1,000+ brands already scaling."}
                          </div>
                          <span className="flex items-center gap-1 text-[12px] font-semibold text-white/70">
                            Get started{" "}
                            <ArrowRightIcon className="text-white/70 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* ── Solutions Panel ── */}
                  {openDropdown === "Solutions" && (
                    <div className="flex flex-col gap-5">
                      {/* Top: Use Cases + Business */}
                      <div className="grid grid-cols-[1fr_1px_1fr] gap-7">
                        {/* By Use Case */}
                        <div>
                          <SectionLabel>By Use Case</SectionLabel>
                          <div className="flex flex-col gap-0.5">
                            {useCases.map((u) => (
                              <MenuLink
                                key={u.name}
                                href={u.href}
                                label={u.name}
                                desc={u.desc}
                                onClick={closeDropdown}
                                showArrow
                              />
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-b from-transparent via-[#e9ecef] to-transparent" />

                        {/* By Business */}
                        <div>
                          <SectionLabel>By Business</SectionLabel>
                          <div className="flex flex-col gap-0.5">
                            {businessTypes.map((b) => (
                              <MenuLink
                                key={b.name}
                                href={b.href}
                                icon={b.icon}
                                label={b.name}
                                desc={b.desc}
                                onClick={closeDropdown}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="mx-2.5 h-px bg-gradient-to-r from-transparent via-[#e9ecef] to-transparent" />

                      {/* Bottom: Industries as compact pills */}
                      <div>
                        <SectionLabel>By Industry</SectionLabel>
                        <div className="mt-1 flex flex-wrap gap-2 px-2.5">
                          {industries.map((ind) => (
                            <Link
                              key={ind.name}
                              href={ind.href}
                              onClick={closeDropdown}
                              className="rounded-full border border-[#e9ecef] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#495057] transition-all duration-200 hover:border-[#014163]/20 hover:bg-[#f0faff] hover:text-[#014163] hover:shadow-sm"
                            >
                              {ind.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Resources Panel ── */}
                  {openDropdown === "Resources" && (
                    <div className="grid grid-cols-[1fr_1px_1fr] gap-7">
                      <div>
                        <SectionLabel>Resources</SectionLabel>
                        <div className="flex flex-col gap-0.5">
                          {resources.map((r) => (
                            <MenuLink
                              key={r.name}
                              href={r.href}
                              label={r.name}
                              desc={r.desc}
                              onClick={closeDropdown}
                              showArrow
                            />
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-b from-transparent via-[#e9ecef] to-transparent" />

                      <div>
                        <SectionLabel>Tools</SectionLabel>
                        <MenuLink
                          href="/roi-calculator"
                          label="ROI Calculator"
                          desc="See what UGC actually delivers"
                          onClick={closeDropdown}
                          showArrow
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 1, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.8, 0, 0.2, 1] }}
            className="fixed top-0 right-0 bottom-0 left-0 z-40 border-b border-gray-200 bg-white shadow-lg will-change-transform"
          >
            <div className="px-global h-full py-6 pt-16">
              <div className="max-w-global mx-auto flex h-full flex-col justify-between">
                <div className="scrollbar-hide overflow-y-auto">
                  <nav className="flex flex-col">
                    <MobileAccordion id="platform" label="Platform">
                      <MobileSection
                        label="By Platform"
                        items={platforms}
                        showIcons
                      />
                      <div className="my-2 h-px bg-[#e9ecef]" />
                      <MobileSection
                        label="Features"
                        items={platformFeatures}
                        showIcons
                      />
                    </MobileAccordion>

                    <MobileAccordion id="solutions" label="Solutions">
                      <MobileSection
                        label="By Business"
                        items={businessTypes}
                        showIcons
                      />
                      <div className="my-2 h-px bg-[#e9ecef]" />
                      <MobileSection label="By Use Case" items={useCases} />
                      <div className="my-2 h-px bg-[#e9ecef]" />
                      <MobileSection label="By Industry" items={industries} />
                    </MobileAccordion>

                    <Link
                      href="/pricing"
                      onClick={closeMobileMenu}
                      className="font-geist border-b border-[rgba(0,0,0,0.10)] py-[18px] text-base leading-[140%] font-bold tracking-[-0.157px] text-[#202020]"
                    >
                      Pricing
                    </Link>

                    <MobileAccordion id="resources" label="Resources">
                      {resources.map((r) => (
                        <Link
                          key={r.name}
                          href={r.href}
                          onClick={closeMobileMenu}
                          className="block py-2"
                        >
                          <div className="text-[14px] font-medium text-[#212529]">
                            {r.name}
                          </div>
                          <div className="text-[12px] text-[#868e96]">
                            {r.desc}
                          </div>
                        </Link>
                      ))}
                      <div className="my-1.5 h-px bg-[#e9ecef]" />
                      <Link
                        href="/roi-calculator"
                        onClick={closeMobileMenu}
                        className="block py-2"
                      >
                        <div className="text-[14px] font-medium text-[#212529]">
                          ROI Calculator
                        </div>
                        <div className="text-[12px] text-[#868e96]">
                          See what UGC actually delivers
                        </div>
                      </Link>
                    </MobileAccordion>

                    <Link
                      href="/creators"
                      onClick={closeMobileMenu}
                      className="font-geist flex items-center gap-1.5 border-t border-[rgba(0,0,0,0.10)] py-[18px] text-base leading-[140%] font-bold tracking-[-0.157px] text-[rgba(32,32,32,0.75)]"
                    >
                      For Creators <ExtLinkIcon />
                    </Link>
                  </nav>
                </div>

                {/* Bottom CTAs */}
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="https://app.sideshift.app/signin"
                    onClick={closeMobileMenu}
                    className="font-geist py-3 text-center text-base leading-[140%] font-bold text-[#202020] transition-colors hover:text-[rgba(32,32,32,0.75)]"
                  >
                    Log in
                  </Link>
                  {demoMode ? (
                    <Link href="/contact" onClick={closeMobileMenu}>
                      <Button variant="primary" size="lg" className="w-full">
                        <span>Book a Demo</span>
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link href="/contact" onClick={closeMobileMenu}>
                        <Button variant="secondary" size="lg" className="w-full">
                          <span>Book a Demo</span>
                        </Button>
                      </Link>
                      <Link
                        href="https://app.sideshift.app/signup"
                        onClick={() => {
                          handleCTAClick(
                            "start_free_trial_mobile_menu",
                            isBrand,
                            variant,
                          );
                          closeMobileMenu();
                        }}
                      >
                        <Button variant="primary" size="lg" className="w-full">
                          <span>Start Free Trial</span>
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
