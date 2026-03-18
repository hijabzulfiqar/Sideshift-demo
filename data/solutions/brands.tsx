import React from "react";
import Link from "next/link";
import type {
  ComparisonRow,
  FaqItem,
  Article,
  WhyUgcContent,
  UgcComparisonContent,
  PricingContent,
  FaqContent,
  ArticlesContent,
  HeroOverrides,
} from "@/types/platform";

export const brandsHeroOverrides: HeroOverrides = {
  label: "UGC Platform for Brands",
  headline: "Run Your Entire UGC Operation In-House",
  stats: [
    { value: "700,000+", label: "Vetted creators" },
    { value: "1,000+", label: "Brands on SideShift" },
    { value: "10,000+", label: "Campaigns launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_brands_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_brands_hero",
  },
};

export const brandsWhyUgc: WhyUgcContent = {
  label: "Why Brands Choose SideShift",
  heading: "Stop outsourcing. Start owning your creator pipeline.",
  paragraphs: [
    "Most brands rely on agencies or freelancers to source UGC — adding cost, lag time, and losing control over quality. SideShift gives your in-house team a direct line to 700K+ creators, with tools to manage every step from brief to delivery.",
    "Launch campaigns in hours instead of weeks. Test more creative, find top performers faster, and build a creator roster you own — not one that disappears when you switch agencies.",
  ],
  cards: [
    {
      title: "Full Creator Pipeline",
      description:
        "Search, filter, and invite creators from the largest UGC marketplace. Build saved lists and reactivate top performers for future campaigns.",
    },
    {
      title: "End-to-End Campaign Management",
      description:
        "Brief creators, manage submissions, request revisions, approve content, and handle payments — all from one dashboard.",
    },
    {
      title: "Performance You Can Measure",
      description:
        "Track every piece of content across platforms. See which creators and formats drive results, then double down on what works.",
    },
  ],
};

export const brandsUgcComparison: UgcComparisonContent = {
  label: "In-House vs Outsourced",
  heading: "Why running UGC in-house outperforms outsourcing",
  description:
    "Brands that own their creator pipeline move faster, spend less, and build lasting creator relationships.",
  ugcColumnHeader: "In-House with SideShift",
  traditionalColumnHeader: "Outsourced to Agency",
};

export const brandsComparisonRows: ComparisonRow[] = [
  {
    category: "Speed",
    ugc: "Launch campaigns in hours, not weeks",
    traditional: "2-4 week agency turnaround times",
  },
  {
    category: "Cost",
    ugc: "Pay creators directly, no agency markup",
    traditional: "30-50% agency fees on top of creator costs",
  },
  {
    category: "Control",
    ugc: "Full visibility into every campaign detail",
    traditional: "Limited insight into creator selection and process",
  },
  {
    category: "Creator Relationships",
    ugc: "Build your own roster of proven creators",
    traditional: "Agency owns the relationships, not you",
  },
  {
    category: "Scale",
    ugc: "Run unlimited campaigns simultaneously",
    traditional: "Constrained by agency bandwidth and retainer",
  },
];

export const brandsPricing: PricingContent = {
  heading: "Simple pricing that scales with you",
  subheading:
    "Start free. Upgrade when you need more creators and campaigns.",
};

export const brandsFaqContent: FaqContent = {
  heading: "Frequently Asked Questions",
  subheading:
    "Everything brands need to know about running UGC in-house with SideShift.",
};

export const brandsFaqData: FaqItem[] = [
  {
    id: 1,
    question: "How is SideShift different from hiring an agency?",
    answer:
      "SideShift gives your in-house team the same tools an agency uses — creator search, campaign management, payments, and analytics — without the markup. You keep full control and ownership of creator relationships.",
  },
  {
    id: 2,
    question: "How many creators can I work with?",
    answer:
      "There's no limit. Search from 700K+ vetted creators, invite as many as you need per campaign, and scale your roster over time.",
  },
  {
    id: 3,
    question: "Do I need a dedicated team to use SideShift?",
    answer:
      "No. SideShift automates the heavy lifting — creator discovery, contracts, payments, tax compliance — so even a single marketing manager can run large-scale UGC campaigns.",
  },
  {
    id: 4,
    question: "What content rights do I get?",
    answer:
      "Full usage rights on every piece of content. Run it across paid ads, organic social, email, website, and any other channel — no additional licensing fees.",
  },
  {
    id: 5,
    question: "Can I try SideShift before committing?",
    answer:
      "Yes — start with a free trial. No credit card required. You can explore the creator marketplace, set up campaigns, and see results before upgrading.",
  },
];

export const brandsArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Resources for brand marketers",
};

export const brandsArticles: Article[] = [
  {
    slug: "best-ugc-marketplaces",
    title: "6 Best UGC Marketplaces in 2026",
    excerpt:
      "Compare the top UGC platforms to find the right fit for your brand.",
    category: "Platforms",
    readTime: "8 min read",
  },
  {
    slug: "how-to-find-ugc-creators",
    title: "How to Find UGC Creators",
    excerpt:
      "A practical guide to finding and vetting the right creators for your brand.",
    category: "Creator Discovery",
    readTime: "6 min read",
  },
  {
    slug: "tiktok-spark-ads",
    title:
      "TikTok Spark Ads: How to Turn UGC Into High-Performing Paid Content",
    excerpt:
      "Use creator content to fuel your best-performing TikTok ad campaigns.",
    category: "Paid Media",
    readTime: "7 min read",
  },
];
