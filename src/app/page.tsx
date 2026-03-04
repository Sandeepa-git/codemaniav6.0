import Hero from "@/components/hero";
import ABOUT from "@/components/about";
import TIMELINE from "@/components/timeline";
import Stats from "@/components/stats";
import Prizes from "@/components/prizes";
import Workshops from "@/components/workshops";
import Competitions from "@/components/competitions";
import Portals from "@/components/portals";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HomeLeaderboard from "@/components/home-leaderboard";
import AnnouncementModal from "@/components/announcement-modal";
import WinnersPreview from "@/components/winners-preview";


export const metadata = {
  title: "Codemania v6.0 - Island-wide Datathon",
  description: "Decode the Data. Dominate the Challenge. Join Codemania v6.0, the ultimate datathon for undergraduates in Sri Lanka.",
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#101010] text-white overflow-x-hidden">
      <AnnouncementModal />


      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <ABOUT />
      </section>

      <section id="winners">
        <WinnersPreview />
      </section>

      <section id="timeline">
        <TIMELINE />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="workshops">
        <Workshops />
      </section>

      <section id="competitions">
        <Competitions />
      </section>

      <section id="prizes">
        <Prizes />
      </section>

      {/* <section id="leaderboard">
        <HomeLeaderboard />
      </section> */}

      <section id="portals">
        <Portals />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
