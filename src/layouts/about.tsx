"use client";

import Image from "next/image";
import MePhoto from "@/public/assets/mephoto.jpg";
import { IconCloud } from "@/components";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const slugs = [
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
  "reacthookform",
  "zod",
];

export default function About() {
  const startTime = new Date(2023, 4);
  const today = new Date();

  const totalTime = today.getTime() - startTime.getTime();
  const experienceTime = totalTime / (1000 * 60 * 60 * 24 * 365);
  const experienceString =
    Math.ceil(Number(experienceTime.toFixed(2)) * 10) / 10;

  const t = useTranslations("about");

  return (
    <section id="about" className="section scroll-mt-10  relative py-24">
      <div className="flex flex-col gap-8 container w-full">
        <h2 className="font-bold text-2xl text-black drop-shadow-glow dark:text-white">
          {t("title")}
        </h2>

        <div className="flex flex-col justify-between items-center gap-12 xl:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            className="leading-5 space-y-2 text-dark xl:max-w-[60%] dark:text-light"
          >
            <div className="size-32 p-2 float-right ml-1.5 glass md:p-3 md:size-40">
              <Image alt="" src={MePhoto} className="rounded-[35px]" />
            </div>

            <p className="!my-0">{t("main.1")}</p>

            <p>{t("main.2")}</p>

            <p>
              {t.rich("main.3", {
                exp: () => (
                  <span className="text-black drop-shadow-glow dark:text-white">
                    {experienceString + "+"}
                  </span>
                ),
              })}
            </p>

            <p>
              {t.rich("main.4", {
                company: (e) => (
                  <a
                    href="https://www.flowlabtech.com.br/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="text-black drop-shadow-glow underline dark:text-white">
                      {e}
                    </span>
                  </a>
                ),
              })}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: 10 },
              visible: { opacity: 1, x: 0 },
            }}
            className="z-[5] size-[240px]"
          >
            <IconCloud iconSlugs={slugs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
