import SidebarMenu from "../SidebarMenu/SidebarMenu";
import SidebarDocsSourceContainer from "./SidebarDocsSourceContainer";
import OpenCloseSidebarBtn from "./OpenCloseSidebarBtn";
import Settings from "../Settings/Settings";

interface Sidebar {
  SidebarData: object;
  SidebarState: {
    isTheSidebarOpen: boolean;
    DocsSourceContainerChosen: string;
    DocsSourceContainerChosen_SubSection: string;
    isSettingsOpen: boolean;
  };
  openCloseSidebarBtnFunc(): void;
  chooseDocsSourceContainer(DocsSourceName: string): void;
  ChangeSubSectionIsOpen(subSectionFullTitle: string): void;
  OpenCloseSettings(): void;
}

function Sidebar({
  SidebarData,
  SidebarState,
  openCloseSidebarBtnFunc,
  chooseDocsSourceContainer,
  ChangeSubSectionIsOpen,
  OpenCloseSettings,
}: Sidebar) {
  const isTheSidebarOpen_CSS = SidebarState.isTheSidebarOpen ? "w-60" : "w-10";

  // <SidebarDocsSourceContainer/> Components [Start]

  let components = [];
  for (const key in SidebarData) {
    components.push(
      <SidebarDocsSourceContainer
        key={key}
        DocsSourceName={key}
        isDocsSourceContainerChosen={
          SidebarState.DocsSourceContainerChosen === key
        }
        chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
        whatSubSectionIsOpen={SidebarState.DocsSourceContainerChosen_SubSection}
        ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
        sectionsTitleAndSubsections={SidebarData[key]}
      />,
    );
  }
  // <SidebarDocsSourceContainer/> Components [End]

  return (
    <aside
      className={`bg-neutral-950 h-[calc(100%-2.5rem)] fixed top-10 left-0 after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-[1.25rem] after:border-r-transparent after:border-b-transparent after:translate-x-full after:border-neutral-950 pt-10 transition-all delay-75 duration-500 z-10 ${isTheSidebarOpen_CSS}`}
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

          <Settings isSettingsOpen={SidebarState.isSettingsOpen} />
          <SidebarMenu OpenCloseSettings={OpenCloseSettings} />
        </>
      )}
    </aside>
  );
}

export default Sidebar;
