import AboutSection from "@/components/website/home/about-section/about-section";
import BlogsSection from "@/components/website/home/blogs-section.tsx/blogs-section";
import Contact from "@/components/website/home/Contact";
import HeroSection from "@/components/website/home/hero-section/hero-section";
import ProjectsSection from "@/components/website/home/projects-section/projects-section";
import { Lang } from "@/utils/translations/dictionary-utils";

interface Props {
  params: Promise<{ lang: Lang }>;
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  return (
    <div className="bg-primary/10">
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <ProjectsSection lang={lang} />
      <BlogsSection lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}
