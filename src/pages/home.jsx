import React from "react";
import Hero from "@/components/sections/Hero.jsx";
import FeatureBanner from "@/components/sections/FeatureBanner.jsx";
import Services from "@/components/sections/Services.jsx";
import AboutSection from "@/components/sections/AboutSection.jsx";
import StatsFooter from "@/components/layout/StatsFooter.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureBanner />
      <Services />
      <AboutSection />
      {/* Keeping StatsFooter here since it seems specific to the home page flow */}
      <StatsFooter /> 
    </>
  );
}