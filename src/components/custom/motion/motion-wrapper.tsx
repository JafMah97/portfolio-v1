"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import React, { useMemo } from "react";

type ElementType =
  | "button"
  | "div"
  | "span"
  | "p"
  | "section"
  | "article"
  | "main"
  | "header"
  | "footer"
  | "nav"
  | "aside"
  | "a"
  | "li"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type MotionWrapperProps<T extends ElementType> = Omit<
  HTMLMotionProps<T>,
  "as"
> & {
  children?: React.ReactNode;
  className?: string;
  as?: T;
  fadeUp?: boolean;
  scaleIn?: boolean;
  stagger?: number;
  delay?: number;
};

export default function MotionWrapper<T extends ElementType = "div">({
  children,
  className,
  as = "div" as T,
  fadeUp = false,
  scaleIn = false,
  stagger = 0,
  delay = 0,
  ...props
}: MotionWrapperProps<T>) {
  // 1. Resolve the motion component.
  // Accessing motion[as] directly is fine; it's a reference, not a re-creation.
  const Component = motion[as] as React.ElementType;

  // 2. Memoize variants so they don't recalculate unless dependencies change
  const variants: Variants | undefined = useMemo(() => {
    if (fadeUp) {
      return {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: stagger + delay,
            ease: "easeOut",
          },
        },
      };
    }

    if (scaleIn) {
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: stagger + delay,
            ease: "easeOut",
          },
        },
      };
    }

    return props.variants;
  }, [fadeUp, scaleIn, stagger, delay, props.variants]);

  return (
    <Component
      className={className}
      variants={variants}
      initial={props.initial ?? "hidden"}
      whileInView={props.whileInView ?? "visible"}
      viewport={props.viewport ?? { once: true }}
      {...props}
    >
      {children}
    </Component>
  );
}
