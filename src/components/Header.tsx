"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { IconBrandGithub, IconBrandGithubFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute top-2 flex justify-between w-full px-4 items-center">
      <TypewriterEffectSmooth words={words} />
      <p className="text-2xl font-thin tracking-widest">Built by Akash with CopilotKit.ai🪁 &#169;</p>
      <Link
        href="https://github.com/AkashJana18/blogai"
        target="blank"
        className="flex cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <IconBrandGithub size={46} />
        ) : (
          <IconBrandGithubFilled size={46} />
        )}
      </Link>
    </div>
  );
}
