import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import Link from "next/link";
import HeroSocialLinks from "../home/hero-section/hero-social-links";

export default async function Footer({lang}:{lang:Lang}) {
  const dict = ((await getDictionary(lang)))
  return (
    <footer className=" border-t bg-primary/30 ">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="mb-4 md:mb-0 ">
            <Link href={"/"} className="text-xl font-bold text-primary ">
              {dict.siteName}&trade;
            </Link>

          </div>
         <HeroSocialLinks lang={lang}/>
        </div>
      </div>
    </footer>
  );
}


