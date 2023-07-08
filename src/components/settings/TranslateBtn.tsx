import { useState } from "react";

import TranslateBtnFlag from "./TranslateBtnFlag";

function TranslateBtn() {
  const [isSelectBarOpen, setIsSelecBarOpen] = useState(false);

  function openCloseSelectLangBar() {
    setIsSelecBarOpen((prev) => !prev);
  }
  // english japanese german french

  const [selectedLanguage, setSelectedLanguage] = useState("english");

  function selectLang(lang: string) {
    setSelectedLanguage(lang);
    return;
  }

  return (
    <div className="relative">
      {isSelectBarOpen && (
        <div className="absolute w-full bg-neutral-950 flex flex-col gap-2 items-center py-2 bottom-8 rounded-t-full">
          <TranslateBtnFlag
            lang="english"
            selectedLanguage={selectedLanguage}
            selectLang={selectLang}
          />
          <TranslateBtnFlag
            lang="japanese"
            selectedLanguage={selectedLanguage}
            selectLang={selectLang}
          />
          <TranslateBtnFlag
            lang="german"
            selectedLanguage={selectedLanguage}
            selectLang={selectLang}
          />
          <TranslateBtnFlag
            lang="french"
            selectedLanguage={selectedLanguage}
            selectLang={selectLang}
          />
        </div>
      )}

      {/* Main Btn  */}
      <button
        onClick={openCloseSelectLangBar}
        className={`bg-neutral-950 ${
          isSelectBarOpen ? " rounded-b-full" : "rounded-full"
        } w-8 h-8 `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.3}
          stroke="#fafafa"
          className="w-6 h-5 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
      </button>
    </div>
  );
}

export default TranslateBtn;
