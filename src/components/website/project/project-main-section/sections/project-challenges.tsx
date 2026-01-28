import MotionWrapper from "@/components/custom/motion/motion-wrapper";
interface ProjectChallengesProps {
  challenges: string[];
  title: string;
}
export default function ProjectChallenges({
  challenges,
  title,
}: ProjectChallengesProps) {
  return (
    <MotionWrapper as="article" className="card-glass p-8" fadeUp stagger={0.2}>
      <h3 className="text-xl font-bold mb-4 text-destructive">
        {title}
      </h3>
      <ul className="space-y-3">
        {challenges.map((challenge: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 mt-2 p-1 rounded-full bg-destructive " />
            <span>{challenge}</span>
          </li>
        ))}
      </ul>
    </MotionWrapper>
  );
}
