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

export const gamingHeroOverrides: HeroOverrides = {
  label: "Gaming UGC Creator Platform",
  headline: "Scale Your Gaming Brand With Authentic Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_gaming_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_gaming_hero",
  },
};

export const gamingWhyUgc: WhyUgcContent = {
  label: "Why Gaming UGC?",
  heading: "Gamers trust other gamers — not brands.",
  paragraphs: [
    "Gaming audiences are among the most ad-resistant in the world. Gameplay content, honest reviews, and streaming clips from real creators cut through that resistance because they come from voices the community already trusts.",
    "Gaming brands that invest in high-volume creator content drive downloads, purchases, and community growth at a fraction of the cost of traditional advertising — because authentic content from real players is what the gaming audience actually wants to watch.",
  ],
  cards: [
    {
      title: "Gameplay & Streaming Content",
      description:
        "Creators who play your game on camera, showcase mechanics, explore content, and react authentically. Native gameplay content that reaches gaming audiences where they already spend hours every day.",
    },
    {
      title: "Honest Reviews & First Impressions",
      description:
        "Real first-impression videos and in-depth reviews from credible gaming creators. The kind of honest takes that gaming audiences actively seek out before making a purchase decision.",
    },
    {
      title: "Streaming Clips & Highlights",
      description:
        "Short-form highlight clips, funny moments, and epic plays that go viral across TikTok, YouTube Shorts, and Instagram Reels. High-volume clip content that keeps your game in the conversation constantly.",
    },
  ],
};

export const gamingUgcComparison: UgcComparisonContent = {
  label: "Gaming UGC vs Traditional Influencer Marketing",
  heading: "Gaming UGC in 2026",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving gaming brands full control at scale.",
  ugcColumnHeader: "High Volume Gaming UGC",
  traditionalColumnHeader: "Traditional Gaming Influencer Marketing",
};

export const gamingComparisonRows = standardComparisonRows;

export const gamingPricing: PricingContent = {
  heading: "Gaming UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your gaming creator needs.",
};

export const gamingFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about gaming influencer marketing and UGC on SideShift.",
};

export const gamingFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is gaming UGC?",
    answer: (
      <>
        Gaming UGC is authentic content created by real players and creators —
        not brands — showcasing gameplay, honest game reviews, first impressions,
        streaming highlights, and gaming peripheral or hardware reviews. This content
        reaches gaming audiences in the formats they already consume and trust. Learn
        more in our{" "}
        <Link
          href="/blog/ugc-video-definition-benefits-and-use-cases"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete gaming UGC strategy guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How do I find gaming creators for my brand?",
    answer: (
      <>
        SideShift&apos;s marketplace includes 700,000+ vetted creators, with a
        substantial pool of gaming specialists across TikTok, YouTube, Instagram, and
        Twitch-adjacent content. You can filter by game genre, platform, content style,
        and audience size. Most gaming brands identify and hire their first creators
        within the first week. See our{" "}
        <Link
          href="/blog/how-to-find-ugc-creators"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          playbook for hiring gaming creators
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "What types of gaming content can UGC creators produce?",
    answer:
      "Gaming creators on SideShift produce gameplay walkthroughs, first impression and review videos, streaming highlight compilations, tier lists and rankings, hardware and peripheral reviews, in-game item showcases, and tutorial content. All content is authentic, creator-driven, and designed to perform on the platforms your gaming audience uses most.",
  },
  {
    id: 4,
    question: "How much does gaming influencer marketing cost?",
    answer: (
      <>
        Top-tier gaming influencers with millions of subscribers can charge tens of
        thousands per sponsored video. SideShift&apos;s UGC model gives you access to
        a large pool of authentic gaming creators at output-based pricing — meaning
        you pay for content, not audience access. This lets you run higher-volume
        campaigns with more creative variety for a fraction of the cost. Read our
        guide on{" "}
        <Link
          href="/blog/how-to-create-effective-ugc-ads"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          maximizing ROI with gaming UGC
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "Can I use gaming UGC in paid ads?",
    answer:
      "Yes. Every piece of content produced through SideShift comes with full usage rights. Gaming brands regularly use creator content as paid social ads on TikTok, YouTube, and Meta, as well as in app store listings, Discord community content, and website assets — all without additional licensing fees.",
  },
  {
    id: 6,
    question: "How do I brief gaming creators without restricting authenticity?",
    answer:
      "The most effective gaming creator briefs define the goal (drive downloads, showcase a feature, highlight a game mode) without over-scripting the delivery. Gaming audiences can immediately detect inauthentic sponsored content, so the best briefs give creators the key talking points and required disclosures while leaving the gameplay and commentary entirely in the creator's voice. SideShift provides gaming-specific brief templates that strike this balance.",
  },
];

export const gamingArticles: Article[] = [
  {
    slug: "ugc-video-definition-benefits-and-use-cases",
    title: "UGC Video: Definition, Benefits, and Use Cases",
    excerpt:
      "How top gaming studios and peripheral brands are using creator content to drive downloads, build community, and scale authentic marketing.",
    category: "Gaming Marketing",
    readTime: "7 min read",
  },
  {
    slug: "how-to-create-effective-ugc-ads",
    title: "How to Create Effective UGC Ads",
    excerpt:
      "A breakdown of why authentic gameplay content and creator reviews outperform traditional gaming advertising and how to structure campaigns for results.",
    category: "UGC Strategy",
    readTime: "5 min read",
  },
  {
    slug: "how-to-find-ugc-creators",
    title: "How to Find UGC Creators for Your Brand in 2026",
    excerpt:
      "Everything you need to know about finding, briefing, and managing gaming creators who drive real results for your game or brand.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const gamingArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Gaming Marketing Resources",
};
