"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export const slugs = [
  "typescript",
  "javascript",
  "react",
  "reactnative",
  "html5",
  "php",
  "bootstrap",
  "jquery",
  "wordpress",
  "android",
  "tailwindcss",
  "github",
  "handlebarsdotjs",
  "mui",
  "sass",
  "css3",
  "nextdotjs",
  "firebase",
  "git",
  "figma",
];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="flex items-center justify-center relative h-screen text-dark dark:text-light"
    >
      <div className="container w-full flex flex-col text-center justify-between gap-24 md:text-start">
        <div className="flex flex-col gap-1">
          <p className="text-2xl md:text-3xl">{t("intro")}</p>

          <h1 className="text-4xl font-bold linear-wipe drop-shadow-glow dark:drop-shadow-glow-dark md:text-6xl">
            {t("main")}
          </h1>
        </div>

        <div className="space-x-6 text-[2rem]">
          <Link
            href="https://linkedin.com/in/henryornellas"
            target="blank"
            className="transition-all duration-300 hover:text-black hover:drop-shadow-glow dark:hover:drop-shadow-glow-dark dark:hover:text-white"
          >
            <i className="fa-brands fa-linkedin" />
          </Link>

          <Link
            href="https://github.com/henryornellas"
            target="blank"
            className="transition-all duration-300 hover:text-black hover:drop-shadow-glow dark:hover:drop-shadow-glow-dark dark:hover:text-white"
          >
            <i className="fa-brands fa-github" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// #439bd1
