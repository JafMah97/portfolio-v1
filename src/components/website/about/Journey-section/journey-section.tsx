import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import ShinyText from "@/components/custom/motion/text-shine";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import { FaLayerGroup, FaRocket, FaServer, FaUserTie } from "react-icons/fa";
import JourneyCard from "./journey-card";

export default async function JourneySection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).aboutPage.journey;
  const experiences = [
    {
      title: dict.experiences.foundations.title,
      company: dict.experiences.foundations.company,
      period: dict.experiences.foundations.period,
      description: dict.experiences.foundations.description,
      achievements: dict.experiences.foundations.achievements,
      icon: <FaLayerGroup />,
    },
    {
      title: dict.experiences.modernFrontend.title,
      company: dict.experiences.modernFrontend.company,
      period: dict.experiences.modernFrontend.period,
      description: dict.experiences.modernFrontend.description,
      achievements: dict.experiences.modernFrontend.achievements,
      icon: <FaRocket />,
    },
    {
      title: dict.experiences.firstProject.title,
      company: dict.experiences.firstProject.company,
      period: dict.experiences.firstProject.period,
      description: dict.experiences.firstProject.description,
      achievements: dict.experiences.firstProject.achievements,
      icon: <FaServer />,
    },
    {
      title: dict.experiences.freelanceFrontend.title,
      company: dict.experiences.freelanceFrontend.company,
      period: dict.experiences.freelanceFrontend.period,
      description: dict.experiences.freelanceFrontend.description,
      achievements: dict.experiences.freelanceFrontend.achievements,
      icon: <FaUserTie />,
    },
    {
      title: dict.experiences.konekta.title,
      company: dict.experiences.konekta.company,
      period: dict.experiences.konekta.period,
      description: dict.experiences.konekta.description,
      achievements: dict.experiences.konekta.achievements,
      icon: <FaLayerGroup />,
    },
    {
      title: dict.experiences.portfolio.title,
      company: dict.experiences.portfolio.company,
      period: dict.experiences.portfolio.period,
      description: dict.experiences.portfolio.description,
      achievements: dict.experiences.portfolio.achievements,
      icon: <FaRocket />,
    },
  ];

  return (
    <section id={"journey"} className="py-10 relative backdrop-blur-2xl bg-primary/10 overflow-hidden ">
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

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500" />
          {experiences.map((exp, idx) => (
            <JourneyCard key={idx} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
