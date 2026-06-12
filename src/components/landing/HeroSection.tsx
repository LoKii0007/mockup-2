"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { images } from "@/lib/images";

type HeroSectionProps = {
  ready: boolean;
};

export function HeroSection({ ready }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const isoY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const TABS = 16;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-white grid grid-rows-2 min-h-[100dvh] lg:min-h-0 lg:h-screen overflow-hidden"
    >
      <div className="mx-auto max-w-[90vw] pt-20 pb-6 md:pt-24 md:pb-10 lg:py-12 w-full border-x border-black/10">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:items-end lg:gap-16 h-full">
          <div className="max-w-xl flex flex-col justify-end pt-4 sm:pt-8 lg:pt-18.5 h-full lg:col-span-6 text-[clamp(2.5rem,11vw,12rem)] lg:text-[clamp(2.5rem,6vw,12rem)] font-bold leading-[1.05] tracking-tight text-black">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={ready && { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Interior
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={ready && { opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Design
            </motion.h1>
          </div>

          <div className="gap-4 sm:gap-6 lg:pt-4 grid grid-cols-1 sm:grid-cols-2 lg:col-span-6">
            <div className="space-y-4 overflow-hidden">
              <div className="overflow-hidden">
                <motion.p
                  className="text-sm leading-relaxed text-black/70 md:text-base"
                  initial={{ y: "100%" }}
                  animate={ready && { y: "0%" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  We specialize in creating timeless interiors that blend
                  functionality with aesthetic beauty. Whether it&apos;s a cozy
                  home, a dynamic office, or a luxurious commercial space.
                </motion.p>
              </div>

              <motion.a
                href="#about"
                className="inline-flex rounded-full bg-black px-7 py-3 text-sm font-medium text-white hover:transition-all hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                animate={ready && { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Learn More
              </motion.a>
            </div>

            <motion.div
              className="relative mt-2 hidden h-36 w-48 overflow-hidden rounded-lg lg:block"
              style={{ y: isoY }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={ready && { opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={images.heroIso}
                alt="Isometric interior layout"
                fill
                className="object-cover"
                sizes="192px"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute w-full overflow-hidden shrink-0 top-1/2 flex justify-center items-center">
        <motion.div
          className="relative aspect-[16/9] overflow-hidden z-10 h-[50dvh] w-auto sm:w-screen sm:h-auto"
          initial={{ scale: 1.3 }}
          animate={ready && { scale: 1 }}
          transition={{ duration: 2, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={images.hero}
            alt="Modern living room interior"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </motion.div>
        <div className="flex flex-row absolute inset-0 z-20 w-full">
          {Array.from({ length: TABS }).map((_, index) => (
            <motion.div
              initial={{ scaleX: 1 }}
              animate={ready ? { scaleX: 0 } : { scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 0.11,
                ease: [0.22, 1, 0.36, 1],
              }}
              key={index}
              className="flex-1 origin-left h-full bg-white"
            ></motion.div>
          ))}
        </div>
        <div className="absolute inset-0 z-30 border-x border-black/10 mx-auto max-w-[90vw] h-full w-full"></div>
      </div>
    </section>
  );
}
