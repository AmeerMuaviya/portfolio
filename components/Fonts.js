'use client'
import {
  Sacramento,
  Permanent_Marker,
  Josefin_Sans,
  Zilla_Slab_Highlight,
  Fira_Sans,
  Libre_Baskerville,
  Cantora_One,
  Lilita_One
} from "next/font/google";

const _sacramento = Sacramento({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const sacramanto = _sacramento.className;

const _lilta =Lilita_One ({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  adjustFontFallback:true
});
export const lilta = _lilta.className;
