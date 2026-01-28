import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { Architecture } from "@/constants/projects-data";

interface ProjectArchitectureProps {
  architecture: Architecture; // ArchTerm[]
  title: string;
}

export default function ProjectArchitecture({
  architecture,
  title,
}: ProjectArchitectureProps) {
  return (
    <MotionWrapper as="aside" className="card-glass p-6" fadeUp stagger={0.5}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <div className="space-y-4">
        {architecture.map((item) => (
          <div key={item.label}>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">
              {item.label}
            </h4>
            <p className="text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}
