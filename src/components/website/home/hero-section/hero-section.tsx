import ShinyText from "@/components/custom/motion/text-shine";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import CustomButton from "@/components/custom/layout/custom-button";
import { GoProjectRoadmap } from "react-icons/go";
import { Phone, Sparkles } from "lucide-react";
import HeroDecoration from "./hero-decoration";
import HeroImage from "./hero-image";
import HeroSocialLinks from "./hero-social-links";
import { FaArrowDown } from "react-icons/fa";
import HeroStatusBar from "./hero-Stats-bar";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";

export default async function HeroSection({ lang }: { lang: Lang }) {
  const dictHero = (await getDictionary(lang)).homePage.heroSection;

  return (
    <section className="relative backdrop-blur-2xl overflow-hidden w-full z-20 bg-primary/10 h-screen">
      <HeroDecoration lang={lang} />
      {/* Main Content */}
      <MotionWrapper
        as="div"
        className="relative z-10  flex items-center h-full"
      >
        <div className="container max-w-6xl mx-auto px-4 py-10 h-full">
          <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-end md:justify-between h-full">
            {/* Left Column - Content */}
            <div className="text-left">
              {/* Main Title */}
              <MotionWrapper
                as="h1"
                fadeUp
                delay={0.1}
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-center md:text-start"
              >
                <ShinyText text={dictHero.title} />
              </MotionWrapper>

              {/* Animated Subtitle */}
              <MotionWrapper fadeUp delay={0.2} className="mb-8 h-10 md:h-20">
                <p className="text-xl text-center md:text-start">
                  {dictHero.subTitle}
                </p>
              </MotionWrapper>

              {/* Stats Bar */}
              <HeroStatusBar lang={lang} />

              {/* CTA Buttons */}
              <MotionWrapper
                fadeUp
                delay={0.4}
                className="flex flex-row items-center justify-center md:justify-start gap-4 mb-4"
              >
                <MotionWrapper
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CustomButton
                    href={`/${lang}/projects`}
                    text={dictHero.action.projects}
                    iconLeft={<GoProjectRoadmap />}
                    iconRight={
                      <FaArrowDown className="group-hover:translate-y-1 transition-transform w-3 h-3 md:h-5 md:w-5" />
                    }
                    isOutlined
                  />
                </MotionWrapper>
                <MotionWrapper
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CustomButton
                    href={`/${lang}/contact`}
                    text={dictHero.action.contact}
                    iconLeft={<Phone />}
                    iconRight={<Sparkles className="w-3 h-3 md:h-5 md:w-5" />}
                  />
                </MotionWrapper>
              </MotionWrapper>

              {/* Social Links with Enhanced Style */}
              <HeroSocialLinks lang={lang} />
            </div>

            {/* Right Column - Profile Image & Decoration */}
            <HeroImage imageAlt={dictHero.imageAlt} />
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}
