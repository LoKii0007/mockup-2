"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { HomieLogo } from "./HomieLogo";

type LoaderProps = {
  onComplete: () => void;
};

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(next);
      if (next < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-[#F5F5F5]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <HomieLogo size="lg" className="text-black" />
        </motion.div>
      </div>

      <motion.span
        className="absolute bottom-8 right-8 text-2xl font-bold tabular-nums text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {progress}%
      </motion.span>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10">
        <motion.div
          className="h-full bg-black"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
}
