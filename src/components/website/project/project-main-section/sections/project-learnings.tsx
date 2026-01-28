import MotionWrapper from "@/components/custom/motion/motion-wrapper";

interface ProjectLearningsProps {
  learnedAspects:string[];
  title:string
}

export default function ProjectLearnings({ learnedAspects ,title}: ProjectLearningsProps) {
  return (
    <MotionWrapper as="aside" className="card-glass p-6" fadeUp stagger={0.6}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {learnedAspects.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary mt-1">✓</span>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </MotionWrapper>
  );
}
