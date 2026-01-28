import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import ProjectCard from "../../../custom/layout/project-card";
import ProjectsWrapper from "./projects-wrapper";
import  { Project ,projects } from "@/constants/projects-data";

export default async function ProjectsMainSection({
  lang,
  searchParams,
}: {
  lang: Lang;
  searchParams?: { q?: string };
}) {
  const query = (searchParams?.q || "").toLowerCase();
  const data: Project[] = await projects(lang);

  const sub = (await getDictionary(lang)).projectsPage.main.subtitle;

  const filteredProjects = data.filter((p) => {
    const text =
      `${p.title} ${p.description} ${p.techStack.frontend?.join(" ")} ${p.techStack.backend?.join(" ")} ${p.techStack.deployment?.join(" ")} ${p.techStack.tools?.join(" ")}`.toLowerCase();
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
              <ProjectCard key={index} index={index} project={p} lang={lang} />
           
            );
          })}
        </ProjectsWrapper>
      </div>
    </section>
  );
}
