"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { ThemeSwitcher } from "../../switchers/theme-switcher";
import LanguageSwitcher from "../../switchers/language-switcher";
import MotionWrapper from "../../custom/motion/motion-wrapper";
import PresenceWrapper from "../../custom/motion/presence-wrapper";
import NavItem from "./nav-item";
import { useTranslation } from "@/providers/translation-provider";


export default function MobileMenu() {
  const { navLinks: dict, setting } = useTranslation().navbar;

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", name: dict.home },
    { href: "/about", name: dict.about },
    { href: "/projects", name: dict.projects },
    { href: "/blogs", name: dict.blogs },
    { href: "/contact", name: dict.contact },
  ];

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <MotionWrapper
        as="button"
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
        className="p-2 text-foreground hover:bg-primary/10 rounded-lg"
      >
        {isOpen ? (
          <X size={24} strokeWidth={1.5} />
        ) : (
          <Menu size={24} strokeWidth={1.5} />
        )}
      </MotionWrapper>

      {/* Mobile Menu - Full width below navbar */}
      <PresenceWrapper>
        {isOpen && (
          <MotionWrapper
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute  left-0 right-0 top-full bg-background border-t border-foreground/20 shadow-lg overflow-hidden"
          >
            <div className="bg-primary/10">
              <div className="p-4 space-y-4">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
                    <MotionWrapper
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className={`block py-2 hover:text-primary ${
                          isActive ? "text-primary" : "text-foreground/70 "
                        }`}
                      >
                        <NavItem href={item.href}>{item.name}</NavItem>
                      </Link>
                    </MotionWrapper>
                  );
                })}

                {/* Theme + Language */}
                <MotionWrapper
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="flex items-center gap-4 pt-2"
                >
                  <div className="flex flex-row gap-3 justify-between items-center w-full">
                    <span className="text-lg">{setting}</span>

                    <div className="flex flex-row gap-2 items-center">
                      <ThemeSwitcher />
                      <LanguageSwitcher />
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </MotionWrapper>
        )}
      </PresenceWrapper>
    </div>
  );
}
