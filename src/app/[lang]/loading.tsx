import { Loader2 } from "lucide-react";
import { getCurrentLang } from "@/utils/translations/language-utils";
import { getDictionary } from "@/utils/translations/dictionary-utils";

export default async function Loading() {
  const lang = await getCurrentLang();
  const { loadingPage: dict } = await getDictionary(lang);

  return (
    <div className="relative z-50 bg-primary/20 flex min-h-[81vh] items-center justify-center px-4 py-20 w-full overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 opacity-100" />

      {/* Decorative blurred circles */}
      <div className="absolute top-1/3 left-1/4 h-32 w-32 rounded-full bg-[radial-gradient(circle,var(--secondary)/25,transparent_70%)] blur-xl opacity-30" />
      <div className="absolute bottom-10 right-1/4 h-20 w-20 rounded-full bg-[radial-gradient(circle,var(--primary)/25,transparent_70%)] blur-xl opacity-30" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Spinner */}
        <Loader2 className="h-14 w-14 text-primary animate-spin" />

        {/* Loading text */}
        <p className="text-primary text-xl font-medium animate-pulse">
          {dict.loading}
        </p>
      </div>
    </div>
  );
}
