import type React from "react";

export interface ComparisonRow {
  category: string;
  ugc: string;
  traditional: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export interface WhyUgcCard {
  title: string;
  description: string;
}

export interface WhyUgcContent {
  label: string;
  heading: string;
  paragraphs: string[];
  cards: WhyUgcCard[];
}

export interface UgcComparisonContent {
  label: string;
  heading: string;
  description: string;
  ugcColumnHeader: string;
  traditionalColumnHeader: string;
}

export interface PricingContent {
  heading: string;
  subheading: string;
}

export interface FaqContent {
  heading: string;
  subheading: string;
}

export interface ArticlesContent {
  label: string;
  heading: string;
}

export interface HeroOverrides {
  label: string;
  headline: string;
  stats: { value: string; label: string }[];
  primaryCta: { text: string; href: string; event: string };
  secondaryCta: { text: string; href: string; event: string };
}

export interface PlatformPageData {
  heroOverrides: HeroOverrides;
  whyUgc: WhyUgcContent;
  ugcComparison: UgcComparisonContent;
  comparisonRows: ComparisonRow[];
  pricing: PricingContent;
  faq: FaqContent;
  articles: ArticlesContent;
}
