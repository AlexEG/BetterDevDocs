//* ----------[ Settings Bar ]---------- *//
export const openSettingsBar = {
  "0%": {
    opacity: "0",
    visibility: "visible",
  },
  "20%": {
    opacity: "1",
  },

  "100%": {
    transform: "translateX(0%)",
  },
};

export const closeSettingsBar = {
  "0%": {
    opacity: "0",
    visibility: "hidden",
  },
  "20%": {
    opacity: "1",
  },

  "100%": {
    transform: "translateX(0%)",
  },
};
//* ---------- ---------- *//

//* ----------[ Languages Bar ]---------- *//
export const openLang = {
  "0%": {
    opacity: "0",
  },

  "100%": {
    opacity: "1",
    transform: "translateY(0%)",
  },
};

export const closeLang = {
  "0%": {
    opacity: "0",
  },

  "100%": {
    opacity: "1",
    transform: "translateY(0%)",
  },
};

export const openLangContainer = {
  "0%": {
    transform: "scaleY(0)",
  },
  "100%": {
    transform: "scaleY(1)",
  },
};

export const closeLangContainer = {
  "100%": {
    transform: "scaleY(0)",
  },
};
//* ---------- ---------- *//
