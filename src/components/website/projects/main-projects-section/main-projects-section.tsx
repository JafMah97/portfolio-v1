import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import ProjectCard from "../../home/projects-section/project-card";
import ProjectsWrapper from "./projects-wrapper";
import projectsData, { Project } from "@/constants/projects-data";

export default async function MainProjectsSection({
  lang,
  searchParams,
}: {
  lang: Lang;
  searchParams?: { q?: string };
}) {
  const query = (searchParams?.q || "").toLowerCase();
  const projects: Project[] = await projectsData(lang);

  const sub = (await getDictionary(lang)).projectsPage.main.subtitle;

  const filteredProjects = projects.filter((p) => {
    const text =
      `${p.title} ${p.description} ${p.technologies.join(" ")}`.toLowerCase();
    return text.includes(query);
  });

  return (
    <section className="relative pb-24 backdrop-blur-xl bg-primary/10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Subtitle */}
        <MotionWrapper
          fadeUp
          delay={0.2}
          className="max-w-3xl mx-auto text-center text-[16px] md:text-lg mb-5 md:mb-16 md:leading-relaxed"
        >
          <p>{sub}</p>
        </MotionWrapper>
        {/* search bar and select */}
        <ProjectsWrapper
          initialQuery={query}
          projectsLength={filteredProjects.length}
          lang={lang}
        >
          {filteredProjects.map((p, index) => {
            return (
              <MotionWrapper key={index} fadeUp stagger={index * 0.1}>
                <ProjectCard index={index} project={p} lang={lang} />
              </MotionWrapper>
            );
          })}
        </ProjectsWrapper>
      </div>
    </section>
  );
}
