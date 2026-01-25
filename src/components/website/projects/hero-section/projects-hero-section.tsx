import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import AboutHeroDecoration from "../../about/hero-section/hero-decorations";
import ShinyText from "@/components/custom/motion/text-shine";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default async function ProjectsHeroSection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).projectsPage.heroSection;
  const technologies = [
    {
      name: "React",
      url: "https://react.dev",
      color: "hover:border-blue-400/50 hover:text-blue-400",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org",
      color: "hover:border-gray-400/50 hover:text-gray-100",
    },
    {
      name: "TypeScript",
      url: "https://typescriptlang.org",
      color: "hover:border-blue-600/50 hover:text-blue-300",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      color: "hover:border-cyan-400/50 hover:text-cyan-300",
    },
    {
      name: "Node.js",
      url: "https://nodejs.org",
      color: "hover:border-green-500/50 hover:text-green-400",
    },
  ];

  return (
    <section className="relative backdrop-blur-2xl  w-full z-20 bg-primary/10 min-h-screen flex items-center">
      <AboutHeroDecoration />

      <div className="container max-w-6xl mx-auto h-full">
        <div className="relative z-50 flex flex-col justify-center h-full items-center gap-5 px-4 md:px-6">
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
            className="max-w-3xl mx-auto text-center text-[16px] md:text-lg mb-5 md:mb-16 md:leading-relaxed"
          >
            <p>{dict.subtitle}</p>
          </MotionWrapper> 

          {/* Technology Cards */}
           <MotionWrapper
            fadeUp
            delay={0.4}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="text-sm text-muted-foreground mb-3 text-center">
              {dict.technologiesLabel}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, i) => (
                <div key={tech.name}>
                  <Link
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative px-4 py-2 rounded-full bg-background/30 border border-foreground/10 text-sm hover:bg-foreground/5 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm flex items-center gap-2 ${tech.color}`}
                    style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span>{tech.name}</span>
                    <div className="w-3 h-3"></div>
                  </Link>
                </div>
              ))}
            </div>
          </MotionWrapper> 
        </div>
      </div>
    </section>
  );
}
