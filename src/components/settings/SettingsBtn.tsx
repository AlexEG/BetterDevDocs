import { useState } from "react";
import LikePostBtn from "./LikePostBtn";
import TranslateBtn from "./TranslateBtn";

function SettingsBtn() {
  const [isOpen, setIsOpen] = useState({
    Open: false,
    animation1: "invisible",
    animation2: "invisible",
    animation3: "invisible",
    animation4: "invisible",
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

        <button
          className={`bg-neutral-950 rounded-full p-1 w-8 h-8 ${isOpen.animation1} `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="#fafafa"
            className="w-6 h-6 p-px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
            />
          </svg>
        </button>

        <button
          className={`bg-neutral-950 rounded-full p-1 w-8 h-8 ${isOpen.animation2}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="#fafafa"
            className="w-6 h-6 p-px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </button>

        <TranslateBtn animation={isOpen.animation3} />
        <LikePostBtn animation={isOpen.animation4} />
      </div>
    </div>
  );
}

export default SettingsBtn;
