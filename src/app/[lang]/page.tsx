import LanguageSwitcher from "@/components/switchers/language-switcher";
import { ThemeSwitcher } from "@/components/switchers/theme-switcher";
import { getDictionary, Lang } from "@/utils/translations/dictionary-utils";

interface Props {
  params: Promise<{ lang: Lang }>;
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="h-screen">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <>
        <p>{dict.p}</p>
      </>
    </div>
  );
}
