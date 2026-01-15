"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import MotionWrapper from "../custom/motion/motion-wrapper";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/providers/translation-provider";

export function ThemeSwitcher() {
  const dict = useTranslation().navbar.theme
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled className="rounded-full">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };


  return (
    <Button
      variant="outline"
      size={"icon"}
      onClick={toggleTheme}
      className="rounded-full overflow-hidden" // Keeps the animation contained
    >
      <MotionWrapper
        key={resolvedTheme} // This triggers the animation on every switch
        as="span"
        scaleIn
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex items-center justify-center"
      >
        {resolvedTheme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-blue-600" />
        )}
      </MotionWrapper>
      <span className="sr-only">{dict}</span>
    </Button>
  );
}
