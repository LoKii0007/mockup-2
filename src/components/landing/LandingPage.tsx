"use client";

import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";
import { FaqSection } from "./FaqSection";
import { Footer } from "./Footer";
import { FurnitureCollection } from "./FurnitureCollection";
import { HeroSection } from "./HeroSection";
import { Loader } from "./Loader";
import { PortfolioSection } from "./PortfolioSection";
import { ProductShowcase } from "./ProductShowcase";
import { StatsSection } from "./StatsSection";

export function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
    setReady(true);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <main className="mx-auto min-h-screen max-w-[1400px] bg-white font-sans text-black">
        <HeroSection ready={ready} />
        <StatsSection />
        <PortfolioSection />
        <ProductShowcase />
        <FurnitureCollection />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
}
