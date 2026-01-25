//src\app\[lang]\projects\[id]\page.tsx
import { Lang } from "@/utils/translations/dictionary-utils";
import { detailedProjects } from "@/constants/projects-data";
import Image from "next/image";

interface Props {
  params: Promise<{ lang: Lang; id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const lang = (await params).lang;
  const id = (await params).id;
  const data = await detailedProjects(lang);
  const project = data.find((p) => p.cardId === id);
  if (!project) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-primary/10">
      <section className="bg-primary/10 py-20">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          {/* Short Description */}
          <p className="text-lg text-muted-foreground mb-10">
            {project.shortDescription}
          </p>
          {/* Image */}
          <Image
            src={project.image || ""}
            alt={project.title}
            className="rounded-xl shadow-lg mb-10"
            width={1000}
            height={1000}
          />
          {/* Overview */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            <h2>Overview</h2> <p>{project.overview}</p>
          </div>
          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project?.techStack?.frontend?.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          {/* Links */}
          <div className="flex gap-4 mt-10">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded-lg"
              >
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                className="px-4 py-2 bg-primary text-white rounded-lg"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
