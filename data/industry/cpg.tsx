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

export const cpgHeroOverrides: HeroOverrides = {
  label: "CPG UGC Creator Platform",
  headline: "Scale Your CPG Brand With Authentic Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_cpg_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_cpg_hero",
  },
};

export const cpgWhyUgc: WhyUgcContent = {
  label: "Why CPG UGC?",
  heading: "Consumer packaged goods marketing has changed.",
  paragraphs: [
    "Shoppers trust real people over brand advertising. Authentic creator content showing genuine everyday product use drives purchase decisions far more effectively than polished TV spots or static banner ads.",
    "The winning CPG brands are flooding every channel with high-volume UGC — product unboxings, honest reviews, and real-life usage moments that meet consumers where they are and convert at every stage of the funnel.",
  ],
  cards: [
    {
      title: "Product Unboxings & Reviews",
      description:
        "Creators showcase the real out-of-box experience and deliver honest, relatable reviews that build consumer trust and drive purchase intent at the point of discovery.",
    },
    {
      title: "High Volume Content",
      description:
        "Scale to hundreds of pieces of content per month across every major platform. More content means more tests, faster learnings, and a constant stream of fresh creative for organic and paid.",
    },
    {
      title: "Authentic Everyday Use Content",
      description:
        "Real consumers using your products in their daily routines outperform polished ads. Native-feeling UGC integrates seamlessly into feeds and drives higher engagement and conversion rates.",
    },
  ],
};

export const cpgUgcComparison: UgcComparisonContent = {
  label: "CPG UGC vs Traditional CPG Marketing",
  heading: "CPG UGC in 2026",
  description:
    "High-volume UGC outperforms traditional CPG marketing on cost, speed, authenticity, and content rights — giving brands full control at scale across every channel.",
  ugcColumnHeader: "High Volume CPG UGC",
  traditionalColumnHeader: "Traditional CPG Marketing",
};

export const cpgComparisonRows = standardComparisonRows;

export const cpgPricing: PricingContent = {
  heading: "CPG UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your CPG creator needs.",
};

export const cpgFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about CPG influencer marketing and UGC on SideShift.",
};

export const cpgFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is CPG UGC?",
    answer: (
      <>
        CPG UGC (user-generated content) is authentic content created by real
        consumers and creators showcasing consumer packaged goods in their
        everyday lives. It includes product unboxings, honest reviews, tutorials,
        and lifestyle content that builds trust and drives purchase intent far
        more effectively than traditional brand advertising. Learn more in our{" "}
        <Link href="/blog/benefits-of-user-generated-content" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          complete CPG UGC strategy guide
        </Link>.
      </>
    ),
  },
  {
    id: 2,
    question: "How much does CPG creator marketing cost?",
    answer: (
      <>
        CPG creator marketing costs vary based on content volume, creator tier,
        and platform. With SideShift&apos;s output-based pricing model, you pay
        for content delivered rather than follower counts, making it significantly
        more cost-effective than traditional influencer campaigns or TV and print
        advertising. See our{" "}
        <Link href="/blog/how-to-find-ugc-creators" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          brand playbook for hiring CPG creators
        </Link>.
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find creators for my CPG brand?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators by niche, product category, location, and more. Browse portfolios, view past brand work, and message creators directly. Most CPG brands hire their first creators within the first week and have content in market within two weeks.",
  },
  {
    id: 4,
    question: "What types of CPG content can creators make?",
    answer: (
      <>
        Creators on SideShift produce all types of CPG content including product
        unboxings, taste tests, before-and-after demonstrations, everyday use
        vlogs, grocery hauls, and honest product reviews. Content is optimized
        for TikTok, Instagram Reels, YouTube Shorts, and paid ad placements. Read
        our guide on{" "}
        <Link href="/blog/the-most-effective-types-of-ugc-content-for-marketing" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          the best CPG UGC content formats for 2026
        </Link>.
      </>
    ),
  },
  {
    id: 5,
    question: "Can I use CPG UGC for paid advertising?",
    answer:
      "Yes! Full usage rights are included with all SideShift creator content. You can repurpose CPG UGC across paid social ads, programmatic display, your website, retail media networks, email campaigns, and in-store digital signage — with no additional licensing fees.",
  },
  {
    id: 6,
    question: "How is UGC different from traditional CPG marketing?",
    answer:
      "Traditional CPG marketing relies on expensive TV spots, print ads, and polished brand campaigns that consumers increasingly tune out. UGC leverages real people creating authentic content about your products, which generates higher trust, better engagement, and lower cost-per-acquisition — especially for brands competing in crowded retail categories.",
  },
];

export const cpgArticles: Article[] = [
  {
    slug: "benefits-of-user-generated-content",
    title: "9 Benefits of User Generated Content (UGC) for Your Business",
    excerpt:
      "Learn how leading CPG brands are using creator content to drive 3x more engagement and measurable lift in retail sales.",
    category: "CPG Marketing",
    readTime: "7 min read",
  },
  {
    slug: "the-most-effective-types-of-ugc-content-for-marketing",
    title: "The Most Effective Types of UGC Content for Marketing in 2026",
    excerpt:
      "A breakdown of the top-performing UGC content types for consumer packaged goods brands across TikTok, Instagram, and YouTube.",
    category: "Content Strategy",
    readTime: "5 min read",
  },
  {
    slug: "how-to-find-ugc-creators",
    title: "How to Find UGC Creators for Your Brand in 2026",
    excerpt:
      "Everything you need to know about finding, vetting, and managing creators for your consumer packaged goods brand at scale.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const cpgArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "CPG Marketing Resources",
};
