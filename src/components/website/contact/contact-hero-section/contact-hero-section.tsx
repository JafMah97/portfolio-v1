import HeroDecoration from "@/components/custom/layout/hero-decoration";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import ShinyText from "@/components/custom/motion/text-shine";
import ContactHeroCard from "./contact-hero-card";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";

interface ContactHeroSectionProps  {
  lang:Lang
}

export default async function ContactHeroSection({ lang }: ContactHeroSectionProps) {
  const dict = (await getDictionary(lang)).contactPage.heroSection
  const links = [
    {
      label: dict.links.whatsapp,
      href: "https://wa.me/0983497176",
    },
    {
      label: dict.links.linkedin,
      href: "https://www.linkedin.com/in/jafmah97/",
    },
    {
      label: dict.links.email,
      href: "mailto:jafmah9@gmail.com",
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
            <p>
              {
                dict.subtitle
              }
            </p>
          </MotionWrapper>

          {/* links */}
          <MotionWrapper
            fadeUp
            delay={0.4}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {links.map((link, idx) => (
                <ContactHeroCard key={idx} link={link} index={idx} />
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
