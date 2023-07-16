import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ArticleContent from "../../components/ArticleContent/ArticleContent";

import JavaScriptSidebarData from "../../DATA/JavaScriptSidebarData";
import JavaScriptArticleContentData from "../../DATA/JavaScriptArticleContentData";

function JSHome() {
  const [JSHomeState, setJSHomeState] = useState({
    NavbarState: {
      SelectedLang: "JavaScript",
    },
    SidebarState: {
      isTheSidebarOpen: true,
      DocsSourceContainerChosen: "",
      DocsSourceContainerChosen_SubSection: "",
    },
  });

  // Navbar State [Start]
  function ChangeSelectedLang(LangName: string): void {
    setJSHomeState((JSHomeState) => {
      return {
        ...JSHomeState,
        NavbarState: { ...JSHomeState.NavbarState, SelectedLang: LangName },
      };
    });
  }
  // Navbar State [End]
  // Sidebar State [Start]

  // <OpenCloseSidebarBtn />[Start]
  function openCloseSidebarBtnFunc(): void {
    setJSHomeState((JSHomeState) => ({
      ...JSHomeState,
      SidebarState: {
        ...JSHomeState.SidebarState,
        isTheSidebarOpen: !JSHomeState.SidebarState.isTheSidebarOpen,
      },
    }));
  }
  // <OpenCloseSidebarBtn />[End]

  // <SidebarDocsSourceContainer />[Start]
  function chooseDocsSourceContainer(DocsSourceName: string): void {
    setJSHomeState((JSHomeState) => ({
      ...JSHomeState,
      SidebarState: {
        ...JSHomeState.SidebarState,
        DocsSourceContainerChosen: DocsSourceName,
        DocsSourceContainerChosen_SubSection: "",
      },
    }));
  }
  // <SidebarDocsSourceContainer />[End]

  // <SidebarDocsSourceSection />[Start]
  function ChangeSubSectionIsOpen(subSectionFullTitle: string): void {
    setJSHomeState((JSHomeState) => ({
      ...JSHomeState,
      SidebarState: {
        ...JSHomeState.SidebarState,
        DocsSourceContainerChosen_SubSection: subSectionFullTitle,
      },
    }));
  }
  // <SidebarDocsSourceSection />[End]
  // Sidebar State [End]

  return (
    <div className="h-screen overflow-hidden ">
      <Navbar
        NavbarState={JSHomeState.NavbarState}
        ChangeSelectedLang={(e) => ChangeSelectedLang(e)}
        DocsSourceName={JSHomeState.SidebarState.DocsSourceContainerChosen}
        SectionAndSubSection={
          JSHomeState.SidebarState.DocsSourceContainerChosen_SubSection
        }
      />
      <Sidebar
        SidebarData={JavaScriptSidebarData}
        SidebarState={JSHomeState.SidebarState}
        openCloseSidebarBtnFunc={openCloseSidebarBtnFunc}
        chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
        ChangeSubSectionIsOpen={(e) => ChangeSubSectionIsOpen(e)}
      />

      <main className="bg-neutral-800  h-screen py-16  px-72 flex justify-center overflow-y-auto newuitestsidebar ">
        <ArticleContent
          DocsSourceName={JSHomeState.SidebarState.DocsSourceContainerChosen}
          SectionAndSubSection={
            JSHomeState.SidebarState.DocsSourceContainerChosen_SubSection
          }
          contentData={JavaScriptArticleContentData}
        />
      </main>
    </div>
  );
}

export default JSHome;
