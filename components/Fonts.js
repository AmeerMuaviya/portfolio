import {
  Sacramento,
  Permanent_Marker,
  Josefin_Sans,
  Zilla_Slab_Highlight,
  Fira_Sans,
  Libre_Baskerville,
  Cantora_One
} from "next/font/google";

const _sacramento = Sacramento({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const sacramanto = _sacramento.className;

const _permanent_Marker = Permanent_Marker({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const permanent_Marker = _permanent_Marker.className;

const _fin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const fin_sans = _fin_sans.className;
const _zilla = Zilla_Slab_Highlight({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export const zilla = _zilla.className;

const _fira = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  adjustFontFallback:true
});
export const fira = _fira.className;

const _libre = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  adjustFontFallback:true
});
export const libre = _libre.className;

const _cantora =Cantora_One ({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  adjustFontFallback:true
});
export const cantora = _cantora.className;
