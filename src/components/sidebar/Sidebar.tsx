import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarDocsSourceContainer from "./SidebarDocsSourceContainer";
import OpenCloseSidebarBtn from "./OpenCloseSidebarBtn";

function Sidebar() {
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

  // DATA [Start]
  const dataMDN = {
    "JavaScript first steps": [
      "JavaScript First Steps",
      "What is JavaScript?",
      "A first splash into JavaScript",
      "What went wrong? Troubleshooting JavaScript",
      "Storing the information you need Variables",
      "Basic math in JavaScript numbers and operators",
      "Handling text strings in JavaScript",
      "Useful string methods",
      "Arrays",
      "Silly story generator",
    ],
    "JavaScript building blocks": [
      "JavaScript building blocks",
      "Making decisions in your code conditionals",
      "Looping code",
      "Functions reusable blocks of code",
      "Build your own function",
      "Function return values",
      "Introduction to events",
      "Image gallery",
    ],
    "Introducing JavaScript objects": [
      "Introducing JavaScript objects",
      "JavaScript object basics",
      "Object prototypes",
      "Object-oriented programming",
      "Classes in JavaScript",
      "Working with JSON",
      "Object building practice",
      "Adding features to our bouncing balls demo",
    ],
  };

  const dataW3School = {
    "JS Tutorial": [
      "JS Home",
      "JavaScript Introduction",
      "JavaScript Where To",
      "JavaScript Output",
      "JavaScript Statements",
      "JavaScript Syntax",
      "JavaScript Comments",
      "...",
    ],
    "JS Versions": [
      "JavaScript ES5",
      "Javascript ES6",
      "ECMAScript 2016",
      "...",
      "ECMAScript 2021",
    ],
  };
  // DATA [End]

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
            <SidebarDocsSourceContainer
              DocsSourceName="MDN"
              isDocsSourceContainerChosen={
                SidebarState.DocsSourceContainerChosen === "MDN"
              }
              chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
              whatSubSectionIsOpen={
                SidebarState.DocsSourceContainerChosen_SubSection
              }
              ChangeSubSectionIsOpen={(e) => whatSubSectionIsOpenFunc(e)}
              sectionsTitleAndSubsections={dataMDN}
            />

            <SidebarDocsSourceContainer
              DocsSourceName="W3 School"
              isDocsSourceContainerChosen={
                SidebarState.DocsSourceContainerChosen === "W3 School"
              }
              chooseDocsSourceContainer={(e) => chooseDocsSourceContainer(e)}
              whatSubSectionIsOpen={
                SidebarState.DocsSourceContainerChosen_SubSection
              }
              ChangeSubSectionIsOpen={(e) => whatSubSectionIsOpenFunc(e)}
              sectionsTitleAndSubsections={dataW3School}
            />
          </div>

          <SidebarMenu />
        </>
      )}
    </aside>
  );
}

export default Sidebar;
