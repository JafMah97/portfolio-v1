import HomeAboutSection from "@/components/website/home/home-about-section/home-about-section";
import HomeBlogsSection from "@/components/website/home/home-blogs-section.tsx/home-blogs-section";
import HomeContactSection from "@/components/website/home/home-contact-section/home-contact-section";
import HomeHeroSection from "@/components/website/home/home-hero-section/home-hero-section";
import HomeProjectsSection from "@/components/website/home/home-projects-section/home-projects-section";
import { Lang } from "@/utils/translations/dictionary-utils";

interface Props {
  params: Promise<{ lang: Lang }>;
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  return (
    <div className="bg-primary/10">
      <HomeHeroSection lang={lang} />
      <HomeAboutSection lang={lang} />
      <HomeProjectsSection lang={lang} />
      <HomeBlogsSection lang={lang} />
      <HomeContactSection lang={lang} />
    </div>
  );
}
