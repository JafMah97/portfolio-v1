import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import SkillCardDecoration from "../../home/home-about-section/home-skill-card-decoration";

export interface AboutPhilosophyCardProps {
  title: string;
  description: string;
  icon: IconType | LucideIcon;
  color: "blue" | "purple" | "green";
}

export default function AboutPhilosophyCard({
  title,
  description,
  icon: Icon,
  color,
}: AboutPhilosophyCardProps) {
  const colorVariants = {
    blue: "from-blue-600 via-blue-500 to-cyan-400 shadow-blue-500/20 group-hover:bg-blue-500/30",
    purple:
      "from-purple-600 via-purple-500 to-pink-500 shadow-purple-500/20 group-hover:bg-purple-500/30",
    green:
      "from-emerald-600 via-green-500 to-teal-400 shadow-green-500/20 group-hover:bg-green-500/30",
  };

  const glowColors = {
    blue: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
    purple: "from-purple-500/20 via-pink-500/20 to-purple-500/20",
    green: "from-green-500/20 via-emerald-500/20 to-green-500/20",
  };

  const col =
    color !== "blue"
      ? color !== "purple"
        ? "text-green-500"
        : "text-purple-500"
      : "text-blue-500";

  return (
    <MotionWrapper
      fadeUp
      delay={0.1}
      whileHover={{ scale: 1.03, rotateX: 1, rotateY: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group h-full"
    >
      {/* External Glow Effect */}
      <div
        className={`absolute -inset-1 bg-linear-to-r ${glowColors[color]} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse-slow`}
      />

      {/* Main Card */}
      <Card className="relative h-full border-white/20 dark:border-gray-700/30 bg-linear-to-br from-white/90 to-white/60 dark:from-gray-900/95 dark:to-gray-800/80 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
        {/* Reusing your Decoration Component */}
        <SkillCardDecoration />

        <CardContent className="px-8 py-2 relative z-20 flex flex-col items-center text-center h-full">
          {/* Header Icon */}
          <div className="relative mb-6">
            {/* Icon background glow */}
            <div
              className={`absolute -inset-4 rounded-full blur-md transition duration-300 ${colorVariants[color].split(" ").pop()}`}
            />

            {/* Icon container */}
            <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-linear-to-br from-white to-white/80 dark:from-gray-800 dark:to-gray-700 border border-white/50 dark:border-gray-600/50 shadow-xl group-hover:rotate-6 transition-transform duration-300">
              <Icon className={`w-8 h-8 ${col}`} />
            </div>
          </div>

          {/* Text Content */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-300">
            {title}
          </h3>

          <div
            className={`w-12 h-1 bg-linear-to-r ${colorVariants[color].split(" ").slice(0, 3).join(" ")} rounded-full mb-6 group-hover:w-24 transition-all duration-500`}
          />

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {description}
          </p>

          {/* Bottom gradient accent line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent ${color === "blue" ? "via-blue-500" : color === "purple" ? "via-purple-500" : "via-green-500"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
        </CardContent>
      </Card>
    </MotionWrapper>
  );
}
