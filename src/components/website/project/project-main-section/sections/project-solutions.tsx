import MotionWrapper from "@/components/custom/motion/motion-wrapper";
interface ProjectSolutionsProps {
  solutions: string[];
  title:string
}
export default function ProjectSolutions({ solutions, title }: ProjectSolutionsProps) {
  return (
    <MotionWrapper as="article" className="card-glass p-8" fadeUp stagger={0.3}>
      <h3 className="text-xl font-bold mb-4 text-primary">
        {title}
      </h3>
      <ul className="space-y-3">
        {solutions.map((solution: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 mt-2 p-1 rounded-full bg-primary" />
            <span>{solution}</span>
          </li>
        ))}
      </ul>
    </MotionWrapper>
  );
}
