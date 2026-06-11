"use client";

import Image from "next/image";
import { ArrowRight, Lamp, Sofa, Table2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { products } from "@/lib/data";
import { images } from "@/lib/images";

const iconMap = {
  sofa: Sofa,
  table: Table2,
  lamp: Lamp,
} as const;

export function ProductShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="products"
      ref={ref}
      className="overflow-hidden mx-auto max-w-[90vw] border-x border-black/10 "
      initial={{ opacity: 0, x: -60 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-2">
        <motion.div
          className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={images.productShowcase}
            alt="Red curtains and blue sofa"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <div className="flex flex-col justify-center bg-black px-8 py-16 md:px-14 md:py-20">
          <motion.h2
            className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Provide Product
          </motion.h2>

          <motion.p
            className="mt-4 max-w-md text-sm leading-relaxed text-white/60"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            We provide more than just design we offer the essentials that bring
            every room to life.
          </motion.p>

          <div className="mt-10 divide-y divide-white/10">
            {products.map((product, i) => {
              const Icon = iconMap[product.icon];
              return (
                <motion.a
                  key={product.name}
                  href="#"
                  className="group flex items-center gap-5 py-6 transition-colors hover:bg-white/5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{product.name}</p>
                    <p className="text-xs text-white/40">{product.collections}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
