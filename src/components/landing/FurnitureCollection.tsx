"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeIn } from "./FadeIn";
import { collectionItems } from "@/lib/data";

export function FurnitureCollection() {
  return (
    <section className="border-x border-black/10 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <FadeIn>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-black">
            Furniture Collection
          </h2>
          <p className="mt-3 max-w-lg text-sm text-black/50">
            Curated pieces designed to elevate every room in your home.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collectionItems.map((item, i) => (
            <CollectionCard key={item.name} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({
  name,
  category,
  price,
  image,
  index,
}: {
  name: string;
  category: string;
  price: string;
  image: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        </motion.div>
      </div>
      <div className="mt-4">
        <p className="text-xs text-black/40">{category}</p>
        <p className="mt-1 font-medium text-black">{name}</p>
        <p className="mt-1 text-sm text-black/60">{price}</p>
      </div>
    </motion.div>
  );
}
