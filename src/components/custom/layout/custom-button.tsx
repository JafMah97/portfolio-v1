"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function CustomButton({
  iconLeft,
  text,
  iconRight,
  href,
  isOutlined = false,
}: {
  iconLeft: ReactNode;
  text: string;
  iconRight: ReactNode;
  href: string;
  isOutlined?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg 
        transition-all duration-500 transform

        ${
          isOutlined
            ? `
            bg-transparent border border-primary/40 text-primary 
            hover:border-primary hover:text-primary/90 
            hover:-translate-y-1
          `
            : `
            bg-linear-to-r from-blue-600 to-purple-600 text-white 
            hover:from-blue-700 hover:to-purple-700 
            shadow-2xl hover:shadow-3xl hover:shadow-blue-500/30 
            hover:-translate-y-1
          `
        }
      `}
    >
      {/* Glow (only for filled variant) */}
      {!isOutlined && (
        <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-500" />
      )}

      {/* Content */}
      <span className="relative flex items-center gap-3">
        <span
          className={`
            w-5 h-5 transition-transform duration-500
            group-hover:rotate-45
          `}
        >
          {iconLeft}
        </span>

        {text}

        <span
          className={`
            w-5 h-5 
              group-hover:animate-spin
          ${isOutlined ? "text-primary" : "text-yellow-300"}
          `}
        >
          {iconRight}
        </span>
      </span>

      {/* Border */}
      <div
        className={`
          absolute inset-0 rounded-full transition-all duration-500
          ${
            isOutlined
              ? "border border-primary/40 group-hover:border-primary"
              : "border-2 border-transparent group-hover:border-white/30"
          }
        `}
      />
    </Link>
  );
}
