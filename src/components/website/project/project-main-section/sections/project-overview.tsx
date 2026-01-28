import { FiCode } from "react-icons/fi";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";

interface ProjectOverviewProps {
  overview:string;
  title:string
}

export default function ProjectOverview({ overview ,title }: ProjectOverviewProps) {
  return (
    <MotionWrapper as="article" className="card-glass p-8" fadeUp>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <FiCode className="text-2xl text-primary" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-[16px] md:text-lg leading-relaxed">{overview}</p>
      </div>
    </MotionWrapper>
  );
}
