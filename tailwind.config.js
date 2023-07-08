/** @type {import('tailwindcss').Config} */

//* ----------[ Settings Bar ]---------- *//
import { openSettingsBar } from "./src/components/settings/Animation";
import { closeSettingsBar } from "./src/components/settings/Animation";
//* ---------- ---------- *//
//* ----------[ Languages Bar ]---------- *//

import { openLang } from "./src/components/settings/Animation";
import { closeLang } from "./src/components/settings/Animation";
import { closeLangContainer } from "./src/components/settings/Animation";
import { openLangContainer } from "./src/components/settings/Animation";
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
    },
  },
  plugins: [],
};
