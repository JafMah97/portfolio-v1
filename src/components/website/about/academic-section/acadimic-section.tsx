import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import ShinyText from "@/components/custom/motion/text-shine";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import AcademicCard from "./acadimic-card";

export default async function AcademicSection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).aboutPage.academic;

  return (
    <section className="py-10 relative backdrop-blur-2xl bg-primary/10 overflow-hidden ">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <MotionWrapper
          fadeUp
          as="h2"
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          <ShinyText text={dict.title}/>
        </MotionWrapper>

        <MotionWrapper
          fadeUp
          delay={0.2}
          className="max-w-3xl mx-auto text-center text-[16px] md:text-lg 
          text-muted-foreground mb-5 md:mb-12 md:leading-relaxed"
        >
          <p>
            {dict.subtitle}
          </p>
        </MotionWrapper>

        <div className="max-w-4xl mx-auto">
          <AcademicCard lang={lang} />
        </div>
      </div>
    </section>
  );
}
