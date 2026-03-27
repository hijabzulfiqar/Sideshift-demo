"use client";
import Link from "next/link";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";

interface FeatureRow {
  name: string;
  sideshift: boolean | string;
  agencies: boolean | string;
  freelance: boolean | string;
}

const features: FeatureRow[] = [
  {
    name: "700K+ vetted creators apply to you",
    sideshift: true,
    agencies: "Cold DMs, 80% ghosting",
    freelance: "Small roster, limited options",
  },
  {
    name: "Briefs, chat, scheduling — one place",
    sideshift: true,
    agencies: "iMessage + Slack + IG DMs",
    freelance: "Weeks of back-and-forth",
  },
  {
    name: "Real-time performance dashboard",
    sideshift: true,
    agencies: "Spreadsheets",
    freelance: "Monthly PDF (maybe)",
  },
  {
    name: "One-click payouts, automated bonuses",
    sideshift: true,
    agencies: "Manual Venmo / bank transfers",
    freelance: "Baked into the 5-figure retainer",
  },
  {
    name: "Creators post from their accounts",
    sideshift: true,
    agencies: "You coordinate individually",
    freelance: false,
  },
  {
    name: "Interview automation + notifications",
    sideshift: true,
    agencies: "Calendly + email + follow-ups",
    freelance: "Agency handles it ($$$)",
  },
];

function CheckIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="white" />
      <path
        d="M12 16L14.6667 18L20 14"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 6L6 18"
        stroke="#797979"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#797979"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CellValue({
  value,
  highlighted,
}: {
  value: boolean | string;
  highlighted?: boolean;
}) {
  if (typeof value === "string") {
    return (
      <span
        className={`text-center text-xs leading-snug md:text-base md:whitespace-nowrap ${highlighted ? "text-black" : "text-black/55"}`}
      >
        {value}
      </span>
    );
  }
  if (value) {
    return <CheckIcon />;
  }
  return <XIcon />;
}

