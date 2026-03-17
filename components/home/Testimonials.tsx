"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { handleCTAClick } from "@/lib/handleCTAClick";
import { getHeroVariant } from "@/lib/analytics";
import type { CaseStudy } from "@/components/casestudy/CaseStudyCard";

/*
  Bento-grid testimonial section inspired by high-converting layouts:
  - Lead with the number
  - Mix formats: stats + quotes
  - Real photos, real names, real titles
  - Company logos at card bottom
  - Asymmetric grid with varying card sizes
*/

type BentoCard = {
  stat?: string;
  statLabel?: string;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  logo?: string;
  /** grid span on md: 1 = normal, 2 = wide */
  span?: 1 | 2;
};

const brandCards: BentoCard[] = [
  {
    stat: "100%",
    statLabel: "Creator hiring needs filled in weeks",
    quote:
      "SideShift was a huge help for us in the gen z hiring process. We were able to fill 100% of our creator hiring needs in just a few weeks through the platform. SideShift is a cemented go-to for us whenever we are in need of creators.",
    name: "Edward Tian",
    title: "Founder, GPTZero",
    avatar: "/assets/testimonials/2.avif",
    logo: "/assets/brands/2.avif",
    span: 2,
  },
  {
    quote:
      "The applicants have been super high quality! Unlike any platform I've used in the past.",
    name: "Luis Ocampo",
    title: "Founding Team, Partiful",
    avatar: "/assets/testimonials/1.avif",
    logo: "/assets/brands/4.avif",
  },
  {
    quote:
      "We had no luck with traditional platforms to find high quality creator talent until we turned to SideShift. We filled all our hiring needs through the platform.",
    name: "Evan Dray",
    title: "Co-Founder, Astra",
    avatar: "/assets/testimonials/3.avif",
    logo: "/assets/brands/5.avif",
  },
  {
    stat: "5B+",
    statLabel: "Views delivered last 90 days",
    quote:
      "Replit moves fast, and we needed a way to get in front of developers at scale without relying solely on ads. SideShift made that possible. The sheer volume of organic content we were able to push out through their creators turned into real distribution and traction for us.",
    name: "Horacio Lopez",
    title: "Revenue Operations @ Replit",
    avatar: "/assets/testimonials/5.avif",
    logo: "/assets/brands/1.avif",
    span: 2,
  },
  {
    stat: "$100M+",
    statLabel: "Paid out to creators",
    quote:
      "SideShift is geared toward Gen Z and cuts through fluff on sites like LinkedIn and Handshake. I've seen better response rates, and with strong filtering, SideShift delivers the best candidates of any job board I've used.",
    name: "Jeremy Gross",
    title: "Head of US Growth, Amo",
    avatar: "/assets/testimonials/4.avif",
    logo: "/assets/brands/3.avif",
  },
  {
    stat: "10x",
    statLabel: "Content output multiplier",
    quote:
      "SideShift has shown us how much of a multiplier authentic, organic short-form content can be. Their creator network helped unlock a new layer of growth that traditional paid channels never could. It's a playbook every high-growth company should have in their arsenal.",
    name: "Henrique Dubugras",
    title: "Founding CEO @ Brex",
    avatar: "/assets/testimonials/6.avif",
    logo: "/assets/brands/6.avif",
    span: 2,
  },
];

const creatorCards: BentoCard[] = [
  {
    stat: "$7K+",
    statLabel: "Monthly earnings in 6 months",
    quote:
      "SideShift has allowed me to pursue my passion of making music. Since starting 6 months ago I have been able to work with some incredible brands and grown to $7k+/ month. These side hustles not only pay the bills, but give me the flexibility to pursue my dreams.",
    name: "Timmy Koltermann",
    title: "Music Creator",
    avatar: "/assets/testimonials-creator/2.avif",
    span: 2,
  },
  {
    quote:
      "SideShift has helped prep me for a career in marketing. For anybody that is interested in creating content, social media marketing, or growth roles in the future, I would highly recommend getting signed up on SideShift to gain experience!",
    name: "Darah Emadi",
    title: "Content Creator",
    avatar: "/assets/testimonials-creator/1.avif",
  },
  {
    quote:
      "Wow, where do I start...the platform and team are really AMAZING! everyone's super good at what they do, whether you're a newbie or you've been in the game a long time, everyone's treated kindly and fairly.",
    name: "Lola Kamson",
    title: "Content Creator",
    avatar: "/assets/testimonials-creator/3.avif",
  },
  {
    stat: "100+",
    statLabel: "Brand partnerships available",
    quote:
      "Working with SideShift has been a blessing. As a full-time first-gen college student, its flexibility lets me focus on school while earning a decent income. I love creating content and working with a kind, supportive team that truly wants to see you win!",
    name: "Ayomide Somorin",
    title: "College Student & Creator",
    avatar: "/assets/testimonials-creator/4.avif",
    span: 2,
  },
  {
    quote:
      "SideShift has been a real lifeline for me. Through SideShift, I've found flexible content creation jobs that fit around my class schedule. I'm confident I wouldn't have been able to support myself through university this semester without it.",
    name: "Lourdrick Valsote",
    title: "Student Creator",
    avatar: "/assets/testimonials-creator/5.avif",
  },
  {
    stat: "700K+",
    statLabel: "Creators already onboarded",
    quote:
      "SideShift has helped me grow as a creator and marketing professional. The opportunities I've had as a college student have been incredible - from working with startups to billion-dollar companies, SideShift has given me endless chances to prove myself and connect with industry pros.",
    name: "Daniel Grospe",
    title: "Creator & Marketing Professional",
    avatar: "/assets/testimonials-creator/6.avif",
    span: 2,
  },
];

