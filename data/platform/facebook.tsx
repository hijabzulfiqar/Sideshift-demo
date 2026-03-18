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

export const facebookHeroOverrides: HeroOverrides = {
  label: "Facebook Influencers & UGC Creator Platform",
  headline: "Discover, Hire, & Manage Facebook Creators In One Place",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_fb_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_fb_hero",
  },
};

export const facebookWhyUgc: WhyUgcContent = {
  label: "Why Facebook UGC?",
  heading: "Creator marketing has changed.",
  paragraphs: [
    "The winning strategy is volume and velocity. Ten creators posting authentic content weekly will outperform one mega-influencer posting once-a-month, every time.",
    "Creators on Facebook don\u2019t need 500K followers to drive results. They need to understand the platform, create native-feeling content, and ship consistently.",
  ],
  cards: [
    {
      title: "Dedicated Facebook Accounts",
      description:
        "Creators who live on the platform and understand what performs. Native content that fits seamlessly into feeds, Reels, and Stories.",
    },
    {
      title: "High Volume UGC",
      description:
        "More content means more tests, more iterations, and faster signal on what converts. Scale to hundreds of videos per month without the operational drag.",
    },
    {
      title: "Authentic Content That Actually Converts",
      description:
        "Real product experiences outperform polished ads. UGC generates higher engagement and trust on Facebook feeds, Reels, and paid ads.",
    },
  ],
};

export const facebookUgcComparison: UgcComparisonContent = {
  label: "Facebook UGC vs Traditional Influencer Marketing",
  heading: "Facebook UGC in 2026",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving brands full control at scale.",
  ugcColumnHeader: "High Volume Facebook UGC",
  traditionalColumnHeader: "Traditional Facebook Influencer Marketing",
};

export const facebookComparisonRows = standardComparisonRows;

export const facebookPricing: PricingContent = {
  heading: "Facebook UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your Facebook creator needs.",
};

export const facebookFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about Facebook influencer marketing and UGC on SideShift.",
};

export const facebookFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is Facebook UGC?",
    answer: (
      <>
        Facebook UGC (user-generated content) is authentic content created by real
        users and creators rather than brands. It includes Reels, videos, posts, and
        Stories that showcase genuine product experiences, driving higher engagement
        and trust compared to traditional branded content. Learn more in our{" "}
        <Link href="/blog/guide-to-working-with-facebook-creators" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          complete Facebook UGC strategy guide
        </Link>.
      </>
    ),
  },
  {
    id: 2,
    question: "How much do Facebook influencers cost?",
    answer: (
      <>
        Facebook influencer costs vary widely based on follower count and engagement
        rates. Nano-influencers (1K-10K followers) typically charge $50-$250 per post,
        while micro-influencers (10K-100K) charge $250-$1,000. With SideShift&apos;s
        UGC model, you get scalable, output-based pricing that&apos;s significantly
        more cost-effective than traditional influencer marketing. See our{" "}
        <Link href="/blog/hire-the-right-content-creator-for-your-marketing-campaign" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          brand playbook for hiring Facebook creators
        </Link>.
      </>
    ),
  },
  {
    id: 3,
    question: "How do I find Facebook creators for my brand?",
    answer:
      "With SideShift, you can search our marketplace of 700,000+ vetted creators by niche, location, specialty, and more. Browse portfolios, view top posts, and message creators directly. Most brands hire their first creators within the first week.",
  },
  {
    id: 4,
    question: "What types of Facebook content can creators make?",
    answer: (
      <>
        Creators on SideShift produce all types of Facebook content including Reels,
        video posts, Stories, and carousel content. From product reviews and unboxings
        to tutorials and lifestyle content, creators deliver native-feeling content
        optimized for the Facebook algorithm. Read our guide on{" "}
        <Link href="/blog/how-to-produce-high-converting-social-media-videos" className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]">
          scaling Facebook Reels with UGC creators
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
    question: "Can I use Facebook UGC for paid ads?",
    answer:
      "Yes! One of the biggest advantages of UGC is full usage rights. You can repurpose creator content across Facebook ads, Instagram ads, your website, email campaigns, and more—without additional licensing fees.",
  },
];

export const facebookArticles: Article[] = [
  {
    slug: "guide-to-working-with-facebook-creators",
    title: "Guide to Working With Facebook Creators",
    excerpt:
      "Learn how top brands are using Facebook UGC to drive 3x more engagement than traditional branded content.",
    category: "Facebook Marketing",
    readTime: "7 min read",
  },
  {
    slug: "how-to-produce-high-converting-social-media-videos",
    title: "How to Produce High-Converting Social Media Videos",
    excerpt:
      "A step-by-step guide to producing high-volume Reels content that performs across organic and paid.",
    category: "Facebook Reels",
    readTime: "5 min read",
  },
  {
    slug: "hire-the-right-content-creator-for-your-marketing-campaign",
    title: "How to Hire the Right Content Creator for Your Marketing Campaign",
    excerpt:
      "Everything you need to know about finding, vetting, and managing Facebook creators at scale.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const facebookArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Facebook Marketing Resources",
};
