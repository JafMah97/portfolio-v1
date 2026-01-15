import { fmt, getDirection } from "../../utils/translations/language-utils";
import {
  getDictionary,
  i18n,
  Lang,
} from "../../utils/translations/dictionary-utils";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { TranslationsProvider } from "@/providers/translation-provider";
import { arFont, enFont } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/website/navbar/navbar";

export async function generateStaticParams() {
  return i18n.langs.map((lang: Lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const { siteMeta: dict } = await getDictionary(lang);

  return {
    title: {
      template: `%s | ${dict.siteName}`,
      default: fmt(dict.home.title, { siteName: dict.siteName }),
    },
  };
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}>) {
  const { lang } = (await params) as { lang: Lang };
  const translations = await getDictionary(lang);

  const fontClass = lang == "ar" ? arFont.className : enFont.className;

  return (
    <html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
      <body className={`${fontClass} antialiased`}>
        <TranslationsProvider translations={translations}>
          <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
            <NextTopLoader color="var(--color-primary)" showSpinner={false} />
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  fontSize: "0.875rem",
                  textAlign: "start",
                },
                className: `antialiased ${fontClass}`,
              }}
            />
            <Navbar />
            {children}
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
