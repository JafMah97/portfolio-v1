import About from "@/components/website/home/about-section/about";
import Blogs from "@/components/website/home/Blogs";
import Contact from "@/components/website/home/Contact";
import Hero from "@/components/website/home/hero-section/hero-section";
import Projects from "@/components/website/home/projects-section/projects-section";
import { Lang } from "@/utils/translations/dictionary-utils";

interface Props {
  params: Promise<{ lang: Lang }>;
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  return (
    <div className="bg-primary/10">
      <Hero lang={lang} />
      <About />
      <Projects lang={lang} />
      <Blogs lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}
