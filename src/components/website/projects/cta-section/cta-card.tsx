import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import SkillCardDecoration from "../../home/home-about-section/home-skill-card-decoration";
import { Lang } from "@/utils/translations/dictionary-utils";
import { Mail, ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import CustomButton from "@/components/custom/layout/custom-button";

export default function CtaCard({ lang }: { lang: Lang }) {
  const content = {
    title: "Let's Build Something Amazing Together",
    description:
      "Have a project in mind? I'm ready to bring your ideas to life with cutting-edge solutions and creative expertise.",
    buttonText: "Start Your Project",
    features: [
      { icon: <Target size={16} />, text: "Custom Solutions" },
      { icon: <Zap size={16} />, text: "Fast Delivery" },
      { icon: <Sparkles size={16} />, text: "Quality Guaranteed" },
    ],
  };

  return (
    <MotionWrapper
      fadeUp
      delay={0.4}
      whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative max-w-3xl"
    >
      {/* External Glow Effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 transition duration-500 animate-pulse-slow" />

      {/* Main Card */}
      <Card className="relative p-6 h-full border-white/20 dark:border-gray-700/30 bg-linear-to-br from-white/90 to-white/60 dark:from-gray-900/90 dark:to-gray-800/60 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <SkillCardDecoration />
        <CardContent className="p-0 relative z-20">
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
                text={content.buttonText}
                iconRight={<ArrowRight className="w-5 h-5" />}
                href="/contact"
                isOutlined={false}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </MotionWrapper>
  );
}
