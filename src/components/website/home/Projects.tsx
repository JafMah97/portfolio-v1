"use client";
import { projects } from "@/content/projects";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
} from "@/components/custom/motion/animation";
import { Lang } from "@/utils/translations/dictionary-utils";

function Projects({lang}:{lang:Lang}) {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4 ">
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-primary/20 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={`Preview of ${project.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-800 dark:text-gray-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 my-4">
              {project.technologies.map((item, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span>Code</span>
              </Link>
              <Link
                href={project.demoLink}
                target="_blank"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Demo</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
