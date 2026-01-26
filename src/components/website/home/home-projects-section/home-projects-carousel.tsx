"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Lang } from "@/utils/translations/dictionary-utils";
import { isRTL } from "@/utils/translations/language-utils";
import Autoplay from "embla-carousel-autoplay";
import { ReactNode } from "react";

export default function HomeProjectsCarousel({children,lang}:{children:ReactNode,lang:Lang}) {
  return (
    <Carousel
      dir={isRTL(lang) ? "rtl" : "ltr"}
      className="w-full"
      opts={{
        direction:isRTL(lang)?"rtl":"ltr",
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
          "(min-width: 768px)": {
            slidesToScroll: 1,
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
      <CarouselContent dir={isRTL(lang) ? "rtl" : "ltr"}>
        {children}
      </CarouselContent>

      <CarouselPrevious dir={isRTL(lang) ? "rtl" : "ltr"} className="hidden md:flex" />
      <CarouselNext dir={isRTL(lang) ? "rtl" : "ltr"} className="hidden md:flex" />
    </Carousel>
  );
}