function BentoCardComponent({ card }: { card: BentoCard }) {
  return (
    <div
      className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 transition-shadow duration-300 hover:shadow-md md:p-6"
      style={{
        boxShadow:
          "0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.04)",
      }}
    >
      {/* Stat (top of card, if present) */}
      {card.stat && (
        <div className="mb-4">
          <span className="block text-[36px] leading-[1] font-extrabold tracking-tight text-gray-900 md:text-[44px]">
            {card.stat}
          </span>
          <span className="mt-1 block text-[13px] leading-snug font-medium text-gray-400 md:text-sm">
            {card.statLabel}
          </span>
        </div>
      )}

      {/* Quote */}
      <p className="flex-1 text-[13px] leading-[1.6] text-gray-600 min-[375px]:text-[14px] md:text-[15px] md:leading-[1.6]">
        &ldquo;{card.quote}&rdquo;
      </p>

      {/* Author row + Logo */}
      <div className="mt-5 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={card.avatar}
            alt={card.name}
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-cover md:h-10 md:w-10"
          />
          <div>
            <p className="text-[13px] font-semibold text-gray-900 md:text-sm">
              {card.name}
            </p>
            <p className="text-[11px] text-gray-400 md:text-[12px]">
              {card.title}
            </p>
          </div>
        </div>
        {card.logo && (
          <Image
            src={card.logo}
            alt="Company"
            width={80}
            height={24}
            className="h-5 w-auto shrink-0 opacity-30 grayscale md:h-6"
          />
        )}
      </div>
    </div>
  );
}

function CaseStudyBentoCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/casestudies/${study.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 transition-shadow duration-300 hover:shadow-md md:p-6"
      style={{
        boxShadow:
          "0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.04)",
      }}
    >
      {study.logo && (
        <Image
          src={study.logo}
          alt={study.title}
          width={80}
          height={24}
          className="mb-3 h-5 w-auto opacity-50 grayscale md:h-6"
        />
      )}
      {study.metric && (
        <div className="mb-3">
          <span className="block text-[28px] leading-[1] font-extrabold tracking-tight text-gray-900 md:text-[36px]">
            {study.metric}
          </span>
        </div>
      )}
      <h3 className="line-clamp-2 flex-1 text-[13px] leading-[1.5] font-semibold text-gray-900 min-[375px]:text-[14px] md:text-[15px]">
        {study.title}
      </h3>
      <div className="mt-4 flex items-center gap-1 text-sm font-bold text-[#202020]">
        Read More
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M1 5h8.5M6.5 1.5 10 5l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}

function Testimonials({
  isCreator,
  caseStudies,
  demoMode = false,
}: {
  isCreator: boolean;
  /** Optional case studies to mix into the bento grid (subpage use) */
  caseStudies?: CaseStudy[];
  demoMode?: boolean;
}) {
  const variant = getHeroVariant();
  const cards = isCreator ? creatorCards : brandCards;

  return (
    <section id="testimonials" className="relative">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Header */}
            <div className="w-full">
              <h2 className="max-w-[20ch] text-left max-[375px]:text-[28px] max-[320px]:text-[24px]">
                {isCreator
                  ? "Creators Love SideShift."
                  : "Brands Love SideShift."}
              </h2>
              <p className="mt-3 max-w-lg text-left text-[14px] leading-relaxed text-gray-500 md:text-base">
                {isCreator
                  ? "Join 700,000+ creators earning through brand partnerships."
                  : "See why 1,000+ brands trust SideShift for creator-powered growth."}
              </p>
            </div>

            {/* Bento Grid — testimonials + optional case study cards */}
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={
                    card.span === 2
                      ? "sm:col-span-2 md:col-span-2"
                      : ""
                  }
                >
                  <BentoCardComponent card={card} />
                </div>
              ))}
              {caseStudies?.map((study) => (
                <div key={study.slug}>
                  <CaseStudyBentoCard study={study} />
                </div>
              ))}
            </div>

            {/* CTA */}
            {!isCreator && (
              demoMode ? (
                <Link href="/contact">
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleCTAClick("book_demo_testimonials", true, variant)
                    }
                  >
                    <span>Book a Demo</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/casestudies">
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleCTAClick(
                        "Explore More Case Studies Testimonials",
                        true,
                        variant
                      )
                    }
                  >
                    <span>Explore More Case Studies</span>
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
