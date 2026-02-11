import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Ticker } from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
