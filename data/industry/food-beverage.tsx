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

export const foodBevHeroOverrides: HeroOverrides = {
  label: "Food & Beverage UGC Creator Platform",
  headline: "Scale Your Food & Beverage Brand With Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Get Started",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_food_bev_hero",
  },
  secondaryCta: {
    text: "Learn More",
    href: "/contact",
    event: "book_demo_food_bev_hero",
  },
};

export const foodBevWhyUgc: WhyUgcContent = {
  label: "Why Food & Beverage UGC?",
  heading: "Creator content built for food & beverage brands.",
  paragraphs: [
    "Food and beverage is one of the most competitive categories in e-commerce and retail. Consumers don't trust banner ads — they trust people who actually cook, eat, and drink your product. UGC gives F&B brands the authentic presence they need to stand out on every platform.",
    "From recipe creators to taste-test reviewers, food-focused creators drive discovery, trial, and repeat purchases. Brands scaling with creator content aren't just building awareness — they're building communities that convert.",
  ],
  cards: [
    {
      title: "Recipe & Taste Test Content",
      description:
        "Food creators produce engaging recipe tutorials and honest taste tests that show your product in action. This format drives high engagement and directly shortens the path from discovery to purchase.",
    },
    {
      title: "High Volume Food Content",
      description:
        "Scale your content library with dozens of creator videos per month — different angles, formats, and audiences. High-volume UGC lets you test what resonates and double down on winning content without production bottlenecks.",
    },
    {
      title: "Authentic Reviews & Unboxings",
      description:
        "Real first-impression unboxings and honest product reviews build trust with skeptical shoppers. Authentic creator endorsements outperform paid placements because audiences know the creator is genuinely trying your product.",
    },
  ],
};

export const foodBevUgcComparison: UgcComparisonContent = {
  label: "F&B UGC vs Traditional F&B Marketing",
  heading: "Food & Beverage UGC in 2026",
  description:
    "Creator-led UGC outperforms traditional food & beverage marketing on cost, speed, authenticity, and scalability — giving brands full creative control without the studio overhead.",
  ugcColumnHeader: "Food & Beverage UGC",
  traditionalColumnHeader: "Traditional F&B Marketing",
};

export const foodBevComparisonRows = standardComparisonRows;

export const foodBevPricing: PricingContent = {
  heading: "Simple pricing that scales with your creator output",
  subheading: "Choose a plan that fits your food & beverage brand.",
};

export const foodBevFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about UGC for food & beverage brands on SideShift.",
};

export const foodBevFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is UGC for food and beverage brands?",
    answer: (
      <>
        UGC for food and beverage brands is authentic creator-made content —
        recipe videos, taste tests, unboxings, and lifestyle integrations —
        produced by real people who try and review your products. Unlike
        traditional studio shoots, F&B UGC feels native to platforms like
        TikTok and Instagram and consistently earns higher engagement and trust.
        Learn more in our{" "}
        <Link
          href="/blog/ugc-video-definition-benefits-and-use-cases"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          food & beverage UGC guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How much does food & beverage creator content cost?",
    answer: (
      <>
        Traditional food photography and video production can cost $5,000–
        $30,000+ per shoot. With SideShift&apos;s output-based pricing starting
        at $199/month, food and beverage brands get scalable creator content at
        a fraction of the cost — without sacrificing quality or authenticity.
        See our{" "}
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
    question: "How do I find food creators for my brand?",
    answer:
      "SideShift's marketplace includes 700,000+ vetted creators across all niches. You can filter specifically for food and beverage creators by niche, platform, location, content style, and audience size. Review portfolios, check engagement rates, and hire directly. Most F&B brands find their first creators within a week.",
  },
  {
    id: 4,
    question: "What types of content do food & beverage creators produce?",
    answer: (
      <>
        Food and beverage creators on SideShift produce a wide range of content
        including recipe tutorials, taste tests, product unboxings, &quot;what I
        eat in a day&quot; integrations, cooking challenges, and honest
        first-impression reviews. Content is delivered ready to use across
        TikTok, Instagram Reels, YouTube Shorts, and paid ad campaigns. Read
        our guide on{" "}
        <Link
          href="/blog/the-most-effective-types-of-ugc-content-for-marketing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          top-performing food UGC content formats
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "Can I use food creator content in paid ads?",
    answer:
      "Yes. All content produced through SideShift comes with full commercial usage rights. You can repurpose creator content as Meta Ads, TikTok Spark Ads, YouTube pre-rolls, and across your own channels — without additional licensing fees or restrictions.",
  },
  {
    id: 6,
    question: "How does UGC help food & beverage brands grow?",
    answer:
      "Food and beverage UGC drives discovery, trial, and loyalty. Creator-made content reaches niche audiences that traditional advertising misses, generates social proof that lowers purchase hesitation, and builds a community of advocates around your product. Brands using SideShift for F&B UGC typically see stronger engagement, higher conversion rates, and lower customer acquisition costs than brands relying on studio creative alone.",
  },
];

export const foodBevArticles: Article[] = [
  {
    slug: "ugc-video-definition-benefits-and-use-cases",
    title: "UGC Video: Definition, Benefits, and Use Cases",
    excerpt:
      "Learn how leading food and beverage brands are using creator content to drive discovery, trial, and repeat purchases at scale.",
    category: "Food & Beverage",
    readTime: "7 min read",
  },
  {
    slug: "the-most-effective-types-of-ugc-content-for-marketing",
    title: "The Most Effective Types of UGC Content for Marketing in 2026",
    excerpt:
      "A breakdown of the recipe, taste test, and review formats driving the best results for food and beverage brands on TikTok and Instagram.",
    category: "Content Strategy",
    readTime: "5 min read",
  },
  {
    slug: "how-to-collaborate-with-influencers",
    title: "How to Collaborate With Influencers: A Complete Guide",
    excerpt:
      "We look at how top F&B brands are building scalable creator programs to outperform competitors and build loyal communities.",
    category: "Strategy",
    readTime: "6 min read",
  },
];

export const foodBevArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Food & Beverage Resources",
};
