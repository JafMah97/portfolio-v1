
import Blogs from "@/components/website/home/Blogs";
import Hero from "@/components/website/home/Hero";
import Projects from "@/components/website/home/Projects";
import {  Lang } from "@/utils/translations/dictionary-utils";

interface Props {
  params: Promise<{ lang: Lang }>;
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  
  return (
    <div className="bg-primary/10">
      <Hero lang={lang} />
      <Projects lang={lang}/>
      <Blogs lang={lang}/>
    </div>
  );
}
