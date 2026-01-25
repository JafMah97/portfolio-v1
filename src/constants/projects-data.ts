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

type TechStack = {
  frontend?: string[];
  backend?: string[];
  tools?: string[];
  deployment?: string[];
  [key: string]: string[] | undefined;
};

type Architecture = {
  [key: string]: string;
};

type Links = {
  github?: string;
  backendGithub?: string;
  demo?: string;
  documentation?: string;
  [key: string]: string | undefined;
};

type DetailedProject = {
  cardId: string;
  title: string;
  shortDescription: string;
  overview: string;
  features: string[];
  techStack: TechStack;
  architecture: Architecture;
  photos: string[];
  challenges: string[];
  solutions: string[];
  learnedAspects: string[];
  limitations: string[];
  futureImprovements: string[];
  links: Links;
  image?: string; // Keeping optional for backward compatibility
};

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


export async function detailedProjects(lang: Lang) {
  const {konektaSocial,konektaBackend,theDeal,hairDayWebsite,reactTodo} = (await getDictionary(lang)).detailedProject;
  const data: DetailedProject[] = [
    {
      cardId: "konekta-social",
      title: konektaSocial.title,
      shortDescription: konektaSocial.shortDescription,
      overview: konektaSocial.overview,
      features: konektaSocial.features,
      techStack: {
        frontend: konektaSocial.techStack.frontend,
        backend: konektaSocial.techStack.backend,
        deployment: konektaSocial.techStack.deployment,
      },
      architecture: {
        frontend: konektaSocial.architecture.frontend,
        backend: konektaSocial.architecture.backend,
        database: konektaSocial.architecture.database,
      },
      photos: [
        "/images/projects/konekta/landing.png",
        "/images/projects/konekta/feed.png",
        "/images/projects/konekta/post.png",
        "/images/projects/konekta/profile.png",
        "/images/projects/konekta-frontend.png",
      ],
      challenges: konektaSocial.challenges,
      solutions: konektaSocial.solutions,
      learnedAspects: konektaSocial.learnedAspects,
      limitations: konektaSocial.limitations,
      futureImprovements: konektaSocial.futureImprovements,
      links: {
        github: "https://github.com/JafMah97/konekta-social-frontend",
        backendGithub: "https://github.com/JafMah97/konekta-social-backend",
        demo: "https://konekta-social.vercel.app",
      },
      image: "/images/projects/konekta-frontend.png",
    },
    {
      cardId: "konekta-backend",
      title: konektaBackend.title,
      shortDescription: konektaBackend.shortDescription,
      overview: konektaBackend.overview,
      features: konektaBackend.features,
      techStack: {
        backend: konektaBackend.techStack.backend,
        tools: konektaBackend.techStack.tools,
        deployment: konektaBackend.techStack.deployment,
      },
      architecture: {
        apiDesign: konektaBackend.architecture.apiDesign ,
        database: konektaBackend.architecture.database,
        auth:konektaBackend.architecture.auth,
      },
      photos: [
        "/images/projects/konekta-backend/routes.png",
        "/images/projects/konekta-backend/prisma.png",
        "/images/projects/konekta-backend/postman.png",
        "/images/projects/konekta-backend.png",
      ],
      challenges: konektaBackend.challenges,
      solutions:konektaBackend.solutions,
      learnedAspects: konektaBackend.learnedAspects,
      limitations:konektaBackend.limitations,
      futureImprovements: konektaBackend.futureImprovements,
      links: {
        github: "https://github.com/JafMah97/konekta-social-backend",
        documentation:
          "https://documenter.getpostman.com/view/37420761/2sB3WsQzuN#konekta-social-api",
      },
    },
    {
      cardId: "theDeal",
      title: theDeal.title,
      shortDescription:
        theDeal.shortDescription,
      overview: theDeal.overview,
      features: theDeal.features,
      techStack: {
        frontend: theDeal.techStack.frontend,
        tools: theDeal.techStack.tools,
        deployment: theDeal.techStack.deployment,
      },
      architecture: {
        rendering: theDeal.architecture.rendering,
        localization: theDeal.architecture.localization,
        apiIntegration: theDeal.architecture.apiIntegration,
      },
      photos: [
        "/images/projects/thedeal/home.png",
        "/images/projects/thedeal/projects.png",
        "/images/projects/thedeal/podcasts.png",
        "/images/projects/thedeal/carousel.png",
        "/images/projects/thedeal.png",
      ],
      challenges:theDeal.challenges,
      solutions: theDeal.solutions,
      learnedAspects: theDeal.learnedAspects,
      limitations: theDeal.limitations,
      futureImprovements: theDeal.futureImprovements,
      links: {
        demo: "https://thedeal.qa",
      },
    },
    {
      cardId: "portfolio",
      title: "Personal Portfolio",
      shortDescription:
        "A modern, fully localized, theme-aware developer portfolio showcasing my skills, projects, and engineering philosophy using the latest frontend technologies.",
      overview: `This portfolio is the most recent and complete project I've built, combining everything I've learned across frontend engineering, UI design, and modern web development. It uses a fully modern tech stack and represents exactly how a professional portfolio should look and feel.

The project includes five main pages and two subpages, each designed with clean structure, smooth animations, and a strong focus on accessibility and performance. It is fully localized in Arabic and English, theme-aware, and built with reusable components that follow scalable architectural patterns.

This portfolio reflects my personal engineering philosophy: clarity, maintainability, and attention to detail. It is the project I am most confident about, and it demonstrates my ability to build polished, production-ready interfaces using modern tools and best practices.`,
      features: [
        "Five main pages and two subpages",
        "Fully localized (Arabic + English)",
        "Light and dark theme support",
        "Smooth animations using Framer Motion",
        "Reusable UI components with shadcn/ui",
        "Responsive design across all devices",
        "SEO-friendly structure",
        "Modern layout and navigation patterns",
        "Clean code architecture with TypeScript",
      ],
      techStack: {
        frontend: [
          "Next.js",
          "React",
          "TypeScript",
          "TailwindCSS",
          "Framer Motion",
          "shadcn/ui",
          "next-themes",
        ],
        tools: ["Vercel", "ESLint", "Prettier"],
        deployment: ["Vercel (production hosting)"],
      },
      architecture: {
        rendering: `Built using Next.js App Router with a mix of server and client components. Pages are structured for clarity, scalability, and SEO optimization. Animations are handled with Framer Motion for smooth, modern transitions.`,
        localization: `Full bilingual support (Arabic and English) with dynamic routing, dictionary-based translations, and RTL/LTR awareness across all components.`,
        theming: `Theme switching implemented using next-themes with persistent user preference and full dark/light UI support.`,
      },
      photos: [
        "/images/projects/portfolio/home.png",
        "/images/projects/portfolio/about.png",
        "/images/projects/portfolio/projects.png",
        "/images/projects/portfolio/contact.png",
        "/images/projects/portfolio.png",
      ],
      challenges: [
        "Designing a clean and scalable architecture for multiple pages",
        "Ensuring full localization with RTL support",
        "Building smooth animations without hurting performance",
        "Creating reusable UI components with shadcn/ui",
        "Balancing aesthetics with accessibility and readability",
      ],
      solutions: [
        "Used a modular folder structure with reusable components",
        "Implemented a dictionary-based i18n system",
        "Optimized animations using Framer Motion best practices",
        "Built a consistent UI system using TailwindCSS and shadcn/ui",
        "Applied accessibility guidelines for typography and contrast",
      ],
      learnedAspects: [
        "How to design a complete, production-ready portfolio",
        "How to structure multi-page applications with App Router",
        "How to build scalable UI systems with reusable components",
        "How to implement full localization and RTL support",
        "How to balance design, performance, and accessibility",
        "How to express engineering identity through UI and structure",
      ],
      limitations: [
        "Some animations may vary slightly across older mobile devices",
        "Future sections may be added as my experience grows",
      ],
      futureImprovements: [
        "Add a blog section with MDX",
        "Add OpenGraph images for all pages",
        "Add more interactive UI elements and micro-interactions",
        "Improve SEO with additional structured data",
      ],
      links: {
        github: "https://github.com/JafMah97/portfolio",
        demo: "https://portofolio-amber-gamma.vercel.app",
      },
    },
    {
      cardId: "reactTodo",
      title: reactTodo.title,
      shortDescription:
        reactTodo.shortDescription,
      overview: reactTodo.overview ,
      features: reactTodo.features,
      techStack: {
        frontend: reactTodo.techStack.frontend,
        tools: reactTodo.techStack.tools,
        deployment: reactTodo.techStack.deployment,
      },
      architecture: {
        structure: reactTodo.architecture.structure,
        styling: reactTodo.architecture.styling,
      },
      photos: ["/images/projects/react-todo-app.png"],
      challenges: reactTodo.challenges,
      solutions: reactTodo.solutions,
      learnedAspects: reactTodo.learnedAspects,
      limitations: reactTodo.limitations,
      futureImprovements:reactTodo.futureImprovements,
      links: {
        github: "https://github.com/JafMah97/reactTodoApp",
        demo: "https://github.com/JafMah97/reactTodoApp",
      },
    },
    {
      cardId: "HairDayWebsite",
      title: hairDayWebsite.title,
      shortDescription:hairDayWebsite.shortDescription,
      overview: hairDayWebsite.overview, 
      features: hairDayWebsite.features,
      techStack: {
        frontend: hairDayWebsite.techStack.frontend,
        tools: hairDayWebsite.techStack.tools,
        deployment: hairDayWebsite.techStack.deployment
      },
      architecture: {
        htmlStructure: hairDayWebsite.architecture.htmlStructure,
        cssLayout:hairDayWebsite.architecture.cssLayout,
      },
      photos: ["/images/projects/hair-day-salon.png"],
      challenges: hairDayWebsite.challenges,
      solutions: hairDayWebsite.solutions,
      learnedAspects: hairDayWebsite.learnedAspects,
      limitations: hairDayWebsite.limitations,
      futureImprovements: hairDayWebsite.futureImprovements,
      links: {
        github: "https://github.com/JafMah97/HairDayWebsite",
        demo: "https://jafmah97.github.io/HairDayWebsite/",
      },
    },
  ];
  return data;
}
