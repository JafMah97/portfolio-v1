import ProjectsCtaSection from "@/components/website/projects/projects-cta-section/projects-cta-section";
import ProjectsHeroSection from "@/components/website/projects/projects-hero-section/projects-hero-section";
import ProjectsMainSection from "@/components/website/projects/projects-main-section/projects-main-section";
import { Lang } from "@/utils/translations/dictionary-utils";

interface Props {
  params: Promise<{ lang: Lang }>;
  searchParams?: Promise<{ q?: string }>;
}

export default async function ProjectsPage({ params, searchParams }: Props) {
  const lang = (await params).lang;
  const searchP = await searchParams
  return (
    <div className="bg-primary/10">
      <ProjectsHeroSection lang={lang} />
      <ProjectsMainSection lang={lang} searchParams={searchP} />
      <ProjectsCtaSection lang={lang} />
    </div>
  );
}
