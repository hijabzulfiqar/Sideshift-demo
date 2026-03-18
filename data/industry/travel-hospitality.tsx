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

export const travelHeroOverrides: HeroOverrides = {
  label: "Travel & Hospitality UGC Creator Platform",
  headline: "Grow Your Travel Brand With Authentic Creator Content",
  stats: [
    { value: "700,000", label: "Creators" },
    { value: "5 Billion", label: "Views (in the last 90 days)" },
    { value: "10,000+", label: "Campaigns Launched" },
  ],
  primaryCta: {
    text: "Start Free Trial",
    href: "https://app.sideshift.app/signup",
    event: "start_free_trial_travel_hero",
  },
  secondaryCta: {
    text: "Book a Demo",
    href: "/contact",
    event: "book_demo_travel_hero",
  },
};

export const travelWhyUgc: WhyUgcContent = {
  label: "Why Travel & Hospitality UGC?",
  heading: "Travelers book what they see real people experiencing.",
  paragraphs: [
    "Destination content, hotel reviews, and experience vlogs from real creators inspire travel decisions more than any brochure or brand campaign ever could. People book trips based on what they see people like them doing.",
    "Travel and hospitality brands that invest in high-volume creator content fill more rooms, sell more tours, and build the kind of aspirational brand recognition that drives bookings year-round.",
  ],
  cards: [
    {
      title: "Destination & Experience Content",
      description:
        "Creators who capture the essence of a destination — the food, the culture, the hidden gems — giving potential travelers the visual proof they need to book. Native content that inspires action.",
    },
    {
      title: "Hotel & Property Reviews",
      description:
        "Honest, detailed property walkthroughs and stay reviews from creators with engaged travel audiences. Real room tours and amenity showcases that answer the questions travelers actually have.",
    },
    {
      title: "Experience Vlogs & Itineraries",
      description:
        "Day-by-day itinerary content and experience vlogs that position your destination or brand as the obvious choice. High-volume content that keeps your brand top-of-mind throughout the travel planning journey.",
    },
  ],
};

export const travelUgcComparison: UgcComparisonContent = {
  label: "Travel & Hospitality UGC vs Traditional Influencer Marketing",
  heading: "Travel & Hospitality UGC in 2026",
  description:
    "High-volume UGC outperforms traditional influencer campaigns on cost, speed, authenticity, and content rights — giving travel and hospitality brands full control at scale.",
  ugcColumnHeader: "High Volume Travel & Hospitality UGC",
  traditionalColumnHeader: "Traditional Travel Influencer Marketing",
};

export const travelComparisonRows = standardComparisonRows;

export const travelPricing: PricingContent = {
  heading: "Travel & hospitality UGC pricing that scales with your content",
  subheading: "Choose a plan that fits your travel and hospitality creator needs.",
};

export const travelFaqContent: FaqContent = {
  heading: "FAQs",
  subheading:
    "Common questions about travel & hospitality influencer marketing and UGC on SideShift.",
};

export const travelFaqData: FaqItem[] = [
  {
    id: 1,
    question: "What is travel & hospitality UGC?",
    answer: (
      <>
        Travel and hospitality UGC is authentic content created by real travelers and
        creators — not brands — showcasing destinations, hotels, restaurants, and
        experiences. From hotel room tours to destination vlogs, this content inspires
        travel decisions and builds brand trust at scale. Learn more in our{" "}
        <Link
          href="/blog/benefits-of-user-generated-content"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          complete travel & hospitality UGC strategy guide
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "How do I find travel creators for my brand?",
    answer: (
      <>
        SideShift&apos;s marketplace includes 700,000+ vetted creators, with a large
        pool specializing in travel content across TikTok, Instagram, and YouTube. You
        can filter by travel niche (luxury travel, budget travel, adventure, family
        travel), location, content style, and more. Most travel brands launch their
        first creator campaigns within the first week. See our{" "}
        <Link
          href="/blog/how-to-find-ugc-creators"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          playbook for hiring travel & hospitality creators
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "What types of travel content can UGC creators produce?",
    answer:
      "Travel creators on SideShift produce destination vlogs, hotel and resort walkthroughs, restaurant reviews, activity and experience content, packing and tips videos, and full itinerary guides. All content is authentic, platform-native, and optimized for the channels your audience spends time on.",
  },
  {
    id: 4,
    question: "How much does travel influencer marketing cost?",
    answer: (
      <>
        Traditional travel influencer campaigns often include not just creator fees but
        also comped stays, flights, and experiences — making costs unpredictable and
        hard to scale. SideShift&apos;s UGC model uses output-based pricing so you
        know exactly what you&apos;re paying per piece of content. Read our guide on{" "}
        <Link
          href="/blog/social-proof-to-boost-sales"
          className="font-medium text-[#202020] underline underline-offset-2 hover:text-[rgba(32,32,32,0.7)]"
        >
          maximizing ROI with travel & hospitality UGC
        </Link>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "Can I use travel UGC in paid advertising?",
    answer:
      "Yes. Every piece of content produced through SideShift comes with full usage rights. Travel and hospitality brands regularly repurpose creator content as paid social ads, display advertising, website hero sections, email campaigns, and OTA listings — all without additional licensing costs.",
  },
  {
    id: 6,
    question: "How do I brief travel creators effectively?",
    answer:
      "The best travel creator briefs focus on key talking points and must-capture moments rather than scripted content. Give creators creative freedom to showcase the destination or property authentically while ensuring specific features, amenities, or offers are highlighted. SideShift provides brief templates designed specifically for travel and hospitality brands that balance brand messaging with creator authenticity.",
  },
];

export const travelArticles: Article[] = [
  {
    slug: "benefits-of-user-generated-content",
    title: "9 Benefits of User Generated Content (UGC) for Your Business",
    excerpt:
      "How leading travel brands and hotel groups are using creator content to drive bookings, build brand recognition, and fill rooms year-round.",
    category: "Travel Marketing",
    readTime: "7 min read",
  },
  {
    slug: "social-proof-to-boost-sales",
    title: "How to Use Social Proof to Boost Sales with Testimonial Ads",
    excerpt:
      "A breakdown of why authentic creator content outperforms traditional travel advertising and how to structure campaigns for maximum return.",
    category: "UGC Strategy",
    readTime: "5 min read",
  },
  {
    slug: "how-to-find-ugc-creators",
    title: "How to Find UGC Creators for Your Brand in 2026",
    excerpt:
      "Everything you need to know about finding, briefing, and managing travel creators who drive real bookings for your brand.",
    category: "Creator Management",
    readTime: "8 min read",
  },
];

export const travelArticlesContent: ArticlesContent = {
  label: "From the Blog",
  heading: "Travel & Hospitality Marketing Resources",
};
