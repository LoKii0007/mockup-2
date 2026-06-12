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
    <motion.div ref={ref}>
      <div className="relative ">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ amount: 1 }}
          className="text-[11rem] tabular-nums font-bold leading-none tracking-tight text-black"
        >
          {count}
        </motion.span>
        <motion.span
          className="absolute -right-4 -top-1 text-lg font-bold"
          style={{ color: accent }}
        >
          {suffix}
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
      <div className="mx-auto max-w-[90vw] py-20 md:py-28 space-y-12">
        <div className="grid gap-12 grid-cols-5 lg:gap-20">
          <FadeIn y={30} className="col-span-2">
            <p className="mb-6 text-sm text-black/40">About Us</p>
          </FadeIn>
          <FadeIn delay={0.1} className="col-span-3">
            <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-snug text-black text-right px-6">
              World shaped by experience, space matters more than ever. At
              Homie, we fuse interior design with strategic thinking creating
              environments that don&apos;t just look good, but work smart.
            </p>
          </FadeIn>
        </div>
        <div className="grid gap-12 grid-cols-5 lg:gap-20">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ amount: 0.8 }}
              className="relative aspect-square overflow-hidden max-h-[400px]"
            >
              <Image
                src={images.about}
                alt="Modern kitchen interior"
                fill
                className="object-cover"
                // sizes="280px"
              />
            </motion.div>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-60"
            >
              <span className="text-lg leading-none">+</span>
              Our Project
            </a>
          </div>

          <div className="col-span-3 border-t border-black/10 py-12 px-6">
            <div className="">
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
