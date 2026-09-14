import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <Marquee />
      <About />
      <Capabilities />
      <Experience />
      <Projects />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
