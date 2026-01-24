import CtaSection from "@/components/website/projects/cta-section/cta-section";
import ProjectsHeroSection from "@/components/website/projects/hero-section/projects-hero-section";
import MainProjectsSection from "@/components/website/projects/main-projects-section/main-projects-section";
import { Lang } from "@/utils/translations/dictionary-utils";

interface Props {
  params: Promise<{ lang: Lang }>;
  searchParams?: Promise<{ q?: string }>;
}

export default async function ProjectsPage({ params, searchParams }: Props) {
  const lang = (await params).lang;
  const s = await searchParams
  return (
    <div className="bg-primary/10">
      <ProjectsHeroSection lang={lang} />
      <MainProjectsSection lang={lang} searchParams={s} />
      <CtaSection lang={lang} />
    </div>
  );
}
