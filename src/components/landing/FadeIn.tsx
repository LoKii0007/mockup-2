"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: string;
  once?: boolean;
  viewMargin?: string;
};

function hasXOffset(x: string) {
  return x !== "0%" && x !== "0" && x !== "0px";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 0,
  x = "0%",
  once = true,
  viewMargin = "-80px",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: viewMargin as `${number}px` });

  const motionProps = {
    initial: { opacity: 0, y, x },
    animate: inView
      ? { opacity: 1, y: 0, x: "0%" }
      : { opacity: 0, y, x },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  // Observe a stable wrapper so x % offset doesn't push element out of viewport detection
  if (hasXOffset(x)) {
    return (
      <div ref={ref} className={className}>
        <motion.div {...motionProps}>{children}</motion.div>
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
