'use client';

import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TrustSection />
      <VideoSection />
      <CTASection />
    </>
  );
};

export default HomePage;