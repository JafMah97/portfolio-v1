"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Languages, Check } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { setCookie } from "@/utils/cookies";
import { LANG_COOKIE } from "@/constants";
import { Button } from "../ui/button";



const languages = [
  { label: "English", value: "en", code: "EN" },
  { label: "العربية", value: "ar", code: "AR" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentLang = pathname?.split("/")[1] || "en";

  function handleChange(lang: string) {
    if (lang === currentLang) return;
    setCookie(LANG_COOKIE, lang);

    const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    startTransition(() => {
      router.push(newPath);
    });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-10 w-fit rounded-full border-border bg-transparent px-4 py-2 text-sm font-light hover:bg-accent/50 transition-all duration-200 gap-2",
            isPending && "opacity-50 cursor-not-allowed"
          )}
        >
          <Languages className="h-4 w-4 text-primary" />
          <span className="hidden md:block text-foreground">
            {currentLang === "ar" ? "العربية" : "English"}
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-40 p-1 rounded-xl border-border bg-card shadow-lg"
      >
        <div className="flex flex-col gap-1">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => handleChange(lang.value)}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors duration-200",
                currentLang === lang.value
                  ? "bg-accent/50 font-medium"
                  : "hover:bg-accent/30 font-light"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-primary/70">
                  {lang.code}
                </span>
                {lang.label}
              </div>
              {currentLang === lang.value && (
                <Check className="h-3.5 w-3.5 text-primary" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default LanguageSwitcher;
