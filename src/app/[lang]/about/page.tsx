import HashScroll from "@/components/custom/layout/hash-scroll";
import AboutHeroSection from "@/components/website/about/about-hero-section/about-hero-section";
import AboutPhilosophySection from "@/components/website/about/about-philosophy-section/about-philosophy-section";
import AboutArsenalSection from "@/components/website/about/about-arsenal-section/about-arsenal-section";
import AboutJourneySection from "@/components/website/about/about-Journey-section/about-journey-section";
import AboutAcadimicSection from "@/components/website/about/about-academic-section/about-academic-section";
import { Lang } from "@/utils/translations/dictionary-utils";
import { Suspense } from "react";

interface Props {
  params: Promise<{ lang: Lang }>;
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;

  return (
    <div className="bg-primary/10">
      <Suspense>
        <HashScroll />
      </Suspense>
      <AboutHeroSection lang={lang} />
      <AboutPhilosophySection lang={lang} />
      <AboutArsenalSection lang={lang} />
      <AboutJourneySection lang={lang} />
      <AboutAcadimicSection lang={lang} />
    </div>
  );
}
