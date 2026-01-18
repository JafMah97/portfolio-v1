"use client";

import Link from "next/link";
import { FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { blogs } from "@/content/blogs-data";
import { Lang } from "@/utils/translations/dictionary-utils";
import { TextShiny } from "@/components/custom/motion/text-shine";
import CustomButton from "@/components/custom/layout/custom-button";
import { Send, Sparkles } from "lucide-react";

export default function Blogs({ lang }: { lang: Lang }) {
  return (
    <div className="bg-primary/10">
      <section className="py-20 container max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <MotionWrapper
          as="h2"
          fadeUp
          className="text-4xl md:text-6xl font-bold  mb-6 text-center"
        >
          <TextShiny text="Latest Blogs" />
        </MotionWrapper>

        {/* Blog Grid */}
        <MotionWrapper
          as="div"
          fadeUp
          stagger={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 "
        >
          {blogs.map((blog, index) => (
            <MotionWrapper
              key={index}
              as="article"
              fadeUp
              delay={index * 0.1}
              className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white/80 to-white/20 dark:from-gray-800/80 dark:to-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 mb-8"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500 group-hover:duration-300 animate-pulse-slow" />

              <Link href={`/blogs/${blog.slug}`} className="block p-8">
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-2xl" />

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Title with hover effect */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 text-nowrap text-clip ">
                    {blog.title}
                  </h3>

                  {/* Excerpt with gradient mask */}
                  <div className="relative">
                    <p className="text-sm md:text-md text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3 text-nowrap">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Metadata with icons */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center space-x-6">
                      <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <FaCalendar className="mr-2 text-blue-500" />
                        <span className="bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full text-xs ">
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </span>
                      <span className="flex items-center text-xs  font-medium text-gray-500 dark:text-gray-400">
                        <FaClock className="mr-2 text-purple-500 " />
                        <span className="bg-white/50 dark:bg-gray-700/50 px-3 py-1 rounded-full text-xs  ">
                          {blog.readTime}
                        </span>
                      </span>
                    </div>

                    {/* Read more indicator */}
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2 text-xs  ">Read more</span>
                      <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                </div>

                {/* Subtle background pattern */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-linear-to-tr from-pink-500/10 to-yellow-500/10 rounded-full group-hover:scale-150 transition-transform duration-700 delay-100" />
              </Link>
            </MotionWrapper>
          ))}
        </MotionWrapper>

        {/* CTA Button */}
        <MotionWrapper fadeUp delay={0.4} className="text-center mt-12">
          <CustomButton
            text="View All Posts"
            href="/blogs"
            iconLeft={<Send className="w-5 h-5" />}
            iconRight={<Sparkles className="w-5 h-5" />}
          />
        </MotionWrapper>
      </section>
    </div>
  );
}
