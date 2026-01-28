import HeroDecoration from "@/components/custom/layout/hero-decoration";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import ShinyText from "@/components/custom/motion/text-shine";
import { Project } from "@/constants/projects-data";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";


interface ProjectHeroSectionProps {
  lang: Lang;
  project: Project;
}
export default async function ProjectHeroSection({
  lang,
  project,
}: ProjectHeroSectionProps) {
  const dict = (await getDictionary(lang)).projectPage.hero;
  return (
    <section className="relative overflow-hidden py-20">
      <HeroDecoration />
      <div className="container max-w-6xl mx-auto px-4 relative py-24">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 h-full">
          <div className="h-full flex flex-col justify-center items-center gap-5">
            {/* title */}
            <MotionWrapper
              as="h1"
              fadeUp
              delay={0.1}
              className="text-5xl md:text-6xl font-bold mb-6 text-center md:text-start"
            >
              <ShinyText text={project.title} />
            </MotionWrapper>

            {/* Subtitle */}
            <MotionWrapper fadeUp delay={0.2}>
              <p className="max-w-3xl mx-auto text-center text-[16px] md:text-lg mb-5 md:mb-16 md:leading-relaxed">
                {project.description}
              </p>
            </MotionWrapper>

            {/* Links */}
            <MotionWrapper
              className="flex justify-center items-center flex-wrap gap-4"
              fadeUp
              stagger={0.4}
            >
              {project.links.github && (
                <Link
                  prefetch={false}
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-4 py-2 rounded-full bg-forground/30 border border-foreground/10 text-sm hover:bg-foreground/5 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm flex items-center gap-2 `}
                >
                  <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-4 h-4" />

                  <span className="text-center"> {dict.links.viewCode}</span>
                  <div className="w-3 h-3"></div>
                </Link>
              )}

              {project.links.demo && (
                <Link
                  prefetch={false}
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-4 py-2 rounded-full bg-forground/30 border border-foreground/10 text-sm hover:bg-foreground/5 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm flex items-center gap-2 `}
                >
                  <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-4 h-4" />

                  <span className="text-center">{dict.links.demo}</span>
                  <div className="w-3 h-3"></div>
                </Link>
              )}

              {project.links.backendGithub && (
                <Link
                  prefetch={false}
                  href={project.links.backendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-4 py-2 rounded-full bg-forground/30 border border-foreground/10 text-sm hover:bg-foreground/5 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm flex items-center gap-2 `}
                >
                  <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-4 h-4" />

                  <span className="text-center">{dict.links.backendRepo}</span>
                  <div className="w-3 h-3"></div>
                </Link>
              )}
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
