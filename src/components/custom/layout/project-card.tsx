import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import { Project } from "@/constants/projects-data";

interface ProjectCardProps {
  project: Project;
  index: number;
  lang: Lang;
}

export default async function ProjectCard({
  project,
  index,
  lang,
}: ProjectCardProps) {
  const dict = (await getDictionary(lang)).homePage.projectsSection.projectCard;

  const frontend = project.techStack.frontend ?? [];
  const backend = project.techStack.backend ?? [];
  const deployment = project.techStack.deployment ?? [];
  const tools = project.techStack.tools ?? [];

  const totalTechCount =
    frontend.length + backend.length + deployment.length + tools.length;

  const remaining = totalTechCount - 4;

  return (
    <MotionWrapper
      id={project.cardId}
      fadeUp
      delay={index * 0.1}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative h-full"
    >
      {/* Glow */}
      <div className="absolute -inset-3 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <Card className="relative h-full rounded-2xl border border-white/20 dark:border-gray-700/30 bg-linear-to-br from-white/95 to-white/85 dark:from-gray-900/95 dark:to-gray-800/85 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden flex flex-col">
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.photos[0]}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-500">
            {/* GitHub */}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="relative p-4 bg-linear-to-br from-blue-600 to-purple-600 rounded-full hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="w-6 h-6 text-white" />
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded">
                  {dict.viewCode}
                </span>
              </Link>
            )}

            {/* Demo */}
            {project.links.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                className="relative p-4 bg-linear-to-br from-purple-600 to-pink-600 rounded-full hover:scale-110 transition-all duration-300"
              >
                <FaExternalLinkAlt className="w-6 h-6 text-white" />
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded">
                  {dict.liveDemo}
                </span>
              </Link>
            )}
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 flex flex-col grow relative z-10">
          <Link prefetch={false} href={project.links.cardLink}>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {dict.stack}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {frontend.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10"
                  >
                    {tech}
                  </span>
                ))}

                {remaining > 0 && (
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gray-500/5 text-gray-500 border border-gray-500/10">
                    +{remaining}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </CardContent>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </MotionWrapper>
  );
}
