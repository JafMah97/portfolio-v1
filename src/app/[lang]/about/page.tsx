import AcadimicSection from "@/components/website/about/academic-section/acadimic-section";
import ArsenalSection from "@/components/website/about/arsenal-section/arsenal-section";
import AboutHero from "@/components/website/about/hero-section/about-hero-section";
import HashScroll from "@/components/website/about/hero-section/hash-scroll";
import JourneySection from "@/components/website/about/Journey-section/journey-section";
import PhilosophySection from "@/components/website/about/philosophy-section/philosophy-section";
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
      <AboutHero lang={lang} />
      <PhilosophySection lang={lang} />
      <ArsenalSection lang={lang} />
      <JourneySection lang={lang} />
      <AcadimicSection lang={lang} />
    </div>
  );
}
