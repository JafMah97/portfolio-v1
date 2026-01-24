"use client";
import { ReactNode, useState } from "react";
import ProjectsFilterBar from "./projects-filter-bar";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
interface Props {
  children: ReactNode;
  initialQuery: string;
}
export default function ProjectsWrapper({ children, initialQuery }: Props) {
  const [isGrid, setIsGrid] = useState<boolean>(true);
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <MotionWrapper fadeUp delay={0.1}>
        <ProjectsFilterBar
          setIsGrid={setIsGrid}
          isGrid={isGrid}
          initialQuery={initialQuery}
        />
      </MotionWrapper>

      <div
        className={`mt-10 md:p-5
          ${
            isGrid
              ? `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all`
              : `flex flex-col gap-5 transition-all max-w-2xl justify-center items-center`
          }`}
      >
        {children}
      </div>
    </div>
  );
}
