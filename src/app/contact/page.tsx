'use client';

import ContactHeroSection from "@/components/ContactHeroSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import Header from "@/components/Header"; 

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactHeroSection /> 
      <ContactInfoSection />
    </>
  );
}