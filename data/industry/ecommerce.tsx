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

export const ecommerceHeroOverrides: HeroOverrides = {
  label: "E-Commerce UGC Creator Platform",
  headline: "Drive E-Commerce Sales With Authentic Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_ecommerce_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_ecommerce_hero",
  },
};

export const ecommerceWhyUgc: WhyUgcContent = {
  label: "Why E-Commerce UGC?",
  heading: "Product reviews and unboxings are the new storefront.",
  paragraphs: [
    "Shoppers don't trust product pages — they trust other people. Product reviews, unboxing videos, and haul content from real creators remove purchase hesitation and shorten the path to checkout.",
    "E-commerce brands running high-volume UGC campaigns see higher conversion rates, lower return rates, and better ad performance. The more real content you have, the more trust you build at every stage of the funnel.",
  ],
  cards: [
    {
      title: "Product Reviews & Demos",
      description:
        "Authentic creator reviews that highlight real product benefits, answer common objections, and give shoppers the social proof they need to add to cart.",
    },
    {
      title: "Unboxing & Haul Videos",
      description:
        "First-impression unboxings and haul roundups that generate excitement and discovery. These formats drive massive organic reach and convert viewers into buyers.",
    },
    {
      title: "Shoppable & Ad-Ready Content",
      description:
        "Full usage rights on every piece of content means you can run creator videos directly as paid ads, embed them on PDPs, and repurpose them across every channel — no re-licensing required.",
    },
  ],
};

export const ecommerceUgcComparison: UgcComparisonContent = {
  label: "E-Commerce UGC vs Traditional Influencer Marketing",
  heading: "E-Commerce UGC in 2026",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving e-commerce brands full control at scale.",
  ugcColumnHeader: "High Volume E-Commerce UGC",
  traditionalColumnHeader: "Traditional E-Commerce Influencer Marketing",
};

export const ecommerceComparisonRows = standardComparisonRows;

export const ecommercePricing: PricingContent = {
  heading: "E-commerce UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your e-commerce creator needs.",
};

export const ecommerceFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about e-commerce influencer marketing and UGC on SideShift.",
};

export const ecommerceFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is e-commerce UGC?",
    answer: (
      <>
        E-commerce UGC is authentic content created by real shoppers and creators —
        not brands — showcasing products through reviews, unboxings, haul videos, and
        lifestyle demonstrations. This content removes purchase hesitation and drives
        conversions far more effectively than brand-produced ads. Learn more in our{" "}
        <Link
          href="/blog/ecommerce-influencer-marketing-platform"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete e-commerce UGC strategy guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How does UGC improve e-commerce conversion rates?",
    answer: (
      <>
        UGC works at every stage of the e-commerce funnel. Unboxing videos and haul
        content drive top-of-funnel discovery, while detailed product reviews and
        tutorials handle mid-funnel consideration. On product pages, embedded UGC
        videos can increase conversion rates by 80% or more. Read our breakdown of{" "}
        <Link
          href="/blog/how-to-scale-ugc-campaigns"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          how UGC drives e-commerce conversions
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "What types of e-commerce UGC content perform best?",
    answer:
      "The highest-performing e-commerce UGC formats are product unboxings, honest reviews, before-and-after demos, comparison videos, and haul roundups. Short-form video content on TikTok, Instagram Reels, and YouTube Shorts consistently drives the strongest return on investment for e-commerce brands.",
  },
  {
    id: 4,
    question: "How do I find e-commerce creators for my brand?",
    answer: (
      <>
        SideShift&apos;s marketplace gives you access to 700,000+ vetted creators
        searchable by niche, content style, platform, and more. You can browse
        portfolios, filter by e-commerce content experience, and message creators
        directly. Most brands launch their first UGC campaign within a week. See our{" "}
        <Link
          href="/blog/hire-the-right-content-creator-for-your-marketing-campaign"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          playbook for hiring e-commerce UGC creators
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "Can I use e-commerce UGC in paid ads?",
    answer:
      "Yes. Every piece of content produced through SideShift comes with full usage rights. You can run creator videos as paid social ads, embed them on product detail pages, use them in email campaigns, and feature them in marketplace listings — all without additional licensing or usage fees.",
  },
  {
    id: 6,
    question: "How is UGC different from traditional product photography?",
    answer:
      "Traditional product photography is polished and brand-controlled but often fails to answer real shopper questions. UGC shows products in real-world use, addresses genuine objections, and creates the authentic social proof that modern buyers require before purchasing. The two complement each other — UGC drives trust while professional photography handles catalog and brand identity.",
  },
];

export const ecommerceArticles: Article[] = [
  {
    slug: "ecommerce-influencer-marketing-platform",
    title: "Best Ecommerce Influencer Marketing Platform",
    excerpt:
      "How top e-commerce brands are using creator content to reduce return rates, increase conversions, and scale their content library.",
    category: "E-Commerce Marketing",
    readTime: "7 min read",
  },
  {
    slug: "how-to-scale-ugc-campaigns",
    title: "How to Scale UGC Campaigns Across TikTok, Reels & Shorts",
    excerpt:
      "A data-backed look at how product reviews, unboxings, and haul videos move shoppers from discovery to checkout.",
    category: "Conversion Optimization",
    readTime: "6 min read",
  },
  {
    slug: "hire-the-right-content-creator-for-your-marketing-campaign",
    title: "How to Hire the Right Content Creator for Your Marketing Campaign",
    excerpt:
      "Everything you need to know about finding, briefing, and managing UGC creators who drive real sales for e-commerce brands.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const ecommerceArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "E-Commerce Marketing Resources",
};
