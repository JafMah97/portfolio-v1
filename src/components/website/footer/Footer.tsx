import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";
import Link from "next/link";
import HeroSocialLinks from "../../custom/layout/social-links";

export default async function Footer({ lang }: { lang: Lang }) {
  const dict = await getDictionary(lang);
  return (
    <footer className=" border-t bg-primary/20 py-5">
      <div className="container max-w-7xl mx-auto px-4 h-full ">
        <div className="flex gap-2 flex-row justify-between items-center h-full">
          <Link href={"/"} className="text-xl font-bold text-primary ">
            {dict.siteName}&trade;
          </Link>
          <HeroSocialLinks lang={lang} />
        </div>
      </div>
    </footer>
  );
}
