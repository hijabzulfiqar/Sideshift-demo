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

export const tiktokHeroOverrides: HeroOverrides = {
  label: "TikTok Influencers & UGC Creator Platform",
  headline: "Discover, Hire, & Manage TikTok Creators In One Place",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_tiktok_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_tiktok_hero",
  },
};

export const tiktokWhyUgc: WhyUgcContent = {
  label: "Why TikTok UGC?",
  heading: "Creator marketing has changed.",
  paragraphs: [
    "The winning strategy is volume and velocity. Ten creators posting authentic content weekly will outperform one mega-influencer posting once-a-month, every time.",
    "Creators on TikTok don\u2019t need 500K followers to drive results. They need to understand the platform, create native-feeling content, and ship consistently.",
  ],
  cards: [
    {
      title: "Dedicated TikTok Accounts",
      description:
        "Creators who live on the platform and understand what performs. Native content that fits seamlessly into the For You Page and trending formats.",
    },
    {
      title: "High Volume UGC",
      description:
        "More content means more tests, more iterations, and faster signal on what converts. Scale to hundreds of videos per month without the operational drag.",
    },
    {
      title: "Authentic Content That Actually Converts",
      description:
        "Real product experiences outperform polished ads. UGC generates higher engagement and trust on TikTok feeds and Spark Ads.",
    },
  ],
};

export const tiktokUgcComparison: UgcComparisonContent = {
  label: "TikTok UGC vs Traditional Influencer Marketing",
  heading: "TikTok UGC in 2026",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving brands full control at scale.",
  ugcColumnHeader: "High Volume TikTok UGC",
  traditionalColumnHeader: "Traditional TikTok Influencer Marketing",
};

export const tiktokComparisonRows = standardComparisonRows;

export const tiktokPricing: PricingContent = {
  heading: "TikTok UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your TikTok creator needs.",
};

export const tiktokFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about TikTok influencer marketing and UGC on SideShift.",
};

export const tiktokFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is TikTok UGC?",
    answer: (
      <>
        TikTok UGC (user-generated content) is authentic short-form video content
        created by real users and creators rather than brands. It includes TikToks,
        duets, stitches, and trends that showcase genuine product experiences, driving
        higher engagement and trust compared to traditional branded content. Learn more
        in our{" "}
        <Link href="/blog/the-ultimate-guide-to-tiktok-content-creators" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          complete TikTok UGC strategy guide
        </Link>.
      </>
    ),
  },
  {
    id: 2,
    question: "How much do TikTok influencers cost?",
    answer: (
      <>
        TikTok influencer costs vary widely based on follower count and engagement
        rates. Nano-influencers (1K-10K followers) typically charge $50-$200 per post,
        while micro-influencers (10K-100K) charge $200-$1,000. With SideShift&apos;s
        UGC model, you get scalable, output-based pricing that&apos;s significantly
        more cost-effective than traditional influencer marketing. See our{" "}
        <Link href="/blog/tiktok-creator-marketplace" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          brand playbook for hiring TikTok creators
        </Link>.
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find TikTok creators for my brand?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators by niche, location, specialty, and more. Browse portfolios, view top posts, and message creators directly. Most brands hire their first creators within the first week.",
  },
  {
    id: 4,
    question: "What types of TikTok content can creators make?",
    answer: (
      <>
        Creators on SideShift produce all types of TikTok content including short-form
        videos, duets, stitches, product reviews, unboxings, tutorials, and trend-based
        content. Creators deliver native-feeling content optimized for the TikTok
        algorithm. Read our guide on{" "}
        <Link href="/blog/how-to-become-a-content-creator-on-tiktok" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          scaling TikTok content with UGC creators
        </Link>.
      </>
    ),
  },
  {
    id: 5,
    question: "How is UGC different from influencer marketing?",
    answer:
      "Traditional influencer marketing pays for access to an influencer's audience. UGC pays creators for the content itself, which you own and can use across your own channels and paid ads. This means more content, more testing, and better ROI at scale.",
  },
  {
    id: 6,
    question: "Can I use TikTok UGC for paid ads?",
    answer:
      "Yes! One of the biggest advantages of UGC is full usage rights. You can repurpose creator content across TikTok Spark Ads, Instagram ads, your website, email campaigns, and more—without additional licensing fees.",
  },
];

export const tiktokArticles: Article[] = [
  {
    slug: "the-ultimate-guide-to-tiktok-content-creators",
    title: "The Ultimate Guide to TikTok Content Creators",
    excerpt:
      "Learn how top brands are using TikTok UGC to drive viral growth and 3x more engagement than traditional branded content.",
    category: "TikTok Marketing",
    readTime: "7 min read",
  },
  {
    slug: "how-to-become-a-content-creator-on-tiktok",
    title: "Understand How to Become a Content Creator on TikTok",
    excerpt:
      "A step-by-step guide to producing high-volume TikTok content that performs across organic and paid.",
    category: "TikTok Content",
    readTime: "5 min read",
  },
  {
    slug: "tiktok-creator-marketplace",
    title: "TikTok Creator Marketplace: Everything You Need to Know",
    excerpt:
      "Everything you need to know about finding, vetting, and managing TikTok creators at scale.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const tiktokArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "TikTok Marketing Resources",
};
