"use client";

import { HomieLogo } from "./HomieLogo";
import { navLinks } from "@/lib/data";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    }
  }
}

export function Header() {
  return (
    <header className="border-b border-black/10 sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-[90vw] items-center justify-between py-5 border-x border-black/10 overflow-hidden">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex items-center gap-6 w-full justify-between">
          <motion.a
            variants={itemVariants}
            href="#projects"
            className="hidden text-xs font-medium tracking-wide text-black transition-opacity hover:opacity-60 sm:block"
          >
            + Home
          </motion.a>
          <motion.a
            variants={itemVariants}
            href="#projects"
            className="hidden text-xs font-medium tracking-wide text-black transition-opacity hover:opacity-60 sm:block"
          >
            + About
          </motion.a>
          <motion.div variants={itemVariants} >
            <HomieLogo size="sm" className="text-black" />
          </motion.div>
          <motion.a
            variants={itemVariants}
            href="#projects"
            className="hidden text-xs font-medium tracking-wide text-black transition-opacity hover:opacity-60 sm:block"
          >
            + PROJECT
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="#contact"
            className="rounded-full border border-black px-5 py-2 text-xs font-medium tracking-wide text-black transition-colors hover:bg-black hover:text-white"
          >
            CONTACT US
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}
