import Image from "next/image";
import { About, Hero, Navbar, Projects } from "@/layouts";
import Background from "@/public/assets/background.jpg";
import { Particles } from "@/components";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <>
      {/* <Image
        src={Background}
        fill
        className="object-cover opacity-[0.01]"
        alt=""
      /> */}
      <div className="relative z-10 overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>

      <Particles
        className="fixed inset-0 top-0 bottom-0"
        quantity={100}
        ease={80}
        color="#8e8e93"
        refresh
      />
    </>
  );
}
