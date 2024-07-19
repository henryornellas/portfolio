"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <div className="container w-full flex flex-col text-center items-center justify-between gap-24 md:items-start md:text-start">
        <div className="flex flex-col gap-1">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: .9 }}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, }
            }}
            className="text-2xl md:text-3xl">
            {t("intro")}
          </motion.p>

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: .9 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, }
            }}
            className="text-4xl font-bold linear-wipe drop-shadow-glow dark:drop-shadow-glow-dark md:text-6xl">
            {t("main")}
          </motion.h1>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: .9 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="flex gap-6 text-[2rem]">

          <motion.li
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href="https://linkedin.com/in/henryornellas"
              target="blank"
              className="transition-all duration-300 hover:text-black hover:drop-shadow-glow dark:hover:drop-shadow-glow-dark dark:hover:text-white"
            >
              <i className="fa-brands fa-linkedin" />
            </Link>
          </motion.li>

          <motion.li
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >

            <Link
              href="https://github.com/henryornellas"
              target="blank"
              className="transition-all duration-300 hover:text-black hover:drop-shadow-glow dark:hover:drop-shadow-glow-dark dark:hover:text-white"
            >
              <i className="fa-brands fa-github" />
            </Link>
          </motion.li>

          <motion.li
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >

            <Link
              href="mailto:henrygabriellemos@hotmail.com"
              target="blank"
              className="transition-all duration-300 hover:text-black hover:drop-shadow-glow dark:hover:drop-shadow-glow-dark dark:hover:text-white"
            >
              <i className="fa-solid fa-envelope" />
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

// #439bd1
