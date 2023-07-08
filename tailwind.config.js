/** @type {import('tailwindcss').Config} */

//* ----------[ Settings Bar ]---------- *//
import { openPointingIn } from "./src/components/settings/Animation";
import { closePointingIn } from "./src/components/settings/Animation";
import { openPointingOut } from "./src/components/settings/Animation";
import { closePointingOut } from "./src/components/settings/Animation";
import { openTranslateBtn } from "./src/components/settings/Animation";
import { closeTranslateBtn } from "./src/components/settings/Animation";
import { openLikePostBtn } from "./src/components/settings/Animation";
import { closeLikePostBtn } from "./src/components/settings/Animation";
//* ---------- ---------- *//

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        openPointingIn,
        closePointingIn,
        openPointingOut,
        closePointingOut,
        openTranslateBtn,
        closeTranslateBtn,
        openLikePostBtn,
        closeLikePostBtn,
      },
    },
  },
  plugins: [],
};
