import {  Cairo, Mona_Sans } from "next/font/google";

export const enFont = Mona_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-en",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const arFont = Cairo({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-ar",
  display: "swap",
});
