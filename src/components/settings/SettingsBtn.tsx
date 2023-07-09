import { useState } from "react";
import LikePostBtn from "./LikePostBtn";
import TranslateBtn from "./TranslateBtn";
import LightDarkBtn from "./LightDarkBtn";
import ExpandShrinkBtn from "./ExpandShrinkBtn";

function SettingsBtn({
  setPostState,
}: {
  setPostState: React.Dispatch<
    React.SetStateAction<{
      DarkMode: boolean;
      isExpand: boolean;
    }>
  >;
}) {
  const [isOpen, setIsOpen] = useState({
    Open: false,
    openCloseAnimation: "invisible",
    isSelectLanguageOpen: false,
  });

  const openSettingsBar =
    "animate-[openSettingsBar_500ms_ease-in-out_1_forwards]";
  const closeSettingsBar =
    "animate-[closeSettingsBar_500ms_ease-in-out_1_forwards_reverse]";

  function openCloseSettings() {
    setIsOpen((prevState) => {
      return {
        ...prevState,
        Open: !prevState.Open,
        isSelectLanguageOpen: false,
        openCloseAnimation: isOpen.Open ? closeSettingsBar : openSettingsBar,
      };
    });
  }

  return (
    <div className="flex justify-end items-end sticky bottom-1">
      <div className="flex gap-1 flex-row-reverse">
        <button
          onClick={openCloseSettings}
          className="bg-neutral-950 rounded-full p-1 w-8 h-8 z-10"
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

        <ExpandShrinkBtn
          setPostState={setPostState}
          openCloseAnimation={isOpen.openCloseAnimation}
        />

        <LightDarkBtn
          setPostState={setPostState}
          openCloseAnimation={isOpen.openCloseAnimation}
        />

        <TranslateBtn
          openCloseAnimation={isOpen.openCloseAnimation}
          isOpen={isOpen.Open}
          isSelectLanguageOpen={isOpen.isSelectLanguageOpen}
          setIsOpen={setIsOpen}
        />

        <LikePostBtn openCloseAnimation={isOpen.openCloseAnimation} />
      </div>
    </div>
  );
}

export default SettingsBtn;
