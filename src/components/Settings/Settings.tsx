import { useState } from "react";
import SettingsCheckbox from "./SettingsCheckbox";
import SettingsSelect from "./SettingsSelect";
import SettingsCheckboxSVG from "./SettingsCheckboxSVG";
interface Section {
  isSettingsOpen: boolean;
}

function Settings({ isSettingsOpen }: Section) {
  const [SettingsState, setSettingsState] = useState({
    pageNavbarEnable: false,
    appTheme: "theme1",
    isReadingSettingsMenuOpen: true,
    addToFavoriteEnable: true,
    translateArticleEnable: true,
    lightDarkArticleEnable: false,
    expandShrinkArticleEnable: true,
    translateArticleLanguages: {
      english: true,
      japanese: false,
      german: false,
      french: true,
    },
  });
  // console.log(SettingsState.translateArticleLanguages);

  function changeSettings(event: any) {
    // console.log(event.target);
    const { name, value, type, checked } = event.target;
    setSettingsState((prevSettingsState) => {
      return {
        ...prevSettingsState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function changeSettings_translateArticleLanguages(event: any) {
    // console.log(event.target);
    const { name, checked } = event.target;
    setSettingsState((prevSettingsState) => {
      return {
        ...prevSettingsState,
        translateArticleLanguages: {
          ...prevSettingsState.translateArticleLanguages,
          [name]: checked,
        },
      };
    });
  }

  // OPEN CLOSE CSS ANIMATION
  const [open, close] = [
    "animate-[openSettings_1000ms_ease-in-out_1_forwards]",
    "animate-[closeSettings_1000ms_ease-in-out_1_forwards]",
  ];
  const openCloseCSS = isSettingsOpen ? open : close;

  return (
    <section
      className={`bg-neutral-700 absolute bottom-10 left-0 w-full h-96  translate-y-full ${openCloseCSS} `}
    >
      <p className="text-center text-neutral-400 font-medium my-1">Settings</p>

      <SettingsCheckbox
        label="Page Navbar Enable"
        name="pageNavbarEnable"
        func={changeSettings}
        state={SettingsState.pageNavbarEnable}
      />

      <SettingsSelect
        label="Theme"
        name="appTheme"
        func={changeSettings}
        state={SettingsState.appTheme}
        options={["Theme 1", "Theme 2", "Theme 3"]}
      />

      <p className="text-center text-xs mt-3 mb-1 text-neutral-200">
        -- Reading Settings Menu --
      </p>

      <SettingsCheckbox
        label="Reading Settings Menu"
        name="isReadingSettingsMenuOpen"
        func={changeSettings}
        state={SettingsState.isReadingSettingsMenuOpen}
      />

      {/* ------- */}
      <div
        className={
          SettingsState.isReadingSettingsMenuOpen
            ? ""
            : "opacity-25 after:w-full after:h-full after:absolute after:top-0 after:left-0 relative z-10"
        }
      >
        <div className="flex gap-2 justify-between pr-2 mb-0.5">
          <SettingsCheckbox
            label="Add To Favorite"
            name="addToFavoriteEnable"
            func={changeSettings}
            state={SettingsState.addToFavoriteEnable}
          />
          <SettingsCheckboxSVG
            path={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            }
          />
        </div>

        <div className="flex gap-2 justify-between pr-2 mb-0.5">
          <SettingsCheckbox
            label="Translate Article"
            name="lightDarkArticleEnable"
            func={changeSettings}
            state={SettingsState.lightDarkArticleEnable}
          />
          <SettingsCheckboxSVG
            path={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            }
          />
        </div>
        <div className="flex gap-2 justify-between pr-2 mb-0.5">
          <SettingsCheckbox
            label="Light/Dark Article"
            name="translateArticleEnable"
            func={changeSettings}
            state={SettingsState.translateArticleEnable}
          />
          <SettingsCheckboxSVG
            path={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            }
          />
        </div>
        <div className="flex gap-2 justify-between pr-2 mb-0.5">
          <SettingsCheckbox
            label="Expand/Shrink Article"
            name="expandShrinkArticle"
            func={changeSettings}
            state={SettingsState.expandShrinkArticleEnable}
          />
          <SettingsCheckboxSVG
            path={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            }
          />
        </div>
        <p className="text-center text-xs mb-2  text-neutral-200">
          -- Languages --
        </p>
        <div className="grid grid-cols-2">
          <SettingsCheckbox
            label="English"
            name="english"
            func={changeSettings_translateArticleLanguages}
            state={SettingsState.translateArticleLanguages.english}
          />
          <SettingsCheckbox
            label="Japanese"
            name="japanese"
            func={changeSettings_translateArticleLanguages}
            state={SettingsState.translateArticleLanguages.japanese}
          />
          <SettingsCheckbox
            label="German"
            name="german"
            func={changeSettings_translateArticleLanguages}
            state={SettingsState.translateArticleLanguages.german}
          />
          <SettingsCheckbox
            label="French"
            name="french"
            func={changeSettings_translateArticleLanguages}
            state={SettingsState.translateArticleLanguages.french}
          />
        </div>
      </div>
    </section>
  );
}
export default Settings;
