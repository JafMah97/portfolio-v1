"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    githubLink: string;
    demoLink: string;
    technologies: string[];
  };
  index: number;
  lang: string;
}

export default function ProjectCard({
  project,
  index,
  lang,
}: ProjectCardProps) {
  return (
    <MotionWrapper
      fadeUp
      delay={index * 0.1}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative h-full"
    >
      {/* External Glow Effect */}
      <div className="absolute -inset-3 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Card */}
      <Card className="relative h-full rounded-2xl border border-white/20 dark:border-gray-700/30 bg-linear-to-br from-white/95 to-white/85 dark:from-gray-900/95 dark:to-gray-800/85 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden flex flex-col">
        {/* Image Container with Overlay */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Action Buttons Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-500">
            {/* Conditional Github Link */}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="relative p-4 bg-linear-to-br from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 group/btn"
              >
                <FaGithub className="w-6 h-6 text-white" />
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                  View Code
                </span>
              </Link>
            )}

            <Link
              href={project.demoLink}
              target="_blank"
              className="relative p-4 bg-linear-to-br from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110 group/btn"
            >
              <FaExternalLinkAlt className="w-6 h-6 text-white" />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                Live Demo
              </span>
            </Link>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 flex flex-col grow relative z-10">
          <div className="mb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {project.title}
            </h3>
            <div className="w-12 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:w-20 transition-all duration-500" />
          </div>

          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Stack
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gray-500/5 text-gray-500 border border-gray-500/10">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </CardContent>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </MotionWrapper>
  );
}
