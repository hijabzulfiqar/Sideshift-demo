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

export const ambassadorHeroOverrides: HeroOverrides = {
  label: "Ambassador Marketing Platform",
  headline: "Build a brand ambassador program that scales.",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Get Started",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_ambassador_hero",
  },
  secondaryCta: {
    text: "Learn More",
    href: "/contact",
    event: "book_demo_ambassador_hero",
  },
};

export const ambassadorWhyUgc: WhyUgcContent = {
  label: "The Benefits of Ambassador Marketing",
  heading: "Your best customers are your best marketers.",
  paragraphs: [
    "Brand ambassadors aren\u2019t one-off creators — they\u2019re long-term partners who genuinely love your product. They create consistent, authentic content that builds trust with their audience over time.",
    "SideShift helps you recruit, manage, and scale your ambassador program — from onboarding to content approvals to performance tracking — all in one platform.",
  ],
  cards: [
    {
      title: "Long-Term Creator Relationships",
      description:
        "Build an always-on roster of creators who know your brand inside and out. Ambassadors produce higher-quality, more authentic content because they genuinely use and love your product.",
    },
    {
      title: "Consistent Content Pipeline",
      description:
        "Stop scrambling for content every month. An ambassador program gives you a predictable stream of creator content across organic, paid, and owned channels.",
    },
    {
      title: "Community-Driven Growth",
      description:
        "Ambassadors don\u2019t just create content — they build community. Their authentic advocacy drives word-of-mouth, repeat purchases, and brand loyalty that compounds over time.",
    },
  ],
};

export const ambassadorUgcComparison: UgcComparisonContent = {
  label: "Ambassador Programs vs One-Off Influencer Campaigns",
  heading: "Ambassador Marketing in 2026",
  description:
    "Ambassador programs outperform one-off influencer campaigns on authenticity, consistency, and long-term ROI — giving brands a sustainable content engine.",
  ugcColumnHeader: "Ambassador Marketing",
  traditionalColumnHeader: "One-Off Influencer Campaigns",
};

export const ambassadorComparisonRows = standardComparisonRows;

export const ambassadorPricing: PricingContent = {
  heading: "Simple pricing that scales with your creator output",
  subheading: "Choose a plan that fits your ambassador program.",
};

export const ambassadorFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about ambassador marketing on SideShift.",
};

export const ambassadorFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is ambassador marketing?",
    answer: (
      <>
        Ambassador marketing is a strategy where brands build long-term
        partnerships with creators who consistently promote their products.
        Unlike one-off influencer posts, ambassadors create ongoing content that
        builds trust and drives sustained growth. Learn more in our{" "}
        <Link
          href="/blog/brand-ambassador-programs"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete ambassador marketing guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How is ambassador marketing different from influencer marketing?",
    answer:
      "Influencer marketing typically involves one-off paid posts. Ambassador marketing builds long-term relationships where creators consistently advocate for your brand over weeks or months. Ambassadors produce more authentic content because they genuinely use and believe in the product.",
  },
  {
    id: 3,
    question: "How many ambassadors do I need?",
    answer: (
      <>
        Most brands start with 10-20 ambassadors and scale from there. The right
        number depends on your content goals, target platforms, and budget.
        SideShift makes it easy to recruit and manage ambassadors at any scale.
        See our{" "}
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
    question: "How do I find ambassadors for my brand?",
    answer:
      "SideShift lets you search 700,000+ vetted creators who are already interested in brand partnerships. Filter by niche, platform, location, and content style. You can also invite your existing customers and superfans to join your ambassador program directly.",
  },
  {
    id: 5,
    question: "Do I own the content ambassadors create?",
    answer:
      "Yes. All content created through SideShift comes with full usage rights. Repurpose ambassador content across paid ads, organic social, email, your website, and more — without additional licensing fees.",
  },
  {
    id: 6,
    question: "How do I measure ambassador program ROI?",
    answer:
      "SideShift tracks content output, views, engagement, clicks, and conversions for every ambassador. Compare individual performance, identify your top advocates, and measure the long-term impact of your program on brand awareness and revenue.",
  },
];

export const ambassadorArticles: Article[] = [
  {
    slug: "brand-ambassador-programs",
    title: "Brand Ambassador Programs: Complete Guide for 2026",
    excerpt:
      "How to build, launch, and scale a brand ambassador program that drives consistent growth and authentic advocacy.",
    category: "Ambassador Marketing",
    readTime: "8 min read",
  },
  {
    slug: "influencer-marketing-vs-brand-ambassadors",
    title: "Influencer Marketing vs Brand Ambassadors: Which Model Scales Better?",
    excerpt:
      "A side-by-side comparison of ambassador and influencer strategies — and when to use each for maximum ROI.",
    category: "Strategy",
    readTime: "5 min read",
  },
  {
    slug: "become-a-brand-ambassador",
    title: "How to Scale Your Ambassador Program Without Losing Quality",
    excerpt:
      "Practical tips for managing 10 to 1,000+ ambassadors while keeping content quality and brand consistency high.",
    category: "Operations",
    readTime: "6 min read",
  },
];

export const ambassadorArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Ambassador Marketing Resources",
};
