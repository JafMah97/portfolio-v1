import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { i18n, Lang } from "../translations/dictionary-utils";
import { match as matchLocale } from "@formatjs/intl-localematcher";

import Negotiator from "negotiator";
import { LANG_COOKIE } from "@/constants";

async function getLang(request: NextRequest): Promise<string> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get(LANG_COOKIE)?.value;

  if (cookieLang && i18n.langs.includes(cookieLang as Lang)) {
    return cookieLang;
  }

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const langs = [...i18n.langs];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    langs
  );
  return matchLocale(languages, langs, i18n.defaultLang);
}

export async function langMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a valid language prefix
  const hasLang = i18n.langs.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  );

  if (!hasLang) {
    const lang = await getLang(request);

    const newPathname =
      pathname === "/" || pathname === "" ? `/${lang}` : `/${lang}${pathname}`;

    const newUrl = new URL(newPathname, request.url);
    newUrl.search = request.nextUrl.search;

    return NextResponse.redirect(newUrl, 308);
  }

  return null;
}
