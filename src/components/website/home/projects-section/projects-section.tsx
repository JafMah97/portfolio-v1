"use client";
import { projects } from "@/content/projects-data";
import { Lang } from "@/utils/translations/dictionary-utils";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { TextShiny } from "@/components/custom/motion/text-shine";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "../projects-section/project-card";

export default function Projects({ lang }: { lang: Lang }) {
  return (
    <section className="relative py-24 backdrop-blur-xl bg-primary/10">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <MotionWrapper
          as="h2"
          fadeUp
          className="text-4xl md:text-6xl font-bold  mb-6 text-center"
        >
          <TextShiny text="Featured Projects" />
        </MotionWrapper>
        <div className=" px-15 py-10 rounded-4xl bg-primary/10">
          {/* Carousel */}
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              slidesToScroll: 1, // <— scroll one card at a time
              breakpoints: {
                "(min-width: 768px)": {
                  slidesToScroll: 1, // <— enforce 1 slide scroll on md+
                },
              },
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
              }),
            ]}
          >
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500 group-hover:duration-300 animate-pulse-slow" />
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ProjectCard project={project} index={index} lang={lang} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
