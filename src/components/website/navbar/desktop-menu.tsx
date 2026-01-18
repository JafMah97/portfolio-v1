"use client";
import NavItem from "./nav-item";
import { ThemeSwitcher } from "../../switchers/theme-switcher";
import LanguageSwitcher from "../../switchers/language-switcher";
import Link from "next/link";
import { useTranslation } from "@/providers/translation-provider";
import { Lang } from "@/utils/translations/dictionary-utils";

export default function DesktopMenu({lang}:{lang:Lang}) {
  const dict = useTranslation().navbar.navLinks;
  const menuItems = [
    { href: `/${lang}`, name: dict.home },
    { href: `/${lang}/about`, name: dict.about },
    { href: `/${lang}/projects`, name: dict.projects },
    { href: `/${lang}/blogs`, name: dict.blogs },
    { href: `/${lang}/contact`, name: dict.contact },
  ];
  return (
    <div className="hidden md:flex justify-between w-full  items-center gap-2">
      <div className="flex gap-4">
        {menuItems.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-primary transition-colors font-medium`}
              prefetch={false}
    
            >
              <NavItem href={item.href}>{item.name}</NavItem>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-4">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
