/** @type {import('tailwindcss').Config} */

//* ----------[ Settings Bar ]---------- *//
import { openSettingsBar } from "./src/components/ReadingSettingsMenu/Animation";
import { closeSettingsBar } from "./src/components/ReadingSettingsMenu/Animation";
//* ---------- ---------- *//

//* ----------[ Languages Bar ]---------- *//
import { openLang } from "./src/components/ReadingSettingsMenu/Animation";
import { closeLang } from "./src/components/ReadingSettingsMenu/Animation";
import { closeLangContainer } from "./src/components/ReadingSettingsMenu/Animation";
import { openLangContainer } from "./src/components/ReadingSettingsMenu/Animation";
//* ---------- ---------- *//

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        openSettingsBar,
        closeSettingsBar,
        openLang,
        closeLang,
        closeLangContainer,
        openLangContainer,
      },
      dropShadow: {
        imageDownloadBtn: "0 0 10px rgba(147 51 234 / 1)",
        imageDownloadBtnDownloaded: "0 0 10px rgba(5 150 105 / 1)",
      },
    },
  },
  plugins: [],
};
