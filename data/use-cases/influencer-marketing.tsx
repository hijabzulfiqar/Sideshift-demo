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

export const influencerHeroOverrides: HeroOverrides = {
  label: "Influencer Marketing Platform",
  headline: "Run influencer campaigns that actually drive results.",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Get Started",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_influencer_hero",
  },
  secondaryCta: {
    text: "Learn More",
    href: "/contact",
    event: "book_demo_influencer_hero",
  },
};

export const influencerWhyUgc: WhyUgcContent = {
  label: "The Benefits of Influencer Marketing",
  heading: "Modern influencer marketing is built on authenticity.",
  paragraphs: [
    "The old model of paying for follower counts is broken. Smart brands now partner with creators who make authentic content that drives real engagement — not vanity metrics.",
    "SideShift gives you access to 700,000+ vetted creators, campaign management tools, and performance analytics — so you can run influencer programs that actually move the needle.",
  ],
  cards: [
    {
      title: "Vetted Creator Network",
      description:
        "Access a marketplace of 700,000+ creators across every niche and platform. Filter by audience, engagement rate, content style, and past brand performance.",
    },
    {
      title: "Campaign Management",
      description:
        "Brief creators, review content, track deliverables, and manage payments — all in one platform. No more spreadsheet chaos or email threads.",
    },
    {
      title: "Performance Analytics",
      description:
        "Track views, engagement, clicks, and conversions in real time. Identify your top-performing creators and double down on what works.",
    },
  ],
};

export const influencerUgcComparison: UgcComparisonContent = {
  label: "SideShift vs Traditional Influencer Marketing",
  heading: "Influencer Marketing in 2026",
  description:
    "SideShift\u2019s influencer marketing platform outperforms traditional approaches on cost, speed, authenticity, and content rights — giving brands full control at scale.",
  ugcColumnHeader: "SideShift Influencer Marketing",
  traditionalColumnHeader: "Traditional Influencer Marketing",
};

export const influencerComparisonRows = standardComparisonRows;

export const influencerPricing: PricingContent = {
  heading: "Simple pricing that scales with your creator output",
  subheading: "Choose a plan that fits your influencer program.",
};

export const influencerFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about influencer marketing on SideShift.",
};

export const influencerFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is influencer marketing?",
    answer: (
      <>
        Influencer marketing is a strategy where brands partner with content
        creators to promote products and services to their audiences. Modern
        influencer marketing focuses on authentic content and measurable results
        rather than follower counts alone. Learn more in our{" "}
        <Link
          href="/blog/influencer-marketing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete influencer marketing guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How much does influencer marketing cost?",
    answer: (
      <>
        Traditional influencer costs range from $100 per post for
        nano-influencers to $10,000+ for macro-influencers. SideShift&apos;s
        platform gives you scalable, subscription-based pricing starting at
        $199/month — with access to thousands of vetted creators. See our{" "}
        <Link
          href="/pricing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          pricing page
        </Link>{" "}
        for details.
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find the right influencers for my brand?",
    answer:
      "SideShift lets you search 700,000+ vetted creators by niche, platform, audience demographics, engagement rate, and content style. Browse portfolios, view past brand collaborations, and message creators directly. Most brands hire their first creators within a week.",
  },
  {
    id: 4,
    question: "What platforms do SideShift influencers cover?",
    answer:
      "Creators on SideShift are active across Instagram, TikTok, YouTube, Facebook, and more. You can filter by platform to find creators who specialize in the channels that matter most to your brand.",
  },
  {
    id: 5,
    question: "Do I own the content influencers create?",
    answer:
      "Yes. Every piece of content created through SideShift comes with full usage rights. You can repurpose influencer content across paid ads, organic channels, email, and your website — without additional licensing fees.",
  },
  {
    id: 6,
    question: "How do I measure influencer marketing ROI?",
    answer:
      "SideShift provides real-time analytics on views, engagement, clicks, and conversions for every campaign. Track performance at the creator, campaign, and content level to understand exactly what\u2019s driving results and optimize your spend.",
  },
];

export const influencerArticles: Article[] = [
  {
    slug: "influencer-marketing",
    title: "The Complete Influencer Marketing Guide for 2026",
    excerpt:
      "Everything you need to know about running high-performing influencer campaigns — from finding creators to measuring ROI.",
    category: "Influencer Marketing",
    readTime: "8 min read",
  },
  {
    slug: "ugc-vs-influencer-marketing",
    title: "Influencer Marketing vs UGC: What\u2019s the Difference?",
    excerpt:
      "A clear breakdown of when to use influencer marketing, UGC, or both — and how to get the best results from each.",
    category: "Strategy",
    readTime: "5 min read",
  },
  {
    slug: "how-to-optimize-influencer-campaigns",
    title: "How to Optimize Influencer Campaigns: A 2026 Guide",
    excerpt:
      "Step-by-step guide to planning, launching, and scaling influencer campaigns that drive real business results.",
    category: "Campaign Management",
    readTime: "7 min read",
  },
];

export const influencerArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Influencer Marketing Resources",
};
