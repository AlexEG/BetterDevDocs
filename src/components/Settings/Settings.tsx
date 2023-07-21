import { useState } from "react";
interface Section {
  isSettingsOpen: boolean;
}
function Settings({ isSettingsOpen }: Section) {
  // OPEN CLOSE CSS ANIMATION
  const openCloseCSS = isSettingsOpen
    ? "animate-[openSettings_1000ms_ease-in-out_1_forwards]"
    : "animate-[closeSettings_1000ms_ease-in-out_1_forwards]";

  return (
    <section
      className={`bg-neutral-700 absolute bottom-10 left-0 w-full h-96  translate-y-full ${openCloseCSS}`}
    >
      <p className="text-center text-neutral-400 font-medium">Settings</p>
    </section>
  );
}
export default Settings;
