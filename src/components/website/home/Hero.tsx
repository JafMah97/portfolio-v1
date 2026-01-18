import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import MotionWrapper from "../../custom/motion/motion-wrapper";
import TextType from "@/components/custom/motion/text-type";
import { AuroraSer } from "../../custom/motion/aroura";
import { TextShiny } from "@/components/custom/motion/text-shine";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";

export default async function Hero({ lang }: { lang: Lang }) {
  const dictHero =  (await getDictionary(lang)).homePage.hero
  return (
    <section className="relative overflow-hidden w-full z-20 bg-primary/10">
      <div className="absolute z-0 w-full h-full">
        <AuroraSer />
      </div>
      {/* Foreground content */}
      <MotionWrapper
        as="section"
        className="py-20 container max-w-7xl mx-auto px-4 relative z-10"
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
              src="/images/me.jpeg"
              alt={dictHero.imageAlt}
              width={1000}
              height={1000}
              className="rounded-full mb-4 w-32 md:w-60 h-32 md:h-60 object-cover ring-2 ring-primary"
            />
          </MotionWrapper>

          {/* Name / Title */}
          <MotionWrapper
            as="h1"
            fadeUp
            delay={0.3}
            className="text-4xl md:text-6xl font-bold  mb-6"
          >
            <TextShiny text={dictHero.title} />
          </MotionWrapper>

          {/* Description */}
          <MotionWrapper
            as="div"
            fadeUp
            delay={0.4}
            className="text-xl md:text-2xl  mb-8"
          >
            <TextType
              text={dictHero.subTitle}
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
              prefetch={false}
              target="_blank"
            >
              <FaGithub className="hover:text-primary transition-colors" />
            </Link>
            <Link
              className="text-2xl hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300"
              href="https://www.linkedin.com/in/jafar-mah-124447303/"
              prefetch={false}
              target="_blank"
            >
              <FaLinkedin className="hover:text-primary transition-colors" />
            </Link>
            <Link
              className="text-2xl hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300"
              href="https://twitter.com/JafMah97"
              prefetch={false}
              target="_blank"
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
                className=" bg-primary/10 block px-8 py-3 rounded-lg hover:bg-primary/20"
                href={`/${lang}/contact`}
                prefetch={false}
              >
                {dictHero.action.contact}
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
                href={`/${lang}/projects`}
                prefetch={false}
              >
                {dictHero.action.projects}
              </Link>
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </MotionWrapper>
    </section>
  );
}


