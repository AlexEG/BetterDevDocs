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
//* ----------[ Settings ]---------- *//
import { openSettings } from "./src/components/Settings/Ainmation";
import { closeSettings } from "./src/components/Settings/Ainmation";
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
        //* ----------[ Settings ]---------- *//
        openSettings,
        closeSettings,
      },
      dropShadow: {
        imageDownloadBtn: "0 0 10px rgba(147 51 234 / 1)",
        imageDownloadBtnDownloaded: "0 0 10px rgba(5 150 105 / 1)",
      },
    },
  },
  plugins: [],
};
