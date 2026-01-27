import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import ShinyText from "@/components/custom/motion/text-shine";
import CustomButton from "@/components/custom/layout/custom-button";
import { Mail, ArrowRight, Sparkles, Target, Zap } from "lucide-react";

export default async function CtaSection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).projectsPage.cta;
  const content = {
    title: dict.projectTitle,
    description: dict.projectDescription,
    buttonText: dict.button,
    features: [
      { icon: <Target size={16} />, text: dict.features.customSolutions },
      { icon: <Zap size={16} />, text: dict.features.fastDelivery },
      { icon: <Sparkles size={16} />, text: dict.features.qualityGuaranteed },
    ],
  };

  return (
    <section className="relative pb-24 backdrop-blur-xl bg-primary/10">
      <div className="container max-w-6xl mx-auto px-4">
        <MotionWrapper
          as="h2"
          fadeUp
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
          <p>
            {dict.description}
          </p>
        </MotionWrapper>
        <MotionWrapper
          fadeUp
          stagger={0.4}
          className="flex justify-center items-center"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-primary">{feature.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <CustomButton
                iconLeft={<Mail className="w-5 h-5" />}
                text={dict.button}
                iconRight={<ArrowRight className="w-5 h-5" />}
                href={`/${lang}/contect`}
                isOutlined={false}
              />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
