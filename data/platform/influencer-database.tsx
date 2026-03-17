import React from "react";
import Link from "next/link";
import type {
  ComparisonRow,
  FaqItem,
  Article,
  WhyUgcContent,
  UgcComparisonContent,
  PricingContent,
  FaqContent,
  ArticlesContent,
  HeroOverrides,
} from "@/types/platform";

export const influencerDbHeroOverrides: HeroOverrides = {
  label: "Influencer Database",
  headline: "Search, Filter & Save the Right Creators Instantly",
  stats: [
    { value: "700,000+", label: "Searchable creators" },
    { value: "50+", label: "Filter criteria" },
    { value: "4 Countries", label: "US, UK, CA, AU" },
  ],
  primaryCta: { text: "Search Creators", href: "https://app.sideshift.app/signup", event: "search_creators_influencer_db_hero" },
  secondaryCta: { text: "Book a Demo", href: "/contact", event: "book_demo_influencer_db_hero" },
};

export const influencerDbWhyUgc: WhyUgcContent = {
  label: "Why an Influencer Database?",
  heading: "Stop scrolling. Start searching.",
  paragraphs: [
    "Finding the right creator shouldn't take hours of manual searching across platforms. SideShift's influencer database lets you filter by niche, audience size, engagement rate, location, and more — so you find creators that actually fit your brand.",
    "Save creators to lists, track past collaborations, and build a pipeline of reliable partners you can activate for any campaign.",
  ],
  cards: [
    { title: "Advanced Filters", description: "Narrow your search by platform, category, audience demographics, engagement rate, follower count, and location to find your perfect creator match." },
    { title: "Creator Lists & Pipelines", description: "Save and organize creators into custom lists. Build a reliable roster of go-to partners you can activate whenever a new campaign launches." },
    { title: "Performance Insights", description: "View each creator's past content performance, audience quality metrics, and collaboration history — all before you reach out." },
  ],
};

export const influencerDbUgcComparison: UgcComparisonContent = {
  label: "UGC vs Traditional",
  heading: "Why UGC creators outperform traditional influencers",
  description: "UGC creators deliver authentic content at scale, while traditional influencer campaigns rely on reach alone.",
  ugcColumnHeader: "UGC Creators",
  traditionalColumnHeader: "Traditional Influencers",
};

export const influencerDbComparisonRows: ComparisonRow[] = [
  { category: "Discovery", ugc: "Filter by niche, engagement & demographics in seconds", traditional: "Manual scrolling through social platforms for hours" },
  { category: "Cost", ugc: "Pay for content, not follower count", traditional: "Premium rates based on audience size" },
  { category: "Vetting", ugc: "Performance data & past work visible upfront", traditional: "Rely on media kits and guesswork" },
  { category: "Scale", ugc: "Activate dozens of creators from saved lists", traditional: "One-off negotiations per creator" },
  { category: "Content Rights", ugc: "Full usage rights included", traditional: "Additional licensing fees per post" },
];

export const influencerDbPricing: PricingContent = {
  heading: "Plans that scale with your creator needs",
  subheading: "Start searching for free. Upgrade when you're ready to scale.",
};

export const influencerDbFaqContent: FaqContent = {
  heading: "Influencer Database FAQ",
  subheading: "Everything you need to know about finding creators on SideShift.",
};

export const influencerDbFaqData: FaqItem[] = [
  { id: 1, question: "How many creators are in the database?", answer: "Over 700,000 vetted UGC creators across the US, UK, Canada, and Australia, spanning every major niche and content category." },
  { id: 2, question: "What filters can I use to search?", answer: "Filter by platform, content category, audience demographics, engagement rate, follower count, location, language, past brand collaborations, and more." },
  { id: 3, question: "Can I save creators for later?", answer: "Yes — create custom lists, tag creators, and build reusable pipelines you can activate for future campaigns." },
  { id: 4, question: "Is the database included in all plans?", answer: "Yes, every SideShift plan includes full access to the creator database and search functionality." },
  { id: 5, question: "How do I contact a creator I find?", answer: "Once you find a creator you like, you can invite them directly to your campaign from the platform — no need for DMs or emails." },
];

export const influencerDbArticlesContent: ArticlesContent = {
  label: "Related Articles",
  heading: "Learn more about creator discovery",
};

export const influencerDbArticles: Article[] = [
  { slug: "best-ugc-marketplaces", title: "6 Best UGC Marketplaces in 2026", excerpt: "Compare the top UGC platforms to find the right fit for your brand.", category: "Creator Discovery", readTime: "8 min read" },
  { slug: "how-to-find-ugc-creators", title: "How to Find UGC Creators", excerpt: "A practical guide to finding and vetting the right creators for your brand.", category: "Creator Discovery", readTime: "6 min read" },
  { slug: "brands-that-work-with-micro-influencers", title: "5 Brands That Work With Micro Influencers", excerpt: "Real examples of brands winning with smaller creators.", category: "Creator Marketing", readTime: "5 min read" },
];
