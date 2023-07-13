import { useState } from "react";
import SectionLink from "./SectionLink";

function Sidebar({ sidebarSections }: any) {
  const [openSection, setOpenSection] = useState("JavaScript");

  const allSidebarElements = sidebarSections.map((section) => (
    <SectionLink
      key={section[0]}
      openSection={openSection}
      setOpenSection={setOpenSection}
      sectionTitle={section[0]}
      subSections={section[1]}
    />
  ));

  // console.log(
  //   "🚀 ~ file: Sidebar.tsx:8 ~ Sidebar ~ allSidebarElements:",
  //   allSidebarElements,
  // );

  return (
    <div className="sidebar-content  pr-1.5 h-[calc(100%-4rem)] fixed overflow-hidden left-4  bg-neutral-950 top-12 bottom-4 rounded-lg">
      <aside className="h-full  w-56 p-2 overflow-y-auto">
        {allSidebarElements}
      </aside>
    </div>
  );
}

export default Sidebar;
