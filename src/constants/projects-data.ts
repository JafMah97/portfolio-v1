import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";

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
  cardLink: string;
};

export type Project = {
  cardId: string;
  title: string;
  description: string;
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

export async function projects(lang: Lang) {
  const {
    konektaSocial,
    konektaBackend,
    portfolio,
    theDeal,
    hairDayWebsite,
    reactTodo,
  } = (await getDictionary(lang)).projects;
  const data: Project[] = [
    {
      cardId: "konekta-social",
      title: konektaSocial.title,
      description: konektaSocial.description,
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
        "/images/projects/konekta-social/home.png",
        "/images/projects/konekta-social/feeds.png",
        "/images/projects/konekta-social/login.png",
        "/images/projects/konekta-social/register.png",
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
        cardLink: `/${lang}/projects/konekta-social`,
      },
    },
    {
      cardId: "konekta-backend",
      title: konektaBackend.title,
      description: konektaBackend.description,
      overview: konektaBackend.overview,
      features: konektaBackend.features,
      techStack: {
        backend: konektaBackend.techStack.backend,
        tools: konektaBackend.techStack.tools,
        deployment: konektaBackend.techStack.deployment,
      },
      architecture: {
        apiDesign: konektaBackend.architecture.apiDesign,
        database: konektaBackend.architecture.database,
        auth: konektaBackend.architecture.auth,
      },
      photos: [
        "/images/projects/konekta-backend/overview.png",
        "/images/projects/konekta-backend/logs.png",
      ],
      challenges: konektaBackend.challenges,
      solutions: konektaBackend.solutions,
      learnedAspects: konektaBackend.learnedAspects,
      limitations: konektaBackend.limitations,
      futureImprovements: konektaBackend.futureImprovements,
      links: {
        github: "https://github.com/JafMah97/konekta-social-backend",
        documentation:
          "https://documenter.getpostman.com/view/37420761/2sB3WsQzuN#konekta-social-api",
        cardLink: `/${lang}/projects/konekta-backend`,
      },
    },
    {
      cardId: "the-deal",
      title: theDeal.title,
      description: theDeal.description,
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
        "/images/projects/the-deal/home.png",
        "/images/projects/the-deal/projects.png",
        "/images/projects/the-deal/podcast.png",
      ],
      challenges: theDeal.challenges,
      solutions: theDeal.solutions,
      learnedAspects: theDeal.learnedAspects,
      limitations: theDeal.limitations,
      futureImprovements: theDeal.futureImprovements,
      links: {
        demo: "https://thedeal.qa",
        cardLink: `/${lang}/projects/the-deal`,
      },
    },
    {
      cardId: "portfolio",
      title: portfolio.title,
      description: portfolio.description,
      overview: portfolio.overview,
      features: portfolio.features,
      techStack: portfolio.techStack,
      architecture: portfolio.architecture,
      photos: [
        "/images/projects/portfolio/home.png",
        "/images/projects/portfolio/connect.png",
        "/images/projects/portfolio/projects.png",
      ],
      challenges: portfolio.challenges,
      solutions: portfolio.solutions,
      learnedAspects: portfolio.learnedAspects,
      limitations: portfolio.limitations,
      futureImprovements: portfolio.futureImprovements,
      links: {
        github: "https://github.com/JafMah97/portfolio",
        demo: "https://portofolio-amber-gamma.vercel.app",
        cardLink: `/${lang}/projects/portfolio`,
      },
    },
    {
      cardId: "react-todo",
      title: reactTodo.title,
      description: reactTodo.description,
      overview: reactTodo.overview,
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
      photos: [
        "/images/projects/react-todo/all.png",
        "/images/projects/react-todo/done.png",
        "/images/projects/react-todo/edit.png",
      ],
      challenges: reactTodo.challenges,
      solutions: reactTodo.solutions,
      learnedAspects: reactTodo.learnedAspects,
      limitations: reactTodo.limitations,
      futureImprovements: reactTodo.futureImprovements,
      links: {
        github: "https://github.com/JafMah97/reactTodoApp",
        demo: "https://jafmah97-simple-react-todo.vercel.app",
        cardLink: `/${lang}/projects/react-todo`,
      },
    },
    {
      cardId: "hair-day-website",
      title: hairDayWebsite.title,
      description: hairDayWebsite.description,
      overview: hairDayWebsite.overview,
      features: hairDayWebsite.features,
      techStack: {
        frontend: hairDayWebsite.techStack.frontend,
        tools: hairDayWebsite.techStack.tools,
        deployment: hairDayWebsite.techStack.deployment,
      },
      architecture: {
        htmlStructure: hairDayWebsite.architecture.htmlStructure,
        cssLayout: hairDayWebsite.architecture.cssLayout,
      },
      photos: [
        "/images/projects/hairday-website/home.png",
        "/images/projects/hairday-website/res.png",
      ],
      challenges: hairDayWebsite.challenges,
      solutions: hairDayWebsite.solutions,
      learnedAspects: hairDayWebsite.learnedAspects,
      limitations: hairDayWebsite.limitations,
      futureImprovements: hairDayWebsite.futureImprovements,
      links: {
        github: "https://github.com/JafMah97/HairDayWebsite",
        demo: "https://jafmah97.github.io/HairDayWebsite/",
        cardLink: `/${lang}/projects/hair-day-website`,
      },
    },
  ];
  return data;
}
