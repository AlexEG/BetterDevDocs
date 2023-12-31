import { useState } from "react";

import TranslateBtnFlag from "./TranslateBtnFlag";

function TranslateBtn({
  openCloseAnimation,
  isOpen,
  isSelectLanguageOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  isSelectLanguageOpen: boolean;
  setIsOpen: React.Dispatch<
    React.SetStateAction<{
      Open: boolean;
      openCloseAnimation: string;
      isSelectLanguageOpen: boolean;
    }>
  >;
  openCloseAnimation: string;
}) {
  function openCloseSelectLangBar() {
    setIsOpen((prevState) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...prevState,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        isSelectLanguageOpen: !prevState.isSelectLanguageOpen,
      };
    });
  }

  // english japanese german french
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  function selectLang(lang: string) {
    setSelectedLanguage(lang);
    return;
  }

  return (
    <div className="relative">
      <div
        className={`absolute w-full bg-neutral-950 flex flex-col gap-2 items-center py-2 bottom-8 rounded-t-full  ${
          isSelectLanguageOpen && isOpen
            ? "animate-[openLangContainer_200ms_linear_1_forwards]"
            : "animate-[closeLangContainer_200ms_linear_1_forwards_500ms]"
        }  origin-bottom ${
          openCloseAnimation === "invisible" ? "invisible" : ""
        } `}
      >
        <TranslateBtnFlag
          lang="english"
          selectedLanguage={selectedLanguage}
          selectLang={selectLang}
          isSelectLanguageOpen={isSelectLanguageOpen}
        />
        <TranslateBtnFlag
          lang="japanese"
          selectedLanguage={selectedLanguage}
          selectLang={selectLang}
          isSelectLanguageOpen={isSelectLanguageOpen}
        />
        <TranslateBtnFlag
          lang="german"
          selectedLanguage={selectedLanguage}
          selectLang={selectLang}
          isSelectLanguageOpen={isSelectLanguageOpen}
        />
        <TranslateBtnFlag
          lang="french"
          selectedLanguage={selectedLanguage}
          selectLang={selectLang}
          isSelectLanguageOpen={isSelectLanguageOpen}
        />
      </div>

      {/* Main Btn  */}
      <button
        onClick={openCloseSelectLangBar}
        className={`bg-neutral-950 ${
          isSelectLanguageOpen && isOpen
            ? "rounded-b-full "
            : "rounded-full delay-700 transition-all "
        } w-8 h-8 ${openCloseAnimation} translate-x-[330%]`}
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
