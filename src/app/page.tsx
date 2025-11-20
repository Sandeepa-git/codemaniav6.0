// src/app/page.tsx
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ABOUT from "@/components/about";
import TIMELINE from "@/components/timeline";
import RULES from "@/components/rules";
import SHOP from "@/components/shop";
import Footer from "@/components/footer";


export const metadata = {
  title: "Codemania - Home",
  description: "Welcome to Codemania website",
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#101010] text-white overflow-x-hidden">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <ABOUT />
      </section>

      <section id="timeline">
        <TIMELINE />
      </section>

      <section id="rules">
        <RULES />
      </section>

      <section id="shop">
        <SHOP />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
