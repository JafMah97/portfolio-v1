import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { FiZap } from "react-icons/fi";

interface ProjectFeaturesProps {
  features: string[];
  title: string;
}

export default function ProjectFeatures({ features ,title }: ProjectFeaturesProps) {
  return (
    <MotionWrapper as="article" className="card-glass p-8" fadeUp stagger={0.1}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-4 rounded-lg border hover:border-primary/30 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <FiZap className="text-primary" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}
