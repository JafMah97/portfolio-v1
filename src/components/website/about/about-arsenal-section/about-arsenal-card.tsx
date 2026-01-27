

import { IconType } from "react-icons";
import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  name: string;
  icon: IconType;
  color: string;
  skills: Skill[];
}

export default function AboutArsenalCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <MotionWrapper
      fadeUp
      delay={index * 0.1}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      {/* External Glow Effect */}
      <div
        className={`absolute -inset-px rounded-3xl bg-linear-to-r ${category.color} opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 z-0`}
      />

      {/* Main Card Container */}
      <Card className="relative p-6 md:p-8 h-full rounded-3xl bg-linear-to-br from-gray-50/80 to-white/40 dark:from-gray-900/80 dark:to-gray-800/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/30 shadow-lg group-hover:shadow-2xl overflow-hidden transition-all duration-500">
        {/* Floating Particles Background */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <MotionWrapper
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-linear-to-r ${category.color} opacity-10`}
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Category Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="relative">
              {/* Icon container */}
              <div
                className={`relative p-4 rounded-2xl bg-linear-to-br ${category.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                <category.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Title & Accent Line */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold   transition-all duration-500">
                {category.name}
              </h3>
              <div
                className={`mt-2 w-12 h-1 rounded-full bg-linear-to-r ${category.color} opacity-50 group-hover:w-20 group-hover:opacity-100 transition-all duration-500`}
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {category.skills.map((skill, skillIdx) => (
              <MotionWrapper
                key={skillIdx}
                scaleIn
                delay={0.2 + skillIdx * 0.05}
                whileHover={{ scale: 1.05 }}
                className="group/skill relative p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="relative flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-linear-to-br ${category.color} bg-opacity-10 group-hover/skill:bg-opacity-20 transition-all duration-300`}
                  >
                    <skill.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>

                {/* Animated Skill Underline */}
                <MotionWrapper
                  className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r ${category.color}`}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </Card>
    </MotionWrapper>
  );
}
