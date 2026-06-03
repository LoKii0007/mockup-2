"use client";

import { HomieLogo } from "./HomieLogo";
import { navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <nav className="flex gap-6">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wide text-black transition-opacity hover:opacity-60"
            >
              + {link.label}
            </a>
          ))}
        </nav>

        <HomieLogo size="sm" className="text-black" />

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="hidden text-xs font-medium tracking-wide text-black transition-opacity hover:opacity-60 sm:block"
          >
            + PROJECT
          </a>
          <a
            href="#contact"
            className="rounded-full border border-black px-5 py-2 text-xs font-medium tracking-wide text-black transition-colors hover:bg-black hover:text-white"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </header>
  );
}
