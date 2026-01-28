import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import TechBadge from "@/components/custom/layout/tech-badge";
import { TbBrandStackoverflow } from "react-icons/tb";
import { TechStack } from "@/constants/projects-data";

interface ProjectTechStackProps {
  techStack: TechStack;
  techStackTitles: {
    main: string;
    front: string;
    back: string;
    deployment:string
  };
}

export default function ProjectTechStack({
  techStack,
  techStackTitles,
}: ProjectTechStackProps) {
  return (
    <MotionWrapper as="aside" className="card-glass p-8" fadeUp stagger={0.4}>
      <div className="flex items-center gap-3 mb-6">
        <TbBrandStackoverflow className="text-2xl text-primary" />
        <h3 className="text-xl font-bold">{techStackTitles.main}</h3>
      </div>

      <div className="space-y-6">
        {techStack.frontend && (
          <div>
            <h4 className="font-semibold mb-3 text-muted-foreground">
              {techStackTitles.front}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech: string, i: number) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>
          </div>
        )}

        {techStack.backend && (
          <div>
            <h4 className="font-semibold mb-3 text-muted-foreground">
              {techStackTitles.back}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech: string, i: number) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>
          </div>
        )}

        {techStack.deployment && (
          <div>
            <h4 className="font-semibold mb-3 text-muted-foreground">
              {techStackTitles.deployment}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.deployment.map((tech: string, i: number) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}
