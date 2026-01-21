import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import {  Brain, Lightbulb, TrendingUp,  } from "lucide-react";
import AboutDecoration from "../../home/about-section/about-decoration";
import ShinyText from "@/components/custom/motion/text-shine";
import PhilosophyCard, { PhilosophyCardProps } from "./philosophy-card";

export default async function PhilosophySection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).aboutPage.philosophy
  const approachData: PhilosophyCardProps[] = [
    {
      title: dict.cards.problemFirst.title,
      description: dict.cards.problemFirst.description,
      icon: Brain,
      color: "blue",
    },
    {
      title: dict.cards.innovativeSolutions.title,
      description: dict.cards.innovativeSolutions.description,
      icon: Lightbulb,
      color: "purple",
    },
    {
      title: dict.cards.continuousGrowth.title,
      description: dict.cards.continuousGrowth.description,
      icon: TrendingUp,
      color: "green",
    },
  ];
  return (
    <section className="pb-10 relative backdrop-blur-2xl bg-primary/10 overflow-hidden ">
      <AboutDecoration />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <MotionWrapper
          fadeUp
          as="h2"
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          <ShinyText text={dict.title} />
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper
          fadeUp
          delay={0.2}
          className="max-w-3xl mx-auto text-center text-[16px] md:text-lg text-muted-foreground mb-5 md:mb-12 md:leading-relaxed"
        >
          <p>
            {dict.subtitle}
          </p>
        </MotionWrapper>

        <div className="container max-w-7xl mx-auto px-4 py-4 relative">
          {/* Philosophy Section */}
          <MotionWrapper
            fadeUp
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {approachData.map((item) => (
                  <PhilosophyCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
