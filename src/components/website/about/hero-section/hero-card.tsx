import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  stat: {
    icon: ReactNode;
    value: string;
    label: string;
    link:string
  };
  index: number;
}

export default function AboutHeroCard({ stat, index }: Props) {
  return (
    <div>
      {/* Background Glow */}
      <div
        className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-primary  opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
      />

      {/* Border Glow */}
      <div
        className={`absolute -inset-0.5 rounded-2xl sm:rounded-3xl bg-primary opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
      />

      {/* Label */}
      <div className="text-xs sm:text-sm md:text-base font-medium text-center relative z-10 h-10">
        {stat.label}
      </div>

      {/* Icon Container */}
      <Link href={`${stat.link}`} className="relative z-50 mb-3 sm:mb-4 ">
        <div
          className={`z-0 absolute inset-0 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${index === 0 ? "bg-linear-to-br from-blue-600 to-blue-800" : ""} ${index === 1 ? "bg-linear-to-br from-purple-600 to-purple-800" : ""} ${index === 2 ? "bg-linear-to-br from-green-600 to-green-800" : ""} `}
        />

        {/* Outer Glow */}
        <div
          className={`z-0 absolute -inset-2 rounded-xl sm:rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow ${index === 0 ? "bg-linear-to-r from-blue-500 via-cyan-500 to-blue-700" : ""} ${index === 1 ? "bg-linear-to-r from-purple-500 via-pink-500 to-purple-700" : ""} ${index === 2 ? "bg-linear-to-r from-green-500 via-emerald-500 to-green-700" : ""} `}
        />
        <div
          className={`relative z-10
          p-2 sm:p-3 rounded-xl sm:rounded-2xl border 
          ${index !== 1 ? (index !== 2 ? "border-blue-500 hover:bg-blue-500" : "border-green-500 hover:bg-green-500") : "border-purple-500 hover:bg-purple-500"}
          shadow-lg shadow-black/20
          flex items-center justify-center
        `}
        >
          <div >{stat.icon}</div>
        </div>
      </Link>

      {/* Value */}
      <div
        className={`
        text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-center
        relative z-10
      `}
      >
        {stat.value}
      </div>

      {/* Decorative Dot */}
      <div
        className={`absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full  opacity-70`}
      />
    </div>
  );
}
