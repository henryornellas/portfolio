"use client";

import { cn } from "@/utils";
import Sppa from "@/public/assets/sppa.png";
import Miia from "@/public/assets/miia.png";
import Nukle from "@/public/assets/nukle.png";
import MfCert from "@/public/assets/mfcert.png";
import TempoCerto from "@/public/assets/tempo-certo.png";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Tempo Certo 🚚",
    link: "https://tempo-certo.vercel.app/",
    techs: ["NextJs", "TailwindCSS", "React Native"],
    image: TempoCerto,
  },
  {
    name: "SPPA 🦷",
    link: "https://sppaimplantology.com/",
    techs: ["NextJs", "TailwindCSS"],
    image: Sppa,
  },
  {
    name: "Nukle 🏠",
    link: "https://nukle.com.br/",
    techs: ["PHP", "Wordpress"],
    image: Nukle,
  },
  {
    name: "MF Certificados 📑",
    link: "https://www2.mfcertificados.com/",
    techs: ["NextJs", "TailwindCSS"],
    image: MfCert,
  },
  {
    name: "MIIA 🤖",
    link: "https://www.miia.tech/",
    techs: ["ReactJs", "MaterialUI"],
    image: Miia,
  },
];

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className="flex justify-center relative py-24 overflow-hidden"
    >
      <div className="flex flex-col gap-8 container w-full">
        <h2 className="font-bold text-2xl text-black drop-shadow-glow dark:text-white">
          {t("title")}
        </h2>

        <div className="flex flex-col gap-12">
          {projects.map(({ name, link, techs, image }, i) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, x: i % 2 === 0 ? -10 : 10 },
                visible: { opacity: 1, x: 0 },
              }}
              key={name}
              className={cn(
                "!flex !flex-col !items-center h-[45rem] glass !p-6 !gap-5 lg:!h-[25rem] lg:!flex-row",
                i % 2 === 0 && "lg:!flex-row-reverse"
              )}
            >
              <div
                style={{ backgroundImage: `url(${image.src})` }}
                className="rounded-2xl overflow-hidden bg-cover w-full h-full bg-no-repeat bg-top transition-all duration-[5s] hover:bg-bottom lg:w-[45%] lg:h-[80%] xl:h-full xl:w-[55%]"
              >
                <a href={link} className="h-full w-full flex" target="_blank" />
              </div>

              <div className="flex flex-col items-center justify-between w-full py-4 lg:w-[55%] xl:w-[45%]">
                <div className="flex justify-between h-full items-center text-center gap-8 flex-col w-[90%]">
                  <p className="text-lg text-black font-semibold dark:text-white">
                    {name}
                  </p>

                  <p className="text-base !leading-5 text-black lg:text-sm xl:text-base dark:text-light">
                    {t(`${i + 1}`)}
                  </p>

                  <div className="flex flex-row flex-wrap items-center justify-center gap-3">
                    {techs.map((tech) => (
                      <div
                        key={tech}
                        className="p-2 rounded-lg bg-[rgb(220,220,226)] dark:bg-[#161616]"
                      >
                        <p className="text-sm text-black dark:text-white">
                          {tech}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
