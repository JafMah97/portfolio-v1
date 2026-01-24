import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  cardLink: string;
  cardId: string;
}

export default async function projectsData(lang: Lang) {
  const dictProjects = (await getDictionary(lang)).projects;
  const data: Project[] = [
    {
      cardId: "konekta-social",
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
      cardLink: `/${lang}/projects/konekta-social`,
    },
    {
      cardId: "konekta-backend",
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
      cardLink: `/${lang}/projects/konekta-backend`,
    },
    {
      cardId: "theDeal",
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
      cardLink: `/${lang}/projects/the-deal`,
    },
    {
      cardId: "portfolio",
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
      cardLink: `/${lang}/projects/portfolio`,
    },
    {
      cardId: "reactTodo",
      title: dictProjects.reactTodo.title,
      description: dictProjects.reactTodo.description,
      technologies: ["React", "Vite", "Material UI (MUI)"],
      githubLink: "https://github.com/JafMah97/konekta-social-frontend",
      demoLink: "https://github.com/JafMah97/reactTodoApp",
      image: "/images/projects/react-todo-app.png",
      cardLink: `/${lang}/projects/react-todo`,
    },
    {
      cardId: "HairDayWebsite",
      title: dictProjects.hairday.title,
      description: dictProjects.hairday.description,
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/JafMah97/HairDayWebsite",
      demoLink: "https://jafmah97.github.io/HairDayWebsite/",
      image: "/images/projects/hair-day-salon.png",
      cardLink: `/${lang}/projects/Hair-day-website`,
    },
  ];
  return data;
}
