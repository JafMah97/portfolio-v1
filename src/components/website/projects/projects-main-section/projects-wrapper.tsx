"use client";
import { ReactNode, useState } from "react";
import ProjectsFilterBar from "./projects-filter-bar";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { Lang } from "@/utils/translations/dictionary-utils";
import { useTranslation } from "@/providers/translation-provider";
interface Props {
  lang: Lang;
  children: ReactNode;
  initialQuery: string;
  projectsLength: number;
}
export default function ProjectsWrapper({
  children,
  initialQuery,
  projectsLength,
  lang,
}: Props) {
  const [isGrid, setIsGrid] = useState<boolean>(true);
  const dict = useTranslation().projectsPage.main.noProjects
  return (
    <div className="w-full flex justify-center items-center flex-col bg-primary/10 px-2 py-10 md:p-10 rounded-2xl">
      <MotionWrapper fadeUp delay={0.1}>
        <ProjectsFilterBar
          setIsGrid={setIsGrid}
          isGrid={isGrid}
          initialQuery={initialQuery}
          lang={lang}
        />
      </MotionWrapper>

      <div
        className={`mt-10 md:p-5
          ${
            projectsLength > 0 ?  isGrid
              ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all`
              : `flex flex-col gap-5 transition-all max-w-2xl justify-center items-center`
              :"hidden"
          }`}
      >
        {children}
      </div>
      <div className={projectsLength <= 0 ? "flex" : "hidden"}>
        <p className="text-center text-muted-foreground py-10 h-100">
          {dict}
        </p>
      </div>
    </div>
  );
}
