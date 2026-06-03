"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { Header } from "./Header";
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

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const isoY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative border-x border-black/10 bg-white"
    >
      <Header />

      <div className="mx-auto max-w-[1400px] px-6 pt-12 md:px-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <motion.h1
            className="max-w-xl text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-black"
            initial={{ opacity: 0, y: 80 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Designed Furniture
            <br />
            For Your Interior
          </motion.h1>

          <div className="flex flex-col items-start gap-6 lg:max-w-sm lg:pt-4">
            <motion.p
              className="text-sm leading-relaxed text-black/70 md:text-base"
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              We specialize in creating timeless interiors that blend
              functionality with aesthetic beauty. Whether it&apos;s a cozy home,
              a dynamic office, or a luxurious commercial space.
            </motion.p>

            <motion.a
              href="#about"
              className="inline-flex rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              Learn More
            </motion.a>

            <motion.div
              className="relative mt-2 hidden h-36 w-48 overflow-hidden rounded-lg lg:block"
              style={{ y: isoY }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
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

      <div className="relative mx-auto mt-10 max-w-[1400px] overflow-hidden px-6 md:mt-14 md:px-10">
        <motion.div
          className="relative aspect-[16/9] overflow-hidden z-10"
          style={{ y: imageY }}
          initial={{ scale: 1.2 }}
          animate={ready ? { scale: 1 } : { scale: 1.2 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
        <div className="grid grid-cols-8 absolute inset-0 z-20">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              initial={{ width: "95%" }}
              animate={ready ? { width: "0%" } : { width: "95%" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              key={index}
              className="origin-left h-full bg-white ">

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
