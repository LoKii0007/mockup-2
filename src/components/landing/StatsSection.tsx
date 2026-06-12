"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeIn } from "./FadeIn";
import { useCounter } from "@/hooks/useCounter";
import { stats } from "@/lib/data";
import { images } from "@/lib/images";

function StatItem({
  value,
  suffix,
  label,
  accent,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  accent: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 1.0 });
  const count = useCounter(value, inView);

  const parentVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div ref={ref}>
      <div className="relative ">
        <motion.span
          variants={parentVariants}
          initial={"hidden"}
          animate={inView ? "visible" : "hidden"}
          viewport={{ amount: 0.5 }}
          className="text-[clamp(4rem,18vw,11rem)] lg:text-[11rem] inline-flex items-start tabular-nums font-bold leading-none tracking-tight text-black relative"
        >
          {count}
          <motion.span
            variants={childVariants}
            className="ml-1 lg:ml-0 lg:absolute lg:left-[110%] lg:top-0 text-sm lg:text-lg font-bold"
            style={{ color: accent }}
          >
            {suffix}
          </motion.span>
        </motion.span>
      </div>
      <p className="mt-2 text-base text-black/50">{label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section
      id="about"
      className="border-x border-black/10 bg-white mx-auto max-w-[90vw]"
    >
      <div className="mx-auto max-w-[90vw] py-14 sm:py-20 md:py-28 space-y-10 sm:space-y-12 overflow-hidden">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-5 lg:gap-20 overflow-hidden">
          <FadeIn x="-100%" className="lg:col-span-2">
            <p className="mb-4 sm:mb-6 text-sm text-black">About Us</p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-3">
            <p className="text-[clamp(1.25rem,4vw,1.75rem)] lg:text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-snug text-black text-left lg:text-right px-0 lg:px-6">
              World shaped by experience, space matters more than ever. At
              Homie, we fuse interior design with strategic thinking creating
              environments that don&apos;t just look good, but work smart.
            </p>
          </FadeIn>
        </div>
        <div className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-5 lg:gap-20">
          <FadeIn x="-100%" className="lg:col-span-2">
            <div
              className="relative aspect-square overflow-hidden max-h-[400px]"
            >
              <Image
                src={images.about}
                alt="Modern kitchen interior"
                fill
                className="object-cover"
                // sizes="280px"
              />
            </div>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-60"
            >
              <span className="text-lg leading-none">+</span>
              Our Project
            </a>
          </FadeIn>

          <div className="lg:col-span-3 border-t border-black/10 py-8 sm:py-12 px-0 lg:px-6">
            <div className="">
              <div className="grid gap-8 sm:gap-12 sm:grid-cols-2">
                {stats.map((stat, i) => (
                  <StatItem key={stat.label} {...stat} delay={i * 0.15} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
