"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Header() {
  const words = [
    {
      text: "Blog",
    },
    {
      text: "ai",
      className: "text-teal-500 dark:text-teal-300",
    },
  ];
  return (
    <div className="absolute top-2">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
