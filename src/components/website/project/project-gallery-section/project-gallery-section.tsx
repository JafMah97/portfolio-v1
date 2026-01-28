"use client"

import MotionWrapper from "@/components/custom/motion/motion-wrapper"
import Image from "next/image"
import { useState } from "react"

interface ProjectgallerySectionProps {
  allImages: string[];
  title: string;
}
export default function ProjectgallerySection({
  allImages,
  title,
}: ProjectgallerySectionProps) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <>
      {/* Main Image Gallery */}
      {allImages.length > 0 && (
        <section>
          <div className="container max-w-6xl mx-auto px-4">
            <MotionWrapper as="div" className="relative" fadeUp>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full aspect-4/3 sm:aspect-video">
                  <Image
                    src={allImages[activeImage]}
                    alt={`${title} - Image ${activeImage + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-6 overflow-x-auto py-4">
                  {allImages.map((img: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`group relative shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all cursor-pointer ${
                        activeImage === index
                          ? "ring-2 ring-primary scale-105"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}
            </MotionWrapper>
          </div>
        </section>
      )}
    </>
  );
}
