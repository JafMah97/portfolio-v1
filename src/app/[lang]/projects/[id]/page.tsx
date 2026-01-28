// src/app/[lang]/projects/[id]/page.tsx

import { Lang } from "@/utils/translations/dictionary-utils";
import { projects } from "@/constants/projects-data";
import ProjectHeroSection from "@/components/website/project/project-hero-section/project-hero-section";
import ProjectMainSection from "@/components/website/project/project-main-section/project-main-section";
import ProjectFutureLimitationSection from "@/components/website/project/project-future-limitation-section/project-future-limitaion-section";

interface Props {
  params: Promise<{ lang: Lang; id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { lang, id } = await params;
  const data = await projects(lang);
  const project = data.find((p) => p.cardId === id);

  if (!project) {
    return;
  }

  return (
    <div className="bg-primary/10">
      {/* Hero Section */}
      <ProjectHeroSection lang={lang} project={project} />

      {/* Content Grid */}
      <ProjectMainSection project={project} lang={lang} />

      {/* Future & Limitations */}
      <ProjectFutureLimitationSection project={project} lang={lang} />
    </div>
  );
}
