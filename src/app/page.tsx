import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import WorkSection from "@/components/Works";
import AboutSection from "@/components/About";
import CTASection from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
