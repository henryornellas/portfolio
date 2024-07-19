"use client";

import { cn } from "@/utils";
import { ChevronDown, MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Brazil from "@/public/assets/brazil.svg";
import USA from "@/public/assets/usa.svg";
import { usePathname } from "next/navigation";

const navLinks = [{ link: "#home" }, { link: "#about" }, { link: "#projects" }];

const langs = [
  { flag: Brazil, label: "pt", link: "/pt-BR" },
  { flag: USA, label: "en", link: "/en" },
];

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState("home");
  const [openLangSelect, setOpenLangSelect] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [lang, setLang] = useState("pt-BR");

  const pathname = usePathname();

  const langRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  const t = useTranslations("navbar");

  function themeSwitch() {
    if (document) {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
        setCurrentTheme("light")
        return
      }

      document.documentElement.classList.add("dark")
      setCurrentTheme("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  useEffect(() => {
    const sections = document.getElementsByTagName("section");

    const userTheme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (userTheme?.includes("dark") || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark")
      setCurrentTheme("dark")
    } else {
      setCurrentTheme("light")
    }

    window.addEventListener("scroll", () => {
      Array.from(sections).forEach((section) => {
        if (window.scrollY + 500 >= section.offsetTop) {
          setCurrentSection(section.id);
        }
      });
    });

    function handleOutsideClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setOpenLangSelect(false);
      }

      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpenDrawer(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    setLang(pathname.split("/").pop() || "pt-BR");

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [pathname]);

  const CurrentFlag = langs.find((l) => l.link.includes(lang))?.flag;

  return (
    <>
      <nav className="fixed top-0 w-full py-8 z-10 backdrop-blur-[30px]">
        <div className="max-w-[80%] mx-auto text-dark flex flex-row items-center justify-between dark:text-light 2xl:max-w-[1228px]">
          <div className="flex items-center gap-5">
            <Link className="text-xl font-bold text-black dark:text-white" href="#home">
              Henry.dev
            </Link>

            <button
              ref={langRef}
              onClick={() => setOpenLangSelect((prev) => !prev)}
              className="relative flex items-center gap-1 text-base font-medium"
            >
              {CurrentFlag && <CurrentFlag className="w-5" />}

              <ChevronDown
                size={16}
                strokeWidth={3}
                className={cn(
                  "rotate-0 transition-all duration-200",
                  openLangSelect && "-rotate-180"
                )}
              />

              <div
                className={cn(
                  "!absolute !space-y-1 !top-[calc(100%+8px)] !pointer-events-none !p-2 !rounded !left-1/2 !-translate-x-1/2 glass !opacity-0 !max-h-0 !transition-all !duration-200 before:!rounded before:!p-px",
                  openLangSelect && "!opacity-100 !max-h-40 !pointer-events-auto"
                )}
              >
                {langs.map(({ flag: Flag, label, link }) => (
                  <Link
                    key={link}
                    href={link}
                    className="flex items-center gap-1.5"
                  >
                    <Flag className="w-5" />
                    {label}
                  </Link>
                ))}
              </div>
            </button>
          </div>

          <div className="hidden flex-row items-center gap-8 font-semibold md:flex">
            {navLinks.map(({ link }, i) => {
              const active = link.includes(currentSection);

              return (
                <Link
                  key={link}
                  href={link}
                  className={cn(
                    "navLink relative bottom-0 transition-all duration-150 hover:bottom-0.5 hover:text-black hover:drop-shadow-glow dark:hover:text-white dark:hover:drop-shadow-glow-dark",
                    active && "text-black drop-shadow-glow dark:text-white dark:drop-shadow-glow-dark"
                  )}
                >
                  {t(`${i + 1}`)}

                  <div
                    className={cn(
                      "absolute -bottom-0.5 transition-all duration-150 w-0 h-px opacity-0 bg-black dark:bg-white left-1/2 -translate-x-1/2",
                      active && "w-full opacity-100"
                    )}
                  />
                </Link>
              );
            })}

            <button onClick={themeSwitch} className="flex group toggle-theme">
              <SunIcon className={cn("rotate-180 opacity-0 transition-all duration-300 group-hover:text-white", currentTheme === "dark" && "rotate-0 opacity-100")} />
              <MoonIcon className={cn("rotate-0 absolute opacity-100 transition-all duration-300 group-hover:text-black", currentTheme === "dark" && "-rotate-180 opacity-0 ")} />
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button onClick={themeSwitch} className="flex toggle-theme">
              <SunIcon size={22} className={cn("rotate-180 opacity-0 transition-all duration-300", currentTheme === "dark" && "rotate-0 opacity-100")} />
              <MoonIcon size={22} className={cn("rotate-0 absolute opacity-100 transition-all duration-300", currentTheme === "dark" && "-rotate-180 opacity-0 ")} />
            </button>

            <button onClick={() => setOpenDrawer(true)}>
              <MenuIcon size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <aside
        ref={drawerRef}
        className={cn(
          "backdrop-blur-[30px] fixed -right-full top-0 h-full flex flex-col gap-8 w-1/2 p-0 z-50 transition-all duration-300 border-l border-light dark:border-black",
          openDrawer && "-right-2 p-8 animate-expand"
        )}
      >
        <button onClick={() => setOpenDrawer(false)} className="ml-auto text-black dark:text-white">
          <XIcon size={26} />
        </button>

        <div className="flex flex-col gap-8 text-xl mx-auto">
          {navLinks.map(({ link }, i) => {
            const active = link.includes(currentSection);

            return (
              <Link
                key={link}
                href={link}
                className={cn(
                  "navLink w-fit relative bottom-0 text-dark transition-all duration-150 dark:text-light",
                  active && "text-black drop-shadow-glow dark:text-white dark:drop-shadow-glow-dark"
                )}
              >
                {t(`${i + 1}`)}

                <div
                  className={cn(
                    "absolute -bottom-0.5 transition-all duration-150 w-0 h-px opacity-0 bg-black left-1/2 -translate-x-1/2 dark:bg-white",
                    active && "w-full opacity-100"
                  )}
                />
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
