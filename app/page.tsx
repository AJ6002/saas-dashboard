import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Companies from "@/components/Companies";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Guide />
      <Companies />
      <CTA />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
