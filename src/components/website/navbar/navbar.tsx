import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import Link from "next/link";

export default async function Navbar({lang}:{lang:Lang}) {
  const dict =  (await getDictionary(lang)).siteName
  return (
    <nav className="w-full border-b border-foreground/20 backdrop-blur-sm z-50 shadow-sm transition-colors relative">
      <div className="bg-primary/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between md:justify-start gap-10 h-16">
            <Link className="font-bold text-xl text-primary text-nowrap" href={`/${lang}`}>
              {dict}&trade;
            </Link>
            <DesktopMenu lang={lang} />
            <MobileMenu lang={lang}/>
          </div>
        </div>
      </div>
    </nav>
  );
}
