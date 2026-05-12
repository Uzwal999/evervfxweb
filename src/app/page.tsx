import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Touchpoints } from "@/components/Touchpoints";
import { WhyEverVFX } from "@/components/WhyEverVFX";
import { WorkedWith } from "@/components/WorkedWith";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkedWith />
        <About />
        <Services />
        <PortfolioGallery />
        <CaseStudies />
        <Touchpoints />
        <Process />
        <WhyEverVFX />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
