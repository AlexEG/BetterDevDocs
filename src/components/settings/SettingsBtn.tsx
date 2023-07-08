import { useState } from "react";
import LikePostBtn from "./LikePostBtn";
import TranslateBtn from "./TranslateBtn";
import LightDarkBtn from "./LightDarkBtn";
import ExpandShrinkBtn from "./ExpandShrinkBtn";

function SettingsBtn() {
  const [isOpen, setIsOpen] = useState({
    Open: false,
    animation1: "invisible",
    animation2: "invisible",
    animation3: "invisible",
    animation4: "invisible",
    isSelectLanguageOpen: false,
  });

  const openPointingIn =
    "animate-[openPointingIn_500ms_ease-in-out_1_forwards]";
  const closePointingIn =
    "animate-[closePointingIn_500ms_ease-in-out_1_forwards]";

  const openPointingOut =
    "animate-[openPointingOut_500ms_ease-in-out_1_forwards]";
  const closePointingOut =
    "animate-[closePointingOut_500ms_ease-in-out_1_forwards]";

  const openTranslateBtn =
    "animate-[openTranslateBtn_500ms_ease-in-out_1_forwards]";
  const closeTranslateBtn =
    "animate-[closeTranslateBtn_500ms_ease-in-out_1_forwards]";

  const openLikePostBtn =
    "animate-[openLikePostBtn_500ms_ease-in-out_1_forwards]";
  const closeLikePostBtn =
    "animate-[closeLikePostBtn_500ms_ease-in-out_1_forwards]";

  function openCloseSettings() {
    setIsOpen((prevState) => {
      return {
        ...prevState,
        Open: !prevState.Open,
        animation1:
          prevState.animation1 === "invisible" ||
          prevState.animation1 === closePointingIn
            ? openPointingIn
            : closePointingIn,
        animation2:
          prevState.animation2 === "invisible" ||
          prevState.animation2 === closePointingOut
            ? openPointingOut
            : closePointingOut,
        animation3:
          prevState.animation3 === "invisible" ||
          prevState.animation3 === closeTranslateBtn
            ? openTranslateBtn
            : closeTranslateBtn,
        animation4:
          prevState.animation4 === "invisible" ||
          prevState.animation4 === closeLikePostBtn
            ? openLikePostBtn
            : closeLikePostBtn,
        isSelectLanguageOpen: false,
      };
    });
  }

  return (
    <div className="w-[48rem]  flex justify-end items-end p-1 h-[8rem] fixed left-1/2 bottom-1 -translate-x-1/2 bg-sky-700 ">
      <div className="flex gap-1 flex-row-reverse">
        <button
          onClick={openCloseSettings}
          className="bg-neutral-950 rounded-full p-1 w-8 h-8 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fafafa"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>

        <ExpandShrinkBtn animation={isOpen.animation1} />
        <LightDarkBtn animation={isOpen.animation2} />
        <TranslateBtn
          animation={isOpen.animation3}
          isOpen={isOpen.Open}
          isSelectLanguageOpen={isOpen.isSelectLanguageOpen}
          setIsOpen={setIsOpen}
        />
        <LikePostBtn animation={isOpen.animation4} />
      </div>
    </div>
  );
}

export default SettingsBtn;
