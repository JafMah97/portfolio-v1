
import { LANG_COOKIE } from "@/constants";
import { Lang } from "./dictionary-utils";

export function getDirection(lang: Lang): "rtl" | "ltr" {
  return lang === "ar" ? "rtl" : "ltr";
}

export function isRTL(lang: Lang): boolean {
  return getDirection(lang) === "rtl";
}

export const getCurrentLang = async (): Promise<Lang> => {
  const { cookies } = await import("next/headers");
  return ((await cookies()).get(LANG_COOKIE)?.value || "en") as Lang;
};

/**
 * Replaces {{placeholder}} tokens in a string with given values.
 *
 * @example
 * fmt("Hello {{user}}", { user: "Alice" }) // => "Hello Alice"
 * fmt("Delete {{entity}}?", { entity: "user" }) // => "Delete user?"
 *
 * @param message - The template string containing {{key}} placeholders
 * @param options - Key-value pairs to replace placeholders (undefined values are skipped)
 * @returns The interpolated string
 */

interface Options {
  [key: string]: string | number | boolean | undefined;
  femaleArabicField?: boolean;
}

export function fmt(message: string, options: Options = {}): string {
  let result = message;
  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined) {
      result = result.replace(
        new RegExp(`\\{\\{${key}\\}\\}`, "g"),
        String(value)
      );
    }
  });
  return result;
}
