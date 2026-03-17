import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Bento from "@/components/home/Bento";
import Workflow from "@/components/home/Workflow";
import Testimonials from "@/components/home/Testimonials";
import Platform from "@/components/home/Platform";
import Cta from "@/components/home/Cta";
import FAQ from "@/components/home/FAQ";
import ComparisonTable from "@/components/home/ComparisonTable";
import SideShiftCreators from "@/components/home/SideShiftCreators";
import Logo from "@/components/Logo";
import Script from "next/script";

export default function LandingPage() {
  const isCreator = false;
  return (
    <>
      {/* Centered logo — no nav */}
      <div className="flex items-center justify-center pt-5 pb-2 sm:pt-6 md:pt-8">
        <Logo />
      </div>

      <main>
        <Hero isCreator={isCreator} demoMode />
        <Brands isCreator={isCreator} />
        <Bento isCreator={isCreator} />
        <Workflow isCreator={isCreator} />
        <Platform isCreator={isCreator} />
        <SideShiftCreators marketplaceMode autoplayVideos={false} />
        <Cta isCreator={isCreator} demoMode />
        <Testimonials isCreator={isCreator} demoMode />
        <ComparisonTable demoMode />
        <FAQ isCreator={isCreator} />
      </main>

      {/* Background gradients */}
      <div className="absolute top-0 left-0 -z-20 h-[969px] w-full bg-[linear-gradient(180deg,#E0F5FF_0%,#F0FAFF_44.95%,#FFFFFF_100%)]" />
      <div className="absolute top-[50%] left-0 -z-20 h-[2467px] w-full -translate-y-1/2 bg-[linear-gradient(180.09deg,#FFFFFF_0.52%,#F0FAFF_54.52%,#F0FAFF_82.73%,#FFFFFF_99.92%)]" />

      {/* iClosed popup widget script */}
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="afterInteractive"
      />
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1432305571358915');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}
