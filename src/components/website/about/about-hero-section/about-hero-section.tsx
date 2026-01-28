import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import ShinyText from "@/components/custom/motion/text-shine";
import { Award, Rocket, ToolCase } from "lucide-react";
import AboutHeroCard from "./about-hero-card";
import HeroDecoration from "@/components/custom/layout/hero-decoration";

export default async function AboutHeroSection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).aboutPage.hero;
  const CardsData = [
    {
      label: dict.cards.projects,
      value: "4+",
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      link: `/${lang}/projects`,
    },
    {
      label: dict.cards.technologies,
      value: "20+",
      icon: <ToolCase className="w-5 h-5 md:w-6 md:h-6" />,
      link: "#tech",
    },
    {
      label: dict.cards.years,
      value: "2+",
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      link: "#journey",
    },
  ];

  return (
    <section className="relative backdrop-blur-2xl overflow-hidden w-full z-20 bg-primary/10 h-screen flex items-center">
      <HeroDecoration />
      

      <div className="container max-w-6xl mx-auto h-full">
        <div className=" relative z-50 flex flex-col justify-center h-full items-center gap-5 px-4 md:px-6">
          {/* Title */}
          <MotionWrapper
            as="h1"
            fadeUp
            delay={0.1}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            <ShinyText text={dict.title} />
          </MotionWrapper>

          {/* Subtitle */}
          <MotionWrapper
            fadeUp
            delay={0.2}
            className="max-w-3xl mx-auto text-center text-[16px] md:text-lg  mb-5 md:mb-16 md:leading-relaxed"
          >
            <p>{dict.subtitle}</p>
          </MotionWrapper>

          {/* cards */}
          <MotionWrapper
            fadeUp
            delay={0.4}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {CardsData.map((stat, idx) => (
                <AboutHeroCard key={idx} stat={stat} index={idx} />
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
