import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Numbers from "@/components/Numbers";
import Work from "@/components/Work";
import MoreProjects from "@/components/MoreProjects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Stack from "@/components/Stack";
import Achievements from "@/components/Achievements";
import Mail from "@/components/Mail";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="pg">
      <Nav />
      <Hero />
      <Marquee />
      <main>
        <Reveal><Numbers /></Reveal>
        <Reveal><Work /></Reveal>
        <Reveal><MoreProjects /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Stack /></Reveal>
        <Reveal><Achievements /></Reveal>
        <Reveal><Mail /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
