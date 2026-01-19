"use client";

import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { ReactNode } from "react";
import SkillCardDecoration from "./skill-card-decoration";

export default function SkillCard({
  title,
  icon,
  items,
  delay,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
  delay: number;
}) {
  return (
    <MotionWrapper
      fadeUp
      delay={delay}
      whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group"
    >
      {/* External Glow Effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500 group-hover:duration-300 animate-pulse-slow" />

      {/* Main Card */}
      <Card className="relative p-6 h-full border-white/20 dark:border-gray-700/30 bg-linear-to-br from-white/90 to-white/60 dark:from-gray-900/90 dark:to-gray-800/60 backdrop-blur-xl shadow-2xl hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <SkillCardDecoration />
        <CardContent className="p-0 relative z-20">
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              {/* Icon background glow */}
              <div className="absolute -inset-3 bg-blue-500/20 rounded-full blur-md group-hover:bg-blue-500/30 transition duration-300" />
              {/* Icon container */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-white to-white/80 dark:from-gray-800 dark:to-gray-700 border border-white/50 dark:border-gray-600/50 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {icon}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary transition-all duration-300">
                {title}
              </h3>
              <div className="w-12 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:w-20 transition-all duration-500" />
            </div>
          </div>

          {/* Skill Items */}
          <ul className="space-y-3">
            {items.map((item, i) => (
              <MotionWrapper
                as="li"
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + i * 0.05 }}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group/item transition-colors duration-300"
              >
                {/* Animated bullet */}
                <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-purple-500 group-hover/item:scale-150 transition-transform duration-300 shrink-0" />
                <span className="text-base group-hover/item:translate-x-2 transition-transform duration-300">
                  {item}
                </span>
              </MotionWrapper>
            ))}
          </ul>

          {/* Bottom gradient accent */}
          <div className="mt-2">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </CardContent>
      </Card>
    </MotionWrapper>
  );
}
