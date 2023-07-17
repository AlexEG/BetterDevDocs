import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import ArticleContent from "../components/ArticleContent";

interface HomeTemplate {
  SidebarData: object;
  LanguageName: string;
  outlet: React.ReactElement | null;
}
function HomeTemplate({ SidebarData, LanguageName, outlet }: HomeTemplate) {
  const [HomeTemplate, setHomeTemplate] = useState({
    NavbarState: {
      SelectedLang: LanguageName,
    },
    SidebarState: {
      isTheSidebarOpen: true,
      DocsSourceContainerChosen: "",
      DocsSourceContainerChosen_SubSection: "",
    },
  });

  // Sidebar State [Start]

  // <OpenCloseSidebarBtn />[Start]
  function openCloseSidebarBtnFunc(): void {
    setHomeTemplate((HomeTemplate) => ({
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
    setHomeTemplate((HomeTemplate) => ({
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
    setHomeTemplate((HomeTemplate) => ({
      ...HomeTemplate,
      SidebarState: {
        ...HomeTemplate.SidebarState,
        DocsSourceContainerChosen_SubSection: subSectionFullTitle,
      },
    }));
  }
  // <SidebarDocsSourceSection />[End]
  // Sidebar State [End]

  return (
    <div className="h-screen overflow-hidden ">
      <Navbar
        NavbarState={HomeTemplate.NavbarState}
        DocsSourceName={HomeTemplate.SidebarState.DocsSourceContainerChosen}
        SectionAndSubSection={
          HomeTemplate.SidebarState.DocsSourceContainerChosen_SubSection
        }
      />
      <Sidebar
        SidebarData={SidebarData}
        SidebarState={HomeTemplate.SidebarState}
        openCloseSidebarBtnFunc={openCloseSidebarBtnFunc}
        chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
        ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
      />

      <main className="bg-neutral-800  h-screen py-16  px-72 flex justify-center overflow-y-auto newuitestsidebar ">
        <ArticleContent contentData={outlet} />
      </main>
    </div>
  );
}

export default HomeTemplate;
