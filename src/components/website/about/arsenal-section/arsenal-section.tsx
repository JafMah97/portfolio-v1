import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import ShinyText from "@/components/custom/motion/text-shine";
import {
  FaCode,
  FaPalette,
  FaServer,
  FaDatabase,
  FaTools,
  FaGlobe,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiGithub,
  SiPrisma,
  SiPostgresql,
  SiRedux,
  SiFastify,
  SiAxios,
} from "react-icons/si";
import { RiToolsFill } from "react-icons/ri";
import ArsenalCard from "./arsenal-card";

export default async function ArsenalSection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).aboutPage.arsenal
  // Group skills by category
  const skillCategories = [
    {
      name: dict.categories.core,
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      ],
    },
    {
      name: dict.categories.frontend,
      icon: FaPalette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
        { name: "i18n", icon: FaGlobe, color: "text-green-500" },
        { name: "Framer Motion", icon: FaTools, color: "text-pink-500" },
      ],
    },
    {
      name: dict.categories.backend,
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        {
          name: "Fastify",
          icon: SiFastify,
          color: "text-black dark:text-white",
        },
        {
          name: "Prisma",
          icon: SiPrisma,
          color: "text-blue-900 dark:text-blue-300",
        },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      ],
    },
    {
      name: dict.categories.tools,
      icon: RiToolsFill,
      color: "from-orange-500 to-red-500",
      skills: [
        {
          name: "Git & GitHub",
          icon: SiGithub,
          color: "text-gray-800 dark:text-white",
        },
        { name: "Redux", icon: SiRedux, color: "text-purple-500" },
        { name: "React Query", icon: FaDatabase, color: "text-red-500" },
        { name: "Axios", icon: SiAxios, color: "text-purple-600" },
        { name: "REST API", icon: FaCode, color: "text-green-500" },
      ],
    },
  ];


  return (
    <section id={"tech"} className="relative py-10 backdrop-blur-2xl overflow-hidden w-full z-20 bg-primary/10 min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-linear-to-r from-transparent via-gray-600/50 to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <MotionWrapper
            fadeUp
            as="h2"
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <ShinyText text={dict.title} />
          </MotionWrapper>

          <MotionWrapper
            fadeUp
            delay={0.2}
            className="max-w-3xl mx-auto text-center text-[16px] md:text-lg text-muted-foreground mb-5 md:mb-12 md:leading-relaxed"
          >
            {" "}
            <p>
              {dict.subtitle}
            </p>
          </MotionWrapper>
        </div>

        {/* Skill Categories - Interactive Grid */}
        <MotionWrapper fadeUp delay={0.3} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIdx) => (
              <ArsenalCard
                category={category}
                key={categoryIdx}
                index={categoryIdx}
              />
            ))}
          </div>
        </MotionWrapper>

        
      </div>
    </section>
  );
}
