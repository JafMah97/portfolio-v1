import { Project } from "@/constants/projects-data";
import ProjectArchitecture from "./sections/project-architecture";
import ProjectChallenges from "./sections/project-challenges";
import ProjectFeatures from "./sections/project-features";
import ProjectLearnings from "./sections/project-learnings";
import ProjectOverview from "./sections/project-overview";
import ProjectSolutions from "./sections/project-solutions";
import ProjectTechStack from "./sections/project-tech-stack";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import { isRTL } from "@/utils/translations/language-utils";
import ProjectgallerySection from "../project-gallery-section/project-gallery-section";

interface ProjectMainSectionProps {
  project: Project;
  lang: Lang;
}

export default async function ProjectMainSection({
  project,
  lang,
}: ProjectMainSectionProps) {
  const dict = (await getDictionary(lang)).projectPage;
  return (
    <section className="py-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="my-24">
          {/*gallery*/}
          {project.cardId !== "konekta-backend" && (
            <ProjectgallerySection
              allImages={project.photos}
              title={project.title}
            />
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <ProjectOverview
              overview={project.overview}
              title={dict.overview}
            />
            <ProjectFeatures
              features={project.features}
              title={dict.keyFeatures}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectChallenges
                challenges={project.challenges}
                title={dict.challengesFaced}
              />
              <ProjectSolutions
                solutions={project.solutions}
                title={dict.solutionsImplemented}
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside
            className={`space-y-8 ${isRTL(lang) ? "lg:border-r" : "lg:border-l"} border-foreground/50`}
          >
            <ProjectTechStack
              techStack={project.techStack}
              techStackTitles={dict.techStackTitles}
            />
            <ProjectArchitecture
              architecture={project.architecture}
              title={dict.architecture}
            />
            <ProjectLearnings
              learnedAspects={project.learnedAspects}
              title={dict.keyLearnings}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
