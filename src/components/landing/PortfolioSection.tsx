"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";
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

  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-white relative overflow-hidden lg:min-h-screen"
    >
      <div className="relative mx-auto max-w-[90vw] border-x border-black/10 lg:absolute lg:inset-0 lg:z-10 lg:h-full lg:max-w-none lg:border-x-0 lg:overflow-hidden">
        <motion.div
          className="relative aspect-[4/3] w-full overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-[520px]"
          style={{ scale: bgScale, y: bgY }}
        >
          <Image
            src={images.portfolioBg}
            alt="Portfolio showcase interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col h-full border-x border-black/10 justify-end pb-6 sm:pb-8 lg:justify-start lg:px-0 lg:pb-0 lg:py-12 mx-auto max-w-[90vw] overflow-hidden">
          <FadeIn x="-100%">
            <h3 className="text-[clamp(2.5rem,10vw,6rem)] lg:text-[6rem] font-bold leading-tight text-white">
              Where <br />
              Style Meets
              <br />
              Function
            </h3>
            <a
              href="#products"
              className="mt-4 sm:mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs font-semibold tracking-wider text-black transition-transform hover:scale-105"
            >
              VIEW ALL
            </a>
          </FadeIn>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-[90vw] border-x border-black/10 ">
        <div className="relative py-6 md:py-10 lg:py-6">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <motion.div className="flex flex-col gap-5 lg:col-span-4 lg:col-start-9">
              {projects.map((project, i) => (
                <ProjectCard key={project.number} {...project} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <div ref={ref}>
      <motion.a
        href="#"
        className="group relative block overflow-hidden bg-white p-4"
        initial={{ opacity: 0, x: "100%" }}
        animate={inView ? { opacity: 1, x: "0%" } : { opacity: 0, x: "100%" }}
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
    </div>
  );
}
