import MotionWrapper from '@/components/custom/motion/motion-wrapper';
import { Project } from '@/constants/projects-data';
import { getDictionary, Lang } from '@/utils/translations/dictionary-utils';

interface ProjectFutureLimitationSectionProps {
  project:Project;
  lang:Lang
}

export default async function ProjectFutureLimitationSection({project,lang}:ProjectFutureLimitationSectionProps) {
  const dict = (await getDictionary(lang)).projectPage
  return (
    <section className="py-10 bg-linear-to-r from-primary/5 to-secondary/5">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionWrapper as="article" className="p-6" fadeUp>
            <h3 className="text-2xl font-bold mb-4">
              {dict.futureImprovements}
            </h3>
            <ul className="space-y-2">
              {project.futureImprovements.map((item: string, i: number) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                >
                  <span className="text-primary font-bold">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>

          <MotionWrapper as="article" className="p-6" fadeUp stagger={0.1}>
            <h3 className="text-2xl font-bold mb-4">{dict.limitations}</h3>
            <ul className="space-y-2">
              {project.limitations.map((item: string, i: number) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                >
                  <span className="text-destructive font-bold">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
