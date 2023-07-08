// animation1
export const openPointingIn = {
  "0%": {
    transform: "translateX(100%)",
    opacity: "0",
  },
  "20%": {
    opacity: "1",
  },

  "100%": {
    visibility: "visible",
  },
};
export const closePointingIn = {
  "80%": { opacity: "1" },
  "100%": {
    visibility: "hidden",
    transform: "translateX(100%)",
  },
};
// animation2
export const openPointingOut = {
  "0%": {
    transform: "translateX(200%)",
    opacity: "0",
  },
  "20%": {
    opacity: "1",
  },
  "100%": {
    visibility: "visible",
  },
};
export const closePointingOut = {
  "0%": {},
  "100%": {
    visibility: "hidden",
    transform: "translateX(200%)",
  },
};

// animation3
export const openTranslateBtn = {
  "0%": {
    transform: "translateX(300%)",
    opacity: "0",
  },
  "20%": {
    opacity: "1",
  },
  "100%": {
    visibility: "visible",
  },
};
export const closeTranslateBtn = {
  "0%": {},
  "100%": {
    visibility: "hidden",
    transform: "translateX(300%)",
  },
};

// animation4
export const openLikePostBtn = {
  "0%": {
    transform: "translateX(400%)",
    opacity: "0",
  },
  "20%": {
    opacity: "1",
  },
  "100%": {
    visibility: "visible",
  },
};
export const closeLikePostBtn = {
  "0%": {},
  "100%": {
    visibility: "hidden",
    transform: "translateX(400%)",
  },
};
