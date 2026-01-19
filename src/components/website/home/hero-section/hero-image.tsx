import MotionWrapper from "@/components/custom/motion/motion-wrapper";
import { Code, Cpu, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

const icons = [
  {
    icon: <Code className="w-6 h-6" />,
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  },
];

export default function HeroImage({ imageAlt }: { imageAlt: string }) {
  return (
    <div className="relative flex justify-center lg:justify-end">
      {/* Main Image Container */}
      <MotionWrapper scaleIn delay={0.3} className="relative">
        {/* Outer Glow */}
        <div className="absolute -inset-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse-slow" />

        {/* Rotating Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500 border-l-transparent animate-spin-slow" />
        <div className="absolute inset-4 rounded-full border border-gray-300/50 dark:border-gray-600/50 animate-spin-slow-reverse" />

        {/* Main Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 dark:border-gray-800/30 backdrop-blur-sm shadow-2xl">
          <Image
            priority
            src="/images/me.jpeg"
            alt={imageAlt}
            fill
            className="object-cover grayscale-0 hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
          />

          {/* linear Overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-blue-500/10" />
        </div>

        {/* Floating Elements Around Image */}
        {icons.map((item, index) => (
          <MotionWrapper
            key={index}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: index * 0.3,
            }}
            className={`absolute ${item.position} w-12 h-12 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center`}
          >
            <div className="text-blue-600 dark:text-blue-400">{item.icon}</div>
          </MotionWrapper>
        ))}
      </MotionWrapper>
    </div>
  );
}
