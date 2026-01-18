"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
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
        {/* linear Border Accent */}
        <div className="absolute inset-0 rounded-2xl p-px bg-linear-to-br from-transparent via-transparent to-transparent group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        </div>

        {/* Image Container with Overlay */}
        <div className="relative h-64 w-full overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 z-0" />

          {/* Project Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* linear Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Tech Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="flex items-center gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full px-3 py-1.5">
              <FaCode className="w-3 h-3 text-white" />
              <span className="text-xs font-medium text-white">
                {project.technologies.length} Technologies
              </span>
            </div>
          </div>

          {/* Action Buttons Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Link
              href={project.githubLink}
              target="_blank"
              className="relative p-4 bg-linear-to-br from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 group/btn"
            >
              <FaGithub className="w-6 h-6 text-white" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
                View Code
              </span>
            </Link>

            <Link
              href={project.demoLink}
              target="_blank"
              className="relative p-4 bg-linear-to-br from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50 group/btn"
            >
              <FaExternalLinkAlt className="w-6 h-6 text-white" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
                Live Demo
              </span>
            </Link>
          </div>

          {/* linear Bottom Edge */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white dark:from-gray-900 to-transparent" />
        </div>

        {/* Content */}
        <CardContent className="p-6 flex flex-col grow relative z-10">
          {/* Title with linear Accent */}
          <div className="mb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {project.title}
            </h3>
            <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:w-24 transition-all duration-500" />
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Tech Stack
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <MotionWrapper
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/30 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    {tech}
                  </span>
                </MotionWrapper>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-linear-to-r from-gray-500/10 to-gray-600/10 text-gray-600 dark:text-gray-400 border border-gray-500/20">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>
        </CardContent>

        {/* Bottom linear Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating Elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-linear-to-br from-purple-500/5 to-pink-500/5 rounded-full group-hover:scale-150 transition-transform duration-1000 delay-300" />
      </Card>
    </MotionWrapper>
  );
}
