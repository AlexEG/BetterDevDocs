import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import ArticleContent from "../components/ArticleContent";

import TailwindCSSSidebarData from "../DATA/TailwindCSS/TailwindCSSSidebarData";
import { Outlet } from "react-router-dom";

function TailwindCSSHome() {
  const [TailwindCSSHomeState, setTailwindCSSHomeState] = useState({
    NavbarState: {
      SelectedLang: "TailwindCSS",
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
    setTailwindCSSHomeState((TailwindCSSHomeState) => ({
      ...TailwindCSSHomeState,
      SidebarState: {
        ...TailwindCSSHomeState.SidebarState,
        isTheSidebarOpen: !TailwindCSSHomeState.SidebarState.isTheSidebarOpen,
      },
    }));
  }
  // <OpenCloseSidebarBtn />[End]

  // <SidebarDocsSourceContainer />[Start]
  function chooseDocsSourceContainer(DocsSourceName: string): void {
    setTailwindCSSHomeState((TailwindCSSHomeState) => ({
      ...TailwindCSSHomeState,
      SidebarState: {
        ...TailwindCSSHomeState.SidebarState,
        DocsSourceContainerChosen: DocsSourceName,
        DocsSourceContainerChosen_SubSection: "",
      },
    }));
  }
  // <SidebarDocsSourceContainer />[End]

  // <SidebarDocsSourceSection />[Start]
  function ChangeSubSectionIsOpen(subSectionFullTitle: string): void {
    setTailwindCSSHomeState((TailwindCSSHomeState) => ({
      ...TailwindCSSHomeState,
      SidebarState: {
        ...TailwindCSSHomeState.SidebarState,
        DocsSourceContainerChosen_SubSection: subSectionFullTitle,
      },
    }));
  }
  // <SidebarDocsSourceSection />[End]
  // Sidebar State [End]

  return (
    <div className="h-screen overflow-hidden ">
      <Navbar
        NavbarState={TailwindCSSHomeState.NavbarState}
        DocsSourceName={
          TailwindCSSHomeState.SidebarState.DocsSourceContainerChosen
        }
        SectionAndSubSection={
          TailwindCSSHomeState.SidebarState.DocsSourceContainerChosen_SubSection
        }
      />
      <Sidebar
        SidebarData={TailwindCSSSidebarData}
        SidebarState={TailwindCSSHomeState.SidebarState}
        openCloseSidebarBtnFunc={openCloseSidebarBtnFunc}
        chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
        ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
      />

      <main className="bg-neutral-800  h-screen py-16  px-72 flex justify-center overflow-y-auto newuitestsidebar ">
        <ArticleContent contentData={<Outlet />} />
      </main>
    </div>
  );
}

export default TailwindCSSHome;
