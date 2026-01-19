import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";

export default async function HeroStatsBar({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).homePage.hero.stats;
  const staArr = [
    { value: "2+", label: dict.years },
    { value: "5+", label: dict.projects },
    { value: "20+", label: dict.technologies },
    { value: "100%", label: dict.satisfaction },
  ];
  return (
    <>
      {/* Stats Bar */}
      <MotionWrapper
        fadeUp
        delay={0.3}
        className="lg:flex flex-wrap gap-6 mb-8 hidden"
      >
        {staArr.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </MotionWrapper>
    </>
  );
}