function ComparisonTable({
  demoMode = false,
  heading,
  subheading,
  col1Header,
  col2Header,
  col3Header,
  rows,
  ctaText,
  ctaHref,
}: {
  demoMode?: boolean;
  heading?: string;
  subheading?: string;
  col1Header?: string;
  col2Header?: string;
  col3Header?: string;
  rows?: FeatureRow[];
  ctaText?: string;
  ctaHref?: string;
} = {}) {
  const variant = getHeroVariant();
  const isBrand = true;
  const displayFeatures = rows ?? features;
  const displayCol1 = col1Header ?? "SideShift";
  const displayCol2 = col2Header ?? "Doing it yourself";
  const displayCol3 = col3Header ?? "Hiring an agency";
  const displayCtaText =
    ctaText ?? (demoMode ? "Book a Demo" : "Start Free Trial");

  return (
    <section id="comparison-table" className="relative mt-5 bg-white">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Heading */}
            <div className="flex flex-col items-center gap-3 text-center md:gap-4">
              <h2 className="max-w-[20ch] text-[32px] leading-[90%] font-bold tracking-[-0.05em] sm:text-[40px] md:text-[min(69px,4.7vw)]">
                {heading ?? "The new standard for creator marketing"}
              </h2>
              <p className="max-w-[600px] text-base leading-[135%] text-[rgba(32,32,32,0.75)] md:text-lg">
                {subheading ??
                  "See why SideShift is the smarter choice for high-performing videos."}
              </p>
            </div>

            {/* ─── Mobile Cards ─── */}
            <div className="w-full space-y-3 md:hidden">
              {/* Column headers */}
              <div
                className="grid grid-cols-3 gap-2 rounded-2xl px-3 py-3 text-center text-sm font-semibold"
                style={{
                  background:
                    "radial-gradient(71.9% 62.07% at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%), linear-gradient(180deg, #A7D7FF 0%, #E0F5FF 45%, #B8E0FF 100%)",
                }}
              >
                <span className="font-extrabold tracking-[-0.03em] text-[#202020]">
                  {displayCol1}
                </span>
                <span className="text-black/60">{displayCol2}</span>
                <span className="text-black/60">{displayCol3}</span>
              </div>

              {displayFeatures.map((f, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-black/[0.06] bg-white"
                >
                  {/* Feature name */}
                  <div className="bg-[#f5f5f5] px-4 py-2.5">
                    <span className="text-sm font-medium text-black">
                      {f.name}
                    </span>
                  </div>
                  {/* Values row */}
                  <div className="grid grid-cols-3 divide-x divide-black/[0.06]">
                    {/* SideShift */}
                    <div
                      className="flex items-center justify-center px-2 py-3"
                      style={{
                        background:
                          "radial-gradient(71.9% 62.07% at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%), linear-gradient(180deg, rgba(167,215,255,0.35) 0%, rgba(224,245,255,0.35) 45%, rgba(184,224,255,0.35) 100%)",
                      }}
                    >
                      <CellValue value={f.sideshift} highlighted />
                    </div>
                    {/* Column 2 */}
                    <div className="flex items-center justify-center px-2 py-3">
                      <CellValue value={f.agencies} />
                    </div>
                    {/* Column 3 */}
                    <div className="flex items-center justify-center px-2 py-3">
                      <CellValue value={f.freelance} />
                    </div>
                  </div>
                </div>
              ))}

              {/* Mobile CTA */}
              <div
                className="flex items-center justify-center rounded-2xl py-4"
                style={{
                  background:
                    "radial-gradient(71.9% 62.07% at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%), linear-gradient(180deg, #A7D7FF 0%, #E0F5FF 45%, #B8E0FF 100%)",
                }}
              >
                <Link
                  href={ctaHref ?? "https://app.sideshift.app/signup"}
                >
                  <button
                    onClick={() =>
                      handleCTAClick(
                        demoMode
                          ? "book_demo_comparison_table"
                          : "try_sideshift_comparison_table",
                        isBrand,
                        variant,
                      )
                    }
                    className="cta-button-dark cursor-pointer rounded-full px-6 py-3 text-base font-normal whitespace-nowrap text-white"
                  >
                    {displayCtaText}
                  </button>
                </Link>
              </div>
            </div>

            {/* ─── Desktop Table ─── */}
            <div className="hidden w-full md:block">
              <div
                className="mx-auto grid"
                style={{
                  gridTemplateColumns: "auto 1fr 1fr 1fr",
                  maxWidth: "1280px",
                }}
              >
                {/* ── Column 0: Feature labels ── */}
                <div>
                  {/* Header spacer */}
                  <div className="h-[72px]" />
                  {/* Rows */}
                  {displayFeatures.map((f, i) => (
                    <div
                      key={i}
                      className={`flex h-[56px] items-center ${
                        i % 2 === 0 ? "rounded-l-lg bg-[#ececec]" : ""
                      }`}
                      style={{ padding: "16px 16px 16px 20px" }}
                    >
                      <span className="text-base whitespace-nowrap text-black">
                        {f.name}
                      </span>
                    </div>
                  ))}
                  {/* Bottom spacer to match CTA row height */}
                  <div className="h-0" />
                </div>

                {/* ── Column 1: SideShift (highlighted) ── */}
                <div
                  className="rounded-[40px]"
                  style={{
                    background:
                      "radial-gradient(71.9% 62.07% at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%), linear-gradient(180deg, #A7D7FF 0%, #E0F5FF 45%, #B8E0FF 100%)",
                  }}
                >
                  {/* Header */}
                  <div
                    className="flex h-[72px] items-center justify-center"
                    style={{ padding: "20px 24px" }}
                  >
                    <span className="text-[1.85rem] leading-none font-extrabold tracking-[-0.04em] text-[#202020]">
                      {displayCol1}
                    </span>
                  </div>
                  {/* Rows */}
                  {displayFeatures.map((f, i) => (
                    <div
                      key={i}
                      className={`flex h-[56px] items-center justify-center ${
                        i % 2 === 0 ? "bg-[rgba(1,65,99,0.07)]" : ""
                      }`}
                      style={{ padding: "12px 24px" }}
                    >
                      <CellValue value={f.sideshift} highlighted />
                    </div>
                  ))}
                  {/* CTA */}
                  <div
                    className="flex items-center justify-center"
                    style={{ padding: "16px 24px 24px" }}
                  >
                    <Link
                      href={ctaHref ?? "https://app.sideshift.app/signup"}
                    >
                      <button
                        onClick={() =>
                          handleCTAClick(
                            demoMode
                              ? "book_demo_comparison_table"
                              : "try_sideshift_comparison_table",
                            isBrand,
                            variant,
                          )
                        }
                        className="cta-button-dark cursor-pointer rounded-full px-6 py-3 text-base font-normal whitespace-nowrap text-white"
                      >
                        {displayCtaText}
                      </button>
                    </Link>
                  </div>
                </div>

                {/* ── Column 2 ── */}
                <div>
                  {/* Header */}
                  <div
                    className="flex h-[72px] items-center justify-center"
                    style={{ padding: "20px 24px" }}
                  >
                    <span className="text-center text-base text-black">
                      {displayCol2}
                    </span>
                  </div>
                  {/* Rows */}
                  {displayFeatures.map((f, i) => (
                    <div
                      key={i}
                      className={`flex h-[56px] items-center justify-center ${
                        i % 2 === 0 ? "bg-[#ececec]" : ""
                      }`}
                      style={{ padding: "12px 24px" }}
                    >
                      <CellValue value={f.agencies} />
                    </div>
                  ))}
                </div>

                {/* ── Column 3 ── */}
                <div>
                  {/* Header */}
                  <div
                    className="flex h-[72px] items-center justify-center"
                    style={{ padding: "20px 24px" }}
                  >
                    <span className="text-center text-base text-black">
                      {displayCol3}
                    </span>
                  </div>
                  {/* Rows */}
                  {displayFeatures.map((f, i) => (
                    <div
                      key={i}
                      className={`flex h-[56px] items-center justify-center ${
                        i % 2 === 0 ? "rounded-r-lg bg-[#ececec]" : ""
                      }`}
                      style={{ padding: "12px 24px" }}
                    >
                      <CellValue value={f.freelance} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;
