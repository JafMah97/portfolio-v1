import HeroDecoration from "@/components/custom/layout/hero-decoration";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import ShinyText from "@/components/custom/motion/text-shine";
import { Project } from "@/constants/projects-data";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import Image from "next/image";
import Link from "next/link";
import {
  FiGithub,
  FiExternalLink,
  FiServer,
  FiChevronRight,
} from "react-icons/fi";

interface ProjectHeroSectionProps {
  lang: Lang;
  project: Project;
}
export default async function ProjectHeroSection({
  lang,
  project,
}: ProjectHeroSectionProps) {
  const dict = await getDictionary(lang);
  return (
    <section className="relative overflow-hidden py-20">
      <HeroDecoration />
      <div className="container max-w-6xl mx-auto px-4 relative min-h-[60vh]">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 h-full">
          <div className="h-full flex flex-col justify-center items-center">
            {/* title */}
            <MotionWrapper
              as="h1"
              fadeUp
              delay={0.1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-start"
            >
              <ShinyText text={project.title} />
            </MotionWrapper>

            {/* Subtitle */}
            <MotionWrapper fadeUp delay={0.2} className="mb-8 h-10 md:h-20">
              <p className="text-xl text-center">
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
                  className="group flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                >
                  <FiGithub className="text-lg" />
                  <span>View Code</span>
                  <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}

              {project.links.demo && (
                <Link
                  prefetch={false}
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all hover:scale-105 shadow-lg"
                >
                  <FiExternalLink className="text-lg" />
                  <span>Live Demo</span>
                  <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}

              {project.links.backendGithub && (
                <Link
                  prefetch={false}
                  href={project.links.backendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-foreground/70 dark:bg-foreground/30 text-white rounded-lg  hover:scale-105 shadow-lg"
                >
                  <FiServer className="text-lg" />
                  <span>Backend Repo</span>
                  <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </MotionWrapper>
          </div>
          <div className="w-full h-full">
            <Image className="object-cover w-full h-full rounded-2xl" src={project.photos[0]} alt={project.title} width={1000} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
}
