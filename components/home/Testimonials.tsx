"use client";
import Image from "next/image";

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
    quote:
      "The applicants have been super high quality! Unlike any platform I've used in the past.",
    name: "Luis Ocampo",
    title: "Founding Team, Partiful",
    avatar: "/assets/testimonials/1.avif",
  },
  {
    quote:
      "SideShift was a huge help for us in the gen z hiring process. We were able to fill 100% of our creator hiring needs in just a few weeks through the platform. SideShift is a cemented go-to for us whenever we are in need of creators.",
    name: "Edward Tian",
    title: "Founder, GPTZero",
    avatar: "/assets/testimonials/2.avif",
    span: 2,
  },
  {
    quote:
      "We had no luck with traditional platforms to find high quality creator talent until we turned to SideShift. We filled all our hiring needs through the platform. SideShift is a cemented go-to for us whenever we need creators.",
    name: "Evan Dray",
    title: "Co-Founder, Astra",
    avatar: "/assets/testimonials/3.avif",
  },
  {
    quote:
      "SideShift is geared toward Gen Z and cuts through fluff on sites like LinkedIn and Handshake. I've seen better response rates, and with strong filtering, SideShift delivers the best candidates of any job board I've used. Recommend to any consumer startup focused on growth.",
    name: "Jeremy Gross",
    title: "Head of US Growth, Amo",
    avatar: "/assets/testimonials/4.avif",
    span: 2,
  },
  {
    quote:
      "Replit moves fast, and we needed a way to get in front of developers at scale without relying solely on ads. SideShift made that possible. The sheer volume of organic content we were able to push out through their creators turned into real distribution and traction for us.",
    name: "Horacio Lopez",
    title: "Revenue Operations @ Replit",
    avatar: "/assets/testimonials/5.avif",
  },
  {
    quote:
      "SideShift has shown us how much of a multiplier authentic, organic short-form content can be. Their creator network helped unlock a new layer of growth that traditional paid channels never could. It's a playbook every high-growth company should have in their arsenal.",
    name: "Henrique Dubugras",
    title: "Founding CEO @ Brex",
    avatar: "/assets/testimonials/6.avif",
    span: 2,
  },
];

const creatorCards: BentoCard[] = [
  {
    quote:
      "SideShift has helped prep me for a career in marketing. For anybody that is interested in creating content, social media marketing, or growth roles in the future, I would highly recommend getting signed up on SideShift to gain experience!",
    name: "Darah Emadi",
    title: "",
    avatar: "/assets/testimonials-creator/1.avif",
  },
  {
    quote:
      "SideShift has allowed me to pursue my passion of making music. Since starting 6 months ago I have been able to work with some incredible brands and grown to $7k+/ month. These side hustles not only pay the bills, but give me the flexibility to pursue my dreams.",
    name: "Timmy Koltermann",
    title: "",
    avatar: "/assets/testimonials-creator/2.avif",
    span: 2,
  },
  {
    quote:
      "Wow, where do I start\u2026the platform and team are really AMAZING! everyone\u2019s super good at what they do, whether you\u2019re a newbie or you\u2019ve been in the game a long time, everyone\u2019s treated kindly and fairly. really appreciate the opportunities I\u2019ve had through SideShift and forever grateful! \uD83E\uDEF6",
    name: "Lola Kamson",
    title: "",
    avatar: "/assets/testimonials-creator/3.avif",
  },
  {
    quote:
      "Working with SideShift has been a blessing. As a full-time first-gen college student, its flexibility lets me focus on school while earning a decent income. I love creating content and working with a kind, supportive team that truly wants to see you win!",
    name: "Ayomide Somorin",
    title: "",
    avatar: "/assets/testimonials-creator/4.avif",
    span: 2,
  },
  {
    quote:
      "SideShift has been a real lifeline for me. Through SideShift, I\u2019ve found flexible content creation jobs that fit around my class schedule. I\u2019m confident I wouldn\u2019t have been able to support myself through university this semester without it, and I\u2019m so grateful for the opportunities it\u2019s given me.",
    name: "Lourdrick Valsote",
    title: "",
    avatar: "/assets/testimonials-creator/5.avif",
  },
  {
    quote:
      "SideShift has helped me grow as a creator and marketing professional. The opportunities I\u2019ve had as a college student have been incredible - from working with startups to billion-dollar companies, SideShift has given me endless chances to prove myself and connect with industry pros.",
    name: "Daniel Grospe",
    title: "",
    avatar: "/assets/testimonials-creator/6.avif",
    span: 2,
  },
  {
    quote:
      "Working with SideShift has been such a win! As a full-time student, the remote flexibility has made life so much easier. It\u2019s helped me stay financially stable, create content I love, and grow with a supportive team. Easily one of the best things I\u2019ve done this year!",
    name: "Ayomide Somorin",
    title: "",
    avatar: "/assets/testimonials-creator/7.avif",
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

function Testimonials({ isCreator }: { isCreator: boolean }) {
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
                    card.span === 2 ? "sm:col-span-2 md:col-span-2" : ""
                  }
                >
                  <BentoCardComponent card={card} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
