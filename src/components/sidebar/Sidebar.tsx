import { useState } from "react";
import SectionLink from "./SectionLink";

function Sidebar({ SidebarDATA, setOpenSec }: { SidebarDATA: any }) {
  const [openSection, setOpenSection] = useState("JavaScript");

  const allSidebarElements = SidebarDATA.map((secTitle) => (
    <SectionLink
      key={secTitle[0]}
      openSection={openSection}
      setOpenSection={setOpenSection}
      sectionTitle={secTitle[0]}
      subSections={secTitle[1]}
      setOpenSec={setOpenSec}
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
