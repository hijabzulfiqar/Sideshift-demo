import React from "react";
import Link from "next/link";
import { standardComparisonRows } from "../platform/shared";
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

export const beautyHeroOverrides: HeroOverrides = {
  label: "Beauty & Skincare UGC Creator Platform",
  headline: "Grow Your Beauty Brand With Authentic Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Get Started",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_beauty_hero",
  },
  secondaryCta: {
    text: "Learn More",
    href: "/contact",
    event: "book_demo_beauty_hero",
  },
};

export const beautyWhyUgc: WhyUgcContent = {
  label: "Why Beauty UGC?",
  heading: "Why beauty brands win with creator-made content.",
  paragraphs: [
    "Beauty shoppers don't trust ads — they trust people. Tutorials, routines, and honest reviews from real creators drive purchase decisions far more effectively than polished brand campaigns. UGC has become the default discovery engine for skincare and cosmetics.",
    "The beauty brands scaling fastest aren't producing more studio content. They're partnering with everyday creators who speak directly to their audience's skin concerns, goals, and routines — and delivering content that converts at every stage of the funnel.",
  ],
  cards: [
    {
      title: "Tutorials & Routines That Sell",
      description:
        "Step-by-step tutorials and full skincare routines give shoppers the confidence to buy. Creators demonstrate application, texture, and real results in a way no product photo can — driving higher conversion rates and lower return rates.",
    },
    {
      title: "High Volume Before-and-After Content",
      description:
        "Before-and-after content is the most trusted format in beauty and skincare. Scale authentic transformation stories across dozens of creators to build social proof, fuel paid ads, and reach new audiences at a fraction of traditional production costs.",
    },
    {
      title: "Authentic Reviews & Demos",
      description:
        "Shoppers rely on honest creator reviews before purchasing beauty products. Real demos and unfiltered opinions from creators who match your target customer build the trust needed to convert browsers into buyers — at scale.",
    },
  ],
};

export const beautyUgcComparison: UgcComparisonContent = {
  label: "Beauty UGC vs Traditional Beauty Marketing",
  heading: "Beauty UGC in 2026",
  description:
    "Creator-made beauty content outperforms traditional marketing on authenticity, cost, speed, and content volume — giving beauty brands a scalable path to growth.",
  ugcColumnHeader: "Beauty UGC Content",
  traditionalColumnHeader: "Traditional Beauty Marketing",
};

export const beautyComparisonRows = standardComparisonRows;

export const beautyPricing: PricingContent = {
  heading: "Simple pricing that scales with your creator output",
  subheading: "Choose a plan that fits your needs.",
};

export const beautyFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about UGC for beauty and skincare brands on SideShift.",
};

export const beautyFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is beauty UGC?",
    answer: (
      <>
        Beauty UGC is authentic, creator-made content — tutorials, reviews,
        demos, and before-and-afters — produced by real people for beauty and
        skincare brands. Unlike studio advertising, beauty UGC feels native to
        social feeds and builds trust with shoppers at scale. Learn more in our{" "}
        <Link
          href="/blog/ugc-video-definition-benefits-and-use-cases"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete beauty UGC guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How much does beauty UGC content cost?",
    answer: (
      <>
        Traditional beauty campaigns with agencies or studios can cost
        $10,000–$100,000+. With SideShift&apos;s output-based model, beauty
        brands access high-quality creator content starting at $199/month —
        producing dozens of assets per month at a fraction of the cost. See our{" "}
        <Link
          href="/pricing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          pricing page
        </Link>{" "}
        for full details.
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find beauty and skincare creators?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators and filter by niche, skin type, platform, location, and content style. Find creators who already talk about skincare, cosmetics, or wellness — and hire them directly. Most beauty brands source their first creators within days.",
  },
  {
    id: 4,
    question: "What types of beauty content can creators produce?",
    answer: (
      <>
        Creators on SideShift produce all formats relevant to beauty brands:
        skincare routines, makeup tutorials, before-and-after transformations,
        ingredient deep-dives, honest product reviews, unboxings, and lifestyle
        integrations. Content is delivered ready to use across TikTok, Instagram,
        YouTube, and paid ad campaigns. Read our guide on{" "}
        <Link
          href="/blog/the-most-effective-types-of-ugc-content-for-marketing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          top-performing beauty UGC content types
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "Can I use beauty UGC for paid ads?",
    answer:
      "Yes. Every piece of content created through SideShift comes with full usage rights. Run creator-made beauty content as Instagram ads, TikTok Spark Ads, Facebook ads, or YouTube pre-rolls — without additional licensing fees or platform restrictions.",
  },
  {
    id: 6,
    question: "Why does UGC outperform traditional beauty advertising?",
    answer:
      "Beauty shoppers trust creators over brands. UGC-driven beauty campaigns typically see 2-4x higher engagement rates, 30-50% lower cost-per-acquisition, and significantly higher conversion rates compared to studio-produced creative — because authentic creator content mirrors how shoppers actually discover and research beauty products.",
  },
];

export const beautyArticles: Article[] = [
  {
    slug: "ugc-video-definition-benefits-and-use-cases",
    title: "UGC Video: Definition, Benefits, and Use Cases",
    excerpt:
      "Learn how top beauty and skincare brands are using creator content to drive awareness, trust, and sales at scale.",
    category: "Beauty Marketing",
    readTime: "7 min read",
  },
  {
    slug: "the-most-effective-types-of-ugc-content-for-marketing",
    title: "The Most Effective Types of UGC Content for Marketing in 2026",
    excerpt:
      "A breakdown of the creator content formats driving the best results for beauty and skincare brands across TikTok, Instagram, and paid ads.",
    category: "Content Strategy",
    readTime: "5 min read",
  },
  {
    slug: "ugc-vs-influencer-marketing",
    title: "UGC vs Influencer Marketing: What's Better for ROI in 2026?",
    excerpt:
      "We compare cost, reach, authenticity, and scalability between UGC creators and traditional beauty influencer campaigns.",
    category: "Strategy",
    readTime: "6 min read",
  },
];

export const beautyArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Beauty & Skincare Resources",
};
