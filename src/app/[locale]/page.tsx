import { About, Hero, Navbar, Projects } from "@/layouts";
import { Particles } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <>
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
