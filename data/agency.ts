import type { HeroOverrides } from "@/components/home/Hero";

export const agencyPlatformFeatures = [
  {
    title: "Source Creators.",
    description:
      "Access 700K+ creators for all clients. Great creator for Client A? Book them for Client B too.",
  },
  {
    title: "Track Performance.",
    description:
      "One dashboard, all clients. Switch between client views in one click. See what\u2019s working across your entire portfolio.",
  },
  {
    title: "Automate Payments.",
    description:
      "Stop processing 150 individual Venmo transactions per month. Batch payments across clients. Contracts, W9s, 1099s \u2014 handled.",
  },
  {
    title: "Manage & Retain.",
    description:
      "Give clients real-time dashboard access so they stop asking for updates. Reduce churn by showing results, not sending PDFs.",
  },
];

export const agencyHeroOverrides: HeroOverrides = {
  label: "UGC Platform for Agencies",
  headline: "Scale Your Agency\u2019s UGC Operations Without Adding Headcount",
  subtitle:
    "Manage creator programs across every client from one dashboard. Source creators, run campaigns, automate payments, and reduce client churn \u2014 without a $60K/year ops hire.",
  primaryCta: {
    text: "Book Agency Demo",
    href: "/contact",
    event: "book_demo_agency_hero",
  },
  secondaryCta: {
    text: "See Pricing",
    href: "#agency-pricing",
    event: "see_pricing_agency_hero",
  },
};

export const agencyComparisonRows = [
  {
    name: "Creator sourcing",
    sideshift: "700K+ shared across clients",
    agencies: "Cold DMs per client",
    freelance: "Hire recruiters",
  },
  {
    name: "Client management",
    sideshift: "One login, all clients",
    agencies: "Separate tools per client",
    freelance: "More overhead",
  },
  {
    name: "Payments",
    sideshift: "Batch payouts, taxes automated",
    agencies: "Manual Venmo per client",
    freelance: "Bookkeeper hire",
  },
  {
    name: "Reporting",
    sideshift: "Real-time client dashboards",
    agencies: "Spreadsheets + monthly PDFs",
    freelance: "Analyst headcount",
  },
  {
    name: "Scaling",
    sideshift: "Add clients, not headcount",
    agencies: "Cost scales linearly",
    freelance: "Cost scales linearly",
  },
  {
    name: "Client retention",
    sideshift: "Clients see results in real-time",
    agencies: 'Clients ask "where\'s my report?"',
    freelance: "\u2014",
  },
];

export const agencyFaqData = [
  {
    id: 1,
    question: "Can each client have their own login?",
    answer:
      "Yes. You control access. Each client gets their own workspace with separate logins, and you manage everything from a centralized agency dashboard.",
  },
  {
    id: 2,
    question: "Is white-label truly white-label?",
    answer:
      'Yes. Your logo, colors, domain, emails. No "Powered by SideShift." Your clients see your brand throughout the entire experience.',
  },
  {
    id: 3,
    question: "How do payments work across clients?",
    answer:
      "You can process payments separately per client or batch them centrally. Either way, contracts, W9s, and 1099s are all automated \u2014 no manual work required.",
  },
  {
    id: 4,
    question: "What if we outgrow Scale?",
    answer:
      "Enterprise plans are available with custom limits, dedicated support, and API access. We\u2019ll work with you to build a plan that matches your agency\u2019s growth.",
  },
  {
    id: 5,
    question: "How does this help with client retention?",
    answer:
      "Clients get real-time dashboards. They see results without waiting for your monthly report. That visibility reduces churn because clients feel informed and confident in the work you\u2019re doing.",
  },
];
