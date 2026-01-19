import {  Sparkles, Target, Zap, Code, Cpu } from "lucide-react";

import { AuroraSer } from "@/components/custom/motion/aroura";
import { Lang, } from "@/utils/translations/dictionary-utils";
import { isRTL } from "@/utils/translations/language-utils";
const floatingTechs = [
  { icon: <Code className="w-4 h-4" />, name: "React" },
  { icon: <Cpu className="w-4 h-4" />, name: "Next.js" },
  { icon: <Zap className="w-4 h-4" />, name: "TypeScript" },
  { icon: <Sparkles className="w-4 h-4" />, name: "Tailwind" },
  { icon: <Target className="w-4 h-4" />, name: "Node.js" },
];

export default function HeroDecoration({lang}:{lang:Lang}) {
  
  return (
    <>
      {/*  Aurora Background */}
      <div className="absolute z-0 w-full h-full">
        <AuroraSer />
        {/* Floating Tech Elements */}
        <div className="hidden lg:flex absolute inset-0 overflow-hidden pointer-events-none">
          {floatingTechs.map((tech, index) => (
            <div
              key={index}
              className="absolute animate-float-slow"
              style={
                !isRTL(lang)
                  ? {
                      left: `${40 + index * 10}%`,
                      top: `${30 + Math.cos(index) * 20}%`,
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: `${15 + index * 2}s`,
                    }
                  : {
                      right: `${40 + index * 10}%`,
                      top: `${30 + Math.cos(index) * 20}%`,
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: `${15 + index * 2}s`,
                    }
              }
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                {tech.icon}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
