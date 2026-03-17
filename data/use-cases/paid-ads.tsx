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

export const paidAdsHeroOverrides: HeroOverrides = {
  label: "Paid Ad UGC Platform",
  headline: "Fuel paid ad campaigns with high volume UGC.",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Get Started",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_paid_ads_hero",
  },
  secondaryCta: {
    text: "Learn More",
    href: "/contact",
    event: "book_demo_paid_ads_hero",
  },
};

export const paidAdsWhyUgc: WhyUgcContent = {
  label: "The Benefits of UGC for Paid Ads",
  heading: "Why UGC outperforms traditional ad creative.",
  paragraphs: [
    "Polished ads are losing ground. Audiences scroll past anything that looks like an ad — but stop for content that feels real. UGC-driven paid campaigns consistently outperform studio creative on CTR, CPA, and ROAS.",
    "The brands scaling paid ads profitably aren\u2019t spending more on production. They\u2019re testing more creative variations with real creators and doubling down on what works.",
  ],
  cards: [
    {
      title: "Authenticity Drives Conversions",
      description:
        "Creator-made content blends into feeds naturally. Ads that feel native to the platform earn more attention, more clicks, and higher conversion rates than polished brand assets.",
    },
    {
      title: "Realism Reduces Return Rate",
      description:
        "When customers see real people using a product, expectations match reality. UGC-powered ads reduce post-purchase regret and drive lower return rates across e-commerce.",
    },
    {
      title: "Increased Brand Loyalty",
      description:
        "Authentic creator content builds trust faster than traditional advertising. Customers who discover brands through UGC are more likely to become repeat buyers and advocates.",
    },
  ],
};

export const paidAdsUgcComparison: UgcComparisonContent = {
  label: "UGC Ads vs Traditional Ad Creative",
  heading: "UGC Paid Ads in 2026",
  description:
    "High-volume UGC outperforms traditional ad creative on cost, speed, authenticity, and content rights — giving brands full control at scale.",
  ugcColumnHeader: "High Volume UGC Ads",
  traditionalColumnHeader: "Traditional Ad Creative",
};

export const paidAdsComparisonRows = standardComparisonRows;

export const paidAdsPricing: PricingContent = {
  heading: "Simple pricing that scales with your creator output",
  subheading: "Choose a plan that fits your needs.",
};

export const paidAdsFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about UGC for paid ad campaigns on SideShift.",
};

export const paidAdsFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is UGC for paid ads?",
    answer: (
      <>
        UGC for paid ads is authentic, creator-made content designed to run as
        paid advertising across platforms like Instagram, TikTok, Facebook, and
        YouTube. Unlike traditional studio creative, UGC ads feel native to the
        platform and consistently outperform polished branded content on key
        metrics. Learn more in our{" "}
        <Link
          href="/blog/how-to-create-effective-ugc-ads"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete UGC paid ads guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How much does UGC ad creative cost?",
    answer: (
      <>
        Traditional ad agencies charge $5,000–$50,000+ per campaign. With
        SideShift&apos;s UGC model, you get scalable, output-based pricing
        starting at $199/month — producing hundreds of ad variations at a
        fraction of the cost. See our{" "}
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
    question: "How do I find creators for paid ad content?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators by niche, platform, location, and content style. Filter for creators experienced in ad-style content, review their portfolios, and hire directly. Most brands find their first creators within a week.",
  },
  {
    id: 4,
    question: "What types of paid ad content can creators make?",
    answer: (
      <>
        Creators on SideShift produce all types of paid ad creative including
        product demos, testimonial-style ads, unboxings, before-and-after
        content, lifestyle integrations, and hook variations. Content is
        delivered ready to run across Meta Ads, TikTok Ads, YouTube Ads, and
        more. Read our guide on{" "}
        <Link
          href="/blog/spark-ads"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          top-performing UGC ad creative types
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "Can I use UGC across multiple ad platforms?",
    answer:
      "Yes. Every piece of content comes with full usage rights. Run it as Instagram ads, TikTok Spark Ads, Facebook ads, YouTube pre-rolls, or across your own channels — without additional licensing fees or platform restrictions.",
  },
  {
    id: 6,
    question: "How does UGC improve ad performance?",
    answer:
      "UGC ads outperform traditional creative because they feel native to the platform. Brands using UGC for paid ads typically see 2-4x higher click-through rates, 30-50% lower cost-per-acquisition, and significantly higher engagement compared to studio-produced ad creative.",
  },
];

export const paidAdsArticles: Article[] = [
  {
    slug: "how-to-create-effective-ugc-ads",
    title: "How to Create Effective UGC Ads",
    excerpt:
      "Learn how top brands are using creator-made content to fuel paid ad campaigns with better performance and lower costs.",
    category: "Paid Advertising",
    readTime: "7 min read",
  },
  {
    slug: "spark-ads",
    title: "Top-Performing UGC Ad Creative Types",
    excerpt:
      "A breakdown of the UGC ad formats driving the best results across Meta, TikTok, and YouTube in 2026.",
    category: "Ad Creative",
    readTime: "5 min read",
  },
  {
    slug: "how-to-produce-high-converting-social-media-videos",
    title: "UGC vs Studio Ads: Which Drives Better ROAS?",
    excerpt:
      "We compare cost, performance, and scalability between UGC ad creative and traditional studio-produced campaigns.",
    category: "Strategy",
    readTime: "6 min read",
  },
];

export const paidAdsArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Paid Ad Resources",
};
