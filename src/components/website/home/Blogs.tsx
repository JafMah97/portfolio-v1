"use client";
import React from "react";
import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/custom/motion/animation";
import { blogs } from "@/content/blogs";
import { Lang } from "@/utils/translations/dictionary-utils";

function Blogs({lang}:{lang:Lang}) {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4 ">
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Latest Blog Posts
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            variants={fadeInUp}
            className="bg-primary/20 rounded-lg shadow-md p-6 mb-6 flex flex-col justify-between"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {blog.title}
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {blog.excerpt}
            </p>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
              <span className="flex items-center">
                <FaCalendar className="mr-2" />
                {new Date(blog.date).toLocaleDateString("en-US")}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-2" />
                {blog.readTime}
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          href={"/blogs"}
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
        >
          View All Posts
        </Link>
      </motion.div>
    </section>
  );
}

export default Blogs;
