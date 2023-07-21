import { useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import ArticleContent from "./ArticleContent";

interface HomeTemplate {
  SidebarData: object;
  LanguageName: string;
  outlet: React.ReactElement | null;
}
function HomeTemplate({ SidebarData, LanguageName, outlet }: HomeTemplate) {
  const [HomeTemplateState, setHomeTemplateState] = useState({
    NavbarState: {
      SelectedLang: LanguageName,
    },
    SidebarState: {
      isTheSidebarOpen: true,
      DocsSourceContainerChosen: "",
      DocsSourceContainerChosen_SubSection: "",
      isSettingsOpen: false,
      isSharePostOpen: false,
    },
  });

  // Sidebar State [Start]

  // <OpenCloseSidebarBtn />[Start]
  function openCloseSidebarBtnFunc(): void {
    setHomeTemplateState((HomeTemplate) => ({
      ...HomeTemplate,
      SidebarState: {
        ...HomeTemplate.SidebarState,
        isTheSidebarOpen: !HomeTemplate.SidebarState.isTheSidebarOpen,
      },
    }));
  }
  // <OpenCloseSidebarBtn />[End]

  // <SidebarDocsSourceContainer />[Start]
  function chooseDocsSourceContainer(DocsSourceName: string): void {
    setHomeTemplateState((HomeTemplate) => ({
      ...HomeTemplate,
      SidebarState: {
        ...HomeTemplate.SidebarState,
        DocsSourceContainerChosen: DocsSourceName,
        DocsSourceContainerChosen_SubSection: "",
      },
    }));
  }
  // <SidebarDocsSourceContainer />[End]

  // <SidebarDocsSourceSection />[Start]
  function ChangeSubSectionIsOpen(subSectionFullTitle: string): void {
    setHomeTemplateState((HomeTemplate) => ({
      ...HomeTemplate,
      SidebarState: {
        ...HomeTemplate.SidebarState,
        DocsSourceContainerChosen_SubSection: subSectionFullTitle,
      },
    }));
  }
  // <SidebarDocsSourceSection />[End]

  // Open Close <Settings/> [Start]
  function OpenCloseSettings() {
    setHomeTemplateState((HomeTemplate) => ({
      ...HomeTemplate,
      SidebarState: {
        ...HomeTemplate.SidebarState,
        isSettingsOpen: !HomeTemplate.SidebarState.isSettingsOpen,
      },
    }));
  }
  function OpenCloseSharePost() {
    setHomeTemplateState((HomeTemplate) => ({
      ...HomeTemplate,
      SidebarState: {
        ...HomeTemplate.SidebarState,
        isSharePostOpen: !HomeTemplate.SidebarState.isSharePostOpen,
      },
    }));
  }
  // Open Close <Settings/> [End]
  // Sidebar State [End]

  return (
    <div className="h-screen overflow-hidden ">
      <Navbar
        NavbarState={HomeTemplateState.NavbarState}
        DocsSourceName={
          HomeTemplateState.SidebarState.DocsSourceContainerChosen
        }
        SectionAndSubSection={
          HomeTemplateState.SidebarState.DocsSourceContainerChosen_SubSection
        }
      />
      <Sidebar
        SidebarData={SidebarData}
        SidebarState={HomeTemplateState.SidebarState}
        openCloseSidebarBtnFunc={openCloseSidebarBtnFunc}
        chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
        ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
        OpenCloseSettings={OpenCloseSettings}
        OpenCloseSharePost={OpenCloseSharePost}
      />

      <main
        className={`bg-neutral-800 h-screen pt-10 pb-20 ${
          HomeTemplateState.SidebarState.isTheSidebarOpen ? " pl-60 " : "pl-10 "
        } flex justify-center overflow-y-auto newuitestsidebar `}
      >
        <ArticleContent contentData={outlet} />
      </main>
    </div>
  );
}

export default HomeTemplate;
