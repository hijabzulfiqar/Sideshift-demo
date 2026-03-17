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

export const highVolumeHeroOverrides: HeroOverrides = {
  label: "High Volume UGC Platform",
  headline: "Scale content production with high volume UGC creators.",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Get Started",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_high_volume_hero",
  },
  secondaryCta: {
    text: "Learn More",
    href: "/contact",
    event: "book_demo_high_volume_hero",
  },
};

export const highVolumeWhyUgc: WhyUgcContent = {
  label: "The Benefits of High Volume UGC",
  heading: "Volume beats polish. Every time.",
  paragraphs: [
    "The fastest-growing brands aren\u2019t spending more on production — they\u2019re testing more. Ten creators posting authentic content weekly will outperform one mega-influencer posting monthly, every time.",
    "High-volume UGC gives you the creative velocity to find what resonates, then scale it — without blowing your budget on a single polished campaign that might not land.",
  ],
  cards: [
    {
      title: "Content at Scale",
      description:
        "Go from a handful of brand assets to hundreds of creator videos per month. More creative variety means more data on what drives clicks, views, and conversions.",
    },
    {
      title: "Full Usage Rights",
      description:
        "Every piece of content is yours. Run it across paid ads, organic channels, email, and beyond — without additional licensing fees or complicated rights negotiations.",
    },
    {
      title: "Authentic Content That Converts",
      description:
        "Real product experiences outperform polished ads. UGC blends naturally into feeds, builds trust faster, and performs stronger across every platform.",
    },
  ],
};

export const highVolumeUgcComparison: UgcComparisonContent = {
  label: "High Volume UGC vs Traditional Content Production",
  heading: "High Volume UGC in 2026",
  description:
    "High-volume UGC outperforms traditional content production on cost, speed, authenticity, and content rights — giving brands full control at scale.",
  ugcColumnHeader: "High Volume UGC",
  traditionalColumnHeader: "Traditional Content Production",
};

export const highVolumeComparisonRows = standardComparisonRows;

export const highVolumePricing: PricingContent = {
  heading: "Simple pricing that scales with your creator output",
  subheading: "Choose a plan that fits your content volume.",
};

export const highVolumeFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about high-volume UGC production on SideShift.",
};

export const highVolumeFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is high-volume UGC?",
    answer: (
      <>
        High-volume UGC is the practice of producing large quantities of
        authentic, creator-made content — typically hundreds of videos per month
        — to fuel organic channels, paid ads, and owned media. Instead of
        relying on a few polished assets, brands test at scale to find what
        resonates. Learn more in our{" "}
        <Link
          href="/blog/how-to-scale-ugc-campaigns"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete high-volume UGC guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How many creators do I need for high-volume UGC?",
    answer:
      "It depends on your content goals. Most brands start with 5-10 creators and scale to 50+ as they identify top performers. SideShift makes it easy to onboard creators in bulk, manage briefs, and track output across your entire roster.",
  },
  {
    id: 3,
    question: "How much does high-volume UGC cost?",
    answer: (
      <>
        With SideShift, plans start at $199/month — significantly less than
        agency production or traditional influencer partnerships. You get
        scalable, output-based pricing without per-post fees. See our{" "}
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
    id: 4,
    question: "What types of content can creators produce at scale?",
    answer:
      "Creators on SideShift produce short-form video (Reels, TikToks, Shorts), product reviews, unboxings, tutorials, testimonials, lifestyle content, and more. Content is delivered ready to post across your channels and ad accounts.",
  },
  {
    id: 5,
    question: "Can I use high-volume UGC for paid ads?",
    answer:
      "Absolutely. Every piece of content comes with full usage rights. Run it across Instagram, TikTok, Facebook, YouTube, or any other platform — for both organic and paid campaigns — without additional licensing fees.",
  },
  {
    id: 6,
    question: "How does SideShift ensure content quality at scale?",
    answer:
      "SideShift vets every creator before they join the marketplace. Brands review portfolios, set detailed briefs, and approve content before it goes live. Built-in revision workflows and performance tracking ensure quality stays high as you scale.",
  },
];

export const highVolumeArticles: Article[] = [
  {
    slug: "how-to-scale-ugc-campaigns",
    title: "How to Scale UGC Campaigns Across TikTok, Reels & Shorts",
    excerpt:
      "How top brands are scaling content production with hundreds of creators — without sacrificing quality or control.",
    category: "Content Strategy",
    readTime: "8 min read",
  },
  {
    slug: "the-most-effective-types-of-ugc-content-for-marketing",
    title: "The Most Effective Types of UGC Content for Marketing in 2026",
    excerpt:
      "A practical framework for testing creator content at scale and identifying top-performing creative faster.",
    category: "Testing & Optimization",
    readTime: "6 min read",
  },
  {
    slug: "creator-management-how-to-organize-and-scale-content-production",
    title: "Creator Management: How to Organize and Scale Content Production",
    excerpt:
      "How to manage briefs, approvals, and creator relationships as you scale from 5 to 500 videos per month.",
    category: "Operations",
    readTime: "5 min read",
  },
];

export const highVolumeArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "High Volume UGC Resources",
};
