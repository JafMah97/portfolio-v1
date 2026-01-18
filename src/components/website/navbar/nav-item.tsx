"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string; // full path, including lang (e.g. "/en/about")
}

export default function NavItem({ children, href }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <span
      className={cn(
        "transition-colors font-medium relative py-1",
        isActive
          ? "text-primary font-semibold"
          : "text-foreground/70 hover:text-primary",
      )}
    >
      {children}
    </span>
  );
}
