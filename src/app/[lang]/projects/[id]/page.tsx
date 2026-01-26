// src/app/[lang]/projects/[id]/page.tsx

import { Lang } from "@/utils/translations/dictionary-utils";
import { FiCode, FiZap } from "react-icons/fi";
import { TbBrandStackoverflow } from "react-icons/tb";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import TechBadge from "@/components/custom/layout/tech-badge";
import ProjectHeroSection from "@/components/website/project/hero-section/project-hero-section";
import { projects } from "@/constants/projects-data";

interface Props {
  params: Promise<{ lang: Lang; id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { lang, id } = await params;
  const data = await projects(lang);
  const project = data.find((p) => p.cardId === id);

  if (!project) {
    return;
  }

  return (
    <div className="bg-primary/10">
      {/* Hero Section */}
      <ProjectHeroSection lang={lang} project={project} />

      {/* Main Image Gallery */}
      {/* Content Grid */}
      <section className="py-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2/3 width */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <MotionWrapper as="article" className="card-glass p-8" fadeUp>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <FiCode className="text-2xl text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Project Overview</h2>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">{project.overview}</p>
                </div>
              </MotionWrapper>

              {/* Features */}
              <MotionWrapper
                as="article"
                className="card-glass p-8"
                fadeUp
                stagger={0.1}
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="group p-4 rounded-lg border hover:border-primary/30 transition-all hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <FiZap className="text-primary" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MotionWrapper
                  as="article"
                  className="card-glass p-8"
                  fadeUp
                  stagger={0.2}
                >
                  <h3 className="text-xl font-bold mb-4 text-destructive">
                    Challenges Faced
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map(
                      (challenge: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-destructive" />
                          <span>{challenge}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </MotionWrapper>

                <MotionWrapper
                  as="article"
                  className="card-glass p-8"
                  fadeUp
                  stagger={0.3}
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Solutions Implemented
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map(
                      (solution: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary" />
                          <span>{solution}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </MotionWrapper>
              </div>
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <MotionWrapper
                as="aside"
                className="card-glass p-6"
                fadeUp
                stagger={0.4}
              >
                <div className="flex items-center gap-3 mb-6">
                  <TbBrandStackoverflow className="text-2xl text-primary" />
                  <h3 className="text-xl font-bold">Tech Stack</h3>
                </div>

                <div className="space-y-6">
                  {project.techStack.frontend && (
                    <div>
                      <h4 className="font-semibold mb-3 text-muted-foreground">
                        Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.frontend.map(
                          (tech: string, i: number) => (
                            <TechBadge key={i} tech={tech} />
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {project.techStack.backend && (
                    <div>
                      <h4 className="font-semibold mb-3 text-muted-foreground">
                        Backend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.backend.map(
                          (tech: string, i: number) => (
                            <TechBadge key={i} tech={tech} />
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {project.techStack.deployment && (
                    <div>
                      <h4 className="font-semibold mb-3 text-muted-foreground">
                        Deployment
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.deployment.map(
                          (tech: string, i: number) => (
                            <TechBadge key={i} tech={tech} />
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </MotionWrapper>

              {/* Architecture */}
              <MotionWrapper
                as="aside"
                className="card-glass p-6"
                fadeUp
                stagger={0.5}
              >
                <h3 className="text-xl font-bold mb-4">Architecture</h3>
                <div className="space-y-4">
                  {project.architecture.frontend && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        Frontend
                      </h4>
                      <p className="text-sm">{project.architecture.frontend}</p>
                    </div>
                  )}
                  {project.architecture.backend && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        Backend
                      </h4>
                      <p className="text-sm">{project.architecture.backend}</p>
                    </div>
                  )}
                  {project.architecture.database && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        Database
                      </h4>
                      <p className="text-sm">{project.architecture.database}</p>
                    </div>
                  )}
                </div>
              </MotionWrapper>

              {/* Learnings */}
              <MotionWrapper
                as="aside"
                className="card-glass p-6"
                fadeUp
                stagger={0.6}
              >
                <h3 className="text-xl font-bold mb-4">Key Learnings</h3>
                <ul className="space-y-3">
                  {project.learnedAspects.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Future & Limitations */}
      <section className="py-10 bg-linear-to-r from-primary/5 to-secondary/5">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionWrapper as="article" className="p-6" fadeUp>
              <h3 className="text-2xl font-bold mb-4">Future Improvements</h3>
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
              <h3 className="text-2xl font-bold mb-4">Limitations</h3>
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
    </div>
  );
}
