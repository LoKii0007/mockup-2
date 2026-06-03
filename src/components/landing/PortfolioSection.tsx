"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { FadeIn } from "./FadeIn";
import { projects } from "@/lib/data";
import { images } from "@/lib/images";

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.4], [1.1, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden border-x border-black/10 bg-white"
    >
      <FadeIn className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10">
        <h2 className="text-sm font-medium text-black/40">Our Latest Projects</h2>
      </FadeIn>

      <div className="relative mx-auto mt-8 max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <motion.div
            className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[520px]"
            style={{ scale: bgScale, y: bgY }}
          >
            <Image
              src={images.portfolioBg}
              alt="Portfolio showcase interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <FadeIn delay={0.2}>
                <h3 className="max-w-sm text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white">
                  Where Style
                  <br />
                  Meets Function
                </h3>
                <a
                  href="#products"
                  className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs font-semibold tracking-wider text-black transition-transform hover:scale-105"
                >
                  VIEW ALL
                </a>
              </FadeIn>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-5"
            style={{ y: cardsY }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.number} {...project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="h-20" />
    </section>
  );
}

function ProjectCard({
  title,
  number,
  image,
  index,
}: {
  title: string;
  number: string;
  image: string;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href="#"
      className="group relative block overflow-hidden bg-white"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-between px-1 py-4">
        <span className="text-sm font-medium text-black">{title}</span>
        <span className="text-sm text-black/30">{number}</span>
      </div>
    </motion.a>
  );
}
