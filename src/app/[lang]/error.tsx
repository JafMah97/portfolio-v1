"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/providers/translation-provider";
import { useCurrentLang } from "@/hooks/use-current-lang";
import HeroDecoration from "@/components/custom/layout/hero-decoration";


export default function ErrorPage({

  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

const lang = useCurrentLang()
const dict = useTranslation().errorPage

  return (
    <div className=" relative z-50 bg-primary/20 flex min-h-[77vh] md:min-h-[81vh] tems-center justify-center px-4 py-10 md:py-20 w-full overflow-hidden">
        <HeroDecoration />
      <div className="relative z-50 max-w-3xl space-y-8 text-center w-full flex flex-col justify-center gap-5">
        <h1 className="text-foreground text-4xl md:text-6xl font-bold ">
          {dict.title}
        </h1>

        <div>
          <p className="text-foreground text-xs md:text-lg leading-relaxed">
            {dict.description}
          </p>

          {process.env.NODE_ENV === "development" && (
            <p className="text-red-500 text-xs md:text-lg  leading-relaxed">
              {error.message}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-6 w-full">
          <Button
            onClick={reset}
            className="rounded-md text-white w-full md:w-1/2 py-4 cursor-pointer"
          >
            {dict.tryAgain}
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-md text-foreground w-full md:w-1/2 py-4 "
          >
            <Link href={`/${lang}`}>{dict.goHome}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
