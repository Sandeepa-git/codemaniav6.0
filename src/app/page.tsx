// src/app/page.tsx
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Cta from "@/components/cta";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Perks from "@/components/perks";
import PlatformMetrics from "@/components/platform-metrics";
import Faq from "@/components/faq";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#101010] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cta />
      <Features />
      <HowItWorks />
      <Perks />
      <PlatformMetrics />
      <Faq />
    </main>
  );
}
