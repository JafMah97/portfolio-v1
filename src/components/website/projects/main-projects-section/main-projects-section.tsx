import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import { Project } from "../../home/projects-section/projects-section";
import ProjectCard from "../../home/projects-section/project-card";
import ProjectsWrapper from "./projects-wrapper";

export default async function MainProjectsSection({
  lang,
  searchParams,
}: {
  lang: Lang;
  searchParams?: { q?: string };
}) {
  const query = (searchParams?.q || "").toLowerCase();
  const { projects: dictProjects } = (await getDictionary(lang)).homePage
    .projectsSection;
  const sub = (await getDictionary(lang)).projectsPage.main.subtitle;

  const projects: Project[] = [
    {
      title: dictProjects.konektaSocial.title,
      description: dictProjects.konektaSocial.description,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "React Query",
        "i18n",
      ],
      githubLink: "https://github.com/JafMah97/konekta-social-frontend",
      demoLink: "https://konekta-social.vercel.app",
      image: "/images/projects/konekta-frontend.png",
      cardLink: "",
    },
    {
      title: dictProjects.konektaBackend.title,
      description: dictProjects.konektaBackend.description,
      technologies: [
        "Node.js",
        "Fastify",
        "TypeScript",
        "Prisma ORM",
        "PostgreSQL",
        "Zod",
      ],
      githubLink: "https://github.com/JafMah97/konekta-social-backend",
      demoLink:
        "https://documenter.getpostman.com/view/37420761/2sB3WsQzuN#konekta-social-api",
      image: "/images/projects/konekta-backend.png",
      cardLink: "",
    },
    {
      title: dictProjects.theDeal.title,
      description: dictProjects.theDeal.description,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Radix UI",
        "shadcn/ui",
        "Framer Motion",
        "React Hook Form",
      ],
      githubLink: "",
      demoLink: "https://thedeal.qa",
      image: "/images/projects/thedeal.png",
      cardLink: "",
    },
    {
      title: dictProjects.portfolio.title,
      description: dictProjects.portfolio.description,
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "shadcn/ui ",
        "next-themes",
      ],
      githubLink: "https://github.com/JafMah97/portfolio",
      demoLink: "https://portofolio-amber-gamma.vercel.app",
      image: "/images/projects/portfolio.png",
      cardLink: "",
    },
    {
      title: dictProjects.reactTodo.title,
      description: dictProjects.reactTodo.description,
      technologies: ["React", "Vite", "Material UI (MUI)"],
      githubLink: "https://github.com/JafMah97/konekta-social-frontend",
      demoLink: "https://github.com/JafMah97/reactTodoApp",
      image: "/images/projects/react-todo-app.png",
      cardLink: "",
    },
    {
      title: dictProjects.hairday.title,
      description: dictProjects.hairday.description,
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/JafMah97/HairDayWebsite",
      demoLink: "https://jafmah97.github.io/HairDayWebsite/",
      image: "/images/projects/hair-day-salon.png",
      cardLink: "",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    const text =
      `${p.title} ${p.description} ${p.technologies.join(" ")}`.toLowerCase();
    return text.includes(query);
  });

  return (
    <section className="relative pb-24 backdrop-blur-xl bg-primary/10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Subtitle */}
        <MotionWrapper
          fadeUp
          delay={0.2}
          className="max-w-3xl mx-auto text-center text-[16px] md:text-lg mb-5 md:mb-16 md:leading-relaxed"
        >
          <p>{sub}</p>
        </MotionWrapper>
        {/* search bar and select */}
        <ProjectsWrapper
          initialQuery={query}
          projectsLength={filteredProjects.length}
          lang={lang}
        >
          {filteredProjects.map((p, index) => {
            return (
              <MotionWrapper key={index} fadeUp stagger={index * 0.1}>
                <ProjectCard index={index} project={p} lang={lang} />
              </MotionWrapper>
            );
          })}
        </ProjectsWrapper>
      </div>
    </section>
  );
}
