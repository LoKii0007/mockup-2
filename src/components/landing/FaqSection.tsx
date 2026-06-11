"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { faqs } from "@/lib/data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-x border-black/10 bg-white mx-auto max-w-[90vw]">
      <div className="mx-auto max-w-[50vw] min-w-[600px] px-6 py-20 md:px-10 md:py-28">
        <FadeIn>
          <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-black">
            Your Question Answered
          </h2>
        </FadeIn>

        <div className="mt-12 divide-y divide-black/10">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-full bg-[#F0F0F0] px-6 py-4 sm:flex-row sm:px-8">
            <p className="text-sm text-black/60">Have a different question</p>
            <a
              href="#contact"
              className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Ask Something
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.1} y={30}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
      >
        <span className="text-sm font-medium text-black md:text-base">
          {question}
        </span>
        <motion.span
          className="mt-0.5 shrink-0 text-xl leading-none text-black"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-black/60">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
}
