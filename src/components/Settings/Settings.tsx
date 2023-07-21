interface Section {
  isSettingsOpen: boolean;
}
function Settings({ isSettingsOpen }: Section) {
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

      <div className="px-2 text-neutral-300">
        <input
          className="mr-2 accent-neutral-950 "
          type="checkbox"
          id="page-navbar"
          // checked={formData.isFriendly}
          // onChange={handleChange}
        />
        <label htmlFor="page-navbar" className="select-none">
          Page Navbar Enable
        </label>
      </div>

      <br />
      <div className="px-2">
        <select
          id="apptheme"
          // value={formData.favColor}
          // onChange={handleChange}
          name="app-theme"
          className=""
        >
          <option value="theme1"> Theme 1 </option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
        <label
          htmlFor="app-theme"
          className="select-none ml-2 text-neutral-300"
        >
          Theme
        </label>
      </div>
    </section>
  );
}
export default Settings;
