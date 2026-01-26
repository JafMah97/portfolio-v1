import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import CustomButton from "@/components/custom/layout/custom-button";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import ShinyText from "@/components/custom/motion/text-shine";
import { Code2, Send, Server, Sparkles, Wrench } from "lucide-react";
import HomeSkillCard from "./home-skill-card";
import HomeAboutDecoration from "./home-about-decoration";

export default async function HomeAboutSection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).homePage.aboutSection;
  return (
    <section className="py-24 relative backdrop-blur-2xl bg-primary/10 overflow-hidden ">
      {/* Background Particles */}
      <HomeAboutDecoration />

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
          className="max-w-3xl mx-auto text-center text-[16px] md:text-lg text-muted-foreground mb-5 md:mb-16 md:leading-relaxed"
        >
          <p>{dict.description}</p>
        </MotionWrapper>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <HomeSkillCard
            title={dict.skills.frontend.title}
            icon={<Code2 className="w-7 h-7 text-primary" />}
            delay={0.3}
            items={dict.skills.frontend.items}
          />

          <HomeSkillCard
            title={dict.skills.backend.title}
            icon={<Server className="w-7 h-7 text-primary" />}
            delay={0.4}
            items={dict.skills.backend.items}
          />

          <HomeSkillCard
            title={dict.skills.tools.title}
            icon={<Wrench className="w-7 h-7 text-primary" />}
            delay={0.5}
            items={dict.skills.tools.items}
          />
        </div>

        {/* CTA Button */}
        <MotionWrapper fadeUp delay={0.6} className="text-center">
          <CustomButton
            text={dict.cta}
            href={`/${lang}/about`}
            iconLeft={<Send className="w-5 h-5" />}
            iconRight={<Sparkles className="w-5 h-5" />}
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
