import { useState } from "react";
import SectionLink from "./SectionLink";

function Sidebar() {
  const [openSection, setOpenSection] = useState("JavaScript");

  return (
    <div className="sidebar-content  pr-1.5 h-[calc(100%-4rem)] fixed overflow-hidden left-4  bg-neutral-950 top-12 bottom-4 rounded-lg">
      <aside className="h-full  w-56 p-2 overflow-y-auto">
        <SectionLink
          openSection={openSection}
          setOpenSection={setOpenSection}
          sectionTitle="JavaScript"
          subSections={[
            "Functions",
            "Expressions and operators",
            "Numbers and dates",
            "Text formatting",
            "Regular expressions",
            "Indexed collections",
            "Keyed collections",
            "Working with objects",
          ]}
        />

        <SectionLink
          openSection={openSection}
          setOpenSection={setOpenSection}
          sectionTitle="typescript"
          subSections={[
            "Functions",
            "Expressions and operators",
            "Numbers and dates",
            "Text formatting",
            "Regular expressions",
            "Indexed collections",
            "Keyed collections",
            "Working with objects",
          ]}
        />
      </aside>
    </div>
  );
}

export default Sidebar;
