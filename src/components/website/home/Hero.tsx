import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import MotionWrapper from "../../custom/motion/motion-wrapper";
import TextType from "@/components/custom/motion/text-type";
import { AuroraSer } from "../../custom/motion/aroura";
import { TextShiny } from "@/components/custom/motion/text-shine";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";

export default async function Hero({ lang }: { lang: Lang }) {
  const dict = await getDictionary(lang)
  return (
    <section className="relative overflow-hidden w-full min-h-screen z-20">
      <div className="absolute z-0 w-full h-full">
        <AuroraSer />
      </div>
      {/* Foreground content */}
      <MotionWrapper
        as="section"
        className="py-28 container max-w-7xl mx-auto px-4 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <MotionWrapper
            scaleIn
            delay={0.2}
            className="flex items-center flex-col mb-4"
          >
            <Image
              priority
              src="/images/portrait.jpeg"
              alt="Jafar Mahmoud"
              width={128}
              height={128}
              className="rounded-full mb-4 w-32 md:w-60 h-32 md:h-60 object-cover ring-2 ring-primary"
            />
          </MotionWrapper>

          {/* Name / Title */}
          <MotionWrapper
            as="h1"
            fadeUp
            delay={0.3}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <TextShiny text={`Hi I'm Jafar Mahmoud`} />
          </MotionWrapper>

          {/* Description */}
          <MotionWrapper
            as="div"
            fadeUp
            delay={0.4}
            className="text-xl md:text-2xl  mb-8"
          >
            <TextType
              text={
                "Front-End Developer | UI/UX Enthusiast | Open Source Contributor"
              }
              typingSpeed={25}
              deletingSpeed={20}
              cursorCharacter="|"
              cursorBlinkDuration={0.3}
            />
          </MotionWrapper>

          {/* Social Links */}
          <MotionWrapper
            fadeUp
            delay={0.5}
            className="flex justify-center space-x-4 mb-8"
          >
            <Link
              className="text-2xl hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300"
              href="https://github.com/JafMah97"
            >
              <FaGithub className="hover:text-primary transition-colors" />
            </Link>
            <Link
              className="text-2xl hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300"
              href="https://www.linkedin.com/in/jafar-mah-124447303/"
            >
              <FaLinkedin className="hover:text-primary transition-colors" />
            </Link>
            <Link
              className="text-2xl hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300"
              href="https://twitter.com/JafMah97"
            >
              <FaTwitter className="hover:text-primary transition-colors" />
            </Link>
          </MotionWrapper>

          {/* CTA Buttons */}
          <MotionWrapper
            fadeUp
            delay={0.6}
            className="flex flex-col-reverse md:flex-row gap-4 justify-center items-center "
          >
            <MotionWrapper
              as="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                className=" bg-primary/10  block px-8 py-3 rounded-lg hover:bg-primary/20"
                href="/contact"
              >
                Contact Me
              </Link>
            </MotionWrapper>
            <MotionWrapper
              as="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                className="bg-primary block text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
                href="/projects"
              >
                View Projects
              </Link>
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </MotionWrapper>
    </section>
  );
}


