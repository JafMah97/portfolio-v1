"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import MotionWrapper from "../../custom/motion/motion-wrapper";

function Hero() {
  return (
    <MotionWrapper
      as="section"
      className="py-28 container max-w-7xl mx-auto px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Profile Image */}
        <MotionWrapper
          scaleIn
          delay={0.2}
          className="flex items-center flex-col mb-4"
        >
          <Image
            src="/22.jpg"
            alt="Jafar Mahmoud"
            width={128}
            height={128}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </MotionWrapper>

        {/* Name / Title */}
        <MotionWrapper
          as="h1"
          fadeUp
          delay={0.3}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-primary block sm:inline">Jafar Mahmoud</span>
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper
          as="p"
          fadeUp
          delay={0.4}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Front-End Developer | UI/UX Enthusiast | Open Source Contributor
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
            <FaGithub />
          </Link>
          <Link
            className="text-2xl hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300"
            href="https://www.linkedin.com/in/jafar-mah-124447303/"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-2xl hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-300"
            href="https://twitter.com/JafMah97"
          >
            <FaTwitter />
          </Link>
        </MotionWrapper>

        {/* CTA Buttons */}
        <MotionWrapper
          fadeUp
          delay={0.6}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
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

          <MotionWrapper
            as="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              className="bg-gray-400 block text-white px-8 py-3 rounded-lg hover:bg-gray-500 transition-colors"
              href="/contact"
            >
              Contact Me
            </Link>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </MotionWrapper>
  );
}

export default Hero;
