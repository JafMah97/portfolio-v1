"use client";
import NavItem from "./nav-item";
import { ThemeSwitcher } from "../../switchers/theme-switcher";
import LanguageSwitcher from "../../switchers/language-switcher";
import Link from "next/link";
import { useTranslation } from "@/providers/translation-provider";

export default function DesktopMenu() {
  const dict = useTranslation().navbar.navLinks;
  const menuItems = [
    { href: "/", name: dict.home },
    { href: "/about", name: dict.about },
    { href: "/projects", name: dict.projects },
    { href: "/blogs", name: dict.blogs },
    { href: "/contact", name: dict.contact },
  ];
  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-primary transition-colors font-medium`}
          >
            <NavItem href={item.href}>{item.name}</NavItem>
          </Link>
        );
      })}
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
}
