"use client";

import { HomieLogo } from "./HomieLogo";

type LoaderProps = {
  progress: number;
  visible: boolean;
};

export function Loader({ progress, visible }: LoaderProps) {
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-100 flex flex-col bg-[#F5F5F5] transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-1 items-center justify-center">
        <HomieLogo size="lg" className="text-black" />
      </div>

      <span className="absolute bottom-8 right-8 text-2xl font-bold tabular-nums text-black">
        {progress}%
      </span>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-black/10">
        <div className="h-full bg-black" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
