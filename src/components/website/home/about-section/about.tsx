"use client";

import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { TextShiny } from "@/components/custom/motion/text-shine";
import Link from "next/link";

import { Code2, Send, Server, Sparkles, Wrench } from "lucide-react";
import SkillCard from "./skill-card";
import CustomButton from "@/components/custom/layout/custom-button";

export default function AboutSection() {
  return (
    <section className="py-24 relative bg-primary/10 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Stars */}
        <span className="absolute w-20 h-20 bg-primary/40 rotate-45 animate-float-fast left-10 top-20  blur-xs  " />
        <span className="absolute w-150 h-150 bg-primary/40 rotate-100 animate-float-slow left-1/2 top-1/2 blur-xs" />
        <span className="absolute w-2 h-2 bg-primary/90 rotate-75 animate-float-slow left-1/2 top-5 " />
        <span className="absolute w-20 h-20 bg-primary/30 rotate-45 animate-float-slow right-20 top-40  blur-xs  " />
        <span className="absolute w-20 h-20 bg-primary/20 rotate-45 animate-float-fast left-1/3 bottom-20  blur-xs  " />

        {/* Circles */}
        <span className="absolute w-20 h-20 bg-primary/30 rounded-full animate-float-slow left-1/2 top-10 blur-xs  " />
        <span className="absolute w-3 h-3 bg-primary/90 rounded-full animate-float-fast left-1/3 top-1/2 " />
        <span className="absolute w-3 h-3 bg-primary/90 rounded-full animate-float-slow right-1/3 bottom-1/2 " />
        <span className="absolute w-32 h-32 bg-primary/30 rounded-full animate-float-fast right-1/3 bottom-10  blur-xs  " />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <MotionWrapper
          fadeUp
          as="h2"
          className="text-4xl md:text-6xl font-bold  mb-6 text-center"
        >
          <TextShiny text="About Me" />
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper
          fadeUp
          delay={0.2}
          className="max-w-3xl mx-auto text-center text-lg text-muted-foreground mb-16 leading-relaxed"
        >
          <p>
            I’m a front‑end developer passionate about building smooth, modern,
            and accessible web experiences. I focus on clean UI engineering,
            performance, and creating interfaces that feel intuitive and alive.
            I love working across the stack, learning new tools, and crafting
            products that people enjoy using.
          </p>
        </MotionWrapper>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <SkillCard
            title="Frontend"
            icon={<Code2 className="w-7 h-7 text-primary" />}
            delay={0.3}
            items={[
              "Next.js / React",
              "TypeScript",
              "TailwindCSS",
              "shadcn/ui",
            ]}
          />

          <SkillCard
            title="Backend"
            icon={<Server className="w-7 h-7 text-primary" />}
            delay={0.4}
            items={["Node.js / Fastify", "Prisma ORM", "PostgreSQL", "Zod"]}
          />

          <SkillCard
            title="Tools & Workflow"
            icon={<Wrench className="w-7 h-7 text-primary" />}
            delay={0.5}
            items={[
              "Git & GitHub",
              "Framer Motion",
              "i18n",
              "Responsive UI/UX",
            ]}
          />
        </div>

        {/* CTA Button */}
        <MotionWrapper fadeUp delay={0.6} className="text-center">
          <CustomButton
            text="Learn More"
            href="/blogs"
            iconLeft={<Send className="w-5 h-5" />}
            iconRight={<Sparkles className="w-5 h-5" />}
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
