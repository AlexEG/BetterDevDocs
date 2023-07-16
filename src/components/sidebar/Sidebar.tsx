import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarDocsSourceContainer from "./SidebarDocsSourceContainer";
import OpenCloseSidebarBtn from "./OpenCloseSidebarBtn";

function Sidebar({ SidebarData }: { SidebarData: object }) {
  const [SidebarState, setSidebarState] = useState({
    isTheSidebarOpen: true,
    DocsSourceContainerChosen: "",
    DocsSourceContainerChosen_SubSection: "",
  });

  // <OpenCloseSidebarBtn />[Start]
  const isTheSidebarOpen_CSS = SidebarState.isTheSidebarOpen ? "w-60" : "w-10";
  function openCloseSidebarBtnFunc(): void {
    setSidebarState((prevSidebarState) => ({
      ...prevSidebarState,
      isTheSidebarOpen: !prevSidebarState.isTheSidebarOpen,
    }));
  }
  // <OpenCloseSidebarBtn />[End]

  // <SidebarDocsSourceContainer />[Start]
  function chooseDocsSourceContainer(DocsSourceName: string): void {
    setSidebarState((prevSidebarState) => ({
      ...prevSidebarState,
      DocsSourceContainerChosen: DocsSourceName,
    }));
  }
  // <SidebarDocsSourceContainer />[End]

  // <SidebarDocsSourceSection />[Start]
  function whatSubSectionIsOpenFunc(subSectionFullTitle: string): void {
    setSidebarState((prevSidebarState) => ({
      ...prevSidebarState,
      DocsSourceContainerChosen_SubSection: subSectionFullTitle,
    }));
    // console.log(SidebarState);
  }
  // <SidebarDocsSourceSection />[End]

  // <SidebarDocsSourceContainer/> Components [Start]
  let components = [];
  for (const key in SidebarData) {
    // console.log(key);
    // console.log(SidebarData[key]);
    components.push(
      <SidebarDocsSourceContainer
        key={key}
        DocsSourceName={key}
        isDocsSourceContainerChosen={
          SidebarState.DocsSourceContainerChosen === key
        }
        chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
        whatSubSectionIsOpen={SidebarState.DocsSourceContainerChosen_SubSection}
        ChangeSubSectionIsOpen={(e) => whatSubSectionIsOpenFunc(e)}
        sectionsTitleAndSubsections={SidebarData[key]}
      />,
    );
  }
  // <SidebarDocsSourceContainer/> Components [End]

  return (
    <aside
      className={`bg-neutral-950 h-[calc(100%-2.5rem)] fixed top-10 left-0 after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-[1.25rem] after:border-r-transparent after:border-b-transparent after:translate-x-full after:border-neutral-950 pt-10 ${isTheSidebarOpen_CSS}`}
    >
      <OpenCloseSidebarBtn
        isTheSidebarOpen={SidebarState.isTheSidebarOpen}
        SidebarBtnFunc={openCloseSidebarBtnFunc}
      />
      {/* ------------------------- */}

      {SidebarState.isTheSidebarOpen && (
        <>
          <div className="sidebar-scrollbar overflow-auto h-[calc(100%-2.5rem)]">
            {components}
          </div>

          <SidebarMenu />
        </>
      )}
    </aside>
  );
}

export default Sidebar;
