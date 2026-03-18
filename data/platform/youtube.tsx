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

export const youtubeHeroOverrides: HeroOverrides = {
  label: "YouTube Influencers & UGC Creator Platform",
  headline: "Discover, Hire, & Manage YouTube Creators In One Place",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_yt_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_yt_hero",
  },
};

export const youtubeWhyUgc: WhyUgcContent = {
  label: "Why YouTube UGC?",
  heading: "Creator marketing has changed.",
  paragraphs: [
    "The winning strategy is volume and velocity. Ten creators posting authentic content weekly will outperform one mega-influencer posting once-a-month, every time.",
    "Creators on YouTube don\u2019t need 500K subscribers to drive results. They need to understand the platform, create native-feeling content, and ship consistently.",
  ],
  cards: [
    {
      title: "Dedicated YouTube Channels",
      description:
        "Creators who live on the platform and understand what performs. Native content that fits seamlessly into Shorts, long-form, and community posts.",
    },
    {
      title: "High Volume UGC",
      description:
        "More content means more tests, more iterations, and faster signal on what converts. Scale to hundreds of videos per month without the operational drag.",
    },
    {
      title: "Authentic Content That Actually Converts",
      description:
        "Real product experiences outperform polished ads. UGC generates higher engagement and trust on YouTube search, Shorts, and pre-roll ads.",
    },
  ],
};

export const youtubeUgcComparison: UgcComparisonContent = {
  label: "YouTube UGC vs Traditional Influencer Marketing",
  heading: "YouTube UGC in 2026",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving brands full control at scale.",
  ugcColumnHeader: "High Volume YouTube UGC",
  traditionalColumnHeader: "Traditional YouTube Influencer Marketing",
};

export const youtubeComparisonRows = standardComparisonRows;

export const youtubePricing: PricingContent = {
  heading: "YouTube UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your YouTube creator needs.",
};

export const youtubeFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about YouTube influencer marketing and UGC on SideShift.",
};

export const youtubeFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is YouTube UGC?",
    answer: (
      <>
        YouTube UGC (user-generated content) is authentic video content created by real
        users and creators rather than brands. It includes Shorts, long-form videos,
        product reviews, and tutorials that showcase genuine product experiences, driving
        higher engagement and trust compared to traditional branded content. Learn more
        in our{" "}
        <Link href="/blog/guide-to-youtube-content-creators" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          complete YouTube UGC strategy guide
        </Link>.
      </>
    ),
  },
  {
    id: 2,
    question: "How much do YouTube influencers cost?",
    answer: (
      <>
        YouTube influencer costs vary widely based on subscriber count and view averages.
        Nano-creators (1K-10K subscribers) typically charge $100-$500 per video,
        while micro-creators (10K-100K) charge $500-$2,500. With SideShift&apos;s
        UGC model, you get scalable, output-based pricing that&apos;s significantly
        more cost-effective than traditional influencer marketing. See our{" "}
        <Link href="/blog/hire-the-right-content-creator-for-your-marketing-campaign" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          brand playbook for hiring YouTube creators
        </Link>.
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find YouTube creators for my brand?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators by niche, location, specialty, and more. Browse portfolios, view top videos, and message creators directly. Most brands hire their first creators within the first week.",
  },
  {
    id: 4,
    question: "What types of YouTube content can creators make?",
    answer: (
      <>
        Creators on SideShift produce all types of YouTube content including Shorts,
        long-form reviews, unboxings, tutorials, hauls, and lifestyle vlogs. Creators
        deliver native-feeling content optimized for the YouTube algorithm. Read our
        guide on{" "}
        <Link href="/blog/how-to-produce-high-converting-social-media-videos" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          scaling YouTube Shorts with UGC creators
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
    question: "Can I use YouTube UGC for paid ads?",
    answer:
      "Yes! One of the biggest advantages of UGC is full usage rights. You can repurpose creator content across YouTube pre-rolls, Instagram ads, TikTok ads, your website, email campaigns, and more—without additional licensing fees.",
  },
];

export const youtubeArticles: Article[] = [
  {
    slug: "guide-to-youtube-content-creators",
    title: "A Guide to YouTube Content Creators for Brands",
    excerpt:
      "Learn how top brands are using YouTube UGC to drive long-term organic growth and higher watch time.",
    category: "YouTube Marketing",
    readTime: "7 min read",
  },
  {
    slug: "how-to-produce-high-converting-social-media-videos",
    title: "How to Produce High-Converting Social Media Videos",
    excerpt:
      "A step-by-step guide to producing high-volume Shorts content that performs across organic and paid.",
    category: "YouTube Shorts",
    readTime: "5 min read",
  },
  {
    slug: "hire-the-right-content-creator-for-your-marketing-campaign",
    title: "How to Hire the Right Content Creator for Your Marketing Campaign",
    excerpt:
      "Everything you need to know about finding, vetting, and managing YouTube creators at scale.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const youtubeArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "YouTube Marketing Resources",
};
