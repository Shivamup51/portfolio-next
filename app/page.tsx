import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Numbers from "@/components/Numbers";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pg">
      <Nav />
      <Hero />
      <Marquee />
      <main>
        <Numbers />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
