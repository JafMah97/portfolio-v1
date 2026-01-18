interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Konekta social",
    description:
      "Konekta Social is a modern social media platform built as a fully responsive frontend experience. It focuses on clean UI, fast interactions, and a smooth multilingual user journey.",
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
  },
  {
    title: "Konekta backend",
    description:
      "A scalable backend built with Fastify, TypeScript, Prisma, and PostgreSQL, designed for high‑performance APIs and real‑time features. It includes robust authentication, validation, and modular architecture for future growth.",
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
  },
  {
    title: "TheDeal",
    description:
      "Is a freelance project I worked on with a senior developer, who gave me the opportunity to contribute and grow through real production experience. I built the Home page, Projects page, and Podcast page, focusing on clean UI, accessibility, and responsive design. The platform allows users to post job offers, apply for jobs, list projects for sale or scaling, and create role profiles to get hire",
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
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio website showcasing my projects and skills.",
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
  },
];
