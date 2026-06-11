"use client";

import { useEffect, useRef, useState } from "react";
import { FaqSection } from "./FaqSection";
import { Footer } from "./Footer";
import { FurnitureCollection } from "./FurnitureCollection";
import { HeroSection } from "./HeroSection";
import { Loader } from "./Loader";
import { PortfolioSection } from "./PortfolioSection";
import { ProductShowcase } from "./ProductShowcase";
import { StatsSection } from "./StatsSection";
import {
  isLandingPreloadDone,
  markLandingPreloadDone,
  preloadLandingImages,
} from "@/lib/preload-images";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

export function LandingPage() {
  const alreadyDone = isLandingPreloadDone();
  const [progress, setProgress] = useState(alreadyDone ? 100 : 0);
  const [loaderVisible, setLoaderVisible] = useState(!alreadyDone);
  const [ready, setReady] = useState(alreadyDone);
  const startedRef = useRef(alreadyDone);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let cancelled = false;
    let fadeTimeoutId: ReturnType<typeof setTimeout> | undefined;

    preloadLandingImages((next) => {
      if (!cancelled) setProgress(next);
    }).then(() => {
      if (cancelled) return;

      setProgress(100);
      markLandingPreloadDone();

      fadeTimeoutId = setTimeout(() => {
        if (cancelled) return;
        setLoaderVisible(false);
        setReady(true);
      }, 400);
    });

    return () => {
      cancelled = true;
      if (fadeTimeoutId) clearTimeout(fadeTimeoutId);
    };
  }, []);

  return (
    <>
      <Loader progress={progress} visible={loaderVisible} />


      <main className="min-h-screen  bg-white font-sans text-black relative ">
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
