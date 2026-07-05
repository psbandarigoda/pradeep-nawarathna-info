import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import InternationalEvents from "@/components/InternationalEvents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <ExperienceTimeline />
        <Skills />
        <InternationalEvents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
