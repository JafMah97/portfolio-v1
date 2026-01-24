import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";

import ProjectCard from "./project-card";
import ShinyText from "@/components/custom/motion/text-shine";
import ProjectsCarousel from "./projects-carousel";
import { CarouselItem } from "@/components/ui/carousel";
import CustomButton from "@/components/custom/layout/custom-button";
import { Send, Sparkles } from "lucide-react";
import projectsData, { Project } from "@/constants/projects-data";

export default async function ProjectsSection({ lang }: { lang: Lang }) {
  const dict = (await getDictionary(lang)).homePage.projectsSection;
  const projects: Project[] = (await projectsData(lang)).slice(0,4);

  return (
    <section className="relative py-24 backdrop-blur-xl bg-primary/10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
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
          <p>{dict.description}</p>
        </MotionWrapper>

        <div className=" px-3 md:px-15 py-10 rounded-4xl bg-primary/10">
          {/* Carousel */}
          <ProjectsCarousel lang={lang}>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} index={index} lang={lang} />
              </CarouselItem>
            ))}
          </ProjectsCarousel>
        </div>
        {/* cta button */}
        <div className="flex justify-center items-center py-10">
          <CustomButton
            href={`/${lang}/projects`}
            iconLeft={<Send className="w-5 h-5" />}
            text={dict.cta}
            iconRight={<Sparkles className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
}
