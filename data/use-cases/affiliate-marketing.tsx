import React from "react";
import Link from "next/link";
import { standardComparisonRows } from "./shared";
import type {
  FaqItem,
  Article,
  WhyUgcContent,
  UgcComparisonContent,
  PricingContent,
  FaqContent,
  ArticlesContent,
  HeroOverrides,
} from "@/types/platform";

export const affiliateHeroOverrides: HeroOverrides = {
  label: "Affiliate Marketing Platform",
  headline: "Turn creators into your highest-performing sales channel.",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Get Started",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_affiliate_hero",
  },
  secondaryCta: {
    text: "Learn More",
    href: "/contact",
    event: "book_demo_affiliate_hero",
  },
};

export const affiliateWhyUgc: WhyUgcContent = {
  label: "The Benefits of Affiliate Marketing",
  heading: "Pay for performance, not promises.",
  paragraphs: [
    "Affiliate marketing flips the traditional model — you only pay when creators drive real results. No upfront fees, no wasted spend. Just authentic content that converts, with creators who are incentivized to perform.",
    "SideShift combines UGC creation with affiliate tracking, so you get high-quality content and measurable sales from the same creator relationships.",
  ],
  cards: [
    {
      title: "Performance-Based Payouts",
      description:
        "Only pay when creators drive results. Affiliate commissions align creator incentives with your revenue goals — so everyone wins when content converts.",
    },
    {
      title: "Content + Commerce",
      description:
        "Creators don\u2019t just share links — they create authentic content that sells. Combine UGC production with affiliate tracking for a full-funnel creator program.",
    },
    {
      title: "Scalable Revenue Channel",
      description:
        "Start with a handful of creators and scale to hundreds. As your affiliate network grows, so does your revenue — without increasing fixed costs.",
    },
  ],
};

export const affiliateUgcComparison: UgcComparisonContent = {
  label: "Creator Affiliates vs Traditional Affiliate Networks",
  heading: "Affiliate Marketing in 2026",
  description:
    "Creator-driven affiliate programs outperform traditional affiliate networks on content quality, authenticity, and conversion rates — giving brands a scalable revenue channel.",
  ugcColumnHeader: "Creator Affiliate Marketing",
  traditionalColumnHeader: "Traditional Affiliate Networks",
};

export const affiliateComparisonRows = standardComparisonRows;

export const affiliatePricing: PricingContent = {
  heading: "Simple pricing that scales with your creator output",
  subheading: "Choose a plan that fits your affiliate program.",
};

export const affiliateFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about affiliate marketing on SideShift.",
};

export const affiliateFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is creator affiliate marketing?",
    answer: (
      <>
        Creator affiliate marketing combines authentic content creation with
        performance-based commissions. Creators produce UGC that promotes your
        product and earn a commission on every sale they drive — aligning their
        incentives with your revenue goals. Learn more in our{" "}
        <Link
          href="/blog/affiliate-marketing-vs-influencer-marketing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete affiliate marketing guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How is this different from traditional affiliate networks?",
    answer:
      "Traditional affiliate networks rely on coupon sites, deal blogs, and link farms. Creator affiliate marketing pairs authentic UGC with trackable affiliate links — driving higher-quality traffic, better conversion rates, and content you can repurpose across channels.",
  },
  {
    id: 3,
    question: "How much does an affiliate program cost?",
    answer: (
      <>
        SideShift&apos;s platform pricing starts at $199/month. Commission rates
        are set by you — typically 10-30% depending on your margins. You only pay
        commissions when creators drive actual sales. See our{" "}
        <Link
          href="/pricing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          pricing page
        </Link>{" "}
        for plan details.
      </>
    ),
  },
  {
    id: 4,
    question: "How do I recruit affiliate creators?",
    answer:
      "SideShift gives you access to 700,000+ vetted creators who are ready to promote products they believe in. Search by niche, platform, audience, and content style. You can also invite existing customers and fans to join your affiliate program.",
  },
  {
    id: 5,
    question: "Do I own the content affiliates create?",
    answer:
      "Yes. All content created through SideShift comes with full usage rights. Use affiliate content across paid ads, organic social, email, and your website — maximizing the value of every piece of creator content.",
  },
  {
    id: 6,
    question: "How do I track affiliate performance?",
    answer:
      "SideShift provides real-time tracking on clicks, conversions, revenue, and commission payouts for every creator. Identify your highest-performing affiliates, optimize commission structures, and scale what works.",
  },
];

export const affiliateArticles: Article[] = [
  {
    slug: "affiliate-marketing-vs-influencer-marketing",
    title: "Affiliate Marketing vs Influencer Marketing: Key Differences, Costs, and ROI",
    excerpt:
      "How to build a creator-driven affiliate program that generates authentic content and measurable revenue.",
    category: "Affiliate Marketing",
    readTime: "8 min read",
  },
  {
    slug: "ugc-vs-influencer-marketing",
    title: "Affiliate vs Influencer Marketing: Which Drives Better ROI?",
    excerpt:
      "A clear comparison of affiliate and influencer strategies — and how to combine them for maximum impact.",
    category: "Strategy",
    readTime: "5 min read",
  },
  {
    slug: "how-to-scale-ugc-campaigns",
    title: "How to Scale Your Creator Affiliate Program",
    excerpt:
      "From recruiting your first 10 affiliates to managing hundreds — a practical guide to sustainable growth.",
    category: "Operations",
    readTime: "6 min read",
  },
];

export const affiliateArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Affiliate Marketing Resources",
};
