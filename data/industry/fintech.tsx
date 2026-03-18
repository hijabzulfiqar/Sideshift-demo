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

export const fintechHeroOverrides: HeroOverrides = {
  label: "Financial Services & Fintech UGC Creator Platform",
  headline: "Scale Your Fintech Brand With Authentic Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_fintech_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_fintech_hero",
  },
};

export const fintechWhyUgc: WhyUgcContent = {
  label: "Why Fintech UGC?",
  heading: "Financial services marketing has changed.",
  paragraphs: [
    "Trust is the currency of fintech. Consumers are skeptical of polished bank ads — but they listen to real people sharing genuine experiences with financial products, apps, and services.",
    "UGC creators in the financial space drive sign-ups, app downloads, and account openings by explaining complex products in plain language and demonstrating real-world value that traditional marketing can't replicate.",
  ],
  cards: [
    {
      title: "Product Walkthroughs & Demos",
      description:
        "Creators walk through your app, platform, or financial product step-by-step, showing real users how it works and why it matters. Native, authentic demos outperform scripted brand ads every time.",
    },
    {
      title: "Trust-Building Testimonial Content",
      description:
        "Genuine testimonials from real users build the credibility that fintech brands need to convert skeptical consumers. Creator-driven social proof accelerates sign-ups and reduces friction in the purchase funnel.",
    },
    {
      title: "Educational Financial Content",
      description:
        "Creators who understand personal finance, investing, or payments can explain your product's benefits in a way that resonates with your target audience — turning education into acquisition at scale.",
    },
  ],
};

export const fintechUgcComparison: UgcComparisonContent = {
  label: "Fintech UGC vs Traditional Financial Marketing",
  heading: "Fintech UGC in 2026",
  description:
    "High-volume UGC outperforms traditional financial advertising on cost, authenticity, trust, and content rights — giving fintech brands full control over their creator strategy at scale.",
  ugcColumnHeader: "High Volume Fintech UGC",
  traditionalColumnHeader: "Traditional Financial Marketing",
};

export const fintechComparisonRows = standardComparisonRows;

export const fintechPricing: PricingContent = {
  heading: "Fintech UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your fintech creator marketing needs.",
};

export const fintechFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about fintech UGC and creator marketing on SideShift.",
};

export const fintechFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is fintech UGC?",
    answer: (
      <>
        Fintech UGC (user-generated content) is authentic content created by
        real users and creators showcasing financial products, apps, and
        services. It includes video walkthroughs, testimonials, educational
        explainers, and reviews that build trust and drive conversions far more
        effectively than traditional financial advertising. Learn more in our{" "}
        <Link
          href="/blog/benefits-of-user-generated-content"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete fintech UGC strategy guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How do I stay compliant when using UGC for financial products?",
    answer: (
      <>
        Compliance is a top priority for fintech brands. When working with
        creators on SideShift, you provide the brief and messaging guidelines,
        ensuring creators stay within approved claims and disclosures. All
        sponsored content is disclosed per FTC guidelines, and your legal team
        can review content before publication. Read our guide on{" "}
        <Link
          href="/blog/ugc-moderation-guide-how-to-maintain-quality-across-creators"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          staying compliant with fintech UGC
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find finance creators for my brand?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators by niche, including personal finance, investing, budgeting, and fintech. Filter by platform, location, audience demographics, and more. Browse portfolios, view top-performing content, and message creators directly. Most fintech brands hire their first creators within the first week.",
  },
  {
    id: 4,
    question: "What types of content can fintech UGC creators make?",
    answer: (
      <>
        Fintech creators on SideShift produce a wide range of content including
        app walkthroughs and demos, personal finance tips featuring your
        product, testimonials and review videos, explainer content on financial
        concepts, and side-by-side comparisons. All content is native to the
        platform — whether that&apos;s TikTok, Instagram Reels, YouTube Shorts,
        or long-form YouTube. Read our guide on{" "}
        <Link
          href="/blog/the-most-effective-types-of-ugc-content-for-marketing"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          the best content formats for fintech UGC
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "How is UGC different from traditional financial marketing?",
    answer:
      "Traditional financial marketing relies on polished brand ads, celebrity endorsements, and broad media buys that consumers increasingly tune out. UGC pays real creators to share genuine product experiences — content your brand fully owns and can repurpose across paid ads, social channels, and your website. The result is higher trust, better conversion rates, and significantly lower cost per acquisition.",
  },
  {
    id: 6,
    question: "Can I use fintech UGC for paid ads?",
    answer:
      "Yes — and it's one of the highest-ROI uses of fintech UGC. With full usage rights included, you can run creator content as paid social ads on Meta, TikTok, YouTube, and more. UGC-style ads consistently outperform traditional creative in financial services, delivering lower CPAs and higher click-through rates by combining authenticity with precise targeting.",
  },
];

export const fintechArticles: Article[] = [
  {
    slug: "benefits-of-user-generated-content",
    title: "9 Benefits of User Generated Content (UGC) for Your Business",
    excerpt:
      "Learn how leading fintech brands are using creator content to drive app downloads, sign-ups, and account openings at scale.",
    category: "Fintech Marketing",
    readTime: "7 min read",
  },
  {
    slug: "ugc-moderation-guide-how-to-maintain-quality-across-creators",
    title: "UGC Moderation Guide: How to Maintain Quality Across Creators",
    excerpt:
      "A practical guide to working with creators on financial products while staying within FTC, SEC, and platform guidelines.",
    category: "Compliance",
    readTime: "6 min read",
  },
  {
    slug: "the-most-effective-types-of-ugc-content-for-marketing",
    title: "The Most Effective Types of UGC Content for Marketing in 2026",
    excerpt:
      "From app walkthroughs to testimonials and educational explainers — the content types that convert for financial brands.",
    category: "Content Strategy",
    readTime: "5 min read",
  },
];

export const fintechArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Fintech Marketing Resources",
};
