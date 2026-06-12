"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { HomieLogo } from "./HomieLogo";
import { footerLinks, socialLinks } from "@/lib/data";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer id="contact" ref={ref} className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[90vw] py-12 sm:py-16 border-x border-black/10 md:py-20">
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <HomieLogo
            size="lg"
            className="text-[clamp(4rem,15vw,12rem)] leading-none text-black"
          />
        </motion.div>

        <div className="mt-12 flex flex-col gap-10 border-t border-black/10 pt-10 md:flex-row md:items-end md:justify-between">
          <motion.nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-black/60 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-end text-black/60 transition-colors hover:text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.p
          className="mt-12 text-xs text-black/30"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          © {new Date().getFullYear()} HOMIE. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
