"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function NavItem({ children, href }: Props) {
  const pathname = usePathname();

  // 1. Split path into segments (e.g., ["", "en", "about"])
  const segments = pathname.split("/");

  // 2. The actual route is usually the 3rd segment if lang is present,
  // or it's "/" if there's nothing after the language code.
  const currentRelativePath =
    segments.length <= 2 ? "/" : `/${segments.slice(2).join("/")}`;

  // 3. Compare the relative path to your menu item href
  const isActive = currentRelativePath === href;

  return (
    <span
      className={cn(
        "transition-colors font-medium relative py-1",
        isActive
          ? "text-primary font-semibold"
          : "text-foreground/70 hover:text-primary"
      )}
    >
      {children}
    </span>
  );
}
