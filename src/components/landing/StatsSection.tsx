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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCounter(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative inline-block">
        <span className="text-[clamp(3rem,8vw,5.5rem)] font-bold leading-none tracking-tight text-black">
          {count}
        </span>
        <span
          className="absolute -right-4 -top-1 text-lg font-bold"
          style={{ color: accent }}
        >
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm text-black/50">{label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section id="about" className="border-x border-black/10 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          <FadeIn y={30}>
            <p className="mb-6 text-sm text-black/40">About Us</p>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={images.about}
                alt="Modern kitchen interior"
                fill
                className="object-cover"
                sizes="280px"
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

          <div>
            <FadeIn delay={0.1}>
              <p className="max-w-2xl text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-snug text-black">
                World shaped by experience, space matters more than ever. At
                Homie, we fuse interior design with strategic thinking creating
                environments that don&apos;t just look good, but work smart.
              </p>
            </FadeIn>

            <div className="mt-14 border-t border-black/10 pt-14">
              <div className="grid gap-12 sm:grid-cols-2">
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
