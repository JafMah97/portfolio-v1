"use client"

import MotionWrapper from "@/components/custom/motion/motion-wrapper"
import Image from "next/image"
import { useState } from "react"

interface GalProps {
  allImages:string [];
  title:string
}
export default function Gal({allImages,title}:GalProps) {
  const [activeImage,setActiveImage] = useState(0)
  return (
    <>
      {/* Main Image Gallery */}
          {allImages.length > 0 && (
            <section >
              <div className="container max-w-6xl mx-auto px-4">
                <MotionWrapper as="div" className="relative" fadeUp>
                  <div className="relative h-50 md:h-60 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={allImages[activeImage]}
                      alt={`${title} - Image ${activeImage + 1}`}
                      width={1000}
                      height={1000}
                      className="object-cover"
                      priority
                    />
                  </div>
    
                  {/* Thumbnail Gallery */}
                  {allImages.length > 1 && (
                    <div className="flex gap-4 mt-6 overflow-x-auto py-4">
                      {allImages.map((img: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(index)}
                          className={`relative shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all ${
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
                        </button>
                      ))}
                    </div>
                  )}
                </MotionWrapper>
              </div>
            </section>
          )}
    </>
  )
}
