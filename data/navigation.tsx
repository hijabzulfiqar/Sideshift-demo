import React from "react";

// ─── Nav Item Icons ──────────────────────────────────────────────────

export function IcInstagram() {
  return (
    <div
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
      style={{
        background:
          "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
      </svg>
    </div>
  );
}

export function IcTikTok() {
  return (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-black">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52V7.49a4.84 4.84 0 01-1-.8z" />
      </svg>
    </div>
  );
}

export function IcYouTube() {
  return (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#FF0000]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
        <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.65 31.65 0 000 12a31.65 31.65 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.65 31.65 0 0024 12a31.65 31.65 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    </div>
  );
}

export function IcFacebook() {
  return (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#1877F2]">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z" />
      </svg>
    </div>
  );
}

function IcSearch() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EDF2FF]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4263EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    </div>
  );
}

function IcBriefcase() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EBFBEE]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2B8A3E"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <rect x="2" y="7" width="20" height="13" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    </div>
  );
}

function IcChart() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF9DB]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E67700"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    </div>
  );
}

function IcWallet() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF0F6]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2255C"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    </div>
  );
}

function IcZap() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F3F0FF]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#7048E8"
        stroke="none"
      >
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
    </div>
  );
}

function IcBuilding() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E7F5FF]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1971C2"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h6M3 15h6" />
      </svg>
    </div>
  );
}

function IcUsers() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF3BF]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E67700"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="17" cy="9" r="3" />
        <path d="M21 21v-2a3 3 0 00-2-2.83" />
      </svg>
    </div>
  );
}

// ─── Nav Data ───────────────────────────────────────────────────────

export const platforms = [
  {
    name: "Instagram UGC",
    desc: "Reels, Stories & Feed",
    icon: <IcInstagram />,
    href: "/platform/instagram",
  },
  {
    name: "TikTok UGC",
    desc: "Viral short-form at scale",
    icon: <IcTikTok />,
    href: "/platform/tiktok",
  },
  {
    name: "YouTube UGC",
    desc: "Shorts & long-form",
    icon: <IcYouTube />,
    href: "/platform/youtube",
  },
  {
    name: "Facebook UGC",
    desc: "Feed & Reels for Meta",
    icon: <IcFacebook />,
    href: "/platform/facebook",
  },
];

export const platformFeatures = [
  {
    name: "Creator Marketplace",
    desc: "700K+ vetted creators",
    icon: <IcSearch />,
    href: "/platform/creator-marketplace",
  },
  {
    name: "Influencer Database",
    desc: "Search, filter, save",
    icon: <IcZap />,
    href: "/platform/influencer-database",
  },
  {
    name: "Creator Management",
    desc: "Brief to delivery",
    icon: <IcBriefcase />,
    href: "/platform/campaign-management",
  },
  {
    name: "Social Media Performance & Analytics",
    desc: "Real-time analytics",
    icon: <IcChart />,
    href: "/platform/reporting",
  },
  {
    name: "Creator Payouts",
    desc: "Pay without hassle",
    icon: <IcWallet />,
    href: "/platform/payments",
  },
];

export const useCases = [
  {
    name: "High Volume UGC",
    desc: "Content at scale",
    href: "/use-cases/high-volume-ugc",
  },
  {
    name: "UGC for Paid Ads",
    desc: "Ad creative at scale",
    href: "/use-cases/paid-ads",
  },
  {
    name: "Influencer Marketing",
    desc: "Campaigns that convert",
    href: "/use-cases/influencer-marketing",
  },
  {
    name: "Ambassador Marketing",
    desc: "Long-term creator partners",
    href: "/use-cases/ambassador-marketing",
  },
  {
    name: "Affiliate Marketing",
    desc: "Performance-based growth",
    href: "/use-cases/affiliate-marketing",
  },
];

export const businessTypes = [
  {
    name: "For Brands",
    desc: "Run UGC in-house",
    icon: <IcBuilding />,
    href: "/solutions/brands",
  },
  {
    name: "For Agencies",
    desc: "Source at scale for clients",
    icon: <IcUsers />,
    href: "/for-agencies",
  },
];

export const industries = [
  { name: "Fashion & Clothing", desc: "Style-driven UGC", href: "/industry/fashion" },
  { name: "Tech & SaaS", desc: "Product-led content", href: "/industry/tech-saas" },
  { name: "CPG", desc: "Everyday product UGC", href: "/industry/cpg" },
  { name: "Beauty & Skincare", desc: "Tutorials & reviews", href: "/industry/beauty-skincare" },
  { name: "Food & Beverage", desc: "Taste & recipe content", href: "/industry/food-beverage" },
  { name: "Health & Wellness", desc: "Wellness creator content", href: "/industry/health-wellness" },
  { name: "E-Commerce", desc: "Conversion UGC", href: "/industry/ecommerce" },
  { name: "Travel & Hospitality", desc: "Destination content", href: "/industry/travel-hospitality" },
  { name: "Gaming", desc: "Gameplay & reviews", href: "/industry/gaming" },
  { name: "Financial Services", desc: "Compliant partnerships", href: "/industry/fintech" },
];

export const resources = [
  { name: "Case Studies", desc: "Real brand results", href: "/casestudies" },
  { name: "Blog", desc: "UGC strategy guides", href: "/blog" },
  { name: "Contact Sales", desc: "Talk to our team", href: "/contact" },
];
